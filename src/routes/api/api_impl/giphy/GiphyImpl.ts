import axios from "axios"
import { getRandomItem, giphy_key, giphy_search } from "../../utils/utils"
import type { SearchGiphyResponse } from "./domain/SearchGiphyResponse"
import ytdl from "ytdl-core"

export class GiphyImpl {

    async searchGiphyRandomOne(q: string): Promise<string> {
        const r = await axios.get(giphy_search, { params: { api_key: giphy_key, q: q, sort: 'sort', type: 'gifs', offset: 'offset', rating: 'pg-13' } })
        const response = (await r.data) as SearchGiphyResponse
        const random = getRandomItem(response.data ?? [])?.id

        return `https://i.giphy.com/${random}.webp`
    }
}