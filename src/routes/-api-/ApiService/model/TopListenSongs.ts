import type { MusicData } from "./MusicData"

export class MostListeningData {
    listening: string
    music: MusicData
    

    constructor(listening: string, music: MusicData) {
        this.listening = listening
        this.music = music
    }
}