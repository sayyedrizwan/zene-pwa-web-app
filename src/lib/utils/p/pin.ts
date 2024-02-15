import type { ArtistsPinData } from "../../../domain/local/entities/ArtistsPinData"
import { wait } from "../indexd"


export const pinStore = 'pp'

function openPinDatabase() {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(pinStore, 1)

        request.onupgradeneeded = (event) => {
            const db = (event.target as any).result
            db.createObjectStore(pinStore, { keyPath: 'id', autoIncrement: false })
        }

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}



export async function insertPin(p: ArtistsPinData) {
    try {
        const db = await openPinDatabase()
        const tx = db.transaction([pinStore], 'readwrite')
        const record = tx.objectStore(pinStore)

        if (p.id != undefined) record.put(p)

        tx.oncomplete = () => { }
    } catch (error) {
        error
    }
}


export async function checkPinExistsWithIndex(id: string): Promise<ArtistsPinData | null> {
    const db = await openPinDatabase()
    const tx = db.transaction([pinStore], 'readonly')
    const record = tx.objectStore(pinStore)

    let isPresent: ArtistsPinData | null = null

    try {
        const info = record.getKey(id)
        if (info) {
            const records = record.get(id) as any
            await wait(1000)
            isPresent = (records.result as ArtistsPinData)
        } else {
            isPresent = null
        }
    } catch (error) {
        isPresent = null
    }

    return isPresent
}

export async function deletePin(id: string) {
    const db = await openPinDatabase()
    const tx = db.transaction([pinStore], 'readwrite')
    const record = tx.objectStore(pinStore)
    const deleteRequest = record.delete(id)
    deleteRequest.onsuccess = () => {}
    deleteRequest.onerror = (error) => {}
}


