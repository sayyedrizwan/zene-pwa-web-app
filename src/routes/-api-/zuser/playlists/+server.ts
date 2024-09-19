import { heartbeatAPI, verifyHeader, zenePlaylistsParam } from "../../utils/Utils.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";
import { json } from "@sveltejs/kit";
import { ImgUploadService } from "../../ApiService/imgbb/ImgUploadService.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";

export async function GET({ request, url }) {
  heartbeatAPI("zuser-read-my-playlists");
  if (!verifyHeader(request)) return json([]);

  const email = url.searchParams.get("email") ?? "";
  if (!email.includes("@") && email.length < 3) return json([]);

  const page = url.searchParams.get("page") ?? 0;

  const list = await MongoDBLocalService.instance.readPlaylists(email, page as number);

  return json(list);
}

export async function POST({ request }) {
  heartbeatAPI("zuser-add-my-playlists");
  if (!verifyHeader(request)) return json({ status: "error" });

  const data = await request.formData();
  const image = data.get("image");
  const name = data.get("name") as String;
  const email = data.get("email") as String;
  const id = data.get("id");

  if (!email.includes("@") && email.length < 3) return json({ status: "error" });

  const saveID = id == null ? `${zenePlaylistsParam}${btoa(`${email}_${Date.now()}`)}` : (id as String);

  let photoURL: String = "";

  console.log("aaaaa")

  if (id != null) {
    const playlistInfo = await YoutubeMusicService.instance.playlistsData(id.toString());
    photoURL = playlistInfo[0]?.thumbnail ?? "";
  } else {
    photoURL = image == null ? "https://www.zenemusic.co/monthly-playlist.jpg" : await ImgUploadService.instance.uploadToBunnyNet(image, saveID);
  }

  if (photoURL == "") photoURL = "https://www.zenemusic.co/monthly-playlist.jpg";

  await MongoDBLocalService.instance.insertPlaylistHistory(name, photoURL, email, saveID, id == null ? false : true);

  return json({ status: "success" });
}
