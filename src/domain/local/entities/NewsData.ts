export class NewsData {
  title?: string
  link?: string
  date?: string
  source?: string

  constructor(title: string, link: string, date: string, source: string) {
    this.title = title
    this.link = link
    this.date = date
    this.source = source
  }
}
