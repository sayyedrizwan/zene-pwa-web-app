export function getVideoURLPinterest(videoData: any) {
  if (videoData == null) return "";
  let videoPath = "";
  for (const key in videoData.video_list) {
    if (videoData.video_list[key].url.includes(".mp4")) videoPath = videoData.video_list[key].url;
  }
  return videoPath;
}

export interface PinterestGetResponse {
  resource_response?: ResourceResponse;
  client_context?: ClientContext;
  resource?: Resource;
  request_identifier?: string;
}

interface ResourceResponse {
  status?: string;
  code?: number;
  message?: string;
  endpoint_name?: string;
  data?: Data;
  bookmark?: string;
  search_nag?: SearchNag;
  mode_icon?: any;
  query_l1_vertical_ids?: number[];
  metadata?: Metadata2;
  x_pinterest_sli_endpoint_name?: string;
  http_status?: number;
}

interface Data {
  clientTrackingParams?: string;
  nag?: Nag;
  should_append_global_search?: boolean;
  results?: Result[];
  rankedGuides?: any[];
  sensitivity?: Sensitivity;
  oneBarModules?: OneBarModule[];
  modeIcon?: any;
  query_l1_vertical_ids?: number[];
  no_gift_wrap?: boolean;
}

interface Nag {}

interface Result {
  node_id?: string;
  is_eligible_for_filters?: boolean;
  shopping_flags?: any[];
  insertion_id?: any;
  attribution?: any;
  pinner?: Pinner;
  native_creator?: NativeCreator;
  ad_match_reason?: number;
  rich_summary?: RichSummary;
  domain?: string;
  id?: string;
  tracking_params?: string;
  did_its?: any[];
  videos?: any;
  story_pin_data_id?: string;
  board?: Board;
  grid_title?: string;
  is_eligible_for_web_closeup?: boolean;
  is_eligible_for_aggregated_comments?: boolean;
  link_user_website?: any;
  digital_media_source_type?: any;
  promoted_is_removable?: boolean;
  alt_text?: any;
  is_oos_product?: boolean;
  is_stale_product?: boolean;
  sponsorship?: any;
  promoter?: any;
  is_eligible_for_related_products?: boolean;
  link_domain?: LinkDomain;
  promoted_is_lead_ad?: boolean;
  recommendation_reason?: any;
  images?: Images;
  image_signature?: string;
  should_open_in_stream?: boolean;
  campaign_id?: any;
  is_downstream_promotion?: boolean;
  tracked_link?: string;
  reaction_counts?: ReactionCounts;
  is_eligible_for_pre_loved_goods_label?: boolean;
  link?: string;
  has_required_attribution_provider?: boolean;
  dominant_color?: string;
  source_interest?: any;
  description?: string;
  promoted_lead_form?: any;
  image_crop?: ImageCrop;
  story_pin_data?: StoryPinData;
  embed?: any;
  type?: string;
  is_eligible_for_pdp?: boolean;
}

interface Pinner {
  node_id?: string;
  verified_identity?: VerifiedIdentity;
  is_ads_only_profile?: boolean;
  is_verified_merchant?: boolean;
  contextual_pin_image_urls?: ContextualPinImageUrls;
  full_name?: string;
  explicitly_followed_by_me?: boolean;
  follower_count?: number;
  ads_only_profile_site?: any;
  recent_pin_images?: RecentPinImages;
  image_medium_url?: string;
  id?: string;
  username?: string;
  image_large_url?: string;
  type?: string;
  image_small_url?: string;
}

interface VerifiedIdentity {}

interface ContextualPinImageUrls {}

interface RecentPinImages {
  "192x"?: N192x[];
  "222x"?: N222x[];
}

interface N192x {
  url?: string;
  width?: number;
  height?: number;
  dominant_color?: string;
}

interface N222x {
  url?: string;
  width?: number;
  height?: number;
  dominant_color?: string;
}

