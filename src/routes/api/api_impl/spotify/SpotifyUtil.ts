export const SPOTIFY_API_TOKEN_GENREATE = 'https://accounts.spotify.com/api/token'

export const SPOTIFY_TOP_GLOBAL_PLAYLIST_ID = '37i9dQZEVXbMDoHDwVN2tF'
export function spotifyPlaylistSearch(id: string): string {
  return `https://api.spotify.com/v1/playlists/${id}`
}

export function spotifyPlaylistsSearch(country: string) {
  return `https://api.spotify.com/v1/search?q=top+50+${country}&type=playlist`
}
