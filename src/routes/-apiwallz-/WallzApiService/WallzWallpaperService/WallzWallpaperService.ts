import axios from "axios";
import { parse } from "node-html-parser";
import { findLargestResolution, PEAKPX_MAIN_API, SEARCH_WALLPAPERS_CO_API, WALLPAPERCAVE_API, WALLPAPERCAVE_MAIN_API, WALLPAPERCOM_MAIN_API, WALLPAPERCOM_SEARCH_API, WALLPAPERFLARE_API, WALLPAPERFLARE_MAIN_API } from "../../utils/Utils";
import { WallpaperData } from "../MySQLService/model/WallpaperData";
import type { WallzWallpaperComSearch } from "./model/WallzWallpaperComSearch";
import { substringAfter, substringAfterLast } from "../../../-api-/utils/extension/String";

export class WallzWallpaperService {
  static instance = new WallzWallpaperService();

  async wallpaperComInfo(url: String): Promise<String> {
    return url.replaceAll("/high/", "/hd/");
  }

  async wallpaperCaveInfo(url: String): Promise<String> {
    return url
  }

  async wallpaperflareInfo(url: String): Promise<String> {
    try {
      const response = await axios.get(url.toString());
      const data = await response.data;
      const root = parse(data);

      const lists : WallpaperData[] = []  

      root.querySelector(".res_resize.res_zone")?.querySelectorAll("li").map((v) => v.text == "2160x1440" && v.querySelector("a")?.getAttribute("href") != undefined ? lists.push(new WallpaperData(v.querySelector("a")?.getAttribute("href"), v.text)) : null)
      const path = findLargestResolution(lists)
      const responsePath = await axios.get(path?.toString() ?? "", { headers : { "Host": "www.wallpaperflare.com"}});
      const dataPath = await responsePath.data;
      const rootPath = parse(dataPath);

      const urlImg = rootPath.querySelector("#dld_thumb")?.getAttribute("src")
      return urlImg ?? ""
    } catch (error) {
      return ""
    }
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
  async WallpaperflareSearch(q: String): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 9 }, (_, index) => index).map(async (page) => {
        if (page == 0) return;
        try {
          const response = await axios.get(WALLPAPERFLARE_API, { params: { wallpaper: q.replaceAll(" ", "+").replaceAll("%20", "+"), page: page } });
          const data = await response.data;
          const root = parse(data);

          if (root.querySelector("h1.portal_h1") == null) {
            const figureList = root.querySelectorAll("figure").map((f) => (f.querySelector("img")?.getAttribute("alt") != undefined ? new WallpaperData(f.querySelector("a")?.getAttribute("href"), f.querySelector("img")?.getAttribute("alt")!, f.querySelector("img")?.getAttribute("data-src"), f.querySelector('meta[itemprop="keywords"]')?.getAttribute("content"), page) : null));
            figureList?.filter((s) => s != undefined).map((item) => lists.push(item));
          }
        } catch (error) {
          console.log(error);
        }
      })
    );
    return lists;
  }

  async WallpapercaveSearch(q: String): Promise<WallpaperData[]> {
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

  async WallpaperComSearch(q: String): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 7 }, (_, index) => index).map(async (page) => {
        if (page == 0) return;
        try {
          const response = await axios.get(`${WALLPAPERCOM_SEARCH_API}${q.toLowerCase().replaceAll(" ", "%20")}`, { params: { p: page } });
          const data = await response.data;
          const root = parse(data);
          const links = root.querySelectorAll(".content-container ul li");

          const picturesList = links.map((p) =>
            p.querySelector("figure")?.querySelector("img")?.getAttribute("data-src") != undefined ? new WallpaperData(p.querySelector("figure")?.querySelector("a")?.getAttribute("href"), p.querySelector("figure")?.getAttribute("data-title"), `${WALLPAPERCOM_MAIN_API}${p.querySelector("figure")?.querySelector("img")?.getAttribute("data-src")}`, p.querySelector("figure")?.getAttribute("data-desc")?.replace("</p>", "")?.replace("<p>", ""), page) : null
          );
          picturesList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log(error);
        }
      })
    );

    return lists;
  }

  async latestWallpaperflare(): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 6 }, (_, index) => index).map(async (page) => {
        try {
          const response = await axios.get(WALLPAPERFLARE_MAIN_API, { params: { c: "main", m: "portal_loadmore", page: page } });
          const data = await response.data;
          const root = parse(data);

          const figureList = root.querySelectorAll("figure").map((f) => (f.querySelector("img")?.getAttribute("alt") != undefined ? new WallpaperData(f.querySelector("a")?.getAttribute("href"), f.querySelector("img")?.getAttribute("alt")!, f.querySelector("img")?.getAttribute("data-src"), f.querySelector('meta[itemprop="keywords"]')?.getAttribute("content")) : null));
          figureList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log(error);
        }
      })
    );

    return lists;
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
            .map((f) => (f.querySelector("img")?.getAttribute("data-cfsrc") != undefined ? new WallpaperData(f.getAttribute("href"), f.getAttribute("title"), f.querySelector("img")?.getAttribute("data-cfsrc"), f.getAttribute("title")) : null));
          imgList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log(error);
        }
      })
    );

    return lists;
  }

  async latestWallpaperCom(): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 6 }, (_, index) => index).map(async (page) => {
        try {
          const response = await axios.get(`${WALLPAPERCOM_MAIN_API}/cool`, { params: { p: page } });
          const data = await response.data;
          const root = parse(data);
          const links = root.querySelectorAll(".content-container ul li");

          const picturesList = links.map((p) =>
            p.querySelector("figure")?.querySelector("img")?.getAttribute("data-src") != undefined ? new WallpaperData(p.querySelector("figure")?.querySelector("a")?.getAttribute("href"), p.querySelector("figure")?.getAttribute("data-title"), `${WALLPAPERCOM_MAIN_API}${p.querySelector("figure")?.querySelector("img")?.getAttribute("data-src")}`, p.querySelector("figure")?.getAttribute("data-desc")?.replace("</p>", "")?.replace("<p>", "")) : null
          );
          picturesList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log(error);
        }
      })
    );
    return lists;
  }

  async latestPeakpx(): Promise<WallpaperData[]> {
    let lists: WallpaperData[] = [];

    await Promise.all(
      Array.from({ length: 6 }, (_, index) => index).map(async (page) => {
        if (page == 0) return;
        try {
          const response = await axios.get(PEAKPX_MAIN_API, { params: { page: 1 } });
          const data = await response.data;
          const root = parse(data);
          const links = root.querySelectorAll("#list_ul .grid");

          const picturesList = links.map((p) => (p.querySelector("link")?.getAttribute("href") != undefined ? new WallpaperData(p.querySelector("link")?.getAttribute("href"), p.querySelector("img")?.getAttribute("alt"), p.querySelector("img")?.getAttribute("alt"), p.querySelector("img")?.getAttribute("alt")) : null));
          picturesList?.filter((s) => s != undefined).map((item) => lists.push(item));
        } catch (error) {
          console.log(error);
        }
      })
    );
    return lists;
  }
}