interface NativeCreator {
  node_id?: string;
  verified_identity?: VerifiedIdentity2;
  is_ads_only_profile?: boolean;
  is_verified_merchant?: boolean;
  contextual_pin_image_urls?: ContextualPinImageUrls2;
  full_name?: string;
  explicitly_followed_by_me?: boolean;
  follower_count?: number;
  ads_only_profile_site?: any;
  recent_pin_images?: RecentPinImages2;
  image_medium_url?: string;
  id?: string;
  username?: string;
  image_large_url?: string;
  type?: string;
  image_small_url?: string;
}

interface VerifiedIdentity2 {}

interface ContextualPinImageUrls2 {}

interface RecentPinImages2 {
  "192x"?: N192x2[];
  "222x"?: N222x2[];
}

interface N192x2 {
  url?: string;
  width?: number;
  height?: number;
  dominant_color?: string;
}

interface N222x2 {
  url?: string;
  width?: number;
  height?: number;
  dominant_color?: string;
}

interface RichSummary {
  actions?: any[];
  display_name?: string;
  favicon_link?: string;
  url?: string;
  display_description?: string;
  id?: string;
  type_name?: string;
  apple_touch_icon_images?: any;
  products?: any[];
  favicon_images?: FaviconImages;
  site_name?: string;
  apple_touch_icon_link?: any;
  type?: string;
}

interface FaviconImages {
  orig?: string;
}

interface Board {
  node_id?: string;
  image_thumbnail_url?: string;
  url?: string;
  privacy?: string;
  name?: string;
  id?: string;
  type?: string;
}

interface LinkDomain {
  node_id?: string;
  official_user?: any;
}

interface Images {
  "170x"?: N170x;
  "236x"?: N236x;
  "736x"?: N736x;
}

interface N170x {
  width?: number;
  height?: number;
  url?: string;
}

interface N236x {
  width?: number;
  height?: number;
  url?: string;
}

interface N736x {
  width?: number;
  height?: number;
  url?: string;
}

interface ReactionCounts {
  "1"?: number;
  "7"?: number;
  "11"?: number;
  "13"?: number;
  "5"?: number;
}

interface ImageCrop {
  min_y?: number;
  max_y?: number;
}

interface StoryPinData {
  node_id?: string;
  page_count?: number;
  last_edited?: any;
  has_affiliate_products?: boolean;
  static_page_count?: number;
  pages?: Page[];
  id?: string;
  has_product_pins?: boolean;
  metadata?: Metadata;
  pages_preview?: PagesPreview[];
  type?: string;
  total_video_duration?: number;
}

interface Page {
  layout?: number;
  image?: any;
  image_signature_adjusted?: string;
  video?: any;
  image_adjusted?: any;
  style?: Style;
  video_signature?: string;
  image_signature?: string;
  id?: string;
  music_attributions?: any[];
  blocks?: Block[];
  should_mute?: boolean;
  type?: string;
}

interface Style {
  background_color?: string;
  media_fit?: any;
}

interface Block {
  video?: Video;
  block_type?: number;
}

interface Video {
  video_list?: VideoList;
  id?: string;
  bitrates?: any;
}

interface VideoList {
  V_EXP3?: VExp3;
  V_EXP7?: VExp7;
  V_EXP5?: VExp5;
  V_EXP6?: VExp6;
  V_HLSV3_MOBILE?: VHlsv3Mobile;
  V_EXP4?: VExp4;
}

interface VExp3 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls;
  best_captions_url?: string;
}

interface CaptionsUrls {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp7 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls2;
  best_captions_url?: string;
}

interface CaptionsUrls2 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp5 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls3;
  best_captions_url?: string;
}

interface CaptionsUrls3 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp6 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls4;
  best_captions_url?: string;
}

interface CaptionsUrls4 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VHlsv3Mobile {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls5;
  best_captions_url?: string;
}

interface CaptionsUrls5 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp4 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls6;
  best_captions_url?: string;
}

interface CaptionsUrls6 {
  "en-us"?: string;
  "es-us"?: string;
}

