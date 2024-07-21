
export class DBMusicHistory {
    email: String
    name: String
    artists: String
    id: String
    thumbnail: String
    deviceInfo: String
    timestamp: number
    timesItsPlayed: number
    type: String

    constructor(email: String, name: String, artists: String, id: String, thumbnail: String, deviceInfo: String, timestamp: number, timesItsPlayed: number, type: String) {
        this.email = email
        this.name = name
        this.artists = artists
        this.id = id
        this.thumbnail = thumbnail
        this.deviceInfo = deviceInfo
        this.timestamp = timestamp
        this.timesItsPlayed = timesItsPlayed
        this.type = type
    }
}
