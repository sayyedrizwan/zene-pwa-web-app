import { json, type RequestEvent } from '@sveltejs/kit'
import { authKeyError } from '../utils/utils'
import { YtAPIImpl } from '../api_impl/yt/YtVideoSearch'
import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import { atob } from 'buffer'
import { MusicPlayerVideos } from '../../../domain/local/entities/MusicPlayerVideos'
import { GiphyImpl } from '../api_impl/giphy/GiphyImpl'

export const POST = async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const headers = events.request.headers.get('mood')

  const giphy = new GiphyImpl()
  const moodGif = await giphy.searchGiphyRandomOne(`cute ${headers}`)

  console.log(moodGif)

  return json({})
}
