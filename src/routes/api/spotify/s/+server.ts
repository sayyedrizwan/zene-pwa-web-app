import { json, type RequestEvent } from '@sveltejs/kit'
import { decryptAPIKeyAndIsValidLong, decryptData } from '../../utils/EncryptionForAPI'
import { authKeyError, spotify_liked_playlists } from '../../utils/utils'
import { SpotifyImpl } from '../../api_impl/spotify/SpotifyImpl'
import { SpotifyPlaylistsMusicTrackData } from '../../../../domain/local/entities/SpotifyPlaylistsMusicData'
import { YtMusicAPIImpl } from '../../api_impl/yt_music/YtMusicImpl'
import type { MusicData } from '../../../../domain/local/entities/MusicData'

export const POST = async (events: RequestEvent) => {
  if (!decryptAPIKeyAndIsValidLong(events)) return json(authKeyError)
  const body = await events.request.json()

  const spotify = new SpotifyImpl()
  const ytMusic = new YtMusicAPIImpl()
  const lists: string[] = []

  if (body == undefined) return json(new SpotifyPlaylistsMusicTrackData(body.id, []))

  const playlistsAndSongs = await spotify.playlistsSongsSpotifyAuthToken(0, decryptData(body.code), body.id)
  if (playlistsAndSongs == null) return json(new SpotifyPlaylistsMusicTrackData(body.id, []))

  for (let x: number = 0; x <= Math.ceil(playlistsAndSongs.total / 50); x++) {
    const playlistsAndSongs = await spotify.playlistsSongsSpotifyAuthToken(x, decryptData(body.code), body.id)
    playlistsAndSongs?.items.forEach((item) => {
      try {
        lists.push(`${item.track.name} - ${item.track.artists[0].name}`)
      } catch (error) {
        error
      }
    })
  }

  const newLists: MusicData[] = []

  await Promise.all(
    lists.map(async (m) => {
      const music = await ytMusic.musicSearchSingle(m, false)
      if (music.songId != null) newLists.push(music)
    }),
  )

  return json(new SpotifyPlaylistsMusicTrackData(body.id, newLists))
}
