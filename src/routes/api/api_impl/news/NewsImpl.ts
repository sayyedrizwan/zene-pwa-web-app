import { NewsData } from '../../../../domain/local/entities/NewsData'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { bing_news_api, google_news_api } from '../../utils/utils'
import { parseRelativeTimeString } from '../yt/YtUtils'
import { FeedData, FeedType } from '../../../../domain/local/entities/FeedData'


export class NewsImpl {

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
        const linkMain = item?.textBeforeKeyword("</link>")?.textAfterKeyword("<link>")
        const pubDate = info.window.document.querySelector('pubDate')?.textContent
        const sourceUrl = info.window.document.querySelector('source')?.getAttribute('url')

        if (title != undefined && linkMain != undefined) {
          const finalTitle = title?.textBeforeLastKeyword("-") ?? title
          const finalSource = title?.textAfterLastKeyword("-") ?? sourceUrl?.replaceAll("https://", "")?.replaceAll("www.", "")
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



  async searchBing(search: string, img: string): Promise<FeedData[]> {
    const lists: FeedData[] = []
    const r = await axios.get(bing_news_api, { params: { q: String(search).replaceAll(" ", "+").trim(), FORM: 'PTFTNR' } })
    const response = await r.data as string

    const info = new JSDOM(response)

    info.window.document.querySelectorAll(".news-card.newsitem.cardcommon").forEach(items => {
      const link = items.getAttribute("url")
      const srcImg = items.querySelector(".pubimg.rms_img")?.getAttribute("src")
      const src = items.querySelector("a.title")?.getAttribute("data-author")
      const title = items.querySelector("a.title")?.textContent
      const desc = items.querySelector(".snippet")?.textContent
      let thumbnail = items.querySelector(".image.right")?.querySelector('img')?.getAttribute('data-src-hq')
      let time = String(items.querySelector(".source.biglogo.set_top")?.outerHTML)?.textAfterKeyword('tabindex="0" aria-label="')?.textBeforeKeyword('ago">')

      if (time == "undefined")
        time = String(items.outerHTML)?.textAfterKeyword('tabindex="0" aria-label="')?.textBeforeKeyword('ago">')

      if (thumbnail == null)
        thumbnail = items.querySelector(".image.right")?.querySelector('img')?.getAttribute('data-src')
      

      if (title != undefined) lists.push(new FeedData(search, title, desc ?? "", String(thumbnail) == "undefined" ? img : `https://bing.com${thumbnail}`, link!, src ?? "", srcImg ?? "", parseRelativeTimeString(`${time} ago`), FeedType.NEWS))
    })

    return lists
  }
}