import type { IpJsonResponse } from '../../radiolist/domain/IpJsonResponse'

export const YT_MUSIC_KEY = 'AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30'

export const ytMusicHeader = {
  authority: 'music.youtube.com',
  'cache-control': 'no-cache',
  'content-type': 'application/json',
  origin: 'https://music.youtube.com',
  referer: 'https://music.youtube.com',
  pragma: 'no-cache',
}

const userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36,gzip(gfe)'
const clientName = 'WEB_REMIX'
const clientVersion = '1.20240205.00.00'

export const yt_music_search = `https://music.youtube.com/youtubei/v1/search?key=${YT_MUSIC_KEY}&prettyPrint=false`
export const yt_music_song_info = `https://music.youtube.com/youtubei/v1/player?key=${YT_MUSIC_KEY}&prettyPrint=false`
export const yt_music_next = `https://music.youtube.com/youtubei/v1/next?key=${YT_MUSIC_KEY}&prettyPrint=false`
export const yt_music_browse = `https://music.youtube.com/youtubei/v1/browse?key=${YT_MUSIC_KEY}0&prettyPrint=false`
export const yt_music_search_suggestion = `https://music.youtube.com/youtubei/v1/music/get_search_suggestions?key==${YT_MUSIC_KEY}&prettyPrint=false`
export const all_search_params = 'EgWKAQIIAWoSEAMQBBAFEA4QChAQEAkQERAV'
export const all_search_artists_params = 'EgWKAQIgAWoSEAMQCRAEEA4QChAFEBAQERAV'
export const all_search_albums_params = 'EgWKAQIYAWoSEAMQCRAEEA4QChAFEBAQERAV'
export const new_release_params = 'FEmusic_new_releases'

export function ytMusicBodyWithParams(q: string, params: string): string {
  return `{
        "context": {
            "client": {
                "userAgent": "${userAgent}",
                "clientName": "${clientName}",
                "clientVersion": "${clientVersion}"
            }
        },
        "query": "${q}",
        "params": "${params}"
    }
    `
}

export function ytMusicBodyWithInput(q: string): string {
  return `{
        "input": "${q}",
        "context": {
            "client": {
                "userAgent": "${userAgent}",
                "clientName": "${clientName}",
                "clientVersion": "${clientVersion}"
            }
        }
    }
    `
}

export function ytMusicBodyWithParamsWithIp(ip: IpJsonResponse | null, b: string): string {
  if (ip == null)
    return `
    {
        "context": {
            "client": {
                "userAgent": "${userAgent}",
                "clientName": "${clientName}",
                "clientVersion": "${clientVersion}"
            }
        },
        "browseId": "${b}"
    }
    `
  else
    return `
    {
        "context": {
            "client": {
                "gl": "${ip?.countryCode}",
                "remoteHost": "${ip?.query}",
                "userAgent": "${userAgent}",
                "clientName": "${clientName}",
                "clientVersion": "${clientVersion}"
            }
        },
        "browseId": "${b}"
    }
    `
}

export function ytMusicBodyWithVID(id: string): string {
  return `
    {
        "videoId": "${id}",
        "context": {
            "client": {
                "userAgent": "${userAgent}",
                "clientName": "${clientName}",
                "clientVersion": "${clientVersion}"
            }
        }
    }
    `
}

export function ytMusicBodyWithParamsNext(ip: IpJsonResponse, s: string): string {
  return `
    {
        "enablePersistentPlaylistPanel": true,
        "tunerSettingValue": "AUTOMIX_SETTING_NORMAL",
        "playlistId": "RDAMVM${s}",
        "videoId": "${s}",
        "isAudioOnly": true,
        "context": {
            "client": {
                "gl": "${ip.countryCode}",
                "remoteHost": "${ip.query}",
                "userAgent": "${userAgent}",
                "clientName": "${clientName}",
                "clientVersion": "${clientVersion}"
            }
        }
    }
    `
}
