import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzPinterestServices } from "../WallzPinterestServices/WallzPinterestServices";
import axios from "axios";
import type { WallpaperData } from "../WallzApiService/model/WallpaperData";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json([]);

  const name = url.searchParams.get("name") ?? "";

  if (name.length < 3) return json([]);

  let lists: WallpaperData[] = [];
  let latestTokens = "";

  for (let i = 0; i < Array.from({ length: 3 }).length; i++) {
    const response = await WallzPinterestServices.instance.getSearch(`${name} latest ${new Date().getFullYear()} wallpapers`, latestTokens);
    latestTokens = response[1].toString();
    response[0].map((w) => { (!lists.some((item) => item.id === w.id)) ? lists.push(w) : null})
  }
  return json(lists);
}
