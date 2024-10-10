import type { MusicData } from "../../model/MusicData"

export class SpotifyPlaylistSave {
  name: String
  thumbnail: String
  id: String
  desc: String
  path: String
  next: string | null

  constructor(name: String, thumbnail: String, id: String, desc: String, path: String, next: string | null) {
      this.name = name
      this.id = id
      this.thumbnail = thumbnail
      this.desc = desc
      this.path = path
      this.next = next
  }
}



export interface SpotifyUserPlaylistsData {
  href?: string
  limit?: number
  next?: string
  offset?: number
  previous?: string
  total?: number
  items?: Item[]
}

interface Item {
  collaborative?: boolean
  description?: string
  external_urls?: ExternalUrls
  href?: string
  id?: string
  images?: Image[]
  name?: string
  owner?: Owner
  primary_color?: string
  public?: boolean
  snapshot_id?: string
  tracks?: Tracks
  type?: string
  uri?: string
}

interface ExternalUrls {
  spotify?: string
}

interface Image {
  height?: number
  url?: string
  width?: number
}

interface Owner {
  display_name?: string
  external_urls?: ExternalUrls2
  href?: string
  id?: string
  type?: string
  uri?: string
}

interface ExternalUrls2 {
  spotify?: string
}

interface Tracks {
  href?: string
  total?: number
}
