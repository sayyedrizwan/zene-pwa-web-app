import dns from "dns"
import util from "util"
import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI"
import { json, type RequestEvent } from "@sveltejs/kit"
import { apiError, authKeyError, ip_base_url, radio_browser_country, radio_browser_url } from "../utils/utils"
import type { IpJsonResponse } from "./domain/IpJsonResponse"
import { ExtraDataMusicData, MusicData, MusicType } from "../../../domain/local/entities/MusicData"
import type { RadioListResponse } from "./domain/RadioListResponse"


export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) {
    return json(authKeyError)
  }

  try {
    const cityRadio: MusicData[] = []
    const countryRadio: MusicData[] = []
    const radioBaseURL = await get_radiobrowser_base_url_random()
    const responseIp = await fetch(ip_base_url)
    const ipData = await responseIp.json() as IpJsonResponse

    const responseRadio = await fetch(`${radioBaseURL}${radio_browser_country}${ipData.country.toLowerCase()}`)
    const response = await responseRadio.json() as RadioListResponse

    response.forEach(r => {
      if (r.name != undefined)
        if (r.state?.toLowerCase() === ipData.city.toLowerCase()) {
          cityRadio.push(new MusicData(r.name, r.language ?? "", r.serveruuid, r.favicon ?? "", MusicType.RADIO))
        } else {
          countryRadio.push(new MusicData(r.name, r.language ?? "", r.serveruuid, r.favicon ?? "", MusicType.RADIO))
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
    hosts.sort();
    return hosts.map(host => "https://" + host.name)
  });
}

function get_radiobrowser_base_url_random() {
  return get_radiobrowser_base_urls().then((hosts: string | any[]) => {
    var item = hosts[Math.floor(Math.random() * hosts.length)]
    return item
  })
}
