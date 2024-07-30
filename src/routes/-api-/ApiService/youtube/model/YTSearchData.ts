export interface YTSearchData {
    estimatedResults?: string
    contents?: Contents
    trackingParams?: string
    header?: Header2
    topbar?: Topbar
    refinements?: string[]
    onResponseReceivedCommands?: OnResponseReceivedCommand[]
    targetId?: string
}

interface Contents {
    twoColumnSearchResultsRenderer?: TwoColumnSearchResultsRenderer
}

interface TwoColumnSearchResultsRenderer {
    primaryContents?: PrimaryContents
}

interface PrimaryContents {
    sectionListRenderer?: SectionListRenderer
}

interface SectionListRenderer {
    contents?: Content[]
    trackingParams?: string
    subMenu?: SubMenu
    hideBottomSeparator?: boolean
    targetId?: string
}

interface Content {
    itemSectionRenderer?: ItemSectionRenderer
    continuationItemRenderer?: ContinuationItemRenderer
}

interface ItemSectionRenderer {
    contents?: Content2[]
    trackingParams?: string
}

interface Content2 {
    videoRenderer?: VideoRenderer
    adSlotRenderer?: AdSlotRenderer
    radioRenderer?: RadioRenderer
    reelShelfRenderer?: ReelShelfRenderer
    shelfRenderer?: ShelfRenderer
}

interface VideoRenderer {
    videoId?: string
    thumbnail?: Thumbnail
    title?: Title
    longBylineText?: LongBylineText
    publishedTimeText?: PublishedTimeText
    lengthText?: LengthText
    viewCountText?: ViewCountText
    navigationEndpoint?: NavigationEndpoint2
    badges?: Badge[]
    ownerBadges?: OwnerBadge[]
    ownerText?: OwnerText
    shortBylineText?: ShortBylineText
    trackingParams?: string
    showActionMenu?: boolean
    shortViewCountText?: ShortViewCountText
    menu?: Menu
    channelThumbnailSupportedRenderers?: ChannelThumbnailSupportedRenderers
    thumbnailOverlays?: ThumbnailOverlay[]
    richThumbnail?: RichThumbnail
    detailedMetadataSnippets?: DetailedMetadataSnippet[]
    inlinePlaybackEndpoint?: InlinePlaybackEndpoint
    searchVideoResultEntityKey?: string
    isWatched?: boolean
}

interface Thumbnail {
    thumbnails?: Thumbnail2[]
}

interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
}

interface Title {
    runs?: Run[]
    accessibility?: Accessibility
}

interface Run {
    text?: string
}

interface Accessibility {
    accessibilityData?: AccessibilityData
}

interface AccessibilityData {
    label?: string
}

interface LongBylineText {
    runs?: Run2[]
}

interface Run2 {
    text?: string
    navigationEndpoint?: NavigationEndpoint
}

interface NavigationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata
    browseEndpoint?: BrowseEndpoint
}

interface CommandMetadata {
    webCommandMetadata?: WebCommandMetadata
}

interface WebCommandMetadata {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint {
    browseId?: string
    canonicalBaseUrl?: string
}

interface PublishedTimeText {
    simpleText?: string
}

interface LengthText {
    accessibility?: Accessibility2
    simpleText?: string
}

interface Accessibility2 {
    accessibilityData?: AccessibilityData2
}

interface AccessibilityData2 {
    label?: string
}

interface ViewCountText {
    simpleText?: string
}

interface NavigationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata2
    watchEndpoint?: WatchEndpoint
}

interface CommandMetadata2 {
    webCommandMetadata?: WebCommandMetadata2
}

interface WebCommandMetadata2 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint {
    videoId?: string
    params?: string
    playerParams?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
}

interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig
}

interface Html5PlaybackOnesieConfig {
    commonConfig?: CommonConfig
}

interface CommonConfig {
    url?: string
}

interface Badge {
    metadataBadgeRenderer?: MetadataBadgeRenderer
}

interface MetadataBadgeRenderer {
    style?: string
    label?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData3
}

interface AccessibilityData3 {
    label?: string
}

interface OwnerBadge {
    metadataBadgeRenderer?: MetadataBadgeRenderer2
}

interface MetadataBadgeRenderer2 {
    icon?: Icon
    style?: string
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData4
}

interface Icon {
    iconType?: string
}

interface AccessibilityData4 {
    label?: string
}

interface OwnerText {
    runs?: Run3[]
}

interface Run3 {
    text?: string
    navigationEndpoint?: NavigationEndpoint3
}

interface NavigationEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata3
    browseEndpoint?: BrowseEndpoint2
}

interface CommandMetadata3 {
    webCommandMetadata?: WebCommandMetadata3
}

interface WebCommandMetadata3 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint2 {
    browseId?: string
    canonicalBaseUrl?: string
}

interface ShortBylineText {
    runs?: Run4[]
}

interface Run4 {
    text?: string
    navigationEndpoint?: NavigationEndpoint4
}

interface NavigationEndpoint4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata4
    browseEndpoint?: BrowseEndpoint3
}

interface CommandMetadata4 {
    webCommandMetadata?: WebCommandMetadata4
}

interface WebCommandMetadata4 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint3 {
    browseId?: string
    canonicalBaseUrl?: string
}

interface ShortViewCountText {
    accessibility?: Accessibility3
    simpleText?: string
}

interface Accessibility3 {
    accessibilityData?: AccessibilityData5
}

interface AccessibilityData5 {
    label?: string
}

interface Menu {
    menuRenderer?: MenuRenderer
}

interface MenuRenderer {
    items?: Item[]
    trackingParams?: string
    accessibility?: Accessibility4
}

interface Item {
    menuServiceItemRenderer?: MenuServiceItemRenderer
    menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer
}

interface MenuServiceItemRenderer {
    text?: Text
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
    hasSeparator?: boolean
}

interface Text {
    runs?: Run5[]
}

interface Run5 {
    text?: string
}

interface Icon2 {
    iconType?: string
}

interface ServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata5
    signalServiceEndpoint?: SignalServiceEndpoint
    playlistEditEndpoint?: PlaylistEditEndpoint
    addToPlaylistServiceEndpoint?: AddToPlaylistServiceEndpoint
    shareEntityServiceEndpoint?: ShareEntityServiceEndpoint
    getReportFormEndpoint?: GetReportFormEndpoint
}

interface CommandMetadata5 {
    webCommandMetadata?: WebCommandMetadata5
}

interface WebCommandMetadata5 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint {
    signal?: string
    actions?: Action[]
}

interface Action {
    clickTrackingParams?: string
    addToPlaylistCommand?: AddToPlaylistCommand
}

interface AddToPlaylistCommand {
    openMiniplayer?: boolean
    videoId?: string
    listType?: string
    onCreateListCommand?: OnCreateListCommand
    videoIds?: string[]
}

interface OnCreateListCommand {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata6
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint
}

interface CommandMetadata6 {
    webCommandMetadata?: WebCommandMetadata6
}

interface WebCommandMetadata6 {
    sendPost?: boolean
    apiUrl?: string
}

interface CreatePlaylistServiceEndpoint {
    videoIds?: string[]
    params?: string
}

interface PlaylistEditEndpoint {
    playlistId?: string
    actions?: Action2[]
}

interface Action2 {
    addedVideoId?: string
    action?: string
}

interface AddToPlaylistServiceEndpoint {
    videoId?: string
}

interface ShareEntityServiceEndpoint {
    serializedShareEntity?: string
    commands?: Command[]
}

interface Command {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction
}

interface OpenPopupAction {
    popup?: Popup
    popupType?: string
    beReused?: boolean
}

interface Popup {
    unifiedSharePanelRenderer?: UnifiedSharePanelRenderer
}

interface UnifiedSharePanelRenderer {
    trackingParams?: string
    showLoadingSpinner?: boolean
}

interface GetReportFormEndpoint {
    params?: string
}

interface MenuServiceItemDownloadRenderer {
    serviceEndpoint?: ServiceEndpoint2
    trackingParams?: string
}

interface ServiceEndpoint2 {
    clickTrackingParams?: string
    offlineVideoEndpoint?: OfflineVideoEndpoint
}

interface OfflineVideoEndpoint {
    videoId?: string
    onAddCommand?: OnAddCommand
}

interface OnAddCommand {
    clickTrackingParams?: string
    getDownloadActionCommand?: GetDownloadActionCommand
}

interface GetDownloadActionCommand {
    videoId?: string
    params?: string
}

interface Accessibility4 {
    accessibilityData?: AccessibilityData6
}

interface AccessibilityData6 {
    label?: string
}

interface ChannelThumbnailSupportedRenderers {
    channelThumbnailWithLinkRenderer?: ChannelThumbnailWithLinkRenderer
}

interface ChannelThumbnailWithLinkRenderer {
    thumbnail?: Thumbnail3
    navigationEndpoint?: NavigationEndpoint5
    accessibility?: Accessibility5
}

