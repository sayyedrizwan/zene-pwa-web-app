import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI"
import { json, type RequestEvent } from "@sveltejs/kit"
import { apiError, authKeyError, formatNumberString, getBase64FromImageUrl, lastfm_top_playing_songs } from "../utils/utils"
import { YtMusicAPIImpl } from "../api_impl/yt_music/YtMusicImpl"
import type { LastFmTopSongsResponse } from "../../../domain/apis/entities/LastFmTopSongsResponse"
import { TopSongsMusic, TopSongsMusicResults } from "../../../domain/local/entities/TopSongsMusic"

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) {
    return json(authKeyError)
  }

  try {
    const list: TopSongsMusic[] = []
    const ytMusicAPI = new YtMusicAPIImpl()
    const response = await fetch(lastfm_top_playing_songs)
    const data = await response.json() as LastFmTopSongsResponse

    await Promise.all(data.results.track.map(async (e) => {
      const musicName = `${e.name} - ${e.artist}`
      console.log(musicName)
      const music = await ytMusicAPI.musicSearchSingle(musicName)
      const imageAsBase64 = await getBase64FromImageUrl(e.image.replace("174s/", ""))

      if (music.name != null && music.songId != null) {
        list.push(new TopSongsMusic(imageAsBase64!, formatNumberString(e.listeners), music))
      }
    }))

    return json(new TopSongsMusicResults(list))
  } catch (error) {
    return json(apiError)
  }
}
