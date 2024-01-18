import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI"
import { json, type RequestEvent } from "@sveltejs/kit"
import { apiError, authKeyError, top_100_artists_billboard } from "../utils/utils"



export async function POST(events: RequestEvent) {
  console.log('1111')
  if (!decryptAPIKeyAndIsValid(events)) {
    return json(authKeyError)
  }

  console.log('22222')
  try {
    const response = await fetch(top_100_artists_billboard)
    const r = await response.text()

    console.log(r)
    return json({})
  } catch (error) {
    console.log(error)
    return json(apiError)
  }
}