interface Thumbnail3 {
    thumbnails?: Thumbnail4[]
}

interface Thumbnail4 {
    url?: string
    width?: number
    height?: number
}

interface NavigationEndpoint5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata7
    browseEndpoint?: BrowseEndpoint4
}

interface CommandMetadata7 {
    webCommandMetadata?: WebCommandMetadata7
}

interface WebCommandMetadata7 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint4 {
    browseId?: string
    canonicalBaseUrl?: string
}

interface Accessibility5 {
    accessibilityData?: AccessibilityData7
}

interface AccessibilityData7 {
    label?: string
}

interface ThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
    thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
    thumbnailOverlayLoadingPreviewRenderer?: ThumbnailOverlayLoadingPreviewRenderer
    thumbnailOverlayResumePlaybackRenderer?: ThumbnailOverlayResumePlaybackRenderer
}

interface ThumbnailOverlayTimeStatusRenderer {
    text?: Text2
    style?: string
}

interface Text2 {
    accessibility?: Accessibility6
    simpleText?: string
}

interface Accessibility6 {
    accessibilityData?: AccessibilityData8
}

interface AccessibilityData8 {
    label?: string
}

interface ThumbnailOverlayToggleButtonRenderer {
    untoggledIcon?: UntoggledIcon
    toggledIcon?: ToggledIcon
    untoggledTooltip?: string
    toggledTooltip?: string
    untoggledServiceEndpoint?: UntoggledServiceEndpoint
    untoggledAccessibility?: UntoggledAccessibility
    toggledAccessibility?: ToggledAccessibility
    trackingParams?: string
    isToggled?: boolean
    toggledServiceEndpoint?: ToggledServiceEndpoint
}

interface UntoggledIcon {
    iconType?: string
}

interface ToggledIcon {
    iconType?: string
}

interface UntoggledServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata8
    signalServiceEndpoint?: SignalServiceEndpoint2
    playlistEditEndpoint?: PlaylistEditEndpoint2
}

interface CommandMetadata8 {
    webCommandMetadata?: WebCommandMetadata8
}

interface WebCommandMetadata8 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint2 {
    signal?: string
    actions?: Action3[]
}

interface Action3 {
    clickTrackingParams?: string
    addToPlaylistCommand?: AddToPlaylistCommand2
}

interface AddToPlaylistCommand2 {
    openMiniplayer?: boolean
    videoId?: string
    listType?: string
    onCreateListCommand?: OnCreateListCommand2
    videoIds?: string[]
}

interface OnCreateListCommand2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata9
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint2
}

interface CommandMetadata9 {
    webCommandMetadata?: WebCommandMetadata9
}

interface WebCommandMetadata9 {
    sendPost?: boolean
    apiUrl?: string
}

interface CreatePlaylistServiceEndpoint2 {
    videoIds?: string[]
    params?: string
}

interface PlaylistEditEndpoint2 {
    playlistId?: string
    actions?: Action4[]
}

interface Action4 {
    addedVideoId?: string
    action?: string
}

interface UntoggledAccessibility {
    accessibilityData?: AccessibilityData9
}

interface AccessibilityData9 {
    label?: string
}

interface ToggledAccessibility {
    accessibilityData?: AccessibilityData10
}

interface AccessibilityData10 {
    label?: string
}

interface ToggledServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata10
    playlistEditEndpoint?: PlaylistEditEndpoint3
}

interface CommandMetadata10 {
    webCommandMetadata?: WebCommandMetadata10
}

interface WebCommandMetadata10 {
    sendPost?: boolean
    apiUrl?: string
}

interface PlaylistEditEndpoint3 {
    playlistId?: string
    actions?: Action5[]
}

interface Action5 {
    action?: string
    removedVideoId?: string
}

interface ThumbnailOverlayNowPlayingRenderer {
    text?: Text3
}

interface Text3 {
    runs?: Run6[]
}

interface Run6 {
    text?: string
}

interface ThumbnailOverlayLoadingPreviewRenderer {
    text?: Text4
}

interface Text4 {
    runs?: Run7[]
}

interface Run7 {
    text?: string
}

interface ThumbnailOverlayResumePlaybackRenderer {
    percentDurationWatched?: number
}

interface RichThumbnail {
    movingThumbnailRenderer?: MovingThumbnailRenderer
}

interface MovingThumbnailRenderer {
    movingThumbnailDetails?: MovingThumbnailDetails
    enableHoveredLogging?: boolean
    enableOverlay?: boolean
}

interface MovingThumbnailDetails {
    thumbnails?: Thumbnail5[]
    logAsMovingThumbnail?: boolean
}

interface Thumbnail5 {
    url?: string
    width?: number
    height?: number
}

interface DetailedMetadataSnippet {
    snippetText?: SnippetText
    snippetHoverText?: SnippetHoverText
    maxOneLine?: boolean
}

interface SnippetText {
    runs?: Run8[]
}

interface Run8 {
    text?: string
    bold?: boolean
}

interface SnippetHoverText {
    runs?: Run9[]
}

interface Run9 {
    text?: string
}

interface InlinePlaybackEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata11
    watchEndpoint?: WatchEndpoint2
}

interface CommandMetadata11 {
    webCommandMetadata?: WebCommandMetadata11
}

interface WebCommandMetadata11 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint2 {
    videoId?: string
    params?: string
    playerParams?: string
    playerExtraUrlParams?: PlayerExtraUrlParam[]
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig2
}

interface PlayerExtraUrlParam {
    key?: string
    value?: string
}

interface WatchEndpointSupportedOnesieConfig2 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig2
}

interface Html5PlaybackOnesieConfig2 {
    commonConfig?: CommonConfig2
}

interface CommonConfig2 {
    url?: string
}

interface AdSlotRenderer {
    adSlotMetadata?: AdSlotMetadata
    fulfillmentContent?: FulfillmentContent
    enablePacfLoggingWeb?: boolean
}

interface AdSlotMetadata {
    slotId?: string
    slotType?: string
    slotPhysicalPosition?: number
    adSlotLoggingData?: AdSlotLoggingData
}

interface AdSlotLoggingData {
    serializedSlotAdServingDataEntry?: string
}

interface FulfillmentContent {
    fulfilledLayout?: FulfilledLayout
}

interface FulfilledLayout {
    inFeedAdLayoutRenderer?: InFeedAdLayoutRenderer
}

interface InFeedAdLayoutRenderer {
    adLayoutMetadata?: AdLayoutMetadata
    renderingContent?: RenderingContent
}

interface AdLayoutMetadata {
    layoutId?: string
    layoutType?: string
    adLayoutLoggingData?: AdLayoutLoggingData
}

interface AdLayoutLoggingData {
    serializedAdServingDataEntry?: string
}

interface RenderingContent {
    promotedSparklesWebRenderer?: PromotedSparklesWebRenderer
}

interface PromotedSparklesWebRenderer {
    thumbnail?: Thumbnail6
    title?: Title2
    description?: Description
    websiteText?: WebsiteText
    navigationEndpoint?: NavigationEndpoint6
    impressionCommands?: ImpressionCommand[]
    menu?: Menu2
    activeView?: ActiveView
    trackingParams?: string
    clickLocationTargets?: ClickLocationTarget[]
    mediaHoverOverlay?: MediaHoverOverlay
    mediaBadge?: MediaBadge
    promotedSparklesWebStyle?: string
    isSquareThumbnail?: boolean
    thumbnailNavigationEndpoint?: ThumbnailNavigationEndpoint
    adBadge?: AdBadge
}

interface Thumbnail6 {
    thumbnails?: Thumbnail7[]
}

interface Thumbnail7 {
    url?: string
    width?: number
    height?: number
}

interface Title2 {
    simpleText?: string
}

interface Description {
    simpleText?: string
}

interface WebsiteText {
    simpleText?: string
}

interface NavigationEndpoint6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata12
    urlEndpoint?: UrlEndpoint
}

interface CommandMetadata12 {
    webCommandMetadata?: WebCommandMetadata12
}

interface WebCommandMetadata12 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface UrlEndpoint {
    url?: string
    target?: string
    attributionSrcMode?: string
}

interface ImpressionCommand {
    clickTrackingParams?: string
    loggingUrls?: LoggingUrl[]
    pingingEndpoint?: PingingEndpoint
}

interface LoggingUrl {
    baseUrl?: string
}

interface PingingEndpoint {
    hack?: boolean
}

interface Menu2 {
    menuRenderer?: MenuRenderer2
}

interface MenuRenderer2 {
    trackingParams?: string
    isDisabled?: boolean
    disabledCommand?: DisabledCommand
}

interface DisabledCommand {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction2
}

interface OpenPopupAction2 {
    popup?: Popup2
    popupType?: string
    accessibilityData?: AccessibilityData11
}

interface Popup2 {
    aboutThisAdRenderer?: AboutThisAdRenderer
}

