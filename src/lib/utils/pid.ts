import type { LyricsResponseData } from '../../domain/local/entities/LyricsResponseData'
import type { MusicDataList } from '../../domain/local/entities/MusicData'
import type { MusicPlayerVideos } from '../../domain/local/entities/MusicPlayerVideos'
import { gCT } from './Utils'
import { env } from '$env/dynamic/public'

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


export function pSongEData(): string {
  const t = gCT()[0]
  const k = gCT()[1]
  
  const s = `${g()}_${g()}_${g()}_${g()}@@#####${t}>>#####${g()}_${g()}_${g()}_${g()}`
  const d = `${en_ars4sfrb(s, k.toString())}${"qKS-.1Z.oPWEkQ".replace('K', '').replace('.', '').replace('P', '')}`
  return d
}


export function pSongEDatas(): string {
  const t = gCT()[0]
  const k = gCT()[1]
  
  const s = `${g()}_${g()}_${g()}_${g()}@@#####${t}>>#####${g()}_${g()}_${g()}_${g()}`
  const d = `${en_ars4sfrb(s, k.toString())}`
  return d
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

function en_ars4sfrb(text: string, salt: string) {
  const textToChars = (text: any) => text.split("").map((c: any) => c.charCodeAt(0));
  const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code: any) => textToChars(salt).reduce((a: any, b: any) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
}

export function pppllaaayyyPatthh(songId: string, ap: string): string {
  try {
    const params = new URLSearchParams({
      id: songId,
      k: pSongEData(),
      pp: ap
    })

    const queryString = params.toString()
    return `${env.PUBLIC_DOWNLOAD_URL}${queryString ? `?${queryString}` : ""}`.trim()
  } catch (error) {
    return ''
  }
}