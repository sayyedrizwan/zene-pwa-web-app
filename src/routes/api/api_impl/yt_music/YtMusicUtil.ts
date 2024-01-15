export const YT_MUSIC_KEY = "AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30"

export const ytHeader = {
    'authority' : 'music.youtube.com',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://music.youtube.com',
    'referer': 'https://music.youtube.com',
    'pragma': 'no-cache',
}

const userAgent = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36,gzip(gfe)"
const clientName = "WEB_REMIX"
const clientVersion = "1.20240103.01.00"

export const yt_music_search = `https://music.youtube.com/youtubei/v1/search?key=${YT_MUSIC_KEY}&prettyPrint=false`
export const all_search_params = "EgWKAQIIAWoSEAMQBBAFEA4QChAQEAkQERAV"

export function ytBodyWithParams(q: string, params:string): string {
  return  `{
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