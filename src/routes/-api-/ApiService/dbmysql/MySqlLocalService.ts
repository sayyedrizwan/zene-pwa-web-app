import { isDevDB, mysqlpool, timeDifferenceIs24Hours } from "../../utils/Utils";
import { MusicData } from "../model/MusicData";

export class MySqlLocalService {
  static instance = new MySqlLocalService();
  tempHolderDB = "`temp_holder`";
  userDB = "`users`";

  async getTempData(category: String): Promise<MusicData[]> {
    const list: MusicData[] = [];

    try {
      const [results] = await mysqlpool.query(`SELECT * FROM ${this.tempHolderDB} WHERE category = ?`, [category]);
      if (results.length > 0) {
        if (!timeDifferenceIs24Hours(results[0].timestamp)) {
          results.forEach((e: any) => {
            const m = new MusicData(e.name, e.artists, e.ids, e.thumbnail, e.type, e.extra);
            list.push(m);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }

    return list;
  }

  async delteTempData(category: String) {
    try {
      await mysqlpool.query(`DELETE FROM ${this.tempHolderDB} WHERE category = ?`, [category]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateEmailSendTS(email: String) {
    const currentTimestamp = new Date().getTime();
    try {
      await mysqlpool.query(`UPDATE ${this.userDB} SET last_mail_send = ? WHERE email = ?`, [currentTimestamp, email]);
    } catch (error) {
      console.log(error);
    }
  }

  async selectUserWhoNotReceivedMails(): Promise<any> {
    try {
      const nodejsTimestamp = Date.now();
      const [results] = await mysqlpool.query(`SELECT * FROM ${this.userDB} WHERE (last_mail_send IS NULL OR last_mail_send > ?) AND last_seen < ? ORDER BY last_seen ASC LIMIT 11`, [nodejsTimestamp, nodejsTimestamp - 4 * 24 * 60 * 60 * 1000]);

      return results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async insertTempData(m: MusicData, category: String) {
    const currentTimestamp = new Date().getTime();

    try {
      await mysqlpool.query("INSERT INTO " + this.tempHolderDB + "(`name`, `artists`, `ids`, `thumbnail`, `type`, `category`, `timestamp`, `extra`)" + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [m.name, m.artists, m.id, m.thumbnail, m.type, category, currentTimestamp.toString(), m.extra]);
    } catch (error) {
      console.log(error);
    }
  }

  async searchUser(email: String): Promise<any> {
    const [results] = await mysqlpool.query(`SELECT * FROM ${this.userDB} WHERE email = ?`, [email]);

    let info: any = {};

    if (results.length > 0) {
      info = results[0];
      try {
        info.pinned_artists = JSON.parse(results[0].pinned_artists);
      } catch (error) {
        info.pinned_artists = [];
      }
    }

    return info;
  }
}
