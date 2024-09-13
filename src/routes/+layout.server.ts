import { e_mail_info } from "$lib/utils/Cookies.js";
import axios from "axios";
import { auth, decryptWebInfo, webEncKey } from "./-api-/utils/Utils.js";
import { ENC_DEC_KEY } from "./-api-/utils/EncrypDecrypt.js";

export const ssr = true;
export const csr = true;
export const prerender = false;

export async function load({ cookies }) {
  const date = btoa(Date.now().toString()).replaceAll("==", "");

  const data = cookies.get(e_mail_info);

  let name: String = "";
  let profilePic: String = "";

  if (data == undefined) return { i: date, k: btoa(webEncKey), loggedIn: false };

  let email = decryptWebInfo(data);
  if (!email.includes("@") && email.trim().length <= 2) return { i: date, mk: btoa(ENC_DEC_KEY), k: btoa(webEncKey), loggedIn: false };

  try {
    const response = await axios.get("http://localhost:3419/-api-/zuser/users", { params: { user: email }, headers: { auth: auth } });
    const user = (await response.data) as any;
    name = user.name;
    profilePic = user.profile_photo;

    return { i: date, mk: btoa(ENC_DEC_KEY), k: btoa(webEncKey), loggedIn: true, name: name, photo: profilePic, email: email };
  } catch (error) {
    return { i: date, mk: btoa(ENC_DEC_KEY), k: btoa(webEncKey), loggedIn: false };
  }
}
