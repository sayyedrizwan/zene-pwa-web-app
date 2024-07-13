import axios from "axios"
import { searchSpotify, tokenSpotify } from "../../utils/Utils";
import type { SpotifyTokenData } from "./model/SpotifyTokenData";
import type { SpotifyPlaylistData } from "./model/SpotifyPlaylistData";

export class SpotifyAPIService {
    static instance = new SpotifyAPIService()

    async newReleaseSongs(country: String) : Promise<String[]>{
        const playlist = await this.playlistSearch(`new release ${country}`)
        const list : String[] = []

        const id = playlist.playlists?.items?.[0].id

        return list
    }

    private async getToken() : Promise<SpotifyTokenData> {
        const response = await axios.post(tokenSpotify, new URLSearchParams({
            grant_type: 'client_credentials', client_id: '07cca9af3ee4411baaf2355a8ea61d3f', client_secret: '120327dd093345f6aaab5fb943f1ceb1'
        }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })

        return await response.data as SpotifyTokenData
    }

    private async playlistSearch(search: String) : Promise<SpotifyPlaylistData>{
        const accessToken = await this.getToken()
        const response = await axios.get(searchSpotify, { params: { type: "playlist", q: search }, headers: { Authorization: `${accessToken.token_type} ${accessToken.access_token}` } })
        return await response.data as SpotifyPlaylistData
    }

}