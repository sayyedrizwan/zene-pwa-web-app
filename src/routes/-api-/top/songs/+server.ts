import { json } from "@sveltejs/kit";
import { heartbeatAPI, shuffle, verifyHeader } from "../../utils/Utils.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";
import type { MusicData } from "../../ApiService/model/MusicData.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";

export async function POST({ request }) {
  heartbeatAPI("top-songs");
  if (!verifyHeader(request)) return json([]);
  const body = await request.json();

  if (!String(body.email).includes("@") && body.email.length < 3) return json([]);
  let songsID = await MongoDBLocalService.instance.topFifteenSongsOfUsers(body.email);

  let list: MusicData[] = [];

  await Promise.all(
    songsID.map(async (id: String) => {
      try {
        if (id != null || id != undefined) {
          const sSongs = await YoutubeMusicService.instance.similarSongs(id.toString());
          const nSongs = await YoutubeMusicService.instance.upNextSongs(id.toString());
          sSongs?.forEach((p, i) => {
            if (i <= 3 && !list.some((item) => item.id === p.id)) list.push(p);
          });
          nSongs?.forEach((p, i) => {
            if (i <= 3 && !list.some((item) => item.id === p.id)) list.push(p);
          });
        }
      } catch (error) {
        //console.log(error);
      }
    })
  );

  return json(shuffle(list));
}
