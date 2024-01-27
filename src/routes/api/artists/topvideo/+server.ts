import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { YtAPIImpl } from '../../api_impl/yt/YtVideoSearch'
import ytdl from 'ytdl-core'


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

    let audioStream = ytdl(`https://www.youtube.com/watch?v=${vId[0].songId!}`, { filter: format => format.container === 'mp4' && format.qualityLabel === "720p"  && format.itag === 398 });
    return new Response(audioStream as any , { headers: { "content-disposition": "attachment" , "content-type": "video/mp4" } })
  } catch (error) {
    return json({})
  }
})
