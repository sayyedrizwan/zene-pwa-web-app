import axios from "axios";
import { WallpaperData } from "../MySQLService/model/WallpaperData";
import { substringAfter } from "../../../-api-/utils/extension/String";
import { getVideoURLPinterest, type PinterestGetResponse } from "./model/PinterestGetResponse";
import { PINTEREST_GET_API } from "../../utils/Utils";

export class WallzPinterestServices {
  static instance = new WallzPinterestServices();
  wallpapersCategoriesDB = "`wallpapers_categories`";

  async getSearch(name: String, bookmark: String): Promise<[WallpaperData[], String]> {
    try {
      const body = new URLSearchParams();
      body.append("source_url", `/search/pins/?q=${name.replaceAll(" ", "%20").toLowerCase()}&rs=typed`);
      body.append("data", await this.dataJSON(name, bookmark));

      const headers = await this.getSetHeaderString();
      const response = await axios.post(PINTEREST_GET_API, body, { headers: { "x-csrftoken": headers, "x-app-version": "8b36052", "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36", cookie: `csrftoken=${headers};` } });
      console.log((await response.data))
      const data = (await response.data) as PinterestGetResponse;
      const lists = data.resource_response?.data?.results?.map((r) => new WallpaperData(r.id, r.description, r.images?.["736x"]?.url, r.alt_text, r.videos != null, getVideoURLPinterest(r.videos)));
      return [lists ?? [], data.resource_response?.bookmark ?? ""];
    } catch (error) {
      return [[], ""];
    }
  }

  private async getSetHeaderString(): Promise<string> {
    const response = await axios.get("https://pinterest.com");
    const cookies = response.headers["set-cookie"];
    let csrftoken = "";
    cookies?.map((cookie) => (cookie.includes("csrftoken") ? (csrftoken = cookie.split(";")[0]) : null));
    const token = substringAfter(csrftoken, "csrftoken=");
    return token;
  }

  private async dataJSON(name: String, bookmarks: String): Promise<string> {
    const json = {
      options: {
        applied_filters: null,
        appliedProductFilters: "---",
        article: null,
        auto_correction_disabled: false,
        corpus: null,
        customized_rerank_type: null,
        domains: null,
        filters: null,
        journey_depth: null,
        page_size: null,
        price_max: null,
        price_min: null,
        query_pin_sigs: null,
        query: name.toLowerCase(),
        redux_normalize_feed: true,
        rs: "typed",
        scope: "pins",
        selected_one_bar_modules: null,
        source_id: null,
        source_module_id: null,
        source_url: `/search/pins/?q=${name.replaceAll(" ", "%20").toLowerCase()}&rs=typed`,
        top_pin_id: null,
        top_pin_ids: null,
        bookmarks: [bookmarks],
      },
      context: {},
    };
    return JSON.stringify(json);
  }
}
