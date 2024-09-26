import { RadioAPIService } from "../../-api-/ApiService/radio/RadioAPIService.js";

export async function load({ params }) {
  const data = await RadioAPIService.instance.radioInfo(params.id)
  if(data?.id == null) return { data: JSON.stringify(data), url: params.id }
  
  return { data: JSON.stringify(data), url: params.id }
}
