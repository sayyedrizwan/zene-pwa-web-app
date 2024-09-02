import { heartbeatAPI, verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { json } from '@sveltejs/kit'
import { ImgUploadService } from '../../ApiService/imgbb/ImgUploadService.js';
import { substringAfter } from '../../utils/extension/String.js';

export async function GET({ request, url }) {
    heartbeatAPI("zuser-remove-my-playlists");
	if (!verifyHeader(request)) return json({ status: "error" })

	const email = url.searchParams.get('email') ?? ""
	const id = url.searchParams.get('id') ?? ""
	if (!email.includes("@") && email.length < 3) return json([])

	const playlist = await MongoDBLocalService.instance.getUserPlaylistDetails(id, email)

	if(playlist?.img.includes("bunnycdn.com")) {
		const link = substringAfter(playlist.img, "?img=")
		await ImgUploadService.instance.deleteImageBunnyNet(link)
	}
	await MongoDBLocalService.instance.deletePlaylistHistory(email, id)

	return json({ status: "success" })
}
