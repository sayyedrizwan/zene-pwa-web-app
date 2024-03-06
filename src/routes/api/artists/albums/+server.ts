import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'

export async function POST(req: RequestEvent) {
  const headers = req.request.headers
  const id = headers.get('id')

  if (id == undefined) return json(apiError)
  if (id === '') return json(apiError)
  if (!decryptAPIKeyAndIsValid(req)) return json(authKeyError)

  const ytImpl = new YtMusicAPIImpl()

  try {
    const response = await ytImpl.albumsInfo(id)
    return json(response[0])
  } catch (error) {
    return json({})
  }
}
