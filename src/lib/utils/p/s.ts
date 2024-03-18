import Hls from 'hls.js'
import { MusicData, MusicType } from '../../../domain/local/entities/MusicData'
import { insertMusicHistory } from './shistory'
import type { DURLResponse } from '../../../domain/local/entities/DURLResponse'
import { getCookie } from '../c'
import { wait } from '../indexd'
import { isIOSBrowser } from '../Utils'

interface AudioPlayer {
  init(): void
  playMusic(url: string, music: MusicData): Promise<void>
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
  previousSong(): void
  songDuration(): number
  changeSongDuration(v: number): void
  playbackSpeed(): void
}

export function getDuration(event: any) {
  event.target.currentTime = 0
  event.target.removeEventListener('timeupdate', getDuration)
}

export class APManager implements AudioPlayer {
  private audioElement: HTMLVideoElement | undefined
  private sourceElementOGG: HTMLSourceElement | undefined
  private sourceElementMPEG: HTMLSourceElement | undefined
  private music: MusicData | undefined
  private buffering: Boolean = false

  init(): void {
    if (this.audioElement != undefined) {
      this.stop()
    }

    const audioe = document.createElement('audio') as HTMLVideoElement

    const oggsource = document.createElement('source') as HTMLSourceElement
    oggsource.type = 'audio/ogg'
    audioe.appendChild(oggsource)

    const mpegsource = document.createElement('source') as HTMLSourceElement
    mpegsource.type = 'audio/mpeg'
    audioe.appendChild(mpegsource)

    this.sourceElementOGG = oggsource
    this.sourceElementMPEG = mpegsource
    this.audioElement = audioe

    this.audioElement.onplay = () => (this.buffering = false)

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

    this.audioElement.oncanplaythrough = async () => {
      this.audioElement!.play()

      if (this.music != undefined) insertMusicHistory(this.music, window)

      if (this.audioElement?.paused) {
        const event = new Event('click')
        this.audioElement.dispatchEvent(event)
        this.audioElement.play()
      }
    }

    this.audioElement.addEventListener('loadedmetadata', () => {
      this.audioElement!.title = ''
      this.updatemetadata(this.music!)

      if (this.audioElement?.duration === Infinity || isNaN(Number(this.audioElement?.duration))) {
        this.audioElement!.currentTime = 1e101
        this.audioElement?.addEventListener('timeupdate', getDuration)
      }
    })
  }

  async playMusic(url: string, music: MusicData): Promise<void> {
    this.stop()

    // const url = path.type == 0 ? `https://srvcdn7.2convert.me/dl?hash=${path?.u}` : path.type == 1 ? `https://wsnd.io/${path?.u?.trim()}/videoplayback.mp4` : path.type == 2 ? `https://ca3.converter.app/download.php?jobid=${path?.u?.trim()}` : path.u?.trim() ?? ``

    this.music = music
    this.audioElement!.preload = 'auto'
    this.buffering = true

    if (music.type == MusicType.RADIO) {
      if (url.includes('.m3u8') === true && Hls.isSupported()) {
        var hls = new Hls()
        hls.loadSource(url)
        hls.attachMedia(this.audioElement!)
        return
      }
    }

    this.audioElement!.autoplay = true
    this.sourceElementMPEG!.src = url.trim()
    this.sourceElementOGG!.src = url.trim()
    this.audioElement!.load()
    this.playbackSpeed()
  }

  playbackSpeed(): void {
    const songSpeed =
      getCookie('song_speed') == '0.25x'
        ? 0.25
        : getCookie('song_speed') == '0.5x'
          ? 0.5
          : getCookie('song_speed') == '0.75x'
            ? 0.75
            : getCookie('song_speed') == '1.25x'
              ? 1.25
              : getCookie('song_speed') == '1.5x'
                ? 1.5
                : getCookie('song_speed') == '1.75x'
                  ? 1.75
                  : getCookie('song_speed') == '2.0x'
                    ? 2.0
                    : 1.0
    this.audioElement!.playbackRate = songSpeed
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
      artwork: [{ src: music?.thumbnail ?? '', sizes: '512x512', type: 'image/png' }],
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

    setActionHandler('previoustrack', function () {})
    setActionHandler('nexttrack', function () {})
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

  nextSong(): void {}

  previousSong(): void {}

  isPlaying(): boolean {
    return !this.audioElement?.paused
  }

  isBuffering(): boolean | undefined {
    // if(isIOSBrowser()) return false
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
      this.audioElement?.pause()
      this.audioElement!.currentTime = 0
    } catch (error) {
      error
    }
  }
}
