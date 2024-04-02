export interface ZeneAdsListsData {
    doShow: boolean
    title: string
    homeGridTop: MediaInfo[]
    homeMiddleView: MediaInfo
}

export interface MediaInfo {
    img: string
    link: string
}