interface Metadata {
  showreel_data?: any;
  diy_data?: any;
  canvas_aspect_ratio?: number;
  template_type?: any;
  recipe_data?: any;
  is_compatible?: boolean;
  root_pin_id?: string;
  version?: string;
  root_user_id?: string;
  is_editable?: boolean;
  basics?: any;
  pin_title?: string;
  compatible_version?: string;
  pin_image_signature?: string;
  is_promotable?: boolean;
}

interface PagesPreview {
  layout?: number;
  image?: any;
  image_signature_adjusted?: string;
  video?: any;
  image_adjusted?: any;
  style?: Style2;
  video_signature?: string;
  image_signature?: string;
  id?: string;
  music_attributions?: any[];
  blocks?: Block2[];
  should_mute?: boolean;
  type?: string;
}

interface Style2 {
  background_color?: string;
  media_fit?: any;
}

interface Block2 {
  video?: Video2;
  block_type?: number;
}

interface Video2 {
  video_list?: VideoList2;
  id?: string;
  bitrates?: any;
}

interface VideoList2 {
  V_EXP3?: VExp32;
  V_EXP7?: VExp72;
  V_EXP5?: VExp52;
  V_EXP6?: VExp62;
  V_HLSV3_MOBILE?: VHlsv3Mobile2;
  V_EXP4?: VExp42;
}

interface VExp32 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls7;
  best_captions_url?: string;
}

interface CaptionsUrls7 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp72 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls8;
  best_captions_url?: string;
}

interface CaptionsUrls8 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp52 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls9;
  best_captions_url?: string;
}

interface CaptionsUrls9 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp62 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls10;
  best_captions_url?: string;
}

interface CaptionsUrls10 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VHlsv3Mobile2 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls11;
  best_captions_url?: string;
}

interface CaptionsUrls11 {
  "en-us"?: string;
  "es-us"?: string;
}

interface VExp42 {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail?: string;
  captions_urls?: CaptionsUrls12;
  best_captions_url?: string;
}

interface CaptionsUrls12 {
  "en-us"?: string;
  "es-us"?: string;
}

interface Sensitivity {}

interface OneBarModule {
  action?: Action;
  module_type?: number;
  id?: string;
  animation?: number;
  aux_data?: any;
  display?: Display2;
  type?: string;
}

interface Action {
  title?: string;
  filter_type?: number;
  id?: string;
  id_reformatted?: string;
  search_query?: any;
  feed_url?: any;
  type?: string;
  filters?: Filter[];
}

interface Filter {
  is_selected?: boolean;
  action?: Action2;
  id?: string;
  disabled?: boolean;
  id_reformatted?: string;
  display?: Display;
  type?: string;
}

interface Action2 {
  one_bar_filters?: any[];
  filters?: any[];
  search_parameters?: any[];
  title?: any;
  filter_type?: number;
  request_params?: any;
  annotated_title?: any;
  id?: string;
  id_reformatted?: string;
  feed_url?: string;
  filter_keys?: any[];
  type?: string;
  search_query?: any;
}

interface Display {
  image_urls?: any[];
  background_color_hex?: any[];
  selected_text_color_hex?: any[];
  selected_border_color_hex?: any[];
  is_selected?: boolean;
  display_text?: string;
  image_medium_url?: any;
  alt_text?: any;
  id?: string;
  id_reformatted?: string;
  selected_background_color_hex?: any[];
  icon_url?: any;
  text_color_hex?: any[];
  type?: string;
  border_color_hex?: any[];
  icon?: number;
}

interface Display2 {
  image_urls?: any[];
  background_color_hex?: string[];
  selected_text_color_hex?: string[];
  selected_border_color_hex?: any[];
  is_selected?: boolean;
  display_text?: any;
  image_medium_url?: any;
  alt_text?: any;
  id?: string;
  id_reformatted?: string;
  selected_background_color_hex?: string[];
  icon_url?: any;
  text_color_hex?: string[];
  type?: string;
  border_color_hex?: any[];
  icon?: number;
}

