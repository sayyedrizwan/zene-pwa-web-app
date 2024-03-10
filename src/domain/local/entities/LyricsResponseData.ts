export class LyricsResponseData {
  lyrics?: string
  sync?: boolean

  constructor(lyrics: string, sync: boolean) {
    this.lyrics = lyrics
    this.sync = sync
  }
}
