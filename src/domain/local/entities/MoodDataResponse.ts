import type { MusicData } from './MusicData'

export class MoodDataResponse {
  gif?: string
  facts?: string
  tracks?: MusicData[]

  constructor(gif: string, facts: string, tracks: MusicData[]) {
    this.gif = gif
    this.facts = facts
    this.tracks = tracks
  }
}
