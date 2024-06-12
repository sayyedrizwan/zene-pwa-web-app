import { json, type RequestEvent } from '@sveltejs/kit'
import axios from 'axios'


export async function POST(events: RequestEvent) {
  try {
    const response = await axios.get("https://kerve.last.fm/kerve/charts?type=artist&tracks=1&nr=10&format=json")
    return json(await response.data)
  } catch (error) {
    return json({})
  }
}