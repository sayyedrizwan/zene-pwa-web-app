import { MusicData, MusicDataList, MusicType } from "../../../../domain/local/entities/MusicData"
import type { IpJsonResponse } from "../../radiolist/domain/IpJsonResponse"
import { getTextAfterKeyword, getTextBeforeKeyword, getTextBeforeLastKeyword, joinArtists } from "../../utils/utils"
import { all_search_params, new_release_params, ytBodyWithParams, ytBodyWithParamsWithIp, ytHeader, yt_music_browse, yt_music_search } from "./YtMusicUtil"
import type { YtMusicBrowseGrids } from "./domain/YtMusicBrowseGrids"
import type { YtMusicBrowsePlaylists } from "./domain/YtMusicBrowsePlaylists"
import type { YtMusicSearchResponse } from "./domain/YtMusicSearchResponse"

export class YtMusicAPIImpl {

    async musicSearchSingle(search: string, doCheck: boolean): Promise<MusicData> {
        var music: MusicData = new MusicData(null, null, null, "", MusicType.MUSIC)

        const r = await fetch(yt_music_search, { method: 'POST', headers: ytHeader, body: ytBodyWithParams(search, all_search_params) })
        const response = await r.json() as YtMusicSearchResponse
        response?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach(tabs => {
            tabs?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach(contents => {
                contents.musicShelfRenderer?.contents?.forEach(musicContents => {
                    const thumbnail = musicContents?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace("w120-h120-", "w512-h512-")
                    let name: string | null
                    let songId: string | null
                    let artistsName: string[] = []
                    musicContents?.musicResponsiveListItemRenderer?.flexColumns?.forEach(names => {
                        var info = names.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]
                        if (info?.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType == "MUSIC_VIDEO_TYPE_ATV") {
                            name = info.text ?? null
                            songId = info.navigationEndpoint?.watchEndpoint?.videoId ?? null
                        }
                        if (info?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == "MUSIC_PAGE_TYPE_ARTIST") {
                            if (info.text != undefined && info.text.trim() != "") artistsName.push(info.text)
                        }
                    })


                    if (music.songId == null) {
                        if (artistsName.length == 0) {
                            try {
                                const a = musicContents?.musicResponsiveListItemRenderer?.flexColumns?.[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.text
                                artistsName.push(a ?? "")
                            } catch (error) {
                                error
                            }
                        }
                        if (doCheck) {
                            if (search?.includes(name!))
                                music = new MusicData(name!, joinArtists(artistsName), songId!, thumbnail!, MusicType.MUSIC)
                        } else
                            music = new MusicData(name!, joinArtists(artistsName), songId!, thumbnail!, MusicType.MUSIC)
                    }

                })

            })
        })
        return music
    }


    async newReleaseSearch(ip: IpJsonResponse): Promise<MusicDataList> {
        const lists: string[] = []
        const listsNew: MusicData[] = []
        const r = await fetch(yt_music_browse, { method: 'POST', headers: ytHeader, body: ytBodyWithParamsWithIp(ip, new_release_params) })
        const response = await r.json() as YtMusicBrowseGrids

        var releasedId = ""
        response?.contents?.singleColumnBrowseResultsRenderer?.tabs?.[0].tabRenderer?.content?.sectionListRenderer?.contents?.[0].gridRenderer?.items?.forEach(e => {
            try {
                if (e?.musicTwoRowItemRenderer?.title?.runs?.[0].text?.toLowerCase() === "released") {
                    releasedId = e?.musicTwoRowItemRenderer?.title?.runs?.[0]?.navigationEndpoint?.browseEndpoint?.browseId ?? ""
                }
            } catch (error) {
                error
            }
        })


        console.log(releasedId)

        const musicr = await fetch(yt_music_browse, { method: 'POST', headers: ytHeader, body: ytBodyWithParamsWithIp(ip, releasedId) })
        const musics = await musicr.json() as YtMusicBrowsePlaylists

        musics?.contents?.singleColumnBrowseResultsRenderer?.tabs?.forEach(element => {
            element?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach(music => {
                music?.musicPlaylistShelfRenderer?.contents?.forEach(items => {
                    const name = items.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.accessibilityPlayData?.accessibilityData?.label
                    var data = getTextAfterKeyword(name?.toLowerCase() ?? "", "play")
                    if (data?.includes("|"))
                        data = getTextBeforeKeyword(data, "|")
                    else {
                        const temp = getTextBeforeKeyword(data ?? "", "minute")
                        data = getTextBeforeLastKeyword(temp ?? "", "-")
                    }
                    lists.push(data ?? "")
                })
            })
        })


        await Promise.all(lists.map(async (m) => {
            const music = await this.musicSearchSingle(m, false)
            if(music.songId != null) listsNew.push(await this.musicSearchSingle(m, false))
        }))
        return new MusicDataList(listsNew)
    }
}