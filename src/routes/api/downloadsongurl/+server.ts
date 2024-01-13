import { json, type RequestEvent } from "@sveltejs/kit";

export async function POST(events: RequestEvent) {
  const headers = events.request.headers;
  const id = headers.get('id');

  const response = await fetch(`https://api.fabdl.com/youtube/get-cw?url=https://www.youtube.com/watch?v=${id}`);
  const data = await response.json()

  return new Response(data.result.get_mp3_download_url);
}
