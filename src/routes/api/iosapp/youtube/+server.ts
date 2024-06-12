import { json, type RequestEvent } from '@sveltejs/kit'
import axios from 'axios'

const headers = {
  'accept': '*/*',
  'x-origin': 'https://www.youtube.com',
  'content-type': 'application/json',
  'origin': 'https://www.youtube.com',
  'cookie': 'GPS=1;',
}


export async function POST(events: RequestEvent) {
  try {
    const body = await events.request.json()
    
    const url = events.request.headers.get("url") ?? ""
    const path = await axios({method: 'POST', baseURL: url, headers: headers, data: body})
    return json(await path.data)
  } catch (error) {
    return json({})
  }
}