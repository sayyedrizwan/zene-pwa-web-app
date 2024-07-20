import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'
import { YoutubeAPIService } from '../ApiService/youtube/YoutubeAPIService.js'
import { MusicDataSearch } from '../ApiService/model/MusicDataSearch.js'
import type { MusicData } from '../ApiService/model/MusicData.js'

export async function GET({ url, request }) {
    if (!verifyHeader(request)) return json([])
    const s = url.searchParams.get('s') ?? ""
    if (s == "") return json([])

    let artists: MusicData[] = []
    let playlist: MusicData[] = []
    let albums: MusicData[] = []
    let songs: MusicData[] = []
    let video: MusicData[] = []

    await Promise.all([1, 2, 3, 4, 5].map(async id => {
        if (id == 1) artists = await YoutubeMusicService.instance.searchArtists(s)
        else if (id == 2) playlist = await YoutubeMusicService.instance.searchPlaylists(s)
        else if (id == 3) albums = await YoutubeMusicService.instance.searchAlbums(s)
        else if (id == 4) songs = await YoutubeMusicService.instance.searchSongs(s, true)
        else if (id == 4) video = await YoutubeAPIService.instance.searchVideos(`${s} songs`, true)
    }))

    const data = new MusicDataSearch(artists, songs, playlist, video, albums)

    return json(data)
}