import { json } from '@sveltejs/kit'
import { GLOBAL_TRENDING_ARTISTS, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { BillboardAPIService } from '../../ApiService/billboard/BillboardAPIService.js'
import { MusicData } from '../../ApiService/model/MusicData.js'
import { MySqlLocalService } from '../../ApiService/mysql/MySqlLocalService.js'

export async function GET({ request }) {
    if (!verifyHeader(request)) return json([])

    const artists: MusicData[] = []

    const cacheList = await MySqlLocalService.instance.getTempData(GLOBAL_TRENDING_ARTISTS)
    if(cacheList.length > 0) return json(cacheList)

    let list = await BillboardAPIService.instance.topListeningArtists()

    await Promise.all(list.map(async n => {
        if (n != "") {
            const data = await YoutubeMusicService.instance.searchArtists(n)
            artists.push(data[0])
            await MySqlLocalService.instance.insertTempData(data[0], GLOBAL_TRENDING_ARTISTS) 
        }
    }))

    return json(artists)
}