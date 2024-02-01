import { type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { yt2_downloader_convertor, yt2_downloader_task_convertor, yt2_mate_downloader_header, ytDownloaderDownload, ytDownloaderY2mateDownload, yt_downloader_define, yt_downloader_header } from './ytdownloaderutils'
import type { YTDownloaderResponse } from './domain/YTDownloaderResponse'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import type { YT2MateInfoResponse, YT2MateInfoTaskJsonResponse, YT2MateInfoTaskResponse } from './domain/YT2MateInfoResponse'
import { waitServer } from '../utils/utils'


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
    if (r.status == "success") return new Response(btoa(r.downloadUrlX))

    const responseOther = await fetch(ytDownloaderY2mateDownload(videoId), { method: 'GET', headers: yt2_mate_downloader_header })
    const rOther = await responseOther.json() as YT2MateInfoResponse

    if (rOther.error === true) return new Response('')

    let audioQuality = 0
    let audioHash = ''

    rOther.formats.audio.forEach(a => {
      if (a.quality >= audioQuality) {
        audioQuality = a.quality
        audioHash = a.url
      }
    })

    const responseOtherConvertor = await fetch(yt2_downloader_convertor, { method: 'POST', headers: yt2_mate_downloader_header, body: `hash=${encodeURIComponent(audioHash)}` })
    const rOtherConvertor = await responseOtherConvertor.json() as YT2MateInfoTaskResponse

    let downloadURL = ''
    let doneLoopTimes = 0

    while (downloadURL === '') {
      const responseOtherResponse = await fetch(yt2_downloader_task_convertor, { method: 'POST', headers: yt2_mate_downloader_header, body: `taskId=${rOtherConvertor.taskId}` })
      const rOtherResonse = await responseOtherResponse.json() as YT2MateInfoTaskJsonResponse

      if (rOtherResonse.convert_progress === 100 && rOtherResonse.status === "finished") {
          downloadURL = rOtherResonse.download
      }
      if (doneLoopTimes >= 15) downloadURL = 'non'
      else doneLoopTimes += 1
      await waitServer(1000)
    }

    return new Response(btoa(downloadURL))
  } catch (error) {
    return new Response("")
  }
})