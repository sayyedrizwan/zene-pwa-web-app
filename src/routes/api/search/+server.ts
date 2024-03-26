import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError } from '../utils/utils'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json({})

  const body = await events.request.json()

  try {
    const ytMusicImpl = new YtMusicAPIImpl()
    const search = await ytMusicImpl.searchKeywordsSuggestions(body.q)

    return json(search)
  } catch (error) {
    return json(apiError)
  }
}
