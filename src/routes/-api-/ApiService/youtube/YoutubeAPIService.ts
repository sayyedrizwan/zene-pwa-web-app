import axios from "axios"
import { YT_SONG_AS_PLAYLISTS_PARAMS, YT_STORE_PARAMS, ytBrowse, ytBrowseQuery, ytBrowseQueryParams, ytHeader, ytQueryParams, ytSearch } from "../../utils/Utils"
import type { YTSearchData } from "./model/YTSearchData"
import { MusicData, MUSICTYPE } from "../model/MusicData"
import type { YTStoreData } from "./model/YTStoreData"

export class YoutubeAPIService {
    static instance = new YoutubeAPIService()

    async searchVideoIDFirst(q: String): Promise<String> {
        try {
            let config = { method: 'post', url: ytSearch, headers: ytHeader, data: ytBrowseQuery(q.toString()) }
            const response = await axios.request(config)
            const data = await response.data as YTSearchData

            let vID = ""

            data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach(e => {
                if (vID == "") vID = e.itemSectionRenderer?.contents?.[0].videoRenderer?.videoId ?? ""
            })

            return vID
        } catch (error) {
            return ""
        }
    }

    async searchVideos(q: String, addOnlyThree: Boolean = false): Promise<MusicData[]> {
        try {
            let config = { method: 'post', url: ytSearch, headers: ytHeader, data: ytBrowseQuery(q.toString()) }
            const response = await axios.request(config)
            const data = await response.data as YTSearchData

            const list: MusicData[] = []

            data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach(e => {
                e.itemSectionRenderer?.contents?.forEach(v => {
                    if (v.videoRenderer != undefined) {
                        const vID = v.videoRenderer?.videoId
                        const name = v.videoRenderer.title?.runs?.[0].text
                        const artists = v.videoRenderer.longBylineText?.runs?.[0].text
                        const thumbnail = `https://i.ytimg.com/vi/${vID}/maxresdefault.jpg`

                        if (vID != undefined && name != undefined) list.push(new MusicData(name, artists ?? "", vID, thumbnail, MUSICTYPE.VIDEO, vID))
                    }
                })
            })

            return addOnlyThree ? list.slice(0, 5) : list
        } catch (error) {
            return []
        }
    }

    async searchVideosPlaylist(q: String): Promise<MusicData[]> {

        try {
            let config = { method: 'post', url: ytSearch, headers: ytHeader, data: ytQueryParams(q.toString(), YT_SONG_AS_PLAYLISTS_PARAMS) }
            const response = await axios.request(config)
            const datas = await response.data as YTSearchData

            const list: MusicData[] = []

            datas.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach(e => {
               e.itemSectionRenderer?.contents?.forEach(v => {
                    if (v.videoRenderer != undefined) {
                        const vID = v.videoRenderer?.videoId
                        const name = v.videoRenderer.title?.runs?.[0].text
                        const artists = v.videoRenderer.longBylineText?.runs?.[0].text
                        const thumbnail = `https://i.ytimg.com/vi/${vID}/maxresdefault.jpg`

                        if (vID != undefined && name != undefined) list.push(new MusicData(name, artists ?? "", vID, thumbnail, MUSICTYPE.VIDEO, vID))
                    }
                })
            })
            return list.length > 5 ? list.slice(0, 5) : list
        } catch (error) {
            return []
        }
    }

    async merchandises(q: String) {
        try {
            let config = { method: 'post', url: ytSearch, headers: ytHeader, data: ytBrowseQuery(q.toString()) }
            const response = await axios.request(config)
            const data = await response.data as YTSearchData

            let channelID = ""

            data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach(e => {
                e.itemSectionRenderer?.contents?.[0].videoRenderer?.longBylineText?.runs?.forEach(e => {
                    if (e.navigationEndpoint?.commandMetadata?.webCommandMetadata?.webPageType == "WEB_PAGE_TYPE_CHANNEL" && channelID == "") {
                        channelID = e.navigationEndpoint.browseEndpoint?.browseId ?? ""
                    }
                })
            })

            let configStore = { method: 'post', url: ytBrowse, headers: ytHeader, data: ytBrowseQueryParams(channelID, YT_STORE_PARAMS) }
            const responseStore = await axios.request(configStore)
            const dataStore = await responseStore.data as YTStoreData

            let storeList: MusicData[] = []

            dataStore.contents?.twoColumnBrowseResultsRenderer?.tabs?.forEach(t => {
                if (t.tabRenderer?.title == "Store") {
                    t.tabRenderer.content?.sectionListRenderer?.contents?.forEach(c => {
                        c.itemSectionRenderer?.contents?.forEach(i => {
                            i.shelfRenderer?.content?.gridRenderer?.items?.forEach(store => {
                                const name = store.verticalProductCardRenderer?.title
                                const thumbnail = store.verticalProductCardRenderer?.thumbnail?.thumbnails?.[0].url
                                let link = ""
                                store.verticalProductCardRenderer?.navigationEndpoint?.commandExecutorCommand?.commands?.forEach(c => {
                                    if (link == "") link = c.urlEndpoint?.url ?? ""
                                })

                                const price = store.verticalProductCardRenderer?.price

                                if (name != undefined) storeList.push(new MusicData(name, price ?? "", link, thumbnail ?? "", MUSICTYPE.STORE))
                            })
                        })
                    })
                }
            })

            return storeList
        } catch (error) {
            return []
        }
    }
}