import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js";
import { YoutubeMusicService } from "../../-api-/ApiService/youtubemusic/YoutubeMusicService.js";

export async function load({ params }) {
  const songID = await decryptSharingData(params.id)
  const data = await YoutubeMusicService.instance.songInfoViaSearch(songID)
  if(data?.id == null) return { data: JSON.stringify(data), url: params.id }
  
  return { data: JSON.stringify(data), url: params.id }
}
