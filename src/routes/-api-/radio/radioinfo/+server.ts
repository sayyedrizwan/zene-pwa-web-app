import { json } from "@sveltejs/kit";
import { RadioAPIService } from "../../ApiService/radio/RadioAPIService.js";
import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";

export async function GET({ request, url }) {
  heartbeatAPI("radio-info");
  if (!verifyHeader(request)) return json({});

  const id = url.searchParams.get("id") ?? "";
  const radios = await RadioAPIService.instance.radioInfo(id);
  return json(radios == undefined ? {} : radios);
}
