import axios from 'axios'
import type { PinterestSearchResponse } from './domain/PinterestSearchResponse'
import { pintrestImageSearch, searchPintrestQuery } from './PintrestUtils'

export class PinterestImpl {
  async searchImage(query: string): Promise<string[]> {
    axios.defaults.timeout = 20000
    const imgs: string[] = []
    const responseRadio = await axios.get(pintrestImageSearch, { params: { data: searchPintrestQuery(query) } })
    const search = (await responseRadio.data) as PinterestSearchResponse

    search?.resource_response?.data?.results?.forEach((i) => {
      if (i.images?.orig?.url != undefined) imgs.push(i.images?.orig?.url)
    })

    return imgs
  }
}
