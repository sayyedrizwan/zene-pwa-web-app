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