interface SearchNag {
  nag?: Nag2;
  theme?: any;
}

interface Nag2 {}

interface Metadata2 {
  unity_search_query?: any;
  one_bar_modules?: OneBarModule2[];
  feed_group_id?: string;
  client_tracking_params?: string;
  mode_icon?: any;
  query_l1_vertical_ids?: number[];
}

interface OneBarModule2 {
  action?: Action3;
  module_type?: number;
  id?: string;
  animation?: number;
  aux_data?: any;
  display?: Display4;
  type?: string;
}

interface Action3 {
  title?: string;
  filter_type?: number;
  id?: string;
  id_reformatted?: string;
  search_query?: any;
  feed_url?: any;
  type?: string;
  filters?: Filter2[];
}

interface Filter2 {
  is_selected?: boolean;
  action?: Action4;
  id?: string;
  disabled?: boolean;
  id_reformatted?: string;
  display?: Display3;
  type?: string;
}

interface Action4 {
  one_bar_filters?: any[];
  filters?: any[];
  search_parameters?: any[];
  title?: any;
  filter_type?: number;
  request_params?: any;
  annotated_title?: any;
  id?: string;
  id_reformatted?: string;
  feed_url?: string;
  filter_keys?: any[];
  type?: string;
  search_query?: any;
}

interface Display3 {
  image_urls?: any[];
  background_color_hex?: any[];
  selected_text_color_hex?: any[];
  selected_border_color_hex?: any[];
  is_selected?: boolean;
  display_text?: string;
  image_medium_url?: any;
  alt_text?: any;
  id?: string;
  id_reformatted?: string;
  selected_background_color_hex?: any[];
  icon_url?: any;
  text_color_hex?: any[];
  type?: string;
  border_color_hex?: any[];
  icon?: number;
}

interface Display4 {
  image_urls?: any[];
  background_color_hex?: string[];
  selected_text_color_hex?: string[];
  selected_border_color_hex?: any[];
  is_selected?: boolean;
  display_text?: any;
  image_medium_url?: any;
  alt_text?: any;
  id?: string;
  id_reformatted?: string;
  selected_background_color_hex?: string[];
  icon_url?: any;
  text_color_hex?: string[];
  type?: string;
  border_color_hex?: any[];
  icon?: number;
}

interface ClientContext {
  analysis_ua?: AnalysisUa;
  app_type_detailed?: number;
  app_version?: string;
  batch_exp?: boolean;
  browser_locale?: string;
  browser_name?: string;
  browser_type?: number;
  browser_version?: string;
  country?: string;
  country_from_hostname?: string;
  country_from_ip?: string;
  csp_nonce?: string;
  current_url?: string;
  debug?: boolean;
  enabled_advertiser_countries?: string[];
  facebook_token?: any;
  full_path?: string;
  http_referrer?: string;
  impersonator_user_id?: any;
  invite_code?: string;
  invite_sender_id?: string;
  is_authenticated?: boolean;
  is_bot?: string;
  is_internal_ip?: boolean;
  is_full_page?: boolean;
  is_managed_advertiser?: boolean;
  is_mobile_agent?: boolean;
  is_shop_the_pin_campaign_whitelisted?: boolean;
  is_sterling_on_steroids?: boolean;
  is_tablet_agent?: boolean;
  language?: string;
  locale?: string;
  origin?: string;
  path?: string;
  placed_experiences?: any;
  referrer?: any;
  region_from_ip?: string;
  request_host?: string;
  request_identifier?: string;
  social_bot?: string;
  stage?: string;
  sterling_on_steroids_ldap?: any;
  sterling_on_steroids_user_type?: any;
  theme?: string;
  unauth_id?: string;
  seo_debug?: boolean;
  user_agent_can_use_native_app?: boolean;
  user_agent_platform?: string;
  user_agent_platform_version?: number[];
  user_agent?: string;
  user?: User;
  utm_campaign?: any;
  visible_url?: string;
}

