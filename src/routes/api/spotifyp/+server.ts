import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { authKeyError } from '../utils/utils'
import { SpotifyImpl } from '../api_impl/spotify/SpotifyImpl'

export const POST = (async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const list = await events.request.json()

  const spotify = new SpotifyImpl()
  const token = await spotify.getBasicTokens(list.uri, list.code)

  let isRunning = true
  let offset = 0

  while(isRunning) {
    const playlistsAndSongs = await spotify.playlistsAndSongsWithAuthToken(token, offset)
    console.log(playlistsAndSongs?.items?.length)

    if (playlistsAndSongs?.next != null) {
      const match = playlistsAndSongs?.next?.match(/[?&]offset=(\d+)/)
      if (match) {
        offset = parseInt(match[1])
      } else {
        isRunning = false
      }
    } else {
      isRunning = false
    }
  }

  return json({})
})