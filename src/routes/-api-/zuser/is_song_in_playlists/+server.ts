import { verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { json } from '@sveltejs/kit'
import { MusicData, MUSICTYPE } from '../../ApiService/model/MusicData.js'

export async function GET({ request, url }) {
	if (!verifyHeader(request)) return json([])

	const email = url.searchParams.get('email') ?? ""
	if (!email.includes("@") && email.length < 3) return json([])

	const page = url.searchParams.get('page') ?? 0
	const songID = url.searchParams.get('songId') ?? ""

	const list: MusicData[] = []
	const data = await MongoDBLocalService.instance.readPlaylistsCreatedByUser(email, page as number)

	await Promise.all((data ?? []).map(async n => {
		try {
			const isPresent = await MongoDBLocalService.instance.isSongPresentPlaylists(n.id, songID)
			list.push(new MusicData(n.name, n.name, n.id, n.img, MUSICTYPE.PLAYLIST, isPresent > 0 ? "present" : "no"))
		} catch (error) {
			console.log(error)
		}
	}))


	return json(list)
}