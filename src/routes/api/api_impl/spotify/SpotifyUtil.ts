export const SPOTIFY_API_TOKEN_GENREATE = 'https://accounts.spotify.com/api/token'

export const SPOTIFY_PLAYLISTS_SEARCH = "https://api.spotify.com/v1/search"
export const SPOTIFY_USER_PLAYLISTS = "https://api.spotify.com/v1/me/playlists"

export const SPOTIFY_TOP_GLOBAL_PLAYLIST_ID = '37i9dQZEVXbMDoHDwVN2tF'

export function spotifyPlaylistSearch(id: string): string {
  return `https://api.spotify.com/v1/playlists/${id}`
}