import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { RadioBrowserImpl } from '../../api_impl/radio/RadioBrowserImpl'
import { MusicData, MusicType, SearchMusicData } from '../../../../domain/local/entities/MusicData'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)
  const body = await events.request.json()
  const q = body.q


  const radioBrowserImpl = new RadioBrowserImpl()
  const ytMusicImpl = new YtMusicAPIImpl()

  try {
    const radio : MusicData[] = [] 
    const radioList = await radioBrowserImpl.radioSearch(q)
    const artistsList = await ytMusicImpl.artistsSearch(q)
    const albumList = await ytMusicImpl.albumSearch(q)
    const songList = await ytMusicImpl.songsSearch(q)
    
    radioList.forEach((r) => {
      if (r.name != undefined)
          radio.push(new MusicData(r.name, r.language ?? '', r.serveruuid, r.favicon ?? '', MusicType.RADIO))
    })

    return json(new SearchMusicData(radio, artistsList, albumList, songList))
  } catch (error) {
    return json(apiError)
  }
}
