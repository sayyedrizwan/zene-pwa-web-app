import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, getIpAddress, getTextBeforeKeyword, ipBaseUrl } from '../utils/utils'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import axios from 'axios'
import { SpotifyImpl } from '../api_impl/spotify/SpotifyImpl'
import { MusicDataList, MusicData, ExtraDataMusicData } from '../../../domain/local/entities/MusicData'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const ytImpl = new YtMusicAPIImpl()
    const spotifyImpl = new SpotifyImpl()
    const lists: MusicData[] = []
    const artistsLists: MusicData[] = []

    const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
    const ipData = (await responseIp.data) as IpJsonResponse
    const songs = await spotifyImpl.countrySongsSearch(ipData.country)

    await Promise.all(
      songs.map(async (m) => {
        const music = await ytImpl.musicSearchSingle(m, true)
        if (music.songId != null) lists.push(music)
      }),
    )

    await Promise.all(
      lists.map(async (m) => {
        const name = getTextBeforeKeyword(getTextBeforeKeyword(m.artists ?? '', ',')!, '&')
        const music = await ytImpl.artistsSearchSingle(name ?? '')
        if (music.songId != null) artistsLists.push(music)
      }),
    )

    let rm: MusicData[] = []
    artistsLists.forEach((a) => {
      if (!rm.some((e) => e.name === a.name)) rm.push(a)
    })

    return json(new ExtraDataMusicData(lists, rm))
  } catch (error) {
    return json(apiError)
  }
}
