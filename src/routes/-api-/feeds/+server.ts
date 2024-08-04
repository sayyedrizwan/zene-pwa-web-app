import { json } from '@sveltejs/kit'
import { verifyHeader } from '../utils/Utils.js'
import { MySqlLocalService } from '../ApiService/dbmysql/MySqlLocalService.js'
import { SoundAPIService } from '../ApiService/soundcloud/SoundAPIService.js'
import { convertDateAgoToTS, substringAfter } from '../utils/extension/String.js'
import { InstagramService } from '../ApiService/instagram/InstagramService.js'
import { NewsAPIService } from '../ApiService/news/NewsAPIService.js'
import { YoutubeAPIService } from '../ApiService/youtube/YoutubeAPIService.js'
import { MusicData } from '../ApiService/model/MusicData.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'
import { FEEDTYPE, ZenePostsData } from '../ApiService/model/ZenePostsData.js'


export async function POST({ request }) {
    if (!verifyHeader(request)) return json({})

    const body = await request.json()
    const name = body.name

    let yt: MusicData | undefined = undefined

    let artists: MusicData | undefined = undefined
    let posts: ZenePostsData[] = []

    await Promise.all([1, 2, 3].map(async i => {
        try {
            if (i == 1) {
                yt = await YoutubeMusicService.instance.searchArtistsSpecific(name)
                const news = await NewsAPIService.instance.searchNews(name)
                news.forEach(n => {
                    posts.push(new ZenePostsData(n.id, n.thumbnail.toString(), [n.thumbnail.toString()], convertDateAgoToTS(n.extra), yt?.thumbnail ?? "", "", yt?.name ?? "", n.name, FEEDTYPE.NEWS))
                })
                if (yt != undefined) artists = yt
            } else if (i == 2) {
                const artistsInfo = await SoundAPIService.instance.socialInfo(name)
                let instagram = ""

                artistsInfo[0].forEach(i => {
                    if (i.url?.includes("instagram.com")) instagram = substringAfter(i.url.toString(), "instagram.com/").replaceAll("/", "")
                })

                const instaPosts = await InstagramService.instance.userPosts(instagram)
                instaPosts.forEach(i => posts.push(i))
            } else if (i == 3) {
                const ytCommunity = await YoutubeAPIService.instance.youtubeCommunity(name)
                ytCommunity.forEach(i => posts.push(i))
            }
        } catch (error) {
            console.log(error)
        }
    }))

    return json({ artists: artists, posts: posts })
}

