import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid, isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { authKeyError, getIpAddress, ipBaseUrl, shuffleList } from '../utils/utils'
import { atob } from 'buffer'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import type { MusicData } from '../../../domain/local/entities/MusicData'
import axios from 'axios'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'
import { SongsYouMayLike } from '../../../domain/local/entities/SongsYouMayLike'


export const POST = (async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)
  const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
  const ipData = (await responseIp.data) as IpJsonResponse

  const list = await events.request.json()

  if (list.length <= 0) return json({})

  const yt = new YtMusicAPIImpl()

  const songYouMayLike: MusicData[] = []
  const songYouMayLikeToListen: MusicData[] = []
  const songYouMayLikeToExplore: MusicData[] = []
  const artistsSuggestions: MusicData[] = []

  await Promise.all(
    list.map(async (m: string) => {
      const d = await yt.getBrowseDetailsAndNextSongs(ipData, atob(m))
      const lists = await yt.browseSongsId(ipData, d[1] ?? "")

      d[0].forEach((item, i) => {
        if (i <= 2) songYouMayLike.push(item)
        else songYouMayLikeToExplore.push(item)
      })

      lists[0].forEach((item, i) => {
        if (i <= 3) songYouMayLikeToListen.push(item)
        else songYouMayLikeToExplore.push(item)
      })

      lists[1].forEach(item => {
        artistsSuggestions.push(item)
      })
    })
  )

  const songYouMayLikeSet = new Set(shuffleList(songYouMayLike))
  const songYouMayLikeToListenSet = new Set(shuffleList(songYouMayLikeToListen))
  const songYouMayLikeToExploreSet = new Set(shuffleList(songYouMayLikeToExplore))
  const artistsSuggestionsSet = new Set(shuffleList(artistsSuggestions))

  return json(new SongsYouMayLike(Array.from(songYouMayLikeSet), Array.from(songYouMayLikeToListenSet), Array.from(songYouMayLikeToExploreSet), Array.from(artistsSuggestionsSet)))
})