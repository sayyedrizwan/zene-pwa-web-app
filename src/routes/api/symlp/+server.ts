import { json, type RequestEvent } from '@sveltejs/kit'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { authKeyError, getIpAddress, ipBaseUrl, shuffleList } from '../utils/utils'
import { atob } from 'buffer'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import type { MusicData } from '../../../domain/local/entities/MusicData'
import axios from 'axios'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'
import { SongsYouMayLike } from '../../../domain/local/entities/SongsYouMayLike'

export const POST = async (events: RequestEvent) => {
  if (!isFromZeneOrigin(events)) return json(authKeyError)
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
      let id = ''
      try {
        atob(m)
      } catch (error) {
        id = m
      }
      const d = await yt.getBrowseDetailsAndNextSongs(ipData, id)
      const lists = await yt.browseSongsId(ipData, d[1] ?? '')

      d[0].forEach((item, i) => {
        if (i <= 2) songYouMayLike.push(item)
        else songYouMayLikeToExplore.push(item)
      })

      lists[0].forEach((item, i) => {
        if (i <= 2) songYouMayLikeToListen.push(item)
        else songYouMayLikeToExplore.push(item)
      })

      lists[1].forEach((item) => {
        artistsSuggestions.push(item)
      })
    }),
  )

  const songYouMayLikeSet: MusicData[] = []
  const songYouMayLikeToListenSet: MusicData[] = []
  const songYouMayLikeToExploreSet: MusicData[] = []
  const artistsSuggestionsSet: MusicData[] = []

  songYouMayLike.forEach((s) => {
    if (isInList(songYouMayLikeSet, s.songId ?? '') == false) songYouMayLikeSet.push(s)
  })

  songYouMayLikeToListen.forEach((s) => {
    if (isInList(songYouMayLikeSet, s.songId ?? '') == false) {
      if (isInList(songYouMayLikeToListenSet, s.songId ?? '') == false) songYouMayLikeToListenSet.push(s)
    }
  })

  songYouMayLikeToExplore.forEach((s) => {
    if (isInList(songYouMayLikeToExploreSet, s.songId ?? '') == false) songYouMayLikeToExploreSet.push(s)
  })

  artistsSuggestions.forEach((s) => {
    if (isInList(artistsSuggestionsSet, s.songId ?? '') == false) artistsSuggestionsSet.push(s)
  })

  return json(new SongsYouMayLike(songYouMayLikeSet, songYouMayLikeToListenSet, songYouMayLikeToExploreSet, artistsSuggestionsSet))
}

function isInList(dataArr: MusicData[], id: string): boolean {
  return dataArr.find((data) => data.songId === id) ? true : false
}
