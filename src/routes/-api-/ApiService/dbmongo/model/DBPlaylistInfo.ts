
export class DBPlaylists {
    id: String
    email: String
    name: String
    img: String
    isSaved: Boolean
    timestamp: number

    constructor(email: String, name: String, img: String, id: String, isSaved: Boolean, timestamp: number) {
        this.email = email
        this.name = name
        this.img = img
        this.id = id
        this.isSaved = isSaved
        this.timestamp = timestamp
    }
}
