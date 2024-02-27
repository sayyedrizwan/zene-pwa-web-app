import { MusicType, type MusicData } from "../../../domain/local/entities/MusicData"
import { MusicHistoryData } from "../../../domain/local/entities/MusicHistoryData"
import { wait } from "../indexd"

export const musicHistory = 'm_h'

function openMusicHistoryDatabase() {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(musicHistory, 1)

        request.onupgradeneeded = (event) => {
            const db = (event.target as any).result
            const r = db.createObjectStore(musicHistory, { keyPath: 's', autoIncrement: false })
            r.createIndex('p', 'p', { unique: false })
        }

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}


export async function insertMusicHistory(m: MusicData, window: Window & typeof globalThis) {
    if (m.type == MusicType.RADIO) return

    try {
        const songDetails = window.btoa(JSON.stringify(m))

        const oldRecords = await checkNameExistsWithIndex(m?.songId!)

        if (oldRecords != null) {
            updateMusicHistory(oldRecords)
            return
        }

        const db = await openMusicHistoryDatabase()
        const tx = db.transaction([musicHistory], 'readwrite')
        const record = tx.objectStore(musicHistory)

        if (m.songId != undefined) record.put(new MusicHistoryData(m?.songId!, songDetails, new Date().getTime(), 1))

        tx.oncomplete = () => { }
    } catch (error) {
        error
    }
}

export async function getAllPlayHistory(start: number, total: number = 50): Promise<MusicHistoryData[]> {
    const db = await openMusicHistoryDatabase()

    return new Promise(function (resolve, reject) {
        const t = db.transaction([musicHistory], 'readonly')
        const historyStore = t.objectStore(musicHistory)
        const history: MusicHistoryData[] = []

        let hasSkipped = false

        historyStore.openCursor(null, 'prev').onsuccess = (e: any) => {
            var cursor = e.target.result
            if (!hasSkipped && start > 0) {
                hasSkipped = true
                cursor.advance(start)
                return
            }
            if (cursor) {
                history.push(cursor.value)
                if (history.length < total) {
                    cursor.continue()
                } else {
                    resolve(history)
                }
            } else {
                resolve(history)
            }
        }
    })
}

export async function latestFifteenSongsListener(): Promise<string[]> {
    const db = await openMusicHistoryDatabase()
    const start = 0
    const total = 15

    return new Promise(function (resolve, reject) {
        const t = db.transaction([musicHistory], 'readonly')
        const historyStore = t.objectStore(musicHistory)
        const history: string[] = []

        let hasSkipped = false

        historyStore.openCursor(null, 'prev').onsuccess = (e: any) => {
            var cursor = e.target.result
            if (!hasSkipped && start > 0) {
                hasSkipped = true
                cursor.advance(start)
                return
            }
            if (cursor) {
                if ((cursor.value as MusicHistoryData).s != null) history.push((cursor.value as MusicHistoryData).s!)
                if (history.length < total) {
                    cursor.continue()
                } else {
                    resolve(history)
                }
            } else {
                resolve(history)
            }
        }
    })
}

export async function topTenSongsListener(lists: (music: string[]) => void) {
    let results: string[] = []

    const db = await openMusicHistoryDatabase()
    const tx = db.transaction([musicHistory], 'readonly').objectStore(musicHistory)
    const index = tx.index('p').openCursor(null, 'prev')

    let count = 0

    try {
        index.onsuccess = (event: Event) => {
            const cursor = (event.target as any).result
            if (cursor && count < 16) {
                if ((cursor.value as MusicHistoryData).s != null) results.push((cursor.value as MusicHistoryData).s!)
                count++
                cursor.continue()
            }
            if (cursor === null) try {
                lists(results)
            } catch (error) {
                error
            }


        }
    } catch (error) {
        count = 0
    }
}

async function updateMusicHistory(d: MusicHistoryData) {
    const db = await openMusicHistoryDatabase()
    const tx = db.transaction([musicHistory], 'readwrite')
    const record = tx.objectStore(musicHistory)

    record.delete(d.s!).onsuccess = () => { }

    const playTime = (d.p ?? 0) + 1
    if (d.s != undefined) record.put(new MusicHistoryData(d.s, d.d!, new Date().getTime(), playTime))
}


async function checkNameExistsWithIndex(songId: string): Promise<MusicHistoryData | null> {
    const db = await openMusicHistoryDatabase()
    const tx = db.transaction([musicHistory], 'readonly')
    const record = tx.objectStore(musicHistory)

    let isPresent: MusicHistoryData | null = null

    try {
        const info = record.getKey(songId)
        if (info) {
            const records = record.get(songId) as any
            await wait(1000)
            isPresent = (records.result as MusicHistoryData)
        } else {
            isPresent = null
        }
    } catch (error) {
        isPresent = null
    }

    return isPresent
}


