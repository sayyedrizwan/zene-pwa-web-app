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
	if (!verifyHeader(request)) return json({ status: "error" })

	const body = await request.json()
	const email = body.email as string
	const name = body.name as string
	const img = body.img as string

	if (!email.includes("@") && email.length < 3) return json({ status: "error" })

	await MongoDBLocalService.instance.insertPlaylistHistory(name, img, email)

	return json({ status: "success" })
}