import type { MusicData } from "../model/MusicData";
import { isDevDB, mongoDBClient, shuffleString, timeDifferenceInHours, timeDifferenceInSeconds } from "../../utils/Utils";
import { DBMusicHistory } from "./model/DBMusicHistory";
import { DBPlaylists } from "./model/DBPlaylistInfo";
import { DBPlaylistsSong } from "./model/DBPlaylistSongInfo";

export class MongoDBLocalService {
  static instance = new MongoDBLocalService();

  static limitPagination = 26;
  static lastIndexed = 1709141282000;

  mainDBName = isDevDB ? "zenemusic" : "zenemusicnosql_zooofficer";
  userSongHistoryDB = "song_history";
  userPlaylistsDB = "playlists";
  playlistsSongsDB = "playlists_songs";

  collectionSongHistory = mongoDBClient.db(this.mainDBName).collection(this.userSongHistoryDB);
  collectionPlaylists = mongoDBClient.db(this.mainDBName).collection(this.userPlaylistsDB);
  collectionPlaylistsSongs = mongoDBClient.db(this.mainDBName).collection(this.playlistsSongsDB);

  async indexing() {
    if (timeDifferenceInSeconds(MongoDBLocalService.lastIndexed) < 600) return;
    await this.collectionSongHistory.createIndex({ email: 1, id: 1, type: 1, timesItsPlayed: -1, timestamp: -1 });
    await this.collectionPlaylists.createIndex({ email: 1, timestamp: -1 });
    await this.collectionPlaylistsSongs.createIndex({ playlistId: 1, timestamp: -1 });
    MongoDBLocalService.lastIndexed = Date.now();
    console.log("deleted null");
    await this.collectionSongHistory.deleteMany({ id: null });
  }

  async insertPlaylistHistory(name: String, img: String, email: String, id: String, isSaved: Boolean) {
    try {
      const data = new DBPlaylists(email, name, img, id, isSaved, Date.now());
      if (id != null) {
        await this.collectionPlaylists.deleteMany({ id: id, email: email });
      }
      await this.collectionPlaylists.insertOne(data);
    } catch (error) {
      //console.log(error);
    }
  }

  async deletePlaylistHistory(email: String, id: String | null) {
    try {
      await this.collectionPlaylists.deleteMany({ id: id, email: email });
      await this.collectionPlaylistsSongs.deleteMany({ playlistId: id });
    } catch (error) {
      //console.log(error);
    }
  }

  async isPlaylistPresent(email: String, pID: String): Promise<Boolean> {
    let isPlaylistPresent = false;
    try {
      const data = await this.collectionPlaylists.find({ id: pID, email: email }).toArray();

      data.forEach((element: any) => {
        const data = element as DBPlaylists;
        if (data.id == pID && data.email == email) isPlaylistPresent = true;
      });

      return isPlaylistPresent;
    } catch (error) {
      return false;
    }
  }

  async getUserPlaylistDetails(pID: String): Promise<DBPlaylists | undefined> {
    try {
      const data = (await this.collectionPlaylists.findOne({ id: pID })) as any;
      return data as DBPlaylists;
    } catch (error) {
      return undefined;
    }
  }

  async getUserPlaylistDetailsWithEmail(pID: String, email: String): Promise<DBPlaylists | undefined> {
    try {
      const data = (await this.collectionPlaylists.findOne({ id: pID, email: email })) as any;
      return data as DBPlaylists;
    } catch (error) {
      return undefined;
    }
  }

  async getPlaylistDetails(pID: String): Promise<DBPlaylists | undefined> {
    try {
      const data = (await this.collectionPlaylists.findOne({ id: pID, isSaved: false })) as any;
      return data as DBPlaylists;
    } catch (error) {
      return undefined;
    }
  }

  async readPlaylists(email: String, page: number): Promise<DBPlaylists[] | undefined> {
    try {
      const skip = page * MongoDBLocalService.limitPagination;
      const data = await this.collectionPlaylists.find({ email: email }).sort({ timestamp: -1 }).skip(skip).limit(MongoDBLocalService.limitPagination).toArray();
      return data as any;
    } catch (error) {
      return [];
    }
  }

  async readPlaylistsCreatedByUser(email: String, page: number): Promise<DBPlaylists[] | undefined> {
    try {
      const skip = page * MongoDBLocalService.limitPagination;
      const data = await this.collectionPlaylists.find({ email: email, isSaved: false }).sort({ timestamp: -1 }).skip(skip).limit(MongoDBLocalService.limitPagination).toArray();
      return data as any;
    } catch (error) {
      return [];
    }
  }

