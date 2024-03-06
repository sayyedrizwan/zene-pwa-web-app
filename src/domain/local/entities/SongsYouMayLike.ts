import type { MusicData } from './MusicData'

export class SongsYouMayLikeCache<T> {
  cache: string[]
  response: T

  constructor(cache: string[], response: T) {
    this.cache = cache
    this.response = response
  }
}

export class SongsYouMayLike {
  like: MusicData[]
  listen: MusicData[]
  explore: MusicData[]
  artists: MusicData[]

  constructor(like: MusicData[], listen: MusicData[], explore: MusicData[], artists: MusicData[]) {
    this.like = like
    this.listen = listen
    this.explore = explore
    this.artists = artists
  }
}
