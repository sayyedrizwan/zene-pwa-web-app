export interface YTDownloadPath {
  result: Result
}

export interface Result {
  vid: string
  type: string
  status: number
  source: number
  dl_url: string
  download_url: string
}
