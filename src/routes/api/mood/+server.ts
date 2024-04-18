import { json, type RequestEvent } from '@sveltejs/kit'
import { authKeyError, getIpAddress, ipBaseUrl } from '../utils/utils'
import { YtAPIImpl } from '../api_impl/yt/YtVideoSearch'
import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import { atob } from 'buffer'
import { MusicPlayerVideos } from '../../../domain/local/entities/MusicPlayerVideos'
import { GiphyImpl } from '../api_impl/giphy/GiphyImpl'
import { MoodDataResponse } from '../../../domain/local/entities/MoodDataResponse'
import { UselessFactsImpl } from '../api_impl/uselessfacts/UselessFactsImpl'
import axios from 'axios'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'
import type { MusicData } from '../../../domain/local/entities/MusicData'

export const POST = async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const m = events.request.headers.get('mood')

  const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
  const ipData = (await responseIp.data) as IpJsonResponse

  const giphy = new GiphyImpl()
  const moodGif = await giphy.searchGiphyRandomOne(`cute ${m}`)

  const uselessfacts = new UselessFactsImpl()
  const facts = await uselessfacts.getARandomFacts()

  const yt = new YtAPIImpl()
  const ytMusic = new YtMusicAPIImpl()
  const lists = await yt.getSearchPlaylists(`${m} mood songs ${ipData.country}`)

  const songs: string[] = []
  const musicList: MusicData[] = []

  await Promise.all(
    lists.map(async (m) => {
      const music = await ytMusic.searchPlaylists(ipData, m)
      music.forEach((item) => songs.push(item))
    }),
  )

  await Promise.all(
    songs.map(async (m) => {
      const s = await ytMusic.musicSearchSingle(m, false)
      if (!musicList.some((i) => i.songId == s.songId) && s.songId != null) musicList.push(s)
    }),
  )

  return json(new MoodDataResponse(moodGif, facts, musicList))
}
