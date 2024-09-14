import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js"
import { auth } from "../../-api-/utils/Utils.js"

export async function load({ params, fetch }) {
  const name = await decryptSharingData(params.id)

  const response = await fetch('/-api-/artistsdata/info', { method: 'POST', headers: { auth: auth }, body: JSON.stringify({ name: name}) });
  return { data: JSON.stringify(await response.json()), url: params.id}
}
