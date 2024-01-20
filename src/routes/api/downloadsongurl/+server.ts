import { json, type RequestEvent } from "@sveltejs/kit";
import axios from "axios";

export async function POST(events: RequestEvent) {
  const headers = events.request.headers;
  const id = headers.get('id')

  const response = await axios(`https://api.fabdl.com/youtube/get-cw?url=https://www.youtube.com/watch?v=${id}`)
  const data = await response.data

  return new Response(data.result.get_mp3_download_url)
}
