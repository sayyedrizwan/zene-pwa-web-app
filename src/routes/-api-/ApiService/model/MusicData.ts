
export class MusicData {
    name: String
    artists: String
    id: String
    thumbnail: String
    extra: String
    type: MUSICTYPE

    constructor(name: String, artists: String, id: String, thumbnail: String, type: MUSICTYPE, extra: String = "") {
        this.name = name
        this.artists = artists
        this.id = id
        this.thumbnail = thumbnail
        this.extra = extra
        this.type = type
    }
}

export enum MUSICTYPE {
    SONGS = "SONGS", PLAYLIST = "PLAYLIST", ALBUMS = "ALBUMS", ARTISTS = "ARTISTS", VIDEO = "VIDEO", MOOD = "MOOD"
}