  async updatePlaylistSongs(pID: String, sID: String, doAdd: String): Promise<Boolean> {
    try {
      await this.collectionPlaylistsSongs.deleteMany({ playlistId: pID.trim(), songId: sID.trim() });

      if (doAdd == "true") {
        const data = new DBPlaylistsSong(pID, sID, Date.now());
        await this.collectionPlaylistsSongs.insertOne(data);
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  async isSongPresentPlaylists(playlistID: String, songID: String): Promise<number> {
    try {
      const data = (await this.collectionPlaylistsSongs.find({ playlistId: playlistID, songId: songID }).limit(MongoDBLocalService.limitPagination).toArray()) as any;
      return (data as DBPlaylistsSong[]).length;
    } catch (error) {
      return 0;
    }
  }

  async playlistSong(playlistID: String, page: number): Promise<DBPlaylistsSong[]> {
    try {
      const skip = page * MongoDBLocalService.limitPagination;
      const data = (await this.collectionPlaylistsSongs.find({ playlistId: playlistID }).sort({ timestamp: -1 }).skip(skip).limit(MongoDBLocalService.limitPagination).toArray()) as any;
      return data as DBPlaylistsSong[];
    } catch (error) {
      return [];
    }
  }

  async updateOrInsertSongHistory(music: MusicData, email: String, deviceInfo: String, playTime: number) {
    if (music.id == null || music.id == undefined) return;
    if (music.id.trim().length < 3) return;
    try {
      const data = new DBMusicHistory(email, music.name, music.artists, music.id, music.thumbnail, deviceInfo, Date.now(), playTime, "SONGS");
      await this.collectionSongHistory.insertOne(data);
    } catch (error) {
      //console.log(error);
    }
  }

  async deleteOldSongHistory(email: String) {
    try {
      const songList = await this.readSongHistory(email, 0);
      if ((songList?.length ?? 0) <= 11) {
        return;
      }

      const twoWeekAgo = Date.now() - 15 * 24 * 60 * 60 * 1000;
      const top5Playtimes = await this.collectionSongHistory.find({ email: email }).sort({ timesItsPlayed: -1 }).limit(5).toArray();
      const top5PlaytimesArray = top5Playtimes.map((doc) => doc._id);

      await this.collectionSongHistory.deleteMany({
        $and: [{ timestamp: { $lt: twoWeekAgo } }, { _id: { $nin: top5PlaytimesArray } }],
      });
    } catch (error) {
      //console.log(error);
    }
  }

  async isSongAlreadyPresentDelete(songID: String, email: String): Promise<DBMusicHistory | undefined> {
    try {
      const data = await this.collectionSongHistory.findOne({ id: songID, email: email });
      await this.collectionSongHistory.deleteMany({ id: songID, email: email });
      return data as any;
    } catch (error) {
      //console.log(error);
    }
  }

  async readSongHistory(email: String, page: number): Promise<DBMusicHistory[] | undefined> {
    try {
      const skip = page * MongoDBLocalService.limitPagination;
      const data = await this.collectionSongHistory.find({ email: email }).sort({ timestamp: -1 }).skip(skip).limit(MongoDBLocalService.limitPagination).toArray();
      return data as any;
    } catch (error) {
      return [];
    }
  }

  topSongsOfUsers = new Map();

  async topFifteenSongsOfUsers(email: String): Promise<String[]> {
    await this.indexing();
    try {
      const start = Date.now();

      if (this.topSongsOfUsers.size > 1000) this.topSongsOfUsers.clear();

      if (this.topSongsOfUsers.has(email)) {
        const end = Date.now();
        const timeTaken = (end - start) / 1000;
        if (!isDevDB) console.log(`Execution time: data cache ${timeTaken.toFixed(4)} seconds ${email}`);
        return this.topSongsOfUsers.get(email);
      }

      const data = await this.collectionSongHistory .find({ email: email }).sort({ timestamp: -1 }).limit(12).toArray();
      
    // const data = await this.collectionSongHistory.aggregate([
    //     { $match: { email: email } },
    //     { $sort: { timestamp: -1 } },
    //     { $limit: 10 },
        
    //     // {
    //     //   $unionWith: {
    //     //     coll: this.userSongHistoryDB,
    //     //     pipeline: [
    //     //       { $match: { email: email } },
    //     //       { $sort: { timesItsPlayed: -1 } },
    //     //       { $limit: 5 }
    //     //     ]
    //     //   }
    //     // }
    //   ]).toArray();
      
      const list = data.map((e: any) => e.id) 

      const end = Date.now();
      const timeTaken = (end - start) / 1000;
      if (!isDevDB) console.log(`Execution time: dataTop ${timeTaken.toFixed(4)} seconds ${email}`);
      const lists = shuffleString(list);
      this.topSongsOfUsers.set(email, lists);
      return lists;
    } catch (error) {
      return [];
    }
  }

  async topFifteenArtistsOfUsers(email: String): Promise<String[]> {
    try {
      const data = await this.collectionSongHistory .find({ email: email }).sort({ timestamp: -1 }).limit(12).toArray();
      const list: String[] = [];
      data.forEach((e: any) => {
        const id = (e as DBMusicHistory).artists;
        if (!list.some((item) => item === id)) list.push(id);
      });
      return shuffleString(list);
    } catch (error) {
      return [];
    }
  }

  // Song Analytics

  async songPlayedToday(): Promise<number> {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const startOfTodayEpochMs = startOfToday.getTime();

    const endOfToday = new Date(startOfToday);
    endOfToday.setDate(startOfToday.getDate() + 1);
    const endOfTodayEpochMs = endOfToday.getTime();

    try {
      const count = await this.collectionSongHistory.countDocuments({
        timestamp: { $gte: startOfTodayEpochMs, $lt: endOfTodayEpochMs },
      });

      return count;
    } catch (error) {
      //console.log(error);
      return -1;
    }
  }

  async songPlayedYesterday(): Promise<number> {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const startOfTodayEpochMs = startOfToday.getTime();
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfToday.getDate() - 1);
    const startOfYesterdayEpochMs = startOfYesterday.getTime();

    try {
      const count = await this.collectionSongHistory.countDocuments({
        timestamp: { $gte: startOfYesterdayEpochMs, $lt: startOfTodayEpochMs },
      });

      return count;
    } catch (error) {
      //console.log(error);
      return -1;
    }
  }

  async totalSongPlayed(): Promise<number> {
    try {
      const count = await this.collectionSongHistory.estimatedDocumentCount();
      return count;
    } catch (error) {
      //console.log(error);
      return -1;
    }
  }
}
