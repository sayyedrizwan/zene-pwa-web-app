import Hls from 'hls.js'
import { MusicData, MusicType } from '../../../domain/local/entities/MusicData'
import { insertMusicHistory } from './shistory'
import type { DURLResponse } from '../../../domain/local/entities/DURLResponse'
import { getCookie } from '../c'


interface AudioPlayer {
  init(): void
  playMusic(path: DURLResponse, music: MusicData): Promise<void>
  updatemetadata(music: MusicData): void
  pause(): void
  play(): void
  stop(): void
  playOrPause(): void
  seekForward(v: number): void
  seekBackward(v: number): void
  isPlaying(): boolean | undefined
  isBuffering(): boolean | undefined
  nextSong(): void
  previousSong():void
  songDuration(): number
  changeSongDuration(v: number): void
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
    if (this.videoElement != undefined) {
      this.stop()
    }

    const videoe = document.createElement('video') as HTMLVideoElement
    const audioe = document.createElement('audio') as HTMLAudioElement

    const oggsource = document.createElement('source') as HTMLSourceElement
    oggsource.type = 'audio/ogg'
    audioe.appendChild(oggsource)

    const mpegsource = document.createElement('source') as HTMLSourceElement
    mpegsource.type = 'audio/mp3'
    audioe.appendChild(mpegsource)

    this.videoElement = videoe
    this.audioElement = audioe
    this.sourceElementOGG = oggsource
    this.sourceElementMPEG = mpegsource

    this.audioElement.onplay = () => this.buffering = false
    this.videoElement.onplay = () => this.buffering = false


    this.audioElement.onended = () => {
      if (getCookie('should_loop') == 'should') {
        try {
          this.audioElement?.pause()
          this.audioElement!.currentTime = 0
          this.audioElement?.play()
        } catch (error) {
          error
        }
      }
    }

    this.audioElement.oncanplaythrough = () => {
      this.audioElement!.play()

      if (this.music != undefined) insertMusicHistory(this.music, window)


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

  async playMusic(path: DURLResponse, music: MusicData): Promise<void> {
    stop()
    const url = path.type == 0 ? `https://srvcdn7.2convert.me/dl?hash=${path?.u}` : path.type == 1 ? `https://0x0.st/${path?.u?.trim()}.mp3` : path.u?.trim() ?? ``
    this.music = music
    this.audioElement!.preload = 'auto'
    this.videoElement!.preload = 'auto'
    this.buffering = true

    if (music.type == MusicType.RADIO) {
      if (url.includes(".m3u8") === true) {
        if (Hls.isSupported()) {
          var hls = new Hls()
          hls.loadSource(url)
          hls.attachMedia(this.videoElement!)
        } else if (this.videoElement!.canPlayType('application/vnd.apple.mpegurl')) {
          this.videoElement!.autoplay = true
          this.videoElement!.src = url
          this.videoElement!.load()
        }
      } else {
        this.videoElement!.autoplay = true
        this.videoElement!.src = url
        this.videoElement!.load()
      }
      return
    }

    this.audioElement!.autoplay = true
    this.sourceElementMPEG!.src = url.trim()
    this.sourceElementOGG!.src = url.trim()
    this.audioElement!.load()
  }

  startBuffering(): void {
    this.stop()
    this.buffering = true
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
    setActionHandler('seekbackward', () => {
      this.seekBackward(5)
    })
    setActionHandler('seekforward', () => {
      this.seekForward(5)
    })

    setActionHandler('previoustrack', function () { })
    setActionHandler('nexttrack', function () { })
  }


  pause(): void {
    this.audioElement?.pause()
  }

  playOrPause(): void {
    if (this.isPlaying()) this.audioElement?.pause()
    else this.audioElement?.play()
  }

  play(): void {
    this.audioElement?.play()
  }

  seekForward(v: number): void {
    this.audioElement!.currentTime = this.audioElement!.currentTime + v
  }

  seekBackward(v: number): void {
    this.audioElement!.currentTime = this.audioElement!.currentTime - v
  }

  nextSong(): void {
   
  }

  previousSong(): void {
   
  }

  isPlaying(): boolean {
    if (this.music?.type == MusicType.RADIO) {
      return !this.videoElement?.paused
    }
    return !this.audioElement?.paused
  }

  isBuffering(): boolean | undefined {
    if (this.audioElement!.currentTime > 0) return false
    if (this.audioElement?.paused === false) return false
    if (this.buffering == true) return true

    if (this.music?.type == MusicType.RADIO) return this.audioElement!.networkState == 2
    return this.audioElement!.networkState == 2
  }

  songDuration(): number {
    if (isNaN(this.audioElement!.duration)) return 0
    return this.audioElement!.duration
  }

  songCurrentDuration(): number {
    if (isNaN(this.audioElement!.currentTime)) return 0
    return this.audioElement!.currentTime
  }

  async changeSongDuration(v: number) {
    this.audioElement!.currentTime = v
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