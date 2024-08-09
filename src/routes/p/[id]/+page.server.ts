import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js";
import { YoutubeMusicService } from "../../-api-/ApiService/youtubemusic/YoutubeMusicService.js";
import { MongoDBLocalService } from "../../-api-/ApiService/dbmongo/MongoDBLocalService.js";
import { MusicData, MUSICTYPE } from "../../-api-/ApiService/model/MusicData.js";

export async function load({ params }) {
  const id = await decryptSharingData(params.id)
 
  if(id.includes("zene_p_")) {
    const data = await MongoDBLocalService.instance.getUserPlaylistDetails(id)
    if (data == undefined) return { data: JSON.stringify("{}"), url: params.id }
    const m = new MusicData(data.name, "Playlist By User", "", data.img, MUSICTYPE.PLAYLIST)
    return { data: JSON.stringify(m), url: params.id };
  }

  const playlists = await YoutubeMusicService.instance.playlistsData(id);
  const data = playlists[0];
  if (data == undefined) return { data: JSON.stringify("{}"), url: params.id };
  data.id = ""

  return { data: JSON.stringify(data), url: params.id };
}
