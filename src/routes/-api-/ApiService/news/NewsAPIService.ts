import axios from "axios";
import { MusicData, MUSICTYPE } from "../model/MusicData";
import { parse } from "node-html-parser";
import { bingNewsBest, bingNewsMostRecent } from "../../utils/Utils";
import { substringAfter, substringBefore } from "../../utils/extension/String";


export class NewsAPIService {
    static instance = new NewsAPIService()

    private async searchNewsMostRecent(name: String): Promise<MusicData[]> {
        const response = await axios.get(bingNewsMostRecent(name))
        const data = await response.data
        const root = parse(data)

        let musicData: MusicData[] = []

        root.querySelector("#algocore")?.querySelectorAll(".news-card.newsitem.cardcommon").forEach(n => {
            const name = n.querySelector("a.title")?.text
            const link = n.querySelector("a.title")?.getAttribute("href")
            const desc = n.querySelector(".snippet")?.text
            let hour = ""
            const img = n.querySelector("img.rms_img")?.getAttribute("src") ?? ""
            const imgAfter = substringAfter(img, "?id=")
            const fullImgLink = imgAfter == "" ? "" : `https://th.bing.com/th?id=${substringBefore(imgAfter, "&")}`

            n.querySelector(".source.set_top")?.querySelectorAll("span").forEach(q => {
                if (q.outerHTML.toString().includes("ago\"")) hour = q.text
            })

            if (name != undefined && link != undefined)
                musicData.push(new MusicData(name, desc ?? "", link, fullImgLink, MUSICTYPE.NEWS, hour))

        })

        return musicData
    }

    private async searchNewsBestMatch(name: String): Promise<MusicData[]> {
        const response = await axios.get(bingNewsBest(name))
        const data = await response.data
        const root = parse(data)

        let musicData: MusicData[] = []

        root.querySelector("#algocore")?.querySelectorAll(".news-card.newsitem.cardcommon").forEach(n => {
            const name = n.querySelector("a.title")?.text
            const link = n.querySelector("a.title")?.getAttribute("href")
            const desc = n.querySelector(".snippet")?.text
            let hour = ""
            const img = n.querySelector("img.rms_img")?.getAttribute("src") ?? ""
            const imgAfter = substringAfter(img, "?id=")
            const fullImgLink = imgAfter == "" ? "" : `https://th.bing.com/th?id=${substringBefore(imgAfter, "&")}`

            n.querySelector(".source.set_top")?.querySelectorAll("span").forEach(q => {
                if (q.outerHTML.toString().includes("ago\"")) hour = q.text
            })

            if (name != undefined && link != undefined)
                musicData.push(new MusicData(name, desc ?? "", link, fullImgLink, MUSICTYPE.NEWS, hour))

        })
        return musicData
    }



    async searchNews(name: String): Promise<MusicData[]> {
        const news: MusicData[] = []

        const n = await this.searchNewsMostRecent(name)
        await Promise.all(n.map(async n => {
            if (!news.some((item) => item.id === n.id)) news.push(n)
        }))

        const nMost = await this.searchNewsBestMatch(name)
        await Promise.all(nMost.map(async n => {
            if (!news.some((item) => item.id === n.id)) news.push(n)
        }))

        return news
    }


}