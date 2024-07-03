import { json, type RequestEvent } from '@sveltejs/kit'
import { downloadBlobInChunks, YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import axios from 'axios'

export const GET = async (req: RequestEvent) => {
  const videoId = new URL(req.url).searchParams.get('id') ?? ''
  const isApple = new URL(req.url).searchParams.get('ios') ?? ''

  const ytDownloader = new YTDownloaderImpl()
  const url = isApple == "true" ? await ytDownloader.videoURL(videoId, false) : await ytDownloader.audioYTDownloader(videoId)
  const responseInfo = await axios.head(url!)

  const response = await downloadBlobInChunks(url!, 2000000, responseInfo.headers['content-length'])
  const blob = new Blob(response, { type: 'audio/mp4' })

  let header: any = {}

  Object.keys(responseInfo.headers).forEach((i) => {
    header[i] = responseInfo.headers[i]
  })

  return new Response(blob, { status: 200, headers: header })
}