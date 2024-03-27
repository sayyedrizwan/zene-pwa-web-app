import { json, type RequestEvent } from '@sveltejs/kit'
import { authKeyError, getIpAddress, ipBaseUrl } from '../utils/utils'
import { YtAPIImpl } from '../api_impl/yt/YtVideoSearch'
import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import { atob } from 'buffer'
import { MusicPlayerVideos } from '../../../domain/local/entities/MusicPlayerVideos'
import { GiphyImpl } from '../api_impl/giphy/GiphyImpl'
import { MoodDataResponse } from '../../../domain/local/entities/MoodDataResponse'
import { NinjasFactsImpl } from '../api_impl/ninjas-facts/NinjasFactsImpl'
import axios from 'axios'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'

export const POST = async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const m = events.request.headers.get('mood')

  const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
  const ipData = (await responseIp.data) as IpJsonResponse

  const giphy = new GiphyImpl()
  const moodGif = await giphy.searchGiphyRandomOne(`cute ${m}`)

  const ninjasfacts = new NinjasFactsImpl()
  const fact = await ninjasfacts.getARandomFacts()


  const yt = new YtAPIImpl()
  const ytMusic = new YtMusicAPIImpl()
  const lists = await yt.getSearchPlaylists(`${m} mood songs ${ipData.country}`)

  
  await Promise.all(
    lists.map(async (m) => {
      const music = await ytMusic.searchPlaylists(ipData, m)
      music.forEach(element => {
        console.log(element)
      })
    })
  )

  return json(new MoodDataResponse(moodGif, fact))
}
