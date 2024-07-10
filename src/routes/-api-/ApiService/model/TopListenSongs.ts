import type { MusicData } from "./MusicData"

export class MostListeningData {
    artistsName: String
    listening: number
    music: MusicData
    

    constructor(artistsName: String, listening: number, music: MusicData) {
        this.artistsName = artistsName
        this.listening = listening
        this.music = music
    }
}