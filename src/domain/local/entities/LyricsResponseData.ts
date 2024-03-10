export class LyricsResponseData {
  lyrics?: string | null
  sync?: boolean

  constructor(lyrics: string | null, sync: boolean) {
    this.lyrics = lyrics
    this.sync = sync
  }
}
