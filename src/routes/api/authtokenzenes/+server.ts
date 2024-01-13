import { generateAPIKey } from "../utils/EncryptionForAPI";
import { json, type RequestEvent } from "@sveltejs/kit";
import { apiError } from "../utils/utils";

export async function POST(events: RequestEvent) {
  try {
    return json({key: generateAPIKey() });
  } catch (error) {
    return json(apiError);
  }
}
