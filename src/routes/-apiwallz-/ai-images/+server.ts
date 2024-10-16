import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import type { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
import { WallzAiService } from "../WallzApiService/WallzAiAdobe/WallzAiService";
import { getAIWallpaperSaved, saveAIWallaperListWithTimestamp } from "../utils/TempData";
import { shuffle } from "../utils/Utils";

export async function GET({ request }) {
  if (!verifyHeader(request)) return json([]);

  // const l = getAIWallpaperSaved();
  // if (l.length > 0) return json(l);

  // const lists: WallpaperData[] = [];

  // let lastID = "";

  // for (let i = 0; i < 9; i++) {
  //   const l = await WallzAiService.instance.getAINightCafe(lastID, "hottest", i);
  //   lastID = l[1].toString();
  //   l[0].map((v) => (!lists.some((item) => item.id === v.id) ? lists.push(v) : null));
  // }

  // for (let i = 0; i < 9; i++) {
  //   const l = await WallzAiService.instance.getAINightCafe(lastID, "new", i);
  //   lastID = l[1].toString();
  //   l[0].map((v) => (!lists.some((item) => item.id === v.id) ? lists.push(v) : null));
  // }

  // const listsTemp = shuffle(lists);
  // saveAIWallaperListWithTimestamp(listsTemp);


  return json({});
}

//https://gencraft.com/explore