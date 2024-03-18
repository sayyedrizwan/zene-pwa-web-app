import type { LyricsResponseData } from '../../domain/local/entities/LyricsResponseData'
import type { MusicDataList } from '../../domain/local/entities/MusicData'
import type { MusicPlayerVideos } from '../../domain/local/entities/MusicPlayerVideos'

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
