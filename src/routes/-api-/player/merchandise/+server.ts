import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeAPIService } from '../../ApiService/youtube/YoutubeAPIService.js'

export async function GET({ url, request }) {
    if (!verifyHeader(request)) return json([])
    const n = url.searchParams.get('n') ?? ""
    const store = await YoutubeAPIService.instance.merchandises(n)
    return json(store)
}