import { type RequestEvent } from '@sveltejs/kit'
import { btoa } from 'buffer'
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

    return new Response(btoa(url))
  } catch (error) {
    return new Response('')
  }
}
