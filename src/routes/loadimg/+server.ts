import { json } from "@sveltejs/kit";
import { ImgUploadService } from "../-api-/ApiService/imgbb/ImgUploadService.js";

export async function GET({ url }) {
  const img = url.searchParams.get("img") ?? "";

  if (img.includes("bunnycdn.com")) {
    const loadImage = await ImgUploadService.instance.getImageBunnyNet(img);
    return new Response(loadImage, { status: 200, headers: { "Content-Type": "image/png" } });
  }
  return new Response(null, { status: 200, headers: { "Content-Type": "image/png" } });
}
