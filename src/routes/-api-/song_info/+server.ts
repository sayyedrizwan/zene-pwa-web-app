import { json } from "@sveltejs/kit";
import { heartbeatAPI, verifyHeader } from "../utils/Utils.js";
import axios from "axios";
import { parse } from "node-html-parser";
import { substringBeforeLast } from "../utils/extension/String.js";

export async function GET({ url, request }) {
  heartbeatAPI("song-info");
  if (!verifyHeader(request)) return json([]);
  const s = url.searchParams.get("id") ?? "";
  if (s == "") return json([]);

  const response = await axios.get(`https://music.youtube.com/watch?v=${s}`);
  const data = (await response.data) as string;
  const root = parse(data);

  const artistsTags = root.querySelectorAll('meta[property="og:video:tag"]');
  const videoTags = Array.from(artistsTags).map((tag) => tag.getAttribute("content"));

  let artistsName;
  let songName;

  if (videoTags.length === 1) artistsName = videoTags[0];
  else if (videoTags.length > 1) {
    const allExceptLast = videoTags.slice(0, -1);
    if (allExceptLast.length > 1) artistsName = allExceptLast.slice(0, -1).join(", ") + " & " + allExceptLast[allExceptLast.length - 1];
    else artistsName = allExceptLast[0];
  } else artistsName = "";

  if (videoTags.length >= 1) {
    songName = videoTags[videoTags.length - 1]
  } else {

  }

  console.log(substringBeforeLast(root.querySelector('meta[property="og:title"]')?.getAttribute("content") ?? "", "- YouTube Music").trim())

  console.log(songName);
  console.log(artistsName);

  // const data = await YoutubeMusicService.instance.songInfo(s);
  if (data == undefined) return json({});
  return json(data);
}
