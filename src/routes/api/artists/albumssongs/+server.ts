import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'
import type { MusicData } from '../../../../domain/local/entities/MusicData'

export async function POST(req: RequestEvent) {
  const headers = req.request.headers
  const id = headers.get('id')

  if (id == undefined) return json(apiError)
  if (id === '') return json(apiError)
  if (!decryptAPIKeyAndIsValid(req)) return json(authKeyError)

  const ytImpl = new YtMusicAPIImpl()
  try {
    const lists: MusicData[] = []
    const response = await ytImpl.albumsInfo(id)

    await Promise.all(
      response[1].map(async (m) => {
        const music = await ytImpl.musicSearchSingle(`${m} - ${response[0]?.artists}`, true)
        if (music.songId != null) lists.push(music)
      }),
    )

    return json(lists)
  } catch (error) {
    return json({})
  }
}
