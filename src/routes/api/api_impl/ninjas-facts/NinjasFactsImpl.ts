import axios from "axios"
import { api_ninjas_facts, getRandomItem } from "../../utils/utils"
import type { NinjasFactsResponse } from "./domain/NinjasFactsResponse"

export class NinjasFactsImpl {

    async getARandomFacts(): Promise<string> {
        const r = await axios.get(api_ninjas_facts, { params: { limit: 1 }, headers: { origin: 'https://api-ninjas.com', referer: 'https://api-ninjas.com/' } })
        const response = (await r.data) as NinjasFactsResponse
        return getRandomItem(response ?? [])?.fact ?? ''
    }
}