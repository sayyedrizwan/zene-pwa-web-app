import { MusicData, MusicType } from "../../../../domain/local/entities/MusicData"
import { all_search_params, ytBodyWithParams, ytHeader, yt_music_search } from "./YtMusicUtil"
import type { YtMusicSearchResponse } from "./domain/YtMusicSearchResponse"

export class YtMusicAPIImpl {

    async musicSearchSingle(search: string) {
        var music: MusicData = new MusicData(null, null, null, "", MusicType.MUSIC)

        const r = await fetch(yt_music_search, { method: 'POST', headers: ytHeader, body: ytBodyWithParams(search, all_search_params) })
        const response = await r.json() as YtMusicSearchResponse
        response?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach(tabs => {
            tabs?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach(contents => {
                contents.musicShelfRenderer?.contents?.forEach(musicContents => {
                    const thumbnail = musicContents?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace("w120-h120-", "w512-h512-")
                    let name: string | null
                    let songId: string | null
                    let artistsName: string | null
                    musicContents?.musicResponsiveListItemRenderer?.flexColumns?.forEach(names => {
                        var info = names.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]
                        if (info?.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType == "MUSIC_VIDEO_TYPE_ATV") {
                            name = info.text ?? null
                            songId = info.navigationEndpoint?.watchEndpoint?.videoId ?? null
                        }
                        if (info?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == "MUSIC_PAGE_TYPE_ARTIST") {
                            if (info.text != undefined) artistsName = (info.text)
                        }
                    })
                    if (search?.includes(name!) && music.songId == null) {
                        music = new MusicData(name!, artistsName!, songId!, thumbnail!, MusicType.MUSIC)
                    }

                })

            })
        })
        return music
    }
}