import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'
import { YoutubeAPIService } from '../ApiService/youtube/YoutubeAPIService.js'
import { MusicDataSearch } from '../ApiService/model/MusicDataSearch.js'

export async function GET({ url, request }) {
    if (!verifyHeader(request)) return json([])
    const s = url.searchParams.get('s') ?? ""
    if (s == "") return json([])

    const artists = await YoutubeMusicService.instance.searchArtists(s)
    const playlist = await YoutubeMusicService.instance.searchPlaylists(s)
    const albums = await YoutubeMusicService.instance.searchAlbums(s)
    const songs = await YoutubeMusicService.instance.searchSongs(s, true)
    const video = await YoutubeAPIService.instance.searchVideos(s, true)


    const data = new MusicDataSearch(artists, songs, playlist, video, albums)

    return json(data)
}