
import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI"
import { json, type RequestEvent } from "@sveltejs/kit"
import { apiError, authKeyError, ip_base_url} from "../utils/utils"
import type { IpJsonResponse } from "../radiolist/domain/IpJsonResponse"
import { YtMusicAPIImpl } from "../api_impl/yt_music/YtMusicImpl"


export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)
  
  try {
    const responseIp = await fetch(ip_base_url)
    const ipData = await responseIp.json() as IpJsonResponse

    const ytMusicAPI = new YtMusicAPIImpl()
    const musicsLists = await ytMusicAPI.newReleaseSearch(ipData)
    return json(musicsLists)
  } catch (error) {
    return json(apiError)
  }
}