import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError} from '../utils/utils'

export async function POST(events: RequestEvent) {
  const url = events.request.headers.get("url")
  const type = events.request.headers.get("type")
  const restype = events.request.headers.get("restype")

  const body = await events.request.json()

  console.log(body)
  try {
    const r = type == "post" ? await fetch(url ?? "", { method: 'POST', headers: body.headers.toString(), body: body.body.toString() }) : await fetch(url ?? "")
    console.log(await r.json())
    return restype == "json" ? (await r.json()) : (await r.text())
  } catch (error) {
    console.log(error)
    return json(apiError)
  }
}
