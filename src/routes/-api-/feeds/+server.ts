import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'


// export async function POST({ request }) {
//     if (!verifyHeader(request)) return json({})

//     const body = await request.json()
//     const moodID = body.email

//     const moodsL = await YoutubeMusicService.instance.moodData(moodID)
//     return json(moodsL ?? {})
// }

