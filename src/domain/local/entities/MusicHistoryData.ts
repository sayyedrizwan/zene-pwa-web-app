import { atob } from "buffer"
import { MusicType, MusicData } from "./MusicData"

export class MusicHistoryData {
  s?: string
  d?: string
  ts?: number
  p? : number

  constructor(s: string, d: string, ts: number, p: number) {
    this.s = s
    this.d = d
    this.ts = ts
    this.p = p
  }
}

export function getDataOnMusicData(m : MusicHistoryData): MusicData {
  let music : MusicData | null = null
  try {
    const songDetails = window.atob(m.d ?? "")
    music = JSON.parse(songDetails) as MusicData
  } catch (error) {
    music = new MusicData("No Found", "", "", "", MusicType.MUSIC)
  }

  return music
}
