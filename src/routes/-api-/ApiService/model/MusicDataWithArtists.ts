import type { MusicData } from "./MusicData"

export class MusicDataWithArtists {
    artists: MusicData
    songs: MusicData[]

    constructor(artists: MusicData, songs: MusicData[]) {
        this.artists = artists
        this.songs = songs
    }
}