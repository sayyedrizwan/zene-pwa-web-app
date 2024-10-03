import { mysqlpoolWallz } from "../utils/Utils";
import type { WallpaperData } from "./model/WallpaperData";

export class WallzMySqlService {
  static instance = new WallzMySqlService();
  wallpapersCategoriesDB = "`wallpapers_categories`";

  async getCategories(): Promise<WallpaperData[]> {
    try {
      const [results] = await mysqlpoolWallz.query(`SELECT * FROM ${this.wallpapersCategoriesDB} ORDER BY name`);
      return results
    } catch (error) {
        return [];
    }
  }
}
