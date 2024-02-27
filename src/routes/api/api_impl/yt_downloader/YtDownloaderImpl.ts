import { yt2_downloader_convertor, yt2_downloader_task_convertor, yt2_mate_downloader_header, ytDownloaderDownload, ytDownloaderY2mateDownload, yt_downloader_header } from "./ytdownloaderutils"
import { waitServer } from "../../utils/utils"
import type { YT2MateInfoResponse, YT2MateInfoTaskJsonResponse, YT2MateInfoTaskResponse } from "./domain/YT2MateInfoResponse"
import type { YTDownloaderResponse } from "./domain/YTDownloaderResponse"

export class YTDownloaderImpl {

  async videoURL(videoId: string) {
    try {
      const response = await fetch(ytDownloaderDownload(videoId), { method: 'POST', headers: yt_downloader_header, body: `platform=youtube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${videoId}&title=HISS&id=${videoId}&ext=mp3&note=128k&format=` })
      const r = await response.json() as YTDownloaderResponse
      if ((r?.status ?? "") === "success") return r?.downloadUrlX
    } catch (error) {
      error
    }
    
    try {
      const responseOther = await fetch(ytDownloaderY2mateDownload(videoId), { method: 'GET', headers: yt2_mate_downloader_header })
      const rOther = await responseOther.json() as YT2MateInfoResponse
      if (rOther.error === true) return ""

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

      return downloadURL
    } catch (error) {
      return ""
    }
  }
}