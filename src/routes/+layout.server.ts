import { env } from '$env/dynamic/private'
import { btoa } from 'buffer'
import { serverLoadFunction } from './api/utils/serverpage.js'
import { encryptData } from './api/utils/EncryptionForAPI.js'

export const load = async ({ fetch, cookies, getClientAddress }) => {
  const clientAddress = getClientAddress()
  const data = serverLoadFunction(fetch, cookies, clientAddress)
  const currentTime = new Date().getTime()
  return { data: btoa((await data).keyData), ip: JSON.stringify((await data).ip), t: currentTime, a: btoa(env.SECRET_TOKEN_LITE).replaceAll("==", ""), p: encryptData(clientAddress) }
}

// for tauri app
// uncomment rendering type, change the adapter
// change $env/static/private to $env/dynamic/private
// comment @tauri-apps/api/window

// export const ssr = false
// export const csr = true
// export const prerender = true

export const ssr = true
export const csr = true
export const prerender = false
