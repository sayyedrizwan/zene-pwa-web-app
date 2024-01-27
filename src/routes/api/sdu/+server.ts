import { json, type RequestEvent } from '@sveltejs/kit'
import { atob, btoa } from 'buffer'
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


export const GET = (async ( url: RequestEvent ) => {
	const video_url = new URL(url.url).searchParams.get('id') ?? ""

  try {
    const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${atob(video_url)}`)
    let url: string = ''

    info.formats.forEach((element) => {
      if (element.hasAudio === true && element.qualityLabel === '360p' && url === '') {
        url = element.url
      }
    })
    return new Response(btoa(url))
  } catch (error) {
    return new Response('')
  }
}) satisfies RequestHandler