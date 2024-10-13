import mysql from "mysql2/promise";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";

export const mysqlpoolWallz: any = mysql.createPool({
  host: "x0csa.h.filess.io",
  user: "zenewallpapermysql_comeoutdog",
  database: "zenewallpapermysql_comeoutdog",
  password: "af1a424fc6353d4c6232f637b648be0a466fb520",
  port: 3307,
  waitForConnections: true,
  connectionLimit: 5,
  maxIdle: 5,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export const AI_MAGIC_STUDIO_API = "https://ai-api.magicstudio.com/api/ai-art-generator";
export const PINTEREST_GET_API = "https://pinterest.com/resource/BaseSearchResource/get/";
export const BING_SEARCH_API = "https://www.bing.com/AS/Suggestions";
export const NIGHTY_CAFE_API = "https://api.nightcafe.studio/v2/creations";
export const WALLPAPERFLARE_API = "https://www.wallpaperflare.com/search";
export const WALLPAPERFLARE_MAIN_API = "https://www.wallpaperflare.com/index.php";
export const WALLPAPERCAVE_API = "https://wallpapercave.com/search";
export const WALLPAPERCAVE_MAIN_API = "https://wallpapercave.com";
export const WALLPAPERCOM_SEARCH_API = "https://wallpapers.com/search/";
export const WALLPAPERCOM_MAIN_API = "https://wallpapers.com";
export const PEAKPX_MAIN_API = "https://www.peakpx.com";
export const PEAKPX_SEARCH_API = "https://www.peakpx.com/en/search";
export const SEARCH_WALLPAPERS_CO_API = "https://search.wallpapers.com/autosuggest";

export const shuffle = (array: WallpaperData[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function findLargestResolution(data: WallpaperData[]): String {
  let largestData = data[0];
  let maxArea = 0;

  for (const resData of data) {
    const [width, height] = (resData.name ?? "0x0").split("x").map(Number);
    const currentArea = width * height;

    if (currentArea > maxArea) {
      maxArea = currentArea;
      largestData = resData;
    }
  }

  return largestData.id ?? "";
}
