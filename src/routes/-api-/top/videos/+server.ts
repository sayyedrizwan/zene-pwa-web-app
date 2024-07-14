import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { MUSICTYPE, type MusicData } from '../../ApiService/model/MusicData.js'
import { YoutubeAPIService } from '../../ApiService/youtube/YoutubeAPIService.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    let list : MusicData[] = []

    await Promise.all(body.map(async (name: string) => {
        const songInfo = await YoutubeMusicService.instance.searchSongs(name)
        const videoID = await YoutubeAPIService.instance.searchVideoIDFirst(`${name} Official Video`)
        const song = songInfo[0]
        song.extra = videoID
        song.type = MUSICTYPE.VIDEO

        list.push(song)
    }))

    return json(list)
}