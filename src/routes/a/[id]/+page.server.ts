import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js";
import { auth } from "../../-api-/utils/Utils.js";

export async function load({ params, fetch }) {
  const name = await decryptSharingData(params.id);
  try {
    const response = await fetch("/-api-/artistsdata/info", { method: "POST", headers: { auth: auth }, body: JSON.stringify({ name: name }) });
    const data = await response.json();
    return { data: JSON.stringify(data), url: params.id };
  } catch (error) {
    return { data: JSON.stringify("{}"), url: params.id };
  }
}
