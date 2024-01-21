export class APManager {
    private audioContext: AudioContext | null
    private audioElement: HTMLAudioElement
  
    constructor() {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      this.audioElement = new Audio()
    }
  
    playAudio(url: string) {
      this.audioElement.pause()
      if (this.audioContext) {
        this.audioContext.close()
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      this.audioElement.crossOrigin = "anonymous"
      this.audioElement.src = url
  
      const source = this.audioContext?.createMediaElementSource(this.audioElement)
      source?.connect(this.audioContext?.destination!)

      this.audioElement.play()
    }
  }