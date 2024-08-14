import axios from "axios";
import { encryptSharingData } from "../../utils/EncrypDecrypt";
import { isDevDB, mysqlpool, timeDifferenceIs24Hours } from "../../utils/Utils";
import { MusicData } from "../model/MusicData";

export class SendMailService {
  static instance = new SendMailService();

  senderInfo = {
    name: "Zene Music",
    email: "no-reply@mail.zenemusic.co",
  };

  async sendMailToOldUsers(email: String, name: String, topSongs: [MusicData] | null) {
    try {
      let songImages = "";
      let songImages1 = "";
      let songImages2 = "";

      await Promise.all(
        (topSongs == null ? [] : topSongs).map(async (s, i) => {
          if (i <= 9) {
            const enc = await encryptSharingData(s?.id.toString());
            if (i >= 1 && i <= 3) {
              songImages += `<td class="grid-item">
                    <a href="https://www.zenemusic.co/s/${enc}">
                        <img src=${s.thumbnail} class="grid-item" alt=${s.name} />
                    </a>
                </td>`;
            } else if (i >= 4 && i <= 6) {
              songImages1 += `<td class="grid-item">
                    <a href="https://www.zenemusic.co/s/${enc}">
                        <img src=${s.thumbnail} class="grid-item" alt=${s.name} />
                    </a>
                </td>`;
            } else if (i >= 6 && i <= 69) {
              songImages2 += `<td class="grid-item">
                    <a href="https://www.zenemusic.co/s/${enc}">
                        <img src=${s.thumbnail} class="grid-item" alt=${s.name} />
                    </a>
                </td>`;
            }
          }
        })
      );

      const data = JSON.stringify({
        sender: this.senderInfo,
        to: [
          {
            email: email,
            name: name,
          },
        ],
        subject: `Hey, ${name} We Miss you 🥹 !!`,
        htmlContent: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Zene</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      @import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Moderustic&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Lexend+Deca&family=Moderustic&display=swap");

      .lexend-deca-font {
        font-family: "Lexend Deca", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
      }
      .anek-devanagari-font {
        font-family: "Anek Devanagari", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        font-variation-settings: "wdth" 100;
      }

      @media only screen and (max-width: 600px) {
        .body {
          width: 350px;
        }

        .body-s {
          width: 330px;
        }

        .grid-item {
          padding: 2px;
          margin: 2px;
          height: 105px;
        }
        .font-size {
          font-size: 17px;
        }
        .font-size-m {
          font-size: 14px;
        }
      }

      @media only screen and (min-width: 601px) {
        .body {
          width: 800px;
        }
        .body-s {
          width: 780px;
        }
        .grid-item {
          padding: 2px;
          margin: 2px;
          width: 252px;
        }
        .font-size {
          font-size: 26px;
        }
        .font-size-m {
          font-size: 19px;
        }
      }

      .button {
        background-color: #483fce;
        border: none;
        color: white;
        border-radius: 13px;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }

      table {
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: white; margin-top: 10px; background-color: #101820">
    <table cellpadding="0" cellspacing="0" style="padding: 5px" class="body">
      <tr>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </tr>
    </table>
    <center>
      <table cellpadding="0" cellspacing="0" style="padding: 5px; background-color: white; border-radius: 14px 14px 0px 0px" class="body" align="center">
        <tr width="100%">
          <td align="center">
            <a href="https://zenemusic.co/">
              <img src="https://zenemusic.co/mail_header.png" alt="More Adventure is left on Zene" class="body-s" style="margin-top: 10px" />
            </a>
          </td>
        </tr>

        <tr>
          <td align="center">
            <h2 class="lexend-deca-font font-size body-s" style="color: black">Hey, ${name} We Miss you 🥹 !!</h2>
            <h2 class="lexend-deca-font font-size-m body-s" style="color: black; transform: translateY(-10px)">Here are some tunes we've gathered for you.</h2>
          </td>
        </tr>

        <tr>
          <td align="center" style="margin-left: 5px">
            <h2 class="lexend-deca-font font-size-m body-s" style="color: black; width: 100%; text-align: left">&nbsp;</h2>
          </td>
        </tr>
        <tr>
          <td align="center" style="margin-left: 5px" style="display:inline-block">
            <h2 class="lexend-deca-font font-size-m body-s" style="color: black; width: 100%; text-align: left">Songs for you</h2>
          </td>
        </tr>

        ${
          topSongs != null
            ? topSongs?.length > 0
              ? `
            <tr>
                ${songImages}
            </tr>
            <tr>
                ${songImages1}
            </tr>
            <tr>
                ${songImages2}
            </tr>
        `
              : null
            : null
        }
      
       <tr>
          <td align="center" class="body-s" style="display:inline-block">
            <h2 class="anek-devanagari-font font-size-m body-s" style="color: black; margin-top: 60px; width: 100%; text-align: center">Discover more on Zene</h2>
            <h2 class="anek-devanagari-font font-size-m body-s" style="color: black; margin-top: 0px; width: 100%; text-align: center; transform: translateY(-10px)">Zene is a free music app and we have made it for the world who are sick listening to ads more than music.</h2>
            <button class="button" style="transform: translateY(-10px) body-s">Open Zene</button>
          </td>
        </tr>

        <tr>
          <td align="center" style="margin-top: 50px; margin-bottom: 30px">
            <p class="roboto-thin body-s" style="font-size: 12px">You are receiving this email because you are part of a select group. <br />If you would like to unsubscribe please mail us on knocknock@zenemusic.co</p>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
        `,
      });

      let config = {
        method: "post",
        url: "https://api.brevo.com/v3/smtp/email",
        headers: {
          accept: "application/json",
          "api-key": "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",
          "content-type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);

      console.log(await response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
