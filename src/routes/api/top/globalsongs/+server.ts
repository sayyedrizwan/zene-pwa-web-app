import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { MusicData, MusicDataList } from '../../../../domain/local/entities/MusicData'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'
import { BillboardImpl } from '../../api_impl/billboard/BillboardImpl'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const ytImpl = new YtMusicAPIImpl()
    
    const billboardImpl = new BillboardImpl()
    const lists: MusicData[] = []

    const songs = await billboardImpl.topSongs()
    
    console.log(songs.length)

    await Promise.all(
      songs.map(async (m) => {
        const music = await ytImpl.musicSearchSingle(m, false)
        if (music.songId != null) lists.push(music)
      }),
    )

    return json(new MusicDataList(lists))
  } catch (error) {
    return json(apiError)
  }
}