interface AboutThisAdRenderer {
    url?: Url
    trackingParams?: string
}

interface Url {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string
}

interface AccessibilityData11 {
    accessibilityData?: AccessibilityData12
}

interface AccessibilityData12 {
    label?: string
}

interface ActiveView {
    viewableCommands?: ViewableCommand[]
    endOfSessionCommands?: EndOfSessionCommand[]
    regexUriMacroValidator?: RegexUriMacroValidator
}

interface ViewableCommand {
    clickTrackingParams?: string
    loggingUrls?: LoggingUrl2[]
    pingingEndpoint?: PingingEndpoint2
}

interface LoggingUrl2 {
    baseUrl?: string
}

interface PingingEndpoint2 {
    hack?: boolean
}

interface EndOfSessionCommand {
    clickTrackingParams?: string
    loggingUrls?: LoggingUrl3[]
    pingingEndpoint?: PingingEndpoint3
}

interface LoggingUrl3 {
    baseUrl?: string
}

interface PingingEndpoint3 {
    hack?: boolean
}

interface RegexUriMacroValidator {
    emptyMap?: boolean
}

interface ClickLocationTarget {
    location?: string
    code?: number
    behaviorType?: string
}

interface MediaHoverOverlay {
    buttonRenderer?: ButtonRenderer
}

interface ButtonRenderer {
    style?: string
    text?: Text5
    icon?: Icon3
    trackingParams?: string
    iconPosition?: string
}

interface Text5 {
    simpleText?: string
}

interface Icon3 {
    iconType?: string
}

interface MediaBadge {
    metadataBadgeRenderer?: MetadataBadgeRenderer3
}

interface MetadataBadgeRenderer3 {
    icon?: Icon4
    style?: string
    trackingParams?: string
}

interface Icon4 {
    iconType?: string
}

interface ThumbnailNavigationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata13
    urlEndpoint?: UrlEndpoint2
}

interface CommandMetadata13 {
    webCommandMetadata?: WebCommandMetadata13
}

interface WebCommandMetadata13 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface UrlEndpoint2 {
    url?: string
    target?: string
    attributionSrcMode?: string
}

interface AdBadge {
    metadataBadgeRenderer?: MetadataBadgeRenderer4
}

interface MetadataBadgeRenderer4 {
    style?: string
    label?: string
    trackingParams?: string
}

interface RadioRenderer {
    playlistId?: string
    title?: Title3
    thumbnail?: Thumbnail8
    videoCountText?: VideoCountText
    navigationEndpoint?: NavigationEndpoint7
    trackingParams?: string
    videos?: Video[]
    thumbnailText?: ThumbnailText
    longBylineText?: LongBylineText2
    thumbnailOverlays?: ThumbnailOverlay2[]
    videoCountShortText?: VideoCountShortText
    thumbnailRenderer?: ThumbnailRenderer
}

interface Title3 {
    simpleText?: string
}

interface Thumbnail8 {
    thumbnails?: Thumbnail9[]
    sampledThumbnailColor?: SampledThumbnailColor
    darkColorPalette?: DarkColorPalette
    vibrantColorPalette?: VibrantColorPalette
}

interface Thumbnail9 {
    url?: string
    width?: number
    height?: number
}

interface SampledThumbnailColor {
    red?: number
    green?: number
    blue?: number
}

interface DarkColorPalette {
    section2Color?: number
    iconInactiveColor?: number
    iconDisabledColor?: number
}

interface VibrantColorPalette {
    iconInactiveColor?: number
}

interface VideoCountText {
    runs?: Run10[]
}

interface Run10 {
    text?: string
}

interface NavigationEndpoint7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata14
    watchEndpoint?: WatchEndpoint3
}

interface CommandMetadata14 {
    webCommandMetadata?: WebCommandMetadata14
}

interface WebCommandMetadata14 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint3 {
    videoId?: string
    playlistId?: string
    params?: string
    continuePlayback?: boolean
    loggingContext?: LoggingContext
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig3
}

interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
}

interface VssLoggingContext {
    serializedContextData?: string
}

interface WatchEndpointSupportedOnesieConfig3 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig3
}

interface Html5PlaybackOnesieConfig3 {
    commonConfig?: CommonConfig3
}

interface CommonConfig3 {
    url?: string
}

interface Video {
    childVideoRenderer?: ChildVideoRenderer
}

interface ChildVideoRenderer {
    title?: Title4
    navigationEndpoint?: NavigationEndpoint8
    lengthText?: LengthText2
    videoId?: string
}

interface Title4 {
    simpleText?: string
}

interface NavigationEndpoint8 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata15
    watchEndpoint?: WatchEndpoint4
}

interface CommandMetadata15 {
    webCommandMetadata?: WebCommandMetadata15
}

interface WebCommandMetadata15 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint4 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext2
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig4
}

interface LoggingContext2 {
    vssLoggingContext?: VssLoggingContext2
}

interface VssLoggingContext2 {
    serializedContextData?: string
}

interface WatchEndpointSupportedOnesieConfig4 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig4
}

interface Html5PlaybackOnesieConfig4 {
    commonConfig?: CommonConfig4
}

interface CommonConfig4 {
    url?: string
}

interface LengthText2 {
    accessibility?: Accessibility7
    simpleText?: string
}

interface Accessibility7 {
    accessibilityData?: AccessibilityData13
}

interface AccessibilityData13 {
    label?: string
}

interface ThumbnailText {
    runs?: Run11[]
}

interface Run11 {
    text?: string
    bold?: boolean
}

interface LongBylineText2 {
    simpleText?: string
}

interface ThumbnailOverlay2 {
    thumbnailOverlayBottomPanelRenderer?: ThumbnailOverlayBottomPanelRenderer
    thumbnailOverlayHoverTextRenderer?: ThumbnailOverlayHoverTextRenderer
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer2
}

interface ThumbnailOverlayBottomPanelRenderer {
    text?: Text6
    icon?: Icon5
}

interface Text6 {
    simpleText?: string
}

interface Icon5 {
    iconType?: string
}

interface ThumbnailOverlayHoverTextRenderer {
    text?: Text7
    icon?: Icon6
}

interface Text7 {
    runs?: Run12[]
}

interface Run12 {
    text?: string
}

interface Icon6 {
    iconType?: string
}

interface ThumbnailOverlayNowPlayingRenderer2 {
    text?: Text8
}

interface Text8 {
    runs?: Run13[]
}

interface Run13 {
    text?: string
}

interface VideoCountShortText {
    runs?: Run14[]
}

interface Run14 {
    text?: string
}

interface ThumbnailRenderer {
    playlistVideoThumbnailRenderer?: PlaylistVideoThumbnailRenderer
}

interface PlaylistVideoThumbnailRenderer {
    thumbnail?: Thumbnail10
    trackingParams?: string
}

interface Thumbnail10 {
    thumbnails?: Thumbnail11[]
}

interface Thumbnail11 {
    url?: string
    width?: number
    height?: number
}

interface ReelShelfRenderer {
    title?: Title5
    button?: Button
    items?: Item3[]
    trackingParams?: string
    icon?: Icon10
}

interface Title5 {
    simpleText?: string
}

interface Button {
    menuRenderer?: MenuRenderer3
}

interface MenuRenderer3 {
    items?: Item2[]
    trackingParams?: string
    accessibility?: Accessibility9
}

interface Item2 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
}

interface MenuNavigationItemRenderer {
    text?: Text9
    icon?: Icon7
    navigationEndpoint?: NavigationEndpoint9
    trackingParams?: string
    accessibility?: Accessibility8
}

interface Text9 {
    runs?: Run15[]
}

interface Run15 {
    text?: string
}

interface Icon7 {
    iconType?: string
}

interface NavigationEndpoint9 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata16
    userFeedbackEndpoint?: UserFeedbackEndpoint
}

interface CommandMetadata16 {
    webCommandMetadata?: WebCommandMetadata16
}

interface WebCommandMetadata16 {
    ignoreNavigation?: boolean
}

interface UserFeedbackEndpoint {
    additionalDatas?: AdditionalData[]
}

interface AdditionalData {
    userFeedbackEndpointProductSpecificValueData?: UserFeedbackEndpointProductSpecificValueData
}

interface UserFeedbackEndpointProductSpecificValueData {
    key?: string
    value?: string
}

interface Accessibility8 {
    accessibilityData?: AccessibilityData14
}

interface AccessibilityData14 {
    label?: string
}

interface Accessibility9 {
    accessibilityData?: AccessibilityData15
}

interface AccessibilityData15 {
    label?: string
}

interface Item3 {
    reelItemRenderer?: ReelItemRenderer
}

interface ReelItemRenderer {
    videoId?: string
    headline?: Headline
    thumbnail?: Thumbnail12
    viewCountText?: ViewCountText2
    navigationEndpoint?: NavigationEndpoint10
    menu?: Menu3
    trackingParams?: string
    accessibility?: Accessibility13
    style?: string
    videoType?: string
    inlinePlaybackEndpoint?: InlinePlaybackEndpoint2
    loggingDirectives?: LoggingDirectives
}

