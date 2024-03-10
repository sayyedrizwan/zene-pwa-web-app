import { json, type RequestEvent } from '@sveltejs/kit'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { authKeyError } from '../utils/utils'
import { LyricsImpl } from '../api_impl/lyrics/LyricsImpl'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import { atob } from 'buffer'
import { LyricsResponseData } from '../../../domain/local/entities/LyricsResponseData'

export const POST = async (events: RequestEvent) => {
  if (isFromZeneOrigin(events) === false) return json(authKeyError)

  const list = await events.request.json()
  if (list.length <= 0) return json({})
  
  const lyrics = new LyricsImpl()
  const ytMusic = new YtMusicAPIImpl()

  const songinfo = await ytMusic.songInfo(atob(list.id))
  const rendAdvertiser = await lyrics.rentanadvertiser(songinfo)

  if(rendAdvertiser != null) return json(new LyricsResponseData(rendAdvertiser ?? "", true))

  const ge = await lyrics.geniusLyrics(songinfo)

  if(ge != null) return json(new LyricsResponseData(ge, false))

  return json(new LyricsResponseData(null, false))
}
