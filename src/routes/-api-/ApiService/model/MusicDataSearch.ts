import type { MusicData } from "./MusicData"

export class MusicDataSearch {
    artists: MusicData[]
    songs: MusicData[]
    playlists: MusicData[]
    videos: MusicData[]
    albums: MusicData[]

    constructor(artists: MusicData[], songs: MusicData[], playlists: MusicData[], videos: MusicData[], albums: MusicData[]) {
        this.artists = artists
        this.songs = songs
        this.playlists = playlists
        this.videos = videos
        this.albums = albums
    }
}