import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid } from '../utils/EncryptionForAPI'
import { authKeyError } from '../utils/utils'
import { SpotifyImpl } from '../api_impl/spotify/SpotifyImpl'
import { SpotifyPlaylistsMusicData } from '../../../domain/local/entities/SpotifyPlaylistsMusicData'

export const POST = (async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)

  const list = await events.request.json()

  const spotify = new SpotifyImpl()
  const token = await spotify.getBasicTokens(list.uri, list.code)

  let isRunning = true
  let offset = 0

  const lists: SpotifyPlaylistsMusicData[] = []

  while (isRunning) {
    const playlistsAndSongs = await spotify.playlistsAndSongsWithAuthToken(token, offset)

    await Promise.all(
      (playlistsAndSongs?.items ?? []).map(async (items) => {
        const img = items.images?.findLast((t) => t.height == 640)?.url ?? ""
        if (items.id != undefined) {
          const playlistsAndSongs = await spotify.playlistsSongsSpotifyAuthToken(token, items.id)
          lists.push(new SpotifyPlaylistsMusicData(items.id, img, items.name ?? "", items.owner?.display_name ?? "", playlistsAndSongs))
        }
      })
    )

    if (playlistsAndSongs?.next != null) {
      const match = playlistsAndSongs?.next?.match(/[?&]offset=(\d+)/)
      if (match) offset = parseInt(match[1])
      else isRunning = false
    } else isRunning = false

  }

  return json(lists)
})