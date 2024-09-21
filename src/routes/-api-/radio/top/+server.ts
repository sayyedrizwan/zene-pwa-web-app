import { json } from "@sveltejs/kit";
import { RadioAPIService } from "../../ApiService/radio/RadioAPIService.js";
import { heartbeatAPI, verifyHeader } from "../../utils/Utils.js";
import { MoodplaylistDataItems } from "../../ApiService/model/MoodplaylistData.js";

export async function POST({ request }) {
  heartbeatAPI("radio-top");
  if (!verifyHeader(request)) return json([]);

  const body = await request.json();
  const countryID = body.countryID;

  const lists: MoodplaylistDataItems[] = [];


  const radios = await RadioAPIService.instance.trendingClickcountRadio(countryID, 0);
  lists.push(new MoodplaylistDataItems("Trending Now", radios));


  await Promise.all(
    ["music", "news", "radio", "pop", "hits", "religious"].map(async (n) => {
      const titleName = n == "music" ? "Music FM" : n == "news" ? "News Channels" : n == "radio" ? "Radios" : n == "pop" ? "Pop Music" : n == "hits" ? "Top Hits": n == "religious" ? "Religious FM" : "" 
      const radios = await RadioAPIService.instance.categoriesRadio(n, countryID, 0);
      lists.push(new MoodplaylistDataItems(titleName, radios));
    })
  );
 
  return json(lists);
}
