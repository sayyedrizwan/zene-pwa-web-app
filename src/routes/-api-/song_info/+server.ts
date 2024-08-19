import { json } from "@sveltejs/kit";
import { heartbeatAPI, verifyHeader } from "../utils/Utils.js";
import axios from "axios";
import { parse } from "node-html-parser";
import { substringBeforeLast } from "../utils/extension/String.js";
import { YoutubeMusicService } from "../ApiService/youtubemusic/YoutubeMusicService.js";
import type { YTMusicSongsDetails } from "../ApiService/youtubemusic/model/YTMusicSongsDetails.js";

export async function GET({ url, request }) {
  heartbeatAPI("song-info");
  if (!verifyHeader(request)) return json([]);
  const s = url.searchParams.get("id") ?? "";
  if (s == "") return json([]);

  const datas = await fetch("https://music.youtube.com/youtubei/v1/player?prettyPrint=false", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
      "sec-ch-ua-arch": "\"\"",
      "sec-ch-ua-bitness": "\"64\"",
      "sec-ch-ua-form-factors": "",
      "sec-ch-ua-full-version": "\"127.0.6533.120\"",
      "sec-ch-ua-full-version-list": "\"Not)A;Brand\";v=\"99.0.0.0\", \"Google Chrome\";v=\"127.0.6533.120\", \"Chromium\";v=\"127.0.6533.120\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-model": "\"Nexus 5\"",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-ch-ua-platform-version": "\"6.0\"",
      "sec-ch-ua-wow64": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-goog-visitor-id": "CgstTEJabjFPRE1JMCiQ4Iu2BjIKCgJJThIEGgAgWw%3D%3D",
      "x-youtube-bootstrap-logged-in": "false",
      "x-youtube-client-name": "67",
      "x-youtube-client-version": "1.20240812.01.00"
    },
    "referrer": "https://music.youtube.com/watch?v=bO5mu4xLJbk",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"videoId\":\"bO5mu4xLJbk\",\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"IN\",\"remoteHost\":\"183.87.181.70\",\"deviceMake\":\"Google\",\"deviceModel\":\"Nexus 5\",\"visitorData\":\"CgstTEJabjFPRE1JMCiQ4Iu2BjIKCgJJThIEGgAgWw%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB_REMIX\",\"clientVersion\":\"1.20240812.01.00\",\"osName\":\"Android\",\"osVersion\":\"6.0\",\"originalUrl\":\"https://music.youtube.com/watch?v=bO5mu4xLJbk\",\"screenPixelDensity\":2,\"platform\":\"MOBILE\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CJDgi7YGEJajsQUQppKxBRDiuLAFENnJrwUQlImxBRDT4a8FEAAQqtiwBRDViLAFEL22rgUQ49GwBRC9irAFEO_NsAUQyfevBRC3768FELSgsQUQvZmwBRCRrrEFEOuZsQUQt-r-EhCNlLEFEMnmsAUQzICwBRD2q7AFEKiTsQUQkMawBRDd6P4SEIO5_xIQmvCvBRD8hbAFEOrDrwUQiIewBRComrAFEMzfrgUQmZixBRD_iLEFEI60sQUQ0I2wBRDGpLEFELDusAUQk8D_EhDW3bAFEIqwsQUQ0rCxBRCI468FEOX0sAUQooGwBRClwv4SEOvo_hIQlpWwBRCU_rAFEPOisQUQmI2xBRCLtLEFEKiSsQUQ-KuxBRCd0LAFEPSrsAUQ68P_EhCmk7EFEPi0sQUQha6xBRCinbEFEJy0_xIQoLOxBRCtjLEFKhRDQU1TQ3hVQW9MMndETkhrQmgwSA%3D%3D\"},\"screenDensityFloat\":2,\"browserName\":\"Chrome Mobile\",\"browserVersion\":\"127.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"deviceExperimentId\":\"ChxOelF3TkRjME5EWTRPVEExT0RJNU1qTXhOdz09EJDgi7YGGJDgi7YG\",\"screenWidthPoints\":375,\"screenHeightPoints\":726,\"utcOffsetMinutes\":330,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"connectionType\":\"CONN_CELLULAR_4G\",\"timeZone\":\"Asia/Calcutta\",\"playerType\":\"UNIPLAYER\",\"tvAppInfo\":{\"livingRoomAppMode\":\"LIVING_ROOM_APP_MODE_UNSPECIFIED\"},\"clientScreen\":\"WATCH_FULL_SCREEN\"},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clientScreenNonce\":\"pdErwEL4JZskRfab\",\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1724051473012\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"330\"},{\"key\":\"u_his\",\"value\":\"2\"},{\"key\":\"u_h\",\"value\":\"726\"},{\"key\":\"u_w\",\"value\":\"375\"},{\"key\":\"u_ah\",\"value\":\"726\"},{\"key\":\"u_aw\",\"value\":\"375\"},{\"key\":\"u_cd\",\"value\":\"30\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"726\"},{\"key\":\"biw\",\"value\":\"375\"},{\"key\":\"brdim\",\"value\":\"0,0,0,0,375,0,375,726,375,726\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]},\"clickTracking\":{\"clickTrackingParams\":\"IhMIkv3FnMCAiAMVmCy3AB2hzBGVMghleHRlcm5hbA==\"}},\"playbackContext\":{\"contentPlaybackContext\":{\"html5Preference\":\"HTML5_PREF_WANTS\",\"lactMilliseconds\":\"365\",\"referer\":\"https://music.youtube.com/watch?v=bO5mu4xLJbk\",\"signatureTimestamp\":19949,\"autoCaptionsDefaultOn\":false,\"mdxContext\":{},\"vis\":10}},\"cpn\":\"pUfgXPgVJsMBvdpE\",\"params\":\"igMDCNgEoAME\",\"captionParams\":{}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  // console.log((await datas.json()) as YTMusicSongsDetails);

  // const data = await YoutubeMusicService.instance.songInfo(s);
  if (datas == undefined) return json({});
  return json((await datas.json()) as YTMusicSongsDetails);
}
