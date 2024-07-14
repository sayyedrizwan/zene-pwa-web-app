import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { MUSICTYPE, type MusicData } from '../../ApiService/model/MusicData.js'
import { YoutubeAPIService } from '../../ApiService/youtube/YoutubeAPIService.js'
import { filterArtistsName } from '../../utils/extension/String.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    let list: MusicData[] = []

    await Promise.all(body.map(async (id: string) => {
        const song = await YoutubeMusicService.instance.songInfo(id)
        if (song != undefined) {
            const videoID = await YoutubeAPIService.instance.searchVideoIDFirst(`${song.name} - ${filterArtistsName(song.artists)} Official Video`)
            song.extra = videoID
            song.type = MUSICTYPE.VIDEO
            list.push(song)
        }
    }))

    return json(list)
}