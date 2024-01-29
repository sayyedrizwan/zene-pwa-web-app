import { type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { ytDownloaderDownload, yt_downloader_define, yt_downloader_header } from './ytdownloaderutils'
import type { YTDownloaderResponse } from './domain/YTDownloaderResponse'


export const GET = (async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ""
  const videoId = atob(video_url)

  try {
    await fetch(yt_downloader_define, { method: 'POST', headers: yt_downloader_header, body: `url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${videoId}&ajax=1&lang=en` })
    const response = await fetch(ytDownloaderDownload(videoId), { method: 'POST', headers: yt_downloader_header, body: `platform=youtube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${videoId}&title=HISS&id=${videoId}&ext=mp3&note=128k&format=` })
    const r = await response.json() as YTDownloaderResponse
    if (r.status != "success") return new Response("")

    return new Response(btoa(r.downloadUrlX))
  } catch (error) {
    console.log(error)
    return new Response("")
  }
})