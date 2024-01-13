import type { LastFmTopSongsResponse } from "../../entities/LastFmTopSongsResponse";


export interface LastFmImplInterface {
    getTopPlayingSongs: (authKey:string) => Promise<LastFmTopSongsResponse | null>;
}