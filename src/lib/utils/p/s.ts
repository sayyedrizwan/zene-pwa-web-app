import Hls from 'hls.js'
import { MusicData, MusicType } from '../../../domain/local/entities/MusicData'
import { insertMusicHistory } from './shistory'
import { getCookie } from '../c'
import { DataIndexDS, indexDB, musicPlayerInfoCache, wait } from '../indexd'
import type { MusicPlayerData } from '../../../domain/local/entities/MusicPlayerData'
import { en_ars4sfrb, g, pppllaaayyyPatthh } from '../pid'
import { playSongZene } from '../f'
import { gK } from '../Utils'

interface AudioPlayer {
  goToNextSong(): Promise<void>
  init(): void
  playMusic(url: string, music: MusicData, ap: string): Promise<void>
  updatemetadata(music: MusicData): void
  pause(): void
  play(): void
  stop(): void
  playOrPause(): void
  seekForward(v: number): void
  seekBackward(v: number): void
  isPlaying(): boolean | undefined
  isBuffering(): boolean | undefined
  forcePlaySong(): void
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
  private sourceElementMPEG: HTMLSourceElement | undefined
  private sourceElementMP4: HTMLSourceElement | undefined
  private music: MusicData | undefined
  private buffering: Boolean = false
  private k: string = ``

  async goToNextSong(): Promise<void> {
    const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
    const records: any = await cacheDB.retrieveFromIndexedDB()

    let musicData = (records.length > 0) ? records[0] as MusicPlayerData : null
    if (musicData == null) return

    const musicDataItem = musicData?.lists.findIndex(v => musicData?.m.songId == v.songId)
   
    this.stop()
    this.startBuffering()
    try {
      const data = musicData?.lists[musicDataItem! + 1]!
      playSongZene(data, [], false)
      await wait(500)
      playSongZene(data, musicData?.lists, false)
      this.playMusic(pppllaaayyyPatthh(data.songId!, this.k, gK()), data, this.k)
    } catch (error) {
      error
    }
  }

  init(): void {
    if (this.audioElement != undefined) {
      this.stop()
    }

    const audioe = document.createElement('audio') as HTMLVideoElement
    audioe.controls = true
    audioe.autoplay = true
    audioe.preload = 'auto'

    const mp4source = document.createElement('source') as HTMLSourceElement
    mp4source.type = 'audio/mp4'
    audioe.appendChild(mp4source)

    const mpegsource = document.createElement('source') as HTMLSourceElement
    mpegsource.type = 'audio/mpeg'
    audioe.appendChild(mpegsource)


    this.sourceElementMP4 = mp4source
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
      } else if (getCookie('autoplay_next_song') == '') {
        this.goToNextSong()
      }
    }

    this.audioElement.oncanplaythrough = async () => {
      if (this.music != undefined) insertMusicHistory(this.music, window)
      this.forcePlaySong()
    }

    this.audioElement.addEventListener('loadedmetadata', async () => {
      this.audioElement!.title = ''
      
      if (this.audioElement?.duration === Infinity || isNaN(Number(this.audioElement?.duration))) {
        this.audioElement!.currentTime = 1e101
        this.audioElement?.addEventListener('timeupdate', getDuration)
      }

      await wait(900)

      this.updatemetadata(this.music!)

      if (this.music?.type == MusicType.RADIO) {
        await wait(1000)
        this.play()
        this.pause()
        await wait(900)
        this.play()
      }
    })
  }

  async playMusic(url: string, music: MusicData, ap: string): Promise<void> {
    this.stop()
    
    this.k = ap
    this.music = music
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
    this.sourceElementMP4!.src = url.trim()
    this.updatemetadata(this.music!)
    this.audioElement!.load()
    this.playbackSpeed()
  }

  forcePlaySong(): void {
    this.audioElement!.play()

    if (this.audioElement?.paused) {
      const event = new Event('click')
      this.audioElement.dispatchEvent(event)
      this.audioElement.play()
    }
  }

  playbackSpeed(): void {
    let songSpeed = 1.0

    if (getCookie('song_speed') == '0.25x') songSpeed = 0.25
    else if (getCookie('song_speed') == '0.5x') songSpeed = 0.5
    else if (getCookie('song_speed') == '0.75x') songSpeed = 0.75
    else if (getCookie('song_speed') == '1.25x') songSpeed = 1.25
    else if (getCookie('song_speed') == '1.5x') songSpeed = 1.5
    else if (getCookie('song_speed') == '1.75x') songSpeed = 1.75
    else if (getCookie('song_speed') == '2.0x') songSpeed = 2.0
    else songSpeed = 1.0

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

  nextSong(): void { }

  previousSong(): void { }

  isPlaying(): boolean {
    return !this.audioElement?.paused
  }

  isBuffering(): boolean | undefined {
    if (this.music?.type == MusicType.RADIO) return false
    if (this.audioElement!.currentTime > 0) return false
    if (this.audioElement!.currentTime > 0) return false
    if (this.audioElement?.paused === false) return false
    if (this.buffering == true) return true

    return this.audioElement!.networkState == 2
  }

  songDuration(): number {
    try {
      if (isNaN(this.audioElement!.duration)) return 0
      return this.audioElement!.duration
    } catch (error) {
      return 0
    }
  }

  songCurrentDuration(): number {
    try {
      if (isNaN(this.audioElement!.currentTime)) return 0
      return this.audioElement!.currentTime
    } catch (error) {
      return 0
    }
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
