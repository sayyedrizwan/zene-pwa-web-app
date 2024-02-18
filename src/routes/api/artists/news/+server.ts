import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { NewsImpl } from '../../api_impl/news/NewsImpl'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const name = headers.get('name') ?? ""

  if (name == undefined) return json(apiError)
  if (name === "") return json(apiError)
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const news = new NewsImpl()

  try {
    const search = news.search(name)
    return json(search)
  } catch (error) {
    return json([])
  }
}
