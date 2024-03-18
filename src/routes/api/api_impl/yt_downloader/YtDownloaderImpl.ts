import { yt2_downloader_convertor, yt2_downloader_task_convertor, yt2_mate_downloader_header, yt5s_ink_download_token, yt5s_ink_downloader, yt5s_ink_header, ytDownloaderY2mateDownload } from './ytdownloaderutils'
import { generateRandomString, waitServer } from '../../utils/utils'
import type { YT2MateInfoResponse, YT2MateInfoTaskJsonResponse, YT2MateInfoTaskResponse } from './domain/YT2MateInfoResponse'
import ytdl from 'ytdl-core'
import axios, { type AxiosResponse } from 'axios'
import type { CA3ConvertorResponse } from './domain/CA3ConvertorResponse'

export class YTDownloaderImpl {
  async videoURL(videoId: string, isSameServer: Boolean, isSafari: Boolean) {
    const path = await this.videoYTDownloader(videoId, isSameServer, isSafari)
    if (path != null) return path

    try {
      const responseOther = await fetch(ytDownloaderY2mateDownload(videoId), { method: 'GET', headers: yt2_mate_downloader_header })
      const rOther = (await responseOther.json()) as YT2MateInfoResponse
      if (rOther.error === true) return ''

      let audioQuality = 0
      let audioHash = ''

      rOther.formats.audio.forEach((a) => {
        if (a.quality >= audioQuality) {
          audioQuality = a.quality
          audioHash = a.url
        }
      })

      const responseOtherConvertor = await fetch(yt2_downloader_convertor, { method: 'POST', headers: yt2_mate_downloader_header, body: `hash=${encodeURIComponent(audioHash)}` })
      const rOtherConvertor = (await responseOtherConvertor.json()) as YT2MateInfoTaskResponse

      let downloadURL = ''
      let doneLoopTimes = 0

      while (downloadURL === '') {
        const responseOtherResponse = await fetch(yt2_downloader_task_convertor, { method: 'POST', headers: yt2_mate_downloader_header, body: `taskId=${rOtherConvertor.taskId}` })
        const rOtherResonse = (await responseOtherResponse.json()) as YT2MateInfoTaskJsonResponse

        if (rOtherResonse.convert_progress === 100 && rOtherResonse.status === 'finished') {
          downloadURL = rOtherResonse.download
        }
        if (doneLoopTimes >= 15) downloadURL = 'non'
        else doneLoopTimes += 1
        await waitServer(1000)
      }

      return downloadURL
    } catch (error) {
      return ''
    }
  }

  async videoYTDownloader(videoId: string, isSameServer: Boolean, isSafari: Boolean): Promise<string | null> {
    try {
      let info = await ytdl.getInfo(videoId)
      let audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
      console.log(audioFormats)
      let url = audioFormats.findLast((a) => a.mimeType?.includes('audio/mp4; codecs='))?.url
      
      return url ?? null

      // if (isSameServer == true && (url ?? null != null)) return url ?? ''

      // const fileSize = await getFileSize(url!)
      // const chucks = await downloadBlobInChunks(url!, 1000000, fileSize!)
      // const blob = new Blob(chucks, { type: 'audio/mp4' })

      // return blob
      // if (isSafari) {
      //   const convert = await convertedMP3(blob)
      //   if (convert != null) return convert.trim()
      // }

      // const responseUid = await fetch('https://wsend.net/createunreg', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      //   body: 'start=1',
      // })
      // const uid = await responseUid.text()

      // const formData = new FormData()
      // formData.append('filehandle', blob, 'videoplayback.mp4')
      // formData.append('uid', uid)
      // const request = await fetch('https://wsend.net/upload_cli', { method: 'POST', headers: {}, body: formData })
      // const response = await request.text()
      // return response.trim()
    } catch (error) {
      return null
    }
  }
}

async function convertedMP3(blob: Blob): Promise<string | null> {
  try {
    const formdata = new FormData()
    formdata.append('files[]', blob, `${generateRandomString(20)}_${generateRandomString(20)}.mp4`)
    formdata.append('target', 'djvu')
    formdata.append('ajax', '1')
    formdata.append('ajax', '1')

    const convertor = await fetch('https://ca3.converter.app/mp4-to-mp3/uploader.php', { method: 'POST', body: formdata })
    const response = (await convertor.json()) as CA3ConvertorResponse

    await fetch(`https://ca3.converter.app/mp4-to-mp3/process.php?jobid=${response.jobid}`, { method: 'POST' })
    let isConvertorRunning = true

    setTimeout(() => {
      isConvertorRunning = false
    }, 2000)

    while (isConvertorRunning) {
      await waitServer(600)
      const responseConverter = await fetch(`https://ca3.converter.app/mp4-to-mp3/display.php?jobid=${response.jobid}`, { method: 'POST' })
      if ((await responseConverter.text()).trim() == '100') isConvertorRunning = false
    }

    await waitServer(1000)

    return `https://ca3.converter.app/download.php?jobid=${response.jobid}`
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getFileSize(url: string): Promise<number | null> {
  try {
    const response = await axios.head(url)
    const contentLength = response.headers['content-length']
    return contentLength ? parseInt(contentLength, 10) : null
  } catch (error) {
    return null
  }
}

export async function downloadBlobInChunks(url: string, chunkSize: number, fileSize: number): Promise<Uint8Array[]> {
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
