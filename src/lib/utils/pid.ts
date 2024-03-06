import type { MusicDataList } from '../../domain/local/entities/MusicData'
import type { MusicPlayerVideos } from '../../domain/local/entities/MusicPlayerVideos'

let suggestRelatedSongSyncId: string = ''
let suggestRelatedSongSyncData: MusicDataList | null = null
let musicVideoIdData: MusicPlayerVideos | null = null

export function setSuggestRelatedSongId(id: string, data: MusicDataList | null) {
  suggestRelatedSongSyncId = id
  suggestRelatedSongSyncData = data
}

export function getSuggestRelatedSongId(id: string, oldList: MusicDataList): MusicDataList | null {
  if (suggestRelatedSongSyncId == id && (oldList.results?.length ?? 0) == 0) {
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
