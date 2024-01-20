import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, getBase64FromImageUrl, top_100_artists_billboard } from '../utils/utils'
import { JSDOM } from 'jsdom'
import { MusicData, MusicDataList, MusicType } from '../../../domain/local/entities/MusicData'
import axios from 'axios'
import { SpotifyImpl } from '../api_impl/spotify/SpotifyImpl'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const ytImpl = new YtMusicAPIImpl()
    const spotifyImpl = new SpotifyImpl()
    const lists: MusicData[] = []

    const songs = await spotifyImpl.musicSearchSingle()

    await Promise.all(
      songs.map(async (m) => {
        const music = await ytImpl.musicSearchSingle(m, true)
        if (music.songId != null) lists.push(music)
      }),
    )

    return json(new MusicDataList(lists))
  } catch (error) {
    return json(apiError)
  }
}
