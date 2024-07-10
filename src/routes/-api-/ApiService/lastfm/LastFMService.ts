import axios from "axios"
import { lastFMListeningSongs } from "../../utils/Utils"
import type { TopLastFmChartData } from "./model/TopLastFmChartData"
import type { MusicData } from "../model/MusicData"

export class LastFMService {
    static instance = new LastFMService()

    async topListeningArtists(): Promise<TopLastFmChartData | undefined> {
        try {
            const response = await axios.get(lastFMListeningSongs)
            return await response.data as TopLastFmChartData
        } catch (error) {
            return undefined
        }
    }
}