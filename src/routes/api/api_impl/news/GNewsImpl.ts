import { NewsData } from '../../../../domain/local/entities/NewsData'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { getTextAfterKeyword, getTextAfterLastKeyword, getTextBeforeKeyword, getTextBeforeLastKeyword, google_news_api } from '../../utils/utils'


export class GNewsImpl {

  async search(search: string): Promise<NewsData[]> {
    const lists: NewsData[] = []

    const r = await axios.get(google_news_api, { params: { q: String(search) } })
    const response = await r.data as string

    const itemRegex = /<item>(.*?)<\/item>/gs;
    const items = response.match(itemRegex);

    if (items) {
      for (const item of items) {
        const info = new JSDOM(item)
        const title = info.window.document.querySelector('title')?.textContent
        const linkFirst = getTextBeforeKeyword(item, "</link>")
        const linkMain = getTextAfterKeyword(linkFirst ?? "", "<link>")
        const pubDate = info.window.document.querySelector('pubDate')?.textContent
        const sourceUrl = info.window.document.querySelector('source')?.getAttribute('url')

        if (title != undefined && linkMain != undefined) {
          const finalTitle = getTextBeforeLastKeyword(title, "-") ?? title
          const finalSource = getTextAfterLastKeyword(title, "-") ?? sourceUrl?.replaceAll("https://", "")?.replaceAll("www.", "")
          lists.push(new NewsData(finalTitle, linkMain, pubDate ?? "", finalSource ?? "", sourceUrl ?? ""))
        }
      }
    }

    lists.sort((a, b) => {
      const dateA = new Date(a.date ?? "")
      const dateB = new Date(b.date ?? "")
      return dateB.getTime() - dateA.getTime()
    })

    return lists
  }

}