import type { MusicData } from "../model/MusicData";
import { isDevDB, mongoDBClient, shuffleString, startMongoDB, timeDifferenceInHours, timeDifferenceInSeconds } from "../../utils/Utils";
import { DBMusicHistory } from "./model/DBMusicHistory";
import { DBPlaylists } from "./model/DBPlaylistInfo";
import { DBPlaylistsSong } from "./model/DBPlaylistSongInfo";
import { clearIfBigSet, getTopSongsArrayCacheSet, setTopSongsArrayCache } from "./TopSingSetCache";

let isEveryDone = false;

export class MongoDBLocalService {
  static instance = new MongoDBLocalService();

  static limitPagination = 26;

  mainDBName = isDevDB ? "zenemusic" : "zenemusicnosql_zooofficer";
  userSongHistoryDB = "song_history";
  userPlaylistsDB = "playlists";
  playlistsSongsDB = "playlists_songs";

  likedSongsOnZenePlaylists = "liked_songs_on_zene";

  collectionSongHistory = mongoDBClient.db(this.mainDBName).collection(this.userSongHistoryDB);
  collectionPlaylists = mongoDBClient.db(this.mainDBName).collection(this.userPlaylistsDB);
  collectionPlaylistsSongs = mongoDBClient.db(this.mainDBName).collection(this.playlistsSongsDB);

  async indexing() {
    if (isEveryDone) return;
    isEveryDone = true;
    await this.collectionSongHistory.createIndex({ email: 1, id: 1, type: 1, timesItsPlayed: -1, timestamp: -1 });
    await this.collectionPlaylists.createIndex({ email: 1, timestamp: -1 });
    await this.collectionPlaylistsSongs.createIndex({ playlistId: 1, timestamp: -1 });
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

  async isLikedSong(id: String, email: String): Promise<Boolean> {
    try {
      const pID = `${email}_${MongoDBLocalService.instance.likedSongsOnZenePlaylists}`;
      const count = await this.collectionPlaylistsSongs.countDocuments({ songId: id, playlistId: pID });
      return count > 0;
    } catch (error) {
      return false;
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

  async topFifteenSongsOfUsers(email: String): Promise<String[]> {
    await this.indexing();
    await clearIfBigSet();
    try {
      const start = Date.now();

      const cacheSet = await getTopSongsArrayCacheSet(email.toString());

      if (cacheSet.length > 0) {
        const end = Date.now();
        const timeTaken = (end - start) / 1000;
        if (!isDevDB) console.log(`Execution time: data from cache ${timeTaken.toFixed(4)} seconds ${email}`);
        return cacheSet;
      }
      // const cursor = this.collectionSongHistory.find({ email: email }).sort({ timestamp: -1 }).limit(12).project({ id: 1 });
      // const frequentHistory = await this.collectionSongHistory.find({ email: email }).sort({ timesItsPlayed: -1 }).limit(5).toArray();
    
      const cursor = this.collectionSongHistory.find({
        email: { '$in': [email] }
      }).sort({ timestamp: -1 }).limit(12).project({ id: 1 });
      
      const end1 = Date.now();
      const timeTaken1 = (end1 - start) / 1000;
      if (!isDevDB) console.log(`Execution time: data from db before ${timeTaken1.toFixed(4)} seconds ${email}`);

      const recentHistory = await cursor.toArray();
      const list = [...recentHistory].map((e: any) => e.id);

      const end = Date.now();
      const timeTaken = (end - start) / 1000;
      if (!isDevDB) console.log(`Execution time: data from db ${timeTaken.toFixed(4)} seconds ${email}`);
      const lists = shuffleString(list);
      setTopSongsArrayCache(email.toString(), list);
      return lists;
    } catch (error) {
      return [];
    }
  }

  async topFifteenArtistsOfUsers(email: String): Promise<String[]> {
    try {
      const cacheSet = await getTopSongsArrayCacheSet(email.toString());
      if (cacheSet.length > 0) return cacheSet;

      const data = await this.collectionSongHistory
        .aggregate([
          { $match: { email: email } },
          { $sort: { timestamp: -1 } },
          { $limit: 10 },
          {
            $unionWith: {
              coll: this.userSongHistoryDB,
              pipeline: [{ $match: { email: email } }, { $sort: { timesItsPlayed: -1 } }, { $limit: 5 }],
            },
          },
        ])
        .toArray();

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
