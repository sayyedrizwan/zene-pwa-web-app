import { env } from '$env/dynamic/private'
import { btoa } from 'buffer'
import { last_sync_ts_cookie, readIpViaAWS, users_ip_address } from './api/utils/utils.js'

export const load = async ({ fetch, cookies }) => {
  const response = await fetch(env.AUTH_TOKEN_ZENES, { method: 'POST' })
  const data = await response.json()
  cookies.set(last_sync_ts_cookie, Date.now().toString(), { path: '/', httpOnly: false })

  const responseip = await fetch(readIpViaAWS)
  const ip = (await responseip.text()).trim()
  cookies.set(users_ip_address, ip.toString(), { path: '/', httpOnly: false, secure: true })
  return { data: btoa(data.key) }
}
