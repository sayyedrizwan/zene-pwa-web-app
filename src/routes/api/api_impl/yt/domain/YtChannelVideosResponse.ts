export interface YtChannelVideosResponse {
    responseContext: ResponseContext
    contents: Contents
    header: Header2
    metadata: Metadata
    trackingParams: string
    topbar: Topbar
    microformat: Microformat
  }
  
  export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[]
    maxAgeSeconds: number
    mainAppWebResponseContext: MainAppWebResponseContext
    webResponseContextExtensionData: WebResponseContextExtensionData
  }
  
  export interface ServiceTrackingParam {
    service: string
    params: Param[]
  }
  
  export interface Param {
    key: string
    value: string
  }
  
  export interface MainAppWebResponseContext {
    loggedOut: boolean
    trackingParam: string
  }
  
  export interface WebResponseContextExtensionData {
    ytConfigData: YtConfigData
    hasDecorated: boolean
  }
  
  export interface YtConfigData {
    visitorData: string
    rootVisualElementType: number
  }
  
  export interface Contents {
    twoColumnBrowseResultsRenderer: TwoColumnBrowseResultsRenderer
  }
  
  export interface TwoColumnBrowseResultsRenderer {
    tabs: Tab[]
  }
  
  export interface Tab {
    tabRenderer?: TabRenderer
    expandableTabRenderer?: ExpandableTabRenderer
  }
  
  export interface TabRenderer {
    endpoint: Endpoint
    title: string
    trackingParams: string
    selected?: boolean
    content?: Content
  }
  
  export interface Endpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata
    browseEndpoint: BrowseEndpoint
  }
  
  export interface CommandMetadata {
    webCommandMetadata: WebCommandMetadata
  }
  
  export interface WebCommandMetadata {
    url: string
    webPageType: string
    rootVe: number
    apiUrl: string
  }
  
  export interface BrowseEndpoint {
    browseId: string
    params: string
    canonicalBaseUrl: string
  }
  
  export interface Content {
    richGridRenderer: RichGridRenderer
  }
  
  export interface RichGridRenderer {
    contents: Content2[]
    trackingParams: string
    header: Header
    targetId: string
    style: string
  }
  
  export interface Content2 {
    richItemRenderer?: RichItemRenderer
    continuationItemRenderer?: ContinuationItemRenderer
  }
  
  export interface RichItemRenderer {
    content: Content3
    trackingParams: string
  }
  
  export interface Content3 {
    videoRenderer: VideoRenderer
  }
  
  export interface VideoRenderer {
    videoId: string
    thumbnail: Thumbnail
    title: Title
    descriptionSnippet: DescriptionSnippet
    publishedTimeText: PublishedTimeText
    lengthText: LengthText
    viewCountText: ViewCountText
    navigationEndpoint: NavigationEndpoint
    ownerBadges: OwnerBadge[]
    trackingParams: string
    showActionMenu: boolean
    shortViewCountText: ShortViewCountText
    menu: Menu
    thumbnailOverlays: ThumbnailOverlay[]
  }
  
  export interface Thumbnail {
    thumbnails: Thumbnail2[]
  }
  
  export interface Thumbnail2 {
    url: string
    width: number
    height: number
  }
  
  export interface Title {
    runs: Run[]
    accessibility: Accessibility
  }
  
  export interface Run {
    text: string
  }
  
  export interface Accessibility {
    accessibilityData: AccessibilityData
  }
  
  export interface AccessibilityData {
    label: string
  }
  
  export interface DescriptionSnippet {
    runs: Run2[]
  }
  
  export interface Run2 {
    text: string
  }
  
  export interface PublishedTimeText {
    simpleText: string
  }
  
  export interface LengthText {
    accessibility: Accessibility2
    simpleText: string
  }
  
  export interface Accessibility2 {
    accessibilityData: AccessibilityData2
  }
  
  export interface AccessibilityData2 {
    label: string
  }
  
  export interface ViewCountText {
    simpleText: string
  }
  
  export interface NavigationEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata2
    watchEndpoint: WatchEndpoint
  }
  
  export interface CommandMetadata2 {
    webCommandMetadata: WebCommandMetadata2
  }
  
  export interface WebCommandMetadata2 {
    url: string
    webPageType: string
    rootVe: number
  }
  
  export interface WatchEndpoint {
    videoId: string
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig
  }
  
  export interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig
  }
  
  export interface Html5PlaybackOnesieConfig {
    commonConfig: CommonConfig
  }
  
  export interface CommonConfig {
    url: string
  }
  
  export interface OwnerBadge {
    metadataBadgeRenderer: MetadataBadgeRenderer
  }
  
  export interface MetadataBadgeRenderer {
    icon: Icon
    style: string
    tooltip: string
    trackingParams: string
    accessibilityData: AccessibilityData3
  }
  
  export interface Icon {
    iconType: string
  }
  
  export interface AccessibilityData3 {
    label: string
  }
  
  export interface ShortViewCountText {
    accessibility: Accessibility3
    simpleText: string
  }
  
  export interface Accessibility3 {
    accessibilityData: AccessibilityData4
  }
  
  export interface AccessibilityData4 {
    label: string
  }
  
  export interface Menu {
    menuRenderer: MenuRenderer
  }
  
  export interface MenuRenderer {
    items: Item[]
    trackingParams: string
    accessibility: Accessibility4
  }
  
  export interface Item {
    menuServiceItemRenderer: MenuServiceItemRenderer
  }
  
  export interface MenuServiceItemRenderer {
    text: Text
    icon: Icon2
    serviceEndpoint: ServiceEndpoint
    trackingParams: string
  }
  
  export interface Text {
    runs: Run3[]
  }
  
  export interface Run3 {
    text: string
  }
  
  export interface Icon2 {
    iconType: string
  }
  
  export interface ServiceEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata3
    signalServiceEndpoint?: SignalServiceEndpoint
    shareEntityServiceEndpoint?: ShareEntityServiceEndpoint
  }
  
  export interface CommandMetadata3 {
    webCommandMetadata: WebCommandMetadata3
  }
  
  export interface WebCommandMetadata3 {
    sendPost: boolean
    apiUrl?: string
  }
  
  export interface SignalServiceEndpoint {
    signal: string
    actions: Action[]
  }
  
  export interface Action {
    clickTrackingParams: string
    addToPlaylistCommand: AddToPlaylistCommand
  }
  
  export interface AddToPlaylistCommand {
    openMiniplayer: boolean
    videoId: string
    listType: string
    onCreateListCommand: OnCreateListCommand
    videoIds: string[]
  }
  
  export interface OnCreateListCommand {
    clickTrackingParams: string
    commandMetadata: CommandMetadata4
    createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint
  }
  
  export interface CommandMetadata4 {
    webCommandMetadata: WebCommandMetadata4
  }
  
  export interface WebCommandMetadata4 {
    sendPost: boolean
    apiUrl: string
  }
  
  export interface CreatePlaylistServiceEndpoint {
    videoIds: string[]
    params: string
  }
  
  export interface ShareEntityServiceEndpoint {
    serializedShareEntity: string
    commands: Command[]
  }
  
  export interface Command {
    clickTrackingParams: string
    openPopupAction: OpenPopupAction
  }
  
  export interface OpenPopupAction {
    popup: Popup
    popupType: string
    beReused: boolean
  }
  
  export interface Popup {
    unifiedSharePanelRenderer: UnifiedSharePanelRenderer
  }
  
  export interface UnifiedSharePanelRenderer {
    trackingParams: string
    showLoadingSpinner: boolean
  }
  
  export interface Accessibility4 {
    accessibilityData: AccessibilityData5
  }
  
  export interface AccessibilityData5 {
    label: string
  }
  
  export interface ThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
    thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
  }
  
  export interface ThumbnailOverlayTimeStatusRenderer {
    text: Text2
    style: string
  }
  
  export interface Text2 {
    accessibility: Accessibility5
    simpleText: string
  }
  
  export interface Accessibility5 {
    accessibilityData: AccessibilityData6
  }
  
  export interface AccessibilityData6 {
    label: string
  }
  
  export interface ThumbnailOverlayToggleButtonRenderer {
    untoggledIcon: UntoggledIcon
    toggledIcon: ToggledIcon
    untoggledTooltip: string
    toggledTooltip: string
    untoggledServiceEndpoint: UntoggledServiceEndpoint
    untoggledAccessibility: UntoggledAccessibility
    toggledAccessibility: ToggledAccessibility
    trackingParams: string
    isToggled?: boolean
    toggledServiceEndpoint?: ToggledServiceEndpoint
  }
  
  export interface UntoggledIcon {
    iconType: string
  }
  
  export interface ToggledIcon {
    iconType: string
  }
  
  export interface UntoggledServiceEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata5
    signalServiceEndpoint?: SignalServiceEndpoint2
    playlistEditEndpoint?: PlaylistEditEndpoint
  }
  
  export interface CommandMetadata5 {
    webCommandMetadata: WebCommandMetadata5
  }
  
  export interface WebCommandMetadata5 {
    sendPost: boolean
    apiUrl?: string
  }
  
  export interface SignalServiceEndpoint2 {
    signal: string
    actions: Action2[]
  }
  
  export interface Action2 {
    clickTrackingParams: string
    addToPlaylistCommand: AddToPlaylistCommand2
  }
  
  export interface AddToPlaylistCommand2 {
    openMiniplayer: boolean
    videoId: string
    listType: string
    onCreateListCommand: OnCreateListCommand2
    videoIds: string[]
  }
  
  export interface OnCreateListCommand2 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata6
    createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint2
  }
  
  export interface CommandMetadata6 {
    webCommandMetadata: WebCommandMetadata6
  }
  
  export interface WebCommandMetadata6 {
    sendPost: boolean
    apiUrl: string
  }
  
  export interface CreatePlaylistServiceEndpoint2 {
    videoIds: string[]
    params: string
  }
  
  export interface PlaylistEditEndpoint {
    playlistId: string
    actions: Action3[]
  }
  
  export interface Action3 {
    addedVideoId: string
    action: string
  }
  
  export interface UntoggledAccessibility {
    accessibilityData: AccessibilityData7
  }
  
  export interface AccessibilityData7 {
    label: string
  }
  
  export interface ToggledAccessibility {
    accessibilityData: AccessibilityData8
  }
  
  export interface AccessibilityData8 {
    label: string
  }
  
  export interface ToggledServiceEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata7
    playlistEditEndpoint: PlaylistEditEndpoint2
  }
  
  export interface CommandMetadata7 {
    webCommandMetadata: WebCommandMetadata7
  }
  
  export interface WebCommandMetadata7 {
    sendPost: boolean
    apiUrl: string
  }
  
  export interface PlaylistEditEndpoint2 {
    playlistId: string
    actions: Action4[]
  }
  
  export interface Action4 {
    action: string
    removedVideoId: string
  }
  
  export interface ThumbnailOverlayNowPlayingRenderer {
    text: Text3
  }
  
  export interface Text3 {
    runs: Run4[]
  }
  
  export interface Run4 {
    text: string
  }
  
  export interface ContinuationItemRenderer {
    trigger: string
    continuationEndpoint: ContinuationEndpoint
  }
  
  export interface ContinuationEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata8
    continuationCommand: ContinuationCommand
  }
  
  export interface CommandMetadata8 {
    webCommandMetadata: WebCommandMetadata8
  }
  
  export interface WebCommandMetadata8 {
    sendPost: boolean
    apiUrl: string
  }
  
  export interface ContinuationCommand {
    token: string
    request: string
  }
  
  export interface Header {
    feedFilterChipBarRenderer: FeedFilterChipBarRenderer
  }
  
  export interface FeedFilterChipBarRenderer {
    contents: Content4[]
    trackingParams: string
    nextButton: NextButton
    previousButton: PreviousButton
    styleType: string
  }
  
  export interface Content4 {
    chipCloudChipRenderer: ChipCloudChipRenderer
  }
  
  export interface ChipCloudChipRenderer {
    text: Text4
    navigationEndpoint: NavigationEndpoint2
    trackingParams: string
    isSelected: boolean
  }
  
  export interface Text4 {
    simpleText: string
  }
  
  export interface NavigationEndpoint2 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata9
    continuationCommand: ContinuationCommand2
  }
  
  export interface CommandMetadata9 {
    webCommandMetadata: WebCommandMetadata9
  }
  
  export interface WebCommandMetadata9 {
    sendPost: boolean
    apiUrl: string
  }
  
  export interface ContinuationCommand2 {
    token: string
    request: string
    command: Command2
  }
  
  export interface Command2 {
    clickTrackingParams: string
    showReloadUiCommand: ShowReloadUiCommand
  }
  
  export interface ShowReloadUiCommand {
    targetId: string
  }
  
  export interface NextButton {
    buttonRenderer: ButtonRenderer
  }
  
  export interface ButtonRenderer {
    style: string
    size: string
    isDisabled: boolean
    icon: Icon3
    tooltip: string
    trackingParams: string
    accessibilityData: AccessibilityData9
  }
  
  export interface Icon3 {
    iconType: string
  }
  
  export interface AccessibilityData9 {
    accessibilityData: AccessibilityData10
  }
  
  export interface AccessibilityData10 {
    label: string
  }
  
  export interface PreviousButton {
    buttonRenderer: ButtonRenderer2
  }
  
  export interface ButtonRenderer2 {
    style: string
    size: string
    isDisabled: boolean
    icon: Icon4
    tooltip: string
    trackingParams: string
    accessibilityData: AccessibilityData11
  }
  
  export interface Icon4 {
    iconType: string
  }
  
  export interface AccessibilityData11 {
    accessibilityData: AccessibilityData12
  }
  
  export interface AccessibilityData12 {
    label: string
  }
  
  export interface ExpandableTabRenderer {
    endpoint: Endpoint2
    title: string
    selected: boolean
  }
  
  export interface Endpoint2 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata10
    browseEndpoint: BrowseEndpoint2
  }
  
  export interface CommandMetadata10 {
    webCommandMetadata: WebCommandMetadata10
  }
  
  export interface WebCommandMetadata10 {
    url: string
    webPageType: string
    rootVe: number
    apiUrl: string
  }
  
  export interface BrowseEndpoint2 {
    browseId: string
    params: string
    canonicalBaseUrl: string
  }
  
  export interface Header2 {
    c4TabbedHeaderRenderer: C4TabbedHeaderRenderer
  }
  
  export interface C4TabbedHeaderRenderer {
    channelId: string
    title: string
    navigationEndpoint: NavigationEndpoint3
    avatar: Avatar
    banner: Banner
    badges: Badge[]
    subscribeButton: SubscribeButton
    subscriberCountText: SubscriberCountText
    tvBanner: TvBanner
    mobileBanner: MobileBanner
    trackingParams: string
    channelHandleText: ChannelHandleText
    style: string
    videosCountText: VideosCountText
    tagline: Tagline
  }
  
  export interface NavigationEndpoint3 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata11
    browseEndpoint: BrowseEndpoint3
  }
  
  export interface CommandMetadata11 {
    webCommandMetadata: WebCommandMetadata11
  }
  
  export interface WebCommandMetadata11 {
    url: string
    webPageType: string
    rootVe: number
    apiUrl: string
  }
  
  export interface BrowseEndpoint3 {
    browseId: string
    canonicalBaseUrl: string
  }
  
  export interface Avatar {
    thumbnails: Thumbnail3[]
  }
  
  export interface Thumbnail3 {
    url: string
    width: number
    height: number
  }
  
  export interface Banner {
    thumbnails: Thumbnail4[]
  }
  
  export interface Thumbnail4 {
    url: string
    width: number
    height: number
  }
  
  export interface Badge {
    metadataBadgeRenderer: MetadataBadgeRenderer2
  }
  
  export interface MetadataBadgeRenderer2 {
    icon: Icon5
    style: string
    tooltip: string
    trackingParams: string
    accessibilityData: AccessibilityData13
  }
  
  export interface Icon5 {
    iconType: string
  }
  
  export interface AccessibilityData13 {
    label: string
  }
  
  export interface SubscribeButton {
    buttonRenderer: ButtonRenderer3
  }
  
  export interface ButtonRenderer3 {
    style: string
    size: string
    isDisabled: boolean
    text: Text5
    navigationEndpoint: NavigationEndpoint4
    trackingParams: string
  }
  
  export interface Text5 {
    runs: Run5[]
  }
  
  export interface Run5 {
    text: string
  }
  
  export interface NavigationEndpoint4 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata12
    modalEndpoint: ModalEndpoint
  }
  
  export interface CommandMetadata12 {
    webCommandMetadata: WebCommandMetadata12
  }
  
  export interface WebCommandMetadata12 {
    ignoreNavigation: boolean
  }
  
  export interface ModalEndpoint {
    modal: Modal
  }
  
  export interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer
  }
  
  export interface ModalWithTitleAndButtonRenderer {
    title: Title2
    content: Content5
    button: Button
  }
  
  export interface Title2 {
    simpleText: string
  }
  
  export interface Content5 {
    simpleText: string
  }
  
  export interface Button {
    buttonRenderer: ButtonRenderer4
  }
  
  export interface ButtonRenderer4 {
    style: string
    size: string
    isDisabled: boolean
    text: Text6
    navigationEndpoint: NavigationEndpoint5
    trackingParams: string
  }
  
  export interface Text6 {
    simpleText: string
  }
  
  export interface NavigationEndpoint5 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata13
    signInEndpoint: SignInEndpoint
  }
  
  export interface CommandMetadata13 {
    webCommandMetadata: WebCommandMetadata13
  }
  
  export interface WebCommandMetadata13 {
    url: string
    webPageType: string
    rootVe: number
  }
  
  export interface SignInEndpoint {
    nextEndpoint: NextEndpoint
    continueAction: string
    idamTag: string
  }
  
  export interface NextEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata14
    browseEndpoint: BrowseEndpoint4
  }
  
  export interface CommandMetadata14 {
    webCommandMetadata: WebCommandMetadata14
  }
  
  export interface WebCommandMetadata14 {
    url: string
    webPageType: string
    rootVe: number
    apiUrl: string
  }
  
  export interface BrowseEndpoint4 {
    browseId: string
    params: string
    canonicalBaseUrl: string
  }
  
  export interface SubscriberCountText {
    accessibility: Accessibility6
    simpleText: string
  }
  
  export interface Accessibility6 {
    accessibilityData: AccessibilityData14
  }
  
  export interface AccessibilityData14 {
    label: string
  }
  
  export interface TvBanner {
    thumbnails: Thumbnail5[]
  }
  
  export interface Thumbnail5 {
    url: string
    width: number
    height: number
  }
  
  export interface MobileBanner {
    thumbnails: Thumbnail6[]
  }
  
  export interface Thumbnail6 {
    url: string
    width: number
    height: number
  }
  
  export interface ChannelHandleText {
    runs: Run6[]
  }
  
  export interface Run6 {
    text: string
  }
  
  export interface VideosCountText {
    runs: Run7[]
  }
  
  export interface Run7 {
    text: string
  }
  
  export interface Tagline {
    channelTaglineRenderer: ChannelTaglineRenderer
  }
  
  export interface ChannelTaglineRenderer {
    content: string
    maxLines: number
    moreLabel: string
    moreEndpoint: MoreEndpoint
    moreIcon: MoreIcon
  }
  
  export interface MoreEndpoint {
    clickTrackingParams: string
    showEngagementPanelEndpoint: ShowEngagementPanelEndpoint
  }
  
  export interface ShowEngagementPanelEndpoint {
    engagementPanel: EngagementPanel
    identifier: Identifier2
    engagementPanelPresentationConfigs: EngagementPanelPresentationConfigs
  }
  
  export interface EngagementPanel {
    engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer
  }
  
  export interface EngagementPanelSectionListRenderer {
    header: Header3
    content: Content6
    targetId: string
    identifier: Identifier
  }
  
  export interface Header3 {
    engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer
  }
  
  export interface EngagementPanelTitleHeaderRenderer {
    title: Title3
    visibilityButton: VisibilityButton
    trackingParams: string
  }
  
  export interface Title3 {
    simpleText: string
  }
  
  export interface VisibilityButton {
    buttonRenderer: ButtonRenderer5
  }
  
  export interface ButtonRenderer5 {
    style: string
    size: string
    isDisabled: boolean
    icon: Icon6
    accessibility: Accessibility7
    trackingParams: string
    accessibilityData: AccessibilityData15
    command: Command3
  }
  
  export interface Icon6 {
    iconType: string
  }
  
  export interface Accessibility7 {
    label: string
  }
  
  export interface AccessibilityData15 {
    accessibilityData: AccessibilityData16
  }
  
  export interface AccessibilityData16 {
    label: string
  }
  
  export interface Command3 {
    clickTrackingParams: string
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction
  }
  
  export interface ChangeEngagementPanelVisibilityAction {
    targetId: string
    visibility: string
  }
  
  export interface Content6 {
    sectionListRenderer: SectionListRenderer
  }
  
  export interface SectionListRenderer {
    contents: Content7[]
    trackingParams: string
    scrollPaneStyle: ScrollPaneStyle
  }
  
  export interface Content7 {
    itemSectionRenderer: ItemSectionRenderer
  }
  
  export interface ItemSectionRenderer {
    contents: Content8[]
    trackingParams: string
    sectionIdentifier: string
    targetId: string
  }
  
  export interface Content8 {
    continuationItemRenderer: ContinuationItemRenderer2
  }
  
  export interface ContinuationItemRenderer2 {
    trigger: string
    continuationEndpoint: ContinuationEndpoint2
  }
  
  export interface ContinuationEndpoint2 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata15
    continuationCommand: ContinuationCommand3
  }
  
  export interface CommandMetadata15 {
    webCommandMetadata: WebCommandMetadata15
  }
  
  export interface WebCommandMetadata15 {
    sendPost: boolean
    apiUrl: string
  }
  
  export interface ContinuationCommand3 {
    token: string
    request: string
  }
  
  export interface ScrollPaneStyle {
    scrollable: boolean
  }
  
  export interface Identifier {
    surface: string
    tag: string
  }
  
  export interface Identifier2 {
    surface: string
    tag: string
  }
  
  export interface EngagementPanelPresentationConfigs {
    engagementPanelPopupPresentationConfig: EngagementPanelPopupPresentationConfig
  }
  
  export interface EngagementPanelPopupPresentationConfig {
    popupType: string
  }
  
  export interface MoreIcon {
    iconType: string
  }
  
  export interface Metadata {
    channelMetadataRenderer: ChannelMetadataRenderer
  }
  
  export interface ChannelMetadataRenderer {
    title: string
    description: string
    rssUrl: string
    externalId: string
    keywords: string
    ownerUrls: string[]
    avatar: Avatar2
    channelUrl: string
    isFamilySafe: boolean
    availableCountryCodes: string[]
    musicArtistName: string
    androidDeepLink: string
    androidAppindexingLink: string
    iosAppindexingLink: string
    vanityChannelUrl: string
  }
  
  export interface Avatar2 {
    thumbnails: Thumbnail7[]
  }
  
  export interface Thumbnail7 {
    url: string
    width: number
    height: number
  }
  
  export interface Topbar {
    desktopTopbarRenderer: DesktopTopbarRenderer
  }
  
  export interface DesktopTopbarRenderer {
    logo: Logo
    searchbox: Searchbox
    trackingParams: string
    countryCode: string
    topbarButtons: TopbarButton[]
    hotkeyDialog: HotkeyDialog
    backButton: BackButton
    forwardButton: ForwardButton
    a11ySkipNavigationButton: A11ySkipNavigationButton
    voiceSearchButton: VoiceSearchButton
  }
  
  export interface Logo {
    topbarLogoRenderer: TopbarLogoRenderer
  }
  
  export interface TopbarLogoRenderer {
    iconImage: IconImage
    tooltipText: TooltipText
    endpoint: Endpoint3
    trackingParams: string
    overrideEntityKey: string
  }
  
  export interface IconImage {
    iconType: string
  }
  
  export interface TooltipText {
    runs: Run8[]
  }
  
  export interface Run8 {
    text: string
  }
  
  export interface Endpoint3 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata16
    browseEndpoint: BrowseEndpoint5
  }
  
  export interface CommandMetadata16 {
    webCommandMetadata: WebCommandMetadata16
  }
  
  export interface WebCommandMetadata16 {
    url: string
    webPageType: string
    rootVe: number
    apiUrl: string
  }
  
  export interface BrowseEndpoint5 {
    browseId: string
  }
  
  export interface Searchbox {
    fusionSearchboxRenderer: FusionSearchboxRenderer
  }
  
  export interface FusionSearchboxRenderer {
    icon: Icon7
    placeholderText: PlaceholderText
    config: Config
    trackingParams: string
    searchEndpoint: SearchEndpoint
    clearButton: ClearButton
  }
  
  export interface Icon7 {
    iconType: string
  }
  
  export interface PlaceholderText {
    runs: Run9[]
  }
  
  export interface Run9 {
    text: string
  }
  
  export interface Config {
    webSearchboxConfig: WebSearchboxConfig
  }
  
  export interface WebSearchboxConfig {
    requestLanguage: string
    requestDomain: string
    hasOnscreenKeyboard: boolean
    focusSearchbox: boolean
  }
  
  export interface SearchEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata17
    searchEndpoint: SearchEndpoint2
  }
  
  export interface CommandMetadata17 {
    webCommandMetadata: WebCommandMetadata17
  }
  
  export interface WebCommandMetadata17 {
    url: string
    webPageType: string
    rootVe: number
  }
  
  export interface SearchEndpoint2 {
    query: string
  }
  
  export interface ClearButton {
    buttonRenderer: ButtonRenderer6
  }
  
  export interface ButtonRenderer6 {
    style: string
    size: string
    isDisabled: boolean
    icon: Icon8
    trackingParams: string
    accessibilityData: AccessibilityData17
  }
  
  export interface Icon8 {
    iconType: string
  }
  
  export interface AccessibilityData17 {
    accessibilityData: AccessibilityData18
  }
  
  export interface AccessibilityData18 {
    label: string
  }
  
  export interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
    buttonRenderer?: ButtonRenderer7
  }
  
  export interface TopbarMenuButtonRenderer {
    icon: Icon9
    menuRequest: MenuRequest
    trackingParams: string
    accessibility: Accessibility8
    tooltip: string
    style: string
  }
  
  export interface Icon9 {
    iconType: string
  }
  
  export interface MenuRequest {
    clickTrackingParams: string
    commandMetadata: CommandMetadata18
    signalServiceEndpoint: SignalServiceEndpoint3
  }
  
  export interface CommandMetadata18 {
    webCommandMetadata: WebCommandMetadata18
  }
  
  export interface WebCommandMetadata18 {
    sendPost: boolean
    apiUrl: string
  }
  
  export interface SignalServiceEndpoint3 {
    signal: string
    actions: Action5[]
  }
  
  export interface Action5 {
    clickTrackingParams: string
    openPopupAction: OpenPopupAction2
  }
  
  export interface OpenPopupAction2 {
    popup: Popup2
    popupType: string
    beReused: boolean
  }
  
  export interface Popup2 {
    multiPageMenuRenderer: MultiPageMenuRenderer
  }
  
  export interface MultiPageMenuRenderer {
    trackingParams: string
    style: string
    showLoadingSpinner: boolean
  }
  
  export interface Accessibility8 {
    accessibilityData: AccessibilityData19
  }
  
  export interface AccessibilityData19 {
    label: string
  }
  
  export interface ButtonRenderer7 {
    style: string
    size: string
    text: Text7
    icon: Icon10
    navigationEndpoint: NavigationEndpoint6
    trackingParams: string
    targetId: string
  }
  
  export interface Text7 {
    runs: Run10[]
  }
  
  export interface Run10 {
    text: string
  }
  
  export interface Icon10 {
    iconType: string
  }
  
  export interface NavigationEndpoint6 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata19
    signInEndpoint: SignInEndpoint2
  }
  
  export interface CommandMetadata19 {
    webCommandMetadata: WebCommandMetadata19
  }
  
  export interface WebCommandMetadata19 {
    url: string
    webPageType: string
    rootVe: number
  }
  
  export interface SignInEndpoint2 {
    idamTag: string
  }
  
  export interface HotkeyDialog {
    hotkeyDialogRenderer: HotkeyDialogRenderer
  }
  
  export interface HotkeyDialogRenderer {
    title: Title4
    sections: Section[]
    dismissButton: DismissButton
    trackingParams: string
  }
  
  export interface Title4 {
    runs: Run11[]
  }
  
  export interface Run11 {
    text: string
  }
  
  export interface Section {
    hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer
  }
  
  export interface HotkeyDialogSectionRenderer {
    title: Title5
    options: Option[]
  }
  
  export interface Title5 {
    runs: Run12[]
  }
  
  export interface Run12 {
    text: string
  }
  
  export interface Option {
    hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer
  }
  
  export interface HotkeyDialogSectionOptionRenderer {
    label: Label
    hotkey: string
    hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
  }
  
  export interface Label {
    runs: Run13[]
  }
  
  export interface Run13 {
    text: string
  }
  
  export interface HotkeyAccessibilityLabel {
    accessibilityData: AccessibilityData20
  }
  
  export interface AccessibilityData20 {
    label: string
  }
  
  export interface DismissButton {
    buttonRenderer: ButtonRenderer8
  }
  
  export interface ButtonRenderer8 {
    style: string
    size: string
    isDisabled: boolean
    text: Text8
    trackingParams: string
  }
  
  export interface Text8 {
    runs: Run14[]
  }
  
  export interface Run14 {
    text: string
  }
  
  export interface BackButton {
    buttonRenderer: ButtonRenderer9
  }
  
  export interface ButtonRenderer9 {
    trackingParams: string
    command: Command4
  }
  
  export interface Command4 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata20
    signalServiceEndpoint: SignalServiceEndpoint4
  }
  
  export interface CommandMetadata20 {
    webCommandMetadata: WebCommandMetadata20
  }
  
  export interface WebCommandMetadata20 {
    sendPost: boolean
  }
  
  export interface SignalServiceEndpoint4 {
    signal: string
    actions: Action6[]
  }
  
  export interface Action6 {
    clickTrackingParams: string
    signalAction: SignalAction
  }
  
  export interface SignalAction {
    signal: string
  }
  
  export interface ForwardButton {
    buttonRenderer: ButtonRenderer10
  }
  
  export interface ButtonRenderer10 {
    trackingParams: string
    command: Command5
  }
  
  export interface Command5 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata21
    signalServiceEndpoint: SignalServiceEndpoint5
  }
  
  export interface CommandMetadata21 {
    webCommandMetadata: WebCommandMetadata21
  }
  
  export interface WebCommandMetadata21 {
    sendPost: boolean
  }
  
  export interface SignalServiceEndpoint5 {
    signal: string
    actions: Action7[]
  }
  
  export interface Action7 {
    clickTrackingParams: string
    signalAction: SignalAction2
  }
  
  export interface SignalAction2 {
    signal: string
  }
  
  export interface A11ySkipNavigationButton {
    buttonRenderer: ButtonRenderer11
  }
  
  export interface ButtonRenderer11 {
    style: string
    size: string
    isDisabled: boolean
    text: Text9
    trackingParams: string
    command: Command6
  }
  
  export interface Text9 {
    runs: Run15[]
  }
  
  export interface Run15 {
    text: string
  }
  
  export interface Command6 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata22
    signalServiceEndpoint: SignalServiceEndpoint6
  }
  
  export interface CommandMetadata22 {
    webCommandMetadata: WebCommandMetadata22
  }
  
  export interface WebCommandMetadata22 {
    sendPost: boolean
  }
  
  export interface SignalServiceEndpoint6 {
    signal: string
    actions: Action8[]
  }
  
  export interface Action8 {
    clickTrackingParams: string
    signalAction: SignalAction3
  }
  
  export interface SignalAction3 {
    signal: string
  }
  
  export interface VoiceSearchButton {
    buttonRenderer: ButtonRenderer12
  }
  
  export interface ButtonRenderer12 {
    style: string
    size: string
    isDisabled: boolean
    serviceEndpoint: ServiceEndpoint2
    icon: Icon12
    tooltip: string
    trackingParams: string
    accessibilityData: AccessibilityData23
  }
  
  export interface ServiceEndpoint2 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata23
    signalServiceEndpoint: SignalServiceEndpoint7
  }
  
  export interface CommandMetadata23 {
    webCommandMetadata: WebCommandMetadata23
  }
  
  export interface WebCommandMetadata23 {
    sendPost: boolean
  }
  
  export interface SignalServiceEndpoint7 {
    signal: string
    actions: Action9[]
  }
  
  export interface Action9 {
    clickTrackingParams: string
    openPopupAction: OpenPopupAction3
  }
  
  export interface OpenPopupAction3 {
    popup: Popup3
    popupType: string
  }
  
  export interface Popup3 {
    voiceSearchDialogRenderer: VoiceSearchDialogRenderer
  }
  
  export interface VoiceSearchDialogRenderer {
    placeholderHeader: PlaceholderHeader
    promptHeader: PromptHeader
    exampleQuery1: ExampleQuery1
    exampleQuery2: ExampleQuery2
    promptMicrophoneLabel: PromptMicrophoneLabel
    loadingHeader: LoadingHeader
    connectionErrorHeader: ConnectionErrorHeader
    connectionErrorMicrophoneLabel: ConnectionErrorMicrophoneLabel
    permissionsHeader: PermissionsHeader
    permissionsSubtext: PermissionsSubtext
    disabledHeader: DisabledHeader
    disabledSubtext: DisabledSubtext
    microphoneButtonAriaLabel: MicrophoneButtonAriaLabel
    exitButton: ExitButton
    trackingParams: string
    microphoneOffPromptHeader: MicrophoneOffPromptHeader
  }
  
  export interface PlaceholderHeader {
    runs: Run16[]
  }
  
  export interface Run16 {
    text: string
  }
  
  export interface PromptHeader {
    runs: Run17[]
  }
  
  export interface Run17 {
    text: string
  }
  
  export interface ExampleQuery1 {
    runs: Run18[]
  }
  
  export interface Run18 {
    text: string
  }
  
  export interface ExampleQuery2 {
    runs: Run19[]
  }
  
  export interface Run19 {
    text: string
  }
  
  export interface PromptMicrophoneLabel {
    runs: Run20[]
  }
  
  export interface Run20 {
    text: string
  }
  
  export interface LoadingHeader {
    runs: Run21[]
  }
  
  export interface Run21 {
    text: string
  }
  
  export interface ConnectionErrorHeader {
    runs: Run22[]
  }
  
  export interface Run22 {
    text: string
  }
  
  export interface ConnectionErrorMicrophoneLabel {
    runs: Run23[]
  }
  
  export interface Run23 {
    text: string
  }
  
  export interface PermissionsHeader {
    runs: Run24[]
  }
  
  export interface Run24 {
    text: string
  }
  
  export interface PermissionsSubtext {
    runs: Run25[]
  }
  
  export interface Run25 {
    text: string
  }
  
  export interface DisabledHeader {
    runs: Run26[]
  }
  
  export interface Run26 {
    text: string
  }
  
  export interface DisabledSubtext {
    runs: Run27[]
  }
  
  export interface Run27 {
    text: string
  }
  
  export interface MicrophoneButtonAriaLabel {
    runs: Run28[]
  }
  
  export interface Run28 {
    text: string
  }
  
  export interface ExitButton {
    buttonRenderer: ButtonRenderer13
  }
  
  export interface ButtonRenderer13 {
    style: string
    size: string
    isDisabled: boolean
    icon: Icon11
    trackingParams: string
    accessibilityData: AccessibilityData21
  }
  
  export interface Icon11 {
    iconType: string
  }
  
  export interface AccessibilityData21 {
    accessibilityData: AccessibilityData22
  }
  
  export interface AccessibilityData22 {
    label: string
  }
  
  export interface MicrophoneOffPromptHeader {
    runs: Run29[]
  }
  
  export interface Run29 {
    text: string
  }
  
  export interface Icon12 {
    iconType: string
  }
  
  export interface AccessibilityData23 {
    accessibilityData: AccessibilityData24
  }
  
  export interface AccessibilityData24 {
    label: string
  }
  
  export interface Microformat {
    microformatDataRenderer: MicroformatDataRenderer
  }
  
  export interface MicroformatDataRenderer {
    urlCanonical: string
    title: string
    description: string
    thumbnail: Thumbnail8
    siteName: string
    appName: string
    androidPackage: string
    iosAppStoreId: string
    iosAppArguments: string
    ogType: string
    urlApplinksWeb: string
    urlApplinksIos: string
    urlApplinksAndroid: string
    urlTwitterIos: string
    urlTwitterAndroid: string
    twitterCardType: string
    twitterSiteHandle: string
    schemaDotOrgType: string
    noindex: boolean
    unlisted: boolean
    familySafe: boolean
    tags: string[]
    availableCountries: string[]
    linkAlternates: LinkAlternate[]
  }
  
  export interface Thumbnail8 {
    thumbnails: Thumbnail9[]
  }
  
  export interface Thumbnail9 {
    url: string
    width: number
    height: number
  }
  
  export interface LinkAlternate {
    hrefUrl: string
  }
  