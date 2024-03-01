import { type RequestEvent, type RequestHandler } from '@sveltejs/kit'
import ytdl from 'ytdl-core'

export const GET = (async (req: RequestEvent, res: RequestHandler) => {
  let info = await ytdl.getInfo("ycQqiLpEbZI")
  let audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
  let url = audioFormats.findLast((a) => a.mimeType?.includes("audio/mp4; codecs="))?.url

  console.log(url)
  try {
    const response = await fetch(url!)

    const streamedResponse = new Response(response.body, {
      status: response.status,
      headers: { 'Content-Type': 'audio/mpeg', 'Transfer-Encoding': 'chunked' }
    })

    return streamedResponse
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response('Failed to fetch data', { status: 500 })
  }
})

