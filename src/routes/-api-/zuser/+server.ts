import { json } from '@sveltejs/kit'
import { mysqlpool, verifyHeader } from '../utils/Utils.js';

export async function GET({ url, request }) {
	if(!verifyHeader(request)) return json({ })

	const email = url.searchParams.get('user') ?? ""
	if (!email.includes("@") && email.length < 3) return json({})

	try {
		const [results] = await mysqlpool.query('SELECT * FROM `users` WHERE email = ?', [email])

		let info: any = {}

		if (results.length > 0) {
			info = results[0]
			info.latest_songs = JSON.parse(results[0].latest_songs)
			info.pinned_artists = JSON.parse(results[0].pinned_artists)
		}

		return json(info)
	} catch (err) {
		return json({})
	}
}

export async function POST({ request }) {
	if(!verifyHeader(request)) return json({ "status": "error" })

	const body = await request.json()
	const email = body.email as string

	if (!email.includes("@") && email.length < 3) return json({ "status": "error" })

	try {
		const [results] = await mysqlpool.query('SELECT * FROM `users` WHERE email = ?', [email])

		if (results.length > 0) {
			await mysqlpool.query('UPDATE `users` SET name = ?, total_playtime = ?, latest_songs = ?, profile_photo = ?, ' +
				'last_seen = ?, fcm_token = ?, ip = ?, device_info = ?, country = ?, is_review_done = ?, ' +
				'pinned_artists = ? WHERE email = ?', [body.name, body.playtime, JSON.stringify(body.songs), body.photo,
				Date.now(), body.fcm, body.ip, body.device, body.country, body.review, JSON.stringify(body.artists), email])
		} else {
			await mysqlpool.query("INSERT INTO `users` (`email`, `name`, `total_playtime`, `latest_songs`," +
				"`profile_photo`, `sign_up_date`, `last_seen`, `fcm_token`, `ip`, `device_info`, `country`, `is_review_done`," +
				"`pinned_artists`, `subscription_status`, `subscription_expiry_date`) " +
				"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [email, body.name, 0, "[]",
				body.photo, Date.now(), Date.now(), body.fcm, body.ip, body.device, body.country, false, '[]', 'FREEMIUM', Date.now()])
		}
		return json({ "status": "success" })
	} catch (err) {
		return json({ "status": "error" })
	}
}