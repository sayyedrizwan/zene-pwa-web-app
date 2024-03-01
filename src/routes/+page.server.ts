import { btoa } from 'buffer'
import { serverLoadFunction } from './api/utils/serverpage.js'
import ytdl from 'ytdl-core'

export const load = async ({ fetch, cookies, getClientAddress }) => {
  const clientAddress = getClientAddress()
  const data = serverLoadFunction(fetch, cookies, clientAddress)

  let info = await ytdl.getInfo("ycQqiLpEbZI")
  let audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
  let url = audioFormats.findLast((a) => a.mimeType?.includes("audio/mp4; codecs="))?.url

  return { data: btoa((await data).keyData), ip: JSON.stringify((await data).ip), id: url }
}
