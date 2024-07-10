
export class MusicData {
    name: String
    artists: String
    id: String
    thumbnail: String
    type: MUSICTYPE

    constructor(name: String, artists: String, id: String, thumbnail: String, type: MUSICTYPE) {
        this.name = name
        this.artists = artists
        this.id = id
        this.thumbnail = thumbnail
        this.type = type
    }
}

export enum MUSICTYPE {
    SONGS, PLAYLIST, ALBUMS, ARTISTS 
}