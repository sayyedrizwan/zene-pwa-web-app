import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";
import { WallpaperData, WALLPAPERTYPE } from "../WallzApiService/MySQLService/model/WallpaperData";
import { WallzMySqlService } from "../WallzApiService/MySQLService/WallzMySqlService";
import { WallzAiService } from "../WallzApiService/WallzAiAdobe/WallzAiService";
import { substringBeforeLast } from "../../-api-/utils/extension/String";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const path = url.searchParams.get("path") ?? "";
  const thumbnail = url.searchParams.get("thumbnail") ?? "";
  const email = url.searchParams.get("email") ?? "";

  if (path.length < 3) return json([]);

  let wallpaper: String | undefined = undefined;

  const isSaved = email.includes("@") ? await WallzMySqlService.instance.isWallpaperSave(email, path) : false

  console.log(path)
  if (path.includes("peakpx.com")) wallpaper = await WallzWallpaperService.instance.peakpxInfo(path);
  else if (path.includes("wallpapercave.com")) wallpaper = await WallzWallpaperService.instance.wallpaperCaveInfo(path);
  else if (path.includes("nightcafe.studio")) wallpaper = substringBeforeLast(thumbnail, "?tr=")

  return json(wallpaper == undefined ? {} : new WallpaperData("", "", wallpaper, "", 0, WALLPAPERTYPE.IMAGE_WALLPAPER, isSaved));
}
