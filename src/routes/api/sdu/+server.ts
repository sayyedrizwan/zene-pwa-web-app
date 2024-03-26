import { type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import { downloadBlobInChunks, YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import { decryptAPIKeyAndIsValidOfSong } from '../utils/EncryptionForAPI'
import { redirect } from '@sveltejs/kit';
import axios from 'axios'

export const GET = async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ''
  const key = new URL(req.url).searchParams.get('k') ?? ''
  const ipAddress = new URL(req.url).searchParams.get('pp') ?? ''

  // if (!decryptAPIKeyAndIsValidOfSong(req, key, ipAddress)) return new Response(null, { status: 200, headers: {} })

  const videoId = video_url.length > 20 ? video_url : atob(video_url)

  if (videoId.length > 20 && videoId.split('-').length > 3) {
    const radio = new RadioBrowserImpl()
    const response = await radio.radioPlayURL(videoId)
    const url = response[0].url_resolved == null ? response[0].url : response[0].url_resolved
    throw redirect(302, url!)
  }

  const ytDownloader = new YTDownloaderImpl()
  const url = await ytDownloader.videoURL(videoId, false)
  const responseInfo = await axios.head(url!)

  const response = await downloadBlobInChunks(url!, 2000000, responseInfo.headers['content-length'])
  const blob = new Blob(response, { type: 'audio/mpeg' })

  let header: any = {}

  Object.keys(responseInfo.headers).forEach((i) => {
    header[i] = responseInfo.headers[i]
  })
  return new Response(blob, { status: 200, headers: header })
}