interface AnalysisUa {
  app_type?: number;
  browser_name?: string;
  browser_version?: string;
  device_type?: number;
  device?: string;
  os_name?: string;
  os_version?: string;
}

interface User {
  node_id?: string;
  has_mfa_enabled?: boolean;
  first_name?: string;
  age_in_years?: number;
  country?: string;
  custom_gender?: any;
  epik?: string;
  should_show_messaging?: boolean;
  image_large_url?: string;
  allow_marketing_cookies?: any;
  has_quicksave_board?: boolean;
  nags?: any[];
  ip_region?: string;
  is_any_website_verified?: boolean;
  is_high_risk?: boolean;
  gender?: string;
  can_enable_mfa?: boolean;
  push_package_user_id?: string;
  facebook_timeline_enabled?: boolean;
  ip_country?: string;
  connected_to_google?: boolean;
  listed_website_url?: string;
  login_state?: number;
  is_private_profile?: boolean;
  connected_to_dropbox?: boolean;
  username?: string;
  id?: string;
  connected_to_etsy?: boolean;
  is_parental_control_passcode_verification_pending?: boolean;
  domain_url?: any;
  allow_switch_between_private_and_public_profile?: boolean;
  phone_number_end?: string;
  is_employee?: boolean;
  phone_number?: any;
  unverified_phone_number_without_country?: string;
  is_matured_new_user?: boolean;
  allow_personalization_cookies?: any;
  can_edit_search_privacy?: boolean;
  unverified_phone_country?: any;
  verified_identity?: VerifiedIdentity3;
  third_party_marketing_tracking_enabled?: boolean;
  full_name?: string;
  parental_control_anonymized_email?: any;
  image_xlarge_url?: string;
  is_eligible_for_image_only_grid?: boolean;
  verified_domains?: any[];
  has_password?: boolean;
  last_name?: string;
  facebook_id?: string;
  is_under_18?: boolean;
  unverified_phone_number?: any;
  opt_in_private_account?: boolean;
  facebook_publish_stream_enabled?: boolean;
  teen_safety_options_url?: any;
  type?: string;
  image_medium_url?: string;
  is_partner?: boolean;
  is_ads_only_profile?: boolean;
  exclude_from_search?: boolean;
  twitter_publish_enabled?: boolean;
  personalize_from_offsite_browsing?: boolean;
  created_at?: string;
  is_write_banned?: boolean;
  connected_to_instagram?: boolean;
  connected_to_facebook?: boolean;
  twitter_url?: any;
  connected_to_youtube?: boolean;
  connected_to_microsoft?: boolean;
  allow_analytic_cookies?: any;
  ads_only_profile_site?: any;
  domain_verified?: boolean;
  resurrection_info?: any;
  gplus_url?: string;
  image_small_url?: string;
  profile_discovered_public?: any;
  verified_user_websites?: any[];
  website_url?: string;
  phone_country?: any;
  search_privacy_enabled?: boolean;
  is_candidate_for_parental_control_passcode?: boolean;
  is_parental_control_passcode_enabled?: boolean;
  email?: string;
  is_under_16?: boolean;
}

interface VerifiedIdentity3 {}

interface Resource {
  name?: string;
  options?: Options;
}

interface Options {
  bookmarks?: string[];
  applied_filters?: any;
  appliedProductFilters?: string;
  article?: any;
  auto_correction_disabled?: boolean;
  corpus?: any;
  customized_rerank_type?: any;
  domains?: any;
  filters?: any;
  journey_depth?: any;
  page_size?: any;
  price_max?: any;
  price_min?: any;
  query_pin_sigs?: any;
  query?: string;
  redux_normalize_feed?: boolean;
  rs?: string;
  scope?: string;
  selected_one_bar_modules?: any;
  source_id?: any;
  source_module_id?: any;
  source_url?: string;
  top_pin_id?: any;
  top_pin_ids?: any;
}
