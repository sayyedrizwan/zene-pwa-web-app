import axios from "axios";
import { lastFMListeningSongs, lastFMLSearchArtists, lastFMURL } from "../../utils/Utils";
import type { TopLastFmChartData } from "./model/TopLastFmChartData";
import { parse } from "node-html-parser";
import { substringAfter, substringBefore } from "../../utils/extension/String"

export class LastFMService {
  static instance = new LastFMService();

  async topListeningArtists(): Promise<TopLastFmChartData | undefined> {
    try {
      const response = await axios.get(lastFMListeningSongs, { params: { type: "artist", tracks: 1, nr: 10, format: "json" } });
      return (await response.data) as TopLastFmChartData;
    } catch (error) {
      return undefined;
    }
  }

  async searchArtists(name: String): Promise<String> {
    try {
    //   const jar = new CookieJar();
    //   const client = wrapper(axios.create({ jar, withCredentials: true }));

      const response = await axios.get(lastFMLSearchArtists, { params: { q: name }, withCredentials: true, headers : { Host : 'www.last.fm'} })
    //   //console.log((sss).data)

    //   return "";
    //   const response = await axios.get(lastFMLSearchArtists, { params: { q: name } });
      const data = await response.data;
      const root = parse(data);

      let url = "";
      root.querySelectorAll(".artist-result-inner")?.forEach((html) => {
        let txt = html.querySelector("a")?.text;
        if (txt?.toLowerCase() == txt?.toLowerCase() && url == "") url = html.querySelector("a")?.getAttribute("href") ?? "";
      });
      return url;
    } catch (error) {
      return "";
    }
  }

  async searchImages(url: String, page: number): Promise<String[]> {
    try {
      const response = await axios.get(`${lastFMURL}${url}/+images`, { params: { page: page } });
      const data = await response.data;
      const root = parse(data);

      let list: String[] = [];

      root.querySelectorAll(".image-list-item-wrapper")?.forEach((html) => {
        const src = html.querySelector("img")?.getAttribute("src");
        if (src != undefined) list.push(`https://lastfm.freetls.fastly.net/i/u/${src.split("/").pop()}`);
      });
      return list;
    } catch (error) {
      return [];
    }
  }

  async topSongs(url: String): Promise<[String, String][]> {
    try {
      const response = await axios.get(`${lastFMURL}${url}/+tracks`, { params: { date_preset: "LAST_30_DAYS" } });
      const data = await response.data;
      const root = parse(data);

      let list: [String, String][] = [];
      root.querySelectorAll("tr")?.forEach((html) => {
        const name = html.querySelector(".chartlist-name")?.querySelector("a")?.text.trim();
        const listeners = html.querySelector(".chartlist-count-bar-value")?.text.trim();
        if (name != undefined) list.push([name, listeners?.replace("listeners", "").replaceAll(",", "").trim() ?? ""]);
      });
      return list;
    } catch (error) {
      return [];
    }
  }

  async wiki(url: String): Promise<String | undefined> {
    try {
      const response = await axios.get(`${lastFMURL}${url}/+wiki`);
      const data = await response.data;
      const textAfter = substringAfter(data, '<div class="wiki-content" itemprop="description">');
      const textBefore = substringBefore(textAfter, "</div></div>");
      const root = parse(textBefore.toString());
      return root.text;
    } catch (error) {
      return undefined;
    }
  }
}
