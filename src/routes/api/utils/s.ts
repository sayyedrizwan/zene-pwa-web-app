import type { MusicData } from "../../../domain/local/entities/MusicData";

interface AudioPlayer {
    init(): void
    play(url:string, music: MusicData): void
    pause(): void
    stop(): void
}

export function getDuration(event: any) {
    event.target.currentTime = 0
    event.target.removeEventListener('timeupdate', getDuration)
    console.log(event.target.duration)
}
export class APManager implements AudioPlayer {
    private audioElement: HTMLAudioElement | undefined

    init(): void {
        if (this.audioElement != undefined) {
            this.stop()
        }

        this.audioElement = new Audio()
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

    play(url:string, music: MusicData): void {
        this.audioElement!.preload = 'auto'
        this.audioElement?.addEventListener('canplaythrough', () => {
            if (this.audioElement?.paused) {
                const event = new Event('click')
                this.audioElement.dispatchEvent(event)
                this.audioElement.play()
            }
        }, false)

        navigator.mediaSession.metadata = new MediaMetadata({
            title: music.name ?? "Zene",
            artist: music.artists ?? "zene: free music player",
            artwork: [{ src: music.thumbnail ?? "https://zenemusic.co/logo512.png", sizes: '512x512' }]
        })

        this.audioElement!.src = url
        this.audioElement!.load()
    }

    pause(): void {
        this.audioElement?.pause()
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