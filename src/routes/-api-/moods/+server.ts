import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'

export async function GET({ request }) {
    if (!verifyHeader(request)) return json([])

    const moods = await YoutubeMusicService.instance.allMoods()

    // const moodsL = await YoutubeMusicService.instance.moodData(moods[0].id)
    return json(moods)
}