import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";
import { json } from "@sveltejs/kit";

export async function GET({ request, url }) {
  heartbeatAPI("zuser-get-song-history");
  if (!verifyHeader(request)) return json([]);

  const email = url.searchParams.get("email") ?? "";
  if (!email.includes("@") && email.length < 3) return json([]);

  const page = url.searchParams.get("page") ?? 0;
  console.log(email)

  const list = await MongoDBLocalService.instance.readSongHistory(email, page as number);
  console.log(list)
  return json(list);
}

export async function POST({ request }) {
  heartbeatAPI("zuser-add-song-history");
  if (!verifyHeader(request)) return json({ status: "error" });

  const body = await request.json();
  const email = body.email as string;
  const songID = body.songID as string;
  const device = body.device as string;

  if (!email.includes("@") && email.length < 3) return json({ status: "error" });

  const data = await MongoDBLocalService.instance.isSongAlreadyPresentDelete(songID, email);
  const songInfo = await YoutubeMusicService.instance.songInfo(songID);

  console.log('the email --- ' + email + " -- " + songID + "-- " + data)
  console.log('the email --- ' + email + " -- " + songID + "-- " + songInfo)

  const datas = await fetch("https://music.youtube.com/youtubei/v1/player?prettyPrint=false", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "priority": "u=1, i",
    },
    "referrer": "https://music.youtube.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"videoId\":\"N6_EvGT0ZfM\",\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"IN\",\"remoteHost\":\"183.87.181.70\",\"deviceMake\":\"Google\",\"deviceModel\":\"Nexus 5\",\"visitorData\":\"CgstTEJabjFPRE1JMCjxx4u2BjIKCgJJThIEGgAgWw%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB_REMIX\",\"clientVersion\":\"1.20240812.01.00\",\"osName\":\"Android\",\"osVersion\":\"6.0\",\"originalUrl\":\"https://music.youtube.com/\",\"screenPixelDensity\":2,\"platform\":\"MOBILE\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CPHHi7YGEKaTsQUQ5fSwBRDvzbAFEJPA_xIQop2xBRCYjbEFELfq_hIQqJOxBRDj0bAFENKwsQUQ9KuwBRCNlLEFEOK4sAUQlqOxBRDMgLAFEKKBsAUQ6sOvBRCd0LAFEL2ZsAUQha6xBRCKsLEFEKXC_hIQsO6wBRDGpLEFEI60sQUQt--vBRCa8K8FENPhrwUQqJKxBRD8hbAFEKiasAUQiOOvBRCUibEFEJDGsAUQ68P_EhAAEIiHsAUQ1YiwBRDJ5rAFEPOisQUQ6-j-EhCZmLEFEL22rgUQ1t2wBRCmkrEFEJGusQUQlpWwBRCq2LAFEL2KsAUQ-KuxBRDQjbAFEP-IsQUQ2cmvBRCU_rAFELSgsQUQ3ej-EhDM364FEIu0sQUQg7n_EhDrmbEFEParsAUQyfevBRD4tLEFEJy0_xIQrYyxBRCgs7EFKhRDQU1TQ3hVQW9MMndETkhrQmgwSA%3D%3D\"},\"screenDensityFloat\":2,\"browserName\":\"Chrome Mobile\",\"browserVersion\":\"127.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"deviceExperimentId\":\"ChxOelF3TkRjek1UTTJNamcyTVRnek5USTJNQT09EPHHi7YGGPHHi7YG\",\"screenWidthPoints\":375,\"screenHeightPoints\":726,\"utcOffsetMinutes\":330,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"connectionType\":\"CONN_CELLULAR_4G\",\"timeZone\":\"Asia/Calcutta\",\"playerType\":\"UNIPLAYER\",\"tvAppInfo\":{\"livingRoomAppMode\":\"LIVING_ROOM_APP_MODE_UNSPECIFIED\"},\"clientScreen\":\"WATCH_FULL_SCREEN\"},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clientScreenNonce\":\"PX4K2n1W3hvs-OkQ\",\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1724048371085\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"330\"},{\"key\":\"u_his\",\"value\":\"2\"},{\"key\":\"u_h\",\"value\":\"726\"},{\"key\":\"u_w\",\"value\":\"375\"},{\"key\":\"u_ah\",\"value\":\"726\"},{\"key\":\"u_aw\",\"value\":\"375\"},{\"key\":\"u_cd\",\"value\":\"30\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"726\"},{\"key\":\"biw\",\"value\":\"375\"},{\"key\":\"brdim\",\"value\":\"0,0,0,0,375,0,375,726,375,726\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]},\"clickTracking\":{\"clickTrackingParams\":\"CNcDEMn0AhgBIhMIuaqs1bSAiAMV0dc8Ah3qnzHGSPPL0afGl_HXNw==\"}},\"playbackContext\":{\"contentPlaybackContext\":{\"html5Preference\":\"HTML5_PREF_WANTS\",\"lactMilliseconds\":\"37\",\"referer\":\"https://music.youtube.com/\",\"signatureTimestamp\":19949,\"autoCaptionsDefaultOn\":false,\"mdxContext\":{},\"vis\":10}},\"cpn\":\"M7f0LnQKKPUYlMtq\",\"captionParams\":{},\"serviceIntegrityDimensions\":{\"poToken\":\"MnTJ8KSVpUQKVsnI5mf2ez5VE8bC9exb5nueuCNTpl8Cn-yJxWtWZn7QFelbPEzQ8BHW6G552y1pSx9xoMyJiaE-koCzLDWqV0v2PtUHPzrkttjnLsaC4Ifo_ZaV7A2FPuOMd_Jsl0HNkepRLfOzFMKWRKe-DA==\"}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  console.log(await datas.json())

  
  if (songInfo != undefined) {
    console.log('the email ---  1111' + email + " -- " + songID + "-- " + data)
    if (data == null) await MongoDBLocalService.instance.updateOrInsertSongHistory(songInfo, email, device, 1);
    else await MongoDBLocalService.instance.updateOrInsertSongHistory(songInfo, email, device, (data.timesItsPlayed as number) + 1);
  } else {
    console.log('the email ---  22222' + email + " -- " + songID + "-- " + data)
  }
  await MongoDBLocalService.instance.deleteOldSongHistory(email);
  return json({ status: "success" });
}
