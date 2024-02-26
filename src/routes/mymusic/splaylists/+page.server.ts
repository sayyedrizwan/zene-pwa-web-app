import { btoa } from 'buffer'
import { serverLoadFunction } from '../../api/utils/serverpage.js'
import { env } from '$env/dynamic/private'

export const load = async ({ fetch, cookies, getClientAddress, url }) => {
  const clientAddress = getClientAddress()
  const data = serverLoadFunction(fetch, cookies, clientAddress)

  const rurl = `${url.origin}${url.pathname}`
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')

  if (state == null) {
    return { data: btoa((await data).keyData), ip: JSON.stringify((await data).ip) }
  }

  const key = (await data).keyData

  const res = await fetch(env.SPOTIFY_ZENE_API, { method: 'POST', headers: { AuthorizationKey: key}, body : JSON.stringify({uri: rurl, code: code}) })
  const response = await res.json()


  return { data: btoa(key), ip: JSON.stringify((await data).ip) }
}
