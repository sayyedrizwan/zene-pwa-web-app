import { json } from '@sveltejs/kit'
import type { MusicData } from '../ApiService/model/MusicData.js'
import { shuffle, verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    let list: MusicData[] = []

    await Promise.all(body.map(async (id: string) => {
        const playlist = await YoutubeMusicService.instance.similarSongs(id)
        playlist?.forEach((p, i) => {
            if (i > 2 && !list.some((item) => item.id === p.id)) list.push(p)
        })
    }))

    return json(shuffle(list))
}