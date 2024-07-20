import { json } from '@sveltejs/kit'
import { shuffle, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import type { MusicData } from '../../ApiService/model/MusicData.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    let list: MusicData[] = []

    await Promise.all(body.map(async (id: string) => {
        const sSongs = await YoutubeMusicService.instance.similarSongs(id)
        const nSongs = await YoutubeMusicService.instance.upNextSongs(id)
        sSongs?.forEach((p, i) => {
            if (i <= 3 && !list.some((item) => item.id === p.id)) list.push(p)
        })
        nSongs?.forEach((p, i) => {
            if (i <= 3 && !list.some((item) => item.id === p.id)) list.push(p)
        })
    }))

    return json(shuffle(list))
}