interface Headline {
    simpleText?: string
}

interface Thumbnail12 {
    thumbnails?: Thumbnail13[]
    isOriginalAspectRatio?: boolean
}

interface Thumbnail13 {
    url?: string
    width?: number
    height?: number
}

interface ViewCountText2 {
    accessibility?: Accessibility10
    simpleText?: string
}

interface Accessibility10 {
    accessibilityData?: AccessibilityData16
}

interface AccessibilityData16 {
    label?: string
}

interface NavigationEndpoint10 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata17
    reelWatchEndpoint?: ReelWatchEndpoint
}

interface CommandMetadata17 {
    webCommandMetadata?: WebCommandMetadata17
}

interface WebCommandMetadata17 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface ReelWatchEndpoint {
    videoId?: string
    playerParams?: string
    thumbnail?: Thumbnail14
    overlay?: Overlay
    params?: string
    sequenceProvider?: string
    sequenceParams?: string
    loggingContext?: LoggingContext3
    ustreamerConfig?: string
}

interface Thumbnail14 {
    thumbnails?: Thumbnail15[]
    isOriginalAspectRatio?: boolean
}

interface Thumbnail15 {
    url?: string
    width?: number
    height?: number
}

interface Overlay {
    reelPlayerOverlayRenderer?: ReelPlayerOverlayRenderer
}

interface ReelPlayerOverlayRenderer {
    style?: string
    trackingParams?: string
    reelPlayerNavigationModel?: string
}

interface LoggingContext3 {
    vssLoggingContext?: VssLoggingContext3
    qoeLoggingContext?: QoeLoggingContext
}

interface VssLoggingContext3 {
    serializedContextData?: string
}

interface QoeLoggingContext {
    serializedContextData?: string
}

interface Menu3 {
    menuRenderer?: MenuRenderer4
}

interface MenuRenderer4 {
    items?: Item4[]
    trackingParams?: string
    accessibility?: Accessibility12
}

interface Item4 {
    menuServiceItemRenderer?: MenuServiceItemRenderer2
    menuNavigationItemRenderer?: MenuNavigationItemRenderer2
}

interface MenuServiceItemRenderer2 {
    text?: Text10
    icon?: Icon8
    serviceEndpoint?: ServiceEndpoint3
    trackingParams?: string
}

interface Text10 {
    runs?: Run16[]
}

interface Run16 {
    text?: string
}

interface Icon8 {
    iconType?: string
}

interface ServiceEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata18
    getReportFormEndpoint?: GetReportFormEndpoint2
}

interface CommandMetadata18 {
    webCommandMetadata?: WebCommandMetadata18
}

interface WebCommandMetadata18 {
    sendPost?: boolean
    apiUrl?: string
}

interface GetReportFormEndpoint2 {
    params?: string
}

interface MenuNavigationItemRenderer2 {
    text?: Text11
    icon?: Icon9
    navigationEndpoint?: NavigationEndpoint11
    trackingParams?: string
    accessibility?: Accessibility11
}

interface Text11 {
    runs?: Run17[]
}

interface Run17 {
    text?: string
}

interface Icon9 {
    iconType?: string
}

interface NavigationEndpoint11 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata19
    userFeedbackEndpoint?: UserFeedbackEndpoint2
}

interface CommandMetadata19 {
    webCommandMetadata?: WebCommandMetadata19
}

interface WebCommandMetadata19 {
    ignoreNavigation?: boolean
}

interface UserFeedbackEndpoint2 {
    additionalDatas?: AdditionalData2[]
}

interface AdditionalData2 {
    userFeedbackEndpointProductSpecificValueData?: UserFeedbackEndpointProductSpecificValueData2
}

interface UserFeedbackEndpointProductSpecificValueData2 {
    key?: string
    value?: string
}

interface Accessibility11 {
    accessibilityData?: AccessibilityData17
}

interface AccessibilityData17 {
    label?: string
}

interface Accessibility12 {
    accessibilityData?: AccessibilityData18
}

interface AccessibilityData18 {
    label?: string
}

interface Accessibility13 {
    accessibilityData?: AccessibilityData19
}

interface AccessibilityData19 {
    label?: string
}

interface InlinePlaybackEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata20
    watchEndpoint?: WatchEndpoint5
}

interface CommandMetadata20 {
    webCommandMetadata?: WebCommandMetadata20
}

interface WebCommandMetadata20 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint5 {
    videoId?: string
    playerParams?: string
    playerExtraUrlParams?: PlayerExtraUrlParam2[]
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig5
}

interface PlayerExtraUrlParam2 {
    key?: string
    value?: string
}

interface WatchEndpointSupportedOnesieConfig5 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig5
}

interface Html5PlaybackOnesieConfig5 {
    commonConfig?: CommonConfig5
}

interface CommonConfig5 {
    url?: string
}

interface LoggingDirectives {
    trackingParams?: string
    visibility?: Visibility
    enableDisplayloggerExperiment?: boolean
}

interface Visibility {
    types?: string
}

interface Icon10 {
    iconType?: string
}

interface ShelfRenderer {
    title?: Title6
    content?: Content3
    trackingParams?: string
}

interface Title6 {
    simpleText?: string
}

interface Content3 {
    verticalListRenderer?: VerticalListRenderer
}

interface VerticalListRenderer {
    items?: Item5[]
    collapsedItemCount?: number
    collapsedStateButtonText?: CollapsedStateButtonText
    trackingParams?: string
}

interface Item5 {
    videoRenderer?: VideoRenderer2
}

interface VideoRenderer2 {
    videoId?: string
    thumbnail?: Thumbnail16
    title?: Title7
    longBylineText?: LongBylineText3
    publishedTimeText?: PublishedTimeText2
    lengthText?: LengthText3
    viewCountText?: ViewCountText3
    navigationEndpoint?: NavigationEndpoint13
    badges?: Badge2[]
    ownerBadges?: OwnerBadge2[]
    ownerText?: OwnerText2
    shortBylineText?: ShortBylineText2
    trackingParams?: string
    showActionMenu?: boolean
    shortViewCountText?: ShortViewCountText2
    menu?: Menu4
    channelThumbnailSupportedRenderers?: ChannelThumbnailSupportedRenderers2
    thumbnailOverlays?: ThumbnailOverlay3[]
    richThumbnail?: RichThumbnail2
    detailedMetadataSnippets?: DetailedMetadataSnippet2[]
    inlinePlaybackEndpoint?: InlinePlaybackEndpoint3
    expandableMetadata?: ExpandableMetadata
    searchVideoResultEntityKey?: string
}

interface Thumbnail16 {
    thumbnails?: Thumbnail17[]
}

interface Thumbnail17 {
    url?: string
    width?: number
    height?: number
}

interface Title7 {
    runs?: Run18[]
    accessibility?: Accessibility14
}

interface Run18 {
    text?: string
}

interface Accessibility14 {
    accessibilityData?: AccessibilityData20
}

interface AccessibilityData20 {
    label?: string
}

interface LongBylineText3 {
    runs?: Run19[]
}

interface Run19 {
    text?: string
    navigationEndpoint?: NavigationEndpoint12
}

interface NavigationEndpoint12 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata21
    browseEndpoint?: BrowseEndpoint5
}

interface CommandMetadata21 {
    webCommandMetadata?: WebCommandMetadata21
}

interface WebCommandMetadata21 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint5 {
    browseId?: string
    canonicalBaseUrl?: string
}

interface PublishedTimeText2 {
    simpleText?: string
}

interface LengthText3 {
    accessibility?: Accessibility15
    simpleText?: string
}

interface Accessibility15 {
    accessibilityData?: AccessibilityData21
}

interface AccessibilityData21 {
    label?: string
}

interface ViewCountText3 {
    simpleText?: string
}

interface NavigationEndpoint13 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata22
    watchEndpoint?: WatchEndpoint6
}

interface CommandMetadata22 {
    webCommandMetadata?: WebCommandMetadata22
}

interface WebCommandMetadata22 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint6 {
    videoId?: string
    playerParams?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig6
}

interface WatchEndpointSupportedOnesieConfig6 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig6
}

interface Html5PlaybackOnesieConfig6 {
    commonConfig?: CommonConfig6
}

interface CommonConfig6 {
    url?: string
}

interface Badge2 {
    metadataBadgeRenderer?: MetadataBadgeRenderer5
}

interface MetadataBadgeRenderer5 {
    style?: string
    label?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData22
}

interface AccessibilityData22 {
    label?: string
}

interface OwnerBadge2 {
    metadataBadgeRenderer?: MetadataBadgeRenderer6
}

interface MetadataBadgeRenderer6 {
    icon?: Icon11
    style?: string
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData23
}

interface Icon11 {
    iconType?: string
}

