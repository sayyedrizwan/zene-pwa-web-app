import axios from "axios";
import { parse } from "node-html-parser";
import { PEAKPX_MAIN_API, PEAKPX_SEARCH_API, SEARCH_WALLPAPERS_CO_API, WALLPAPERCAVE_API, WALLPAPERCAVE_MAIN_API, WALLPAPERCOM_MAIN_API, WALLPAPERCOM_SEARCH_API, WALLPAPERFLARE_API, WALLPAPERFLARE_MAIN_API } from "../../utils/Utils";
import { WallpaperData } from "../MySQLService/model/WallpaperData";
import type { WallzWallpaperComSearch } from "./model/WallzWallpaperComSearch";

export class WallzWallpaperService {
  static instance = new WallzWallpaperService();

  async wallpaperCaveInfo(url: String): Promise<String> {
    try {
      console.log(url)
      const response = await axios.get(url.toString(), { headers: { Host: "wallpapercave.com", "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36" } });
      const data = await response.data;
      const root = parse(data);
      const urlPath = root.querySelector("img.wpimg")?.getAttribute("data-cfsrc")
      return urlPath ?? ""; 
    } catch (error) {
      console.log("error")
    }
    return ""
  }

  async latestWallpaperCave(): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 6 }, (_, index) => index).map(async (page) => {
        try {
          const response = await axios.get(`${WALLPAPERCAVE_MAIN_API}/latest-uploads${page == 0 ? `` : `/${page}`}`, { headers: { Host: "wallpapercave.com", "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36" } });
          const data = await response.data;
          const root = parse(data);

          const imgList = root
            .querySelector(".collectionc")
            ?.querySelectorAll("a")
            .map((f) => (f.querySelector("img")?.getAttribute("data-cfsrc") != undefined ? new WallpaperData(`${WALLPAPERCAVE_MAIN_API}${f.getAttribute("href")}`, f.getAttribute("title"), `${WALLPAPERCAVE_MAIN_API}${f.querySelector("img")?.getAttribute("data-cfsrc")}`, f.getAttribute("title")) : null));
          imgList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log("error");
          // console.log(error);
        }
      })
    );

    return lists;
  }

  async wallpaperCaveSearch(q: String): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];
    try {
      const response = await axios.get(WALLPAPERCAVE_API, { params: { q: q.replaceAll(" ", "+").replaceAll("%20", "+") }, headers: { Host: "wallpapercave.com", "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36" } });
      const data = await response.data;
      const root = parse(data);
      const links = root.querySelectorAll("#content #popular a");
      await Promise.all(
        links.map(async (path, i) => {
          const responsePage = await axios.get(`${WALLPAPERCAVE_MAIN_API}${path.getAttribute("href")}`, { headers: { Host: "wallpapercave.com", "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36" } });
          const dataPage = await responsePage.data;
          const root = parse(dataPage);

          const picturesList = root.querySelectorAll(".wallpaper").map((p) => (p.querySelector(".wimg")?.getAttribute("data-cfsrc") != undefined ? new WallpaperData(`${WALLPAPERCAVE_MAIN_API}${p.querySelector(".wpinkw")?.getAttribute("href")}`, p.querySelector(".wimg")?.getAttribute("alt"), `${WALLPAPERCAVE_MAIN_API}${p.querySelector(".wimg")?.getAttribute("data-cfsrc")}`, "", i + 1) : null));
          picturesList?.filter((s) => s != undefined).map((item) => lists.push(item));
        })
      );
    } catch (error) {
      console.log(error);
    }
    return lists;
  }

  async peakpxInfo(url: String): Promise<String> {
    const response = await axios.get(url.toString());
    const data = await response.data;
    const root = parse(data);
    const img = root.querySelector('meta[property="og:image"]')?.getAttribute("content") ?? "";
    return img.replaceAll("/high/", "/hd/");
  }

  async latestPeakpx(): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 11 }, (_, index) => index).map(async (page) => {
        if (page == 0) return;
        try {
          const response = await axios.get(PEAKPX_MAIN_API, { params: { page: 1 } });
          const data = await response.data;
          const root = parse(data);
          const links = root.querySelectorAll("#list_ul .grid");
          const picturesList = links.map((p) => (p.querySelector("img")?.getAttribute("data-src") != undefined ? new WallpaperData(p.querySelector("a")?.getAttribute("href"), p.querySelector("img")?.getAttribute("alt"), p.querySelector("img")?.getAttribute("data-src"), p.querySelector("img")?.getAttribute("title")) : null));
          picturesList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log(error);
        }
      })
    );
    return lists;
  }

  async searchPeakpx(q: String): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 6 }, (_, index) => index).map(async (page) => {
        if (page == 0) return;
        try {
          const response = await axios.get(PEAKPX_SEARCH_API, { params: { q: q, page: page } });
          const data = await response.data;
          const root = parse(data);
          const links = root.querySelectorAll("#list_ul .grid");

          const picturesList = links.map((p) => (p.querySelector("img")?.getAttribute("data-src") != undefined ? new WallpaperData(p.querySelector("a")?.getAttribute("href"), p.querySelector("img")?.getAttribute("alt"), p.querySelector("img")?.getAttribute("data-src"), p.querySelector("img")?.getAttribute("title")) : null));
          picturesList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log(error);
        }
      })
    );
    return lists;
  }

  async wallpaperComSearch(q: String): Promise<WallpaperData[]> {
    try {
      const response = await axios.post(SEARCH_WALLPAPERS_CO_API, { suggest: { words: { prefix: q, completion: { field: "name.suggest", skip_duplicates: true } } } });
      const data = (await response.data) as WallzWallpaperComSearch;

      const lists = data.suggest?.words?.[0]?.options?.map((e) => new WallpaperData(e._id, e.text, `https://wallpapers.com/images/featured/${e._source?.meta?.thumbnail?.[0].value}.png`, e._source?.description));
      return lists ?? [];
    } catch (error) {
      return [];
    }
  }
}
