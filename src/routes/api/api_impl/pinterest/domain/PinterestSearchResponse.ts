export interface PinterestSearchResponse {
  resource_response?: ResourceResponse
  client_context?: ClientContext
  resource?: Resource
  request_identifier?: string
}

export interface ResourceResponse {
  status?: string
  code?: number
  message?: string
  endpoint_name?: string
  data?: Data
  bookmark?: string
  search_nag?: SearchNag
  searchfeed_tabs?: SearchfeedTabs
  query_l1_vertical_ids?: number[]
  metadata?: Metadata
  x_pinterest_sli_endpoint_name?: string
  http_status?: number
}

export interface Data {
  nag?: Nag
  should_append_global_search?: boolean
  results?: Result[]
  sensitivity?: Sensitivity
  tabs?: Tab[]
  query_l1_vertical_ids?: number[]
  no_gift_wrap?: boolean
}

export interface Nag {}

export interface Result {
  type?: string
  aggregated_pin_data?: AggregatedPinData
  is_downstream_promotion?: boolean
  did_its?: any[]
  call_to_action_text?: any
  has_required_attribution_provider?: boolean
  shopping_flags?: any[]
  promoted_is_lead_ad?: boolean
  reaction_counts?: ReactionCounts
  is_promoted?: boolean
  attribution?: any
  tracking_params?: string
  access?: any[]
  is_eligible_for_filters?: boolean
  link_domain?: LinkDomain
  campaign_id?: any
  is_eligible_for_web_closeup?: boolean
  promoter?: any
  is_oos_product?: boolean
  story_pin_data_id?: any
  rich_summary?: RichSummary
  promoted_lead_form?: any
  videos?: any
  board?: Board
  sponsorship?: any
  is_stale_product?: boolean
  is_prefetch_enabled?: boolean
  grid_title?: string
  is_eligible_for_pdp?: boolean
  alt_text?: string
  ad_match_reason?: number
  embed?: any
  promoted_is_removable?: boolean
  images?: Images
  is_eligible_for_related_products?: boolean
  image_crop?: ImageCrop
  description?: string
  image_signature?: string
  story_pin_data?: any
  is_uploaded?: boolean
  carousel_data?: any
  insertion_id?: any
  created_at?: string
  title?: string
  domain?: string
  link?: string
  dominant_color?: string
  id?: string
  debug_info_html?: any
  pinner?: Pinner
}

export interface AggregatedPinData {
  has_xy_tags?: boolean
}

export interface ReactionCounts {
  '1'?: number
  '7'?: number
  '11'?: number
  '13'?: number
  '5'?: number
}

export interface LinkDomain {
  official_user?: OfficialUser
}

export interface OfficialUser {
  image_medium_url?: string
  verified_identity?: VerifiedIdentity
  image_large_url?: string
  username?: string
  full_name?: string
  follower_count?: number
  is_ads_only_profile?: boolean
  ads_only_profile_site?: any
  is_verified_merchant?: boolean
  id?: string
  image_small_url?: string
}

export interface VerifiedIdentity {
  verified?: boolean
  name?: string
}

export interface RichSummary {
  type?: string
  actions?: any[]
  products?: any[]
  favicon_link?: string
  url?: string
  display_description?: string
  id?: string
  apple_touch_icon_images?: any
  site_name?: string
  display_name?: string
  apple_touch_icon_link?: any
  favicon_images?: FaviconImages
  type_name?: string
}

export interface FaviconImages {
  orig?: string
}

export interface Board {
  url?: string
  name?: string
}

export interface Images {
  '170x'?: N170x
  '236x'?: N236x
  '474x'?: N474x
  '736x'?: N736x
  orig?: Orig
}

export interface N170x {
  width?: number
  height?: number
  url?: string
}

export interface N236x {
  width?: number
  height?: number
  url?: string
}

export interface N474x {
  width?: number
  height?: number
  url?: string
}

export interface N736x {
  width?: number
  height?: number
  url?: string
}

export interface Orig {
  width?: number
  height?: number
  url?: string
}

export interface ImageCrop {
  min_y?: number
  max_y?: number
}

export interface Pinner {
  image_medium_url?: string
  verified_identity?: VerifiedIdentity2
  image_large_url?: string
  username?: string
  full_name?: string
  follower_count?: number
  is_ads_only_profile?: boolean
  ads_only_profile_site?: any
  is_verified_merchant?: boolean
  id?: string
  image_small_url?: string
}

export interface VerifiedIdentity2 {}

export interface Sensitivity {}

export interface Tab {
  id?: string
  tab_type?: string
  type?: string
  name?: string
}

export interface SearchNag {
  nag?: Nag2
  theme?: any
}

export interface Nag2 {}

export interface SearchfeedTabs {
  id?: string
  type?: string
  tabs?: Tab2[]
}

export interface Tab2 {
  id?: string
  tab_type?: string
  type?: string
  name?: string
}

export interface Metadata {
  searchfeed_tabs?: SearchfeedTabs2
  query_l1_vertical_ids?: number[]
}

export interface SearchfeedTabs2 {
  id?: string
  type?: string
  tabs?: Tab3[]
}

export interface Tab3 {
  id?: string
  tab_type?: string
  type?: string
  name?: string
}

export interface ClientContext {
  analysis_ua?: AnalysisUa
  app_type_detailed?: number
  app_version?: string
  batch_exp?: boolean
  browser_locale?: string
  browser_name?: string
  browser_type?: any
  browser_version?: string
  country?: string
  country_from_hostname?: string
  country_from_ip?: string
  csp_nonce?: string
  current_url?: string
  debug?: boolean
  deep_link?: string
  enabled_advertiser_countries?: string[]
  facebook_token?: any
  full_path?: string
  http_referrer?: string
  impersonator_user_id?: any
  invite_code?: string
  invite_sender_id?: string
  is_authenticated?: boolean
  is_bot?: string
  is_internal_ip?: boolean
  is_full_page?: boolean
  is_mobile_agent?: boolean
  is_sterling_on_steroids?: boolean
  is_tablet_agent?: boolean
  language?: string
  locale?: string
  origin?: string
  path?: string
  placed_experiences?: any
  referrer?: any
  region_from_ip?: string
  request_host?: string
  request_identifier?: string
  social_bot?: string
  stage?: string
  sterling_on_steroids_ldap?: any
  sterling_on_steroids_user_type?: any
  unauth_id?: string
  seo_debug?: boolean
  user_agent_can_use_native_app?: boolean
  user_agent_platform?: string
  user_agent_platform_version?: any
  user_agent?: string
  user?: User
  utm_campaign?: any
  visible_url?: string
}

export interface AnalysisUa {
  app_type?: number
  browser_name?: string
  browser_version?: string
  device_type?: any
  device?: string
  os_name?: string
  os_version?: string
}

export interface User {
  unauth_id?: string
  ip_country?: string
  ip_region?: string
}

export interface Resource {
  name?: string
  options?: Options
}

export interface Options {
  bookmarks?: string[]
  article?: string
  appliedProductFilters?: string
  price_max?: any
  price_min?: any
  query?: string
  scope?: string
  auto_correction_disabled?: string
  top_pin_id?: string
  filters?: string
}
