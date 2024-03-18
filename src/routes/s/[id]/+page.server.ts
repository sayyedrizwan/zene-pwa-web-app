import { btoa } from 'buffer'
import { serverLoadFunction } from '../../api/utils/serverpage.js'
import { env } from '$env/dynamic/public'
import { MusicData, MusicType } from '../../../domain/local/entities/MusicData.js'
import { encryptAppSharedData } from '../../api/utils/EncryptionForAPI.js'

export const load = async ({ params, fetch, cookies, getClientAddress }) => {
  const data = await serverLoadFunction(fetch, cookies, getClientAddress())

  const info = await fetch(env.PUBLIC_SONG_INFO, { headers: { AuthorizationKey: data.keyData, id: params.id } })
  const response = (await info.json()) as MusicData

  const artistsNameWithId: MusicData[] = []

  if (response?.artists?.includes(',') || response?.artists?.includes('&')) {
    response?.artists
      ?.split('&')
      .join(',')
      .split(',')
      .forEach((name) => {
        const a = new MusicData(name, name, encryptAppSharedData(name), '', MusicType.ARTISTS)
        artistsNameWithId.push(a)
      })
  } else if ((response?.artists ?? null) != null) {
    const a = new MusicData(response?.artists!, response?.artists!, encryptAppSharedData(response?.artists!), '', MusicType.ARTISTS)
    artistsNameWithId.push(a)
  }

  return { data: btoa(data.keyData), ip: JSON.stringify(data.ip), info: response, url: params.id, artistsLists: JSON.stringify(artistsNameWithId) }
}
