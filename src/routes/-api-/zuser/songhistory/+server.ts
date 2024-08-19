import { heartbeatAPI, verifyHeader, ytMusicSongID } from "../../utils/Utils.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";
import { json } from "@sveltejs/kit";
import type { YTMusicSongsDetails } from "../../ApiService/youtubemusic/model/YTMusicSongsDetails.js";

export async function GET({ request, url }) {
  heartbeatAPI("zuser-get-song-history");
  if (!verifyHeader(request)) return json([]);

  const email = url.searchParams.get("email") ?? "";
  if (!email.includes("@") && email.length < 3) return json([]);

  const page = url.searchParams.get("page") ?? 0;
  console.log(email)

  const list = await MongoDBLocalService.instance.readSongHistory(email, page as number);
  console.log(list)
  return json(list);
}

export async function POST({ request }) {
  heartbeatAPI("zuser-add-song-history");
  if (!verifyHeader(request)) return json({ status: "error" });

  const body = await request.json();
  const email = body.email as string;
  const songID = body.songID as string;
  const device = body.device as string;

  if (!email.includes("@") && email.length < 3) return json({ status: "error" });

  const data = await MongoDBLocalService.instance.isSongAlreadyPresentDelete(songID, email);
  const songInfo = await YoutubeMusicService.instance.songInfo(songID);

  console.log('the email --- ' + email + " -- " + songID + "-- " + data)
  console.log('the email --- ' + email + " -- " + songID + "-- " + songInfo)

  const datas = await fetch("https://music.youtube.com/youtubei/v1/player?prettyPrint=false", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "priority": "u=1, i",
    },
    "referrer": "https://music.youtube.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": ytMusicSongID(songID),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  console.log(await datas.json() as YTMusicSongsDetails)

  
  if (songInfo != undefined) {
    console.log('the email ---  1111' + email + " -- " + songID + "-- " + data)
    if (data == null) await MongoDBLocalService.instance.updateOrInsertSongHistory(songInfo, email, device, 1);
    else await MongoDBLocalService.instance.updateOrInsertSongHistory(songInfo, email, device, (data.timesItsPlayed as number) + 1);
  } else {
    console.log('the email ---  22222' + email + " -- " + songID + "-- " + data)
  }
  await MongoDBLocalService.instance.deleteOldSongHistory(email);
  return json({ status: "success" });
}
