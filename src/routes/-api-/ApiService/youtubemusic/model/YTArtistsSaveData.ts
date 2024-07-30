import type { MusicData } from "../../model/MusicData"

export class YTArtistsSaveData {
    songPlaylistID: String
    songPlaylistItems: MusicData[]
    albumsID: String
    albumsItems: MusicData[]
    videoID: String
    videoItems: MusicData[]
    playlistID: String
    playlistItems: MusicData[]
    artistsItems: MusicData[]

    constructor(songPlaylistID: String, songPlaylistItems: MusicData[], albumsID: String, albumsItems: MusicData[], videoID: String, videoItems: MusicData[], playlistID: String, playlistItems: MusicData[], artistsItems: MusicData[]) {
        this.songPlaylistID = songPlaylistID
        this.songPlaylistItems = songPlaylistItems
        this.albumsID = albumsID
        this.albumsItems = albumsItems
        this.videoID = videoID
        this.videoItems = videoItems
        this.playlistID = playlistID
        this.playlistItems = playlistItems
        this.artistsItems = artistsItems
    }
}
