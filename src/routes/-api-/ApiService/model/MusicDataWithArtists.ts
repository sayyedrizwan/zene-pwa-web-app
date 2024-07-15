import type { MusicData } from "./MusicData"

export class MusicDataWithArtists {
    artists: MusicData
    songs: MusicData[]
    playlists: MusicData[]

    constructor(artists: MusicData, songs: MusicData[], playlists: MusicData[]) {
        this.artists = artists
        this.songs = songs
        this.playlists = playlists
    }
}