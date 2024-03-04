import { yt2_downloader_convertor, yt2_downloader_task_convertor, yt2_mate_downloader_header, yt5s_ink_download_token, yt5s_ink_downloader, yt5s_ink_header, ytDownloaderY2mateDownload } from "./ytdownloaderutils"
import { generateRandomString, waitServer } from "../../utils/utils"
import type { YT2MateInfoResponse, YT2MateInfoTaskJsonResponse, YT2MateInfoTaskResponse } from "./domain/YT2MateInfoResponse"
import ytdl from 'ytdl-core'
import axios, { type AxiosResponse } from "axios"

export class YTDownloaderImpl {

  async videoURL(videoId: string, isSameServer: Boolean) {
    const path = await this.videoYTDownloader(videoId, isSameServer)
    if (path != null) return path

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


  async videoYTDownloader(videoId: string, isSameServer: Boolean): Promise<string | null> {
    try {
      let info = await ytdl.getInfo(videoId)
      let audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
      let url = audioFormats.findLast((a) => a.mimeType?.includes("audio/mp4; codecs="))?.url

      if (isSameServer === true) return url ?? null

      const fileSize = await getFileSize(url!)
      const chucks = await downloadBlobInChunks(url!, 1000000, fileSize!)
      const blob = new Blob(chucks, { type: 'audio/mp4' })

      const formData = new FormData();
      formData.append('file', blob, `${new Date().getTime()}_${generateRandomString(20)}.mp3`)
      formData.append('expires', "2")

      const request = await fetch('https://0x0.st/', { method: "POST", body: formData })
      const response = await request.text()

      return response.trim()
    } catch (error) {
      return null
    }
  }

}

async function getFileSize(url: string): Promise<number | null> {
  try {
    const response = await axios.head(url)
    const contentLength = response.headers['content-length']
    return contentLength ? parseInt(contentLength, 10) : null
  } catch (error) {
    return null
  }
}


async function downloadBlobInChunks(url: string, chunkSize: number, fileSize: number): Promise<Uint8Array[]> {
  const chunks: Uint8Array[] = []
  let start = 0

  let status = true

  setTimeout(() => {
    status = false
  }, 5 * 1000)

  while (status) {
    const end = Math.min(start + chunkSize - 1, fileSize - 1)
    const headers = { Range: `bytes=${start}-${end}` }
    try {
      const response: AxiosResponse<ArrayBuffer> = await axios.get(url, { responseType: 'arraybuffer', headers })

      const chunk = new Uint8Array(response.data)
      chunks.push(chunk)
      if (end === fileSize - 1) break
      start = end + 1
    } catch (error) {
      break
    }
  }
  return chunks
}