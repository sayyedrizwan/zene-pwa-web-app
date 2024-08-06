import { json } from '@sveltejs/kit'
import { verifyHeader } from '../../utils/Utils.js'
import { SpotifyAPIService } from '../../ApiService/spotify/SpotifyAPIService.js'

export async function GET({ request, url }) {
    if (!verifyHeader(request)) return json({})

    const token = url.searchParams.get('token') ?? ""
    const playlistsURL = url.searchParams.get('url') ?? null
    if (token.length <= 10) return json([])
        
    const songs = await SpotifyAPIService.instance.spotifyPlaylists(token, playlistsURL)

    return json(songs)
}

