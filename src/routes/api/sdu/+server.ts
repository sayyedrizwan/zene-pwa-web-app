import { type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { ytDownloaderDownload, yt_downloader_define, yt_downloader_header } from './ytdownloaderutils'
import type { YTDownloaderResponse } from './domain/YTDownloaderResponse'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'


export const GET = (async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ""
  const videoId = atob(video_url)
  try {
    if(videoId.length > 20 && videoId.split("-").length > 3){
      const radio = new RadioBrowserImpl()
      const response = await radio.radioPlayURL(videoId)
      const url = response[0].url_resolved == null ? response[0].url : response[0].url_resolved
      return new Response(btoa(url ?? ""))
    }

    const response = await fetch(ytDownloaderDownload(videoId), { method: 'POST', headers: yt_downloader_header, body: `platform=youtube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${videoId}&title=HISS&id=${videoId}&ext=mp3&note=128k&format=` })
    const r = await response.json() as YTDownloaderResponse
    if (r.status != "success") return new Response("")

    return new Response(btoa(r.downloadUrlX))
  } catch (error) {
    return new Response("")
  }
})