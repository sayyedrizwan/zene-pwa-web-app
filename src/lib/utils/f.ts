import { MusicType, type MusicData } from '../../domain/local/entities/MusicData'
import { MusicPlayerData } from '../../domain/local/entities/MusicPlayerData'
import { NotificationAlertsData } from '../../domain/local/entities/NotificationAlertsData'
import { DataIndexDS, indexDB, musicPlayerInfoCache } from './indexd'
import { setSuggestRelatedSongId } from './pid'

export function openSongDialog(musicInfo: MusicData | null) {
  setSuggestRelatedSongId('', null)
  const customEvent = new CustomEvent('songdialog', {
    detail: { value: musicInfo },
  })
  document.dispatchEvent(customEvent)
}

export function playSongZene(song: MusicData | null, list: MusicData[] | null | undefined) {
  if (song == null) return
  const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
  cacheDB.deleteAllRecords()
  let m = new MusicPlayerData(list ?? [song], song, 0, 0, MusicType.MUSIC)
  cacheDB.saveToIndexedDB(m)

  const customEvent = new CustomEvent('playsongid', {
    detail: { value: song },
  })
  document.dispatchEvent(customEvent)

  showMusicPlayer(true)
}

export function notificationAlertListener(title: string, desc: string, img: string | null) {
  const customEvent = new CustomEvent('notificationalert', {
    detail: { value: new NotificationAlertsData(title, desc, img ?? '/logo512.png') },
  })
  document.dispatchEvent(customEvent)
}

export function showMusicPlayer(v: Boolean) {
  const customEvent = new CustomEvent('songplayer', {
    detail: { value: v },
  })
  document.dispatchEvent(customEvent)
}

export async function shareATxt(title: string, url: string, img: string | null = null) {
  const sharedDataSample = {
    title: title,
    text: title,
    url: url,
  }
  try {
    await navigator.share(sharedDataSample)
  } catch (e) {
    await navigator.clipboard.writeText(url)
    notificationAlertListener('Linked copied.', 'Sharing link copied successfully..', img)
  }
}

export function artistsSplitToHTMLString(artists: string): string {
  const lists = artists.split(/\,|\&|\s+and\s+/).filter((a) => a.trim() != '')
  var html = ''

  lists.forEach((n, i) => {
    html += ` 
      <p class="text-white urbanist-thin text-sm md:text-base mt-1">${lists.length - 1 == i && lists.length > 1 ? `&nbsp;&&nbsp;` : ``}</p>
      <a href=${n} class="text-white urbanist-thin text-sm md:text-base mt-1">${n}</a>
      <p class="text-white urbanist-thin text-sm md:text-base mt-1">${lists.length - 2 > i ? `,&nbsp;&nbsp;` : ``}</p>
    `
  })
  return html
}

export function durationToTime(d: number) {
  const hours = Math.floor(d / 3600)
  const minutes = Math.floor((d % 3600) / 60)
  const seconds = Math.floor(d % 60)

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${hoursString == '00' ? `` : `${hoursString}:`}${minutesString}:${secondsString}`
}
