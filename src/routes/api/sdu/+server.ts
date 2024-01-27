import { type RequestEvent } from '@sveltejs/kit'
import { Readable } from 'node:stream'
import fs from 'fs'
import { atob, btoa } from 'buffer'
import ytdl from 'ytdl-core'
import axios from 'axios'


export const GET = (async (req: RequestEvent, res: Response) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ""

  // try {
  //   const web_rstream = Readable.toWeb(ytdl(`https://www.youtube.com/watch?v=${atob(video_url)}`))
  //   return new Response(web_rstream)
  // } catch (error) {
  //   return new Response('')
  // }

  // const responseHeaders = new Headers(req.request.headers)

  // const randomName = Math.random().toString(36).substring(2, 15)

  // responseHeaders.set("Content-Disposition", `attachment; filename="${randomName}.mp4"`)


  // responseHeaders.set(
  //   "User-Agent",
  //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
  // );

  // const data = ytdl(`https://www.youtube.com/watch?v=${atob(video_url)}`, {
  //   filter: 'audioonly',
  //   quality: 'highestaudio',
  // })

  // console.log(data)

  // return new Response(data as any, {
  //   headers: responseHeaders,
  // })

  let audioStream = ytdl(`https://www.youtube.com/watch?v=${atob(video_url)}`, { quality: "lowestaudio" });

  return new Response(audioStream as any , { headers: { "content-disposition": "attachment" , "content-type": "video/mp4" } });

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