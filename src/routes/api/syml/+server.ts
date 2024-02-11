import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid, isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { authKeyError, getIpAddress, ipBaseUrl } from '../utils/utils'
import { atob } from 'buffer'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import type { MusicData } from '../../../domain/local/entities/MusicData'
import axios from 'axios'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'


export const POST = (async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)
  const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
  const ipData = (await responseIp.data) as IpJsonResponse

  const list = await events.request.json()

  if(list.length <= 0) return json({})

  const yt = new YtMusicAPIImpl()

  const songYouMayLike : MusicData[] = [] 
  const songYouMayLikeToListen : MusicData[] = [] 
  const songYouMayLikeToExplore : MusicData[] = [] 

  await Promise.all(
    list.map(async (m: string, i: number) => {
      const d = await yt.getBrowseDetailsAndNextSongs(ipData, atob(m))
      const lists = await yt.browseSongsId(ipData, d[1] ?? "")
      // if()
      // const music = await yt.releatedSongs
      // if (music.songId != null) listsNew.push(music)
    }),
  )
  
  try {
    return new Response("")
  } catch (error) {
    return new Response("")
  }
})