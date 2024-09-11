import { json } from "@sveltejs/kit";
import { GLOBAL_TRENDING_ARTISTS, heartbeatAPI, verifyHeader } from "../../utils/Utils.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";
import { BillboardAPIService } from "../../ApiService/billboard/BillboardAPIService.js";
import { MusicData } from "../../ApiService/model/MusicData.js";
import { MySqlLocalService } from "../../ApiService/dbmysql/MySqlLocalService.js";

export async function GET({ request }) {
  heartbeatAPI("top-global-artists");
  if (!verifyHeader(request)) return json([]);

  const artists: MusicData[] = [];

  const cacheList = await MySqlLocalService.instance.getTempData(GLOBAL_TRENDING_ARTISTS);
  if (cacheList.length > 0) return json(cacheList);


  let list = await BillboardAPIService.instance.topListeningArtists();
  await MySqlLocalService.instance.delteTempData(GLOBAL_TRENDING_ARTISTS);

  await Promise.all(
    list.map(async (n) => {
      if (n != undefined) {
        const data = await YoutubeMusicService.instance.searchArtists(n);
        artists.push(data[0]);
      }
    })
  );

  const sortedNewList = sortByStringListOrder(list, artists);
  for (const d of sortedNewList) {
    await MySqlLocalService.instance.insertTempData(d, GLOBAL_TRENDING_ARTISTS);
  }

  return json(sortedNewList);
}

function sortByStringListOrder(oldList: string[], newList: MusicData[]): MusicData[] {
  const map = new Map<string, MusicData>();
  for (const item of newList) {
    try {
        map.set((item.name ?? "").toString(), item);   
    } catch (error) {
        error
    }
  }

  const sortedList: MusicData[] = [];
  for (const id of oldList) {
    const matchingItem = map.get(id);
    if (matchingItem) {
      sortedList.push(matchingItem);
    }
  }

  return sortedList;
}
