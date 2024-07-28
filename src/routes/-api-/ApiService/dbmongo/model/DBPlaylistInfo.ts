
export class DBPlaylists {
    id: String
    email: String
    name: String
    img: String
    timestamp: number

    constructor(email: String, name: String, img: String, id: String, timestamp: number) {
        this.email = email
        this.name = name
        this.img = img
        this.id = id
        this.timestamp = timestamp
    }
}
