import { btoa } from 'buffer'
import { serverLoadFunction } from '../../api/utils/serverpage.js'
import { env } from '$env/dynamic/public'
import type { SpotifyPlaylistsMusicData } from '../../../domain/local/entities/SpotifyPlaylistsMusicData.js'

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

  const res = await fetch(env.PUBLIC_SPOTIFY_ZENE_P_API, { method: 'POST', headers: { AuthorizationKey: key}, body : JSON.stringify({uri: rurl, code: code}) })
  const response = await res.json() as SpotifyPlaylistsMusicData[]
  
  return { data: btoa(key), ip: JSON.stringify((await data).ip), response: response }
}