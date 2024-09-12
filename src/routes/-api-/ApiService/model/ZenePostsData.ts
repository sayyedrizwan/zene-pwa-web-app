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

export function convertEpochTime(timestamp: number | undefined): string {
    if(timestamp == undefined) return ""
    const now = Date.now();
    const diff = now - timestamp;
    const second = 1000;        
    const minute = second * 60; 
    const hour = minute * 60; 
    const day = hour * 24; 
    const week = day * 7;
    const year = day * 365;

    if (diff < minute) {
        return `${Math.floor(diff / second)}s ago`;
    }

    if (diff < hour) {
        return `${Math.floor(diff / minute)}m ago`;
    }
    if (diff < day) {
        return `${Math.floor(diff / hour)}h ago`;
    }
    if (diff < week) {
        return `${Math.floor(diff / day)}d ago`;
    }
    if (diff < year) {
        return `${Math.floor(diff / week)}w ago`;
    }
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getFullYear()}`;
}