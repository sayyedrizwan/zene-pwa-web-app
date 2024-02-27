import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, getRandomItem } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { YtAPIImpl } from '../../api_impl/yt/YtVideoSearch'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const name = headers.get('name')

  if (name == undefined) return json(apiError)
  if (name === "") return json(apiError)
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const ytImpl = new YtAPIImpl()
 
  try {
    const videos = await ytImpl.searchArtistsVideo(`${name} songs playlist`)
    const id =  getRandomItem(videos)

    if(id == undefined) return new Response("")
    return new Response(btoa(id.songId!).replaceLastChar("=", ""))
  }catch (error) {
    return new Response("")
  }
}
