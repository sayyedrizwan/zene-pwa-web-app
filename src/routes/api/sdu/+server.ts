import { json, type RequestEvent } from '@sveltejs/kit'
import { atob, btoa } from 'buffer'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import { YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { DURLResponse } from '../../../domain/local/entities/DURLResponse'


export const GET = (async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ""
  const videoId = atob(video_url)
  
  if(isFromZeneOrigin(req) === false) json({})

  try {
    if(videoId.length > 20 && videoId.split("-").length > 3){
      const radio = new RadioBrowserImpl()
      const response = await radio.radioPlayURL(videoId)
      const url = response[0].url_resolved == null ? response[0].url : response[0].url_resolved
      return new Response(btoa(url ?? "").replaceLastChar("=", ""))
    }

    const ytDownloader = new YTDownloaderImpl()
    const url = await ytDownloader.videoURL(videoId)

    if (url === "") return json({})
    let urlPoint = ''
    let type = 0
    
    if(url.includes("srvcdn7.2convert.me/dl?")){
       urlPoint = url.textAfterKeyword("srvcdn7.2convert.me/dl?hash=") ?? ""
       type = 0
    } else if(url.includes("x0.at/")){
       urlPoint = url.textAfterKeyword("x0.at/")?.replaceAll(".mp3", "") ?? ""
       type = 1
    }

    return json(new DURLResponse(urlPoint, type))
  } catch (error) {
    return json({})
  }
})