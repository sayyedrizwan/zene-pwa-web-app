import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { LastFMService } from '../../ApiService/lastfm/LastFMService.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { ArtistsData, ArtistsDataInfo } from '../../ApiService/model/ArtistsData.js'
import type { MusicData } from '../../ApiService/model/MusicData.js'
import { SoundAPIService } from '../../ApiService/soundcloud/SoundAPIService.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()
    const name = body.name

    const lastFMURL = await LastFMService.instance.searchArtists(name)
    const ytMusicURL = await YoutubeMusicService.instance.searchArtistsSpecific(name)

    let imgs: String[] = []
    let topSongs: MusicData[] = []

    const infos = await SoundAPIService.instance.socialInfo(name)

    await Promise.all([1, 2].map(async page => {
        const lastFMImages = await LastFMService.instance.searchImages(lastFMURL, page)
        lastFMImages.forEach(e => {
            if (!imgs.some((item) => item === e)) imgs.push(e)
        })
    }))


    const lastFMTopSongs = await LastFMService.instance.topSongs(lastFMURL)

    await Promise.all(lastFMTopSongs.map(async songs => {
        const song = await YoutubeMusicService.instance.searchSongs(`${ytMusicURL?.name} - ${songs[0]}`)
        if (song[0] != undefined) {
            const s = song[0]
            s.extra = songs[1]
            topSongs.push(s)
        }
    }))

    const desc = await LastFMService.instance.wiki(lastFMURL) ?? null

    if (ytMusicURL?.name == undefined) return json({})
    return json(new ArtistsDataInfo(ytMusicURL?.name, imgs, topSongs, desc, infos[1], infos[0]))
}

