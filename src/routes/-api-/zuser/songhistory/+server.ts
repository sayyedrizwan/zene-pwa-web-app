import { verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { json } from '@sveltejs/kit'

export async function GET({ request, url }) {
	if (!verifyHeader(request)) return json([])

	const email = url.searchParams.get('email') ?? ""
	if (!email.includes("@") && email.length < 3) return json({})

	const page = url.searchParams.get('page') ?? 0

	const list = await MongoDBLocalService.instance.readSongHistory(email, page as number)

	return json(list)
}

export async function POST({ request }) {
	if (!verifyHeader(request)) return json({ status: false })

	const body = await request.json()
	const email = body.email as string
	const songID = body.songID as string
	const device = body.device as string

	if (!email.includes("@") && email.length < 3) return json({ status: false })

	const data = await MongoDBLocalService.instance.isSongAlreadyPresentDelete(songID, email)
	const songInfo = await YoutubeMusicService.instance.songInfo(songID)

	if (songInfo != undefined) {
		if (data == null) await MongoDBLocalService.instance.updateOrInsertSongHistory(songInfo, email, device, 1)
		else MongoDBLocalService.instance.updateOrInsertSongHistory(songInfo, email, device, (data.timesItsPlayed as number) + 1)
	}

	return json({ status: true })
}