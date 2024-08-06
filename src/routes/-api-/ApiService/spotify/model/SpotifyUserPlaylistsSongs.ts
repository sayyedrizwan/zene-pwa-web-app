export interface SpotifyUserPlaylistsSongs {
    href?: string
    items?: Item[]
    limit?: number
    next?: string
    offset?: number
    previous?: any
    total?: number
}

interface Item {
    added_at?: string
    added_by?: AddedBy
    is_local?: boolean
    primary_color?: any
    track?: Track
    video_thumbnail?: VideoThumbnail
}

interface AddedBy {
    external_urls?: ExternalUrls
    href?: string
    id?: string
    type?: string
    uri?: string
}

interface ExternalUrls {
    spotify?: string
}

interface Track {
    preview_url?: string
    available_markets?: string[]
    explicit?: boolean
    type?: string
    episode?: boolean
    track?: boolean
    album?: Album
    artists?: Artist2[]
    disc_number?: number
    track_number?: number
    duration_ms?: number
    external_ids?: ExternalIds
    external_urls?: ExternalUrls5
    href?: string
    id?: string
    name?: string
    popularity?: number
    uri?: string
    is_local?: boolean
}

interface Album {
    available_markets?: string[]
    type?: string
    album_type?: string
    href?: string
    id?: string
    images?: Image[]
    name?: string
    release_date?: string
    release_date_precision?: string
    uri?: string
    artists?: Artist[]
    external_urls?: ExternalUrls3
    total_tracks?: number
}

interface Image {
    height?: number
    url?: string
    width?: number
}

interface Artist {
    external_urls?: ExternalUrls2
    href?: string
    id?: string
    name?: string
    type?: string
    uri?: string
}

interface ExternalUrls2 {
    spotify?: string
}

interface ExternalUrls3 {
    spotify?: string
}

interface Artist2 {
    external_urls?: ExternalUrls4
    href?: string
    id?: string
    name?: string
    type?: string
    uri?: string
}

interface ExternalUrls4 {
    spotify?: string
}

interface ExternalIds {
    isrc?: string
}

interface ExternalUrls5 {
    spotify?: string
}

interface VideoThumbnail {
    url?: any
}
