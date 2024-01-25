import type { MusicData, MusicType } from "./MusicData"

export class MusicPlayerData {
  lists: MusicData[]
  m: MusicData
  currentTs: number
  duration: number
  type: MusicType

  constructor(lists: MusicData[], m: MusicData, currentTs: number, duration: number,  type: MusicType) {
    this.lists = lists
    this.m = m
    this.currentTs = currentTs
    this.duration = duration
    this.type = type
  }
}