import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js";
import { YoutubeMusicService } from "../../-api-/ApiService/youtubemusic/YoutubeMusicService.js";
import { YoutubeAPIService } from "../../-api-/ApiService/youtube/YoutubeAPIService.js";
import type { MusicData } from "../../-api-/ApiService/model/MusicData.js";

export async function load({ params }) {
  const id = await decryptSharingData(params.id);

  const infoVID = await YoutubeAPIService.instance.searchVideos(id, false);
  let m: MusicData | undefined = undefined;
  infoVID.forEach((e) => {
    if (e.id == id && m == undefined) m = e;
  });
  if (m == undefined) return { data: JSON.stringify("{}"), url: params.id };

  return { data: JSON.stringify(m), url: params.id };
}
