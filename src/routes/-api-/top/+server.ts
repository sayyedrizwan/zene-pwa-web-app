import { json } from '@sveltejs/kit'
import { shuffle, verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'
import type { MusicData } from '../ApiService/model/MusicData.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    let list : MusicData[] = []

    await Promise.all(body.map(async (id: string) => {
        const playlist = await YoutubeMusicService.instance.similarPlaylist(id)
        playlist?.forEach((p, i) => {
            if(body.length >= 7) {
                if(i <= 1) list.push(p)
            } else {
                if(i <= 3) list.push(p)
            }
        })
    }))

    return json(shuffle(list))
}