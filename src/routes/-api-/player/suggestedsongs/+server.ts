import { json } from '@sveltejs/kit'
import { heartbeatAPI, shuffle, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'

export async function GET({ url, request }) {
    heartbeatAPI("suggested-songs");
    if (!verifyHeader(request)) return json([])
    const s = url.searchParams.get('s') ?? ""
    if (s == "") return json([])

    const top = await YoutubeMusicService.instance.similarSongs(s)
    const more = await YoutubeMusicService.instance.upNextSongs(s)
   
    const list = [ ...shuffle(top ?? []), ...shuffle(more ?? [])]

    return json(list)
}