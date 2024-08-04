import { json } from '@sveltejs/kit'
import { mysqlpool, verifyHeader } from '../../utils/Utils.js'
import { MySqlLocalService } from '../../ApiService/dbmysql/MySqlLocalService.js'

export async function GET({ url, request }) {
	if (!verifyHeader(request)) return json({})

	const email = url.searchParams.get('user') ?? ""
	if (!email.includes("@") && email.length < 3) return json({})

	try {
		const userInfo = MySqlLocalService.instance.searchUser(email)
		return json(userInfo)
	} catch (err) {
		return json({})
	}
}

export async function POST({ request }) {
	if (!verifyHeader(request)) return json({ "status": "error" })

	const body = await request.json()
	const email = body.email as string

	if (!email.includes("@") && email.length < 3) return json({ "status": "error" })

	try {
		const [results] = await mysqlpool.query('SELECT * FROM `users` WHERE email = ?', [email])

		if (results.length > 0)
			await mysqlpool.query('UPDATE `users` SET name = ?, total_playtime = ?, profile_photo = ?, ' +
				'last_seen = ?, fcm_token = ?, ip = ?, device_info = ?, country = ?, is_review_done = ?, ' +
				'WHERE email = ?', [body.name, body.playtime, body.photo, Date.now(), body.fcm, body.ip, body.device, body.country, body.review, email])
		else
			await mysqlpool.query("INSERT INTO `users` (`email`, `name`, `total_playtime`," +
				"`profile_photo`, `sign_up_date`, `last_seen`, `fcm_token`, `ip`, `device_info`, `country`, `is_review_done`," +
				"`pinned_artists`, `subscription_status`, `subscription_expiry_date`) " +
				"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [email, body.name, 0,
				body.photo, Date.now(), Date.now(), body.fcm, body.ip, body.device, body.country, false, '[]', 'FREEMIUM', Date.now()])

		return json({ "status": "success" })
	} catch (err) {
		return json({ "status": "error" })
	}
}