import { json } from '@sveltejs/kit'
import { heartbeatAPI, verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'

export async function GET({ request }) {
    heartbeatAPI("all-moods");
    if (!verifyHeader(request)) return json([])

    const moods = await YoutubeMusicService.instance.allMoods()
    return json(moods)
}

export async function POST({ request }) {
    heartbeatAPI("get-moods-data");
    if (!verifyHeader(request)) return json([])

    const body = await request.json()
    const moodID = body.id

    const moodsL = await YoutubeMusicService.instance.moodData(moodID)
    return json(moodsL ?? {})
}

