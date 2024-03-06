export class MusicPlayerVideos {
  songid: string
  video: string
  lyrics: string

  constructor(songid: string, video: string, lyrics: string) {
    this.songid = songid
    this.video = video
    this.lyrics = lyrics
  }
}
