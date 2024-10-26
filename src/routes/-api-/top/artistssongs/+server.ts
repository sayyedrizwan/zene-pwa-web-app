import { json } from '@sveltejs/kit'
import { heartbeatAPI, isJson, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { MusicDataWithArtists } from '../../ApiService/model/MusicDataWithArtists.js'
import { YoutubeAPIService } from '../../ApiService/youtube/YoutubeAPIService.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { filterArtistsName } from '../../utils/extension/String.js'

export async function POST({ request }) {
    heartbeatAPI("top-artists-songs");

    return json([])

    if (!verifyHeader(request)) return json([])

    const body = await request.json()

    if (!String(body.email).includes("@") && body.email.length < 3) return json([])

    const localList = isJson(body.list) ? (JSON.parse(body.list) as String[]) : [];
    const artists = localList.length > 3 ? localList : await MongoDBLocalService.instance.topFifteenArtistsOfUsers(body.email);

    let list: MusicDataWithArtists[] = []

    await Promise.all(artists.map(async (n: String) => {
        try {
            const name = filterArtistsName(n)
            const artists = await YoutubeMusicService.instance.searchArtists(name.toString())
            const artistsSongs = await YoutubeMusicService.instance.searchSongs(`${name} top songs`)
            const artistsPlaylists = await YoutubeMusicService.instance.searchPlaylists(`${name} top`)
            const artistsVideo = await YoutubeAPIService.instance.searchVideos(`${name} official songs`)

            if (!list.some((item) => item.artists.name === (artists[0].name ?? "")))
                list.push(new MusicDataWithArtists(artists[0], artistsSongs, artistsPlaylists, artistsVideo))
            
        } catch (error) {
            //console.log(error)
        }
    }))

    return json(list)
}