import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { LastFMService } from '../../ApiService/lastfm/LastFMService.js'
import { MostListeningData } from '../../ApiService/model/TopListenSongs.js'

export async function GET({ request }) {
    if (!verifyHeader(request)) return json([])

    let list : MostListeningData[] = []
    const items = await LastFMService.instance.topListeningArtists()
    if (items == undefined) return json({})
    

    await Promise.all(items.results.artist.map(async artists => {
        const song = await YoutubeMusicService.instance.searchSongs(`${artists.tracks[0].name} - ${artists.name}`)
        list.push(new MostListeningData(artists.listeners, song[0]))
    }))

    return json(list)
}