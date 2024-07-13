import mysql from 'mysql2/promise';
import type { MusicData } from '../ApiService/model/MusicData';

const isDev = true
const auth = "qtASBDg887XCIJBVB112Pl.AYuhn2e"

//aiven
export const mysqlpool: any = mysql.createPool({
    host: isDev ? 'mysql-2bab654c-sayyedrizwanahme-db86.h.aivencloud.com' : 'j3v.h.filess.io',
    user: isDev ? 'avnadmin' : 'zenemusic_tapechest',
    database: isDev ? 'users' : 'zenemusic_tapechest',
    password: isDev ? 'AVNS_52AdOsyCcYA1DBd0DJL' : 'a33f2d3fbf728e74cc42d3c82e64cacebf358422',
    port: isDev ? 18874 : 3307,
    waitForConnections: true,
    connectionLimit: 3,
    maxIdle: 3,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
})

export const shuffle = (array: MusicData[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function isYear(str: string): boolean {
    const yearRegex = /^\d{4}$/
    if (!yearRegex.test(str)) return false
    
    const year = parseInt(str, 10)
    const currentYear = new Date().getFullYear()
    return year >= 0 && year <= currentYear
}

export function verifyHeader(request: Request) {
    const key = request.headers.get("auth")
    if (key == auth) return true

    return false
}


export const GLOBAL_TRENDING_ARTISTS = "GLOBAL_TRENDING_ARTISTS"
export const MOST_LISTEN_SONGS = "MOST_LISTEN_SONGS"


export const lastFMListeningSongs = "https://kerve.last.fm/kerve/charts"
export const billboardTopArtists = "https://www.billboard.com/charts/artist-100/"


export const tokenSpotify = 'https://accounts.spotify.com/api/token'
export const searchSpotify = 'https://api.spotify.com/v1/search'


const clientNameYTName = "WEB_REMIX"
const clientNameYTVersion = "1.20240703.00.00"

export const ytMusicSearchSongParam = "EgWKAQIIAWoSEAkQAxAEEA4QBRAKEBUQEBAR"
export const ytMusicSearchAlbumsParam = "EgWKAQIgAWoQEAMQCRAOEAoQBBAFEBEQEA%3D%3D"

export const ytMusicNext = "https://music.youtube.com/youtubei/v1/next?prettyPrint=false"
export const ytMusicBrowse = "https://music.youtube.com/youtubei/v1/browse?prettyPrint=false"
export const ytMusicSearch = "https://music.youtube.com/youtubei/v1/search?prettyPrint=false"
export const ytMusicHeader = {
    'content-type': 'application/json',
    'cookie': 'GPS=1;',
    'origin': 'https://music.youtube.com'
}

export function ytMusicvideoID(id: string): string {
    return JSON.stringify({
        "videoId": id,
        "isAudioOnly": true,
        "context": {
            "client": {
                "clientName": clientNameYTName,
                "clientVersion": clientNameYTVersion
            }
        }
    })
}

export function ytMusicPlaylistSongs(id: string): string {
    return JSON.stringify({
        "enablePersistentPlaylistPanel": true,
        "tunerSettingValue": "AUTOMIX_SETTING_NORMAL",
        "playlistId": "RDAMVM" + id,
        "isAudioOnly": true,
        "context": {
            "client": {
                "clientName": clientNameYTName,
                "clientVersion": clientNameYTVersion
            }
        }
    })
}

export function ytMusicBrowseID(id: string): string {
    return JSON.stringify({
        "context": {
            "client": {
                "clientName": clientNameYTName,
                "clientVersion": clientNameYTVersion
            }
        },
        "browseId": id
    })
}
export function ytMusicBrowseIDWithParam(q: string, params: string): string {
    return JSON.stringify({
        "context": {
            "client": {
                "clientName": clientNameYTName,
                "clientVersion": clientNameYTVersion
            }
        },
        "query": q,
        "params": params
    })
}

export function timeDifferenceIs24Hours(oldTimestamp: string) : Boolean {
    const currentTimestamp = new Date().getTime()
    const oldDate = new Date(oldTimestamp).getTime()
    const differenceInMs = currentTimestamp - oldDate
    
    const hours = Math.floor((differenceInMs / (1000 * 60 * 60)) % 24)

    if(hours > 24) return true
    return false
}

export function timeDifferenceInHours(oldTimestamp: string) {
    const currentTimestamp = new Date().getTime()
    const oldDate = new Date(oldTimestamp).getTime()
    const differenceInMs = currentTimestamp - oldDate

    const hours = Math.floor((differenceInMs / (1000 * 60 * 60)) % 24)
}