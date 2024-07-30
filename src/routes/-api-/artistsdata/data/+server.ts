import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { ArtistsData } from '../../ApiService/model/ArtistsData.js'
import { MUSICTYPE, type MusicData } from '../../ApiService/model/MusicData.js'
import { NewsAPIService } from '../../ApiService/news/NewsAPIService.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()
    const name = body.name

    const ytMusicURL = await YoutubeMusicService.instance.searchArtistsSpecific(name)
    if (ytMusicURL?.id == undefined) return json({})

    const data = await YoutubeMusicService.instance.artistsPageData(ytMusicURL?.id.toString())
    if (data == undefined) return json({})

    let songs: MusicData[] = []
    if (data.songPlaylistID.length > 4) {
        let v = await YoutubeMusicService.instance.playlistsData(data.songPlaylistID.toString())
        songs = v[1] ?? []
    } else {
        songs = data.songPlaylistItems
    }

    let albums: MusicData[] = []
    if (data.albumsID.length > 4) {
        let v = await YoutubeMusicService.instance.listGridData(data.albumsID.toString())
        albums = v ?? []
    } else {
        albums = data.albumsItems
    }

    let videos: MusicData[] = []
    if (data.videoID.length > 4) {
        let v = await YoutubeMusicService.instance.playlistsData(data.videoID.toString())
        await Promise.all((v[1] ?? []).map(async music => {
            const m = music
            m.type = MUSICTYPE.VIDEO
            m.extra = m.id
            videos.push(music)
        }))
    } else {
        videos = data.videoItems
    }

    const news = await NewsAPIService.instance.searchNews(name)

    if (ytMusicURL?.name == undefined) return json({})
    return json(new ArtistsData(songs, albums, videos, data.playlistItems, data.artistsItems, news))
}

