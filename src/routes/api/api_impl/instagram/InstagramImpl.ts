import axios from "axios"
import { instagram_search } from "../../utils/utils"

export class InstagramImpl {

    async getArtistsPosts(q: string): Promise<string> {
        return ``
        // const r = await axios.get(instagram_search, { params: { context: 'blended', include_reel: true, query: q, search_surface: 'web_top_search' } })
        // const response = (await r.data) as any
       
        // console.log(response)

        // return `https://i.giphy.com/.webp`
    }
}