export class NewsData {
  title?: string
  link?: string
  date?: string
  source?: string
  sourceURL?: string

  constructor(title: string, link: string, date: string, source: string, sourceURL: string) {
    this.title = title
    this.link = link
    this.date = date
    this.source = source
    this.sourceURL = sourceURL
  }
}
