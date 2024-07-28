export interface PinterestSearchData {
    resource_response?: ResourceResponse
    client_context?: ClientContext
    resource?: Resource
    request_identifier?: string
}

interface ResourceResponse {
    status?: string
    code?: number
    message?: string
    endpoint_name?: string
    data?: Data
    bookmark?: string
    search_nag?: SearchNag
    mode_icon?: any
    query_l1_vertical_ids?: number[]
    metadata?: Metadata2
    x_pinterest_sli_endpoint_name?: string
    http_status?: number
}

interface Data {
    clientTrackingParams?: string
    nag?: Nag
    should_append_global_search?: boolean
    results?: Result[]
    rankedGuides?: RankedGuide[]
    sensitivity?: Sensitivity
    oneBarModules?: OneBarModule[]
    modeIcon?: any
    query_l1_vertical_ids?: number[]
    no_gift_wrap?: boolean
}

interface Nag { }

interface Result {
    node_id?: string
    image_signature?: string
    is_eligible_for_filters?: boolean
    link_domain?: LinkDomain
    ad_match_reason?: number
    reaction_counts?: ReactionCounts
    aggregated_pin_data?: AggregatedPinData
    link_user_website?: LinkUserWebsite
    debug_info_html?: any
    carousel_data?: any
    embed?: any
    domain?: string
    should_open_in_stream?: boolean
    id?: string
    access?: any[]
    did_its?: any[]
    promoted_is_removable?: boolean
    promoter?: any
    dominant_color?: string
    is_eligible_for_pdp?: boolean
    is_oos_product?: boolean
    is_promoted?: boolean
    promoted_is_lead_ad?: boolean
    auto_alt_text?: string
    link?: string
    is_prefetch_enabled?: boolean
    title?: string
    is_stale_product?: boolean
    pinner?: Pinner
    images?: Images
    is_eligible_for_web_closeup?: boolean
    story_pin_data_id?: string
    type?: string
    call_to_action_text?: any
    image_crop?: ImageCrop
    insertion_id?: any
    has_required_attribution_provider?: boolean
    promoted_lead_form?: any
    tracking_params?: string
    is_eligible_for_related_products?: boolean
    is_downstream_promotion?: boolean
    videos?: any
    description?: string
    sponsorship?: any
    campaign_id?: any
    collection_pin?: any
    is_uploaded?: boolean
    attribution?: Attribution
    alt_text?: any
    created_at?: string
    grid_title?: string
    rich_summary?: RichSummary
    shopping_flags?: any[]
    story_pin_data?: StoryPinData
    board?: Board
}

interface LinkDomain {
    node_id?: string
    official_user?: OfficialUser
}

interface OfficialUser {
    node_id?: string
    username?: string
    id?: string
    verified_identity?: VerifiedIdentity
    is_verified_merchant?: boolean
    image_medium_url?: string
    ads_only_profile_site?: any
    follower_count?: number
    is_ads_only_profile?: boolean
    image_small_url?: string
    full_name?: string
    image_large_url?: string
}

interface VerifiedIdentity {
    name?: string
    verified?: boolean
}

interface ReactionCounts {
    "1"?: number
    "5"?: number
    "13"?: number
}

interface AggregatedPinData {
    node_id?: string
    has_xy_tags?: boolean
}

interface LinkUserWebsite {
    node_id?: string
    official_user?: OfficialUser2
}

interface OfficialUser2 {
    node_id?: string
    username?: string
    id?: string
    verified_identity?: VerifiedIdentity2
    is_verified_merchant?: boolean
    image_medium_url?: string
    ads_only_profile_site?: any
    follower_count?: number
    is_ads_only_profile?: boolean
    image_small_url?: string
    full_name?: string
    image_large_url?: string
}

interface VerifiedIdentity2 { }

interface Pinner {
    node_id?: string
    username?: string
    id?: string
    verified_identity?: VerifiedIdentity3
    is_verified_merchant?: boolean
    image_medium_url?: string
    ads_only_profile_site?: any
    follower_count?: number
    is_ads_only_profile?: boolean
    image_small_url?: string
    full_name?: string
    image_large_url?: string
}

interface VerifiedIdentity3 { }

interface Images {
    "170x"?: N170x
    "236x"?: N236x
    "474x"?: N474x
    "736x"?: N736x
    orig?: Orig
}

interface N170x {
    width?: number
    height?: number
    url?: string
}

interface N236x {
    width?: number
    height?: number
    url?: string
}

interface N474x {
    width?: number
    height?: number
    url?: string
}

interface N736x {
    width?: number
    height?: number
    url?: string
}

interface Orig {
    width?: number
    height?: number
    url?: string
}

interface ImageCrop {
    min_y?: number
    max_y?: number
}

