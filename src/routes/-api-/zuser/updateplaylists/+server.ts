import { heartbeatAPI, verifyHeader, zenePlaylistsParam } from "../../utils/Utils.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";
import { json } from "@sveltejs/kit";
import { ImgUploadService } from "../../ApiService/imgbb/ImgUploadService.js";
import { YoutubeMusicService } from "../../ApiService/youtubemusic/YoutubeMusicService.js";

export async function GET({ request }) {
  const playlists = await MongoDBLocalService.instance.getSavedPlaylistsTemps();
  await Promise.all(playlists.map(async (n) => {
    const playlistInfo = await YoutubeMusicService.instance.playlistsData(n.id.toString());
    console.log(playlistInfo[0]?.thumbnail)
    console.log(n.email)
    console.log(n.id)
    if (playlistInfo[0]?.thumbnail != undefined) {
      await MongoDBLocalService.instance.updateInfoPlaylistsThumbnails(playlistInfo[0]?.thumbnail, n.email, n.id);
    }
  }));

  // const data = await request.formData();
  // const image = data.get("image");
  // const name = data.get("name") as String;
  // const email = data.get("email") as String;
  // const id = data.get("id");

  // if (!email.includes("@") && email.length < 3) return json({ status: "error" });

  // const saveID = id == null ? `${zenePlaylistsParam}${btoa(`${email}_${Date.now()}`)}` : (id as String);

  // let photoURL: String = "";

  // if (id != null) {
  //   const playlistInfo = await YoutubeMusicService.instance.playlistsData(id.toString());
  //   photoURL = playlistInfo[0]?.thumbnail ?? "";
  // } else {
  //   photoURL = image == null ? "https://i.ibb.co/1Xf9DkT/monthly-playlist.jpg" : await ImgUploadService.instance.uploadToBunnyNet(image, saveID);
  // }

  // if (photoURL == "") photoURL = "https://i.ibb.co/1Xf9DkT/monthly-playlist.jpg";
  // await MongoDBLocalService.instance.insertPlaylistHistory(name, photoURL, email, saveID, id != null);

  return json({ status: playlists.length });
}
