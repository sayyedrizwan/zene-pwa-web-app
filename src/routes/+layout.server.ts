import { btoa } from 'buffer'
import { serverLoadFunction } from './api/utils/serverpage.js'

export const load = async ({ getClientAddress }) => {
  const ip = getClientAddress() == "::1" ? "183.87.181.11" : getClientAddress()
  return { data: ip }
}

export const ssr = true
export const csr = true
export const prerender = false
