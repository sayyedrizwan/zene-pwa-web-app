import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid, isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { authKeyError, shuffleList } from '../utils/utils'
import { atob } from 'buffer'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import { MusicDataList, type MusicData } from '../../../domain/local/entities/MusicData'

export const POST = async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const list = await events.request.json()
  if (list.length <= 0) return json({})

  const yt = new YtMusicAPIImpl()
  const albumsList: MusicData[] = []

  await Promise.all(
    list.map(async (m: string) => {
      const info = await yt.songInfo(atob(m))
      const albums = await yt.albumSearch(`${info?.name} - ${info?.artists}`)
      albums.forEach((a, i) => {
        if (i <= 3) albumsList.push(a)
      })
    }),
  )

  const albumseSet = new Set(shuffleList(albumsList))
  return json(new MusicDataList(Array.from(albumseSet)))
}
