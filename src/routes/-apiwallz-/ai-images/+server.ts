import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallpaperData } from "../WallzApiService/MySQLService/model/WallpaperData";
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

  const aiImages :WallpaperData[] = [];

  aiImages.push(new WallpaperData("https://creator.nightcafe.studio/creation/SuM3Q2L76KS3t8mOnlEO", "", "https://images.nightcafe.studio/jobs/SuM3Q2L76KS3t8mOnlEO/SuM3Q2L76KS3t8mOnlEO--1--qlad7.jpg?tr=w-640,c-at_max", ""))
  aiImages.push(new WallpaperData("https://creator.nightcafe.studio/creation/yVe8yukkN5aNRKr5I21Y", "", "https://images.nightcafe.studio/jobs/yVe8yukkN5aNRKr5I21Y/yVe8yukkN5aNRKr5I21Y--1--q5evm_1.5x-clty-upscale-hvokk.jpg?tr=w-640,c-at_max", ""))
  aiImages.push(new WallpaperData("https://creator.nightcafe.studio/creation/mS0Fm4JZb5MWN9XlVs12", "", "https://images.nightcafe.studio/jobs/mS0Fm4JZb5MWN9XlVs12/mS0Fm4JZb5MWN9XlVs12--1--k2ryw.jpg?tr=w-640,c-at_max", ""))
  aiImages.push(new WallpaperData("https://creator.nightcafe.studio/creation/zZjglvuWwG2ILgrqVADp", "", "https://images.nightcafe.studio/jobs/zZjglvuWwG2ILgrqVADp/zZjglvuWwG2ILgrqVADp-DkldQ-adjusted.jpg?tr=w-640,c-at_max", ""))
  aiImages.push(new WallpaperData("https://creator.nightcafe.studio/creation/kZrUVSjHKHoGuwso2F8z", "", "https://images.nightcafe.studio/jobs/kZrUVSjHKHoGuwso2F8z/kZrUVSjHKHoGuwso2F8z--1--ix0cu_2x-clty-upscale-0rpkc.jpg?tr=w-640,c-at_max", ""))
  aiImages.push(new WallpaperData("https://creator.nightcafe.studio/creation/Hfg5frzKt1oEvwKvOeOH", "", "https://images.nightcafe.studio/jobs/Hfg5frzKt1oEvwKvOeOH/Hfg5frzKt1oEvwKvOeOH--1--uo4x4_2x-clty-upscale-p9cf2.jpg?tr=w-640,c-at_max", ""))
  aiImages.push(new WallpaperData("https://creator.nightcafe.studio/creation/sfugO75rsJucabjSZLv5", "", "https://images.nightcafe.studio/jobs/sfugO75rsJucabjSZLv5/sfugO75rsJucabjSZLv5--1--d2xc7.jpg?tr=w-640,c-at_max", ""))


  return json(aiImages);
}

//https://gencraft.com/explore