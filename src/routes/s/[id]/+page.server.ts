import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js";
import { YoutubeMusicService } from "../../-api-/ApiService/youtubemusic/YoutubeMusicService.js";

export async function load({ params }) {
  const songID = await decryptSharingData(params.id);
  try {
    const data = await YoutubeMusicService.instance.songInfo(songID);
    if (data?.id == undefined) return { data: JSON.stringify(data), url: params.id };

    return { data: JSON.stringify(data), url: params.id };
  } catch (error) {
    return { data: JSON.stringify("{}"), url: params.id };
  }
}
