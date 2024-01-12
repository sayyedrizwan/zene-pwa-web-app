import type { LastFmTopSongsResponse } from "../../entities/LastFmTopSongsResponse";

export interface LastFmImplInterface {
    getTopPlayingSongs: () => Promise<LastFmTopSongsResponse | null>;
}