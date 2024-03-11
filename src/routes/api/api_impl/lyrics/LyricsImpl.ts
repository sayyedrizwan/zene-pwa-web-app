import axios from 'axios'
import { JSDOM } from 'jsdom'
import { genius_multi_search, genius_search, rent_an_advise_lyrics_find, rent_an_advise_lyrics_search } from '../../utils/utils'
import type { MusicData } from '../../../../domain/local/entities/MusicData'
import type { LyricsGeniusMultiSearch } from './model/LyricsGeniusMultiSearch'

export class LyricsImpl {

  async rentanadvertiser(q: MusicData | null): Promise<string | null> {
    try {
      const r = await axios.get(rent_an_advise_lyrics_search, { params: { q: `${q?.artists} - ${q?.name}` } })
      const response = new JSDOM(await r.data as string)

      let link: string | null = null

      response.window.document.querySelector("#tablecontainer")?.querySelectorAll("td").forEach(e => {
        if (e.textContent?.toLowerCase()?.includes(q?.artists?.textBeforeKeyword(",")?.textBeforeKeyword("&")?.toLowerCase() ?? "---") && e.textContent?.toLowerCase()?.includes(q?.name?.toLowerCase() ?? "---")) {
          if (link == null) link = e.querySelector("a")?.getAttribute("href") ?? null
        }
      })

      if (link == null) return null

      const rLyrics = await axios.get(`${rent_an_advise_lyrics_find}${link}`)
      const responseLyrics = new JSDOM(await rLyrics.data as string)

      const lyrics = String(responseLyrics.window.document.querySelector("span#ctl00_ContentPlaceHolder1_lbllyrics_simple")?.outerHTML).textAfterKeyword('</h3>')?.replaceAll('<br>', '.')?.replaceAll('www.RentAnAdviser.com', '')?.replaceAll('by RentAnAdviser.com', '')?.replaceAll('</span>', '')

      return lyrics

    } catch (error) {
      return null
    }
  }



  async geniusLyrics(q: MusicData | null): Promise<string | null> {
    try {
      const r = await axios.get(genius_search, { params: { q: `${q?.artists} - ${q?.name}` } })
      const response = new JSDOM(await r.data as string)

      let link: string | null = null

      response.window.document.querySelectorAll("meta").forEach(e => {
        if (e.outerHTML.toString().includes("Search Results")) {
          const data = e.outerHTML.toString().textAfterKeyword(`content="`).textBeforeKeyword(`" itemprop="page_data">`)?.replaceAll("&quot;", `"`)?.trim()
          const json = JSON.parse(data ?? "")
          json.hot_songs_preview.forEach((e: any) => {
            if (e.url.replaceAll("-", " ")?.toLowerCase()?.includes(q?.artists?.textBeforeKeyword(",")?.textBeforeKeyword("&")?.toLowerCase() ?? "---") && e.title?.toLowerCase()?.includes(q?.name?.toLowerCase() ?? "---")) {
              if (link == null) link = e.url
            }
          })
        }
      })

      if (link == null) {
        const res = await axios.get(genius_multi_search, { params: { per_page: 5, q: `${q?.artists} - ${q?.name}` } })
        const response = await res.data as LyricsGeniusMultiSearch

        response.response.sections.forEach(songs => {
          if (songs.type == "song") {
            songs.hits.forEach(items => {
             if (q?.artists?.toLowerCase()?.includes(items.result.artist_names.toLowerCase()) && (items.result.title.toLowerCase().includes(q?.name?.toLowerCase() ?? "--"))) {
              if (link == null) link = items.result.url
              }
            })
          }
        })

      }

      if (link == null) return null

      const lyrics = await axios.get(link)
      const responseLyrics = new JSDOM((await lyrics.data as string).replaceAll("<br/>", ". //bb//"))

      let txt = ""

      responseLyrics.window.document.querySelectorAll(".Lyrics__Container-sc-1ynbvzw-1")?.forEach(element => {
        txt += element.textContent
      })
      return txt

    } catch (error) {
      return null
    }
  }
}
