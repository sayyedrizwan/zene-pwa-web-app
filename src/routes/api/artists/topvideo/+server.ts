import { json, type RequestEvent } from '@sveltejs/kit'
import { apiError, authKeyError } from '../../utils/utils'
import { decryptAPIKeyAndIsValid } from '../../utils/EncryptionForAPI'
import { YtAPIImpl } from '../../api_impl/yt/YtVideoSearch'
import ytdl from 'ytdl-core'

export async function POST(events: RequestEvent) {
  const headers = events.request.headers
  const name = headers.get('name')


  if (name == undefined) {
    return json(apiError)
  }

  if (name === "") {
    return json(apiError)
  }

  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const ytImpl = new YtAPIImpl()

  try {
    const vId = await ytImpl.searchArtistsVideo(`${name} official music video`)
    let info = await ytdl.getInfo(vId[0].songId!)

    let videoUrl = ''

    info.formats.forEach((e) => {
      if(e.qualityLabel === "1080p" && e.container === "mp4" && videoUrl === "") videoUrl = e.url
    })

    return new Response(btoa(videoUrl))
  } catch (error) {
    return new Response("")
  }
}
