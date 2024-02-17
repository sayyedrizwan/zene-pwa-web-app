export class FeedData {
  title?: string
  desc?: string
  thumbnail?: string
  link?: string
  ts?: string
  type?: FeedType

  constructor(title: string, desc: string, thumbnail: string, link: string, ts: string, type : FeedType) {
    this.title = title
    this.desc = desc
    this.thumbnail = thumbnail
    this.link = link
    this.ts = ts
    this.type = type
  }
}


export enum FeedType {
  YOUTUBE, NEWS
}
