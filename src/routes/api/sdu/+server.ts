import { type RequestEvent } from '@sveltejs/kit'
import fs from 'node:fs'
import { atob } from 'buffer'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import { downloadBlobInChunks, YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import { decryptAPIKeyAndIsValidOfSong } from '../utils/EncryptionForAPI'
import { redirect } from '@sveltejs/kit'
import axios from 'axios'

export const GET = async (req: RequestEvent) => {
  const video_url = new URL(req.url).searchParams.get('id') ?? ''
  const key = new URL(req.url).searchParams.get('k') ?? ''
  const ipAddress = new URL(req.url).searchParams.get('pp') ?? ''

  if (!decryptAPIKeyAndIsValidOfSong(req, key, ipAddress)) {
    // const response = await downloadBlobInChunks('https://www.zenemusic.co/download/videoplayback.mp4', 400, responseInfo.headers['content-length'])

    // const data = await fs.promises.readFile('./download/videoplayback.mp4', 'utf8');
    // const blob = new Blob([data], { type: 'audio/mp4' })
    // return new Response(blob, { status: 200, headers: getTempHeader() })
  }

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
  const blob = new Blob(response, { type: 'audio/mp4' })

  let header: any = {}

  Object.keys(responseInfo.headers).forEach((i) => {
    header[i] = responseInfo.headers[i]
  })

  return new Response(blob, { status: 200, headers: header })
}

function getTempHeader() {
  const today = new Date()
  const pastDate = new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000)

  const options: any = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'GMT'
  }

  return {
    'last-modified': pastDate.toLocaleDateString('en-US', options),
    'content-type': 'video/mp4',
    date: today.toLocaleDateString('en-US', options),
    expires: today.toLocaleDateString('en-US', options),
    'cache-control': 'private, max-age=21297',
    'accept-ranges': 'bytes',
    'content-length': '29000',
    connection: 'close',
    vary: 'Origin',
    'cross-origin-resource-policy': 'cross-origin',
    'x-content-type-options': 'nosniff',
    server: 'gvs 1.0'
  }
}