import { json, type RequestEvent } from '@sveltejs/kit'
import { btoa } from 'buffer'
import fs  from 'fs'
import type { RequestHandler } from './$types'
import ytdl from 'ytdl-core'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const id = headers.get('id')
  const ip = headers.get('i')
  
  try {
    let url: string = ''

    let info = await ytdl.getInfo(id ?? '')
    info.formats.forEach((element) => {
      if (element.hasAudio === true && element.qualityLabel === '360p' && url === '') {
        url = element.url
      }
    })
    return new Response(btoa(url))
  } catch (error) {
   
    return new Response('')
  }
}

export async function GET(events: RequestEvent) {
     
  try {
    const value = await ytdl.getInfo("https://www.youtube.com/watch?v=g4oH5xKwm9A&ab_channel=SharkTankIndia")
    return json(value);
  }catch(error){
    return json({})
  }
}
