import { decryptAPIKeyAndIsValidLong, isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../utils/utils'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'

export async function POST(events: RequestEvent) {
  if (isFromZeneOrigin(events) === false) return json({})

  const body = await events.request.json()

  try {
    const ytMusicImpl = new YtMusicAPIImpl()
    const search = await ytMusicImpl.searchKeywordsSuggestions(body.q)

    return json(search)
  } catch (error) {
    return json(apiError)
  }
}
