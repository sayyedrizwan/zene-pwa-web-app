import type { MusicData } from "../model/MusicData"
import { mongoDBClient, shuffleString } from "../../utils/Utils"
import { DBMusicHistory } from "./model/DBMusicHistory"
import { DBPlaylists } from "./model/DBPlaylistInfo"

export class MongoDBLocalService {
    static instance = new MongoDBLocalService()

    mainDBName = 'zenemusic'
    userSongHistoryDB = 'song_history'
    userPlaylistsDB = 'playlists'

    collectionSongHistory = mongoDBClient.db(this.mainDBName).collection(this.userSongHistoryDB)
    collectionPlaylists = mongoDBClient.db(this.mainDBName).collection(this.userPlaylistsDB)

    async insertPlaylistHistory(name: String, img: String, email: String) {
        try {
            const id = btoa(`${email}_${Date.now()}`)
            const data = new DBPlaylists(email, name, img, id, Date.now())
            await this.collectionPlaylists.insertOne(data)
        } catch (error) {
            console.log(error)
        }
    }

    async updateOrInsertSongHistory(music: MusicData, email: String, deviceInfo: String, playTime: number) {
        try {
            const data = new DBMusicHistory(email, music.name, music.artists, music.id, music.thumbnail, deviceInfo, Date.now(), playTime, "SONGS")
            await this.collectionSongHistory.insertOne(data)
        } catch (error) {
            console.log(error)
        }
    }


    async isSongAlreadyPresentDelete(songID: String, email: String): Promise<DBMusicHistory | undefined> {
        try {
            const data = await this.collectionSongHistory.findOne({ id: songID, email: email })
            await this.collectionSongHistory.deleteMany({ id: songID, email: email })
            return data as any
        } catch (error) {
            console.log(error)
        }
    }

    async readSongHistory(email: String, page: number): Promise<DBMusicHistory[] | undefined> {
        try {
            const skip = page * 50
            const data = await this.collectionSongHistory.find({ email: email }).sort({timestamp: -1}).skip(skip).limit(20).toArray()
            return data as any
        } catch (error) {
            return []
        }
    }

    async topFifteenSongsOfUsers(email: String): Promise<String[]> {
        try {
            const list : String[] = []
            const dataLatest = await this.collectionSongHistory.find({ email: email }).sort({timestamp: -1}).limit(10).toArray()
            dataLatest.forEach((e: any) => {
                const id = (e as DBMusicHistory).id
                if(!list.some((item) => item === id)) list.push(id)
            })

            const dataTop = await this.collectionSongHistory.find({ email: email }).sort({timesItsPlayed: -1}).limit(5).toArray()
            dataTop.forEach((e: any) => {
                const id = (e as DBMusicHistory).id
                if(!list.some((item) => item === id)) list.push(id)
            })
            return shuffleString(list)
        } catch (error) {
            return []
        }
    }

    async topFifteenArtistsOfUsers(email: String): Promise<String[]> {
        try {
            const list : String[] = []
            const dataLatest = await this.collectionSongHistory.find({ email: email }).sort({timestamp: -1}).limit(10).toArray()
            dataLatest.forEach((e: any) => {
                const id = (e as DBMusicHistory).artists
                if(!list.some((item) => item === id)) list.push(id)
            })

            const dataTop = await this.collectionSongHistory.find({ email: email }).sort({timesItsPlayed: -1}).limit(5).toArray()
            dataTop.forEach((e: any) => {
                const id = (e as DBMusicHistory).artists
                if(!list.some((item) => item === id)) list.push(id)
            })
            return shuffleString(list)
        } catch (error) {
            return []
        }
    }
}