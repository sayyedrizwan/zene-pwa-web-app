import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { YtAPIImpl } from '../../api_impl/yt/YtVideoSearch'

export const GET = async (req: RequestEvent) => {
  const headers = req.request.headers
  const name = headers.get('name')

  if (name == undefined) return json(apiError)
  if (name === '') return json(apiError)
  if (!decryptAPIKeyAndIsValid(req)) return json(authKeyError)

  const ytImpl = new YtAPIImpl()

  try {
    const vId = await ytImpl.searchVideo(`${name} official music video`)
    return new Response(vId[0].songId!)
  } catch (error) {
    return new Response('')
  }
}
