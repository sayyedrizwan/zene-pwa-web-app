import type { MusicData } from '../../domain/local/entities/MusicData'

export function openSongDialog(musicInfo: MusicData | null) {
  const customEvent = new CustomEvent('songdialog', {
    detail: { value: musicInfo },
  })
  document.dispatchEvent(customEvent)
}

export function playSongZene(song: MusicData | null) {
  if (song == null) return
  const customEvent = new CustomEvent('playsongid', {
    detail: { value: song },
  })
  document.dispatchEvent(customEvent)
}