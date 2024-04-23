import { env } from '$env/dynamic/private'
import axios from 'axios'
import { Buffer } from 'buffer'
import { SPOTIFY_API_TOKEN_GENREATE, SPOTIFY_PLAYLISTS_SEARCH, SPOTIFY_TOP_GLOBAL_PLAYLIST_ID, SPOTIFY_USER_LIKED_PLAYLISTS, SPOTIFY_USER_PLAYLISTS, spotifyPlaylistSearch, spotifyPlaylistsTracks } from './SpotifyUtil'
import type { SpotifyTokenResponse } from './domain/SpotifyTokenResponse'
import type { SpotifyPlaylistsSongsResponse } from './domain/SpotifyPlaylistsSongsResponse'
import type { SpotifyPlaylistsResponse } from './domain/SpotifyPlaylistsResponse'
import type { SpotifyUserPlaylistsResponse } from './domain/SpotifyUserPlaylistsResponse'
import type { SpotifyPlaylistsUserSongsResponse } from './domain/SpotifyPlaylistsUserSongsResponse'
import { spotify_liked_playlists } from '../../utils/utils'

export class SpotifyImpl {
  private async getTokens(): Promise<string> {
    const body = new URLSearchParams()
    body.append('grant_type', 'client_credentials')
    body.append('client_id', env.SPOTIFY_CLIENT_ID)
    body.append('client_secret', env.SPOTIFY_CLIENT_SECRET)

    const token = (await axios.post(SPOTIFY_API_TOKEN_GENREATE, body)).data as SpotifyTokenResponse

    return `${token.token_type} ${token.access_token}`
  }

  async getBasicTokens(uri: string, code: string): Promise<string> {
    const body = new URLSearchParams()
    body.append('grant_type', 'authorization_code')
    body.append('redirect_uri', uri)
    body.append('code', code)

    const authCode = Buffer.from(env.SPOTIFY_CLIENT_ID + ':' + env.SPOTIFY_CLIENT_SECRET)!.toString('base64')
    const response = await fetch(SPOTIFY_API_TOKEN_GENREATE, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Basic ${authCode}` }, body: body })
    const token = (await response.json()) as SpotifyTokenResponse

    return `${token.token_type} ${token.access_token}`
  }

  async musicSearchSingle(): Promise<string[]> {
    const list: string[] = []

    try {
      const token = await this.getTokens()
      const response = await axios.get(spotifyPlaylistSearch(SPOTIFY_TOP_GLOBAL_PLAYLIST_ID), { headers: { Authorization: token } })
      const songs = response.data as SpotifyPlaylistsSongsResponse

      songs?.tracks?.items?.forEach((element) => {
        list.push(`${element.track?.name} - ${element.track?.artists?.[0].name}`)
      })
      return list
    } catch (error) {
      return list
    }
  }

  async countrySongsSearch(country: string): Promise<string[]> {
    const list: string[] = []

    try {
      const token = await this.getTokens()
      const response = await axios.get(SPOTIFY_PLAYLISTS_SEARCH, { headers: { Authorization: token }, params: { q: `top+50+${country}`, type: 'playlist' } })
      const songs = response.data as SpotifyPlaylistsResponse

      const playlistsId = songs.playlists?.items?.[0].id ?? ''

      const responsePlaylists = await axios.get(spotifyPlaylistSearch(playlistsId), { headers: { Authorization: token } })
      const playlistsSongs = responsePlaylists.data as SpotifyPlaylistsSongsResponse

      playlistsSongs?.tracks?.items?.forEach((element) => {
        list.push(`${element.track?.name} - ${element.track?.artists?.[0].name}`)
      })

      return list
    } catch (error) {
      return list
    }
  }

  async playlistsAndSongsWithAuthToken(token: string, offset: number): Promise<SpotifyUserPlaylistsResponse | null> {
    let playlists: SpotifyUserPlaylistsResponse | null = null

    try {
      const response = await axios.get(SPOTIFY_USER_PLAYLISTS, { headers: { Authorization: token }, params: { offset: offset, limit: 49 } })
      playlists = (await response.data) as SpotifyUserPlaylistsResponse
    } catch (error) {
      playlists = null
    }

    return playlists
  }

  async playlistsSongsSpotifyAuthToken(offset: number, token: string, id: string): Promise<SpotifyPlaylistsUserSongsResponse | null> {
    let s: SpotifyPlaylistsUserSongsResponse | null = null
    try {
      const response = id == spotify_liked_playlists ? await axios.get(SPOTIFY_USER_LIKED_PLAYLISTS, { headers: { Authorization: token }, params: { offset: offset, limit: 50 } })
        : await axios.get(spotifyPlaylistsTracks(id), { headers: { Authorization: token }, params: { offset: offset, limit: 50 } })
     
        s = (await response.data) as SpotifyPlaylistsUserSongsResponse
    } catch (error) {
      s = null
    }
    return s
  }
}
