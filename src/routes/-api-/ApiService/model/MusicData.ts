
export class MusicData {
    name: String
    artists: String
    id: String
    thumbnail: String
    type: MUSICTYPE
    extra: String

    constructor(name: String, artists: String, id: String, thumbnail: String, type: MUSICTYPE, extra: String = "") {
        this.name = name
        this.artists = artists
        this.id = id
        this.thumbnail = thumbnail
        this.type = type
        this.extra = extra
    }
}

export enum MUSICTYPE {
    SONGS = "SONGS", PLAYLIST = "PLAYLIST", ALBUMS = "ALBUMS", ARTISTS = "ARTISTS", VIDEO = "VIDEO", MOOD = "MOOD", RADIO = "RADIO", RADIO_LANG = "RADIO_LANG", RADIO_COUNTRIES = "RADIO_COUNTRIES", STORE = "STORE", NEWS = "NEWS"
}