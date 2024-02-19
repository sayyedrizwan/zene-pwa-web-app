import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid, decryptAppSharedData, decryptData, isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { authKeyError, getIpAddress, ipBaseUrl, shuffleList } from '../utils/utils'
import type { ArtistsPinData } from '../../../domain/local/entities/ArtistsPinData'
import { NewsImpl } from '../api_impl/news/NewsImpl'
import { FeedType, FeedData } from '../../../domain/local/entities/FeedData'
import { YtAPIImpl } from '../api_impl/yt/YtVideoSearch'

export const POST = (async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const list = await events.request.json() as ArtistsPinData[]
  if (list.length <= 0) return json({})


  const news = new NewsImpl()
  const yt = new YtAPIImpl()

  const dataLists : FeedData[] = []

  await Promise.all(
    list.map(async (m) => {
      const name = decryptAppSharedData(m.id!)
      if(name.trim() != ""){
        const list = await news.searchBing(name.trim(), m.img ?? "")
        list.forEach(n => {
          dataLists.push(n)
        })
        const listYt = await yt.searchArtistsChannelsVideos(name.trim())

        listYt.forEach(n => {
          dataLists.push(n)
        })
      }
    })
  )

  const finalList : FeedData[] = []


  dataLists.sort((a, b) => {
    const dateA = new Date(a.ts ?? "")
    const dateB = new Date(b.ts ?? "")
    return dateB.getTime() - dateA.getTime()
  })


  return json(dataLists)
})