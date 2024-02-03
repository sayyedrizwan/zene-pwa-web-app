import axios from "axios"
import type { PinterestSearchResponse } from "./domain/PinterestSearchResponse"
import { pintrestImageSearch, searchPintrestQuery } from "./PintrestUtils"

export class PinterestImpl {

    async searchImage(query: string): Promise<PinterestSearchResponse> {
        const responseRadio = await axios.get(pintrestImageSearch, { timeout: 120000, params: {data : searchPintrestQuery(query)} })

        return (await responseRadio.data) as PinterestSearchResponse
    }
}