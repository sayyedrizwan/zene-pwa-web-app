import mysql from 'mysql2/promise'
import { MongoClient } from 'mongodb'
import type { MusicData } from '../ApiService/model/MusicData';

const isDev = true
const auth = "qtASBDg887XCIJBVB112Pl.AYuhn2e"

//aiven
//filess.io
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

export const mongoDBClient = new MongoClient(`mongodb+srv://sayyedrizwanahmed:zenemusicpass@zene.4zu1ie4.mongodb.net/?retryWrites=true&w=majority&appName=zene`)
await mongoDBClient.connect()

export const shuffle = (array: MusicData[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const shuffleString = (array: String[]) => {
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

export function bingNewsMostRecent(q: String) : string{
    return `https://www.bing.com/news/search?q=${q.toLowerCase().replaceAll(" ", "+")}&qft=sortbydate%3d%221%22+interval%3d%227%22&form=YFNR`
}

export function bingNewsBest(q: String) : string {
    return `https://www.bing.com/news/search?q=${q.toLowerCase().replaceAll(" ", "+")}&qft=interval%3d%227%22&form=YFNR`
}


export const GLOBAL_TRENDING_ARTISTS = "GLOBAL_TRENDING_ARTISTS"
export const MOST_LISTEN_SONGS = "MOST_LISTEN_SONGS"
export const NEW_RELEASE_SONGS = "NEW_RELEASE_SONGS"



export const soundCloudBaseURL = "https://soundcloud.com/"
export const searchSearchUserURL = "https://api-v2.soundcloud.com/search/users"
export const searchUserURL = "https://api-v2.soundcloud.com/users"


export const lastFMListeningSongs = "https://kerve.last.fm/kerve/charts"
export const lastFMLSearchArtists = "https://www.last.fm/search/artists"
export const lastFMURL = "https://www.last.fm"
export const billboardTopArtists = "https://www.billboard.com/charts/artist-100/"


export const tokenSpotify = 'https://accounts.spotify.com/api/token'
export const searchSpotify = 'https://api.spotify.com/v1/search'


export const rentAnAdviser = "https://www.rentanadviser.com/subtitles/"


export const ytSearch = "https://www.youtube.com/youtubei/v1/search?prettyPrint=false"
export const ytBrowse = "https://www.youtube.com/youtubei/v1/browse?prettyPrint=false"


const clientNameYTName = "WEB"
const clientNameYTVersion = "2.20240712.01.00"


export const YT_STORE_PARAMS = "EgVzdG9yZfIGBAoCGgA%3D"

export const ytHeader = {
    'content-type': 'application/json',
    'cookie': 'GPS=1;',
    'origin': 'https://www.youtube.com',
    'x-origin': 'https://www.youtube.com'
}


export function ytBrowseQuery(q: string): string {
    return JSON.stringify({
        "context": {
            "client": {
                "clientName": clientNameYTName,
                "clientVersion": clientNameYTVersion
            }
        },
        "query": q
    })
}


export function ytBrowseQueryParams(id: string): string {
    return JSON.stringify({
        "context": {
            "client": {
                "clientName": clientNameYTName,
                "clientVersion": clientNameYTVersion
            }
        },
        "browseId": id,
        "params": YT_STORE_PARAMS
    })
}



export const ytMusicSearchSongParam = "EgWKAQIIAWoSEAkQAxAEEA4QBRAKEBUQEBAR"
export const ytMusicSearchArtistsParam = "EgWKAQIgAWoQEAMQCRAOEAoQBBAFEBEQEA%3D%3D"
export const ytMusicSearchAlbumsParam = "EgWKAQIYAWoQEAoQAxAEEAkQEBAFEBEQFQ%3D%3D"
export const ytMusicSearchPlaylistParam = "EgeKAQQoAEABahAQChADEAQQCRAQEAUQERAV"
export const ytMusicMoodAndGenresParam = "FEmusic_moods_and_genres"
export const ytMusicMoodAndGenresCategoryParam = "FEmusic_moods_and_genres_category"
export const ytMusicGridListParam = "ggMIegYIARoCAQI%3D"



const clientNameYTMusicName = "WEB_REMIX"
const clientNameYTMusicVersion = "1.20240703.00.00"


export const ytMusicNext = "https://music.youtube.com/youtubei/v1/next?prettyPrint=false"
export const ytMusicPlayer = "https://music.youtube.com/youtubei/v1/player?prettyPrint=false"
export const ytMusicBrowse = "https://music.youtube.com/youtubei/v1/browse?prettyPrint=false"
export const ytMusicSearchSuggestions = "https://music.youtube.com/youtubei/v1/music/get_search_suggestions?prettyPrint=false"
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
                "clientName": clientNameYTMusicName,
                "clientVersion": clientNameYTMusicVersion
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
                "clientName": clientNameYTMusicName,
                "clientVersion": clientNameYTMusicVersion
            }
        }
    })
}

export function ytMusicBrowseID(id: string): string {
    return JSON.stringify({
        "context": {
            "client": {
                "clientName": clientNameYTMusicName,
                "clientVersion": clientNameYTMusicVersion
            }
        },
        "browseId": id
    })
}

export function ytMusicBrowseIDWithParam(q: string, params: string): string {
    return JSON.stringify({
        "context": {
            "client": {
                "clientName": clientNameYTMusicName,
                "clientVersion": clientNameYTMusicVersion
            }
        },
        "query": q,
        "params": params
    })
}

export function ytMusicIDWithParam(q: string, params: string): string {
    return JSON.stringify({
        "context": {
            "client": {
                "clientName": clientNameYTMusicName,
                "clientVersion": clientNameYTMusicVersion
            }
        },
        "browseId": q,
        "params": params
    })
}

export function ytMusicSongID(vID: string): string {
    return JSON.stringify({
        "videoId": vID,
        "context": {
            "client": {
                "clientName": clientNameYTMusicName,
                "clientVersion": clientNameYTMusicVersion
            }
        }
    })
}

export function ytMusicInput(q: string): string {
    return JSON.stringify({
        "input": q,
        "context": {
            "client": {
                "clientName": clientNameYTMusicName,
                "clientVersion": clientNameYTMusicVersion
            }
        }
    })
}


export function timeDifferenceIs24Hours(oldTimestamp: string): Boolean {
    const currentTimestamp = new Date().getTime()
    const oldDate = new Date(parseInt(oldTimestamp)).getTime()
    const differenceInMs = currentTimestamp - oldDate
    let hours = Math.floor(differenceInMs / (1000 * 60 * 60))
    if (hours > 12) return true
    return false
}

export function timeDifferenceInHours(oldTimestamp: string) {
    const currentTimestamp = new Date().getTime()
    const oldDate = new Date(oldTimestamp).getTime()
    const differenceInMs = currentTimestamp - oldDate

    const hours = Math.floor((differenceInMs / (1000 * 60 * 60)) % 24)
}