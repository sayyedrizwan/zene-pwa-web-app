import { json } from "@sveltejs/kit";
import { MySqlLocalService } from "../../ApiService/dbmysql/MySqlLocalService";

export async function GET() {
  await MySqlLocalService.instance.delteAllTempData();
  return json({});
}
