import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, formatNumberString, getBase64FromImageUrl, lastfm_top_playing_songs } from '../../utils/utils'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'
import { TopSongsMusic, TopSongsMusicResults } from '../../../../domain/local/entities/TopSongsMusic'
import type { LastFmTopSongsResponse } from './domain/LastFmTopSongsResponse'
import axios from 'axios'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const list: TopSongsMusic[] = []
    const ytMusicAPI = new YtMusicAPIImpl()
    const response = await axios.get(lastfm_top_playing_songs)
    const data = (await response.data) as LastFmTopSongsResponse

    await Promise.all(
      data.results.track.map(async (e) => {
        const musicName = `${e.name} - ${e.artist}`
        const music = await ytMusicAPI.musicSearchSingle(musicName, true)
        const imageAsBase64 = await getBase64FromImageUrl(e.image.replace('174s/', ''))

        if (music.name != null && music.songId != null) {
          list.push(new TopSongsMusic(imageAsBase64!, formatNumberString(e.listeners), music))
        }
      }),
    )
    return json(new TopSongsMusicResults(list))
  } catch (error) {
    return json(apiError)
  }
}
