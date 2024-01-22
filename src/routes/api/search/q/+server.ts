import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { json, type RequestEvent } from '@sveltejs/kit'
import { authKeyError } from '../../utils/utils'

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)
}
