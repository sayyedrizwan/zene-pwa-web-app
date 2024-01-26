import { MusicData, MusicType } from "../../../../domain/local/entities/MusicData";
import { ytBodyWithQuery, ytHeader, yt_video_search } from "./YtUtils";
import type { YtSearchVideoResponse } from "./domain/YtSearchVideoResponse";

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
}