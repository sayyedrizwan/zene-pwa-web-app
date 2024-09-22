import { json } from "@sveltejs/kit";
import { RadioAPIService } from "../../ApiService/radio/RadioAPIService.js";
import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";

export async function POST({ request }) {
  heartbeatAPI("radio-top");
  if (!verifyHeader(request)) return json([]);

  const body = await request.json();
  const countryID = body.countryID;
  const language = body.language;
  
  const radios = await RadioAPIService.instance.allRadioByLanguages(language, countryID);
  return json(radios);
}
