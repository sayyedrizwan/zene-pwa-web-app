import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { WallzWallpaperService } from "../WallzApiService/WallzWallpaperService/WallzWallpaperService";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  return json({});
}
