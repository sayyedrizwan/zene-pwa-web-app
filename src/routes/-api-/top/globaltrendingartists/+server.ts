import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { BillboardAPIService } from '../../ApiService/billboard/BillboardAPIService.js'
import type { MusicData } from '../../ApiService/model/MusicData.js'

export async function GET({ request }) {
    if (!verifyHeader(request)) return json([])

    let list = await BillboardAPIService.instance.topListeningArtists()

    const artists: MusicData[] = []

    await Promise.all(list.map(async n => {
        if (n != "") {
            const data = await YoutubeMusicService.instance.searchArtists(n)
            artists.push(data[0])
        }
    }))

    return json(artists)
}