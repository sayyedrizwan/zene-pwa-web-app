import { btoa } from 'buffer'
import { serverLoadFunction } from '../../api/utils/serverpage.js'

export const load = async ({ params, fetch, cookies, getClientAddress }) => {
  const data = await serverLoadFunction(fetch, cookies, getClientAddress())
  return { data: btoa(data.keyData), urlid : params.id }
}
