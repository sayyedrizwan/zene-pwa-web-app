export interface InstagramPostsData {
    data?: Data
    status?: string
  }
  
  interface Data {
    user?: InstaUser
  }
  
  export interface InstaUser {
    ai_agent_type?: any
    biography?: string
    bio_links?: BioLink[]
    fb_profile_biolink?: any
    biography_with_entities?: BiographyWithEntities
    blocked_by_viewer?: boolean
    restricted_by_viewer?: any
    country_block?: boolean
    eimu_id?: string
    external_url?: string
    external_url_linkshimmed?: string
    edge_followed_by?: EdgeFollowedBy
    fbid?: string
    followed_by_viewer?: boolean
    edge_follow?: EdgeFollow
    follows_viewer?: boolean
    full_name?: string
    group_metadata?: any
    has_ar_effects?: boolean
    has_clips?: boolean
    has_guides?: boolean
    has_channel?: boolean
    has_blocked_viewer?: boolean
    highlight_reel_count?: number
    has_onboarded_to_text_post_app?: boolean
    has_requested_viewer?: boolean
    hide_like_and_view_counts?: boolean
    id?: string
    is_business_account?: boolean
    is_professional_account?: boolean
    is_supervision_enabled?: boolean
    is_guardian_of_viewer?: boolean
    is_supervised_by_viewer?: boolean
    is_supervised_user?: boolean
    is_embeds_disabled?: boolean
    is_joined_recently?: boolean
    guardian_id?: any
    business_address_json?: any
    business_contact_method?: string
    business_email?: any
    business_phone_number?: any
    business_category_name?: any
    overall_category_name?: any
    category_enum?: any
    category_name?: string
    is_private?: boolean
    is_verified?: boolean
    is_verified_by_mv4b?: boolean
    is_regulated_c18?: boolean
    edge_mutual_followed_by?: EdgeMutualFollowedBy
    pinned_channels_list_count?: number
    profile_pic_url?: string
    profile_pic_url_hd?: string
    requested_by_viewer?: boolean
    should_show_category?: boolean
    should_show_public_contacts?: boolean
    show_account_transparency_details?: boolean
    show_text_post_app_badge?: boolean
    remove_message_entrypoint?: boolean
    transparency_label?: any
    transparency_product?: any
    username?: string
    connected_fb_page?: any
    pronouns?: any[]
    edge_felix_video_timeline?: EdgeFelixVideoTimeline
    edge_owner_to_timeline_media?: EdgeOwnerToTimelineMedia
    edge_saved_media?: EdgeSavedMedia
    edge_media_collections?: EdgeMediaCollections
    edge_related_profiles?: EdgeRelatedProfiles
  }
  
  interface BioLink {
    title?: string
    lynx_url?: string
    url?: string
    link_type?: string
  }
  
  interface BiographyWithEntities {
    raw_text?: string
    entities?: Entity[]
  }
  
  interface Entity {
    user?: User2
    hashtag?: any
  }
  
  interface User2 {
    username?: string
  }
  
  interface EdgeFollowedBy {
    count?: number
  }
  
  interface EdgeFollow {
    count?: number
  }
  
  interface EdgeMutualFollowedBy {
    count?: number
    edges?: any[]
  }
  
  interface EdgeFelixVideoTimeline {
    count?: number
    page_info?: PageInfo
    edges?: Edge[]
  }
  
  interface PageInfo {
    has_next_page?: boolean
    end_cursor?: string
  }
  
  interface Edge {
    node?: Node
  }
  
  interface Node {
    __typename?: string
    id?: string
    shortcode?: string
    dimensions?: Dimensions
    display_url?: string
    edge_media_to_tagged_user?: EdgeMediaToTaggedUser
    fact_check_overall_rating?: any
    fact_check_information?: any
    gating_info?: any
    sharing_friction_info?: SharingFrictionInfo
    media_overlay_info?: any
    media_preview?: string
    owner?: Owner
    is_video?: boolean
    has_upcoming_event?: boolean
    accessibility_caption?: any
    dash_info?: DashInfo
    has_audio?: boolean
    tracking_token?: string
    video_url?: string
    video_view_count?: number
    edge_media_to_caption?: EdgeMediaToCaption
    edge_media_to_comment?: EdgeMediaToComment
    comments_disabled?: boolean
    taken_at_timestamp?: number
    edge_liked_by?: EdgeLikedBy
    edge_media_preview_like?: EdgeMediaPreviewLike
    location?: any
    nft_asset_info?: any
    thumbnail_src?: string
    thumbnail_resources?: ThumbnailResource[]
    felix_profile_grid_crop?: FelixProfileGridCrop
    coauthor_producers?: any[]
    pinned_for_users?: any[]
    viewer_can_reshare?: boolean
    like_and_view_counts_disabled?: boolean
    encoding_status?: any
    is_published?: boolean
    product_type?: string
    title?: string
    video_duration?: number
  }
  
  interface Dimensions {
    height?: number
    width?: number
  }
  
  interface EdgeMediaToTaggedUser {
    edges?: Edge2[]
  }
  
  interface Edge2 {
    node?: Node2
  }
  
  interface Node2 {
    user?: User3
    x?: number
    y?: number
  }
  
  interface User3 {
    full_name?: string
    followed_by_viewer?: boolean
    id?: string
    is_verified?: boolean
    profile_pic_url?: string
    username?: string
  }
  
  interface SharingFrictionInfo {
    should_have_sharing_friction?: boolean
    bloks_app_url?: any
  }
  
  interface Owner {
    id?: string
    username?: string
  }
  
  interface DashInfo {
    is_dash_eligible?: boolean
    video_dash_manifest?: string
    number_of_qualities?: number
  }
  
  interface EdgeMediaToCaption {
    edges?: Edge3[]
  }
  
  interface Edge3 {
    node?: Node3
  }
  
  interface Node3 {
    text?: string
  }
  
  interface EdgeMediaToComment {
    count?: number
  }
  
  interface EdgeLikedBy {
    count?: number
  }
  
  interface EdgeMediaPreviewLike {
    count?: number
  }
  
  interface ThumbnailResource {
    src?: string
    config_width?: number
    config_height?: number
  }
  
  interface FelixProfileGridCrop {
    crop_left?: number
    crop_right?: number
    crop_top?: number
    crop_bottom?: number
  }
  
  interface EdgeOwnerToTimelineMedia {
    count?: number
    page_info?: PageInfo2
    edges?: Edge4[]
  }
  
  interface PageInfo2 {
    has_next_page?: boolean
    end_cursor?: string
  }
  
  interface Edge4 {
    node?: Node4
  }
  
  interface Node4 {
    __typename?: string
    id?: string
    shortcode?: string
    dimensions?: Dimensions2
    display_url?: string
    edge_media_to_tagged_user?: EdgeMediaToTaggedUser2
    fact_check_overall_rating?: any
    fact_check_information?: any
    gating_info?: any
    sharing_friction_info?: SharingFrictionInfo2
    media_overlay_info?: any
    media_preview?: string
    owner?: Owner2
    is_video?: boolean
    has_upcoming_event?: boolean
    accessibility_caption?: string
    edge_media_to_caption?: EdgeMediaToCaption2
    edge_media_to_comment?: EdgeMediaToComment2
    comments_disabled?: boolean
    taken_at_timestamp?: number
    edge_liked_by?: EdgeLikedBy2
    edge_media_preview_like?: EdgeMediaPreviewLike2
    location?: any
    nft_asset_info?: any
    thumbnail_src?: string
    thumbnail_resources?: ThumbnailResource2[]
    coauthor_producers?: CoauthorProducer[]
    pinned_for_users?: any[]
    viewer_can_reshare?: boolean
    like_and_view_counts_disabled?: boolean
    edge_sidecar_to_children?: EdgeSidecarToChildren
    dash_info?: DashInfo2
    has_audio?: boolean
    tracking_token?: string
    video_url?: string
    video_view_count?: number
    felix_profile_grid_crop?: any
    product_type?: string
    clips_music_attribution_info?: ClipsMusicAttributionInfo
  }
  
  interface Dimensions2 {
    height?: number
    width?: number
  }
  
  interface EdgeMediaToTaggedUser2 {
    edges?: Edge5[]
  }
  
  interface Edge5 {
    node?: Node5
  }
  
  interface Node5 {
    user?: User4
    x?: number
    y?: number
  }
  
  interface User4 {
    full_name?: string
    followed_by_viewer?: boolean
    id?: string
    is_verified?: boolean
    profile_pic_url?: string
    username?: string
  }
  
  interface SharingFrictionInfo2 {
    should_have_sharing_friction?: boolean
    bloks_app_url?: any
  }
  
  interface Owner2 {
    id?: string
    username?: string
  }
  
  interface EdgeMediaToCaption2 {
    edges?: Edge6[]
  }
  
  interface Edge6 {
    node?: Node6
  }
  
  interface Node6 {
    text?: string
  }
  
  interface EdgeMediaToComment2 {
    count?: number
  }
  
  interface EdgeLikedBy2 {
    count?: number
  }
  
  interface EdgeMediaPreviewLike2 {
    count?: number
  }
  
  interface ThumbnailResource2 {
    src?: string
    config_width?: number
    config_height?: number
  }
  
  interface CoauthorProducer {
    id?: string
    is_verified?: boolean
    profile_pic_url?: string
    username?: string
  }
  
  interface EdgeSidecarToChildren {
    edges?: Edge7[]
  }
  
  interface Edge7 {
    node?: Node7
  }
  
  interface Node7 {
    __typename?: string
    id?: string
    shortcode?: string
    dimensions?: Dimensions3
    display_url?: string
    edge_media_to_tagged_user?: EdgeMediaToTaggedUser3
    fact_check_overall_rating?: any
    fact_check_information?: any
    gating_info?: any
    sharing_friction_info?: SharingFrictionInfo3
    media_overlay_info?: any
    media_preview?: string
    owner?: Owner3
    is_video?: boolean
    has_upcoming_event?: boolean
    accessibility_caption?: string
    video_url?: string
  }
  
  interface Dimensions3 {
    height?: number
    width?: number
  }
  
  interface EdgeMediaToTaggedUser3 {
    edges?: Edge8[]
  }
  
  interface Edge8 {
    node?: Node8
  }
  
  interface Node8 {
    user?: User5
    x?: number
    y?: number
  }
  
  interface User5 {
    full_name?: string
    followed_by_viewer?: boolean
    id?: string
    is_verified?: boolean
    profile_pic_url?: string
    username?: string
  }
  
  interface SharingFrictionInfo3 {
    should_have_sharing_friction?: boolean
    bloks_app_url?: any
  }
  
  interface Owner3 {
    id?: string
    username?: string
  }
  
  interface DashInfo2 {
    is_dash_eligible?: boolean
    video_dash_manifest?: string
    number_of_qualities?: number
  }
  
  interface ClipsMusicAttributionInfo {
    artist_name?: string
    song_name?: string
    uses_original_audio?: boolean
    should_mute_audio?: boolean
    should_mute_audio_reason?: string
    audio_id?: string
  }
  
  interface EdgeSavedMedia {
    count?: number
    page_info?: PageInfo3
    edges?: any[]
  }
  
  interface PageInfo3 {
    has_next_page?: boolean
    end_cursor?: any
  }
  
  interface EdgeMediaCollections {
    count?: number
    page_info?: PageInfo4
    edges?: any[]
  }
  
  interface PageInfo4 {
    has_next_page?: boolean
    end_cursor?: any
  }
  
  interface EdgeRelatedProfiles {
    edges?: Edge9[]
  }
  
  interface Edge9 {
    node?: Node9
  }
  
  interface Node9 {
    id?: string
    full_name?: string
    is_private?: boolean
    is_verified?: boolean
    profile_pic_url?: string
    username?: string
  }
  