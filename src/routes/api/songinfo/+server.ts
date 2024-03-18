import { json, type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { apiError, authKeyError } from '../utils/utils'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'

export const GET = async (req: RequestEvent) => {
  const id = req.request.headers.get('id')

  if (id == undefined) return json(apiError)
  if (id === '') return json(apiError)
  if (!decryptAPIKeyAndIsValid(req)) return json(authKeyError)

  try {
    const yt = new YtMusicAPIImpl()
    const songInfo = await yt.songInfo(atob(id))

    return json(songInfo)
  } catch (error) {
    return json({})
  }
}
