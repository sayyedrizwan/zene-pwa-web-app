import { json, type RequestEvent } from '@sveltejs/kit'
import axios from 'axios'

const headersYT = {
  "authority": "music.youtube.com",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "origin": "https://music.youtube.com",
  "referer": "https://music.youtube.com",
  "pragma": "no-cache"
}


export async function POST(events: RequestEvent) {
  try {
    const body = await events.request.json()
    
    const url = events.request.headers.get("url") ?? ""
    const path = await axios({method: 'POST', baseURL: url, headers: headersYT, data: body})
    return json(await path.data)
  } catch (error) {
    return json({})
  }
}