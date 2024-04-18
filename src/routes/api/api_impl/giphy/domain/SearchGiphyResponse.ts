export interface SearchGiphyResponse {
  data?: Daum[]
  meta?: Meta
  pagination?: Pagination
}

export interface Daum {
  type?: string
  id?: string
  index_id?: number
  url?: string
  slug?: string
  bitly_gif_url?: string
  bitly_url?: string
  embed_url?: string
  username?: string
  source?: string
  title?: string
  rating?: string
  content_url?: string
  tags?: string[]
  featured_tags?: string[]
  user_tags?: any[]
  source_tld?: string
  source_post_url?: string
  source_caption?: string
  is_hidden?: number
  is_removed?: number
  is_community?: number
  is_anonymous?: number
  is_featured?: number
  is_realtime?: number
  is_sticker?: number
  import_datetime?: string
  trending_datetime?: string
  create_datetime?: string
  update_datetime?: string
  images?: Images
  analytics_response_payload?: string
  analytics?: Analytics
  has_attribution?: boolean
  alt_text?: string
  alt_text_author?: AltTextAuthor
  user?: User
}

export interface Images {
  original?: Original
  downsized?: Downsized
  downsized_large?: DownsizedLarge
  downsized_medium?: DownsizedMedium
  downsized_small?: DownsizedSmall
  downsized_still?: DownsizedStill
  fixed_height?: FixedHeight
  fixed_height_downsampled?: FixedHeightDownsampled
  fixed_height_small?: FixedHeightSmall
  fixed_height_small_still?: FixedHeightSmallStill
  fixed_height_still?: FixedHeightStill
  fixed_width?: FixedWidth
  fixed_width_downsampled?: FixedWidthDownsampled
  fixed_width_small?: FixedWidthSmall
  fixed_width_small_still?: FixedWidthSmallStill
  fixed_width_still?: FixedWidthStill
  looping?: Looping
  original_still?: OriginalStill
  original_mp4?: OriginalMp4
  preview?: Preview
  preview_gif?: PreviewGif
  preview_webp?: PreviewWebp
  source?: Source
  '480w_still'?: N480wStill
  hd?: Hd
}

export interface Original {
  height?: string
  width?: string
  size?: string
  url?: string
  mp4_size?: string
  mp4?: string
  webp_size?: string
  webp?: string
  frames?: string
  hash?: string
}

export interface Downsized {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface DownsizedLarge {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface DownsizedMedium {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface DownsizedSmall {
  height?: string
  width?: string
  mp4_size?: string
  mp4?: string
}

export interface DownsizedStill {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface FixedHeight {
  height?: string
  width?: string
  size?: string
  url?: string
  mp4_size?: string
  mp4?: string
  webp_size?: string
  webp?: string
}

export interface FixedHeightDownsampled {
  height?: string
  width?: string
  size?: string
  url?: string
  webp_size?: string
  webp?: string
}

export interface FixedHeightSmall {
  height?: string
  width?: string
  size?: string
  url?: string
  mp4_size?: string
  mp4?: string
  webp_size?: string
  webp?: string
}

export interface FixedHeightSmallStill {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface FixedHeightStill {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface FixedWidth {
  height?: string
  width?: string
  size?: string
  url?: string
  mp4_size?: string
  mp4?: string
  webp_size?: string
  webp?: string
}

export interface FixedWidthDownsampled {
  height?: string
  width?: string
  size?: string
  url?: string
  webp_size?: string
  webp?: string
}

export interface FixedWidthSmall {
  height?: string
  width?: string
  size?: string
  url?: string
  mp4_size?: string
  mp4?: string
  webp_size?: string
  webp?: string
}

export interface FixedWidthSmallStill {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface FixedWidthStill {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface Looping {
  mp4_size?: string
  mp4?: string
}

export interface OriginalStill {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface OriginalMp4 {
  height?: string
  width?: string
  mp4_size?: string
  mp4?: string
}

export interface Preview {
  height?: string
  width?: string
  mp4_size?: string
  mp4?: string
}

export interface PreviewGif {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface PreviewWebp {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface Source {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface N480wStill {
  height?: string
  width?: string
  size?: string
  url?: string
}

export interface Hd {
  height?: string
  width?: string
  mp4_size?: string
  mp4?: string
}

export interface Analytics {
  onload?: Onload
  onclick?: Onclick
  onsent?: Onsent
}

export interface Onload {
  url?: string
}

export interface Onclick {
  url?: string
}

export interface Onsent {
  url?: string
}

export interface AltTextAuthor {
  username?: string
  display_name?: string
  avatar?: string
}

export interface User {
  id?: number
  avatar_url?: string
  banner_image?: string
  banner_url?: string
  profile_url?: string
  username?: string
  display_name?: string
  name?: string
  attribution_display_name?: string
  description?: string
  user_type?: string
  facebook_url?: string
  instagram_url?: string
  twitter_url?: string
  twitter?: string
  tumblr_url?: string
  website_url?: string
  website_display_url?: string
  is_public?: boolean
  is_staff?: boolean
  is_superuser?: boolean
  is_verified?: boolean
  suppress_chrome?: boolean
}

export interface Meta {
  status?: number
  msg?: string
  response_id?: string
}

export interface Pagination {
  total_count?: number
  count?: number
  offset?: number
}
