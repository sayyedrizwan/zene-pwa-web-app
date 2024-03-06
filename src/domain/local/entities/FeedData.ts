export class FeedData {
  name?: string
  title?: string
  desc?: string
  thumbnail?: string
  link?: string
  srcName?: string
  srcImg?: string
  ts?: number
  type?: FeedType

  constructor(name: string, title: string, desc: string, thumbnail: string, link: string, srcName: string, srcImg: string, ts: number, type: FeedType) {
    this.name = name
    this.title = title
    this.desc = desc
    this.thumbnail = thumbnail
    this.link = link
    this.srcName = srcName
    this.srcImg = srcImg
    this.ts = ts
    this.type = type
  }
}

export enum FeedType {
  YOUTUBE,
  NEWS,
}
