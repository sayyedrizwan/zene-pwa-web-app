import axios from "axios";
import { isYear, ytMusicBrowse, ytMusicBrowseID, ytMusicHeader, ytMusicNext, ytMusicPlaylistSongs, ytMusicvideoID } from "../../utils/Utils"
import type { YTMusicSimilar } from "./model/YTMusicSimilar"
import type { YTMusicPlaylists } from "./model/YTMusicPlaylists"
import { MusicData, MUSICTYPE } from "../model/MusicData"
import { YTMusicSimiarId } from "./model/YTMusicSimiarId"

export class YoutubeMusicService {
    static instance = new YoutubeMusicService()

    async similarPlaylist(id: string): Promise<MusicData[] | undefined> {
        const playlistID = await this.similarIds(id)
        try {
            let lists: MusicData[] = []
            let config = { method: 'post', url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(String(playlistID.related)) }

            const response = await axios.request(config)
            const data = await response.data as YTMusicPlaylists
            data.contents.sectionListRenderer.contents.forEach(c => {
                if (c.musicCarouselShelfRenderer?.header.musicCarouselShelfBasicHeaderRenderer.accessibilityData.accessibilityData.label == "Recommended playlists") {
                    c.musicCarouselShelfRenderer.contents.forEach(content => {
                        const thumbnail = content.musicTwoRowItemRenderer?.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails ?? []
                        const highestThumbnail = thumbnail.sort((a, b) => b.height - a.height)[0].url
                        const name = content.musicTwoRowItemRenderer?.title.runs[0].text ?? ""
                        const id = content.musicTwoRowItemRenderer?.navigationEndpoint.browseEndpoint.browseId
                        let artists = ""
                        content.musicTwoRowItemRenderer?.subtitle.runs.forEach(a => {
                            if (!a.text.includes("Playlist") && !a.text.includes("•") && !a.text.includes("views") && !a.text.includes("YouTube Music"))
                                artists += artists == "" ? a.text : `, ${a.text}`
                        })

                        if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.PLAYLIST))
                    })
                }
            })
            return lists
        } catch (error) {
            return []
        }
    }

    async similarAlbums(id: string): Promise<MusicData[] | undefined> {
        const releatedID = await this.similarIds(id)
        try {
            let lists: MusicData[] = []
            let config = { method: 'post', url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(String(releatedID.related)) }

            const response = await axios.request(config)
            const data = await response.data as YTMusicPlaylists
            data.contents.sectionListRenderer.contents.forEach(c => {
                if (c.musicCarouselShelfRenderer?.header.musicCarouselShelfBasicHeaderRenderer.accessibilityData.accessibilityData.label.includes("MORE FROM")) {
                    c.musicCarouselShelfRenderer.contents.forEach(content => {
                        const thumbnail = content.musicTwoRowItemRenderer?.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails ?? []
                        const highestThumbnail = thumbnail.sort((a, b) => b.height - a.height)[0].url
                        const name = content.musicTwoRowItemRenderer?.title.runs[0].text ?? ""
                        const id = content.musicTwoRowItemRenderer?.navigationEndpoint.browseEndpoint.browseId
                        let artists = ""
                        content.musicTwoRowItemRenderer?.subtitle.runs.forEach(a => {
                            if (isYear(a.text) && artists == "") artists = a.text
                        })

                        if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.ALBUMS))
                    })
                }
            })
            return lists
        } catch (error) {
            return []
        }
    }

    async similarSongs(id: string): Promise<MusicData[]> {
        let lists : MusicData[] = []
        try {
            let config = { method: 'post', url: ytMusicNext, headers: ytMusicHeader, data: ytMusicPlaylistSongs(id) }

            const response = await axios.request(config)
            const data = await response.data as YTMusicSimilar
            data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs
            data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs.forEach(t => {
                if (t.tabRenderer.title.toLocaleLowerCase() == "up next") {
                    t.tabRenderer.content?.musicQueueRenderer.content.playlistPanelRenderer?.contents.forEach(m => {
                        const name = m.playlistPanelVideoRenderer?.title.runs[0].text ?? ""
                        const thumbnail = m.playlistPanelVideoRenderer?.thumbnail.thumbnails ?? []
                        const highestThumbnail = thumbnail.sort((a, b) => b.height - a.height)[0].url
                        const id = m.playlistPanelVideoRenderer.videoId
                        const artists = m.playlistPanelVideoRenderer.shortBylineText.runs[0].text

                        if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.SONGS))
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
        return lists
    }


    private async similarIds(id: string): Promise<YTMusicSimiarId> {
        const similar = new YTMusicSimiarId("", "", "")
        try {
            let config = { method: 'post', url: ytMusicNext, headers: ytMusicHeader, data: ytMusicvideoID(id) }

            const response = await axios.request(config)
            const data = await response.data as YTMusicSimilar
            data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs.forEach(t => {
                if (t.tabRenderer.title.toLocaleLowerCase() == "related" && similar.related == "")
                    similar.related = t.tabRenderer.endpoint?.browseEndpoint.browseId ?? ""

                if (t.tabRenderer.title.toLocaleLowerCase() == "lyrics" && similar.lyrics == "")
                    similar.lyrics = t.tabRenderer.endpoint?.browseEndpoint.browseId ?? ""

            })
        } catch (error) {
            console.log(error)
        }
        return similar
    }
}