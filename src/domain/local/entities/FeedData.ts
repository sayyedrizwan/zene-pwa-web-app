export class FeedData {
  title?: string
  desc?: string
  thumbnail?: string
  link?: string
  srcName?: string
  srcImg?: string
  ts?: number
  type?: FeedType

  constructor(title: string, desc: string, thumbnail: string, link: string, srcName: string, srcImg: string, ts: number, type : FeedType) {
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
  YOUTUBE, NEWS
}
