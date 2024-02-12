export const topSongTableCache = 'top_song'
export const radioTableCache = 'radio_lists'
export const topArtistsCache = 'top_artists'
export const freshAddedCache = 'fresh_added_artists'
export const songMayLikeCache = 'song_may_like'
export const albumsForYouCache = 'a_f_y'
export const globalTrendingSongsArtists = 'global_trending_songs'
export const trendingSongsInCountryCache = 'trending_songs_in_country'
export const trendingArtistsInCountryCache = 'trending_artists_in_country'
export const musicPlayerInfoCache = 'music_player_info'
export const indexDB = 'index'

export function isAPICached(recordsSize: number, storageName: string): boolean {
  try {
    if (recordsSize == 0) return false
    const differenceInMinutes: number = Math.floor((Date.now() - parseInt(localStorage.getItem(storageName)?.toString()!)) / (1000 * 60))
    if (differenceInMinutes >= 240) return false

    return true
  } catch (error) {
    return false
  }
}

export function isAPICachedForADay(recordsSize: number, storageName: string): boolean {
  try {
    if (recordsSize == 0) return false
    const differenceInMinutes: number = Math.floor((Date.now() - parseInt(localStorage.getItem(storageName)?.toString()!)) / (1000 * 60))
    if (differenceInMinutes >= 200) return false
    
    return true
  } catch (error) {
    return false
  }
}

export class DataIndexDS<T> {
  private dbName: string
  private tableName: string

  constructor(dbName: string, tableName: string) {
    this.dbName = dbName
    this.tableName = tableName
  }

  private openDatabase() {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1)

      request.onupgradeneeded = (event) => {
        const db = (event.target as any).result
        db.createObjectStore(this.tableName, { keyPath: 'id', autoIncrement: true })
      }

      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  async saveToIndexedDB(data: T) {
    try {
      const db = await this.openDatabase()
      const transaction = db.transaction([this.tableName], 'readwrite')
      const objectStore = transaction.objectStore(this.tableName)
      objectStore.add(data)
    } catch (error) {
      return null
    }
  }

  async retrieveFromIndexedDB(): Promise<any> {
    try {
      const db = await this.openDatabase()
      const transaction = db.transaction([this.tableName], 'readonly')
      const objectStore = transaction.objectStore(this.tableName)

      const request = objectStore.getAll()
      let data: any = null
      request.onsuccess = () => {
        data = request.result
      }
      await wait(500)
      return data
    } catch (error) {
      return null
    }
  }

  async deleteAllRecords() {
    try {
      const db = await this.openDatabase()
      const transaction = db.transaction([this.tableName], 'readwrite')
      const objectStore = transaction.objectStore(this.tableName)
      const request = objectStore.clear()

      request.onsuccess = () => {}
      await wait(1000)
      return null
    } catch (error) {
      return null
    }
  }
}


export function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
