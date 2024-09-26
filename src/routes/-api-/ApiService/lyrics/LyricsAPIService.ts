import axios from "axios"
import { rentAnAdviser } from "../../utils/Utils"
import { parse } from 'node-html-parser'
import { filterArtistsName, substringAfter, substringBeforeLast } from "../../utils/extension/String"
import { MusicLyricsData } from "../model/MusicLyricsData"

export class LyricsAPIService {
    static instance = new LyricsAPIService()

    async lyricsData(name: String, artists: String) : Promise<MusicLyricsData | undefined> {
        const response = await axios.get(`${rentAnAdviser}subtitles4songs.aspx`, { params: { q: `${filterArtistsName(artists)} - ${name}` } })
        const res = await response.data
        const root = parse(res)

        let url = ""

        root.querySelector("#tablecontainer")?.querySelectorAll("a")?.forEach(html => {
            if (checkRentAnAdvisorLyricsChecks(name, artists, html?.text?.trim()) && url == "")
                url = html.getAttribute("href") ?? ""
        })

        if(url == "") return undefined

        const responseSubtitle = await axios.get(`${rentAnAdviser}${url}`)
        const resSubtitle = await responseSubtitle.data

        const rootSubtitle = parse(resSubtitle)
        const subtitles = rootSubtitle.querySelector("#ctl00_ContentPlaceHolder1_lbllyrics_simple")
        const text = substringAfter(subtitles?.innerHTML.toString() ?? "", "(.LRC)".trim())
        const t = text.replaceAll("by RentAnAdviser.com", "🎶 🎵").replaceAll("by rentanadviser.com", "🎶 🎵")
                .replaceAll("by RentAnAdviser.com", "🎶 🎵").replaceAll("www.RentAnAdviser.com", "🎶 🎵")
                .replaceAll("By RentAnAdviser.com", "🎶 🎵")
                .replaceAll("\r\n", "").replaceAll("</h3>", "")

        return new MusicLyricsData(t, true)
    }
}


function checkRentAnAdvisorLyricsChecks(search: String, artists: String, name: String): Boolean {
    if (!name.toLowerCase().includes(search.toString().toLowerCase())) return false
    if (!name.toLowerCase().includes(artists.toString().toLowerCase())) return false
    if (name.includes("(Lyrics)")) return false

    return true
}