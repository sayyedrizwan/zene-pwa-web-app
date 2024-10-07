import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import { WallzSearch } from "../WallzApiService/WallzBingService/model/WallzSearch";
import { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const path = url.searchParams.get("path") ?? "";

  if (path.length < 3) return json([]);

  let wallpaper : String | undefined = undefined 

  if(path.includes("wallpapers.com")) wallpaper = await WallzWallpaperService.instance.wallpaperComInfo(path)
  else if(path.includes("wallpaperflare.com")) wallpaper = await WallzWallpaperService.instance.wallpaperflareInfo(path)
  else if(path.includes("wallpapercave.com")) wallpaper = await WallzWallpaperService.instance.wallpaperCaveInfo(path)
  
  return json(wallpaper == undefined ? {} : new WallpaperData("", "", wallpaper, ""));
}
