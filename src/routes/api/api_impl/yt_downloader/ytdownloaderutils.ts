export const yt2_mate_downloader_header = {
    'authority': 'srvcdn7.2convert.me',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'null',
    'referer': 'https://en.y2mate.is/',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36'
}

export const yt5s_ink_header = {
    'authority': 'www.yt5s.ink',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.yt5s.ink',
    'referer': 'https://www.yt5s.ink/',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36'
}


export const yt5s_ink_download_token = `https://www.yt5s.ink/`
export const yt5s_ink_downloader = `https://www.yt5s.ink/wp-json/aio-dl/video-data/`




export const yt2_downloader_task_convertor = "https://srvcdn7.2convert.me/api/json/task"
export const yt2_downloader_convertor = "https://srvcdn7.2convert.me/api/json"
export function ytDownloaderY2mateDownload(id:string): string { return `https://srvcdn7.2convert.me/api/json?url=https://www.youtube.com/watch?v=${id}` }