import { env } from '$env/dynamic/private'
import axios from 'axios'
import { SPOTIFY_API_TOKEN_GENREATE, SPOTIFY_TOP_GLOBAL_PLAYLIST_ID } from './SpotifyUtil'
import type { SpotifyTokenResponse } from './domain/SpotifyTokenResponse'
import type { SpotifyPlaylistsSongsResponse } from './domain/SpotifyPlaylistsSongsResponse'
import type { MusicData } from '../../../../domain/local/entities/MusicData'

export class SpotifyImpl {
  async musicSearchSingle(): Promise<string[]> {
    const list: string[] = []

    try {
      const body = new URLSearchParams()
      body.append('grant_type', 'client_credentials')
      body.append('client_id', env.SPOTIFY_CLIENT_ID)
      body.append('client_secret', env.SPOTIFY_CLIENT_SECRET)

      const token = (await axios.post(SPOTIFY_API_TOKEN_GENREATE, body)).data as SpotifyTokenResponse
      const response = await axios.get(SPOTIFY_TOP_GLOBAL_PLAYLIST_ID, { headers: { Authorization: `${token.token_type} ${token.access_token}` } })
      const songs = response.data as SpotifyPlaylistsSongsResponse

      songs?.tracks?.items?.forEach((element) => {
        list.push(`${element.track?.name} - ${element.track?.artists?.[0].name}`)
      })
      return list
    } catch (error) {
      return list
    }
  }
}
