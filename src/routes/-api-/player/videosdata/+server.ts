import { json } from '@sveltejs/kit'
import { heartbeatAPI, verifyHeader } from '../../utils/Utils.js'
import { YoutubeAPIService } from '../../ApiService/youtube/YoutubeAPIService.js'
import { filterArtistsName } from '../../utils/extension/String.js'
import { VideoMusicdetailsData } from '../../ApiService/model/VideoMusicdetailsData.js'

export async function GET({ url, request }) {
    heartbeatAPI("player-video-data");
    if (!verifyHeader(request)) return json([])
    const n = url.searchParams.get('n') ?? ""
    const a = url.searchParams.get('a') ?? ""

    const video = await YoutubeAPIService.instance.searchVideoIDFirst(`${filterArtistsName(a)} - ${n} Official Video`)
    const lyrics = await YoutubeAPIService.instance.searchVideoIDFirst(`${filterArtistsName(a)} - ${n} Official Lyrics Video`)
            

    return json(new VideoMusicdetailsData(lyrics, video))
}