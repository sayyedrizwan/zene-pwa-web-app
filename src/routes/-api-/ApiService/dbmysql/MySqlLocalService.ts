import { mysqlpool, timeDifferenceIs24Hours } from "../../utils/Utils"
import { MusicData } from "../model/MusicData"

export class MySqlLocalService {
    static instance = new MySqlLocalService()
    tempHolderDB = '`temp_holder`'

    async getTempData(category: String): Promise<MusicData[]> {
        const list: MusicData[] = []

        try {
            const [results] = await mysqlpool.query(`SELECT * FROM ${this.tempHolderDB} WHERE category = ?`, [category])
            if (results.length > 0) {
                if (!timeDifferenceIs24Hours(results[0].timestamp)) {
                    results.forEach((e: any) => {
                        const m = new MusicData(e.name, e.artists, e.ids, e.thumbnail, e.type, e.extra)
                        list.push(m)
                    })
                }
            }
        } catch (error) {
            console.log(error)
        }

        return list
    }

    async delteTempData(category: String) {
        try {
            await mysqlpool.query(`DELETE FROM ${this.tempHolderDB} WHERE category = ?`, [category])
        } catch (error) {
            console.log(error)
        }
    }

    async insertTempData(m: MusicData, category: String) {
        const currentTimestamp = new Date().getTime()

        try {
            await mysqlpool.query("INSERT INTO " + this.tempHolderDB + "(`name`, `artists`, `ids`, `thumbnail`, `type`, `category`, `timestamp`, `extra`)" +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [m.name, m.artists, m.id, m.thumbnail, m.type, category, currentTimestamp.toString(), m.extra])
        } catch (error) {
            console.log(error)
        }
    }
}