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
    headers: {
      authorization: "SAPISIDHASH 1724051056_4c7e243f3c8276d3701fa53546935f2482761292",
      "content-type": "application/json",
      "sec-ch-ua": '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
      "sec-ch-ua-arch": '""',
      "sec-ch-ua-bitness": '"64"',
      "sec-ch-ua-form-factors": "",
      "sec-ch-ua-full-version": '"127.0.6533.120"',
      "sec-ch-ua-full-version-list": '"Not)A;Brand";v="99.0.0.0", "Google Chrome";v="127.0.6533.120", "Chromium";v="127.0.6533.120"',
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-model": '"Nexus 5"',
      "sec-ch-ua-platform": '"Android"',
      "sec-ch-ua-platform-version": '"6.0"',
      "sec-ch-ua-wow64": "?0",
      "x-goog-authuser": "0",
      "x-goog-visitor-id": "CgtxTzlJcVkxazAwbyi414u2BjIKCgJJThIEGgAgHw%3D%3D",
      "x-origin": "https://music.youtube.com",
      "x-youtube-bootstrap-logged-in": "true",
      "x-youtube-client-name": "67",
      "x-youtube-client-version": "1.20240812.01.00",
    },
    referrer: "https://music.youtube.com/search?q=cruel+summer",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify({
      videoId: "bO5mu4xLJbk",
      context: {
        client: {
          hl: "en-GB",
          gl: "IN",
          remoteHost: "183.87.181.70",
          deviceMake: "Apple",
          deviceModel: "",
          visitorData: "CgtxTzlJcVkxazAwbyi414u2BjIKCgJJThIEGgAgHw%3D%3D",
          userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36,gzip(gfe)",
          clientName: "WEB_REMIX",
          clientVersion: "1.20240812.01.00",
          osName: "Macintosh",
          osVersion: "10_15_7",
          originalUrl: "https://music.youtube.com/",
          screenPixelDensity: 2,
          platform: "DESKTOP",
          clientFormFactor: "UNKNOWN_FORM_FACTOR",
          configInfo: {
            appInstallData:
              "CLjXi7YGEL2ZsAUQmIuxBRD4q7EFEOX0sAUQppKxBRDRsLEFEAAQqJqwBRDiuLAFEIqwsQUQvbauBRD8hbAFEJGusQUQ9KuwBRCUibEFEOPRsAUQjrSxBRCU_rAFEOuTrgUQ6-j-EhDM364FEIWusQUQyfevBRCmk7EFEIjjrwUQmZixBRCIh7AFENbdsAUQmI2xBRDFpLEFEKrYsAUQg7n_EhDd6P4SEP-IsQUQqJOxBRClwv4SEJO2sQUQvoqwBRDrw_8SEKKBsAUQ9quwBRC36v4SEPGcsAUQmvCvBRCe0LAFEOuZsQUQyeawBRDQjbAFEKKdsQUQt--vBRCWo7EFENnJrwUQjZSxBRDE9bAFEO_NsAUQkMawBRCokrEFELDusAUQ6sOvBRDT4a8FELSgsQUQi7SxBRCWlbAFENWIsAUQnrT_EhChs7EFKhxDQU1TRHhVTW9MMndETkhrQnVqSy1Bc2RCdz09",
          },
          screenDensityFloat: 2,
          userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
          timeZone: "Asia/Calcutta",
          browserName: "Chrome",
          browserVersion: "127.0.0.0",
          acceptHeader: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          deviceExperimentId: "ChxOelF3TkRjek9Ua3hORFkwTnpZME1UTTVOQT09ELjXi7YGGLjXi7YG",
          screenWidthPoints: 375,
          screenHeightPoints: 726,
          utcOffsetMinutes: 330,
          connectionType: "CONN_CELLULAR_4G",
          playerType: "UNIPLAYER",
          tvAppInfo: {
            livingRoomAppMode: "LIVING_ROOM_APP_MODE_UNSPECIFIED",
          },
          clientScreen: "WATCH_FULL_SCREEN",
        },
        user: {
          lockedSafetyMode: false,
        },
        request: {
          useSsl: true,
          internalExperimentFlags: [],
          consistencyTokenJars: [],
        },
        clientScreenNonce: "fp1LmldBM1PYl4xH",
        adSignalsInfo: {
          params: [
            { key: "dt", value: "1724050361388" },
            { key: "flash", value: "0" },
            { key: "frm", value: "0" },
            { key: "u_tz", value: "330" },
            { key: "u_his", value: "27" },
            { key: "u_h", value: "726" },
            { key: "u_w", value: "375" },
            { key: "u_ah", value: "726" },
            { key: "u_aw", value: "375" },
            { key: "u_cd", value: "30" },
            { key: "bc", value: "31" },
            { key: "bih", value: "726" },
            { key: "biw", value: "375" },
            { key: "brdim", value: "0,0,0,0,375,0,375,726,375,726" },
            { key: "vis", value: "1" },
            { key: "wgl", value: "true" },
            { key: "ca_type", value: "image" },
          ],
          bid: "ANyPxKp_Hxma-vt5tbjpbZAjQrfV1XFcC6hfqbvWJaQZp0uvZuHRQTzSYO_cvfHVBb9ZLR-lSGvJCVIi8aBgbqSvffkgISeKIg",
        },
        clickTracking: {
          clickTrackingParams: "CK0CEMjeAiITCN7_kJW8gIgDFT8ttwAdGL0NcQ==",
        },
      },
      playbackContext: {
        contentPlaybackContext: {
          html5Preference: "HTML5_PREF_WANTS",
          lactMilliseconds: "42",
          referer: "https://music.youtube.com/search?q=cruel+summer",
          signatureTimestamp: 19949,
          autoCaptionsDefaultOn: false,
          mdxContext: {},
          vis: 1,
        },
      },
      cpn: "lqxh7Jb2bIFMXOMS",
      captionParams: {},
      serviceIntegrityDimensions: {
        poToken: "Mlv9vCXmt0_T-v2Em-_b2PqIx3CQ2M3H44DAslA9bl3vPoR3uOQxgasa1edkPoeieMYHmnyyFIsjolTLtVJ94qYAFiYuOQ-L_boNc6b62TioYL0F3ClgVVRYE6xY",
      },
    }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });

  console.log((await datas.json()) as YTMusicSongsDetails);

  const data = await YoutubeMusicService.instance.songInfo(s);
  if (data == undefined) return json({});
  return json(data);
}
