import axios from "axios";
import { BING_SEARCH_API } from "../../utils/Utils";
import type { BingSearchResponse } from "./model/BingSearchResponse";
import { WallzSearch } from "./model/WallzSearch";

export class WallzBingService {
  static instance = new WallzBingService();

  async getSearch(q: String): Promise<WallzSearch[]> {
    try {
      const response = await axios.get(BING_SEARCH_API, { params: { pt: "page.home", qry: q, cp: 15, csr: 1, cvid: "3DCEF4B476804174BB3FCCF5C27C7752" } });
      const data = (await response.data) as BingSearchResponse;
      const lists = data.s?.map((r) => (r.q != undefined ? new WallzSearch(r.q.replaceAll("", "").replaceAll("", ""), r.ext?.im) : undefined));
      return lists?.filter((s) => s !== undefined) ?? [];
    } catch (error) {
      return [];
    }
  }
}
