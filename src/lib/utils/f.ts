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
    detail: { value: song }
  })
  document.dispatchEvent(customEvent)

  showMusicPlayer(true)
}


export function showMusicPlayer(v: Boolean) {
  const customEvent = new CustomEvent('songplayer', {
    detail: { value: v },
  })
  document.dispatchEvent(customEvent)
}

export async function shareATxt(title: string, url: string) {
  const sharedDataSample = {
    title: title,
    text: title,
    url: url,
  }
  try {
    await navigator.share(sharedDataSample)
  } catch (e) {
    await navigator.clipboard.writeText(url)
    alert('Share link copied successfully..')
  }
}


export function artistsSplitToHTMLString(artists:string) : string {
  const lists = artists.split(/\,|\&|\s+and\s+/).filter((a) => a.trim() != "")
  var html = ""

  lists.forEach((n, i) => {
    html += ` 
      <p class="text-white urbanist-thin text-sm md:text-base mt-1">${(lists.length - 1) == i ? `&nbsp;&&nbsp;` : `` }</p>
      <a href=${n} class="text-white urbanist-thin text-sm md:text-base mt-1">${n}</a>
      <p class="text-white urbanist-thin text-sm md:text-base mt-1">${(lists.length - 2) > i ? `,&nbsp;&nbsp;` : `` }</p>
    `
  })
  return html
}