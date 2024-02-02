import { MusicType, type MusicData } from '../../domain/local/entities/MusicData'
import { MusicPlayerData } from '../../domain/local/entities/MusicPlayerData'
import { DataIndexDS, indexDB, musicPlayerInfoCache } from './indexd'

export function openSongDialog(musicInfo: MusicData | null) {
  const customEvent = new CustomEvent('songdialog', {
    detail: { value: musicInfo },
  })
  document.dispatchEvent(customEvent)
}

export function playSongZene(song: MusicData | null) {
  if (song == null) return
  const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
  cacheDB.deleteAllRecords()
  let m = new MusicPlayerData([], song, 0, 0, MusicType.MUSIC)
  cacheDB.saveToIndexedDB(m)


  const customEvent = new CustomEvent('playsongid', {
    detail: { value: song },
  })
  document.dispatchEvent(customEvent)
}

export async function shareATxt(v: string) {
  const sharedDataSample = {
    title: "Some text title",
    text: "More text",
    url: "https://zenemusic.co/a/2E5WGeTq3tSkraBl0ogH2Q",
  };
  try {
    await navigator.share(sharedDataSample)
  } catch (e) {
    console.error(`Error: ${e}`)
  }
}