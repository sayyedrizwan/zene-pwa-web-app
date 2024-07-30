import type { SocialProfileUserData } from "../soundcloud/model/SocialProfileUserData"
import type { MusicData } from "./MusicData"

export class ArtistsData {
    songs: MusicData[]
    albums: MusicData[]
    videos: MusicData[]
    playlists: MusicData[]
    artists: MusicData[]
    news: MusicData[]

    constructor(songs: MusicData[], albums: MusicData[], videos: MusicData[], playlists: MusicData[], artists: MusicData[], news: MusicData[]) {
        this.songs = songs
        this.albums = albums
        this.videos = videos
        this.playlists = playlists
        this.artists = artists
        this.news = news
    }
}

export class ArtistsDataInfo {
    name: String
    img: String[]
    topSongs: MusicData[]
    desc: String | null
    followers: number
    socialMedia: SocialProfileUserData
    radioID: String | null

    constructor(name: String, img: String[], topSongs: MusicData[], desc: String | null, followers: number, socialMedia: SocialProfileUserData,  radioID: String | null) {
        this.name = name
        this.img = img
        this.topSongs = topSongs
        this.desc = desc
        this.followers = followers
        this.socialMedia = socialMedia
        this.radioID = radioID
    }
}