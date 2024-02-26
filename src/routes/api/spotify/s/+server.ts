import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValid, decryptData } from '../../utils/EncryptionForAPI'
import { authKeyError } from '../../utils/utils'
import { SpotifyImpl } from '../../api_impl/spotify/SpotifyImpl'
import { SpotifyPlaylistsMusicTrackData } from '../../../../domain/local/entities/SpotifyPlaylistsMusicData'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'
import type { MusicData } from '../../../../domain/local/entities/MusicData'

export const POST = (async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValid(events)) return json(authKeyError)
  const body = await events.request.json()

  const spotify = new SpotifyImpl()
  const ytMusic = new YtMusicAPIImpl()
 
  let isRunning = true
  let offset = 0

  const lists: string[] = []

  setTimeout(() => {
    isRunning = false
  }, 12 * 1000)

  while (isRunning) {
    const playlistsAndSongs = await spotify.playlistsSongsSpotifyAuthToken(offset, decryptData(body.code), body.id)
    
    playlistsAndSongs?.items.forEach(item => {
      lists.push(`${item.track.name} - ${item.track.artists[0].name}`)
    })

    if (playlistsAndSongs?.next != null) {
      const match = playlistsAndSongs?.next?.match(/[?&]offset=(\d+)/)
      if (match) offset = parseInt(match[1])
      else isRunning = false
    } else isRunning = false
  }

  const newLists: MusicData[] = []

  await Promise.all(
    lists.map(async (m) => {
      const music = await ytMusic.musicSearchSingle(m, false)
      if (music.songId != null) newLists.push(music)
    })
  )

  return json(new SpotifyPlaylistsMusicTrackData(body.id, newLists))
})