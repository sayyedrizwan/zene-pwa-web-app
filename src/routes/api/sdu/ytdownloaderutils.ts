
export const yt_downloader_header = {
    'authority': 'yt5s.best',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://yt5s.best',
    'referer': 'https://yt5s.best/en290mn/youtube-to-mp3',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36',
    'x-requested-with': 'XMLHttpRequest'
}

export const yt_downloader_define = "https://yt5s.best/mates/en/analyze/ajax?retry=undefined&platform=youtube"
export function ytDownloaderDownload(id:string): string { return `https://yt5s.best/mates/en/convert?id=${id}` }