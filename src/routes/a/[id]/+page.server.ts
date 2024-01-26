import { btoa } from 'buffer'
import { serverLoadFunction } from '../../api/utils/serverpage.js'
import { decryptAppSharedData } from '../../api/utils/EncryptionForAPI.js'

export const load = async ({ params, fetch, cookies, getClientAddress }) => {
  const artistName = decryptAppSharedData(params.id)
  const data = await serverLoadFunction(fetch, cookies, getClientAddress())
  return { data: btoa(data.keyData), ip: JSON.stringify(data.ip), name: artistName }
}
