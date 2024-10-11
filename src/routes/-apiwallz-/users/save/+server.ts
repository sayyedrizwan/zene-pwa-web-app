import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../../-api-/utils/Utils";
import { mysqlpoolWallz } from "../../utils/Utils";
import { WallzMySqlService } from "../../WallzApiService/MySQLService/WallzMySqlService";

export async function GET({ request, url }) {
  if (!verifyHeader(request)) return json({ status: "error" });

  const page = url.searchParams.get("page") ?? 0;
  const email = url.searchParams.get("email") ?? "";

  const list = await WallzMySqlService.instance.getSavedWallpapers(email, page as number);
  return json(list);
}
export async function POST({ request }) {
  if (!verifyHeader(request)) return json({ status: "error" });

  const body = await request.json();
  const email = body.email as string;
  const name = body.name as string;
  const id = body.id as string;
  const thumbnail = body.thumbnail as string;
  const desc = body.desc as string;
  const doSave = body.doSave as Boolean;

  if (!email.includes("@") && email.length < 3) json({ status: "error" });

  if (doSave) await WallzMySqlService.instance.saveWallpapers(email, name, id, thumbnail, desc);
  else await WallzMySqlService.instance.removeWallpapers(email, id);

  return json({ status: "success" });
}
