import axios from "axios";
import { pinterestHeader, pinterestSearchBaseURL } from "../../utils/Utils"
import type { PinterestSearchData } from "./model/PinterestSearchData"


export class PinterestAPIService {
    static instance = new PinterestAPIService()

    async searchImgs(name: String): Promise<[String[], String]> {
        try {
            const imgs: String[] = []
            const search = `/search/pins/?q=${name.replaceAll(" ", "%20")}&rs=rs&eq=&etslf=10`
            const searchJson = { "options": { "applied_filters": null, "appliedProductFilters": "---", "article": null, "auto_correction_disabled": false, "corpus": null, "customized_rerank_type": null, "domains": null, "filters": null, "journey_depth": null, "page_size": null, "price_max": null, "price_min": null, "query_pin_sigs": null, "query": name, "redux_normalize_feed": true, "rs": "rs", "scope": "pins", "selected_one_bar_modules": null, "source_id": null, "source_module_id": null, "top_pin_id": null }, "context": {} }

            const response = await axios.get(pinterestSearchBaseURL, { params: { source_url: search, data: JSON.stringify(searchJson) }, headers: pinterestHeader })
            const data = await response.data as PinterestSearchData

            data.resource_response?.data?.results?.forEach(e => {
                if (e.images?.orig?.url != undefined) imgs.push(e.images.orig.url)
            })

            return [imgs, data.resource_response?.bookmark ?? ""]
        } catch (error) {
            return [[], ""]
        }
    }


    async getBookmarkSearchImgs(name: String, bookmark: String): Promise<[String[], String]> {
        try {
            const imgs: String[] = []

            let datas = JSON.stringify({
                'source_url': `/search/pins/?q=${name.replaceAll(" ", "%20")}&rs=rs&eq=&etslf=10`,
                'data': '{"options":{"applied_filters":null,"appliedProductFilters":"---","article":null,"auto_correction_disabled":false,"corpus":null,"customized_rerank_type":null,"domains":null,"filters":null,"journey_depth":null,"page_size":null,"price_max":null,"price_min":null,"query_pin_sigs":null,"query":"' + name.replaceAll(" ", "%20") + '","redux_normalize_feed":true,"rs":"rs","scope":"pins","selected_one_bar_modules":null,"source_id":null,"source_module_id":null,"top_pin_id":null,"bookmarks":["' + bookmark.trim() + '"]},"context":{}}' 
              })
              
              let config = {
                method: 'post',
                url: pinterestSearchBaseURL,
                headers: pinterestHeader,
                data : datas
              };
              
              const response =  await axios.request(config)
              const data = await response.data as PinterestSearchData

            data.resource_response?.data?.results?.forEach(e => {
                if (e.images?.orig?.url != undefined) imgs.push(e.images.orig.url)
            })

            return [imgs, data.resource_response?.bookmark ?? ""]
        } catch (error) {
            //console.log(error)
            return [[], ""]
        }
    }
}