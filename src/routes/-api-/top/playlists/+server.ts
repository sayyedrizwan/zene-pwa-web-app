import { json } from '@sveltejs/kit'
import { shuffle, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import type { MusicData } from '../../ApiService/model/MusicData.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()
    if (!body.email.includes("@") && body.email.length < 3) return json([])

    let songsID = await MongoDBLocalService.instance.topFifteenSongsOfUsers(body.email)

    let list: MusicData[] = []

    await Promise.all(songsID.map(async (id: String) => {
        try {
            const playlist = await YoutubeMusicService.instance.similarPlaylist(id.toString())
            playlist?.forEach((p, i) => {
                if (body.length >= 7) {
                    if (i <= 1 && !list.some((item) => item.id === p.id)) list.push(p)
                } else {
                    if (i <= 3 && !list.some((item) => item.id === p.id)) list.push(p)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }))

    return json(shuffle(list))
}