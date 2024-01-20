export interface LastFmTopSongsResponse {
  results: Results
}

export interface Results {
  track: Track[]
}

export interface Track {
  artist: string
  listeners: string
  name: string
  scrobbles: string
  weight: number
  artist_url: string
  url: string
  image: string
}
