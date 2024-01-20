
import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI"
import { json, type RequestEvent } from "@sveltejs/kit"
import { apiError, authKeyError, getIpAddress, ipBaseUrl} from "../utils/utils"
import type { IpJsonResponse } from "../radiolist/domain/IpJsonResponse"
import { YtMusicAPIImpl } from "../api_impl/yt_music/YtMusicImpl"
import axios from 'axios'


export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)
  
  try {
    const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
    const ipData = await responseIp.data as IpJsonResponse

    const ytMusicAPI = new YtMusicAPIImpl()
    const musicsLists = await ytMusicAPI.newReleaseSearch(ipData)
    return json(musicsLists)
  } catch (error) {
    return json(apiError)
  }
}