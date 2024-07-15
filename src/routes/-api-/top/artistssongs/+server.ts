import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { MusicDataWithArtists } from '../../ApiService/model/MusicDataWithArtists.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    let list : MusicDataWithArtists[] = []

    await Promise.all(body.map(async (name: string) => {
        const artists = await YoutubeMusicService.instance.searchArtists(name)
        const artistsSongs = await YoutubeMusicService.instance.searchSongs(`${name} top songs`)
        const artistsPlaylists = await YoutubeMusicService.instance.searchPlaylists(`${name} top`)

        if(!list.some((item) => item.artists.name === artists[0].name)) 
            list.push(new MusicDataWithArtists(artists[0], artistsSongs, artistsPlaylists))
    }))

    return json(list)
}