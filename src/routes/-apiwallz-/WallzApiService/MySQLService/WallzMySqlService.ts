import { mysqlpoolWallz } from "../../utils/Utils";
import type { WallpaperData } from "./model/WallpaperData";

export class WallzMySqlService {
  static instance = new WallzMySqlService();
  wallpapersCategoriesDB = "`wallpapers_categories`";
  wallpapersUserDB = "`wallpapers_categories`";

  async searchUser(email: String): Promise<any> {
    const [results] = await mysqlpoolWallz.query(`SELECT * FROM ${this.wallpapersUserDB} WHERE email = ?`, [email]);
    let info: any = {};
    if (results.length > 0) info = results[0];
    return info;
  }

  async getCategories(): Promise<WallpaperData[]> {
    try {
      const [results] = await mysqlpoolWallz.query(`SELECT * FROM ${this.wallpapersCategoriesDB} ORDER BY name`);
      return results
    } catch (error) {
        return [];
    }
  }
}
