import type { MusicData } from "../../../domain/local/entities/MusicData"
import { MusicHistoryData } from "../../../domain/local/entities/MusicHistoryData"
import { wait } from "../indexd"

export const musicHistory = 'm_h'

function openMusicHistoryDatabase() {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(musicHistory, 1)

        request.onupgradeneeded = (event) => {
            const db = (event.target as any).result
            db.createObjectStore(musicHistory, { keyPath: 's', autoIncrement: false })
        }

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}


export async function insertMusicHistory(m: MusicData, window: Window & typeof globalThis) {
    try {
        const eSongId = window.btoa(m?.songId!).replace("=", "")
        const songDetails = window.btoa(JSON.stringify(m)).replace("=", "")

        const oldRecords = await checkNameExistsWithIndex(eSongId)

        if (oldRecords != null) {
            console.log(oldRecords)
            updateMusicHistory(oldRecords)
            return
        }

        const db = await openMusicHistoryDatabase()
        const tx = db.transaction([musicHistory], 'readwrite')
        const record = tx.objectStore(musicHistory)

        if (m.songId != undefined) record.put(new MusicHistoryData(eSongId, songDetails, new Date().getTime(), 0))

        tx.oncomplete = () => { }
    } catch (error) {
        error
    }
}


export async function getAllPlayHistory(offset: number, limit: number) {
    let results: MusicHistoryData[] = []

    const db = await openMusicHistoryDatabase()
    const tx = db.transaction([musicHistory], 'readonly')
    const record = tx.objectStore(musicHistory)

    try {
        const request = record.openCursor(null, 'prev')

        let advanced = offset === 0;
        let counter = 0;

        request.onsuccess = (event: Event) => {
            const cursor = (event.target as any).result
            if (!cursor) return

            if (!advanced) {
                advanced = true
                cursor.advance(offset)
            }

            counter++;
            console.log(cursor.value)
            results.push(cursor.value)

            if (counter >= limit) return

            try {
                cursor.continue()
            } catch (error) {
                error
            }
        }
    } catch (error) {
        results = []
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

