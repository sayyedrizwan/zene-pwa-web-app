import { json, type RequestEvent } from '@sveltejs/kit'

export async function POST(events: RequestEvent) {
  try {
    const name = events.request.headers.get("name") ?? ""
    console.log(name)
    const path = await fetch("https://m.soundcloud.com/", { headers: { "Referer": "https://soundcloud.com/" } })
    const id = (await path.text()).textAfterKeyword("\"clientId\":\"").textBeforeKeyword("\",\"")

    const data = await fetch(`https://api-mobi.soundcloud.com/search/users?q=${name?.toLowerCase()}&client_id=${id}`, { headers: { "Referer": "https://soundcloud.com/" } })
    const response = (await data.json()) as any
    const uID = response.collection[0].username.toLowerCase() == name.toLowerCase() ? response.collection[0].id : 0
    const follower = response.collection[0].followers_count

    const dataProfile = await fetch(`https://api-v2.soundcloud.com/users/soundcloud:users:${uID}/web-profiles?client_id=${id}`, { headers: { "Referer": "https://soundcloud.com/" } })
    const responseProfile = (await dataProfile.json()) as any

    return json({data: responseProfile, follower: follower})
  } catch (error) {
    return json({})
  }
}