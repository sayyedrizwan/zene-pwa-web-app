import { json } from "@sveltejs/kit";
import { heartbeatAPI, mysqlpool, verifyHeader } from "../../utils/Utils.js";
import { MySqlLocalService } from "../../ApiService/dbmysql/MySqlLocalService.js";

export async function POST({ request }) {
  // heartbeatAPI("zuser-add-user");
  if (!verifyHeader(request)) return json({ status: "error" });

  const body = await request.json();
  const email = body.email as string;

  if (!email.includes("@") && email.length < 3) return json({ status: "error" });

  try {
    await mysqlpool.query("INSERT INTO `rewards_ads_logs` (`id`, `watched_timestamp`, `email`) VALUES (?, ?, ?)", [null, Date.now(), email]);

    return json({ status: "success" });
  } catch (err) {
    //console.log(err);
    return json({ status: "error" });
  }
}
