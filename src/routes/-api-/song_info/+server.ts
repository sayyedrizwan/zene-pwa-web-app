import { json } from "@sveltejs/kit";
import { heartbeatAPI, verifyHeader } from "../utils/Utils.js";
import type { YTMusicSongsDetails } from "../ApiService/youtubemusic/model/YTMusicSongsDetails.js";

export async function GET({ url, request }) {
  heartbeatAPI("song-info");
  if (!verifyHeader(request)) return json([]);
  const s = url.searchParams.get("id") ?? "";
  if (s == "") return json([]);

  const datas = await fetch("https://music.youtube.com/watch?v=aC9HkZW2hZk")

  // console.log((await datas.json()) as YTMusicSongsDetails);

  // const data = await YoutubeMusicService.instance.songInfo(s);
  if (datas == undefined) return json({});
  return json((await datas.text()));
}
