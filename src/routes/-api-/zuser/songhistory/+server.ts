import { json } from '@sveltejs/kit'
import { mysqlpool, verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'

export async function POST({ request }) {
	if (!verifyHeader(request)) return new Response("error")

	const body = await request.json()
	const email = body.email as string
	const songID = body.songID as string
	const device = body.device as string
	const deviceType = body.deviceType as string

	if (!email.includes("@") && email.length < 3) return new Response("error")

	const data = await MongoDBLocalService.instance.isSongAlreadyPresentDelete(songID, email)
	const songInfo = await YoutubeMusicService.instance.songInfo(songID)

	if(songInfo != undefined) {
		if (data == null) await MongoDBLocalService.instance.updateOrInsertMusicHistory(songInfo, email, device, deviceType, 1)
		else MongoDBLocalService.instance.updateOrInsertMusicHistory(songInfo, email, device, deviceType, (data.timesItsPlayed as number) + 1)
	}

	return new Response("done")
}