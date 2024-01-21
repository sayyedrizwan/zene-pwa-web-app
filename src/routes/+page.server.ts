import { env } from '$env/dynamic/private'
import { btoa } from 'buffer'
import { ipBaseUrl, isStringValidJSONObject, last_sync_ts_cookie, readIpViaAWS, users_ip_address, users_ip_details } from './api/utils/utils.js'
import { decryptData, encryptData } from './api/utils/EncryptionForAPI.js'
import axios from 'axios'
import type { IpJsonResponse } from './api/radiolist/domain/IpJsonResponse.js'
import { IpDetails } from '../domain/local/entities/IpDetails.js'

export const load = async ({ fetch, cookies }) => {
  const response = await fetch(env.AUTH_TOKEN_ZENES, { method: 'POST' })
  const data = await response.json()
  cookies.set(last_sync_ts_cookie, Date.now().toString(), { path: '/', httpOnly: false, secure: true })

  const responseip = await fetch(readIpViaAWS)
  const ip = (await responseip.text()).trim()
  var ipDetails: IpDetails | undefined = undefined

  if (isStringValidJSONObject<IpDetails>(decryptData(cookies.get(users_ip_details) ?? ""))) 
    ipDetails = JSON.parse(decryptData(cookies.get(users_ip_details) ?? "")) as IpDetails
  

  if (ip !== cookies.get(users_ip_address) || !isStringValidJSONObject<IpDetails>(decryptData(cookies.get(users_ip_details) ?? ""))) {
    const responseIp = await axios.get(ipBaseUrl(ip))
    const ipData = (await responseIp.data) as IpJsonResponse
    ipDetails = new IpDetails(ipData.country, ipData.city)
    const details = encryptData(JSON.stringify(ipDetails))
    cookies.set(users_ip_details, details, { path: '/', httpOnly: true, secure: true })
  }

  cookies.set(users_ip_address, ip.toString(), { path: '/', httpOnly: true, secure: true })
  return { data: btoa(data.key), ip: JSON.stringify(ipDetails) }
}
