import { heartbeatAPI, verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { json } from '@sveltejs/kit'

export async function GET({ request, url }) {
    heartbeatAPI("zuser-remove-my-playlists");
	if (!verifyHeader(request)) return json({ status: "error" })

	const email = url.searchParams.get('email') ?? ""
	const id = url.searchParams.get('id') ?? ""
	if (!email.includes("@") && email.length < 3) return json([])

	await MongoDBLocalService.instance.deletePlaylistHistory(email, id)

	return json({ status: "success" })
}
