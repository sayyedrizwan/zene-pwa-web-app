import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError, getRandomItem, shuffleList } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { PinterestImpl } from '../../api_impl/pinterest/PinterestImpl'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const name = headers.get('name')

  if (name == undefined) return json(apiError)
  if (name === '') return json(apiError)
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const pImpl = new PinterestImpl()

  try {
    const searchLists = [`${name}`, `${name} photoshoot`, `${name} latest images`, `${name} lyrics`]
    const imageList: string[] = []

    await Promise.all(
      searchLists.map(async (e) => {
        const search = await pImpl.searchImage(e)
        search.forEach(i => {
          imageList.push(i)
        })
      })
    )

    return json(shuffleList(imageList))
  } catch (error) {
    return json([])
  }
}