interface AccessibilityData23 {
    label?: string
}

interface OwnerText2 {
    runs?: Run20[]
}

interface Run20 {
    text?: string
    navigationEndpoint?: NavigationEndpoint14
}

interface NavigationEndpoint14 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata23
    browseEndpoint?: BrowseEndpoint6
}

interface CommandMetadata23 {
    webCommandMetadata?: WebCommandMetadata23
}

interface WebCommandMetadata23 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint6 {
    browseId?: string
    canonicalBaseUrl?: string
}

interface ShortBylineText2 {
    runs?: Run21[]
}

interface Run21 {
    text?: string
    navigationEndpoint?: NavigationEndpoint15
}

interface NavigationEndpoint15 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata24
    browseEndpoint?: BrowseEndpoint7
}

interface CommandMetadata24 {
    webCommandMetadata?: WebCommandMetadata24
}

interface WebCommandMetadata24 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint7 {
    browseId?: string
    canonicalBaseUrl?: string
}

interface ShortViewCountText2 {
    accessibility?: Accessibility16
    simpleText?: string
}

interface Accessibility16 {
    accessibilityData?: AccessibilityData24
}

interface AccessibilityData24 {
    label?: string
}

interface Menu4 {
    menuRenderer?: MenuRenderer5
}

interface MenuRenderer5 {
    items?: Item6[]
    trackingParams?: string
    accessibility?: Accessibility17
}

interface Item6 {
    menuServiceItemRenderer?: MenuServiceItemRenderer3
    menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer2
}

interface MenuServiceItemRenderer3 {
    text?: Text12
    icon?: Icon12
    serviceEndpoint?: ServiceEndpoint4
    trackingParams?: string
    hasSeparator?: boolean
}

interface Text12 {
    runs?: Run22[]
}

interface Run22 {
    text?: string
}

interface Icon12 {
    iconType?: string
}

interface ServiceEndpoint4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata25
    signalServiceEndpoint?: SignalServiceEndpoint3
    playlistEditEndpoint?: PlaylistEditEndpoint4
    addToPlaylistServiceEndpoint?: AddToPlaylistServiceEndpoint2
    shareEntityServiceEndpoint?: ShareEntityServiceEndpoint2
    getReportFormEndpoint?: GetReportFormEndpoint3
}

interface CommandMetadata25 {
    webCommandMetadata?: WebCommandMetadata25
}

interface WebCommandMetadata25 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint3 {
    signal?: string
    actions?: Action6[]
}

interface Action6 {
    clickTrackingParams?: string
    addToPlaylistCommand?: AddToPlaylistCommand3
}

interface AddToPlaylistCommand3 {
    openMiniplayer?: boolean
    videoId?: string
    listType?: string
    onCreateListCommand?: OnCreateListCommand3
    videoIds?: string[]
}

interface OnCreateListCommand3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata26
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint3
}

interface CommandMetadata26 {
    webCommandMetadata?: WebCommandMetadata26
}

interface WebCommandMetadata26 {
    sendPost?: boolean
    apiUrl?: string
}

interface CreatePlaylistServiceEndpoint3 {
    videoIds?: string[]
    params?: string
}

interface PlaylistEditEndpoint4 {
    playlistId?: string
    actions?: Action7[]
}

interface Action7 {
    addedVideoId?: string
    action?: string
}

interface AddToPlaylistServiceEndpoint2 {
    videoId?: string
}

interface ShareEntityServiceEndpoint2 {
    serializedShareEntity?: string
    commands?: Command2[]
}

interface Command2 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction3
}

interface OpenPopupAction3 {
    popup?: Popup3
    popupType?: string
    beReused?: boolean
}

interface Popup3 {
    unifiedSharePanelRenderer?: UnifiedSharePanelRenderer2
}

interface UnifiedSharePanelRenderer2 {
    trackingParams?: string
    showLoadingSpinner?: boolean
}

interface GetReportFormEndpoint3 {
    params?: string
}

interface MenuServiceItemDownloadRenderer2 {
    serviceEndpoint?: ServiceEndpoint5
    trackingParams?: string
}

interface ServiceEndpoint5 {
    clickTrackingParams?: string
    offlineVideoEndpoint?: OfflineVideoEndpoint2
}

interface OfflineVideoEndpoint2 {
    videoId?: string
    onAddCommand?: OnAddCommand2
}

interface OnAddCommand2 {
    clickTrackingParams?: string
    getDownloadActionCommand?: GetDownloadActionCommand2
}

interface GetDownloadActionCommand2 {
    videoId?: string
    params?: string
}

interface Accessibility17 {
    accessibilityData?: AccessibilityData25
}

interface AccessibilityData25 {
    label?: string
}

interface ChannelThumbnailSupportedRenderers2 {
    channelThumbnailWithLinkRenderer?: ChannelThumbnailWithLinkRenderer2
}

interface ChannelThumbnailWithLinkRenderer2 {
    thumbnail?: Thumbnail18
    navigationEndpoint?: NavigationEndpoint16
    accessibility?: Accessibility18
}

interface Thumbnail18 {
    thumbnails?: Thumbnail19[]
}

interface Thumbnail19 {
    url?: string
    width?: number
    height?: number
}

interface NavigationEndpoint16 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata27
    browseEndpoint?: BrowseEndpoint8
}

interface CommandMetadata27 {
    webCommandMetadata?: WebCommandMetadata27
}

interface WebCommandMetadata27 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint8 {
    browseId?: string
    canonicalBaseUrl?: string
}

interface Accessibility18 {
    accessibilityData?: AccessibilityData26
}

interface AccessibilityData26 {
    label?: string
}

interface ThumbnailOverlay3 {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer2
    thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer2
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer3
    thumbnailOverlayLoadingPreviewRenderer?: ThumbnailOverlayLoadingPreviewRenderer2
}

interface ThumbnailOverlayTimeStatusRenderer2 {
    text?: Text13
    style?: string
}

interface Text13 {
    accessibility?: Accessibility19
    simpleText?: string
}

interface Accessibility19 {
    accessibilityData?: AccessibilityData27
}

interface AccessibilityData27 {
    label?: string
}

interface ThumbnailOverlayToggleButtonRenderer2 {
    untoggledIcon?: UntoggledIcon2
    toggledIcon?: ToggledIcon2
    untoggledTooltip?: string
    toggledTooltip?: string
    untoggledServiceEndpoint?: UntoggledServiceEndpoint2
    untoggledAccessibility?: UntoggledAccessibility2
    toggledAccessibility?: ToggledAccessibility2
    trackingParams?: string
    isToggled?: boolean
    toggledServiceEndpoint?: ToggledServiceEndpoint2
}

interface UntoggledIcon2 {
    iconType?: string
}

interface ToggledIcon2 {
    iconType?: string
}

interface UntoggledServiceEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata28
    signalServiceEndpoint?: SignalServiceEndpoint4
    playlistEditEndpoint?: PlaylistEditEndpoint5
}

interface CommandMetadata28 {
    webCommandMetadata?: WebCommandMetadata28
}

interface WebCommandMetadata28 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint4 {
    signal?: string
    actions?: Action8[]
}

interface Action8 {
    clickTrackingParams?: string
    addToPlaylistCommand?: AddToPlaylistCommand4
}

interface AddToPlaylistCommand4 {
    openMiniplayer?: boolean
    videoId?: string
    listType?: string
    onCreateListCommand?: OnCreateListCommand4
    videoIds?: string[]
}

interface OnCreateListCommand4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata29
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint4
}

interface CommandMetadata29 {
    webCommandMetadata?: WebCommandMetadata29
}

interface WebCommandMetadata29 {
    sendPost?: boolean
    apiUrl?: string
}

interface CreatePlaylistServiceEndpoint4 {
    videoIds?: string[]
    params?: string
}

interface PlaylistEditEndpoint5 {
    playlistId?: string
    actions?: Action9[]
}

interface Action9 {
    addedVideoId?: string
    action?: string
}

interface UntoggledAccessibility2 {
    accessibilityData?: AccessibilityData28
}

interface AccessibilityData28 {
    label?: string
}

interface ToggledAccessibility2 {
    accessibilityData?: AccessibilityData29
}

interface AccessibilityData29 {
    label?: string
}

interface ToggledServiceEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata30
    playlistEditEndpoint?: PlaylistEditEndpoint6
}

interface CommandMetadata30 {
    webCommandMetadata?: WebCommandMetadata30
}

interface WebCommandMetadata30 {
    sendPost?: boolean
    apiUrl?: string
}

interface PlaylistEditEndpoint6 {
    playlistId?: string
    actions?: Action10[]
}

interface Action10 {
    action?: string
    removedVideoId?: string
}

interface ThumbnailOverlayNowPlayingRenderer3 {
    text?: Text14
}

interface Text14 {
    runs?: Run23[]
}

interface Run23 {
    text?: string
}

