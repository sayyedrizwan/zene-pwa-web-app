import type { MusicData } from './MusicData'

export class SpotifyPlaylistsMusicData {
  id?: string
  token?: string
  thumbnail?: string
  name?: string
  artists?: string

  constructor(id: string, token: string, thumbnail: string, name: string, artists: string) {
    this.id = id
    this.token = token
    this.thumbnail = thumbnail
    this.name = name
    this.artists = artists
  }
}

export class SpotifyPlaylistsMusicTrackData {
  id?: string
  lists?: MusicData[]

  constructor(id: string, lists: MusicData[]) {
    this.id = id
    this.lists = lists
  }
}
