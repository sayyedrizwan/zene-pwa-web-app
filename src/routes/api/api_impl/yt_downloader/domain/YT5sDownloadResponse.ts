export interface YT5sDownloadResponse {
    url: string
    title: string
    thumbnail: string
    duration: string
    source: string
    medias: Media[]
    sid: any
  }
  
  export interface Media {
    url: string
    quality: string
    extension: string
    size: any
    formattedSize: string
    videoAvailable: boolean
    audioAvailable: boolean
    chunked: boolean
    cached: boolean
  }
  