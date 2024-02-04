import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, google_news_api } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import axios from 'axios'
import Parser from 'rss-parser'
import fs from 'fs'
import { NewsData } from '../../../../domain/local/entities/NewsData'


export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const name = headers.get('name') ?? ""

  if (name == undefined) return json(apiError)
  if (name === "") return json(apiError)
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const lists : NewsData[] = []

    const parser = new Parser()
    const r = await axios.get(google_news_api, { params: { q: String(name) } })
    const response = await r.data as string
    const parsedFeed = await parser.parseString(response)
    
    parsedFeed.items.forEach(element => {
      if(element.title != undefined && element.link != undefined) 
        lists.push(new NewsData(element.title, element.link, element.pubDate!, element.source))
    })

    return json(lists)
  } catch (error) {
    return json([])
  }
}
