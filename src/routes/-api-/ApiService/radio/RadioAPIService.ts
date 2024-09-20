import axios from "axios";
import dns from "dns";
import util from "util";
import { timeDifferenceInHours, zeneFMThumbnail } from "../../utils/Utils";
import type { RadioItemResponse } from "./model/RadioItemResponse";
import { MusicData, MUSICTYPE } from "../model/MusicData";
const resolveSrv = util.promisify(dns.resolveSrv);

let radioURL: string | undefined = undefined;
let radioURLTime: number | undefined = undefined;

const radioLimit = 50;

export class RadioAPIService {
  static instance = new RadioAPIService();

  async categoriesRadio(name: String, countryCode: String, page: number): Promise<MusicData[]> {
    try {
      let baseURL = await this.getBaseURL();

      const response = await axios.get(`${baseURL}/json/stations/search`, { params: { offset: page * radioLimit, limit: radioLimit, tagList: name, hidebroken: true, order: "votes", reverse: true, countrycode: countryCode } });
      const data = (await response.data) as RadioItemResponse;
      const lists = data.map((r) => new MusicData(r.name ?? "", r.language ?? r.tags ?? "", r.stationuuid ?? "", (r.favicon ?? "").length > 3 ? r.favicon ?? "" : zeneFMThumbnail, MUSICTYPE.RADIO, r.url_resolved ?? ""))

      return lists;
    } catch (error) {
      return [];
    }
  }

  private async getBaseURL(): Promise<string> {
    if (radioURL != undefined || radioURLTime != undefined) {
      if (timeDifferenceInHours(radioURLTime!) <= 1) return radioURL!;
    }

    const hosts = await resolveSrv("_api._tcp.radio-browser.info");
    hosts.sort();
    const browserBaseURL = hosts.map((host) => "https://" + host.name);
    let fastestURL = null;

    for (let url of browserBaseURL) {
      const result = await measureResponseTime(url);
      if (!fastestURL || result.time < fastestURL.time) fastestURL = result;
    }

    radioURL = fastestURL?.url;
    radioURLTime = Date.now();
    return radioURL ?? "https://de1.api.radio-browser.info/";
  }
}

async function measureResponseTime(url: string) {
  const start = Date.now();
  try {
    await axios.get(url);
    const timeTaken = Date.now() - start;
    return { url, time: timeTaken };
  } catch (error) {
    return { url, time: Number.MAX_SAFE_INTEGER };
  }
}
