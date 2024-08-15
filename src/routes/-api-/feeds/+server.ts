import { json } from '@sveltejs/kit'
import { heartbeatAPI, verifyHeader } from '../utils/Utils.js'
import { MySqlLocalService } from '../ApiService/dbmysql/MySqlLocalService.js'
import { SoundAPIService } from '../ApiService/soundcloud/SoundAPIService.js'
import { convertDateAgoToTS, convertShortDateAgoToTS, substringAfter } from '../utils/extension/String.js'
import { InstagramService } from '../ApiService/instagram/InstagramService.js'
import { NewsAPIService } from '../ApiService/news/NewsAPIService.js'
import { YoutubeAPIService } from '../ApiService/youtube/YoutubeAPIService.js'
import { MusicData } from '../ApiService/model/MusicData.js'
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'
import { FEEDTYPE, ZenePostsData } from '../ApiService/model/ZenePostsData.js'

export async function POST({ request }) {
    heartbeatAPI("feeds");
    if (!verifyHeader(request)) return json({})

    const body = await request.json()
    const email = body.email

    if (!email.includes("@") && email.length < 3) return json({})

    const artistsName = await MySqlLocalService.instance.searchUser(email)

    let artists: MusicData[] = []
    let posts: ZenePostsData[] = []

    async function processItem(name: string) {
        try {
            let yt = await YoutubeMusicService.instance.searchArtistsSpecific(name)
            const news = await NewsAPIService.instance.searchNews(`${name} news`)
            news.forEach(n => {
                posts.push(new ZenePostsData(n.id, n.thumbnail.toString(), [n.thumbnail.toString()], convertShortDateAgoToTS(n.extra.toString()), yt?.thumbnail ?? "", "", yt?.name ?? "", n.name, FEEDTYPE.NEWS))
            })
            if (yt != undefined) artists.push(yt)
            // if (i == 2) {
            //     const artistsInfo = await SoundAPIService.instance.socialInfo(name)
            //     let instagram = ""

            //     artistsInfo[0].forEach(i => {
            //         if (i.url?.includes("instagram.com")) instagram = substringAfter(i.url.toString(), "instagram.com/").replaceAll("/", "")
            //     })
            //     if (instagram.trim() != "") {
            //         const instaPosts = await InstagramService.instance.userPosts(instagram)
            //         instaPosts.forEach(i => posts.push(i))
            //     }
            // }

            // const ytCommunity = await YoutubeAPIService.instance.youtubeCommunity(name)
            // ytCommunity.forEach(i => posts.push(i))
        } catch (error) {
            console.log(error)
        }

    }

    const uniqueList = Array.from(new Set(artistsName.pinned_artists));
    await Promise.all(uniqueList.map(async (name : any) => {
		await processItem(name as string)
	}))

    const sortedList = posts.sort((a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0));

    return json({ follow: artists.length, artists: artists, posts: sortedList })
}

