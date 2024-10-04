import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import { WallzPinterestServices } from "../WallzPinterestServices/WallzPinterestServices";
import axios from "axios";

export async function GET({ request }) {
  if (!verifyHeader(request)) return json({});

  let lists = [];

  await Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(async (id) => {
    
  }));

  const list = await WallzPinterestServices.instance.getSearch("spider man wallpaper and video", "");
  const list2 = await WallzPinterestServices.instance.getSearch("spider man wallpaper and video", list[1]);
  const list3 = await WallzPinterestServices.instance.getSearch("spider man wallpaper and video", list2[1]);
  // console.log(list[1])
  // console.log(list2[1])
  // console.log(list3[1])
  return json([...list[0], ...list2[0], ...list3[0]]);
}
