import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { LastFMService } from '../../ApiService/lastfm/LastFMService.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { ArtistsData, ArtistsDataInfo } from '../../ApiService/model/ArtistsData.js'
import type { MusicData } from '../../ApiService/model/MusicData.js'
import { SoundAPIService } from '../../ApiService/soundcloud/SoundAPIService.js'
import type { SocialProfileUserData } from '../../ApiService/soundcloud/model/SocialProfileUserData.js'

export async function POST({ request }) {
    if (!verifyHeader(request)) return json([])

    const body = await request.json()
    const name = body.name

    const lastFMURL = await LastFMService.instance.searchArtists(name)
    
    let imgs: String[] = []
    let topSongs: MusicData[] = []
    let desc: String | null = ""
    let mainName: String | null = ""
    let infos: [SocialProfileUserData, number] = [[], 0]



    await Promise.all([1, 2, 3, 4, 5].map(async page => {
        if (page == 1 || page == 2) {
            const lastFMImages = await LastFMService.instance.searchImages(lastFMURL, page)
            lastFMImages.forEach(e => {
                if (!imgs.some((item) => item === e)) imgs.push(e)
            })
        } else if (page == 3) {
            const ytMusicURL = await YoutubeMusicService.instance.searchArtistsSpecific(name)
            const lastFMTopSongs = await LastFMService.instance.topSongs(lastFMURL)

            mainName = ytMusicURL?.name ?? null

            await Promise.all(lastFMTopSongs.map(async songs => {
                const song = await YoutubeMusicService.instance.searchSongs(`${ytMusicURL?.name} - ${songs[0]}`)
                if (song[0] != undefined) {
                    const s = song[0]
                    s.extra = songs[1]
                    topSongs.push(s)
                }
            }))
        } else if (page == 4) {
            desc = await LastFMService.instance.wiki(lastFMURL) ?? null
        } else if (page == 5) {
            infos = await SoundAPIService.instance.socialInfo(name)
        }
    }))


    
    if (mainName == undefined) return json({})
    return json(new ArtistsDataInfo(mainName, imgs, topSongs, desc, infos[1], infos[0]))
}
