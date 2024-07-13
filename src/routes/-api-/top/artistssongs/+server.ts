import { json } from '@sveltejs/kit'
import { shuffle, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import type { MusicData } from '../../ApiService/model/MusicData.js'
import { MusicDataWithArtists } from '../../ApiService/model/MusicDataWithArtists.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    let list : MusicDataWithArtists[] = []

    await Promise.all(body.map(async (name: string) => {
        const artists = await YoutubeMusicService.instance.searchArtists(name)
        const artistsSongs = await YoutubeMusicService.instance.searchSongs(`${name} top songs`)

        list.push(new MusicDataWithArtists(artists[0], artistsSongs))
    }))

    return json(list)
}