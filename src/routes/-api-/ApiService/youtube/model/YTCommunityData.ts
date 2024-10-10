 export interface YTCommunityData {
    responseContext?: ResponseContext
    contents?: Contents
    header?: Header2
    metadata?: Metadata2
    trackingParams?: string
    topbar?: Topbar
    microformat?: Microformat
  }
  
   interface ResponseContext {
    serviceTrackingParams?: ServiceTrackingParam[]
    maxAgeSeconds?: number
    mainAppWebResponseContext?: MainAppWebResponseContext
    webResponseContextExtensionData?: WebResponseContextExtensionData
  }
  
   interface ServiceTrackingParam {
    service?: string
    params?: Param[]
  }
  
   interface Param {
    key?: string
    value?: string
  }
  
   interface MainAppWebResponseContext {
    loggedOut?: boolean
    trackingParam?: string
  }
  
   interface WebResponseContextExtensionData {
    hasDecorated?: boolean
  }
  
   interface Contents {
    twoColumnBrowseResultsRenderer?: TwoColumnBrowseResultsRenderer
  }
  
   interface TwoColumnBrowseResultsRenderer {
    tabs?: Tab[]
  }
  
   interface Tab {
    tabRenderer?: TabRenderer
    expandableTabRenderer?: ExpandableTabRenderer
  }
  
   interface TabRenderer {
    endpoint?: Endpoint
    title?: string
    trackingParams?: string
    selected?: boolean
    content?: Content
  }
  
   interface Endpoint {
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
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface Content {
    sectionListRenderer?: SectionListRenderer
  }
  
   interface SectionListRenderer {
    contents?: Content2[]
    trackingParams?: string
    disablePullToRefresh?: boolean
  }
  
   interface Content2 {
    itemSectionRenderer?: ItemSectionRenderer
  }
  
   interface ItemSectionRenderer {
    contents?: Content3[]
    trackingParams?: string
    header?: Header
    sectionIdentifier?: string
    targetId?: string
  }
  
   interface Content3 {
    backstagePostThreadRenderer?: BackstagePostThreadRenderer
    continuationItemRenderer?: ContinuationItemRenderer
  }
  
   interface BackstagePostThreadRenderer {
    post?: Post
    trackingParams?: string
    useUpdatedRepostUi?: boolean
    loggingDirectives?: LoggingDirectives4
  }
  
   interface Post {
    backstagePostRenderer?: BackstagePostRenderer
  }
  
   interface BackstagePostRenderer {
    postId?: string
    authorText?: AuthorText
    authorThumbnail?: AuthorThumbnail
    authorEndpoint?: AuthorEndpoint
    contentText?: ContentText
    backstageAttachment?: BackstageAttachment
    expandButton?: ExpandButton
    collapseButton?: CollapseButton
    publishedTimeText?: PublishedTimeText2
    voteCount?: VoteCount
    voteStatus?: string
    actionButtons?: ActionButtons
    trackingParams?: string
    surface?: string
    loggingDirectives?: LoggingDirectives3
  }
  
   interface AuthorText {
    runs?: Run[]
    accessibility?: Accessibility
  }
  
   interface Run {
    text?: string
    navigationEndpoint?: NavigationEndpoint
  }
  
   interface NavigationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata2
    browseEndpoint?: BrowseEndpoint2
  }
  
   interface CommandMetadata2 {
    webCommandMetadata?: WebCommandMetadata2
  }
  
   interface WebCommandMetadata2 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint2 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface Accessibility {
    accessibilityData?: AccessibilityData
  }
  
   interface AccessibilityData {
    label?: string
  }
  
   interface AuthorThumbnail {
    thumbnails?: Thumbnail[]
    accessibility?: Accessibility2
  }
  
   interface Thumbnail {
    url?: string
    width?: number
    height?: number
  }
  
   interface Accessibility2 {
    accessibilityData?: AccessibilityData2
  }
  
   interface AccessibilityData2 {
    label?: string
  }
  
   interface AuthorEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata3
    browseEndpoint?: BrowseEndpoint3
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
  
   interface BrowseEndpoint3 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface ContentText {
    runs?: Run2[]
  }
  
   interface Run2 {
    text?: string
    navigationEndpoint?: NavigationEndpoint2
    loggingDirectives?: LoggingDirectives
  }
  
   interface NavigationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata4
    urlEndpoint?: UrlEndpoint
  }
  
   interface CommandMetadata4 {
    webCommandMetadata?: WebCommandMetadata4
  }
  
   interface WebCommandMetadata4 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint {
    url?: string
    target?: string
    nofollow?: boolean
  }
  
   interface LoggingDirectives {
    trackingParams?: string
    visibility?: Visibility
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility {
    types?: string
  }
  
   interface BackstageAttachment {
    videoRenderer?: VideoRenderer
    backstageImageRenderer?: BackstageImageRenderer
    postMultiImageRenderer?: PostMultiImageRenderer
  }
  
   interface VideoRenderer {
    videoId?: string
    thumbnail?: Thumbnail2
    title?: Title
    descriptionSnippet?: DescriptionSnippet
    longBylineText?: LongBylineText
    publishedTimeText?: PublishedTimeText
    lengthText?: LengthText
    viewCountText?: ViewCountText
    navigationEndpoint?: NavigationEndpoint4
    ownerBadges?: OwnerBadge[]
    ownerText?: OwnerText
    shortBylineText?: ShortBylineText
    trackingParams?: string
    showActionMenu?: boolean
    shortViewCountText?: ShortViewCountText
    menu?: Menu
    channelThumbnailSupportedRenderers?: ChannelThumbnailSupportedRenderers
    thumbnailOverlays?: ThumbnailOverlay[]
    avatar?: Avatar
  }
  
   interface Thumbnail2 {
    thumbnails?: Thumbnail3[]
  }
  
   interface Thumbnail3 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Title {
    runs?: Run3[]
    accessibility?: Accessibility3
  }
  
   interface Run3 {
    text?: string
  }
  
   interface Accessibility3 {
    accessibilityData?: AccessibilityData3
  }
  
   interface AccessibilityData3 {
    label?: string
  }
  
   interface DescriptionSnippet {
    runs?: Run4[]
  }
  
   interface Run4 {
    text?: string
  }
  
   interface LongBylineText {
    runs?: Run5[]
  }
  
   interface Run5 {
    text?: string
    navigationEndpoint?: NavigationEndpoint3
  }
  
   interface NavigationEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata5
    browseEndpoint?: BrowseEndpoint4
  }
  
   interface CommandMetadata5 {
    webCommandMetadata?: WebCommandMetadata5
  }
  
   interface WebCommandMetadata5 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint4 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface PublishedTimeText {
    simpleText?: string
  }
  
   interface LengthText {
    accessibility?: Accessibility4
    simpleText?: string
  }
  
   interface Accessibility4 {
    accessibilityData?: AccessibilityData4
  }
  
   interface AccessibilityData4 {
    label?: string
  }
  
   interface ViewCountText {
    simpleText?: string
  }
  
   interface NavigationEndpoint4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata6
    watchEndpoint?: WatchEndpoint
  }
  
   interface CommandMetadata6 {
    webCommandMetadata?: WebCommandMetadata6
  }
  
   interface WebCommandMetadata6 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint {
    videoId?: string
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
  
   interface OwnerBadge {
    metadataBadgeRenderer?: MetadataBadgeRenderer
  }
  
   interface MetadataBadgeRenderer {
    icon?: Icon
    style?: string
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData5
  }
  
   interface Icon {
    iconType?: string
  }
  
   interface AccessibilityData5 {
    label?: string
  }
  
   interface OwnerText {
    runs?: Run6[]
  }
  
   interface Run6 {
    text?: string
    navigationEndpoint?: NavigationEndpoint5
  }
  
   interface NavigationEndpoint5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata7
    browseEndpoint?: BrowseEndpoint5
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
  
   interface BrowseEndpoint5 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface ShortBylineText {
    runs?: Run7[]
  }
  
   interface Run7 {
    text?: string
    navigationEndpoint?: NavigationEndpoint6
  }
  
   interface NavigationEndpoint6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata8
    browseEndpoint?: BrowseEndpoint6
  }
  
   interface CommandMetadata8 {
    webCommandMetadata?: WebCommandMetadata8
  }
  
   interface WebCommandMetadata8 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint6 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface ShortViewCountText {
    accessibility?: Accessibility5
    simpleText?: string
  }
  
   interface Accessibility5 {
    accessibilityData?: AccessibilityData6
  }
  
   interface AccessibilityData6 {
    label?: string
  }
  
   interface Menu {
    menuRenderer?: MenuRenderer
  }
  
   interface MenuRenderer {
    items?: Item[]
    trackingParams?: string
    accessibility?: Accessibility6
  }
  
   interface Item {
    menuServiceItemRenderer?: MenuServiceItemRenderer
  }
  
   interface MenuServiceItemRenderer {
    text?: Text
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
  }
  
   interface Text {
    runs?: Run8[]
  }
  
   interface Run8 {
    text?: string
  }
  
   interface Icon2 {
    iconType?: string
  }
  
   interface ServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata9
    signalServiceEndpoint?: SignalServiceEndpoint
    shareEntityServiceEndpoint?: ShareEntityServiceEndpoint
  }
  
   interface CommandMetadata9 {
    webCommandMetadata?: WebCommandMetadata9
  }
  
   interface WebCommandMetadata9 {
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
    commandMetadata?: CommandMetadata10
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint
  }
  
   interface CommandMetadata10 {
    webCommandMetadata?: WebCommandMetadata10
  }
  
   interface WebCommandMetadata10 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface CreatePlaylistServiceEndpoint {
    videoIds?: string[]
    params?: string
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
  
   interface Accessibility6 {
    accessibilityData?: AccessibilityData7
  }
  
   interface AccessibilityData7 {
    label?: string
  }
  
   interface ChannelThumbnailSupportedRenderers {
    channelThumbnailWithLinkRenderer?: ChannelThumbnailWithLinkRenderer
  }
  
   interface ChannelThumbnailWithLinkRenderer {
    thumbnail?: Thumbnail4
    navigationEndpoint?: NavigationEndpoint7
    accessibility?: Accessibility7
  }
  
   interface Thumbnail4 {
    thumbnails?: Thumbnail5[]
  }
  
   interface Thumbnail5 {
    url?: string
    width?: number
    height?: number
  }
  
   interface NavigationEndpoint7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata11
    browseEndpoint?: BrowseEndpoint7
  }
  
   interface CommandMetadata11 {
    webCommandMetadata?: WebCommandMetadata11
  }
  
   interface WebCommandMetadata11 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint7 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface Accessibility7 {
    accessibilityData?: AccessibilityData8
  }
  
   interface AccessibilityData8 {
    label?: string
  }
  
   interface ThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
    thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
  }
  
   interface ThumbnailOverlayTimeStatusRenderer {
    text?: Text2
    style?: string
  }
  
   interface Text2 {
    accessibility?: Accessibility8
    simpleText?: string
  }
  
   interface Accessibility8 {
    accessibilityData?: AccessibilityData9
  }
  
   interface AccessibilityData9 {
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
    commandMetadata?: CommandMetadata12
    signalServiceEndpoint?: SignalServiceEndpoint2
    playlistEditEndpoint?: PlaylistEditEndpoint
  }
  
   interface CommandMetadata12 {
    webCommandMetadata?: WebCommandMetadata12
  }
  
   interface WebCommandMetadata12 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SignalServiceEndpoint2 {
    signal?: string
    actions?: Action2[]
  }
  
   interface Action2 {
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
    commandMetadata?: CommandMetadata13
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint2
  }
  
   interface CommandMetadata13 {
    webCommandMetadata?: WebCommandMetadata13
  }
  
   interface WebCommandMetadata13 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface CreatePlaylistServiceEndpoint2 {
    videoIds?: string[]
    params?: string
  }
  
   interface PlaylistEditEndpoint {
    playlistId?: string
    actions?: Action3[]
  }
  
   interface Action3 {
    addedVideoId?: string
    action?: string
  }
  
   interface UntoggledAccessibility {
    accessibilityData?: AccessibilityData10
  }
  
   interface AccessibilityData10 {
    label?: string
  }
  
   interface ToggledAccessibility {
    accessibilityData?: AccessibilityData11
  }
  
   interface AccessibilityData11 {
    label?: string
  }
  
   interface ToggledServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata14
    playlistEditEndpoint?: PlaylistEditEndpoint2
  }
  
   interface CommandMetadata14 {
    webCommandMetadata?: WebCommandMetadata14
  }
  
   interface WebCommandMetadata14 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface PlaylistEditEndpoint2 {
    playlistId?: string
    actions?: Action4[]
  }
  
   interface Action4 {
    action?: string
    removedVideoId?: string
  }
  
   interface ThumbnailOverlayNowPlayingRenderer {
    text?: Text3
  }
  
   interface Text3 {
    runs?: Run9[]
  }
  
   interface Run9 {
    text?: string
  }
  
   interface Avatar {
    decoratedAvatarViewModel?: DecoratedAvatarViewModel
  }
  
   interface DecoratedAvatarViewModel {
    avatar?: Avatar2
    a11yLabel?: string
    rendererContext?: RendererContext
  }
  
   interface Avatar2 {
    avatarViewModel?: AvatarViewModel
  }
  
   interface AvatarViewModel {
    image?: Image
    avatarImageSize?: string
  }
  
   interface Image {
    sources?: Source[]
  }
  
   interface Source {
    url?: string
    width?: number
    height?: number
  }
  
   interface RendererContext {
    commandContext?: CommandContext
  }
  
   interface CommandContext {
    onTap?: OnTap
  }
  
   interface OnTap {
    innertubeCommand?: InnertubeCommand
  }
  
   interface InnertubeCommand {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata15
    browseEndpoint?: BrowseEndpoint8
  }
  
   interface CommandMetadata15 {
    webCommandMetadata?: WebCommandMetadata15
  }
  
   interface WebCommandMetadata15 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint8 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface BackstageImageRenderer {
    image?: Image2
    trackingParams?: string
    command?: Command2
    accessibility?: Accessibility9
  }
  
   interface Image2 {
    thumbnails?: Thumbnail6[]
  }
  
   interface Thumbnail6 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Command2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata16
    browseEndpoint?: BrowseEndpoint9
  }
  
   interface CommandMetadata16 {
    webCommandMetadata?: WebCommandMetadata16
  }
  
   interface WebCommandMetadata16 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint9 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface Accessibility9 {
    accessibilityData?: AccessibilityData12
  }
  
   interface AccessibilityData12 {
    label?: string
  }
  
   interface PostMultiImageRenderer {
    images?: Image3[]
    loggingDirectives?: LoggingDirectives2
  }
  
   interface Image3 {
    backstageImageRenderer?: BackstageImageRenderer2
  }
  
   interface BackstageImageRenderer2 {
    image?: Image4
    trackingParams?: string
    command?: Command3
    accessibility?: Accessibility10
    icon?: Icon3
  }
  
   interface Image4 {
    thumbnails?: Thumbnail7[]
  }
  
   interface Thumbnail7 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Command3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata17
    browseEndpoint?: BrowseEndpoint10
  }
  
   interface CommandMetadata17 {
    webCommandMetadata?: WebCommandMetadata17
  }
  
   interface WebCommandMetadata17 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint10 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface Accessibility10 {
    accessibilityData?: AccessibilityData13
  }
  
   interface AccessibilityData13 {
    label?: string
  }
  
   interface Icon3 {
    iconType?: string
  }
  
   interface LoggingDirectives2 {
    trackingParams?: string
    visibility?: Visibility2
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility2 {
    types?: string
  }
  
   interface ExpandButton {
    buttonRenderer?: ButtonRenderer
  }
  
   interface ButtonRenderer {
    style?: string
    size?: string
    text?: Text4
    accessibility?: Accessibility12
    trackingParams?: string
  }
  
   interface Text4 {
    accessibility?: Accessibility11
    simpleText?: string
  }
  
   interface Accessibility11 {
    accessibilityData?: AccessibilityData14
  }
  
   interface AccessibilityData14 {
    label?: string
  }
  
   interface Accessibility12 {
    label?: string
  }
  
   interface CollapseButton {
    buttonRenderer?: ButtonRenderer2
  }
  
   interface ButtonRenderer2 {
    style?: string
    size?: string
    text?: Text5
    accessibility?: Accessibility14
    trackingParams?: string
  }
  
   interface Text5 {
    accessibility?: Accessibility13
    simpleText?: string
  }
  
   interface Accessibility13 {
    accessibilityData?: AccessibilityData15
  }
  
   interface AccessibilityData15 {
    label?: string
  }
  
   interface Accessibility14 {
    label?: string
  }
  
   interface PublishedTimeText2 {
    runs?: Run10[]
  }
  
   interface Run10 {
    text?: string
    navigationEndpoint?: NavigationEndpoint8
  }
  
   interface NavigationEndpoint8 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata18
    browseEndpoint?: BrowseEndpoint11
  }
  
   interface CommandMetadata18 {
    webCommandMetadata?: WebCommandMetadata18
  }
  
   interface WebCommandMetadata18 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint11 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface VoteCount {
    accessibility?: Accessibility15
    simpleText?: string
  }
  
   interface Accessibility15 {
    accessibilityData?: AccessibilityData16
  }
  
   interface AccessibilityData16 {
    label?: string
  }
  
   interface ActionButtons {
    commentActionButtonsRenderer?: CommentActionButtonsRenderer
  }
  
   interface CommentActionButtonsRenderer {
    likeButton?: LikeButton
    replyButton?: ReplyButton
    dislikeButton?: DislikeButton
    trackingParams?: string
    style?: string
  }
  
   interface LikeButton {
    toggleButtonRenderer?: ToggleButtonRenderer
  }
  
   interface ToggleButtonRenderer {
    style?: Style
    size?: Size
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon
    accessibility?: Accessibility16
    trackingParams?: string
    defaultTooltip?: string
    toggledTooltip?: string
    toggledStyle?: ToggledStyle
    defaultNavigationEndpoint?: DefaultNavigationEndpoint
    accessibilityData?: AccessibilityData17
    toggledAccessibilityData?: ToggledAccessibilityData
  }
  
   interface Style {
    styleType?: string
  }
  
   interface Size {
    sizeType?: string
  }
  
   interface DefaultIcon {
    iconType?: string
  }
  
   interface Accessibility16 {
    label?: string
  }
  
   interface ToggledStyle {
    styleType?: string
  }
  
   interface DefaultNavigationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata19
    signInEndpoint?: SignInEndpoint
  }
  
   interface CommandMetadata19 {
    webCommandMetadata?: WebCommandMetadata19
  }
  
   interface WebCommandMetadata19 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint {
    nextEndpoint?: NextEndpoint
  }
  
   interface NextEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata20
    browseEndpoint?: BrowseEndpoint12
  }
  
   interface CommandMetadata20 {
    webCommandMetadata?: WebCommandMetadata20
  }
  
   interface WebCommandMetadata20 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint12 {
    browseId?: string
  }
  
   interface AccessibilityData17 {
    accessibilityData?: AccessibilityData18
  }
  
   interface AccessibilityData18 {
    label?: string
  }
  
   interface ToggledAccessibilityData {
    accessibilityData?: AccessibilityData19
  }
  
   interface AccessibilityData19 {
    label?: string
  }
  
   interface ReplyButton {
    buttonRenderer?: ButtonRenderer3
  }
  
   interface ButtonRenderer3 {
    style?: string
    size?: string
    text?: Text6
    icon?: Icon4
    navigationEndpoint?: NavigationEndpoint9
    accessibility?: Accessibility18
    tooltip?: string
    trackingParams?: string
    hint?: Hint
    accessibilityData?: AccessibilityData22
  }
  
   interface Text6 {
    accessibility?: Accessibility17
    simpleText?: string
  }
  
   interface Accessibility17 {
    accessibilityData?: AccessibilityData20
  }
  
   interface AccessibilityData20 {
    label?: string
  }
  
   interface Icon4 {
    iconType?: string
  }
  
   interface NavigationEndpoint9 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata21
    browseEndpoint?: BrowseEndpoint13
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
  
   interface BrowseEndpoint13 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface Accessibility18 {
    label?: string
  }
  
   interface Hint {
    hintRenderer?: HintRenderer
  }
  
   interface HintRenderer {
    hintId?: string
    content?: Content4
    hintCap?: HintCap
    suggestedPosition?: SuggestedPosition
    trackingParams?: string
  }
  
   interface Content4 {
    bubbleHintRenderer?: BubbleHintRenderer
  }
  
   interface BubbleHintRenderer {
    trackingParams?: string
    accessibility?: Accessibility19
    detailsText?: DetailsText
    isVisible?: boolean
    style?: string
  }
  
   interface Accessibility19 {
    label?: string
  }
  
   interface DetailsText {
    accessibility?: Accessibility20
    simpleText?: string
  }
  
   interface Accessibility20 {
    accessibilityData?: AccessibilityData21
  }
  
   interface AccessibilityData21 {
    label?: string
  }
  
   interface HintCap {
    impressionCap?: string
  }
  
   interface SuggestedPosition {
    type?: string
  }
  
   interface AccessibilityData22 {
    accessibilityData?: AccessibilityData23
  }
  
   interface AccessibilityData23 {
    label?: string
  }
  
   interface DislikeButton {
    toggleButtonRenderer?: ToggleButtonRenderer2
  }
  
   interface ToggleButtonRenderer2 {
    style?: Style2
    size?: Size2
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon2
    accessibility?: Accessibility21
    trackingParams?: string
    defaultTooltip?: string
    toggledTooltip?: string
    toggledStyle?: ToggledStyle2
    defaultNavigationEndpoint?: DefaultNavigationEndpoint2
    accessibilityData?: AccessibilityData24
    toggledAccessibilityData?: ToggledAccessibilityData2
  }
  
   interface Style2 {
    styleType?: string
  }
  
   interface Size2 {
    sizeType?: string
  }
  
   interface DefaultIcon2 {
    iconType?: string
  }
  
   interface Accessibility21 {
    label?: string
  }
  
   interface ToggledStyle2 {
    styleType?: string
  }
  
   interface DefaultNavigationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata22
    signInEndpoint?: SignInEndpoint2
  }
  
   interface CommandMetadata22 {
    webCommandMetadata?: WebCommandMetadata22
  }
  
   interface WebCommandMetadata22 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint2 {
    nextEndpoint?: NextEndpoint2
  }
  
   interface NextEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata23
    browseEndpoint?: BrowseEndpoint14
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
  
   interface BrowseEndpoint14 {
    browseId?: string
  }
  
   interface AccessibilityData24 {
    accessibilityData?: AccessibilityData25
  }
  
   interface AccessibilityData25 {
    label?: string
  }
  
   interface ToggledAccessibilityData2 {
    accessibilityData?: AccessibilityData26
  }
  
   interface AccessibilityData26 {
    label?: string
  }
  
   interface LoggingDirectives3 {
    trackingParams?: string
    visibility?: Visibility3
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility3 {
    types?: string
  }
  
   interface LoggingDirectives4 {
    trackingParams?: string
    visibility?: Visibility4
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility4 {
    types?: string
  }
  
   interface ContinuationItemRenderer {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint
  }
  
   interface ContinuationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata24
    continuationCommand?: ContinuationCommand
  }
  
   interface CommandMetadata24 {
    webCommandMetadata?: WebCommandMetadata24
  }
  
   interface WebCommandMetadata24 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand {
    token?: string
    request?: string
  }
  
   interface Header {
    commentsHeaderRenderer?: CommentsHeaderRenderer
  }
  
   interface CommentsHeaderRenderer {
    isBackstageContent?: boolean
    trackingParams?: string
  }
  
   interface ExpandableTabRenderer {
    endpoint?: Endpoint2
    title?: string
    selected?: boolean
  }
  
   interface Endpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata25
    browseEndpoint?: BrowseEndpoint15
  }
  
   interface CommandMetadata25 {
    webCommandMetadata?: WebCommandMetadata25
  }
  
   interface WebCommandMetadata25 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint15 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface Header2 {
    pageHeaderRenderer?: PageHeaderRenderer
  }
  
   interface PageHeaderRenderer {
    pageTitle?: string
    content?: Content5
  }
  
   interface Content5 {
    pageHeaderViewModel?: PageHeaderViewModel
  }
  
   interface PageHeaderViewModel {
    title?: Title2
    image?: Image6
    metadata?: Metadata
    actions?: Actions
    description?: Description
    attribution?: Attribution
    banner?: Banner
    rendererContext?: RendererContext8
  }
  
   interface Title2 {
    dynamicTextViewModel?: DynamicTextViewModel
  }
  
   interface DynamicTextViewModel {
    text?: Text7
    maxLines?: number
    rendererContext?: RendererContext2
  }
  
   interface Text7 {
    content?: string
    styleRuns?: StyleRun[]
    attachmentRuns?: AttachmentRun[]
  }
  
   interface StyleRun {
    startIndex?: number
    styleRunExtensions?: StyleRunExtensions
  }
  
   interface StyleRunExtensions {
    styleRunColorMapExtension?: StyleRunColorMapExtension
  }
  
   interface StyleRunColorMapExtension {
    colorMap?: ColorMap[]
  }
  
   interface ColorMap {
    key?: string
    value?: number
  }
  
   interface AttachmentRun {
    startIndex?: number
    length?: number
    element?: Element
    alignment?: string
  }
  
   interface Element {
    type?: Type
    properties?: Properties
  }
  
   interface Type {
    imageType?: ImageType
  }
  
   interface ImageType {
    image?: Image5
  }
  
   interface Image5 {
    sources?: Source2[]
  }
  
   interface Source2 {
    clientResource?: ClientResource
    width?: number
    height?: number
  }
  
   interface ClientResource {
    imageName?: string
  }
  
   interface Properties {
    layoutProperties?: LayoutProperties
  }
  
   interface LayoutProperties {
    height?: Height
    width?: Width
    margin?: Margin
  }
  
   interface Height {
    value?: number
    unit?: string
  }
  
   interface Width {
    value?: number
    unit?: string
  }
  
   interface Margin {
    left?: Left
  }
  
   interface Left {
    value?: number
    unit?: string
  }
  
   interface RendererContext2 {
    loggingContext?: LoggingContext
    accessibilityContext?: AccessibilityContext
  }
  
   interface LoggingContext {
    loggingDirectives?: LoggingDirectives5
  }
  
   interface LoggingDirectives5 {
    trackingParams?: string
    visibility?: Visibility5
    clientVeSpec?: ClientVeSpec
  }
  
   interface Visibility5 {
    types?: string
  }
  
   interface ClientVeSpec {
    uiType?: number
    veCounter?: number
  }
  
   interface AccessibilityContext {
    label?: string
  }
  
   interface Image6 {
    decoratedAvatarViewModel?: DecoratedAvatarViewModel2
  }
  
   interface DecoratedAvatarViewModel2 {
    avatar?: Avatar3
  }
  
   interface Avatar3 {
    avatarViewModel?: AvatarViewModel2
  }
  
   interface AvatarViewModel2 {
    image?: Image7
    avatarImageSize?: string
    loggingDirectives?: LoggingDirectives6
  }
  
   interface Image7 {
    sources?: Source3[]
    processor?: Processor
  }
  
   interface Source3 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Processor {
    borderImageProcessor?: BorderImageProcessor
  }
  
   interface BorderImageProcessor {
    circular?: boolean
  }
  
   interface LoggingDirectives6 {
    trackingParams?: string
    visibility?: Visibility6
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility6 {
    types?: string
  }
  
   interface Metadata {
    contentMetadataViewModel?: ContentMetadataViewModel
  }
  
   interface ContentMetadataViewModel {
    metadataRows?: MetadataRow[]
    delimiter?: string
    rendererContext?: RendererContext3
  }
  
   interface MetadataRow {
    metadataParts?: MetadataPart[]
  }
  
   interface MetadataPart {
    text?: Text8
    enableTruncation?: boolean
  }
  
   interface Text8 {
    content?: string
    styleRuns?: StyleRun2[]
  }
  
   interface StyleRun2 {
    startIndex?: number
    length?: number
  }
  
   interface RendererContext3 {
    loggingContext?: LoggingContext2
  }
  
   interface LoggingContext2 {
    loggingDirectives?: LoggingDirectives7
  }
  
   interface LoggingDirectives7 {
    trackingParams?: string
    visibility?: Visibility7
    clientVeSpec?: ClientVeSpec2
  }
  
   interface Visibility7 {
    types?: string
  }
  
   interface ClientVeSpec2 {
    uiType?: number
    veCounter?: number
  }
  
   interface Actions {
    flexibleActionsViewModel?: FlexibleActionsViewModel
  }
  
   interface FlexibleActionsViewModel {
    actionsRows?: ActionsRow[]
    minimumRowHeight?: number
    rendererContext?: RendererContext4
  }
  
   interface ActionsRow {
    actions?: Action5[]
  }
  
   interface Action5 {
    buttonViewModel?: ButtonViewModel
  }
  
   interface ButtonViewModel {
    title?: string
    onTap?: OnTap2
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    state?: string
  }
  
   interface OnTap2 {
    innertubeCommand?: InnertubeCommand2
  }
  
   interface InnertubeCommand2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata26
    modalEndpoint?: ModalEndpoint
  }
  
   interface CommandMetadata26 {
    webCommandMetadata?: WebCommandMetadata26
  }
  
   interface WebCommandMetadata26 {
    ignoreNavigation?: boolean
  }
  
   interface ModalEndpoint {
    modal?: Modal
  }
  
   interface Modal {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
  }
  
   interface ModalWithTitleAndButtonRenderer {
    title?: Title3
    content?: Content6
    button?: Button
  }
  
   interface Title3 {
    simpleText?: string
  }
  
   interface Content6 {
    simpleText?: string
  }
  
   interface Button {
    buttonRenderer?: ButtonRenderer4
  }
  
   interface ButtonRenderer4 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text9
    navigationEndpoint?: NavigationEndpoint10
    trackingParams?: string
  }
  
   interface Text9 {
    simpleText?: string
  }
  
   interface NavigationEndpoint10 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata27
    signInEndpoint?: SignInEndpoint3
  }
  
   interface CommandMetadata27 {
    webCommandMetadata?: WebCommandMetadata27
  }
  
   interface WebCommandMetadata27 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint3 {
    nextEndpoint?: NextEndpoint3
    continueAction?: string
    idamTag?: string
  }
  
   interface NextEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata28
    browseEndpoint?: BrowseEndpoint16
  }
  
   interface CommandMetadata28 {
    webCommandMetadata?: WebCommandMetadata28
  }
  
   interface WebCommandMetadata28 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint16 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface RendererContext4 {
    loggingContext?: LoggingContext3
  }
  
   interface LoggingContext3 {
    loggingDirectives?: LoggingDirectives8
  }
  
   interface LoggingDirectives8 {
    trackingParams?: string
    visibility?: Visibility8
    clientVeSpec?: ClientVeSpec3
  }
  
   interface Visibility8 {
    types?: string
  }
  
   interface ClientVeSpec3 {
    uiType?: number
    veCounter?: number
  }
  
   interface Description {
    descriptionPreviewViewModel?: DescriptionPreviewViewModel
  }
  
   interface DescriptionPreviewViewModel {
    description?: Description2
    maxLines?: number
    truncationText?: TruncationText
    alwaysShowTruncationText?: boolean
    rendererContext?: RendererContext5
  }
  
   interface Description2 {
    content?: string
  }
  
   interface TruncationText {
    content?: string
    styleRuns?: StyleRun3[]
  }
  
   interface StyleRun3 {
    startIndex?: number
    length?: number
    weight?: number
  }
  
   interface RendererContext5 {
    loggingContext?: LoggingContext4
    accessibilityContext?: AccessibilityContext2
    commandContext?: CommandContext2
  }
  
   interface LoggingContext4 {
    loggingDirectives?: LoggingDirectives9
  }
  
   interface LoggingDirectives9 {
    trackingParams?: string
    visibility?: Visibility9
    clientVeSpec?: ClientVeSpec4
  }
  
   interface Visibility9 {
    types?: string
  }
  
   interface ClientVeSpec4 {
    uiType?: number
    veCounter?: number
  }
  
   interface AccessibilityContext2 {
    label?: string
  }
  
   interface CommandContext2 {
    onTap?: OnTap3
  }
  
   interface OnTap3 {
    innertubeCommand?: InnertubeCommand3
  }
  
   interface InnertubeCommand3 {
    clickTrackingParams?: string
    showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint
  }
  
   interface ShowEngagementPanelEndpoint {
    engagementPanel?: EngagementPanel
    identifier?: Identifier2
    engagementPanelPresentationConfigs?: EngagementPanelPresentationConfigs
  }
  
   interface EngagementPanel {
    engagementPanelSectionListRenderer?: EngagementPanelSectionListRenderer
  }
  
   interface EngagementPanelSectionListRenderer {
    header?: Header3
    content?: Content7
    targetId?: string
    identifier?: Identifier
  }
  
   interface Header3 {
    engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer
  }
  
   interface EngagementPanelTitleHeaderRenderer {
    title?: Title4
    visibilityButton?: VisibilityButton
    trackingParams?: string
  }
  
   interface Title4 {
    simpleText?: string
  }
  
   interface VisibilityButton {
    buttonRenderer?: ButtonRenderer5
  }
  
   interface ButtonRenderer5 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon5
    accessibility?: Accessibility22
    trackingParams?: string
    accessibilityData?: AccessibilityData27
    command?: Command4
  }
  
   interface Icon5 {
    iconType?: string
  }
  
   interface Accessibility22 {
    label?: string
  }
  
   interface AccessibilityData27 {
    accessibilityData?: AccessibilityData28
  }
  
   interface AccessibilityData28 {
    label?: string
  }
  
   interface Command4 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction
  }
  
   interface ChangeEngagementPanelVisibilityAction {
    targetId?: string
    visibility?: string
  }
  
   interface Content7 {
    sectionListRenderer?: SectionListRenderer2
  }
  
   interface SectionListRenderer2 {
    contents?: Content8[]
    trackingParams?: string
    scrollPaneStyle?: ScrollPaneStyle
  }
  
   interface Content8 {
    itemSectionRenderer?: ItemSectionRenderer2
  }
  
   interface ItemSectionRenderer2 {
    contents?: Content9[]
    trackingParams?: string
    sectionIdentifier?: string
    targetId?: string
  }
  
   interface Content9 {
    continuationItemRenderer?: ContinuationItemRenderer2
  }
  
   interface ContinuationItemRenderer2 {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint2
  }
  
   interface ContinuationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata29
    continuationCommand?: ContinuationCommand2
  }
  
   interface CommandMetadata29 {
    webCommandMetadata?: WebCommandMetadata29
  }
  
   interface WebCommandMetadata29 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand2 {
    token?: string
    request?: string
  }
  
   interface ScrollPaneStyle {
    scrollable?: boolean
  }
  
   interface Identifier {
    surface?: string
    tag?: string
  }
  
   interface Identifier2 {
    surface?: string
    tag?: string
  }
  
   interface EngagementPanelPresentationConfigs {
    engagementPanelPopupPresentationConfig?: EngagementPanelPopupPresentationConfig
  }
  
   interface EngagementPanelPopupPresentationConfig {
    popupType?: string
  }
  
   interface Attribution {
    attributionViewModel?: AttributionViewModel
  }
  
   interface AttributionViewModel {
    text?: Text10
    suffix?: Suffix
    rendererContext?: RendererContext6
  }
  
   interface Text10 {
    content?: string
    commandRuns?: CommandRun[]
    styleRuns?: StyleRun4[]
  }
  
   interface CommandRun {
    startIndex?: number
    length?: number
    onTap?: OnTap4
  }
  
   interface OnTap4 {
    innertubeCommand?: InnertubeCommand4
  }
  
   interface InnertubeCommand4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata30
    urlEndpoint?: UrlEndpoint2
  }
  
   interface CommandMetadata30 {
    webCommandMetadata?: WebCommandMetadata30
  }
  
   interface WebCommandMetadata30 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint2 {
    url?: string
    target?: string
  }
  
   interface StyleRun4 {
    weightLabel?: string
    styleRunExtensions?: StyleRunExtensions2
  }
  
   interface StyleRunExtensions2 {
    styleRunColorMapExtension?: StyleRunColorMapExtension2
  }
  
   interface StyleRunColorMapExtension2 {
    colorMap?: ColorMap2[]
  }
  
   interface ColorMap2 {
    key?: string
    value?: number
  }
  
   interface Suffix {
    content?: string
    commandRuns?: CommandRun2[]
    styleRuns?: StyleRun5[]
  }
  
   interface CommandRun2 {
    startIndex?: number
    length?: number
    onTap?: OnTap5
  }
  
   interface OnTap5 {
    innertubeCommand?: InnertubeCommand5
  }
  
   interface InnertubeCommand5 {
    clickTrackingParams?: string
    showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint2
  }
  
   interface ShowEngagementPanelEndpoint2 {
    engagementPanel?: EngagementPanel2
    identifier?: Identifier4
    engagementPanelPresentationConfigs?: EngagementPanelPresentationConfigs2
  }
  
   interface EngagementPanel2 {
    engagementPanelSectionListRenderer?: EngagementPanelSectionListRenderer2
  }
  
   interface EngagementPanelSectionListRenderer2 {
    header?: Header4
    content?: Content10
    targetId?: string
    identifier?: Identifier3
  }
  
   interface Header4 {
    engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer2
  }
  
   interface EngagementPanelTitleHeaderRenderer2 {
    title?: Title5
    visibilityButton?: VisibilityButton2
    trackingParams?: string
  }
  
   interface Title5 {
    simpleText?: string
  }
  
   interface VisibilityButton2 {
    buttonRenderer?: ButtonRenderer6
  }
  
   interface ButtonRenderer6 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon6
    accessibility?: Accessibility23
    trackingParams?: string
    accessibilityData?: AccessibilityData29
    command?: Command5
  }
  
   interface Icon6 {
    iconType?: string
  }
  
   interface Accessibility23 {
    label?: string
  }
  
   interface AccessibilityData29 {
    accessibilityData?: AccessibilityData30
  }
  
   interface AccessibilityData30 {
    label?: string
  }
  
   interface Command5 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction2
  }
  
   interface ChangeEngagementPanelVisibilityAction2 {
    targetId?: string
    visibility?: string
  }
  
   interface Content10 {
    sectionListRenderer?: SectionListRenderer3
  }
  
   interface SectionListRenderer3 {
    contents?: Content11[]
    trackingParams?: string
    scrollPaneStyle?: ScrollPaneStyle2
  }
  
   interface Content11 {
    itemSectionRenderer?: ItemSectionRenderer3
  }
  
   interface ItemSectionRenderer3 {
    contents?: Content12[]
    trackingParams?: string
    sectionIdentifier?: string
    targetId?: string
  }
  
   interface Content12 {
    continuationItemRenderer?: ContinuationItemRenderer3
  }
  
   interface ContinuationItemRenderer3 {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint3
  }
  
   interface ContinuationEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata31
    continuationCommand?: ContinuationCommand3
  }
  
   interface CommandMetadata31 {
    webCommandMetadata?: WebCommandMetadata31
  }
  
   interface WebCommandMetadata31 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand3 {
    token?: string
    request?: string
  }
  
   interface ScrollPaneStyle2 {
    scrollable?: boolean
  }
  
   interface Identifier3 {
    surface?: string
    tag?: string
  }
  
   interface Identifier4 {
    surface?: string
    tag?: string
  }
  
   interface EngagementPanelPresentationConfigs2 {
    engagementPanelPopupPresentationConfig?: EngagementPanelPopupPresentationConfig2
  }
  
   interface EngagementPanelPopupPresentationConfig2 {
    popupType?: string
  }
  
   interface StyleRun5 {
    fontName?: string
    fontSize?: number
    weightLabel?: string
  }
  
   interface RendererContext6 {
    loggingContext?: LoggingContext5
  }
  
   interface LoggingContext5 {
    loggingDirectives?: LoggingDirectives10
  }
  
   interface LoggingDirectives10 {
    trackingParams?: string
    visibility?: Visibility10
    clientVeSpec?: ClientVeSpec5
  }
  
   interface Visibility10 {
    types?: string
  }
  
   interface ClientVeSpec5 {
    uiType?: number
    veCounter?: number
  }
  
   interface Banner {
    imageBannerViewModel?: ImageBannerViewModel
  }
  
   interface ImageBannerViewModel {
    image?: Image8
    style?: string
    rendererContext?: RendererContext7
  }
  
   interface Image8 {
    sources?: Source4[]
  }
  
   interface Source4 {
    url?: string
    width?: number
    height?: number
  }
  
   interface RendererContext7 {
    loggingContext?: LoggingContext6
  }
  
   interface LoggingContext6 {
    loggingDirectives?: LoggingDirectives11
  }
  
   interface LoggingDirectives11 {
    trackingParams?: string
    visibility?: Visibility11
    clientVeSpec?: ClientVeSpec6
  }
  
   interface Visibility11 {
    types?: string
  }
  
   interface ClientVeSpec6 {
    uiType?: number
    veCounter?: number
  }
  
   interface RendererContext8 {
    loggingContext?: LoggingContext7
  }
  
   interface LoggingContext7 {
    loggingDirectives?: LoggingDirectives12
  }
  
   interface LoggingDirectives12 {
    trackingParams?: string
    visibility?: Visibility12
    clientVeSpec?: ClientVeSpec7
  }
  
   interface Visibility12 {
    types?: string
  }
  
   interface ClientVeSpec7 {
    uiType?: number
    veCounter?: number
  }
  
   interface Metadata2 {
    channelMetadataRenderer?: ChannelMetadataRenderer
  }
  
   interface ChannelMetadataRenderer {
    title?: string
    description?: string
    rssUrl?: string
    channelConversionUrl?: string
    externalId?: string
    keywords?: string
    ownerUrls?: string[]
    avatar?: Avatar4
    channelUrl?: string
    isFamilySafe?: boolean
    facebookProfileId?: string
    availableCountryCodes?: string[]
    musicArtistName?: string
    androidDeepLink?: string
    androidAppindexingLink?: string
    iosAppindexingLink?: string
    vanityChannelUrl?: string
  }
  
   interface Avatar4 {
    thumbnails?: Thumbnail8[]
  }
  
   interface Thumbnail8 {
    url?: string
    width?: number
    height?: number
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
    endpoint?: Endpoint3
    trackingParams?: string
    overrideEntityKey?: string
  }
  
   interface IconImage {
    iconType?: string
  }
  
   interface TooltipText {
    runs?: Run11[]
  }
  
   interface Run11 {
    text?: string
  }
  
   interface Endpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata32
    browseEndpoint?: BrowseEndpoint17
  }
  
   interface CommandMetadata32 {
    webCommandMetadata?: WebCommandMetadata32
  }
  
   interface WebCommandMetadata32 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint17 {
    browseId?: string
  }
  
   interface Searchbox {
    fusionSearchboxRenderer?: FusionSearchboxRenderer
  }
  
   interface FusionSearchboxRenderer {
    icon?: Icon7
    placeholderText?: PlaceholderText
    config?: Config
    trackingParams?: string
    searchEndpoint?: SearchEndpoint
    clearButton?: ClearButton
  }
  
   interface Icon7 {
    iconType?: string
  }
  
   interface PlaceholderText {
    runs?: Run12[]
  }
  
   interface Run12 {
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
  
   interface SearchEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata33
    searchEndpoint?: SearchEndpoint2
  }
  
   interface CommandMetadata33 {
    webCommandMetadata?: WebCommandMetadata33
  }
  
   interface WebCommandMetadata33 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SearchEndpoint2 {
    query?: string
  }
  
   interface ClearButton {
    buttonRenderer?: ButtonRenderer7
  }
  
   interface ButtonRenderer7 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon8
    trackingParams?: string
    accessibilityData?: AccessibilityData31
  }
  
   interface Icon8 {
    iconType?: string
  }
  
   interface AccessibilityData31 {
    accessibilityData?: AccessibilityData32
  }
  
   interface AccessibilityData32 {
    label?: string
  }
  
   interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
    buttonRenderer?: ButtonRenderer8
  }
  
   interface TopbarMenuButtonRenderer {
    icon?: Icon9
    menuRequest?: MenuRequest
    trackingParams?: string
    accessibility?: Accessibility24
    tooltip?: string
    style?: string
  }
  
   interface Icon9 {
    iconType?: string
  }
  
   interface MenuRequest {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata34
    signalServiceEndpoint?: SignalServiceEndpoint3
  }
  
   interface CommandMetadata34 {
    webCommandMetadata?: WebCommandMetadata34
  }
  
   interface WebCommandMetadata34 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SignalServiceEndpoint3 {
    signal?: string
    actions?: Action6[]
  }
  
   interface Action6 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction2
  }
  
   interface OpenPopupAction2 {
    popup?: Popup2
    popupType?: string
    beReused?: boolean
  }
  
   interface Popup2 {
    multiPageMenuRenderer?: MultiPageMenuRenderer
  }
  
   interface MultiPageMenuRenderer {
    trackingParams?: string
    style?: string
    showLoadingSpinner?: boolean
  }
  
   interface Accessibility24 {
    accessibilityData?: AccessibilityData33
  }
  
   interface AccessibilityData33 {
    label?: string
  }
  
   interface ButtonRenderer8 {
    style?: string
    size?: string
    text?: Text11
    icon?: Icon10
    navigationEndpoint?: NavigationEndpoint11
    trackingParams?: string
    targetId?: string
  }
  
   interface Text11 {
    runs?: Run13[]
  }
  
   interface Run13 {
    text?: string
  }
  
   interface Icon10 {
    iconType?: string
  }
  
   interface NavigationEndpoint11 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata35
    signInEndpoint?: SignInEndpoint4
  }
  
   interface CommandMetadata35 {
    webCommandMetadata?: WebCommandMetadata35
  }
  
   interface WebCommandMetadata35 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint4 {
    idamTag?: string
  }
  
   interface HotkeyDialog {
    hotkeyDialogRenderer?: HotkeyDialogRenderer
  }
  
   interface HotkeyDialogRenderer {
    title?: Title6
    sections?: Section[]
    dismissButton?: DismissButton
    trackingParams?: string
  }
  
   interface Title6 {
    runs?: Run14[]
  }
  
   interface Run14 {
    text?: string
  }
  
   interface Section {
    hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
  }
  
   interface HotkeyDialogSectionRenderer {
    title?: Title7
    options?: Option[]
  }
  
   interface Title7 {
    runs?: Run15[]
  }
  
   interface Run15 {
    text?: string
  }
  
   interface Option {
    hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer
  }
  
   interface HotkeyDialogSectionOptionRenderer {
    label?: Label
    hotkey?: string
    hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
  }
  
   interface Label {
    runs?: Run16[]
  }
  
   interface Run16 {
    text?: string
  }
  
   interface HotkeyAccessibilityLabel {
    accessibilityData?: AccessibilityData34
  }
  
   interface AccessibilityData34 {
    label?: string
  }
  
   interface DismissButton {
    buttonRenderer?: ButtonRenderer9
  }
  
   interface ButtonRenderer9 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text12
    trackingParams?: string
  }
  
   interface Text12 {
    runs?: Run17[]
  }
  
   interface Run17 {
    text?: string
  }
  
   interface BackButton {
    buttonRenderer?: ButtonRenderer10
  }
  
   interface ButtonRenderer10 {
    trackingParams?: string
    command?: Command6
  }
  
   interface Command6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata36
    signalServiceEndpoint?: SignalServiceEndpoint4
  }
  
   interface CommandMetadata36 {
    webCommandMetadata?: WebCommandMetadata36
  }
  
   interface WebCommandMetadata36 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint4 {
    signal?: string
    actions?: Action7[]
  }
  
   interface Action7 {
    clickTrackingParams?: string
    signalAction?: SignalAction
  }
  
   interface SignalAction {
    signal?: string
  }
  
   interface ForwardButton {
    buttonRenderer?: ButtonRenderer11
  }
  
   interface ButtonRenderer11 {
    trackingParams?: string
    command?: Command7
  }
  
   interface Command7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata37
    signalServiceEndpoint?: SignalServiceEndpoint5
  }
  
   interface CommandMetadata37 {
    webCommandMetadata?: WebCommandMetadata37
  }
  
   interface WebCommandMetadata37 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint5 {
    signal?: string
    actions?: Action8[]
  }
  
   interface Action8 {
    clickTrackingParams?: string
    signalAction?: SignalAction2
  }
  
   interface SignalAction2 {
    signal?: string
  }
  
   interface A11ySkipNavigationButton {
    buttonRenderer?: ButtonRenderer12
  }
  
   interface ButtonRenderer12 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text13
    trackingParams?: string
    command?: Command8
  }
  
   interface Text13 {
    runs?: Run18[]
  }
  
   interface Run18 {
    text?: string
  }
  
   interface Command8 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata38
    signalServiceEndpoint?: SignalServiceEndpoint6
  }
  
   interface CommandMetadata38 {
    webCommandMetadata?: WebCommandMetadata38
  }
  
   interface WebCommandMetadata38 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint6 {
    signal?: string
    actions?: Action9[]
  }
  
   interface Action9 {
    clickTrackingParams?: string
    signalAction?: SignalAction3
  }
  
   interface SignalAction3 {
    signal?: string
  }
  
   interface VoiceSearchButton {
    buttonRenderer?: ButtonRenderer13
  }
  
   interface ButtonRenderer13 {
    style?: string
    size?: string
    isDisabled?: boolean
    serviceEndpoint?: ServiceEndpoint2
    icon?: Icon12
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData37
  }
  
   interface ServiceEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata39
    signalServiceEndpoint?: SignalServiceEndpoint7
  }
  
   interface CommandMetadata39 {
    webCommandMetadata?: WebCommandMetadata39
  }
  
   interface WebCommandMetadata39 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint7 {
    signal?: string
    actions?: Action10[]
  }
  
   interface Action10 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction3
  }
  
   interface OpenPopupAction3 {
    popup?: Popup3
    popupType?: string
  }
  
   interface Popup3 {
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
    runs?: Run19[]
  }
  
   interface Run19 {
    text?: string
  }
  
   interface PromptHeader {
    runs?: Run20[]
  }
  
   interface Run20 {
    text?: string
  }
  
   interface ExampleQuery1 {
    runs?: Run21[]
  }
  
   interface Run21 {
    text?: string
  }
  
   interface ExampleQuery2 {
    runs?: Run22[]
  }
  
   interface Run22 {
    text?: string
  }
  
   interface PromptMicrophoneLabel {
    runs?: Run23[]
  }
  
   interface Run23 {
    text?: string
  }
  
   interface LoadingHeader {
    runs?: Run24[]
  }
  
   interface Run24 {
    text?: string
  }
  
   interface ConnectionErrorHeader {
    runs?: Run25[]
  }
  
   interface Run25 {
    text?: string
  }
  
   interface ConnectionErrorMicrophoneLabel {
    runs?: Run26[]
  }
  
   interface Run26 {
    text?: string
  }
  
   interface PermissionsHeader {
    runs?: Run27[]
  }
  
   interface Run27 {
    text?: string
  }
  
   interface PermissionsSubtext {
    runs?: Run28[]
  }
  
   interface Run28 {
    text?: string
  }
  
   interface DisabledHeader {
    runs?: Run29[]
  }
  
   interface Run29 {
    text?: string
  }
  
   interface DisabledSubtext {
    runs?: Run30[]
  }
  
   interface Run30 {
    text?: string
  }
  
   interface MicrophoneButtonAriaLabel {
    runs?: Run31[]
  }
  
   interface Run31 {
    text?: string
  }
  
   interface ExitButton {
    buttonRenderer?: ButtonRenderer14
  }
  
   interface ButtonRenderer14 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon11
    trackingParams?: string
    accessibilityData?: AccessibilityData35
  }
  
   interface Icon11 {
    iconType?: string
  }
  
   interface AccessibilityData35 {
    accessibilityData?: AccessibilityData36
  }
  
   interface AccessibilityData36 {
    label?: string
  }
  
   interface MicrophoneOffPromptHeader {
    runs?: Run32[]
  }
  
   interface Run32 {
    text?: string
  }
  
   interface Icon12 {
    iconType?: string
  }
  
   interface AccessibilityData37 {
    accessibilityData?: AccessibilityData38
  }
  
   interface AccessibilityData38 {
    label?: string
  }
  
   interface Microformat {
    microformatDataRenderer?: MicroformatDataRenderer
  }
  
   interface MicroformatDataRenderer {
    urlCanonical?: string
    title?: string
    description?: string
    thumbnail?: Thumbnail9
    siteName?: string
    appName?: string
    androidPackage?: string
    iosAppStoreId?: string
    iosAppArguments?: string
    ogType?: string
    urlApplinksWeb?: string
    urlApplinksIos?: string
    urlApplinksAndroid?: string
    urlTwitterIos?: string
    urlTwitterAndroid?: string
    twitterCardType?: string
    twitterSiteHandle?: string
    schemaDotOrgType?: string
    noindex?: boolean
    unlisted?: boolean
    familySafe?: boolean
    tags?: string[]
    availableCountries?: string[]
    linkAlternates?: LinkAlternate[]
  }
  
   interface Thumbnail9 {
    thumbnails?: Thumbnail10[]
  }
  
   interface Thumbnail10 {
    url?: string
    width?: number
    height?: number
  }
  
   interface LinkAlternate {
    hrefUrl?: string
  }
  