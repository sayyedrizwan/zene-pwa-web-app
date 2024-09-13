import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js";
import { YoutubeMusicService } from "../../-api-/ApiService/youtubemusic/YoutubeMusicService.js";
import { MongoDBLocalService } from "../../-api-/ApiService/dbmongo/MongoDBLocalService.js";
import { MusicData, MUSICTYPE } from "../../-api-/ApiService/model/MusicData.js";
import { e_mail_info } from "$lib/utils/Cookies.js";
import { decryptWebInfo } from "../../-api-/utils/Utils.js";

export async function load({ params, cookies }) {
  const id = await decryptSharingData(params.id);

  const emailData = cookies.get(e_mail_info);
  let email = decryptWebInfo(emailData ?? "");
  if (id.includes("zene_p_")) {
    const data = await MongoDBLocalService.instance.getUserPlaylistDetails(id);
    if (data == undefined) return { data: JSON.stringify("{}"), url: params.id };
    const m = new MusicData(data.name, "Playlist By User", "", data.img, MUSICTYPE.PLAYLIST);
    return { data: JSON.stringify(m), url: params.id, id: id, email: email };
  }

  const playlists = await YoutubeMusicService.instance.playlistsData(id);
  const data = playlists[0];
  if (data == undefined) return { data: JSON.stringify("{}"), url: params.id, id: id, email: email };
  data.id = "";

  return { data: JSON.stringify(data), url: params.id, id: id, email: email };
}
