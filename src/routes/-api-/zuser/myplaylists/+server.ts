import { toDate, verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { json } from '@sveltejs/kit'
import { MusicData, MUSICTYPE } from '../../ApiService/model/MusicData.js'
import { YoutubeAPIService } from '../../ApiService/youtube/YoutubeAPIService.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'

export async function GET({ request, url }) {
	if (!verifyHeader(request)) return json([])

	const pID = url.searchParams.get('playlistID') ?? ""
	const page = url.searchParams.get('page') ?? 0

	const list = await MongoDBLocalService.instance.playlistSong(pID, page as number)

	const songs: MusicData[] = []

	await Promise.all(list.map(async n => {
		try {
			const yt = await YoutubeMusicService.instance.songInfo(n.songId.toString())
			if (yt != undefined) songs.push(yt)
		} catch (error) {
			console.log(error)
		}
	}))

	return json(songs)
}

export async function POST({ request }) {
	if (!verifyHeader(request)) return json({})

	const body = await request.json()
	const pID = body.playlistId as string

	const data = await MongoDBLocalService.instance.getUserPlaylistDetails(pID)
	if (data?.name == undefined) return json({})


	return json(new MusicData(data?.name, data?.name, data?.id, data?.img, MUSICTYPE.PLAYLIST, toDate(data.timestamp).toString()))
}