interface ThumbnailOverlayLoadingPreviewRenderer2 {
    text?: Text15
}

interface Text15 {
    runs?: Run24[]
}

interface Run24 {
    text?: string
}

interface RichThumbnail2 {
    movingThumbnailRenderer?: MovingThumbnailRenderer2
}

interface MovingThumbnailRenderer2 {
    movingThumbnailDetails?: MovingThumbnailDetails2
    enableHoveredLogging?: boolean
    enableOverlay?: boolean
}

interface MovingThumbnailDetails2 {
    thumbnails?: Thumbnail20[]
    logAsMovingThumbnail?: boolean
}

interface Thumbnail20 {
    url?: string
    width?: number
    height?: number
}

interface DetailedMetadataSnippet2 {
    snippetText?: SnippetText2
    snippetHoverText?: SnippetHoverText2
    maxOneLine?: boolean
}

interface SnippetText2 {
    runs?: Run25[]
}

interface Run25 {
    text?: string
    bold?: boolean
}

interface SnippetHoverText2 {
    runs?: Run26[]
}

interface Run26 {
    text?: string
}

interface InlinePlaybackEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata31
    watchEndpoint?: WatchEndpoint7
}

interface CommandMetadata31 {
    webCommandMetadata?: WebCommandMetadata31
}

interface WebCommandMetadata31 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint7 {
    videoId?: string
    playerParams?: string
    playerExtraUrlParams?: PlayerExtraUrlParam3[]
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig7
}

interface PlayerExtraUrlParam3 {
    key?: string
    value?: string
}

interface WatchEndpointSupportedOnesieConfig7 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig7
}

interface Html5PlaybackOnesieConfig7 {
    commonConfig?: CommonConfig7
}

interface CommonConfig7 {
    url?: string
}

interface ExpandableMetadata {
    expandableMetadataRenderer?: ExpandableMetadataRenderer
}

interface ExpandableMetadataRenderer {
    header?: Header
    expandedContent?: ExpandedContent
    expandButton?: ExpandButton
    collapseButton?: CollapseButton
    trackingParams?: string
    colorData?: ColorData
    useCustomColors?: boolean
    loggingDirectives?: LoggingDirectives2
}

interface Header {
    collapsedTitle?: CollapsedTitle
    collapsedThumbnail?: CollapsedThumbnail
    collapsedLabel?: CollapsedLabel
    expandedTitle?: ExpandedTitle
    showLeadingCollapsedLabel?: boolean
}

interface CollapsedTitle {
    runs?: Run27[]
}

interface Run27 {
    text?: string
}

interface CollapsedThumbnail {
    thumbnails?: Thumbnail21[]
}

interface Thumbnail21 {
    url?: string
    width?: number
    height?: number
}

interface CollapsedLabel {
    runs?: Run28[]
}

interface Run28 {
    text?: string
}

interface ExpandedTitle {
    runs?: Run29[]
}

interface Run29 {
    text?: string
}

interface ExpandedContent {
    horizontalCardListRenderer?: HorizontalCardListRenderer
}

interface HorizontalCardListRenderer {
    cards?: Card[]
    trackingParams?: string
    style?: Style
    previousButton?: PreviousButton
    nextButton?: NextButton
}

interface Card {
    macroMarkersListItemRenderer?: MacroMarkersListItemRenderer
}

interface MacroMarkersListItemRenderer {
    title?: Title8
    timeDescription?: TimeDescription
    thumbnail?: Thumbnail22
    onTap?: OnTap
    trackingParams?: string
    layout?: string
    isHighlighted?: boolean
}

interface Title8 {
    runs?: Run30[]
}

interface Run30 {
    text?: string
}

interface TimeDescription {
    runs?: Run31[]
}

interface Run31 {
    text?: string
}

interface Thumbnail22 {
    thumbnails?: Thumbnail23[]
}

interface Thumbnail23 {
    url?: string
    width?: number
    height?: number
}

interface OnTap {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata32
    watchEndpoint?: WatchEndpoint8
}

interface CommandMetadata32 {
    webCommandMetadata?: WebCommandMetadata32
}

interface WebCommandMetadata32 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface WatchEndpoint8 {
    videoId?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig8
    startTimeSeconds?: number
}

interface WatchEndpointSupportedOnesieConfig8 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig8
}

interface Html5PlaybackOnesieConfig8 {
    commonConfig?: CommonConfig8
}

interface CommonConfig8 {
    url?: string
}

interface Style {
    type?: string
}

interface PreviousButton {
    buttonRenderer?: ButtonRenderer2
}

interface ButtonRenderer2 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon13
    trackingParams?: string
}

interface Icon13 {
    iconType?: string
}

interface NextButton {
    buttonRenderer?: ButtonRenderer3
}

interface ButtonRenderer3 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon14
    trackingParams?: string
}

interface Icon14 {
    iconType?: string
}

interface ExpandButton {
    buttonRenderer?: ButtonRenderer4
}

interface ButtonRenderer4 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon15
    trackingParams?: string
    accessibilityData?: AccessibilityData30
}

interface Icon15 {
    iconType?: string
}

interface AccessibilityData30 {
    accessibilityData?: AccessibilityData31
}

interface AccessibilityData31 {
    label?: string
}

interface CollapseButton {
    buttonRenderer?: ButtonRenderer5
}

interface ButtonRenderer5 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon16
    trackingParams?: string
    accessibilityData?: AccessibilityData32
}

interface Icon16 {
    iconType?: string
}

interface AccessibilityData32 {
    accessibilityData?: AccessibilityData33
}

interface AccessibilityData33 {
    label?: string
}

interface ColorData {
    lightColorPalette?: LightColorPalette
    darkColorPalette?: DarkColorPalette2
    vibrantColorPalette?: VibrantColorPalette2
}

interface LightColorPalette {
    section1Color?: number
    section2Color?: number
    section3Color?: number
    primaryTitleColor?: number
    secondaryTitleColor?: number
    iconActivatedColor?: number
    iconInactiveColor?: number
    section4Color?: number
    iconDisabledColor?: number
}

interface DarkColorPalette2 {
    section1Color?: number
    section2Color?: number
    section3Color?: number
    primaryTitleColor?: number
    secondaryTitleColor?: number
    iconActivatedColor?: number
    iconInactiveColor?: number
    section4Color?: number
    iconDisabledColor?: number
}

interface VibrantColorPalette2 {
    section1Color?: number
    section2Color?: number
    section3Color?: number
    primaryTitleColor?: number
    secondaryTitleColor?: number
    iconActivatedColor?: number
    iconInactiveColor?: number
    section4Color?: number
    iconDisabledColor?: number
}

interface LoggingDirectives2 {
    trackingParams?: string
    visibility?: Visibility2
    enableDisplayloggerExperiment?: boolean
}

interface Visibility2 {
    types?: string
}

interface CollapsedStateButtonText {
    runs?: Run32[]
    accessibility?: Accessibility20
}

interface Run32 {
    text?: string
}

interface Accessibility20 {
    accessibilityData?: AccessibilityData34
}

interface AccessibilityData34 {
    label?: string
}

interface ContinuationItemRenderer {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint
    loggingDirectives?: LoggingDirectives3
}

interface ContinuationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata33
    continuationCommand?: ContinuationCommand
}

interface CommandMetadata33 {
    webCommandMetadata?: WebCommandMetadata33
}

interface WebCommandMetadata33 {
    sendPost?: boolean
    apiUrl?: string
}

interface ContinuationCommand {
    token?: string
    request?: string
}

interface LoggingDirectives3 {
    trackingParams?: string
}

interface SubMenu {
    searchSubMenuRenderer?: SearchSubMenuRenderer
}

interface SearchSubMenuRenderer {
    trackingParams?: string
}

interface Header2 {
    searchHeaderRenderer?: SearchHeaderRenderer
}

interface SearchHeaderRenderer {
    chipBar?: ChipBar
    searchFilterButton?: SearchFilterButton
    trackingParams?: string
}

interface ChipBar {
    chipCloudRenderer?: ChipCloudRenderer
}

interface ChipCloudRenderer {
    chips?: Chip[]
    trackingParams?: string
    nextButton?: NextButton2
    previousButton?: PreviousButton2
    loggingDirectives?: LoggingDirectives4
}

interface Chip {
    chipCloudChipRenderer?: ChipCloudChipRenderer
}

interface ChipCloudChipRenderer {
    style?: Style2
    text?: Text16
    trackingParams?: string
    isSelected?: boolean
    location?: string
    navigationEndpoint?: NavigationEndpoint17
}

interface Style2 {
    styleType?: string
}

interface Text16 {
    simpleText?: string
}

interface NavigationEndpoint17 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata34
    continuationCommand?: ContinuationCommand2
}

interface CommandMetadata34 {
    webCommandMetadata?: WebCommandMetadata34
}

interface WebCommandMetadata34 {
    sendPost?: boolean
    apiUrl?: string
}

