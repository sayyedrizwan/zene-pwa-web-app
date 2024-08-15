import { json } from '@sveltejs/kit'
import { heartbeatAPI, verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'

export async function GET({ url, request }) {
    heartbeatAPI("search-keywords-suggestions");
    if (!verifyHeader(request)) return json([])
    const s = url.searchParams.get('s') ?? ""
    if (s == "") return json([])
    const search = await YoutubeMusicService.instance.searchKeywords(s)
    return json(search)
}