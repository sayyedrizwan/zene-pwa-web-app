import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { MySqlLocalService } from '../ApiService/dbmysql/MySqlLocalService.js'
import { SoundAPIService } from '../ApiService/soundcloud/SoundAPIService.js'
import { LastFMService } from '../ApiService/lastfm/LastFMService.js'
import { substringAfter, substringBeforeLast } from '../utils/extension/String.js'
import { InstagramService } from '../ApiService/instagram/InstagramService.js'
import { NewsAPIService } from '../ApiService/news/NewsAPIService.js'
import { YoutubeAPIService } from '../ApiService/youtube/YoutubeAPIService.js'
import { MusicData } from '../ApiService/model/MusicData.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'


export async function POST({ request }) {
    if (!verifyHeader(request)) return json({})

    const body = await request.json()
    const email = body.email

    const userInfo = await MySqlLocalService.instance.searchUser(email)

    if (userInfo.pinned_artists == undefined) return json({})
    if (userInfo.pinned_artists.length <= 0) return json({})


    let artists: MusicData[] = []

    await Promise.all(userInfo.pinned_artists.map(async (name: any) => {
        const yt = await YoutubeMusicService.instance.searchArtistsSpecific(name)
        const artistsInfo = await SoundAPIService.instance.socialInfo(name)

        let instagram = ""

        artistsInfo[0].forEach(i => {
            if (i.url?.includes("instagram.com")) instagram = substringAfter(i.url.toString(), "instagram.com/").replaceAll("/", "")
        })

        const news = await NewsAPIService.instance.searchNews(name)
        const instaPosts = await InstagramService.instance.userPosts(instagram)
        const ytCommunity = await YoutubeAPIService.instance.youtubeCommunity(name)

        if(yt != null) artists.push(yt)

        // console.log(ytCommunity.length)
    }))



    return json({})
}

