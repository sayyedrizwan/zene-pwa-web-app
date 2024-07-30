export class DBPlaylistsSong {
    playlistId: String
    songId: String
    timestamp: number

    constructor(playlistId: String, songId: String, timestamp: number) {
        this.songId = songId
        this.playlistId = playlistId
        this.timestamp = timestamp
    }
}
