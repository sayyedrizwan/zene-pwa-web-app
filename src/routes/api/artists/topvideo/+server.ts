import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { YtAPIImpl } from '../../api_impl/yt/YtVideoSearch'
import { yt_downloader_define, yt_downloader_header } from '../../sdu/ytdownloaderutils'

export const GET = (async (req: RequestEvent) => {
  const headers = req.request.headers
  const name = headers.get('name')


  if (name == undefined) {
    return json(apiError)
  }

  if (name === "") {
    return json(apiError)
  }

  if (!decryptAPIKeyAndIsValid(req)) return json(authKeyError)

  const ytImpl = new YtAPIImpl()

  try {
    const vId = await ytImpl.searchArtistsVideo(`${name} official music video`)
    await fetch(yt_downloader_define, { method: 'POST', headers: yt_downloader_header, body: `url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${vId}&ajax=1&lang=en` })
   
    // let audioStream = ytdl(`https://www.youtube.com/watch?v=${vId[0].songId!}`, { filter: format => format.container === 'mp4' && format.qualityLabel === "720p"  && format.itag === 398 });
    // return new Response(audioStream as any , { headers: { "content-disposition": "attachment" , "content-type": "video/mp4" } })
  } catch (error) {
    return json({})
  }
})
