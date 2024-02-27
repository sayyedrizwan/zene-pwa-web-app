import { yt2_downloader_convertor, yt2_downloader_task_convertor, yt2_mate_downloader_header, yt5s_ink_download_token, yt5s_ink_downloader, yt5s_ink_header, ytDownloaderY2mateDownload } from "./ytdownloaderutils"
import { waitServer } from "../../utils/utils"
import type { YT2MateInfoResponse, YT2MateInfoTaskJsonResponse, YT2MateInfoTaskResponse } from "./domain/YT2MateInfoResponse"
import { JSDOM } from 'jsdom'
import type { YT5sDownloadResponse } from "./domain/YT5sDownloadResponse"

export class YTDownloaderImpl {

  async videoURL(videoId: string) {
    // try {
    //   const r = await fetch(yt5s_ink_download_token)
    //   const token = (new JSDOM(await r.text())).window.document.querySelector('#token')?.getAttribute("value")

    //   const urlencoded = new URLSearchParams()
    //   urlencoded.append("url", `https://m.youtube.com/watch?v=${videoId}`)
    //   urlencoded.append("token", token ?? "")

    //   const downloaderResponse = await fetch(yt5s_ink_downloader, {method : 'POST', body: urlencoded , headers : yt5s_ink_header})
    //   const downloader = await downloaderResponse.json() as YT5sDownloadResponse
    //   return downloader.medias.findLast((d) => d.quality == "128kbps" && d.extension == "mp3")?.url
    // } catch (error) {
    //   error
    // }

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