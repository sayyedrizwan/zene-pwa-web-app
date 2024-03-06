import { serverLoadFunction } from './api/utils/serverpage.js'

export const load = async ({ fetch, cookies, getClientAddress }) => {
  const clientAddress = getClientAddress()
  const data = serverLoadFunction(fetch, cookies, clientAddress)
  return { data: btoa((await data).keyData), ip: JSON.stringify((await data).ip) }
}

// for tauri app
// uncomment rendering type, change the adapter
// change $env/dynamic/private to $env/dynamic/private
// comment @tauri-apps/api/window

// export const ssr = false
// export const csr = true
// export const prerender = true

export const ssr = true
export const csr = true
export const prerender = false
