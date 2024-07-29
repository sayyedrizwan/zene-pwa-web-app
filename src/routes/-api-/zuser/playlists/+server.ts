import { verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { json } from '@sveltejs/kit'
import { ImgBBService } from '../../ApiService/imgbb/ImgBBService.js'

export async function GET({ request, url }) {
	if (!verifyHeader(request)) return json([])

	const email = url.searchParams.get('email') ?? ""
	if (!email.includes("@") && email.length < 3) return json([])

	const page = url.searchParams.get('page') ?? 0

	const list = await MongoDBLocalService.instance.readPlaylists(email, page as number)

	return json(list)
}

export async function POST({ request }) {
	if (!verifyHeader(request)) return json({ status: "error" })
	
	const data = await request.formData()
	const image = data.get("image")
	const name = data.get("name") as String
	const email = data.get("email") as String
	const id = data.get("id")

	let photoURL = image == null ? "https://i.ibb.co/1Xf9DkT/monthly-playlist.jpg" : await ImgBBService.instance.uploadImgBB(image)
	if(photoURL == "") photoURL = "https://i.ibb.co/1Xf9DkT/monthly-playlist.jpg"

	if (!email.includes("@") && email.length < 3) return json({ status: "error" })

	
	await MongoDBLocalService.instance.insertPlaylistHistory(name, photoURL, email, id == null ? null : id as String)

	return json({ status: "success" })
}