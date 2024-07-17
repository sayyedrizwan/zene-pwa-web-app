 export interface YTMusicSearchPagination {
    continuationContents?: ContinuationContents
    trackingParams?: string
    header?: Header
  }
  
   interface ContinuationContents {
    musicShelfContinuation?: MusicShelfContinuation
  }
  
   interface MusicShelfContinuation {
    contents?: Content[]
    trackingParams?: string
    continuations?: Continuation[]
    shelfDivider?: ShelfDivider
    autoReloadWhenEmpty?: boolean
  }
  
   interface Content {
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
  }
  
   interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail
    overlay?: Overlay
    flexColumns?: FlexColumn[]
    menu?: Menu
    playlistItemData?: PlaylistItemData
    flexColumnDisplayStyle?: string
    itemHeight?: string
  }
  
   interface Thumbnail {
    musicThumbnailRenderer?: MusicThumbnailRenderer
  }
  
   interface MusicThumbnailRenderer {
    thumbnail?: Thumbnail2
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
  }
  
   interface Thumbnail2 {
    thumbnails?: Thumbnail3[]
  }
  
   interface Thumbnail3 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Overlay {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
  }
  
   interface MusicItemThumbnailOverlayRenderer {
    background?: Background
    content?: Content2
    contentPosition?: string
    displayStyle?: string
  }
  
   interface Background {
    verticalGradient?: VerticalGradient
  }
  
   interface VerticalGradient {
    gradientLayerColors?: string[]
  }
  
   interface Content2 {
    musicPlayButtonRenderer?: MusicPlayButtonRenderer
  }
  
   interface MusicPlayButtonRenderer {
    playNavigationEndpoint?: PlayNavigationEndpoint
    trackingParams?: string
    playIcon?: PlayIcon
    pauseIcon?: PauseIcon
    iconColor?: number
    backgroundColor?: number
    activeBackgroundColor?: number
    loadingIndicatorColor?: number
    playingIcon?: PlayingIcon
    iconLoadingColor?: number
    activeScaleFactor?: number
    buttonSize?: string
    rippleTarget?: string
    accessibilityPlayData?: AccessibilityPlayData
    accessibilityPauseData?: AccessibilityPauseData
  }
  
   interface PlayNavigationEndpoint {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint
  }
  
   interface WatchEndpoint {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
  }
  
   interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig
  }
  
   interface WatchEndpointMusicConfig {
    musicVideoType?: string
  }
  
   interface PlayIcon {
    iconType?: string
  }
  
   interface PauseIcon {
    iconType?: string
  }
  
   interface PlayingIcon {
    iconType?: string
  }
  
   interface AccessibilityPlayData {
    accessibilityData?: AccessibilityData
  }
  
   interface AccessibilityData {
    label?: string
  }
  
   interface AccessibilityPauseData {
    accessibilityData?: AccessibilityData2
  }
  
   interface AccessibilityData2 {
    label?: string
  }
  
   interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer?: MusicResponsiveListItemFlexColumnRenderer
  }
  
   interface MusicResponsiveListItemFlexColumnRenderer {
    text?: Text
    displayPriority?: string
  }
  
   interface Text {
    runs?: Run[]
  }
  
   interface Run {
    text?: string
    navigationEndpoint?: NavigationEndpoint
  }
  
   interface NavigationEndpoint {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint2
    browseEndpoint?: BrowseEndpoint
  }
  
   interface WatchEndpoint2 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
  }
  
   interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig2
  }
  
   interface WatchEndpointMusicConfig2 {
    musicVideoType?: string
  }
  
   interface BrowseEndpoint {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs
  }
  
   interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig
  }
  
   interface BrowseEndpointContextMusicConfig {
    pageType?: string
  }
  
   interface Menu {
    menuRenderer?: MenuRenderer
  }
  
   interface MenuRenderer {
    items?: Item[]
    trackingParams?: string
    accessibility?: Accessibility
  }
  
   interface Item {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
    menuServiceItemRenderer?: MenuServiceItemRenderer
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
  }
  
   interface MenuNavigationItemRenderer {
    text?: Text2
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint2
    trackingParams?: string
  }
  
   interface Text2 {
    runs?: Run2[]
  }
  
   interface Run2 {
    text?: string
  }
  
   interface Icon {
    iconType?: string
  }
  
   interface NavigationEndpoint2 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint2
    addToPlaylistEndpoint?: AddToPlaylistEndpoint
    watchEndpoint?: WatchEndpoint3
  }
  
   interface ShareEntityEndpoint {
    serializedShareEntity?: string
    sharePanelType?: string
  }
  
   interface BrowseEndpoint2 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs2
  }
  
   interface BrowseEndpointContextSupportedConfigs2 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig2
  }
  
   interface BrowseEndpointContextMusicConfig2 {
    pageType?: string
  }
  
   interface AddToPlaylistEndpoint {
    videoId?: string
  }
  
   interface WatchEndpoint3 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
  }
  
   interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
  }
  
   interface VssLoggingContext {
    serializedContextData?: string
  }
  
   interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig3
  }
  
   interface WatchEndpointMusicConfig3 {
    musicVideoType?: string
  }
  
   interface MenuServiceItemRenderer {
    text?: Text3
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
  }
  
   interface Text3 {
    runs?: Run3[]
  }
  
   interface Run3 {
    text?: string
  }
  
   interface Icon2 {
    iconType?: string
  }
  
   interface ServiceEndpoint {
    clickTrackingParams?: string
    queueAddEndpoint?: QueueAddEndpoint
  }
  
   interface QueueAddEndpoint {
    queueTarget?: QueueTarget
    queueInsertPosition?: string
    commands?: Command[]
  }
  
   interface QueueTarget {
    videoId?: string
    onEmptyQueue?: OnEmptyQueue
  }
  
   interface OnEmptyQueue {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint4
  }
  
   interface WatchEndpoint4 {
    videoId?: string
  }
  
   interface Command {
    clickTrackingParams?: string
    addToToastAction?: AddToToastAction
  }
  
   interface AddToToastAction {
    item?: Item2
  }
  
   interface Item2 {
    notificationTextRenderer?: NotificationTextRenderer
  }
  
   interface NotificationTextRenderer {
    successResponseText?: SuccessResponseText
    trackingParams?: string
  }
  
   interface SuccessResponseText {
    runs?: Run4[]
  }
  
   interface Run4 {
    text?: string
  }
  
   interface ToggleMenuServiceItemRenderer {
    defaultText?: DefaultText
    defaultIcon?: DefaultIcon
    defaultServiceEndpoint?: DefaultServiceEndpoint
    toggledText?: ToggledText
    toggledIcon?: ToggledIcon
    toggledServiceEndpoint?: ToggledServiceEndpoint
    trackingParams?: string
  }
  
   interface DefaultText {
    runs?: Run5[]
  }
  
   interface Run5 {
    text?: string
  }
  
   interface DefaultIcon {
    iconType?: string
  }
  
   interface DefaultServiceEndpoint {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint
    feedbackEndpoint?: FeedbackEndpoint
  }
  
   interface LikeEndpoint {
    status?: string
    target?: Target
    actions?: Action[]
  }
  
   interface Target {
    videoId?: string
  }
  
   interface Action {
    clickTrackingParams?: string
    musicLibraryStatusUpdateCommand?: MusicLibraryStatusUpdateCommand
  }
  
   interface MusicLibraryStatusUpdateCommand {
    libraryStatus?: string
    addToLibraryFeedbackToken?: string
  }
  
   interface FeedbackEndpoint {
    feedbackToken?: string
  }
  
   interface ToggledText {
    runs?: Run6[]
  }
  
   interface Run6 {
    text?: string
  }
  
   interface ToggledIcon {
    iconType?: string
  }
  
   interface ToggledServiceEndpoint {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint2
    feedbackEndpoint?: FeedbackEndpoint2
  }
  
   interface LikeEndpoint2 {
    status?: string
    target?: Target2
  }
  
   interface Target2 {
    videoId?: string
  }
  
   interface FeedbackEndpoint2 {
    feedbackToken?: string
  }
  
   interface Accessibility {
    accessibilityData?: AccessibilityData3
  }
  
   interface AccessibilityData3 {
    label?: string
  }
  
   interface PlaylistItemData {
    videoId?: string
  }
  
   interface Continuation {
    nextContinuationData?: NextContinuationData
  }
  
   interface NextContinuationData {
    continuation?: string
    clickTrackingParams?: string
  }
  
   interface ShelfDivider {
    musicShelfDividerRenderer?: MusicShelfDividerRenderer
  }
  
   interface MusicShelfDividerRenderer {
    hidden?: boolean
  }
  
   interface Header {
    musicHeaderRenderer?: MusicHeaderRenderer
  }
  
   interface MusicHeaderRenderer {
    header?: Header2
    trackingParams?: string
  }
  
   interface Header2 {
    chipCloudRenderer?: ChipCloudRenderer
  }
  
   interface ChipCloudRenderer {
    chips?: Chip[]
    collapsedRowCount?: number
    trackingParams?: string
    horizontalScrollable?: boolean
  }
  
   interface Chip {
    chipCloudChipRenderer?: ChipCloudChipRenderer
  }
  
   interface ChipCloudChipRenderer {
    style?: Style
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
    icon?: Icon3
    accessibilityData?: AccessibilityData4
    isSelected?: boolean
    text?: Text4
    uniqueId?: string
  }
  
   interface Style {
    styleType?: string
  }
  
   interface NavigationEndpoint3 {
    clickTrackingParams?: string
    searchEndpoint?: SearchEndpoint
  }
  
   interface SearchEndpoint {
    query?: string
    params?: string
  }
  
   interface Icon3 {
    iconType?: string
  }
  
   interface AccessibilityData4 {
    accessibilityData?: AccessibilityData5
  }
  
   interface AccessibilityData5 {
    label?: string
  }
  
   interface Text4 {
    runs?: Run7[]
  }
  
   interface Run7 {
    text?: string
  }
  