import { json } from '@sveltejs/kit'
import { mysqlpool, verifyHeader } from '../utils/Utils.js';
import { SpotifyAPIService } from '../ApiService/spotify/SpotifyAPIService.js';
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js';

export async function GET({ url, request }) {
	if (!verifyHeader(request)) return json({})

	const country = url.searchParams.get('c') ?? ""
	if (country == "") return json([])


	const playlist = YoutubeMusicService.instance.similarPlaylist("RDCLAK5uy_ksEjgm3H_7zOJ_RHzRjN1wY-_FFcs7aAU")



	return json(playlist)
}