interface ContinuationCommand2 {
    token?: string
    request?: string
    command?: Command3
}

interface Command3 {
    clickTrackingParams?: string
    showReloadUiCommand?: ShowReloadUiCommand
}

interface ShowReloadUiCommand {
    targetId?: string
}

interface NextButton2 {
    buttonRenderer?: ButtonRenderer6
}

interface ButtonRenderer6 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon17
    accessibility?: Accessibility21
    trackingParams?: string
}

interface Icon17 {
    iconType?: string
}

interface Accessibility21 {
    label?: string
}

interface PreviousButton2 {
    buttonRenderer?: ButtonRenderer7
}

interface ButtonRenderer7 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon18
    accessibility?: Accessibility22
    trackingParams?: string
}

interface Icon18 {
    iconType?: string
}

interface Accessibility22 {
    label?: string
}

interface LoggingDirectives4 {
    trackingParams?: string
    visibility?: Visibility3
    enableDisplayloggerExperiment?: boolean
}

interface Visibility3 {
    types?: string
}

interface SearchFilterButton {
    buttonRenderer?: ButtonRenderer8
}

interface ButtonRenderer8 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text17
    icon?: Icon19
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData35
    command?: Command4
    iconPosition?: string
}

interface Text17 {
    runs?: Run33[]
}

interface Run33 {
    text?: string
}

interface Icon19 {
    iconType?: string
}

interface AccessibilityData35 {
    accessibilityData?: AccessibilityData36
}

interface AccessibilityData36 {
    label?: string
}

interface Command4 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction4
}

interface OpenPopupAction4 {
    popup?: Popup4
    popupType?: string
}

interface Popup4 {
    searchFilterOptionsDialogRenderer?: SearchFilterOptionsDialogRenderer
}

interface SearchFilterOptionsDialogRenderer {
    title?: Title9
    groups?: Group[]
}

interface Title9 {
    runs?: Run34[]
}

interface Run34 {
    text?: string
}

interface Group {
    searchFilterGroupRenderer?: SearchFilterGroupRenderer
}

interface SearchFilterGroupRenderer {
    title?: Title10
    filters?: Filter[]
    trackingParams?: string
}

interface Title10 {
    simpleText?: string
}

interface Filter {
    searchFilterRenderer?: SearchFilterRenderer
}

interface SearchFilterRenderer {
    label?: Label
    navigationEndpoint?: NavigationEndpoint18
    tooltip?: string
    trackingParams?: string
    status?: string
}

interface Label {
    simpleText?: string
}

interface NavigationEndpoint18 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata35
    searchEndpoint?: SearchEndpoint
}

interface CommandMetadata35 {
    webCommandMetadata?: WebCommandMetadata35
}

interface WebCommandMetadata35 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface SearchEndpoint {
    query?: string
    params?: string
}

interface Topbar {
    desktopTopbarRenderer?: DesktopTopbarRenderer
}

interface DesktopTopbarRenderer {
    logo?: Logo
    searchbox?: Searchbox
    trackingParams?: string
    countryCode?: string
    topbarButtons?: TopbarButton[]
    hotkeyDialog?: HotkeyDialog
    backButton?: BackButton
    forwardButton?: ForwardButton
    a11ySkipNavigationButton?: A11ySkipNavigationButton
    voiceSearchButton?: VoiceSearchButton
}

interface Logo {
    topbarLogoRenderer?: TopbarLogoRenderer
}

interface TopbarLogoRenderer {
    iconImage?: IconImage
    tooltipText?: TooltipText
    endpoint?: Endpoint
    trackingParams?: string
    overrideEntityKey?: string
}

interface IconImage {
    iconType?: string
}

interface TooltipText {
    runs?: Run35[]
}

interface Run35 {
    text?: string
}

interface Endpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata36
    browseEndpoint?: BrowseEndpoint9
}

interface CommandMetadata36 {
    webCommandMetadata?: WebCommandMetadata36
}

interface WebCommandMetadata36 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface BrowseEndpoint9 {
    browseId?: string
}

interface Searchbox {
    fusionSearchboxRenderer?: FusionSearchboxRenderer
}

interface FusionSearchboxRenderer {
    icon?: Icon20
    placeholderText?: PlaceholderText
    config?: Config
    trackingParams?: string
    searchEndpoint?: SearchEndpoint2
    clearButton?: ClearButton
}

interface Icon20 {
    iconType?: string
}

interface PlaceholderText {
    runs?: Run36[]
}

interface Run36 {
    text?: string
}

interface Config {
    webSearchboxConfig?: WebSearchboxConfig
}

interface WebSearchboxConfig {
    requestLanguage?: string
    requestDomain?: string
    hasOnscreenKeyboard?: boolean
    focusSearchbox?: boolean
}

interface SearchEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata37
    searchEndpoint?: SearchEndpoint3
}

interface CommandMetadata37 {
    webCommandMetadata?: WebCommandMetadata37
}

interface WebCommandMetadata37 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface SearchEndpoint3 {
    query?: string
}

interface ClearButton {
    buttonRenderer?: ButtonRenderer9
}

interface ButtonRenderer9 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon21
    trackingParams?: string
    accessibilityData?: AccessibilityData37
}

interface Icon21 {
    iconType?: string
}

interface AccessibilityData37 {
    accessibilityData?: AccessibilityData38
}

interface AccessibilityData38 {
    label?: string
}

interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
    notificationTopbarButtonRenderer?: NotificationTopbarButtonRenderer
}

interface TopbarMenuButtonRenderer {
    avatar?: Avatar
    menuRequest?: MenuRequest
    trackingParams?: string
    accessibility?: Accessibility24
    tooltip?: string
    icon?: Icon22
    menuRenderer?: MenuRenderer6
    style?: string
}

interface Avatar {
    thumbnails?: Thumbnail24[]
    accessibility?: Accessibility23
}

interface Thumbnail24 {
    url?: string
    width?: number
    height?: number
}

interface Accessibility23 {
    accessibilityData?: AccessibilityData39
}

interface AccessibilityData39 {
    label?: string
}

interface MenuRequest {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata38
    signalServiceEndpoint?: SignalServiceEndpoint5
}

interface CommandMetadata38 {
    webCommandMetadata?: WebCommandMetadata38
}

interface WebCommandMetadata38 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint5 {
    signal?: string
    actions?: Action11[]
}

interface Action11 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction5
}

interface OpenPopupAction5 {
    popup?: Popup5
    popupType?: string
    beReused?: boolean
}

interface Popup5 {
    multiPageMenuRenderer?: MultiPageMenuRenderer
}

interface MultiPageMenuRenderer {
    trackingParams?: string
    style?: string
    showLoadingSpinner?: boolean
}

interface Accessibility24 {
    accessibilityData?: AccessibilityData40
}

interface AccessibilityData40 {
    label?: string
}

interface Icon22 {
    iconType?: string
}

interface MenuRenderer6 {
    multiPageMenuRenderer?: MultiPageMenuRenderer2
}

interface MultiPageMenuRenderer2 {
    sections?: Section[]
    trackingParams?: string
    style?: string
}

interface Section {
    multiPageMenuSectionRenderer?: MultiPageMenuSectionRenderer
}

interface MultiPageMenuSectionRenderer {
    items?: Item7[]
    trackingParams?: string
}

interface Item7 {
    compactLinkRenderer?: CompactLinkRenderer
}

interface CompactLinkRenderer {
    icon?: Icon23
    title?: Title11
    navigationEndpoint?: NavigationEndpoint19
    trackingParams?: string
    style?: string
}

interface Icon23 {
    iconType?: string
}

interface Title11 {
    runs?: Run37[]
}

interface Run37 {
    text?: string
}

interface NavigationEndpoint19 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata39
    uploadEndpoint?: UploadEndpoint
    signalNavigationEndpoint?: SignalNavigationEndpoint
    browseEndpoint?: BrowseEndpoint10
}

interface CommandMetadata39 {
    webCommandMetadata?: WebCommandMetadata39
}

interface WebCommandMetadata39 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
}

interface UploadEndpoint {
    hack?: boolean
}

interface SignalNavigationEndpoint {
    signal?: string
}

interface BrowseEndpoint10 {
    browseId?: string
    params?: string
}

interface NotificationTopbarButtonRenderer {
    icon?: Icon24
    menuRequest?: MenuRequest2
    style?: string
    trackingParams?: string
    accessibility?: Accessibility25
    tooltip?: string
    updateUnseenCountEndpoint?: UpdateUnseenCountEndpoint
    notificationCount?: number
    handlerDatas?: string[]
}

interface Icon24 {
    iconType?: string
}

interface MenuRequest2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata40
    signalServiceEndpoint?: SignalServiceEndpoint6
}

interface CommandMetadata40 {
    webCommandMetadata?: WebCommandMetadata40
}

interface WebCommandMetadata40 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint6 {
    signal?: string
    actions?: Action12[]
}

interface Action12 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction6
}

