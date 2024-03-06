import { json, type RequestEvent } from '@sveltejs/kit'
import { authKeyError } from '../utils/utils'
import { YtAPIImpl } from '../api_impl/yt/YtVideoSearch'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { YtMusicAPIImpl } from '../api_impl/yt_music/YtMusicImpl'
import { atob } from 'buffer'
import { MusicPlayerVideos } from '../../../domain/local/entities/MusicPlayerVideos'

export const POST = async (events: RequestEvent) => {
  if (!isFromZeneOrigin(events)) return json(authKeyError)
  const list = await events.request.json()

  if (list.length <= 0) return json({})

  const yt = new YtAPIImpl()
  const ytMusic = new YtMusicAPIImpl()
  const info = await ytMusic.songInfo(atob(list.id))

  const videos = await yt.searchVideo(`${info?.name} - ${info?.artists?.textBeforeKeyword(',')?.textBeforeKeyword('&')}`)
  const videoId = videos.length > 0 ? videos[0].songId ?? '' : ''

  const lyrics = await yt.searchVideo(`${info?.name} - ${info?.artists?.textBeforeKeyword(',')?.textBeforeKeyword('&')} Lyrics Video`)
  const lyricsVideoId = lyrics.length > 0 ? lyrics[0].songId ?? '' : ''

  return json(new MusicPlayerVideos(list.id, videoId, lyricsVideoId))
}
