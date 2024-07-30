import { parse } from 'node-html-parser'
import { billboardTopArtists } from '../../utils/Utils'
import axios from 'axios'

export class BillboardAPIService {
    static instance = new BillboardAPIService()

    async topListeningArtists(): Promise<string[]> {
        try {
            const response = await axios.get(billboardTopArtists)
            const data = await response.data as string
    
            const name: string[] = []
    
            const root = parse(data)
            root.querySelectorAll('.o-chart-results-list-row-container')?.forEach(html => {
                name.push(html.querySelector("#title-of-a-story")?.innerText.toString().trim() ?? "")
            })
    
            return name   
        } catch (error) {
            return []    
        }
    }
}