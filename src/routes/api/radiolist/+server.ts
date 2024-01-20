import dns from 'dns'
import util from 'util'
import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, getIpAddress, ipBaseUrl, radio_browser_country, radio_browser_url, users_ip_address } from '../utils/utils'
import type { IpJsonResponse } from './domain/IpJsonResponse'
import { ExtraDataMusicData, MusicData, MusicType } from '../../../domain/local/entities/MusicData'
import type { RadioListResponse } from './domain/RadioListResponse'
import axios from 'axios'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  try {
    const cityRadio: MusicData[] = []
    const countryRadio: MusicData[] = []
    const radioBaseURL = await get_radiobrowser_base_url_random()
    const responseIp = await axios.get(ipBaseUrl(getIpAddress(events)))
    const ipData = (await responseIp.data) as IpJsonResponse

    const responseRadio = await axios.get(`${radioBaseURL}${radio_browser_country}${String(ipData.country).toLowerCase()}`, { timeout: 120000 })
    const response = (await responseRadio.data) as RadioListResponse

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

function get_radiobrowser_base_urls() {
  const resolveSrv = util.promisify(dns.resolveSrv)

  return resolveSrv(radio_browser_url).then((hosts: any[]) => {
    hosts.sort()
    return hosts.map((host) => 'https://' + host.name)
  })
}

function get_radiobrowser_base_url_random() {
  return get_radiobrowser_base_urls().then((hosts: string | any[]) => {
    var item = hosts[Math.floor(Math.random() * hosts.length)]
    return item
  })
}
