import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, formatNumberString, lastfm_top_playing_songs } from '../../utils/utils'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'
import { TopSongsMusic, TopSongsMusicResults } from '../../../../domain/local/entities/TopSongsMusic'
import type { LastFmTopSongsResponse } from './domain/LastFmTopSongsResponse'
import axios from 'axios'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const list: TopSongsMusic[] = []
    const ytMusicAPI = new YtMusicAPIImpl()
    const response = await axios.get(lastfm_top_playing_songs, { params: { type: 'artist', tracks: 1, nr: 10, format: 'json' } })
    const data = (await response.data) as LastFmTopSongsResponse

    await Promise.all(
      (data.results?.artist ?? []).map(async (e) => {
        const trackInfo = (e.tracks?.length ?? 0) > 0 ? e.tracks?.[0] : null
        if (trackInfo != null) {
          const musicName = `${trackInfo?.name} - ${trackInfo?.artist}`
          const music = await ytMusicAPI.musicSearchSingle(musicName, true)
          if (music.name != null && music.songId != null) {
            list.push(new TopSongsMusic(e?.image?.replace('174s/', '') ?? '', formatNumberString(e.listeners ?? '0'), music))
          }
        }
      })
    )

    const sorted = list.sort((a, b) => parseInt(b?.listeners?.replaceAll(",", "").trim() ?? '0') - parseInt(a?.listeners?.replaceAll(",", "").trim() ?? '0'))
    
    return json(new TopSongsMusicResults(sorted))
  } catch (error) {
    return json(apiError)
  }
}
