import { decryptAPIKeyAndIsValidLong } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../utils/utils'
import { MusicData } from '../../../domain/local/entities/MusicData'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValidLong(events)) return json(authKeyError)

  const body = await events.request.json()

  try {
    const ytMusicImpl = new YtMusicAPIImpl()
    const search = await ytMusicImpl.searchKeywordsSuggestions(body.q)
    console.log(search)
    return json(search)
  } catch (error) {
    return json(apiError)
  }
}
