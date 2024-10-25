import { json } from "@sveltejs/kit";
import { heartbeatAPI, verifyHeader } from "../utils/Utils.js";
import { YoutubeMusicService } from "../ApiService/youtubemusic/YoutubeMusicService.js";

export async function GET({ url, request }) {
  heartbeatAPI("song-info");
  if (!verifyHeader(request)) return json([]);
  const s = url.searchParams.get("id") ?? "";
  if (s == "") return json([]);
  const data = await YoutubeMusicService.instance.songInfo(s);
  if (data == undefined) return json({});
  return json(data);
}
