import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid, decryptAppSharedData } from '../../utils/EncryptionForAPI'
import { apiError, authKeyError } from '../../utils/utils'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { searchLastFM, searchLastFMWiki } from '../Utils'
import { ArtistsInfoData } from '../../../../domain/local/entities/ArtistsInfoData'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const name = decryptAppSharedData(headers.get('name') ?? '')

  if (name == undefined) return json(apiError)
  if (name === '') return json(apiError)
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const searchInfo = await axios.get(searchLastFM(name))
    const pageInfo = new JSDOM(await searchInfo.data)
    const artistsImage = pageInfo.window.document.querySelectorAll('.grid-items-cover-image.js-link-block.link-block')[0]?.querySelector('img')?.getAttribute('src')?.replace('300x300', '512x512')
    const link = pageInfo.window.document.querySelectorAll('.js-link-block-cover-link.link-block-cover-link')[0]?.getAttribute('href')
    const wikiInfoResponse = await axios.get(searchLastFMWiki(link!))
    const wikiInfo = new JSDOM(await wikiInfoResponse.data)

    let info = ''
    wikiInfo.window.document
      .querySelector('.wiki-content')
      ?.querySelectorAll('p')
      .forEach((element, i) => {
        if (i <= 3) info += String(element.textContent)
      })

    return json(new ArtistsInfoData(name, artistsImage ?? '', info))
  } catch (error) {
    return json(apiError)
  }
}
