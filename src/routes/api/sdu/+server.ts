import { type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import ytdl from 'ytdl-core'


export const GET = (async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ""

  let audioStream = ytdl(`https://www.youtube.com/watch?v=${atob(video_url)}`, { quality: "highestaudio" });
  return new Response(audioStream as any , { headers: { "content-disposition": "attachment" , "content-type": "video/mp4" } });
})