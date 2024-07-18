import axios from "axios"
import { ytBrowseQuery, ytHeader, ytSearch } from "../../utils/Utils"
import type { YTSearchData } from "./model/YTSearchData"
import { MusicData, MUSICTYPE } from "../model/MusicData"

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
}