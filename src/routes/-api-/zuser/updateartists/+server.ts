import { json } from '@sveltejs/kit'
import { mysqlpool, verifyHeader } from '../../utils/Utils.js'

export async function POST({ request }) {
	if (!verifyHeader(request)) return json({ "status": "error" })

	const body = await request.json()
	const email = body.email as string


	if (!email.includes("@") && email.length < 3) return json({ "status": "error" })

	try {
		await mysqlpool.query('UPDATE `users` SET pinned_artists = ? WHERE email = ?', [JSON.stringify(body.artists), body.email])

		return json({ "status": "success" })
	} catch (err) {
		return json({ "status": "error" })
	}
}