import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { shuffle } from "../utils/Utils";
import { blacklist, containsBlacklistWord, doArrayContactSameWords, substringBeforeLast } from "../../-api-/utils/extension/String";
import { WallzMySqlService } from "../WallzApiService/MySQLService/WallzMySqlService";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);
  const email = url.searchParams.get("email") ?? "";

  const lists = (email.includes("@") && email.length > 3) ? await WallzMySqlService.instance.getUserInterests(email) : []
  
  const wholeLists: WallpaperData[] = [];

  const info = lists.length > 0 ? lists : ["Aesthetic", "Movies", "Halloween", "Women", "Star Wars", "Universe", "Photography", "Nature", "God", "Mountains", "Fight", "Anime", "Quotes", "Cartoon"];

  await Promise.all(
    info.map(async (n) => {
      const peakPx = await WallzWallpaperService.instance.searchPeakpx(n.toLocaleLowerCase());
      peakPx.map((w) => (!wholeLists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail) ? wholeLists.push(w) : null));

      const wallpaperCave = await WallzWallpaperService.instance.wallpaperCaveSearch(n.toLocaleLowerCase());
      wallpaperCave.map((w) => (!wholeLists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail) ? wholeLists.push(w) : null));
    })
  );
  const shuffleOne = shuffle(wholeLists);
  const shuffleTwo = shuffle(shuffleOne);
  const shuffleThree = shuffle(shuffleTwo);
  return json(shuffleThree);
}

export async function POST({ request }) {
  if (!verifyHeader(request)) return json({ status: "error" });
  const body = await request.json();
  const email = body.email as string;
  const name = body.name as string;
  const desc = body.desc as string;
  const thumbnail = body.thumbnail as string;

  if (!email.includes("@") && email.length < 3) return json({ status: "error" });

  let savedText: String[] = [];
  let cleanedText = name.replace(/\bwallpaper\b/gi, "").replaceAll("...", "").trim();
  if (cleanedText.includes(",")) {
    const listsData: String[] = [];
    cleanedText.split(",").map((v) => (containsBlacklistWord(v) ? null : listsData.push(v)));

    listsData.map((v, i) => (i <= 2 ? savedText.push(v) : null));
  } else {
    if (blacklist.some((word) => cleanedText.toLowerCase().includes(word.toLowerCase()))) {
      cleanedText.split(" ").map((v) => (containsBlacklistWord(v) ? null : savedText.push(v)));
    } else {
      savedText.push(cleanedText);
    }
  }

  if (savedText.length <= 0) return json({ status: "success" });
  const lists = await WallzMySqlService.instance.getUserInterests(email);

  const exploreFinalLists : String[] = []

  savedText.map((v) => exploreFinalLists.push(v))
  lists.map((v, i)=> i < 19 ? (doArrayContactSameWords(v.toString(), exploreFinalLists) ? null : exploreFinalLists.push(v)) : null)

  const listsFinal = exploreFinalLists.filter(item => item.trim().length >= 2)

  await WallzMySqlService.instance.updateExploreData(email, listsFinal);

  return json({ status: "success" });
}
