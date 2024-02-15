export class ArtistsPinData {
  id?: string
  n?: string
  img?: string
  ts?: number

  constructor(id: string, n: string, img: string, ts: number) {
    this.id = id
    this.n = n
    this.img = img
    this.ts = ts
  }
}
