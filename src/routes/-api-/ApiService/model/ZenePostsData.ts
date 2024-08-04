export class ZenePostsData {
    url?: String
    thumbnail?: string | null
    media?: (string | null)[]
    timestamp?: number
    profileImg?: String
    username?: String
    name?: String
    caption?: String
    type: FEEDTYPE

    constructor(url: String, thumbnail: string | null, media: (string | null)[], timestamp: number, profileImg: String, username: String, name: String, caption: String, type: FEEDTYPE) {
        this.url = url
        this.thumbnail = thumbnail
        this.media = media
        this.timestamp = timestamp
        this.profileImg = profileImg
        this.username = username
        this.name = name
        this.caption = caption
        this.type = type
    }
}


export enum FEEDTYPE {
    INSTAGRAM = "INSTAGRAM", YOUTUBE_POSTS = "YOUTUBE_POSTS", YOUTUBE_SHORTD = "YOUTUBE_SHORTS", NEWS = "NEWS"
}