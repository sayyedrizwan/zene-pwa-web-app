import { json, type RequestEvent } from '@sveltejs/kit'

export async function POST(events: RequestEvent) {
  try {
    const name = events.request.headers.get("name") ?? ""
    console.log(name)
    const path = await fetch(`https://www.pinterest.com.mx/resource/BaseSearchResource/get/?source_url={ "q": "${name.toLocaleLowerCase}", "rs": "typed" }&data={"options":{"article":"","appliedProductFilters":"---","price_max":null,"price_min":null,"query":"${name.toLowerCase()}","scope":"pins","auto_correction_disabled":"","top_pin_id":"","filters":""},"context":{}}`)
    return json(await path.json())
  } catch (error) {
    return json({})
  }
}