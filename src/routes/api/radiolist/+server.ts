import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, getIpAddress, ipBaseUrl, radio_browser_country, radio_browser_url, users_ip_address } from '../utils/utils'
import type { IpJsonResponse } from './domain/IpJsonResponse'
import { ExtraDataMusicData, MusicData, MusicType } from '../../../domain/local/entities/MusicData'
import axios from 'axios'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const radio = new RadioBrowserImpl()
  try {
    const cityRadio: MusicData[] = []
    const countryRadio: MusicData[] = []

    console.log(events.cookies.get('i'))
    
    const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
    const ipData = (await responseIp.data) as IpJsonResponse

    console.log(ipData)

    const response = await radio.countryRadios(ipData.country)

    response.forEach((r) => {
      if (r.name != undefined)
        if (r.state?.toLowerCase() === ipData.city.toLowerCase()) {
          cityRadio.push(new MusicData(r.name, r.language ?? '', r.serveruuid, r.favicon ?? '', MusicType.RADIO))
        } else {
          countryRadio.push(new MusicData(r.name, r.language ?? '', r.serveruuid, r.favicon ?? '', MusicType.RADIO))
        }
    })
    return json(new ExtraDataMusicData(cityRadio, countryRadio))
  } catch (error) {
    return json(apiError)
  }
}