import type { MusicData } from "../model/MusicData"
import { mongoDBClient } from "../../utils/Utils"
import { DBMusicHistory } from "./model/DBMusicHistory"

//sayyedrizwanahmed
//A4H9W99pa0trLCMJ
export class MongoDBLocalService {
    static instance = new MongoDBLocalService()

    mainDBName = 'zenemusic'
    userSongHistoryDB = 'song_history'

    async updateOrInsertMusicHistory(music: MusicData, email: String, deviceInfo: String, deviceType: String) {
        try {
            const collection = mongoDBClient.db(this.mainDBName).collection(this.userSongHistoryDB)

            const data = new DBMusicHistory(email, music.name, music.artists, music.id, music.thumbnail, deviceInfo, deviceType, Date.now(), 1)
            await collection.insertOne(data)
        } catch (error) {
            console.log(error)
        }
    }
}