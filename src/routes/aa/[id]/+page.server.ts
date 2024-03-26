import { btoa } from 'buffer'
import { encryptAppSharedData } from '../../api/utils/EncryptionForAPI.js'
import { redirect } from '@sveltejs/kit'

export const load = async ({ params }) => {
  if (params.id === '') return { data: '' }
  const artistData = encryptAppSharedData(params.id)
  throw redirect(302, `/a/${artistData}`)
}
