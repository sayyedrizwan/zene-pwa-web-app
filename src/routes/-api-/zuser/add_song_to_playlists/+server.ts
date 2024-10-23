import { heartbeatAPI, verifyHeader } from '../../utils/Utils.js'
import { MongoDBLocalService } from '../../ApiService/dbmongo/MongoDBLocalService.js'
import { json } from '@sveltejs/kit'

export async function GET({ request, url }) {
    heartbeatAPI("zuser-add-song-to-playlists");
	if (!verifyHeader(request)) return json({ status: "error" })

	const playlistID = url.searchParams.get('playlistId') ?? ""
	const songID = url.searchParams.get('songId') ?? ""
	const email = url.searchParams.get('email') ?? ""
	const doAdd = url.searchParams.get('doAdd') ?? false

	const pID = playlistID == MongoDBLocalService.instance.likedSongsOnZenePlaylists ? `${email}_${MongoDBLocalService.instance.likedSongsOnZenePlaylists}` : playlistID
	console.log(pID)
	await MongoDBLocalService.instance.updatePlaylistSongs(pID, songID, String(doAdd))

	return json({ status: "success" })
}