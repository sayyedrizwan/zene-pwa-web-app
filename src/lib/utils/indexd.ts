
export const dbName = 'myDatabase'
export const tableNameIndexedDB = 'userDataIndexedDB'


export function isAPICached(recordsSize: number, storageName: string): boolean {
    try {
        if(recordsSize == 0) return false
        const differenceInMinutes: number = Math.floor((Date.now() - parseInt(localStorage.getItem(storageName)?.toString()!)) / (1000 * 60))
        console.log(differenceInMinutes)
        if(differenceInMinutes >= 240) return false

        return true
    } catch (error) {
        console.log('error ', error)
        return false
    }
}

export class DataIndexDS<T>  {
    private dbName: string;
    private tableName: string;

    constructor(dbName: string, tableName: string) {
        this.dbName = dbName;
        this.tableName = tableName;
    }

    private openDatabase() {
        return new Promise<IDBDatabase>((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1)

            request.onupgradeneeded = (event) => {
                const db = (event.target as any).result;
                db.createObjectStore(this.tableName, { keyPath: 'id', autoIncrement: true })
            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    saveToIndexedDB(data: T) {
        this.openDatabase()
            .then((db) => {
                const transaction = db.transaction([this.tableName], 'readwrite');
                const objectStore = transaction.objectStore(this.tableName);
                objectStore.add(data);
                console.log('Data saved to IndexedDB successfully!');
            })
            .catch((error) => {
                console.error('IndexedDB error:', error);
            });
    }

    wait(time: number) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        })
    }

    async retrieveFromIndexedDB(): Promise<any> {
        try {
            const db = await this.openDatabase();
            const transaction = db.transaction([this.tableName], 'readonly');
            const objectStore = transaction.objectStore(this.tableName);

            const request = objectStore.getAll();
            var data: any = null;
            request.onsuccess = () => {
                data = request.result;
            }
            await this.wait(500)
            return data
        } catch (error) {
            return null;
        }
    }


    deleteAllRecordsAndSave(data: any) {
        this.openDatabase()
            .then((db) => {
                const transaction = db.transaction([this.tableName], 'readwrite');
                const objectStore = transaction.objectStore(this.tableName);

                const clearRequest = objectStore.clear();

                clearRequest.onsuccess = () => {
                    this.saveToIndexedDB(data)
                    console.log('All records deleted successfully.');
                };

                clearRequest.onerror = (event) => {
                    console.error('Error deleting records:', (event.target as any).error);
                };
            })
            .catch((error) => {
                console.error('IndexedDB error:', error);
            });
    }
}
function sleep(arg0: number) {
    throw new Error("Function not implemented.");
}

