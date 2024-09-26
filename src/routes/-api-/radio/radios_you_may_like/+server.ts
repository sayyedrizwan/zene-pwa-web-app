import { json } from "@sveltejs/kit";
import { RadioAPIService } from "../../ApiService/radio/RadioAPIService.js";
import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";

export async function POST({ request }) {
  heartbeatAPI("radio-radios_you_may_like");
  if (!verifyHeader(request)) return json([]);

  const body = await request.json();
  const countryID = body.countryID;
  
  const radios = await RadioAPIService.instance.radioForCountriesViaTrend(countryID, 0);
 
  return json(radios);
}
