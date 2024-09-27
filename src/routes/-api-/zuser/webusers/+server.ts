import { json } from "@sveltejs/kit";
import { heartbeatAPI, mysqlpool, verifyHeader } from "../../utils/Utils.js";

export async function POST({ request }) {
  heartbeatAPI("zuser-add-user");
  if (!verifyHeader(request)) return json({ status: "error" });

  const body = await request.json();
  const email = body.email as string;

  if (!email.includes("@") && email.length < 3) return json({ status: "error" });

  try {
    const [results] = await mysqlpool.query("SELECT * FROM `user_web` WHERE email = ?", [email]);

    if (results.length > 0) await mysqlpool.query("UPDATE `user_web` SET ip = ?, fcm_token = ?, device_info = ?, last_seen = ? WHERE email = ?", [body.ip, body.token, body.info, Date.now(), email]);
    else await mysqlpool.query("INSERT INTO `user_web` (`email`, `ip`, `fcm_token`, `device_info`, `last_seen`) VALUES (?, ?, ?, ?, ?)", [email, body.ip, body.token, body.info, Date.now()]);

    return json({ status: "success" });
  } catch (err) {
    //console.log(err);
    return json({ status: "error" });
  }
}