interface Attribution {
    provider_name?: string
    url?: string
    author_name?: string
    author_url?: string
    title?: string
}

interface RichSummary {
    favicon_link?: string
    type_name?: string
    products?: any[]
    type?: string
    favicon_images?: FaviconImages
    display_name?: string
    url?: string
    apple_touch_icon_link?: string
    id?: string
    apple_touch_icon_images?: AppleTouchIconImages
    display_description?: string
    actions?: any[]
    site_name?: string
}

interface FaviconImages {
    orig?: string
}

interface AppleTouchIconImages {
    orig?: string
}

interface StoryPinData {
    node_id?: string
    id?: string
    metadata?: Metadata
    last_edited?: any
    has_product_pins?: boolean
    type?: string
    pages?: Page[]
    page_count?: number
    has_affiliate_products?: boolean
    pages_preview?: PagesPreview[]
    static_page_count?: number
    total_video_duration?: number
}

interface Metadata {
    canvas_aspect_ratio?: number
    compatible_version?: string
    version?: string
    root_pin_id?: string
    template_type?: any
    diy_data?: any
    root_user_id?: string
    is_promotable?: boolean
    pin_image_signature?: string
    is_editable?: boolean
    showreel_data?: any
    pin_title?: string
    is_compatible?: boolean
    basics?: any
    recipe_data?: any
}

interface Page {
    image_signature?: string
    id?: string
    style?: Style
    video_signature?: any
    type?: string
    should_mute?: boolean
    music_attributions?: any[]
    image_adjusted?: any
    image_signature_adjusted?: string
    layout?: number
    video?: any
    blocks?: Block[]
    image?: any
}

interface Style {
    background_color?: string
    media_fit?: any
}

interface Block {
    image_signature?: string
    tracking_id?: string
    block_type?: number
    block_style?: BlockStyle
    type?: string
    text?: string
    image?: any
}

interface BlockStyle {
    rotation?: number
    y_coord?: number
    height?: number
    corner_radius?: number
    width?: number
    x_coord?: number
}

interface PagesPreview {
    image_signature?: string
    id?: string
    style?: Style2
    video_signature?: any
    type?: string
    should_mute?: boolean
    music_attributions?: any[]
    image_adjusted?: any
    image_signature_adjusted?: string
    layout?: number
    video?: any
    blocks?: Block2[]
    image?: any
}

interface Style2 {
    background_color?: string
    media_fit?: any
}

interface Block2 {
    image_signature?: string
    tracking_id?: string
    block_type?: number
    block_style?: BlockStyle2
    type?: string
    text?: string
    image?: any
}

interface BlockStyle2 {
    rotation?: number
    y_coord?: number
    height?: number
    corner_radius?: number
    width?: number
    x_coord?: number
}

interface Board {
    node_id?: string
    name?: string
    url?: string
}

interface RankedGuide {
    term?: string
    display?: string
    position?: number
    dominant_color?: string
    source?: number
    guideType?: number
    image_medium_url?: string
    subtracted_attributes?: any[]
    canonicalized_attr_id?: any
}

interface Sensitivity { }

interface OneBarModule {
    id?: string
    animation?: number
    type?: string
    aux_data?: AuxData
    action?: Action
    display?: Display2
    module_type?: number
    tracking_params?: string
}

interface AuxData {
    filter?: any
    hybrid_search_params?: any
    query?: string
    options?: any[]
    subtracted_attributes?: any[]
    rs?: string
    journey_depth?: number
    entered_query?: string
    label?: string
    module_type?: string
    source_module_id?: any
    module_id?: string
    top_level_selection_label?: any
    pos?: number
}

interface Action {
    search_query?: string
    id?: string
    filters?: Filter[]
    filter_type?: number
    type?: string
    id_reformatted?: string
    feed_url?: any
    title?: string
    filter_keys?: any[]
    request_params?: RequestParams
    one_bar_filters?: any[]
    search_parameters?: any[]
    annotated_title?: any
}

interface Filter {
    id?: string
    is_selected?: boolean
    type?: string
    id_reformatted?: string
    action?: Action2
    disabled?: boolean
    display?: Display
}

interface Action2 {
    search_query?: any
    id?: string
    filters?: any[]
    filter_keys?: any[]
    filter_type?: number
    type?: string
    request_params?: any
    one_bar_filters?: any[]
    search_parameters?: any[]
    id_reformatted?: string
    feed_url?: string
    annotated_title?: any
    title?: any
}

interface Display {
    id?: string
    is_selected?: boolean
    border_color_hex?: any[]
    icon?: number
    image_medium_url?: any
    background_color_hex?: any[]
    type?: string
    id_reformatted?: string
    icon_url?: any
    alt_text?: any
    selected_border_color_hex?: any[]
    selected_text_color_hex?: any[]
    image_urls?: any[]
    display_text?: string
    text_color_hex?: any[]
    selected_background_color_hex?: any[]
}

