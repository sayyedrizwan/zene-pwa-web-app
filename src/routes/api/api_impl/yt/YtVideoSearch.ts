import { FeedData, FeedType } from "../../../../domain/local/entities/FeedData"
import { MusicData, MusicType } from "../../../../domain/local/entities/MusicData"
import { bingYtChannelSearch, parseRelativeTimeString, ytBodyWithQuery, ytHeader, yt_video_search } from "./YtUtils"
import type { YtChannelVideosResponse } from "./domain/YtChannelVideosResponse"
import type { YtSearchVideoResponse } from "./domain/YtSearchVideoResponse"
import { JSDOM } from 'jsdom'

export class YtAPIImpl {

    async searchArtistsVideo(search: string): Promise<MusicData[]> {
        const list: MusicData[] = []
        const r = await fetch(yt_video_search, { method: 'POST', headers: ytHeader, body: ytBodyWithQuery(search) })
        const response = (await r.json()) as YtSearchVideoResponse

        response.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents.forEach(contents => {
            contents.itemSectionRenderer?.contents.forEach(video => {
                const name = video.videoRenderer?.title?.runs[0].text
                const videoId = video.videoRenderer?.navigationEndpoint?.watchEndpoint?.videoId
                const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

                if (videoId != undefined) list.push(new MusicData(name ?? "", '', videoId, thumbnail, MusicType.VIDEO))
            })
        })
        return list
    }


    async searchArtistsChannelsVideos(search: string): Promise<FeedData[]> {
        const list: FeedData[] = []

        try {
            const r = await fetch(bingYtChannelSearch(search), { method: 'GET' })
            const response = (await r.text()) as string
            const page = new JSDOM(response)
            let url = page.window.document.querySelector('.tilk')?.getAttribute("href")
            if (url != undefined) {
                const ytR = await fetch(url.includes("/videos") === true ? url : `${url}/videos`, { method: 'GET' })
                const ytResponse = (await ytR.text()) as string
                const ytPage = new JSDOM(ytResponse)

                ytPage.window.document.querySelectorAll("script").forEach(script => {
                    if (script.outerHTML.includes("var ytInitialData = ")) {
                        const value = JSON.parse(String(script.innerHTML).replaceAll("var ytInitialData = ", "").replaceAll("]}}};", "]}}}")) as YtChannelVideosResponse
                        value.contents.twoColumnBrowseResultsRenderer.tabs.forEach(t => {
                            if (t.tabRenderer?.title == "Videos") {
                                t.tabRenderer.content?.richGridRenderer.contents.forEach(c => {
                                    const videoID = c.richItemRenderer?.content.videoRenderer.videoId
                                    const thumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
                                    const name = c.richItemRenderer?.content.videoRenderer.title.runs[0].text
                                    const desc = c.richItemRenderer?.content.videoRenderer.title.accessibility.accessibilityData.label
                                    const timestamp = parseRelativeTimeString(c.richItemRenderer?.content.videoRenderer.publishedTimeText.simpleText!)
                                    if(videoID != undefined) list.push(new FeedData(search, name ?? "", desc ?? "", thumbnail,  `https://www.youtube.com/watch?v=${videoID}`, 'youtube.com', 'youtube.com', timestamp, FeedType.YOUTUBE))
                                })
                            }
                        })
                    }
                })
            }
        } catch (error) {
            error
        }

        return list
    }
}