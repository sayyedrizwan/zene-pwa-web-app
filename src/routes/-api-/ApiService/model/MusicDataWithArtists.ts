import type { MusicData } from "./MusicData"

export class MusicDataWithArtists {
    artists: MusicData
    songs: MusicData[]
    playlists: MusicData[]
    videos: MusicData[]

    constructor(artists: MusicData, songs: MusicData[], playlists: MusicData[], videos: MusicData[]) {
        this.artists = artists
        this.songs = songs
        this.playlists = playlists
        this.videos = videos
    }
}