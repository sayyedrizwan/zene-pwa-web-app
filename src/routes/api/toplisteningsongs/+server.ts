import { decryptAPIKeyAndIsValid, decryptData, encryptData, generateAPIKey } from "$lib/utils/EncryptionForAPI";
import { json, type RequestEvent } from "@sveltejs/kit";
import { authKeyError } from "../utils";

export async function POST(events: RequestEvent) {
  if(!decryptAPIKeyAndIsValid(events)){
    return json(authKeyError)
  }
  
  const v = generateAPIKey()
  console.log(v)
  return new Response(decryptAPIKeyAndIsValid(events).toString());
}
