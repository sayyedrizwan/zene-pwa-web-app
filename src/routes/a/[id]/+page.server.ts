import { decryptAppSharedData} from '../../api/utils/EncryptionForAPI.js'

export const load = ({ params }) => {
  const decryptId = decryptAppSharedData(params.id)
  return { data: decryptId }
}
