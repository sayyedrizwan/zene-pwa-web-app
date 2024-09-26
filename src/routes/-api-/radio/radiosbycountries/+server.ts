import { json } from "@sveltejs/kit";
import { RadioAPIService } from "../../ApiService/radio/RadioAPIService.js";
import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";

export async function POST({ request }) {
  heartbeatAPI("radio-radiosbycountries");
  if (!verifyHeader(request)) return json([]);

  const body = await request.json();
  const countryID = body.countryID;
  const page = body.page;
  
  const radios = await RadioAPIService.instance.radioForCountriesViaTrend(countryID, page);
  return json(radios);
}
