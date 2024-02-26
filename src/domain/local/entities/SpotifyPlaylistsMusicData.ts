import type { MusicData } from "./MusicData"

export class SpotifyPlaylistsMusicData {
  id?: string
  thumbnail?: string
  name?: string
  artists?: string
  music?: MusicData[]

  constructor(id: string,thumbnail: string, name: string, artists: string, music: MusicData[]) {
    this.id = id
    this.thumbnail = thumbnail
    this.name = name
    this.artists = artists
    this.music = music
  }
}
