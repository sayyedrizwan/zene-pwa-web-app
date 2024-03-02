import type { MusicData, MusicType } from "./MusicData"

export class MusicPlayerData {
  lists: MusicData[]
  m: MusicData
  currentTs: number
  duration: number
  type: MusicType

  constructor(lists: MusicData[], m: MusicData, currentTs: number, duration: number, type: MusicType) {
    this.lists = lists
    this.m = m
    this.currentTs = currentTs
    this.duration = duration
    this.type = type
  }
}

export type ResponseMusicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.SONG, data: "" } | { type: MusicPlayerPlayingStatus.VIDEO, data: "" } | { type: MusicPlayerPlayingStatus.LYRICS_VIDEO, data: "" }

export enum MusicPlayerPlayingStatus {
  SONG, VIDEO, LYRICS_VIDEO
} 