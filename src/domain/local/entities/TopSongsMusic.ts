import type { MusicData } from "./MusicData";


export class TopSongsMusicResults {
  music: TopSongsMusic[]

  constructor(music: TopSongsMusic[]) {
    this.music = music
  }
}


export class TopSongsMusic {
  artistsImg: string | null;
  listeners: string | null;
  music: MusicData | null

  constructor(artistsImg: string, listeners: string, music: MusicData) {
    this.artistsImg = artistsImg
    this.listeners = listeners
    this.music = music
  }
}
