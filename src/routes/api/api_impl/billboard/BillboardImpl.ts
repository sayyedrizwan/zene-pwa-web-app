import axios from 'axios'
import { JSDOM } from 'jsdom'
import { billboard_hot_100 } from './BillboardUtils'

export class BillboardImpl {
  async topSongs(): Promise<string[]> {
    const lists: string[] = []
    const r = await axios.get(billboard_hot_100)
    const response = new JSDOM((await r.data) as string)

    response.window.document.querySelectorAll('.o-chart-results-list-row-container').forEach((item, i) => {
      if (i <= 30) {
        const name = item.querySelector('#title-of-a-story')?.textContent?.trim()
        const artists = item.querySelector('li.lrv-u-width-100p')?.querySelector('span')?.textContent?.trim()
        lists.push(`${name} - ${artists}`)
      }
    })

    return lists
  }
}
