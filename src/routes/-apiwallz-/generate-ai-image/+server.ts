import { json, error } from "@sveltejs/kit";
import { verifyHeader } from "../../-api-/utils/Utils";
import axios from "axios";
import path from "path";
import fs from "fs";
import { AI_MAGIC_STUDIO_API } from "../utils/Utils";

export async function POST({ request }) {
  if (!verifyHeader(request)) return json([]);
  const data = await request.json();
  const prompt = data.prompt;

  try {
    const bodyFormData = new FormData();
    bodyFormData.append("prompt", prompt);
    bodyFormData.append("output_format", "bytes");
    bodyFormData.append("user_profile_id", "null");
    const response = await axios.post(AI_MAGIC_STUDIO_API, bodyFormData, { responseType: "arraybuffer", headers: { "Content-Type": "multipart/form-data", origin: "https://magicstudio.com", referer: "https://magicstudio.com/ai-art-generator/", Host: "ai-api.magicstudio.com" } });
    const contentType = response.headers["content-type"];
    return new Response(response.data, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-cache",
      },
    });
  } catch (e) {
    const imagePath = path.resolve("static/AI-BUSY.png");
    if (!fs.existsSync(imagePath)) throw error(404, { message: "Not found" });

    const image = fs.readFileSync(imagePath);

    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-cache",
      },
    });
  }
}
