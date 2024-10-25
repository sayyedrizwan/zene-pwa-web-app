import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import { shuffle } from "../utils/Utils";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const name = url.searchParams.get("name") ?? "";

  if (name.length < 3) return json([]);

  const lists : WallpaperData[] = []

  const wallpaperCave = await WallzWallpaperService.instance.wallpaperCaveSearch(name)
  wallpaperCave.map((w) => (!lists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail)) ? lists.push(w) : null);

  const list = await WallzWallpaperService.instance.searchPeakpx(name)
  list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);

  const shuffleOne = shuffle(lists)
  const shuffleTwo = shuffle(shuffleOne)
  const shuffleThree = shuffle(shuffleTwo)

  return json(shuffle(shuffleThree));
}
