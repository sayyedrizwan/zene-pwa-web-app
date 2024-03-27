export interface LastFmTopSongsResponse {
  results?: Results
}

export interface Results {
  artist?: Artist[]
}

export interface Artist {
  listeners?: string
  name?: string
  scrobbles?: string
  tracks?: Track[]
  weight?: number
  url?: string
  image?: string
}

export interface Track {
  artist?: string
  name?: string
  weight?: number
  url?: string
}