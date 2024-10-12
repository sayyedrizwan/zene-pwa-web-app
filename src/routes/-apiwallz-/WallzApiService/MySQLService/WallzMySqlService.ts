import { MongoDBLocalService } from "../../../-api-/ApiService/dbmongo/MongoDBLocalService";
import { mysqlpoolWallz } from "../../utils/Utils";
import type { WallpaperData } from "./model/WallpaperData";

export class WallzMySqlService {
  static instance = new WallzMySqlService();
  wallpapersCategoriesDB = "`wallpapers_categories`";
  wallpapersUserDB = "`users`";
  savedWallpapersDB = "`saved_wallpapers`";

  async searchUser(email: String): Promise<any> {
    const [results] = await mysqlpoolWallz.query(`SELECT * FROM ${this.wallpapersUserDB} WHERE email = ?`, [email]);
    let info: any = {};
    if (results.length > 0) info = results[0];
    return info;
  }

  async getUserInterests(email: String): Promise<String[]> {
    try {
      const [results] = await mysqlpoolWallz.query(`SELECT * FROM ${this.wallpapersUserDB} WHERE email = ? LIMIT 1`, [email]);
      return JSON.parse(results[0].interests);
    } catch (error) {
      return [];
    }
  }

  async updateExploreData(email: String, list: String[]) {
    try {
      await mysqlpoolWallz.query(`UPDATE ${this.wallpapersUserDB} SET interests = ? WHERE email = ?`, [JSON.stringify(list), email]);
    } catch (error) {
      console.log(error);
    }
  }

  async getCategories(): Promise<WallpaperData[]> {
    try {
      const [results] = await mysqlpoolWallz.query(`SELECT * FROM ${this.wallpapersCategoriesDB} ORDER BY name`);
      return results;
    } catch (error) {
      return [];
    }
  }

  async getSavedWallpapers(email: String, page: number): Promise<WallpaperData[]> {
    try {
      const skip = page * MongoDBLocalService.limitPagination;
      const [results] = await mysqlpoolWallz.query(`SELECT * FROM ${this.savedWallpapersDB} WHERE email = ? ORDER BY saved_date DESC LIMIT ${skip}, ${MongoDBLocalService.limitPagination}`, [email]);
      return results;
    } catch (error) {
      return [];
    }
  }

  async isWallpaperSave(email: String, id: String): Promise<Boolean> {
    try {
      const [results] = await mysqlpoolWallz.query(`SELECT COUNT(*) AS records FROM ${this.savedWallpapersDB} WHERE email = ? AND id = ?`, [email, id]);
      return results[0].records > 0;
    } catch (error) {
      return false;
    }
  }

  async saveWallpapers(email: String, name: String, id: String, thumbnail: String, desc: String) {
    try {
      await mysqlpoolWallz.query(`INSERT INTO ${this.savedWallpapersDB} (recordid, ${"`desc`"}, thumbnail, name, id, email, saved_date) VALUES (NULL, ?, ?, ?, ?, ?, ?)`, [desc, thumbnail, name, id, email, Date.now()]);
    } catch (error) {
      console.log(error);
    }
  }

  async removeWallpapers(email: String, id: String) {
    try {
      await mysqlpoolWallz.query(`DELETE FROM ${this.savedWallpapersDB} WHERE email = ? AND id = ?`, [email, id]);
    } catch (error) {
      console.log(error);
    }
  }
}
