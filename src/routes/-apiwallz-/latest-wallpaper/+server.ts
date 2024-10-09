import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { shuffle } from "../utils/Utils";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const lists: WallpaperData[] = [];

  const listCave = await WallzWallpaperService.instance.latestWallpaperCave();
  listCave.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail) ? lists.push(w) : null));

  const list = await WallzWallpaperService.instance.latestPeakpx();
  list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail) ? lists.push(w) : null));

  return json(shuffle(lists));
}
