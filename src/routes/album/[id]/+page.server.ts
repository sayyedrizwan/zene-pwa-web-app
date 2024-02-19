import { atob } from 'buffer'
import { serverLoadFunction } from '../../api/utils/serverpage.js'
import { env } from '$env/dynamic/public'
import type { MusicData } from '../../../domain/local/entities/MusicData.js'

export const load = async ({ params, fetch, cookies, getClientAddress }) => {
  const albumId = atob(params.id)

  const data = await serverLoadFunction(fetch, cookies, getClientAddress())

  const response = await fetch(env.PUBLIC_ARTISTS_ALBUMS, { method: 'post', headers: { AuthorizationKey: data.keyData, id: albumId } })
  const albumResponse = (await response.json()) as MusicData

  return { data: btoa(data.keyData), ip: JSON.stringify(data.ip), info: albumResponse, url: params.id }
}
