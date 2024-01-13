import { decryptAPIKeyAndIsValid } from "../utils/EncryptionForAPI";
import { json, type RequestEvent } from "@sveltejs/kit";
import { apiError, authKeyError, lastfm_top_playing_songs } from "../utils/utils";

export async function POST(events: RequestEvent) {
  if (!decryptAPIKeyAndIsValid(events)) {
    return json(authKeyError)
  }

  try {
    const response = await fetch(lastfm_top_playing_songs);
    const data = await response.json();
    return json(data);
  } catch (error) {
    return json(apiError);
  }
}
