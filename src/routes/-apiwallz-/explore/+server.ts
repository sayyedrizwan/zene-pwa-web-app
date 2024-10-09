import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { shuffle } from "../utils/Utils";

export async function GET({ request }) {
  if (!verifyHeader(request)) return json([]);

  const wholeLists: WallpaperData[] = [];

  const info = ["spiderman", "movies", "thor", "women", "star wars", "baby", "dress", "music", "photography", "Paul Wesley", "nature", "ninja", "god", "dragon ball z", "star", "fight", "anime", "quotes", "cartoon", "iron man"];

  await Promise.all(
    info.map(async (n) => {
      const peakPx = await WallzWallpaperService.instance.searchPeakpx(n);
      peakPx.map((w) => (!wholeLists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail) ? wholeLists.push(w) : null));

      const wallpaperCave = await WallzWallpaperService.instance.wallpaperCaveSearch(n);
      wallpaperCave.map((w) => (!wholeLists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail) ? wholeLists.push(w) : null));
    })
  );
  const shuffleOne = shuffle(wholeLists);
  const shuffleTwo = shuffle(shuffleOne);
  const shuffleThree = shuffle(shuffleTwo);
  return json(shuffleThree);
}
