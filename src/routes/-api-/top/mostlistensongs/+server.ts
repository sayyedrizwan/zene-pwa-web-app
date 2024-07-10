import { json } from '@sveltejs/kit'
import { shuffle, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import type { MusicData } from '../../ApiService/model/MusicData.js'
import { LastFMService } from '../../ApiService/lastfm/LastFMService.js'

export async function GET({ request }) {
    if (!verifyHeader(request)) return json([])

    let list : MusicData[] = []
    const items = await LastFMService.instance.topListeningArtists()
    if (items == undefined) return json({})
    

    await Promise.all(items.results.artist.map(async artists => {
        const song = YoutubeMusicService.instance.searchSongs(`${artists.tracks[0].name} - ${artists.name}`)
        // console.log(artists)
    }))

    return json(shuffle(list))
}