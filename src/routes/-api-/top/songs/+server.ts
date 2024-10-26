import { json } from "@sveltejs/kit";
import { delay, heartbeatAPI, isJson, mongoDBClient, shuffle, verifyHeader } from "../../utils/Utils.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";
import type { MusicData } from "../../ApiService/model/MusicData.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";

export async function POST({ request }) {
  heartbeatAPI("top-songs");
  if (!verifyHeader(request)) return json([]);
  const body = await request.json();

  if (!String(body.email).includes("@") && body.email.length < 3) return json([]);

  // const localList = isJson(body.list) ? (JSON.parse(body.list) as String[]) : [];
  // const songsID = localList.length > 3 ? localList : await new MongoDBLocalService().topFifteenSongsOfUsers(body.email);

  const email = body.email;
  const start = Date.now();
  const collectionSongHistory = mongoDBClient.db("zenemusicnosql_zooofficer").collection("song_history");
  const cursor = collectionSongHistory.find({ email: email }).sort({ timestamp: -1 }).limit(12).project({ id: 1 }).batchSize(12);;

  const end1 = Date.now();
  const timeTaken1 = (end1 - start) / 1000;
  console.log(`Execution time: data from db before ${timeTaken1.toFixed(4)} seconds ${email}`);

  // const recentHistory = await cursor.toArray();
  const recentHistory = [];
  for await (const doc of cursor) {
    recentHistory.push(doc.id);
  }

  const end = Date.now();
  const timeTaken = (end - start) / 1000;
  // const recentHistory = await cursor.toArray();
  console.log(`Execution time: data from db ${timeTaken.toFixed(4)} seconds ${email}`);

  const songsID = [...recentHistory].map((e: any) => e);

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
