import { type RequestEvent } from '@sveltejs/kit'
import { atob, btoa } from 'buffer'
import ytdl from 'ytdl-core'


export const GET = (async (url: RequestEvent) => {
  const video_url = new URL(url.url).searchParams.get('id') ?? ""

  try {
    const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${atob(video_url)}`)
    let url: string = ''

    info.formats.forEach((element) => {
      if(element.hasAudio === true && element.hasVideo === false && element.container === "mp4"){
        url = element.url
      }
    })

    // if (element.hasAudio === true && element.qualityLabel === '360p' && url === '') {
    //   url = element.url
    // }

    return new Response(url)
  } catch (error) {
    return new Response('')
  }
})