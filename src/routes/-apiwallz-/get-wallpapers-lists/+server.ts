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

  await Promise.all(
    Array.from({ length: 3 }, (_, index) => index).map(async (n) => {
      if(n == 0) {
        const list = await WallzWallpaperService.instance.WallpaperflareSearch(name)
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);
      } else if(n == 1) {
        const list = await WallzWallpaperService.instance.WallpapercaveSearch(name)
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);
      } else if(n == 2) {
        const list = await WallzWallpaperService.instance.WallpaperComSearch(name)
        list.map((w) => (!lists.some((item) => item.thumbnail == w.thumbnail)) ? lists.push(w) : null);
      }
    })
  )

  const shuffleOne = shuffle(lists)
  const shuffleTwo = shuffle(shuffleOne)
  const shuffleThree = shuffle(shuffleTwo)

  return json(shuffle(shuffleThree));
}
