import { json } from "@sveltejs/kit";
import { RadioAPIService } from "../../ApiService/radio/RadioAPIService.js";
import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";

export async function GET({ request }) {
  heartbeatAPI("radio-languages");
  if (!verifyHeader(request)) return json([]);

  const lists = await RadioAPIService.instance.allCountriesLists();
  return json(lists);
}
