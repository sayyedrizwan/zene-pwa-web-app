import { json } from '@sveltejs/kit'
import { heartbeatAPI, NEW_RELEASE_SONGS, verifyHeader } from '../utils/Utils.js';
import { YoutubeMusicService } from '../ApiService/youtubemusic/YoutubeMusicService.js'
import type { MusicData } from '../ApiService/model/MusicData.js';
import { MySqlLocalService } from '../ApiService/dbmysql/MySqlLocalService.js';

export async function GET({ url, request }) {
    heartbeatAPI("new-release");
	if (!verifyHeader(request)) return json({})

	const i = url.searchParams.get('i') ?? ""
	if (i == "") return json([])

	const cacheList = await MySqlLocalService.instance.getTempData(`${NEW_RELEASE_SONGS}_${i}`)
	if (cacheList.length > 0) return json(cacheList)

	const list: MusicData[] = []
	const playlist = await YoutubeMusicService.instance.releasePlaylists(i)

	await MySqlLocalService.instance.delteTempData(`${NEW_RELEASE_SONGS}_${i}`)

	await Promise.all(playlist.map(async name => {
		try {
			const song = await YoutubeMusicService.instance.searchSongs(name.toString())
			if (!list.some((item) => item.id === (song[0].id ?? ""))) list.push(song[0])
			
			await MySqlLocalService.instance.insertTempData(song[0], `${NEW_RELEASE_SONGS}_${i}`)
		} catch (error) {
			console.log(error)
		}
	}))

	return json(list)
}