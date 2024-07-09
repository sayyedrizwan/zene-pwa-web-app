import axios from "axios";
import { ytMusicBrowse, ytMusicBrowseID, ytMusicHeader, ytMusicNext, ytMusicvideoID } from "../../utils/Utils";
import type { YTMusicSimilar } from "./model/YTMusicSimilar";
import type { YTMusicPlaylists } from "./model/YTMusicPlaylists";
import { MusicData } from "../model/MusicData";

export class YoutubeMusicService {
    static instance = new YoutubeMusicService()

    async similarPlaylist(id: string): Promise<MusicData[] | undefined> {
        const playlistID = await this.similarIds(id)
        try {
            let lists: MusicData[] = []
            let config = { method: 'post', url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(playlistID) }

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

                        if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail))
                    })
                }
            })
            return lists
        } catch (error) {
            return []
        }
    }


    private async similarIds(id: string): Promise<string> {
        let playlistID = ""
        try {
            let config = { method: 'post', url: ytMusicNext, headers: ytMusicHeader, data: ytMusicvideoID(id) }

            const response = await axios.request(config)
            const data = await response.data as YTMusicSimilar
            data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs.forEach(t => {
                if (t.tabRenderer.title.toLocaleLowerCase() == "related" && playlistID == "")
                    playlistID = t.tabRenderer.endpoint?.browseEndpoint.browseId ?? ""

            })
        } catch (error) {
            console.log(error)
        }
        return playlistID
    }
}