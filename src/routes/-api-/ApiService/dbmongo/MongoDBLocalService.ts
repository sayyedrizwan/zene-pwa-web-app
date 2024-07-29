import type { MusicData } from "../model/MusicData"
import { mongoDBClient, shuffleString, zenePlaylistsParam } from "../../utils/Utils"
import { DBMusicHistory } from "./model/DBMusicHistory"
import { DBPlaylists } from "./model/DBPlaylistInfo"

export class MongoDBLocalService {
    static instance = new MongoDBLocalService()

    static limitPagination = 20

    mainDBName = 'zenemusic'
    userSongHistoryDB = 'song_history'
    userPlaylistsDB = 'playlists'
    playlistsSongsDB = 'playlists_songs'

    collectionSongHistory = mongoDBClient.db(this.mainDBName).collection(this.userSongHistoryDB)
    collectionPlaylists = mongoDBClient.db(this.mainDBName).collection(this.userPlaylistsDB)
    collectionPlaylistsSongs = mongoDBClient.db(this.mainDBName).collection(this.playlistsSongsDB)

    async insertPlaylistHistory(name: String, img: String, email: String, id: String | null) {
        try {
            const saveID = id == null ? `${zenePlaylistsParam}${btoa(`${email}_${Date.now()}`)}` : id
            const data = new DBPlaylists(email, name, img, saveID, id != null, Date.now())
            if(id != null) {
                await this.collectionPlaylists.deleteMany({ id: id, email: email })
            }   
            await this.collectionPlaylists.insertOne(data)
        } catch (error) {
            console.log(error)
        }
    }

    async deletePlaylistHistory(email: String, id: String | null) {
        try {
            await this.collectionPlaylists.deleteMany({ id: id, email: email })
            await this.collectionPlaylistsSongs.deleteMany({ playlistID: id })
        } catch (error) {
            console.log(error)
        }
    }

    async isPlaylistPresent(email: String, pID: String): Promise<Boolean> {
        let isPlaylistPresent = false
        try {
            const data = await this.collectionPlaylists.find({ id: pID, email: email }).toArray()

            data.forEach((element : any) => {
                const data = element as DBPlaylists
                if(data.id == pID && data.email == email) isPlaylistPresent = true
            })
            
            return isPlaylistPresent
        } catch (error) {
    
            return false
        }
    }

    async readPlaylists(email: String, page: number): Promise<DBMusicHistory[] | undefined> {
        try {
            const skip = page * MongoDBLocalService.limitPagination
            const data = await this.collectionPlaylists.find({ email: email }).sort({ timestamp: -1 }).skip(skip).limit(MongoDBLocalService.limitPagination).toArray()
            return data as any
        } catch (error) {
            return []
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
            const skip = page * MongoDBLocalService.limitPagination
            const data = await this.collectionSongHistory.find({ email: email }).sort({ timestamp: -1 }).skip(skip).limit(MongoDBLocalService.limitPagination).toArray()
            return data as any
        } catch (error) {
            return []
        }
    }

    async topFifteenSongsOfUsers(email: String): Promise<String[]> {
        try {
            const list: String[] = []
            const dataLatest = await this.collectionSongHistory.find({ email: email }).sort({ timestamp: -1 }).limit(10).toArray()
            dataLatest.forEach((e: any) => {
                const id = (e as DBMusicHistory).id
                if (!list.some((item) => item === id)) list.push(id)
            })

            const dataTop = await this.collectionSongHistory.find({ email: email }).sort({ timesItsPlayed: -1 }).limit(5).toArray()
            dataTop.forEach((e: any) => {
                const id = (e as DBMusicHistory).id
                if (!list.some((item) => item === id)) list.push(id)
            })
            return shuffleString(list)
        } catch (error) {
            return []
        }
    }

    async topFifteenArtistsOfUsers(email: String): Promise<String[]> {
        try {
            const list: String[] = []
            const dataLatest = await this.collectionSongHistory.find({ email: email }).sort({ timestamp: -1 }).limit(10).toArray()
            dataLatest.forEach((e: any) => {
                const id = (e as DBMusicHistory).artists
                if (!list.some((item) => item === id)) list.push(id)
            })

            const dataTop = await this.collectionSongHistory.find({ email: email }).sort({ timesItsPlayed: -1 }).limit(5).toArray()
            dataTop.forEach((e: any) => {
                const id = (e as DBMusicHistory).artists
                if (!list.some((item) => item === id)) list.push(id)
            })
            return shuffleString(list)
        } catch (error) {
            return []
        }
    }
}