import { btoa } from 'buffer'
import { serverLoadFunction } from './api/utils/serverpage.js'

export const load = async ({ fetch, cookies, getClientAddress }) => {
  const data = serverLoadFunction(fetch, cookies, getClientAddress())
  return { data: btoa((await data).keyData), ip: JSON.stringify((await data).ip) }
}
