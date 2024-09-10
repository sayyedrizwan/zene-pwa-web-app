import { decTheData } from "$lib/utils/EncDec.js";
import type { MusicData } from "./-api-/ApiService/model/MusicData.js";
import { auth } from "./-api-/utils/Utils.js";

export async function load({ cookies, fetch }) {
  const email = await decTheData(cookies.get("u_id") ?? "", cookies.get("i_s") ?? "");
  if (email == null) return { video: [], songYouMayLike: [], song_for_you: [] };

  let topVideoLists: MusicData[] = [];
  let songsYouMayLikeLists: MusicData[] = [];
  let songsForYouList: MusicData[] = [];

  await Promise.all(
    [0, 1, 2].map(async (i) => {
      const apiLink = i == 0 ? "/-api-/top/videos" : i == 1 ? "/-api-/top/songs" : "/-api-/suggestedsongs";

      const response = await fetch(apiLink, {
        method: 'POST',
        headers: { 'Accept': 'application/json', auth: auth, 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });
      const data = (await response.json()) as MusicData[];

      if (i == 0) {
        topVideoLists = data;
      } else if (i == 1) {
        songsYouMayLikeLists = data;
      } else if (i == 2) {
        songsForYouList = data;
      }
    })
  );
  return { video: topVideoLists, songsYouMayLike: songsYouMayLikeLists, songsForYou: songsForYouList };
}
