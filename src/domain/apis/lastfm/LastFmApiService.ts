import { lastfm_top_playing_songs } from "$lib/utils/UtilsPaths";
import type { LastFmTopSongsResponse } from "../entities/LastFmTopSongsResponse";

export async function topPlayingSongs(): Promise<LastFmTopSongsResponse | null> {
    try {
        const response = await fetch(lastfm_top_playing_songs);
        const data = await response.json();
        return data;   
    } catch (error) {
        return null
    }
}