interface RequestParams {
    journey_depth?: number
    source_module_id?: string
}

interface Display2 {
    id?: string
    is_selected?: boolean
    border_color_hex?: any[]
    icon?: number
    image_medium_url?: string
    background_color_hex?: string[]
    type?: string
    id_reformatted?: string
    icon_url?: any
    alt_text?: any
    selected_border_color_hex?: any[]
    selected_text_color_hex?: string[]
    image_urls?: any[]
    display_text?: string
    text_color_hex?: string[]
    selected_background_color_hex?: string[]
}

interface SearchNag {
    nag?: Nag2
    theme?: any
}

interface Nag2 { }

interface Metadata2 {
    ranked_guides?: RankedGuide2[]
    one_bar_modules?: OneBarModule2[]
    feed_group_id?: string
    client_tracking_params?: string
    mode_icon?: any
    query_l1_vertical_ids?: number[]
}

interface RankedGuide2 {
    term?: string
    display?: string
    position?: number
    dominant_color?: string
    source?: number
    guideType?: number
    image_medium_url?: string
    subtracted_attributes?: any[]
    canonicalized_attr_id?: any
}

interface OneBarModule2 {
    id?: string
    animation?: number
    type?: string
    aux_data?: AuxData2
    action?: Action3
    display?: Display4
    module_type?: number
    tracking_params?: string
}

interface AuxData2 {
    filter?: any
    hybrid_search_params?: any
    query?: string
    options?: any[]
    subtracted_attributes?: any[]
    rs?: string
    journey_depth?: number
    entered_query?: string
    label?: string
    module_type?: string
    source_module_id?: any
    module_id?: string
    top_level_selection_label?: any
    pos?: number
}

interface Action3 {
    search_query?: string
    id?: string
    filters?: Filter2[]
    filter_type?: number
    type?: string
    id_reformatted?: string
    feed_url?: any
    title?: string
    filter_keys?: any[]
    request_params?: RequestParams2
    one_bar_filters?: any[]
    search_parameters?: any[]
    annotated_title?: any
}

interface Filter2 {
    id?: string
    is_selected?: boolean
    type?: string
    id_reformatted?: string
    action?: Action4
    disabled?: boolean
    display?: Display3
}

interface Action4 {
    search_query?: any
    id?: string
    filters?: any[]
    filter_keys?: any[]
    filter_type?: number
    type?: string
    request_params?: any
    one_bar_filters?: any[]
    search_parameters?: any[]
    id_reformatted?: string
    feed_url?: string
    annotated_title?: any
    title?: any
}

interface Display3 {
    id?: string
    is_selected?: boolean
    border_color_hex?: any[]
    icon?: number
    image_medium_url?: any
    background_color_hex?: any[]
    type?: string
    id_reformatted?: string
    icon_url?: any
    alt_text?: any
    selected_border_color_hex?: any[]
    selected_text_color_hex?: any[]
    image_urls?: any[]
    display_text?: string
    text_color_hex?: any[]
    selected_background_color_hex?: any[]
}

interface RequestParams2 {
    journey_depth?: number
    source_module_id?: string
}

interface Display4 {
    id?: string
    is_selected?: boolean
    border_color_hex?: any[]
    icon?: number
    image_medium_url?: string
    background_color_hex?: string[]
    type?: string
    id_reformatted?: string
    icon_url?: any
    alt_text?: any
    selected_border_color_hex?: any[]
    selected_text_color_hex?: string[]
    image_urls?: any[]
    display_text?: string
    text_color_hex?: string[]
    selected_background_color_hex?: string[]
}

interface ClientContext {
    analysis_ua?: AnalysisUa
    app_type_detailed?: number
    app_version?: string
    batch_exp?: boolean
    browser_locale?: string
    browser_name?: string
    browser_type?: number
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

interface AnalysisUa {
    app_type?: number
    browser_name?: string
    browser_version?: string
    device_type?: any
    device?: string
    os_name?: string
    os_version?: string
}

interface User {
    unauth_id?: string
    ip_country?: string
    ip_region?: string
}

interface Resource {
    name?: string
    options?: Options
}

interface Options {
    bookmarks?: string[]
    applied_filters?: any
    appliedProductFilters?: string
    article?: any
    auto_correction_disabled?: boolean
    corpus?: any
    customized_rerank_type?: any
    domains?: any
    filters?: any
    journey_depth?: any
    page_size?: any
    price_max?: any
    price_min?: any
    query_pin_sigs?: any
    query?: string
    redux_normalize_feed?: boolean
    rs?: string
    scope?: string
    selected_one_bar_modules?: any
    source_id?: any
    source_module_id?: any
    top_pin_id?: any
}
