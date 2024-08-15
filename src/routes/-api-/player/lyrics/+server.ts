import { json } from '@sveltejs/kit'
import { heartbeatAPI, verifyHeader } from '../../utils/Utils.js'
import { YoutubeMusicService } from '../../ApiService/youtubemusic/YoutubeMusicService.js'
import { LyricsAPIService } from '../../ApiService/lyrics/LyricsAPIService.js'
import { MusicLyricsData } from '../../ApiService/model/MusicLyricsData.js'

export async function GET({ url, request }) {
    heartbeatAPI("player-lyrics");
    if (!verifyHeader(request)) return json([])
    const s = url.searchParams.get('s') ?? ""
    const n = url.searchParams.get('n') ?? ""
    const a = url.searchParams.get('a') ?? ""

    const syncLyrics = await LyricsAPIService.instance.lyricsData(n, a)
    if (syncLyrics != undefined) return json(syncLyrics)
    const lyrics = await YoutubeMusicService.instance.lyricsOfVideo(s)
    return json(new MusicLyricsData(lyrics, false))
}