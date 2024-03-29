import type { LyricsResponseData } from '../../domain/local/entities/LyricsResponseData'
import type { MusicDataList } from '../../domain/local/entities/MusicData'
import type { MusicPlayerVideos } from '../../domain/local/entities/MusicPlayerVideos'
import { env } from '$env/dynamic/public'
import type { APManager } from './p/s'

let suggestRelatedSongSyncId: string = ''
let suggestRelatedSongSyncData: MusicDataList | null = null
let musicVideoIdData: MusicPlayerVideos | null = null
let musicLyrics: [string, LyricsResponseData] | null = null

export function setSuggestRelatedSongId(id: string, data: MusicDataList | null) {
  suggestRelatedSongSyncId = id
  suggestRelatedSongSyncData = data
}

export function getSuggestRelatedSongId(id: string, oldList: MusicDataList): MusicDataList | null {
  if (suggestRelatedSongSyncId == id && (oldList.results?.length ?? 0) > 0) {
    if (suggestRelatedSongSyncData != null) return suggestRelatedSongSyncData
  }
  return null
}

export function setMusicVideoIdData(id: MusicPlayerVideos) {
  musicVideoIdData = id
}

export function getMusicVideoIdData(id: string): MusicPlayerVideos | null {
  if (musicVideoIdData == null) return null
  if (id != musicVideoIdData.songid) return null
  if ((musicVideoIdData?.songid ?? '') == '') return null

  return musicVideoIdData
}

export function getMusicLyrics(id: string): LyricsResponseData | null {
  if (musicLyrics == null) return null
  if (id != musicLyrics[0]) return null
  if (musicLyrics[1].lyrics == '') return null
  return musicLyrics[1]
}

export function setMusicLyrics(id: string, lyrics: LyricsResponseData) {
  musicLyrics = [id, lyrics]
}

export function g(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const charactersLength = characters.length
  let result = ''

  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export function en_ars4sfrb(text: string, salt: string) {
  const textToChars = (text: any) => text.split('').map((c: any) => c.charCodeAt(0))
  const byteHex = (n: any) => ('0' + Number(n).toString(16)).substr(-2)
  const applySaltToChar = (code: any) => textToChars(salt).reduce((a: any, b: any) => a ^ b, code)

  return text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('')
}

export function pppllaaayyyPatthh(songId: string, ap: string, k: string): string {
  try {
    const params = new URLSearchParams({
      id: songId,
      k: k,
      pp: ap.replace('=', ''),
    })

    const queryString = params.toString()
    return `${env.PUBLIC_DOWNLOAD_URL}${queryString ? `?${queryString}` : ''}`.trim()
  } catch (error) {
    return ''
  }
}

let ap : APManager | null = null

export function setGAP(a: APManager) {
  ap = a
}

export function pSongEData() {
  return ap?.ctId()
}
