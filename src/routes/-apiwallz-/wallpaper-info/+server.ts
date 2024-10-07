import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import { shuffle } from "../utils/Utils";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const path = url.searchParams.get("path") ?? "";

  if (path.length < 3) return json([]);

  let wallpaper : String | undefined = undefined 

  if(path.includes("wallpapers.com")) wallpaper = await WallzWallpaperService.instance.wallpaperComInfo(path)
  else if(path.includes("wallpaperflare.com")) wallpaper = await WallzWallpaperService.instance.wallpaperflareInfo(path)
  
  return json(wallpaper == undefined ? {} : wallpaper);
}
