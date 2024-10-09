import { json } from "@sveltejs/kit";
import { delay, verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { shuffle } from "../utils/Utils";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const lists: WallpaperData[] = [];

  await Promise.all(
    [1, 2, 3].map(async (id) => {
      if (id == 1) {
        const listCave = await WallzWallpaperService.instance.latestWallpaperCave();
        listCave.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail) ? lists.push(w) : null));
      } else if (id == 2) {
        await delay(600)
        const listCave = await WallzWallpaperService.instance.featuredWallpaperCave();
        listCave.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail) ? lists.push(w) : null));
      } else if (id == 3) {
        const list = await WallzWallpaperService.instance.latestPeakpx();
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail) ? lists.push(w) : null));
      }
    })
  );

  return json(shuffle(lists));
}
