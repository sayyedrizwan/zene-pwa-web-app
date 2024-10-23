import { heartbeatAPI, verifyHeader, zenePlaylistsParam } from "../../utils/Utils.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  heartbeatAPI("zuser-liked-songs");
  if (!verifyHeader(request)) return json({ isLiked: false });

  const body = await request.json();
  const email = body.email as String;
  const id = body.songID as String;

  if (!email.includes("@") && email.length < 3) return json({ isLiked: false });

  const liked = await MongoDBLocalService.instance.isLikedSong(id, email);
  return json({ isLiked: liked });
}
