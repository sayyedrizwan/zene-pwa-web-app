import type { LastFmTopSongsResponse } from "../../entities/LastFmTopSongsResponse";
import { topPlayingSongs } from "../LastFmApiService";
import type { LastFmImplInterface } from "./LastFmImpInterface";

export class LastFmImpl implements LastFmImplInterface {
    getTopPlayingSongs(authKey:string): Promise<LastFmTopSongsResponse | null> {
        return topPlayingSongs(authKey)
    }

}