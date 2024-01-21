import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, getIpAddress, ipBaseUrl } from '../utils/utils'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import axios from 'axios'
import { SpotifyImpl } from '../api_impl/spotify/SpotifyImpl'
import { MusicDataList, type MusicData } from '../../../domain/local/entities/MusicData'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {

    const ytImpl = new YtMusicAPIImpl()
    const spotifyImpl = new SpotifyImpl()
    const lists: MusicData[] = []

    const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
    const ipData = (await responseIp.data) as IpJsonResponse
    const songs = await spotifyImpl.countrySongsSearch(ipData.country)

    await Promise.all(
      songs.map(async (m) => {
        const music = await ytImpl.musicSearchSingle(m, true)
        if (music.songId != null) lists.push(music)
      })
    )

    return json(new MusicDataList(lists))
  } catch (error) {
    return json(apiError)
  }
}
