import { decryptAPIKeyAndIsValid, encryptAppSharedData } from '../../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, top_100_artists_billboard } from '../../utils/utils'
import { JSDOM } from 'jsdom'
import { MusicData, MusicType } from '../../../../domain/local/entities/MusicData'
import axios from 'axios'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const lists: MusicData[] = []
    const response = await axios.get(top_100_artists_billboard)
    const dom = new JSDOM(await response.data)

    dom.window.document.querySelectorAll('.o-chart-results-list-row-container').forEach((element) => {
      const artistsImage = element.querySelector('.lrv-a-crop-1x1')?.querySelector('img')?.getAttribute('data-lazy-src')?.replace('182', '344')
      let artistName = ''
      element.querySelectorAll('#title-of-a-story').forEach((name) => {
        if (name.outerHTML.toString().includes('u-max-width-230@tablet-only')) artistName = name.innerHTML.trim().toString()
      })
      lists.push(new MusicData(artistName, artistName, encryptAppSharedData(artistName), artistsImage ?? '', MusicType.ARTISTS))
    })

    return json(lists)
  } catch (error) {
    return json(apiError)
  }
}
