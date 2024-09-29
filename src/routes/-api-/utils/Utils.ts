import mysql from "mysql2/promise";
import { MongoClient } from "mongodb";
import CryptoJS from "crypto-js";
import type { MusicData } from "../ApiService/model/MusicData";

export const isDevDB = false
// process.platform.toLowerCase() == "darwin";
export const auth = "qtASBDg887XCIJBVB112Pl.AYuhn2e";
export const webEncKey = "rizwan_key_web_app";
export const zenePlaylistsParam = "zene_p_";

export const zeneFMThumbnail = "https://zenemusic.co/zene_fm_thumbnail.png";

//aiven
//filess.io
export const mysqlpool: any = mysql.createPool({
  host: isDevDB ? "mysql-2bab654c-sayyedrizwanahme-db86.h.aivencloud.com" : "j3v.h.filess.io",
  user: isDevDB ? "avnadmin" : "zenemusic_tapechest",
  database: isDevDB ? "users" : "zenemusic_tapechest",
  password: isDevDB ? "AVNS_52AdOsyCcYA1DBd0DJL" : "a33f2d3fbf728e74cc42d3c82e64cacebf358422",
  port: isDevDB ? 18874 : 3307,
  waitForConnections: true,
  connectionLimit: 3,
  maxIdle: 3,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export const mongoDBClient = new MongoClient(isDevDB ? `mongodb+srv://sayyedrizwanahmed:zenemusicpass@zene.4zu1ie4.mongodb.net/` : `mongodb://zenemusicnosql_zooofficer:a47a65a008a70ec7ee6c16135f1420dcaf6f71cf@4z2.h.filess.io:27018/zenemusicnosql_zooofficer`);
async function startMongoDB() {
  try {
    await mongoDBClient.connect();
  } catch (error) {
    console.log(error)
  }
}

startMongoDB()

export const shuffle = (array: MusicData[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const shuffleString = (array: String[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function isYear(str: string): boolean {
  const yearRegex = /^\d{4}$/;
  if (!yearRegex.test(str)) return false;

  const year = parseInt(str, 10);
  const currentYear = new Date().getFullYear();
  return year >= 0 && year <= currentYear;
}

export function verifyHeader(request: Request) {
  return true;
  const key = request.headers.get("auth") ?? "";
  if (key == auth) return true;
  try {
    const dataToNormal = decryptWebInfo(key);
    const parts = dataToNormal.split("___");
    const numberPart = parts[1] + parts[3];
    //console.log(numberPart)
    if (timeDifferenceInHours(parseInt(numberPart)) < 13) return true;
    return false;
  } catch (error) {
    //console.log(error)
    return false;
  }
}

export function decryptWebInfo(v: string) {
  const getData = CryptoJS.AES.decrypt(v, webEncKey);
  const dataToNormal = getData.toString(CryptoJS.enc.Utf8);
  return dataToNormal;
}

export const BUNNY_IMG_HEADER = { AccessKey: "57a911cd-3810-42ea-bfa1b983b711-3256-4576", "Content-Type": "application/octet-stream" };

export function bingNewsMostRecent(q: String): string {
  return `https://www.bing.com/news/search?q=${q.toLowerCase().replaceAll(" ", "+")}&qft=sortbydate%3d%221%22+interval%3d%227%22&form=YFNR`;
}

export function bingNewsBest(q: String): string {
  return `https://www.bing.com/news/search?q=${q.toLowerCase().replaceAll(" ", "+")}&qft=interval%3d%227%22&form=YFNR`;
}

export const GLOBAL_TRENDING_ARTISTS = "GLOBAL_TRENDING_ARTISTS";
export const MOST_LISTEN_SONGS = "MOST_LISTEN_SONGS";
export const NEW_RELEASE_SONGS = "NEW_RELEASE_SONGS";

export const IMG_BB_BASE_URL = "https://api.imgbb.com/1/upload?key=a970144e82f636d36a37244bb2cd6692";

export const pinterestSearchBaseURL = "https://pinterest.com/resource/BaseSearchResource/get/";

export const pinterestHeader = {
  accept: "application/json, text/javascript, */*, q=0.01",
  "accept-language": "en-US,en;q=0.9",
  "content-type": "application/x-www-form-urlencoded",
  origin: "https://in.pinterest.com",
  referer: "https://in.pinterest.com/",
};

export const spotifyAPIPlaylists = "https://api.spotify.com/v1/me/playlists";
export const spotifyAPIMyTracks = "https://api.spotify.com/v1/me/tracks";

export const soundCloudBaseURL = "https://soundcloud.com/";
export const searchSearchUserURL = "https://api-v2.soundcloud.com/search/users";
export const searchUserURL = "https://api-v2.soundcloud.com/users";

export const instagramWebProfile = "https://www.instagram.com/api/v1/users/web_profile_info/";
export const instagramGraphQuery = "https://www.instagram.com/graphql/query/";

export const lastFMListeningSongs = "https://kerve.last.fm/kerve/charts";
export const lastFMLSearchArtists = "https://www.last.fm/search/artists";
export const lastFMURL = "https://www.last.fm";
export const billboardTopArtists = "https://www.billboard.com/charts/artist-100/";

export const tokenSpotify = "https://accounts.spotify.com/api/token";
export const searchSpotify = "https://api.spotify.com/v1/search";

export const rentAnAdviser = "https://www.rentanadviser.com/subtitles/";

export const ytSearch = "https://www.youtube.com/youtubei/v1/search?prettyPrint=false";
export const ytBrowse = "https://www.youtube.com/youtubei/v1/browse?prettyPrint=false";

const clientNameYTName = "WEB";
const clientNameYTVersion = "2.20240911.01.00";

export const YT_COMMUNITY_PARAMS = "Egljb21tdW5pdHnyBgQKAkoA";
export const YT_SHORTS_PARAMS = "EgZzaG9ydHPyBgUKA5oBAA%3D%3D";
export const YT_STORE_PARAMS = "EgVzdG9yZfIGBAoCGgA%3D";
export const YT_SONG_AS_PLAYLISTS_PARAMS = "EgIYAg%3D%3D";

export const ytHeader = {
  "content-type": "application/json",
  cookie: "GPS=1;",
  origin: "https://www.youtube.com",
  "x-origin": "https://www.youtube.com",
};

export function ytBrowseQuery(q: string): string {
  return JSON.stringify({
    context: {
      client: {
        clientName: clientNameYTName,
        clientVersion: clientNameYTVersion,
      },
    },
    query: q,
  });
}

export function ytBrowseQueryParams(id: string, param: String): string {
  return JSON.stringify({
    context: {
      client: {
        clientName: clientNameYTName,
        clientVersion: clientNameYTVersion,
      },
    },
    browseId: id,
    params: param,
  });
}

export function ytQueryParams(id: string, param: String): string {
  return JSON.stringify({
    context: {
      client: {
        clientName: clientNameYTName,
        clientVersion: clientNameYTVersion,
      },
    },
    query: id,
    params: param,
  });
}

export const ytMusicSearchSongParam = "EgWKAQIIAWoQEAMQBBAJEAoQBRAREBAQFQ%3D%3D";
export const ytMusicSearchArtistsParam = "EgWKAQIgAWoQEAMQCRAOEAoQBBAFEBEQEA%3D%3D";
export const ytMusicSearchAlbumsParam = "EgWKAQIYAWoQEAoQAxAEEAkQEBAFEBEQFQ%3D%3D";
export const ytMusicSearchPlaylistParam = "EgeKAQQoAEABahAQChADEAQQCRAQEAUQERAV";
export const ytMusicMoodAndGenresParam = "FEmusic_moods_and_genres";
export const ytMusicMoodAndGenresCategoryParam = "FEmusic_moods_and_genres_category";
export const ytMusicGridListParam = "ggMIegYIARoCAQI%3D";

const clientNameYTMusicName = "WEB_REMIX";
const clientNameYTMusicVersion = "1.20240909.01.00";

export const ytMusicNext = "https://music.youtube.com/youtubei/v1/next?prettyPrint=false";
export const ytMusicPlayer = "https://music.youtube.com/youtubei/v1/player?prettyPrint=false";
export const ytMusicBrowse = "https://music.youtube.com/youtubei/v1/browse?prettyPrint=false";
export const ytMusicSearchSuggestions = "https://music.youtube.com/youtubei/v1/music/get_search_suggestions?prettyPrint=false";
export const ytMusicSearch = "https://music.youtube.com/youtubei/v1/search?prettyPrint=false";
export const ytMusicHeader = {
  "content-type": "application/json",
  cookie: "GPS=1;",
  origin: "https://music.youtube.com",
  "x-origin": "https://music.youtube.com",
};

export function ytMusicvideoID(id: string): string {
  return JSON.stringify({
    videoId: id,
    isAudioOnly: true,
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
  });
}

export function ytMusicPlaylistSongs(id: string): string {
  return JSON.stringify({
    enablePersistentPlaylistPanel: true,
    tunerSettingValue: "AUTOMIX_SETTING_NORMAL",
    playlistId: "RDAMVM" + id,
    isAudioOnly: true,
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
  });
}

export function ytMusicBrowseID(id: string): string {
  return JSON.stringify({
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
    browseId: id,
  });
}

export function ytMusicBrowseIDWithParam(q: string, params: string): string {
  return JSON.stringify({
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
    query: q,
    params: params,
  });
}

export function ytMusicQueryWithParam(q: string): string {
  return JSON.stringify({
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
    query: q,
  });
}

export function ytMusicIDWithParam(q: string, params: string): string {
  return JSON.stringify({
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
    browseId: q,
    params: params,
  });
}

export function ytMusicSongID(vID: string): string {
  return JSON.stringify({
    videoId: vID,
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
  });
}

export function ytMusicInput(q: string): string {
  return JSON.stringify({
    input: q,
    context: {
      client: {
        clientName: clientNameYTMusicName,
        clientVersion: clientNameYTMusicVersion,
      },
    },
  });
}

export function timeDifferenceIs24Hours(oldTimestamp: string): Boolean {
  const currentTimestamp = new Date().getTime();
  const oldDate = new Date(parseInt(oldTimestamp)).getTime();
  const differenceInMs = currentTimestamp - oldDate;
  let hours = Math.floor(differenceInMs / (1000 * 60 * 60));
  if (hours > 12) return true;
  return false;
}

export function timeDifferenceInHours(oldTimestamp: number) {
  const currentTimestamp = new Date().getTime();
  const differenceInMs = Math.floor(currentTimestamp - oldTimestamp);
  const hours = Math.floor((differenceInMs / (1000 * 60 * 60)) % 24);
  return hours;
}

export function timeDifferenceInSeconds(oldTimestamp: number): number {
  const currentTimestamp = new Date().getTime();
  const differenceInMs = Math.floor(currentTimestamp - oldTimestamp);
  const differenceInSeconds = differenceInMs / 1000;
  return differenceInSeconds;
}

export function getRandomItem<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export function toDate(time: number) {
  const date = new Date(time);
  const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
}

export function heartbeatAPI(value: String) {
  // axios.get(`https://cronitor.link/p/861fac53851d4388a9f044db41b3bac8/api-${value}`).then(function (response) {
  //   // handle success
  //   //console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   //console.log(error);
  // })
}

export function delay(ms: number = 700): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
