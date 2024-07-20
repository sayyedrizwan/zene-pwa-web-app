
export class DBMusicHistory {
    email: String
    name: String
    artists: String
    id: String
    thumbnail: String
    deviceInfo: String
    deviceType: String
    timestamp: number
    timesItsPlayed: number

    constructor(email: String, name: String, artists: String, id: String, thumbnail: String, deviceInfo: String, deviceType: String, timestamp: number, timesItsPlayed: number) {
        this.email = email
        this.name = name
        this.artists = artists
        this.id = id
        this.thumbnail = thumbnail
        this.deviceInfo = deviceInfo
        this.deviceType = deviceType
        this.timestamp = timestamp
        this.timesItsPlayed = timesItsPlayed
    }
}
