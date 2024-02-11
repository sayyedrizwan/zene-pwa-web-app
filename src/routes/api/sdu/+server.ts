import { type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import { YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'


export const GET = (async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ""
  const videoId = atob(video_url)

  if(isFromZeneOrigin(req) === false) new Response("")
  
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

    return new Response(btoa(url ?? ""))
  } catch (error) {
    return new Response("")
  }
})