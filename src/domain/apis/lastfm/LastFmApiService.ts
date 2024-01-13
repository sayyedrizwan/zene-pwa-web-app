import { top_lisiting_songs } from "$lib/utils/UtilsPaths"
import type { LastFmTopSongsResponse } from "../entities/LastFmTopSongsResponse"

export async function topPlayingSongs(authKey:string): Promise<LastFmTopSongsResponse | null> {
    try {
        const response = await fetch(top_lisiting_songs, {
            method: 'POST',
            headers: { 'AuthorizationKey': authKey },
        })
        const data = await response.json()
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        return null
    }
}