interface OpenPopupAction6 {
    popup?: Popup6
    popupType?: string
    beReused?: boolean
}

interface Popup6 {
    multiPageMenuRenderer?: MultiPageMenuRenderer3
}

interface MultiPageMenuRenderer3 {
    trackingParams?: string
    style?: string
    showLoadingSpinner?: boolean
}

interface Accessibility25 {
    accessibilityData?: AccessibilityData41
}

interface AccessibilityData41 {
    label?: string
}

interface UpdateUnseenCountEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata41
    signalServiceEndpoint?: SignalServiceEndpoint7
}

interface CommandMetadata41 {
    webCommandMetadata?: WebCommandMetadata41
}

interface WebCommandMetadata41 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint7 {
    signal?: string
}

interface HotkeyDialog {
    hotkeyDialogRenderer?: HotkeyDialogRenderer
}

interface HotkeyDialogRenderer {
    title?: Title12
    sections?: Section2[]
    dismissButton?: DismissButton
    trackingParams?: string
}

interface Title12 {
    runs?: Run38[]
}

interface Run38 {
    text?: string
}

interface Section2 {
    hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
}

interface HotkeyDialogSectionRenderer {
    title?: Title13
    options?: Option[]
}

interface Title13 {
    runs?: Run39[]
}

interface Run39 {
    text?: string
}

interface Option {
    hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer
}

interface HotkeyDialogSectionOptionRenderer {
    label?: Label2
    hotkey?: string
    hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
}

interface Label2 {
    runs?: Run40[]
}

interface Run40 {
    text?: string
}

interface HotkeyAccessibilityLabel {
    accessibilityData?: AccessibilityData42
}

interface AccessibilityData42 {
    label?: string
}

interface DismissButton {
    buttonRenderer?: ButtonRenderer10
}

interface ButtonRenderer10 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text18
    trackingParams?: string
}

interface Text18 {
    runs?: Run41[]
}

interface Run41 {
    text?: string
}

interface BackButton {
    buttonRenderer?: ButtonRenderer11
}

interface ButtonRenderer11 {
    trackingParams?: string
    command?: Command5
}

interface Command5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata42
    signalServiceEndpoint?: SignalServiceEndpoint8
}

interface CommandMetadata42 {
    webCommandMetadata?: WebCommandMetadata42
}

interface WebCommandMetadata42 {
    sendPost?: boolean
}

interface SignalServiceEndpoint8 {
    signal?: string
    actions?: Action13[]
}

interface Action13 {
    clickTrackingParams?: string
    signalAction?: SignalAction
}

interface SignalAction {
    signal?: string
}

interface ForwardButton {
    buttonRenderer?: ButtonRenderer12
}

interface ButtonRenderer12 {
    trackingParams?: string
    command?: Command6
}

interface Command6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata43
    signalServiceEndpoint?: SignalServiceEndpoint9
}

interface CommandMetadata43 {
    webCommandMetadata?: WebCommandMetadata43
}

interface WebCommandMetadata43 {
    sendPost?: boolean
}

interface SignalServiceEndpoint9 {
    signal?: string
    actions?: Action14[]
}

interface Action14 {
    clickTrackingParams?: string
    signalAction?: SignalAction2
}

interface SignalAction2 {
    signal?: string
}

interface A11ySkipNavigationButton {
    buttonRenderer?: ButtonRenderer13
}

interface ButtonRenderer13 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text19
    trackingParams?: string
    command?: Command7
}

interface Text19 {
    runs?: Run42[]
}

interface Run42 {
    text?: string
}

interface Command7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata44
    signalServiceEndpoint?: SignalServiceEndpoint10
}

interface CommandMetadata44 {
    webCommandMetadata?: WebCommandMetadata44
}

interface WebCommandMetadata44 {
    sendPost?: boolean
}

interface SignalServiceEndpoint10 {
    signal?: string
    actions?: Action15[]
}

interface Action15 {
    clickTrackingParams?: string
    signalAction?: SignalAction3
}

interface SignalAction3 {
    signal?: string
}

interface VoiceSearchButton {
    buttonRenderer?: ButtonRenderer14
}

interface ButtonRenderer14 {
    style?: string
    size?: string
    isDisabled?: boolean
    serviceEndpoint?: ServiceEndpoint6
    icon?: Icon26
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData45
}

interface ServiceEndpoint6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata45
    signalServiceEndpoint?: SignalServiceEndpoint11
}

interface CommandMetadata45 {
    webCommandMetadata?: WebCommandMetadata45
}

interface WebCommandMetadata45 {
    sendPost?: boolean
}

interface SignalServiceEndpoint11 {
    signal?: string
    actions?: Action16[]
}

interface Action16 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction7
}

interface OpenPopupAction7 {
    popup?: Popup7
    popupType?: string
}

interface Popup7 {
    voiceSearchDialogRenderer?: VoiceSearchDialogRenderer
}

interface VoiceSearchDialogRenderer {
    placeholderHeader?: PlaceholderHeader
    promptHeader?: PromptHeader
    exampleQuery1?: ExampleQuery1
    exampleQuery2?: ExampleQuery2
    promptMicrophoneLabel?: PromptMicrophoneLabel
    loadingHeader?: LoadingHeader
    connectionErrorHeader?: ConnectionErrorHeader
    connectionErrorMicrophoneLabel?: ConnectionErrorMicrophoneLabel
    permissionsHeader?: PermissionsHeader
    permissionsSubtext?: PermissionsSubtext
    disabledHeader?: DisabledHeader
    disabledSubtext?: DisabledSubtext
    microphoneButtonAriaLabel?: MicrophoneButtonAriaLabel
    exitButton?: ExitButton
    trackingParams?: string
    microphoneOffPromptHeader?: MicrophoneOffPromptHeader
}

interface PlaceholderHeader {
    runs?: Run43[]
}

interface Run43 {
    text?: string
}

interface PromptHeader {
    runs?: Run44[]
}

interface Run44 {
    text?: string
}

interface ExampleQuery1 {
    runs?: Run45[]
}

interface Run45 {
    text?: string
}

interface ExampleQuery2 {
    runs?: Run46[]
}

interface Run46 {
    text?: string
}

interface PromptMicrophoneLabel {
    runs?: Run47[]
}

interface Run47 {
    text?: string
}

interface LoadingHeader {
    runs?: Run48[]
}

interface Run48 {
    text?: string
}

interface ConnectionErrorHeader {
    runs?: Run49[]
}

interface Run49 {
    text?: string
}

interface ConnectionErrorMicrophoneLabel {
    runs?: Run50[]
}

interface Run50 {
    text?: string
}

interface PermissionsHeader {
    runs?: Run51[]
}

interface Run51 {
    text?: string
}

interface PermissionsSubtext {
    runs?: Run52[]
}

interface Run52 {
    text?: string
}

interface DisabledHeader {
    runs?: Run53[]
}

interface Run53 {
    text?: string
}

interface DisabledSubtext {
    runs?: Run54[]
}

interface Run54 {
    text?: string
}

interface MicrophoneButtonAriaLabel {
    runs?: Run55[]
}

interface Run55 {
    text?: string
}

interface ExitButton {
    buttonRenderer?: ButtonRenderer15
}

interface ButtonRenderer15 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon25
    trackingParams?: string
    accessibilityData?: AccessibilityData43
}

interface Icon25 {
    iconType?: string
}

interface AccessibilityData43 {
    accessibilityData?: AccessibilityData44
}

interface AccessibilityData44 {
    label?: string
}

interface MicrophoneOffPromptHeader {
    runs?: Run56[]
}

interface Run56 {
    text?: string
}

interface Icon26 {
    iconType?: string
}

interface AccessibilityData45 {
    accessibilityData?: AccessibilityData46
}

interface AccessibilityData46 {
    label?: string
}

interface OnResponseReceivedCommand {
    clickTrackingParams?: string
    adsControlFlowOpportunityReceivedCommand?: AdsControlFlowOpportunityReceivedCommand
}

interface AdsControlFlowOpportunityReceivedCommand {
    opportunityType?: string
    isInitialLoad?: boolean
    adSlotAndLayoutMetadata?: AdSlotAndLayoutMetadaum[]
    enablePacfLoggingWeb?: boolean
}

interface AdSlotAndLayoutMetadaum {
    adSlotMetadata?: AdSlotMetadata2
    adLayoutMetadata?: AdLayoutMetadaum[]
}

interface AdSlotMetadata2 {
    slotId?: string
    slotType?: string
    slotPhysicalPosition?: number
    adSlotLoggingData?: AdSlotLoggingData2
}

interface AdSlotLoggingData2 {
    serializedSlotAdServingDataEntry?: string
}

interface AdLayoutMetadaum {
    layoutId?: string
    layoutType?: string
    adLayoutLoggingData?: AdLayoutLoggingData2
}

interface AdLayoutLoggingData2 {
    serializedAdServingDataEntry?: string
}
