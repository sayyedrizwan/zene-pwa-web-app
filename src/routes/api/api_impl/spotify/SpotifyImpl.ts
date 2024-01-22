import { env } from '$env/dynamic/private'
import axios from 'axios'
import { SPOTIFY_API_TOKEN_GENREATE, SPOTIFY_TOP_GLOBAL_PLAYLIST_ID, spotifyPlaylistSearch, spotifyPlaylistsSearch } from './SpotifyUtil'
import type { SpotifyTokenResponse } from './domain/SpotifyTokenResponse'
import type { SpotifyPlaylistsSongsResponse } from './domain/SpotifyPlaylistsSongsResponse'
import type { MusicData } from '../../../../domain/local/entities/MusicData'
import type { SpotifyPlaylistsResponse } from './domain/SpotifyPlaylistsResponse'

export class SpotifyImpl {
  private async getTokens(): Promise<string> {
    const body = new URLSearchParams()
    body.append('grant_type', 'client_credentials')
    body.append('client_id', env.SPOTIFY_CLIENT_ID)
    body.append('client_secret', env.SPOTIFY_CLIENT_SECRET)

    const token = (await axios.post(SPOTIFY_API_TOKEN_GENREATE, body)).data as SpotifyTokenResponse

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
      const response = await axios.get(spotifyPlaylistsSearch(country), { headers: { Authorization: token } })
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
}
