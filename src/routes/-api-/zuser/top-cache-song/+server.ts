import { json } from "@sveltejs/kit";
import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";
import { MongoDBLocalService } from "../../ApiService/dbmongo/MongoDBLocalService.js";

export async function POST({ request }) {
  heartbeatAPI("zuser-add-user");
  if (!verifyHeader(request)) return json({ status: "error" });

  const body = await request.json();
  const email = body.email as string;
  if (!email.includes("@") && email.trim().length <= 2) return json({})

  const songs = await MongoDBLocalService.instance.topFifteenSongsOfUsers(email);
  const artists = await MongoDBLocalService.instance.topFifteenArtistsOfUsers(email);

  return json({ songs: songs, artists: artists });
}
