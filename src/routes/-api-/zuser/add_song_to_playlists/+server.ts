import { heartbeatAPI, verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { json } from '@sveltejs/kit'

export async function GET({ request, url }) {
    heartbeatAPI("zuser-add-song-to-playlists");
	if (!verifyHeader(request)) return json({ status: "error" })

	const playlistID = url.searchParams.get('playlistId') ?? ""
	const songID = url.searchParams.get('songId') ?? ""
	const doAdd = url.searchParams.get('doAdd') ?? false

	await MongoDBLocalService.instance.updatePlaylistSongs(playlistID, songID, String(doAdd))

	return json({ status: "success" })
}