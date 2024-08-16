import { json } from "@sveltejs/kit";
import axios from "axios";
import { MySqlLocalService } from "../ApiService/dbmysql/MySqlLocalService.js";
import { auth, heartbeatAPI } from "../utils/Utils.js";
import type { MusicData } from "../ApiService/model/MusicData.js";
import { SendMailService } from "../ApiService/sendmail/SendMailService.js";

//https://pwdyp0nz.status.cron-job.org/
//cron-job.org
export async function GET({ url, request }) {
  heartbeatAPI("send-mail");
  const response = await MySqlLocalService.instance.selectUserWhoNotReceivedMails();
  const records = response as [any];

  await Promise.all(
    records.map(async (r: any) => {
      let songsList: [MusicData] | null = null;
      try {
        const songs = await axios.post("https://www.zenemusic.co/-api-/top/songs", { email: r.email }, { headers: { auth: auth } });
        songsList = (await songs.data) as [MusicData];
      } catch (error) {
        songsList = null;
      }

     await SendMailService.instance.sendMailToOldUsers(r.email, r.name, songsList)
    })
  );
  return json({});
}
