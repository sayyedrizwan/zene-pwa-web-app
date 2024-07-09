import { json } from '@sveltejs/kit'
import { mysqlpool } from '../utils/Utils.js';

export async function GET({ url }) {
	const email = url.searchParams.get('user') ?? ""
	
	if(email == "") return json({})

	try {
		const [results] = await mysqlpool.query('SELECT * FROM `users` WHERE email = ?', [email])
		return json(results.length > 0 ? results[0] : {})
	} catch (err) {
		return json({})
	}
}

export async function POST({ request }) {
	const body = await request.json()

	try {
		const [results] = await mysqlpool.query('SELECT * FROM `users` WHERE email = ?', [body.email])

		if (results.length > 0) {
			await mysqlpool.query('UPDATE `users` SET name = ?, total_playtime = ?, latest_songs = ?, profile_photo = ?, ' +
				'last_seen = ?, fcm_token = ?, ip = ?, device_info = ?, country = ?, is_review_done = ?, ' +
				'pinned_artists = ? WHERE email = ?', [body.name, body.playtime, JSON.stringify(body.songs), body.photo,
				Date.now(), body.fcm, body.ip, body.device, body.country, body.review, JSON.stringify(body.artists), body.email])
		} else {
			await mysqlpool.query("INSERT INTO `users` (`email`, `name`, `total_playtime`, `latest_songs`," +
				"`profile_photo`, `sign_up_date`, `last_seen`, `fcm_token`, `ip`, `device_info`, `country`, `is_review_done`," +
				"`pinned_artists`, `subscription_status`, `subscription_expiry_date`) " +
				"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [body.email, body.name, 0, "[]",
				body.photo, Date.now(), Date.now(), body.fcm, body.ip, body.device, body.country, false, '[]', 'FREEMIUM', Date.now()])
		}
		return json({ "status": "success" })
	} catch (err) {
		return json({ "status": err })
	}
}