import type { MusicData } from "../model/MusicData"
import { mongoDBClient } from "../../utils/Utils"
import { DBMusicHistory } from "./model/DBMusicHistory"

//sayyedrizwanahmed
//A4H9W99pa0trLCMJ
export class MongoDBLocalService {
    static instance = new MongoDBLocalService()

    mainDBName = 'zenemusic'
    userSongHistoryDB = 'song_history'

    collectionSongHistory = mongoDBClient.db(this.mainDBName).collection(this.userSongHistoryDB)

    async updateOrInsertMusicHistory(music: MusicData, email: String, deviceInfo: String, deviceType: String, playTime: number) {
        try {
            
            const data = new DBMusicHistory(email, music.name, music.artists, music.id, music.thumbnail, deviceInfo, deviceType, Date.now(), playTime)
            await this.collectionSongHistory.insertOne(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    
    async isSongAlreadyPresentDelete(songID: String, email: String): Promise<DBMusicHistory | undefined>{
        try {
            const data = await this.collectionSongHistory.findOne({ id: songID, email: email })
            await this.collectionSongHistory.deleteMany({ id: songID, email: email })
            return data as any
        } catch (error) {
            console.log(error)
        }
    }
}