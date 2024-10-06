import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const lists : WallpaperData[] = []

  await Promise.all(
    Array.from({ length: 4 }, (_, index) => index).map(async (n) => {
      if(n == 0) {
        const list = await WallzWallpaperService.instance.latestWallpaperflare()
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);
      } else if(n == 1) {
        const list = await WallzWallpaperService.instance.latestWallpaperCave()
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);
      } else if(n == 2) {
        const list = await WallzWallpaperService.instance.latestWallpaperCom()
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);
      } else if(n == 3) {
        const list = await WallzWallpaperService.instance.latestPeakpx()
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);
      }
    })
  )
  return json(lists);
}
