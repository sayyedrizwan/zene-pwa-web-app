import { DataIndexDS, indexDB, musicPlayerInfoCache } from '$lib/utils/indexd'
import { MusicType, type MusicData } from '../../../domain/local/entities/MusicData'
import { MusicPlayerData } from '../../../domain/local/entities/MusicPlayerData'

interface AudioPlayer {
  init(): void
  play(url: Blob, music: MusicData): Promise<void>
  pause(): void
  stop(): void
  isPlaying(): boolean | undefined
}

export function getDuration(event: any) {
  event.target.currentTime = 0
  event.target.removeEventListener('timeupdate', getDuration)
}

export class APManager implements AudioPlayer {

  private audioElement: HTMLAudioElement | undefined
  private sourceElement: HTMLSourceElement | undefined

  init(): void {
    if (this.audioElement != undefined) {
      this.stop()
    }

    this.audioElement = document.getElementById('a') as HTMLAudioElement
    this.sourceElement = document.getElementById('s') as HTMLSourceElement

    this.audioElement.onerror = (event) => {
      console.log(event)
    }

    this.audioElement.addEventListener('ended', () => {
      console.log('Audio has ended')
    })

    this.audioElement.addEventListener('pause', () => {
      console.log('Audio has been paused')
    })

    this.audioElement.addEventListener('play', () => {
      console.log('Audio has started playing')
    })
    this.audioElement.addEventListener('loadedmetadata', () => {
      if (this.audioElement?.duration === Infinity || isNaN(Number(this.audioElement?.duration))) {
        this.audioElement!.currentTime = 1e101
        this.audioElement?.addEventListener('timeupdate', getDuration)
      }
    })
  }

  async play(url: Blob, music: MusicData): Promise<void> {
    stop()
    const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
    cacheDB.deleteAllRecords()
    let m = new MusicPlayerData([], music, 0, 0, MusicType.MUSIC)
    cacheDB.saveToIndexedDB(m)

    this.audioElement!.preload = 'auto'
    this.audioElement?.addEventListener('canplaythrough', () => {
      if (this.audioElement?.paused) {
        const event = new Event('click')
        this.audioElement.dispatchEvent(event)
        this.audioElement.play()
      }
    }, false)

    navigator.mediaSession.metadata = new MediaMetadata({
      title: music.name ?? 'Zene',
      artist: music.artists ?? 'zene: free music player',
      artwork: [{ src: music.thumbnail ?? 'https://zenemusic.co/logo512.png', sizes: '512x512' }],
    })

    this.audioElement!.autoplay = true

    const convert = await convertBlobToWav(url)
    this.sourceElement!.src = URL.createObjectURL(convert)
    this.sourceElement!.type = 'audio/wav'
    this.audioElement!.load()
    this.audioElement!.play()
  }

  pause(): void {
    this.audioElement?.pause()
  }

  isPlaying(): boolean {
    return !this.audioElement?.paused
  }

  stop(): void {
    try {
      if (this.audioElement?.src != undefined) URL.revokeObjectURL(this.audioElement?.src)
      this.audioElement?.pause()
      this.audioElement!.currentTime = 0
    } catch (error) {
      error
    }
  }
}

async function convertBlobToWav(blob: Blob): Promise<Blob> {
  const arrayBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = () => resolve(fileReader.result as ArrayBuffer)
    fileReader.onerror = reject
    fileReader.readAsArrayBuffer(blob)
  });

  const audioContext = new AudioContext()
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  const wavBuffer = audioBufferToWav(audioBuffer)

  return new Blob([wavBuffer], { type: 'audio/wav' })
}

function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
  const numChannels = buffer.numberOfChannels
  const sampleRate = buffer.sampleRate
  const numFrames = buffer.length

  const bytesPerSample = 2
  const blockAlign = numChannels * bytesPerSample
  const byteRate = sampleRate * blockAlign

  const wavBuffer = new ArrayBuffer(44 + numFrames * blockAlign)
  const dataView = new DataView(wavBuffer)


  dataView.setUint32(0, 0x52494646)
  dataView.setUint32(4, 36 + numFrames * blockAlign, true)
  dataView.setUint32(8, 0x57415645)
  dataView.setUint32(12, 0x666d7420)
  dataView.setUint32(16, 16, true)
  dataView.setUint16(20, 1, true);
  dataView.setUint16(22, numChannels, true)
  dataView.setUint32(24, sampleRate, true)
  dataView.setUint32(28, byteRate, true)
  dataView.setUint16(32, blockAlign, true);
  dataView.setUint16(34, 8 * bytesPerSample, true);
  dataView.setUint32(36, 0x64617461)
  dataView.setUint32(40, numFrames * blockAlign, true)


  const channelData = new Array(numChannels)
  for (let i = 0; i < numChannels; i++) {
    channelData[i] = buffer.getChannelData(i)
  }

  let offset = 44
  for (let i = 0; i < numFrames; i++) {
    for (let j = 0; j < numChannels; j++) {
      const sample = Math.max(-1, Math.min(1, channelData[j][i]))
      const int16Value = sample < 0 ? sample * 0x8000 : sample * 0x7fff
      dataView.setInt16(offset, int16Value, true)
      offset += bytesPerSample
    }
  }

  return wavBuffer;
}