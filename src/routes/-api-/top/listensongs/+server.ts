import { json } from '@sveltejs/kit'
import { GLOBAL_TRENDING_ARTISTS, MOST_LISTEN_SONGS, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { LastFMService } from '../../ApiService/lastfm/LastFMService.js'
import { MusicData } from '../../ApiService/model/MusicData.js'
import { MySqlLocalService } from '../../ApiService/dbmysql/MySqlLocalService.js'

export async function GET({ request }) {
    if (!verifyHeader(request)) return json([])

    const cacheList = await MySqlLocalService.instance.getTempData(MOST_LISTEN_SONGS)
    if (cacheList.length > 0) return json(cacheList)

    const items = await LastFMService.instance.topListeningArtists()
    if (items == undefined) return json({})

    let list: MusicData[] = []
    let temps: MusicData[] = []


    await Promise.all(items.results.artist.map(async artists => {
        const song = await YoutubeMusicService.instance.searchSongs(`${artists.tracks[0].name} - ${artists.name}`)
        const m = song[0]
        m.extra = artists.listeners
        temps.push(m)
    }))

    const l = await processAndSortByDate(temps)

	await MySqlLocalService.instance.delteTempData(MOST_LISTEN_SONGS)
    l.forEach(async m => {
        list.push(m)
        await MySqlLocalService.instance.insertTempData(m, MOST_LISTEN_SONGS)
    })

    return json(list)
}

async function processAndSortByDate(dataArray: MusicData[]): Promise<MusicData[]> {
    await Promise.all(dataArray.map(data => data.extra))
    dataArray.sort((a, b) => parseInt(b.extra.toString()) - parseInt(a.extra.toString()) )
    return dataArray
}
