import { json, type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import { YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { DURLResponse } from '../../../domain/local/entities/DURLResponse'
import { isSameServerIp } from '../utils/utils'

export const GET = async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ''
  const videoId = video_url.length > 20 ? video_url : atob(video_url)
  const isSameServer = await isSameServerIp(req.cookies.get('i') ?? ``)

  if (isFromZeneOrigin(req) === false) json({})

  try {
    if (videoId.length > 20 && videoId.split('-').length > 3) {
      const radio = new RadioBrowserImpl()
      const response = await radio.radioPlayURL(videoId)
      const url = response[0].url_resolved == null ? response[0].url : response[0].url_resolved
      return json(new DURLResponse(url ?? '', 3))
    }

    const ytDownloader = new YTDownloaderImpl()
    const url = await ytDownloader.videoURL(videoId, isSameServer)

    if (url === '') return json({})
    let urlPoint = ''
    let type = 0

    if (url.includes('srvcdn7.2convert.me/dl?')) {
      urlPoint = url.textAfterKeyword('srvcdn7.2convert.me/dl?hash=') ?? ''
      type = 0
    } else if (url.includes('wsnd.io/')) {
      urlPoint = url.textAfterKeyword('wsnd.io/')?.replaceAll('/videoplayback.mp4', '') ?? ''
      type = 1
    } else {
      urlPoint = url
      type = 3
    }

    return json(new DURLResponse(urlPoint, type))
  } catch (error) {
    return json({})
  }
}
