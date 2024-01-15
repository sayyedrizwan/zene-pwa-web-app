import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI";
import { json, type RequestEvent , type Handle} from "@sveltejs/kit";
import { apiError, authKeyError, formatNumberString, last_sync_ts_cookie, lastfm_top_playing_songs } from "../utils/utils";
import { YtMusicAPIImpl } from "../api_impl/yt_music/YtMusicImpl";
import type { LastFmTopSongsResponse } from "../../../domain/apis/entities/LastFmTopSongsResponse";
import { TopSongsMusic, TopSongsMusicResults } from "../../../domain/local/entities/TopSongsMusic";

export async function POST(events: RequestEvent) {
  // if (!decryptAPIKeyAndIsValid(events)) {
  //   return json(authKeyError)
  // }

  try {
    const list: TopSongsMusic[] = []
    const ytMusicAPI = new YtMusicAPIImpl()
    const response = await fetch(lastfm_top_playing_songs);
    const data = await response.json() as LastFmTopSongsResponse;

    for await (const e of data.results.track) {
      const musicName = `${e.name} - ${e.artist}`
      const music = await ytMusicAPI.musicSearch(musicName)

      if (music.name != null && music.songId != null) {
        list.push(new TopSongsMusic(e.image.replace("174s/", ""), formatNumberString(e.listeners), music))
      }
    }

    return json(new TopSongsMusicResults(list));
  } catch (error) {
    return json(apiError);
  }
}
