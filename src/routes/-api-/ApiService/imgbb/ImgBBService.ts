import axios from "axios"
import type { ImgBBData } from "./model/ImgBBData"
import { IMG_BB_BASE_URL } from "../../utils/Utils"

export class ImgBBService {
    static instance = new ImgBBService()

    async uploadImgBB(file: any): Promise<String> {
        try {
            let data = new FormData()
            data.append('image', file)

            let config = { method: 'post', url: IMG_BB_BASE_URL, data: data }

            const response = await axios.request(config)
            const imgbb = await response.data as ImgBBData
            let url = imgbb.data?.image?.url ?? ""
            return url
        } catch (error) {
            return ""
        }
    }
}