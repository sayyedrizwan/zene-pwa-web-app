import type { MusicData } from '../-api-/ApiService/model/MusicData.js';

export async function load({ url, fetch }) {
  let search = url.searchParams.get('s');

  const response = await fetch(`https://localhost:3419/-api-/search?s=${search}`)
  const data = (await response.json()) as any;

  const videosList = data.videos as MusicData[]
  const songList = data.songs as MusicData[]

  return { videos: videosList, songs: songList, search: search }
}
