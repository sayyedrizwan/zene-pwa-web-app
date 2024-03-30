import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, generateRandomString, imgbb_json } from '../utils/utils'
import axios from 'axios'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json({ status: false, path: '' })

  const values = await events.request.formData()
  const file = values.get("image") as File
  try {
    const formdata = new FormData()
    formdata.append("source", file, `${generateRandomString(8)}_${generateRandomString(8)}_${generateRandomString(8)}.png`)
    formdata.append("type", "file")
    formdata.append("action", "upload")
    formdata.append("expiration", "P6M")

    const r = await fetch(imgbb_json, { method: "POST", body: formdata })
    const response = await r.json() as any

    return json({ status: true, path: response.image.display_url })
  } catch (error) {
    return json({ status: false, path: '' })
  }
}
