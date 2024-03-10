import axios from 'axios'
import { JSDOM } from 'jsdom'
import { bing_news_api, google_news_api, rent_an_advise_lyrics_find, rent_an_advise_lyrics_search } from '../../utils/utils'
import { parseRelativeTimeString } from '../yt/YtUtils'
import { FeedData, FeedType } from '../../../../domain/local/entities/FeedData'
import type { MusicData } from '../../../../domain/local/entities/MusicData'

export class LyricsImpl {

  async rentanadvertiser(q: MusicData | null): Promise<string | null> {
    try {
      const r = await axios.get(rent_an_advise_lyrics_search, { params: { q: `${q?.artists} - ${q?.name}` } })
      const response = new JSDOM(await r.data as string)

      let link: string | null = null

      response.window.document.querySelector("#tablecontainer")?.querySelectorAll("td").forEach(e => {
        if (e.textContent?.toLowerCase()?.includes(q?.artists?.textBeforeKeyword(",")?.textBeforeKeyword("&")?.toLowerCase() ?? "---") && e.textContent?.toLowerCase()?.includes(q?.name?.toLowerCase() ?? "---")) {
          if(link == null) link = e.querySelector("a")?.getAttribute("href") ?? null
        } 
      })

      if(link == null) return null

      const rLyrics = await axios.get(`${rent_an_advise_lyrics_find}${link}`)
      const responseLyrics = new JSDOM(await rLyrics.data as string)

      const lyrics = String(responseLyrics.window.document.querySelector("span#ctl00_ContentPlaceHolder1_lbllyrics_simple")?.outerHTML).textAfterKeyword('</h3>')?.replaceAll('<br>', '.')?.replaceAll('www.RentAnAdviser.com', '')?.replaceAll('by RentAnAdviser.com', '')?.replaceAll('</span>', '')

      return lyrics

    } catch (error) {
      return null
    }

    return ""
  }
}
