export const YT_KEY = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'

export function bingYtChannelSearch(s: string) {
    return `https://www.bing.com/search?q=${s.trim().toLowerCase().replace(" ", "+")}+youtube+official+channel&pq=taylor+swift+youtube+official+channel`
}

export const ytHeader = {
    'x-origin': 'https://www.youtube.com',
    'content-type': 'application/json',
    'origin': 'https://www.youtube.com',
    'cookie': 'GPS=1;',
    'authority': 'www.youtube.com',
}

const userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36,gzip(gfe)'
const clientName = 'WEB'
const clientVersion = '2.20240126.01.00'

export const yt_video_search = `https://www.youtube.com/youtubei/v1/search?key=${YT_KEY}&prettyPrint=false`

export function ytBodyWithQuery(q: string): string {
    return `{
            "context": {
                "client": {
                    "userAgent": "${userAgent}",
                    "clientName": "${clientName}",
                    "clientVersion": "${clientVersion}"
                }
            },
            "query": "${q}"
        }
        `
}