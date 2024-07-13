import axios from "axios"
import { lastFMListeningSongs } from "../../utils/Utils"
import type { TopLastFmChartData } from "./model/TopLastFmChartData"

export class LastFMService {
    static instance = new LastFMService()

    async topListeningArtists(): Promise<TopLastFmChartData | undefined> {
        try {
            const response = await axios.get(lastFMListeningSongs, { params: { type: "artist", tracks: 1, nr: 10, format: "json" } })
            return await response.data as TopLastFmChartData
        } catch (error) {
            return undefined
        }
    }
}