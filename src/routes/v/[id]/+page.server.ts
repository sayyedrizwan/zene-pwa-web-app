import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js"
import { YoutubeMusicService } from "../../-api-/ApiService/youtubemusic/YoutubeMusicService.js"

export async function load({ params }) {
  const id = await decryptSharingData(params.id)

  const data = await YoutubeMusicService.instance.songInfo(id)
  if(data?.id == null) return { data: JSON.stringify("{}"), url: params.id }
  
  data.id = ""

  return { data: JSON.stringify(data), url: params.id }
}
