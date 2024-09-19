import axios from "axios";
import type { ImgBBData } from "./model/ImgBBData";
import { BUNNY_IMG_HEADER, IMG_BB_BASE_URL, isDevDB } from "../../utils/Utils";

export class ImgUploadService {
  static instance = new ImgUploadService();

  async uploadImgBB(file: any): Promise<String> {
    try {
      let data = new FormData();
      data.append("image", file);

      let config = { method: "post", url: IMG_BB_BASE_URL, data: data };

      const response = await axios.request(config);
      const imgbb = (await response.data) as ImgBBData;
      let url = imgbb.data?.image?.url ?? "";
      return url;
    } catch (error) {
      console.log(error);
      return "";
    }
  }

  async uploadToBunnyNet(file: any, id: String): Promise<String> {
    try {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const path = `${isDevDB ? `TEMP_ZENE_PLAYLISTS_IMAGES_TEMP` : `ZENE_PLAYLISTS_IMAGES`}/${id}.png`;

      const response = await axios.request({ method: "PUT", url: `https://sg.storage.bunnycdn.com/zene-files/${path}`, data: fileBuffer, headers: BUNNY_IMG_HEADER });
      const res = (await response.data) as any;
      if (res.HttpCode == 201) return `https://zenemusic.b-cdn.net/${path}`
      return ""
    } catch (error) {
      return ""
    }
  }

  async getImageBunnyNet(url: string): Promise<any | null> {
    try {
      const response = await axios({ method: "GET", url: url, responseType: "arraybuffer", headers: BUNNY_IMG_HEADER });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async deleteImageBunnyNet(url: any): Promise<any | null> {
    try {
      const response = await axios({ method: "DELETE", url: `https://sg.storage.bunnycdn.com/zene-files/${url}`, headers: BUNNY_IMG_HEADER });
      return response.data;
    } catch (error) {
      return null;
    }
  }
}
