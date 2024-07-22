import type { MusicData } from "./MusicData"

export class ArtistsData {
    songs: MusicData[]
    albums: MusicData[]
    videos: MusicData[]
    artists: MusicData[]

    constructor(songs: MusicData[], albums: MusicData[], videos: MusicData[], artists: MusicData[]) {
        this.songs = songs
        this.albums = albums
        this.videos = videos
        this.artists = artists
    }
}

export class ArtistsDataInfo {
    name: String
    img: String[]
    topSongs: MusicData[]
    desc: String | null

    constructor(name: String, img: String[], topSongs: MusicData[], desc: String | null) {
        this.name = name
        this.img = img
        this.topSongs = topSongs
        this.desc = desc
    }
}