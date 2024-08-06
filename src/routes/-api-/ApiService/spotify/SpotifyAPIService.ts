import axios from "axios"
import { spotifyAPIMyTracks, spotifyAPIPlaylists } from "../../utils/Utils"
import { SpotifyPlaylistSave, type SpotifyUserPlaylistsData } from "./model/SpotifyUserPlaylistsData"
import { MusicData, MUSICTYPE } from "../model/MusicData"
import type { SpotifyUserPlaylistsSongs } from "./model/SpotifyUserPlaylistsSongs"

export class SpotifyAPIService {
    static instance = new SpotifyAPIService()

    async spotifyPlaylists(token: String, url: string | null): Promise<SpotifyPlaylistSave[]> {
        const response = await axios.get(url == null ? spotifyAPIPlaylists : url, { headers: { Authorization: `Bearer ${token}` } })
        const res = await response.data as SpotifyUserPlaylistsData

        const nextPath = res.next ?? null

        const lists: SpotifyPlaylistSave[] = []

        if (url == null) {
            const likedTracker = await this.isSpotifyLikedTracks(token)
            if (likedTracker === true) {
                lists.push(new SpotifyPlaylistSave("Spotify Liked Songs", "https://misc.scdn.co/liked-songs/liked-songs-300.png", "", "", "https://open.spotify.com/collection/tracks", nextPath))
            }
        }

        await Promise.all((res.items ?? []).map(async i => {
            const thumbnail = (i.images?.length ?? 0) > 0 ? i.images?.[0].url : ""

            // const tracks = await this.spotifyPlaylistsTracks(token, i.tracks?.href ?? "")

            lists.push(new SpotifyPlaylistSave(i.name ?? "Spotify Playlists", thumbnail ?? "", i.id ?? "", i.description ?? "", i.tracks?.href ?? "", nextPath))
        }))

        return lists
    }

    private async spotifyPlaylistsTracks(token: String, url: string): Promise<MusicData[]> {
        const songLists: MusicData[] = []
        async function readTracker(url: string) {
            const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
            const res = await response.data as SpotifyUserPlaylistsSongs

            if (res.next != null && songLists.length <= 150) {
                await readTracker(res.next)
            }

            res.items?.forEach(i => {
                const artists = (i.track?.artists?.length ?? 0) > 0 ? i.track?.artists?.[0].name : ""
                if (i.track?.name != undefined) songLists.push(new MusicData(i.track?.name, artists ?? "", "", "", MUSICTYPE.SONGS))
            })
        }


        await readTracker(url)

        return songLists
    }

    private async spotifyLikedTracks(token: String): Promise<MusicData[]> {
        const songLists: MusicData[] = []
        async function readTracker(url: string) {
            const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
            const res = await response.data as SpotifyUserPlaylistsSongs

            if (res.next != null && songLists.length <= 150) {
                await readTracker(res.next)
            }

            res.items?.forEach(i => {
                const artists = (i.track?.artists?.length ?? 0) > 0 ? i.track?.artists?.[0].name : ""
                if (i.track?.name != undefined) songLists.push(new MusicData(i.track?.name, artists ?? "", "", "", MUSICTYPE.SONGS))
            })
        }

        await readTracker(spotifyAPIMyTracks)

        return songLists
    }


    private async isSpotifyLikedTracks(token: String): Promise<Boolean> {
        const response = await axios.get(spotifyAPIMyTracks, { headers: { Authorization: `Bearer ${token}` } })
        const res = await response.data as SpotifyUserPlaylistsSongs

        if((res.items?.length ?? 0) > 0) return true
        return false
    }
}