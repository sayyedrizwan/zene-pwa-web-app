import { yt2_downloader_convertor, yt2_downloader_task_convertor, yt2_mate_downloader_header, yt5s_ink_download_token, yt5s_ink_downloader, yt5s_ink_header, ytDownloaderY2mateDownload } from "./ytdownloaderutils"
import { generateRandomString, waitServer } from "../../utils/utils"
import type { YT2MateInfoResponse, YT2MateInfoTaskJsonResponse, YT2MateInfoTaskResponse } from "./domain/YT2MateInfoResponse"
import ytdl from 'ytdl-core'
import axios, { type AxiosResponse } from "axios"

export class YTDownloaderImpl {

  async videoURL(videoId: string) {
    const path = await this.videoYTDownloader(videoId)
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


  async videoYTDownloader(videoId: string): Promise<string | null> {
    try {
      let info = await ytdl.getInfo(videoId)
      let audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
      let url = audioFormats.findLast((a) => a.mimeType?.includes("audio/mp4; codecs="))?.url

      const fileSize = await getFileSize(url!)
      const chucks = await downloadBlobInChunks(url!, 1000000, fileSize!)
      const blob = new Blob(chucks, { type: 'audio/mpeg' })

      const formData = new FormData();
      formData.append('file', blob, `${new Date().getTime()}_${generateRandomString(20)}.mp3`)
      formData.append('expires', "2")

      const request = await fetch('https://x0.at/', { method: "POST", body: formData })
      const response = await request.text()
      console.log(response)
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

function convertUint8ArrayToWav(audioData: Uint8Array, sampleRate: number, numChannels: number): Blob {

  // Function to create the WAV header
  function createWavHeader(dataLength: number): Uint8Array {
    const wavHeader = new ArrayBuffer(44);
    const view = new DataView(wavHeader);

    view.setUint32(0, 0x4E544646, false); // "RIFF" chunk identifier
    const chunkSize = dataLength + 36; // Chunk size excluding header
    view.setUint32(4, chunkSize, false);
    view.setUint32(8, 0x57415645, false); // "WAVE" format identifier

    // fmt subchunk
    view.setUint32(12, 16, false); // Subchunk size
    view.setUint16(14, 1, false); // PCM format (uncompressed)
    view.setUint16(16, numChannels, false); // Number of channels
    view.setUint32(20, sampleRate, false); // Sample rate
    view.setUint32(24, sampleRate * numChannels * 2, false); // Byte rate
    view.setUint16(28, numChannels * 2, false); // Block align (bytes per sample)
    view.setUint16(32, 16, false); // Bits per sample

    // data subchunk
    view.setUint32(36, dataLength, false); // Subchunk size

    return new Uint8Array(wavHeader);
  }

  // Interleave audio data if necessary (stereo)
  const isInterleaved = numChannels === 1;
  const interleavedData = isInterleaved ? audioData : (function interleaveData() {
    const channelData = [];
    for (let i = 0; i < numChannels; i++) {
      channelData.push(new Uint8Array(audioData.length / numChannels));
    }
    for (let i = 0; i < audioData.length; i++) {
      for (let j = 0; j < numChannels; j++) {
        channelData[j][i] = audioData[i * numChannels + j];
      }
    }
    const interleaved = new Uint8Array(audioData.length);
    let index = 0;
    for (const channel of channelData) {
      interleaved.set(channel, index);
      index += channel.length;
    }
    return interleaved;
  })();

  const header = createWavHeader(interleavedData.length);
  const combinedData = new Uint8Array(header.length + interleavedData.length);
  combinedData.set(header);
  combinedData.set(interleavedData, header.length);

  return new Blob([combinedData], { type: "audio/wav" });
}


function concatenateUint8Arrays(chunks: Uint8Array[]): Uint8Array {
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength)
  let offset = 0;

  chunks.forEach(chunk => {
    result.set(chunk, offset);
    offset += chunk.length;
  })

  return result;
}