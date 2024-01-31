import { MusicData } from '../../domain/local/entities/MusicData'


interface AudioPlayer {
  init(): void
  play(url: string, music: MusicData): Promise<void>
  updatemetadata(music: MusicData): void
  pause(): void
  stop(): void
  isPlaying(): boolean | undefined
  isBuffering(): boolean | undefined
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
  private buffering: Boolean = false

  init(): void {
    if (this.audioElement != undefined) {
      this.stop()
    }

    const audioe = document.createElement('audio') as HTMLAudioElement

    const oggsource = document.createElement('source') as HTMLSourceElement
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
      this.buffering = false
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
    this.buffering = true

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
    return !this.audioElement?.paused
  }

  isBuffering(): boolean | undefined {
    if(this.buffering == true) return true

    return this.audioElement!.networkState == 2
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