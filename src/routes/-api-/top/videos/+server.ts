import { json } from "@sveltejs/kit";
import { delay, heartbeatAPI, isJson, shuffle, verifyHeader } from "../../utils/Utils.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";
import { MUSICTYPE, type MusicData } from "../../ApiService/model/MusicData.js";
import { YoutubeAPIService } from "../../ApiService/youtube/YoutubeAPIService.js";
import { filterArtistsName } from "../../utils/extension/String.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";

export async function POST({ request }) {
  heartbeatAPI("top-videos");
  if (!verifyHeader(request)) return json([]);

  const body = await request.json();

  if (!String(body.email).includes("@") && body.email.length < 3) return json([]);

  const localList = isJson(body.list) ? (JSON.parse(body.list) as String[]) : [];
  const songsID = localList.length > 3 ? localList : await MongoDBLocalService.instance.topFifteenSongsOfUsers(body.email);

  let list: MusicData[] = [];

  await Promise.all(
    songsID.map(async (id: String) => {
      try {
        if (id != null || id != undefined) {
          const song = await YoutubeMusicService.instance.songInfo(id.toString());
          if (song != undefined) {
            const videoID = await YoutubeAPIService.instance.searchVideoIDFirst(`${song.name} - ${filterArtistsName(song.artists)} Official Video`);
            song.extra = videoID;
            song.type = MUSICTYPE.VIDEO;
            list.push(song);

            const videoList = await YoutubeAPIService.instance.searchVideos(`${filterArtistsName(song.artists)} Official Song Video`);
            videoList.forEach((v, i) => {
              if (i <= 3 && !list.some((item) => item.extra === v.extra)) {
                v.extra = v.id;
                v.type = MUSICTYPE.VIDEO;
                list.push(v);
              }
            });
          }
        }
      } catch (error) {
        //console.log(error);
      }
    })
  );

  return json(shuffle(list));
}
