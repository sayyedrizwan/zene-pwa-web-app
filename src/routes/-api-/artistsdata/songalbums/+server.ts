import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { ArtistsData } from '../../ApiService/model/ArtistsData.js'
import { MUSICTYPE, type MusicData } from '../../ApiService/model/MusicData.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()
    const name = body.name

    const ytMusicURL = await YoutubeMusicService.instance.searchArtistsSpecific(name)
    if (ytMusicURL?.id == undefined) return json({})

    const getPageIDS = await YoutubeMusicService.instance.artistsPageData(ytMusicURL?.id.toString())
    const allSongs = await YoutubeMusicService.instance.playlistsData(getPageIDS[0]?.toString() ?? "")
    const allAlbums = await YoutubeMusicService.instance.listGridData(getPageIDS[1]?.toString() ?? "")
    const allVideos: MusicData[] = []

    const v = await YoutubeMusicService.instance.playlistsData(getPageIDS[2]?.toString() ?? "")

    await Promise.all((v[1] ?? []).map(async music => {
        const m = music
        m.type = MUSICTYPE.VIDEO
        m.extra = m.id
        allVideos.push(music)
    }))

    if (ytMusicURL?.name == undefined) return json({})
    return json(new ArtistsData(allSongs[1] ?? [], allAlbums ?? [], allVideos ?? [], getPageIDS[3] ?? []))
}

