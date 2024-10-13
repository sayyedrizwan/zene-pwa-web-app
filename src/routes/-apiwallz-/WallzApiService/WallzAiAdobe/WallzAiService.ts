import axios from "axios";
import { NIGHTY_CAFE_API } from "../../utils/Utils";
import type { NightCafeAiResponse } from "./model/NightCafeAiResponse";
import { WallpaperData } from "../MySQLService/model/WallpaperData";
import { parse } from "node-html-parser";

export class WallzAiService {
  static instance = new WallzAiService();

  async getAINightCafe(id: String, q: String, page: number): Promise<[WallpaperData[], String]> {
    try {
      const response = await axios.get(NIGHTY_CAFE_API, { params: { lastVisibleId: id, query: q, filter: "none", limit: 10 } });
      const data = (await response.data) as NightCafeAiResponse;
      let lists = data.results?.map((ai) => (ai.output != undefined ? new WallpaperData(`https://creator.nightcafe.studio/creation/${ai.id}`, "", `https://images.nightcafe.studio${ai.output}?tr=w-540,c-at_max`, ai.title, page) : null));

      return [lists?.filter((s) => s != undefined) ?? [], data.lastVisibleId ?? ""];
    } catch (error) {
      return [[], ""];
    }
  }
}
