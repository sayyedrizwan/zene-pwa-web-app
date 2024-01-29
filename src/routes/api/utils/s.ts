import { MusicData } from '../../../domain/local/entities/MusicData'


interface AudioPlayer {
  init(): void
  play(url: string, music: MusicData): Promise<void>
  updatemetadata(music: MusicData): void
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
  private sourceElementOGG: HTMLSourceElement | undefined
  private sourceElementMPEG: HTMLSourceElement | undefined
  private music: MusicData | undefined

  init(): void {
    if (this.audioElement != undefined) {
      this.stop()
    }

    const audioe = document.createElement('audio') as HTMLAudioElement

    const oggsource = document.createElement('source')  as HTMLSourceElement
    oggsource.type = 'audio/ogg'
    audioe.appendChild(oggsource)

    const mpegsource = document.createElement('source') as HTMLSourceElement
    mpegsource.type = 'audio/mpeg'
    audioe.appendChild(mpegsource)

    this.audioElement = audioe
    this.sourceElementOGG = oggsource
    this.sourceElementMPEG = mpegsource

    // this.audioElement.onerror = () => {
    //   console.log('error')
    // }

    this.audioElement.addEventListener('ended', () => {
      console.log('Audio has ended')
    })

    this.audioElement.addEventListener('pause', () => {
      console.log('Audio has been paused')
    })

    this.audioElement.addEventListener('play', () => {
      console.log('Audio has started playing')
    })

    this.audioElement.oncanplaythrough = () => this.audioElement!.play()

    this.audioElement.addEventListener('loadedmetadata', () => {
      this.audioElement!.title = ""
      this.updatemetadata(this.music!)

      if (this.audioElement?.duration === Infinity || isNaN(Number(this.audioElement?.duration))) {
        this.audioElement!.currentTime = 1e101
        this.audioElement?.addEventListener('timeupdate', getDuration)
      }
    })
  }

  async play(url: string, music: MusicData): Promise<void> {
    stop()
    this.music = music

    this.audioElement!.preload = 'auto'
    this.audioElement?.addEventListener('canplaythrough', () => {
      if (this.audioElement?.paused) {
        const event = new Event('click')
        this.audioElement.dispatchEvent(event)
        this.audioElement.play()
      }
    }, false)

    this.audioElement!.autoplay = true
    this.sourceElementMPEG!.src = url
    this.sourceElementOGG!.src = url
    this.audioElement!.load()
  }


  updatemetadata(music: MusicData): void {
    const ms = window.navigator.mediaSession
    if (!ms) return

    ms.metadata = new window.MediaMetadata({
      title: `${music.name ?? 'Zene'}`,
      artist: `${music.artists ?? 'zene: free music player'}`,
      album: 'Zene',
      artwork: [{ src: music.thumbnail ?? "", sizes: '512x512', type: 'image/png' }]
    })

    const setActionHandler = ms.setActionHandler.bind(ms)

    setActionHandler('play', function () { })
    setActionHandler('pause', function () { })
    setActionHandler('seekbackward', function () { })
    setActionHandler('seekforward', function () { })
    setActionHandler('previoustrack', function () { })
    setActionHandler('nexttrack', function () { })
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


export async function convertBlobToWav(blob: Blob): Promise<Blob> {
  const arrayBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = () => resolve(fileReader.result as ArrayBuffer)
    fileReader.onerror = reject
    fileReader.readAsArrayBuffer(blob)
  })

  const audioContext = new AudioContext()
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  const wavBuffer = audioBufferToWav(audioBuffer)

  return new Blob([wavBuffer], { type: 'audio/wav' })
}

export function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
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