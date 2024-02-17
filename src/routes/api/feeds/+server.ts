import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid, decryptAppSharedData, decryptData, isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { authKeyError, getIpAddress, ipBaseUrl, shuffleList } from '../utils/utils'
import type { ArtistsPinData } from '../../../domain/local/entities/ArtistsPinData'
import { GNewsImpl } from '../api_impl/news/GNewsImpl'
import { FeedType, FeedData } from '../../../domain/local/entities/FeedData'
import { YtAPIImpl } from '../api_impl/yt/YtVideoSearch'

export const POST = (async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const list = await events.request.json() as ArtistsPinData[]
  if (list.length <= 0) return json({})


  const news = new GNewsImpl()
  const yt = new YtAPIImpl()

  const dataLists : FeedData[] = []

  await Promise.all(
    list.map(async (m) => {
      const name = decryptAppSharedData(m.id!)
      if(name.trim() != ""){
        const list = await news.search(name.trim())
        list.forEach(n => {
          dataLists.push(new FeedData(n.title!, n.title!, "", n.link!, n.date!, FeedType.NEWS))
        })
        const listYt = await yt.searchArtistsChannelsVideos(name.trim())
        
      }
    })
  )

  return json({})
})