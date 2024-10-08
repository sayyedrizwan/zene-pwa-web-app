import { json } from "@sveltejs/kit";
import { verifyHeader } from "../../../-api-/utils/Utils";
import { mysqlpoolWallz } from "../../utils/Utils";

export async function POST({ request }) {
  if (!verifyHeader(request)) return json({ status: "error" });

  const body = await request.json();
  const email = body.email as string;
  try {
    if (!email.includes("@") && email.length < 3) return json({ status: "error" });

    const [results] = await mysqlpoolWallz.query("SELECT * FROM `users` WHERE email = ?", [email]);

    if (results.length > 0) await mysqlpoolWallz.query("UPDATE `users` SET name = ?, last_seen = ? WHERE email = ?", [body.name, Date.now(), email]);
    else await mysqlpoolWallz.query("INSERT INTO `users` (`email`, `name`, `sign_up_date`, `last_seen`, `interests`) VALUES (?, ?, ?, ?, ?)", [email, body.name, Date.now(), Date.now(), "[]"]);

    return json({ status: "success" });
  } catch (err) {
    console
    return json({ status: "error" });
  }
}
