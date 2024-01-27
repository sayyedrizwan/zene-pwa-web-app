import { json, type RequestEvent } from '@sveltejs/kit'
import axios from 'axios'
import type { YtDownloadUrl } from './domain/YtDownloadUrl'
import type { YTDownloadPath } from './domain/YTDownloadPath'
import { btoa } from 'buffer'
import fs from 'fs'
import ytdl from 'ytdl-core'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const id = headers.get('id')

  try {
    let url: string = ''
    let info = await ytdl.getInfo(id ?? '')
    info.formats.forEach((element) => {
      if (element.hasAudio === true && element.qualityLabel === '360p' && url === '') {
        url = element.url
      }
    })
    console.log(id)
    console.log(url)
    return new Response(btoa(url))
  } catch (error) {
    return new Response('')
  }
}
