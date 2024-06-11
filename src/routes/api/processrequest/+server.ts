import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError} from '../utils/utils'

export async function POST(events: RequestEvent) {
  const url = events.request.headers.get("url")
  const type = events.request.headers.get("type")
  const restype = events.request.headers.get("restype")

  const body = await events.request.json()
  try {
    const r = type == "post" ? await fetch(url ?? "", { method: 'POST', headers: body.headers, body: body.body }) : await fetch(url ?? "")
    return restype == "json" ? (await r.json()) : (await r.text())
  } catch (error) {
    return json(apiError)
  }
}
