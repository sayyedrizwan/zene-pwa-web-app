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
      "x-origin": "https://music.youtube.com",
    },
    "referrer": "https://music.youtube.com/playlist?list=OLAK5uy_npX6pS9P8FMRRw0IOKLPOClTYDkGKktKM",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"videoId\":\"vRkSjkGkhbE\",\"context\":{\"client\":{\"hl\":\"en-GB\",\"gl\":\"IN\",\"remoteHost\":\"183.87.181.70\",\"deviceMake\":\"Google\",\"deviceModel\":\"Nexus 5\",\"visitorData\":\"CgtxTzlJcVkxazAwbyjXxIu2BjIKCgJJThIEGgAgHw%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB_REMIX\",\"clientVersion\":\"1.20240812.01.00\",\"osName\":\"Android\",\"osVersion\":\"6.0\",\"originalUrl\":\"https://music.youtube.com/watch?v=1-nnEM8chwo&list=OLAK5uy_l8PeK6mu0pwp8zb3wnMVYNvlo87FSfjuU\",\"screenPixelDensity\":2,\"platform\":\"MOBILE\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CNfEi7YGEI60sQUQ-KuxBRCDuf8SEMT1sAUQvoqwBRCIh7AFEMnmsAUQmI2xBRCok7EFEOvo_hIQ782wBRClwv4SEKiasAUQvbauBRC9mbAFEOvD_xIQka6xBRDT4a8FEKaSsQUQqJKxBRD2q7AFEKaTsQUQ9KuwBRDW3bAFEJiLsQUQ_IWwBRDiuLAFEAAQ8ZywBRDl9LAFEOrDrwUQt-r-EhCZmLEFEMn3rwUQ3ej-EhCw7rAFENCNsAUQop2xBRCa8K8FELSgsQUQooGwBRCWlbAFEOuZsQUQirCxBRCFrrEFENGwsQUQi7SxBRD_iLEFEJajsQUQ49GwBRCNlLEFEIjjrwUQqtiwBRCU_rAFEJDGsAUQ1YiwBRDZya8FELfvrwUQlImxBRCe0LAFEMWksQUQzN-uBRCetP8SEKGzsQUqHENBTVNEeFVNb0wyd0ROSGtCdWpLLUFzZEJ3PT0%3D\"},\"screenDensityFloat\":2,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"timeZone\":\"Asia/Calcutta\",\"browserName\":\"Chrome Mobile\",\"browserVersion\":\"127.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"deviceExperimentId\":\"ChxOelF3TkRjeU9UWXdNakEzTURjeU9UQTNNZz09ENfEi7YGGNfEi7YG\",\"screenWidthPoints\":375,\"screenHeightPoints\":726,\"utcOffsetMinutes\":330,\"connectionType\":\"CONN_CELLULAR_4G\",\"playerType\":\"UNIPLAYER\",\"tvAppInfo\":{\"livingRoomAppMode\":\"LIVING_ROOM_APP_MODE_UNSPECIFIED\"},\"clientScreen\":\"WATCH_FULL_SCREEN\"},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clientScreenNonce\":\"UTC_-xT89sbsG0V7\",\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1724047960410\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"330\"},{\"key\":\"u_his\",\"value\":\"19\"},{\"key\":\"u_h\",\"value\":\"726\"},{\"key\":\"u_w\",\"value\":\"375\"},{\"key\":\"u_ah\",\"value\":\"726\"},{\"key\":\"u_aw\",\"value\":\"375\"},{\"key\":\"u_cd\",\"value\":\"30\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"726\"},{\"key\":\"biw\",\"value\":\"375\"},{\"key\":\"brdim\",\"value\":\"0,0,0,0,375,0,375,726,375,726\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}],\"bid\":\"ANyPxKr1_AX7_VRLwgZTaFa-L4uTv9YClPYiOmfx9gx3XqlusKgM12-FBwp6ge6TbiKPEAIhLrEvjWCeI_c9zVMNbLBiYTAPuQ\"},\"clickTracking\":{\"clickTrackingParams\":\"CBUQyfQCGAAiEwjf5rWXs4CIAxUZjtgFHfJWMuZIsYuSjeTRxIy9AQ==\"}},\"playbackContext\":{\"contentPlaybackContext\":{\"html5Preference\":\"HTML5_PREF_WANTS\",\"lactMilliseconds\":\"72\",\"referer\":\"https://music.youtube.com/playlist?list=OLAK5uy_npX6pS9P8FMRRw0IOKLPOClTYDkGKktKM\",\"signatureTimestamp\":19949,\"autoCaptionsDefaultOn\":false,\"mdxContext\":{},\"playerWidthPixels\":48,\"playerHeightPixels\":48,\"vis\":1}},\"cpn\":\"lk9eKJ89GKHSNTxo\",\"playlistId\":\"OLAK5uy_npX6pS9P8FMRRw0IOKLPOClTYDkGKktKM\",\"captionParams\":{},\"serviceIntegrityDimensions\":{\"poToken\":\"Mlss8R0r6rbpjizJP6KSa-49K5q6-twJs0zD-mSuyMQSwUbf9E9yHMftq8XQAc_fA5QdiSOnyB6jtZN_9pjN7_Heyj7sxuvRFAwPQ9pTHbKmGLHW2jRNjXndaJTa\"}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })

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
