import { btoa } from 'buffer'
import { serverLoadFunction } from '../../api/utils/serverpage.js'
import { decryptAppSharedData } from '../../api/utils/EncryptionForAPI.js'
import { env } from '$env/dynamic/public'
import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData.js'

export const load = async ({ params, fetch, cookies, getClientAddress }) => {
  const artistName = decryptAppSharedData(params.id)

  if (artistName === '') return { data: '', name: '' }

  const data = await serverLoadFunction(fetch, cookies, getClientAddress())

  const artistsInfo = await fetch(env.PUBLIC_SEARCH_ARTISTS_INFO, { method: 'post', headers: { AuthorizationKey: data.keyData, name: params.id } })
  const artistsResponse = (await artistsInfo.json()) as ArtistsInfoData

  return { data: btoa(data.keyData), ip: JSON.stringify(data.ip), info: artistsResponse, url: params.id }
}
