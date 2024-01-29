
import { env } from '$env/dynamic/private'
import { IpDetails } from '../../../domain/local/entities/IpDetails'
import type { IpJsonResponse } from '../radiolist/domain/IpJsonResponse'
import { decryptData, encryptData } from './EncryptionForAPI'
import { ipBaseUrl, isStringValidJSONObject, last_sync_ts_cookie, users_ip_address, users_ip_details } from './utils'
import axios from 'axios'

export class ServerPageData {
    keyData: string
    ip: IpDetails | undefined

    constructor(keyData: string, ip: IpDetails| undefined) {
        this.keyData = keyData
        this.ip = ip
    }
}


export async function serverLoadFunction(fetch: any, cookies: any, getClientAddress: string): Promise<ServerPageData> {
    const response = await fetch(env.AUTH_TOKEN_ZENES, { method: 'POST' })
    const data = await response.json()
    cookies.set(last_sync_ts_cookie, Date.now().toString(), { path: '/', httpOnly: false, secure: true })

    const ip = getClientAddress.includes("::") ? "183.87.181.11" : getClientAddress
    let ipDetails: IpDetails | undefined = undefined

    if (isStringValidJSONObject<IpDetails>(decryptData(cookies.get(users_ip_details) ?? ''))) ipDetails = JSON.parse(decryptData(cookies.get(users_ip_details) ?? '')) as IpDetails

    if (ip !== cookies.get(users_ip_address) || !isStringValidJSONObject<IpDetails>(decryptData(cookies.get(users_ip_details) ?? ''))) {
        const responseIp = await axios.get(ipBaseUrl(ip))
        const ipData = (await responseIp.data) as IpJsonResponse
        ipDetails = new IpDetails(ipData.country, ipData.city)
        const details = encryptData(JSON.stringify(ipDetails))
        cookies.set(users_ip_details, details, { path: '/', httpOnly: true, secure: true })
    }

    cookies.set(users_ip_address, ip.toString(), { path: '/', httpOnly: true, secure: true })

    return new ServerPageData(data.key, ipDetails)
}