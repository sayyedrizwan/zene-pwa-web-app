import { type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { yt2_downloader_convertor, yt2_downloader_task_convertor, yt2_mate_downloader_header, ytDownloaderDownload, ytDownloaderY2mateDownload, yt_downloader_define, yt_downloader_header } from '../api_impl/yt_downloader/ytdownloaderutils'
import type { YTDownloaderResponse } from '../api_impl/yt_downloader/domain/YTDownloaderResponse'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import type { YT2MateInfoResponse, YT2MateInfoTaskJsonResponse, YT2MateInfoTaskResponse } from '../api_impl/yt_downloader/domain/YT2MateInfoResponse'
import { waitServer } from '../utils/utils'
import { YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'


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

    const ytDownloader = new YTDownloaderImpl()
    const url = await ytDownloader.videoURL(videoId)

    if (url === "") return new Response("")

    return new Response(btoa(url))
  } catch (error) {
    return new Response("")
  }
})