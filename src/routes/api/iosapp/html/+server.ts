import { type RequestEvent } from '@sveltejs/kit'

export async function GET(events: RequestEvent) {
  const query = new URLSearchParams(events.url.search);
  let url = query.get("url")
  try {
    const response = await fetch(decodeURI(url ?? ""))
    const d = await response.text()
    return new Response(d)
  } catch (error) {
    return new Response("")
  }
}