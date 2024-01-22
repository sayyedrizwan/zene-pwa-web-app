export interface YtDownloadUrl {
  result: Result
}

export interface Result {
  id: string
  title: string
  duration: number
  author: string
  image: string
  videos: Video[]
  audios: Audio[]
  mp3_task_url: string
  get_mp3_download_url: string
}

export interface Video {
  type: string
  quality: string
  filesize: string
  has_audio: boolean
  key: string
  url: string
}

export interface Audio {
  type: string
  quality: string
  filesize: string
  key: string
}
