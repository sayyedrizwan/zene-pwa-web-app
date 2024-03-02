import type { MusicDataList } from "../../domain/local/entities/MusicData"
import type { MusicPlayerData } from "../../domain/local/entities/MusicPlayerData"

let suggestRelatedSongSyncId: string = ""
let suggestRelatedSongSyncData: MusicDataList | null = null


export function setSuggestRelatedSongId(id: string, data: MusicDataList | null) {
  suggestRelatedSongSyncId = id
  suggestRelatedSongSyncData = data
}

export function getSuggestRelatedSongId(id: string, oldList: MusicDataList): MusicDataList | null {
  if ((suggestRelatedSongSyncId == id) && ((oldList.results?.length ?? 0) == 0)) {
    if (suggestRelatedSongSyncData != null) return suggestRelatedSongSyncData
  }
  return null
}