import Hls from 'hls.js'
import { MusicData, MusicType } from '../../domain/local/entities/MusicData'


interface AudioPlayer {
  init(): void
  play(url: string, music: MusicData): Promise<void>
  updatemetadata(music: MusicData): void
  pause(): void
  stop(): void
  isPlaying(): boolean | undefined
  isBuffering(): boolean | undefined
  songDuration(): number
}

export function getDuration(event: any) {
  event.target.currentTime = 0
  event.target.removeEventListener('timeupdate', getDuration)
}

export class APManager implements AudioPlayer {
  private audioElement: HTMLAudioElement | undefined
  private sourceElementOGG: HTMLSourceElement | undefined
  private sourceElementMPEG: HTMLSourceElement | undefined
  private videoElement: HTMLVideoElement | undefined
  private music: MusicData | undefined
  private buffering: Boolean = false

  init(): void {
    if (this.audioElement != undefined) {
      this.stop()
    }

    const videoe = document.createElement('video') as HTMLVideoElement
    const audioe = document.createElement('audio') as HTMLAudioElement

    const oggsource = document.createElement('source') as HTMLSourceElement
    oggsource.type = 'audio/ogg'
    audioe.appendChild(oggsource)

    const mpegsource = document.createElement('source') as HTMLSourceElement
    mpegsource.type = 'audio/mpeg'
    audioe.appendChild(mpegsource)


    this.videoElement = videoe
    this.audioElement = audioe
    this.sourceElementOGG = oggsource
    this.sourceElementMPEG = mpegsource

    this.audioElement.onplay = () => this.buffering = false
    this.videoElement.onplay = () => this.buffering = false

    this.audioElement.oncanplaythrough = () => {
      this.audioElement!.play()
      if (this.audioElement?.paused) {
        const event = new Event('click')
        this.audioElement.dispatchEvent(event)
        this.audioElement.play()
      }
    }

    this.audioElement.addEventListener('loadedmetadata', () => {
      this.audioElement!.title = ""
      this.updatemetadata(this.music!)

      if (this.audioElement?.duration === Infinity || isNaN(Number(this.audioElement?.duration))) {
        this.audioElement!.currentTime = 1e101
        this.audioElement?.addEventListener('timeupdate', getDuration)
      }
    })

    this.videoElement.oncanplaythrough = () => {
      this.videoElement!.play()
      if (this.videoElement?.paused) {
        const event = new Event('click')
        this.videoElement.dispatchEvent(event)
        this.videoElement.play()
      }
    }

    this.videoElement.addEventListener('loadedmetadata', () => {
      this.updatemetadata(this.music!)
    })
  }

  async play(url: string, music: MusicData): Promise<void> {
    stop()

    this.music = music
    this.audioElement!.preload = 'auto'
    this.videoElement!.preload = 'auto'
    this.buffering = true

    if (music.type == MusicType.RADIO) {
      if (url.includes(".m3u8") === true){
        if (Hls.isSupported()) {
          var hls = new Hls()
          hls.loadSource(url)
          hls.loadSource(url)
          hls.attachMedia(this.videoElement!);
        } else if (this.videoElement!.canPlayType('application/vnd.apple.mpegurl')) {
          this.videoElement!.src = url
        }
      } else
          this.videoElement!.src = url

      return
    }

    this.audioElement!.autoplay = true
    this.sourceElementMPEG!.src = url
    this.sourceElementOGG!.src = url
    this.audioElement!.load()
  }


  updatemetadata(music: MusicData): void {
    const ms = window.navigator.mediaSession
    if (!ms) return

    ms.metadata = new window.MediaMetadata({
      title: `${music?.name ?? 'Zene'}`,
      artist: `${music?.artists ?? 'zene: free music player'}`,
      album: 'Zene',
      artwork: [{ src: music?.thumbnail ?? "", sizes: '512x512', type: 'image/png' }]
    })

    const setActionHandler = ms.setActionHandler.bind(ms)

    setActionHandler('play', () => {
      this.audioElement!.play()
    })

    setActionHandler('pause', () => {
      this.audioElement!.pause()
    })
    setActionHandler('seekbackward', function () { })
    setActionHandler('seekforward', function () { })
    setActionHandler('previoustrack', function () { })
    setActionHandler('nexttrack', function () { })
  }


  pause(): void {
    this.audioElement?.pause()
  }

  isPlaying(): boolean {
    if (this.music?.type == MusicType.RADIO) {
      return !this.videoElement?.paused
    }
    return !this.audioElement?.paused
  }

  isBuffering(): boolean | undefined {
    this.audioElement!.duration
    if (this.buffering == true) return true

    if (this.music?.type == MusicType.RADIO) {
      return this.audioElement!.networkState == 2
    }
    return this.audioElement!.networkState == 2
  }

  songDuration(): number {
   if(isNaN(this.audioElement!.duration)) return 0
   return this.audioElement!.duration
  }

  stop(): void {
    try {
      this.videoElement?.pause()
      this.videoElement!.currentTime = 0
    } catch (error) {
      error
    }

    try {
      this.audioElement?.pause()
      this.audioElement!.currentTime = 0
    } catch (error) {
      error
    }
  }
}