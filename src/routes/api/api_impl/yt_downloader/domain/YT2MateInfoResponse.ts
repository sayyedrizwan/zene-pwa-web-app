export interface YT2MateInfoTaskJsonResponse {
    taskId: string
    status: string
    download_progress: number
    convert_progress: number
    title: string
    ext: string
    videoId: string
    path: string
    quality: number
    filesize: number
    download: string
}



export interface YT2MateInfoTaskResponse {
    taskId: string
}



export interface YT2MateInfoResponse {
    error: boolean
    status: string
    formats: Formats
    url: string
}

export interface Formats {
    extractor: string
    videoId: string
    title: string
    thumbnail: string
    lengthSeconds: string
    id: string
    basename: string
    duration: string
    video: Video[]
    audio: Audio[]
}

export interface Video {
    quality: string
    formatId: number
    fileType: string
    ip: string
    needConvert: boolean
    fileSize: number
    url: string
}

export interface Audio {
    quality: number
    formatId: number
    fileType: string
    ip: string
    needConvert: boolean
    fileSize: number
    url: string
}
