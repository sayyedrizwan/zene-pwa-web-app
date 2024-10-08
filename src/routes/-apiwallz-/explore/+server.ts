import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";

export async function POST({ request }) {
  if (!verifyHeader(request)) return json([]);

  const wholeLists : WallpaperData[] = []

  const info = [
    "spiderman", "movies", "thor", "women", "star wars", "baby", "dress", "music", "photography", "Paul Wesley",
    "nature", "ninja", "god", "dragon ball z", "star", "fight", "anime", "quotes", "cartoon", "iron man"
  ]
  await Promise.all(info.map(async (n) => {
    const flare = await WallzWallpaperService.instance.WallpaperflareSearch(n)
    flare.map((w) => (!wholeLists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail)) ? wholeLists.push(w) : null);

    const cave = await WallzWallpaperService.instance.WallpapercaveSearch(n)
    cave.map((w) => (!wholeLists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail)) ? wholeLists.push(w) : null);

    const wallpapercom = await WallzWallpaperService.instance.WallpaperComSearch(n)
    cave.map((w) => (!wholeLists.some((wholeLists) => wholeLists.thumbnail == w.thumbnail)) ? wholeLists.push(w) : null);
    })
  )

  return json(wholeLists);
}
