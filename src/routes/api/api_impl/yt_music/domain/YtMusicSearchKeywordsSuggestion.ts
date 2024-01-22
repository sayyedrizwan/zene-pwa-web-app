export interface YtMusicSearchKeywordsSuggestion {
  responseContext?: ResponseContext
  contents?: Content[]
  trackingParams?: string
}

export interface ResponseContext {
  serviceTrackingParams?: ServiceTrackingParam[]
}

export interface ServiceTrackingParam {
  service?: string
  params?: Param[]
}

export interface Param {
  key?: string
  value?: string
}

export interface Content {
  searchSuggestionsSectionRenderer?: SearchSuggestionsSectionRenderer
}

export interface SearchSuggestionsSectionRenderer {
  contents?: Content2[]
}

export interface Content2 {
  searchSuggestionRenderer?: SearchSuggestionRenderer
  musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
}

export interface SearchSuggestionRenderer {
  suggestion?: Suggestion
  navigationEndpoint?: NavigationEndpoint
  trackingParams?: string
  icon?: Icon
}

export interface Suggestion {
  runs?: Run[]
}

export interface Run {
  text?: string
  bold?: boolean
}

export interface NavigationEndpoint {
  clickTrackingParams?: string
  searchEndpoint?: SearchEndpoint
}

export interface SearchEndpoint {
  query?: string
}

export interface Icon {
  iconType?: string
}

export interface MusicResponsiveListItemRenderer {
  trackingParams?: string
  thumbnail?: Thumbnail
  flexColumns?: FlexColumn[]
  menu?: Menu
  flexColumnDisplayStyle?: string
  navigationEndpoint?: NavigationEndpoint4
  itemHeight?: string
  overlay?: Overlay
  playlistItemData?: PlaylistItemData
}

export interface Thumbnail {
  musicThumbnailRenderer?: MusicThumbnailRenderer
}

export interface MusicThumbnailRenderer {
  thumbnail?: Thumbnail2
  thumbnailCrop?: string
  thumbnailScale?: string
  trackingParams?: string
}

export interface Thumbnail2 {
  thumbnails?: Thumbnail3[]
}

export interface Thumbnail3 {
  url?: string
  width?: number
  height?: number
}

export interface FlexColumn {
  musicResponsiveListItemFlexColumnRenderer?: MusicResponsiveListItemFlexColumnRenderer
}

export interface MusicResponsiveListItemFlexColumnRenderer {
  text?: Text
  displayPriority?: string
}

export interface Text {
  runs?: Run2[]
}

export interface Run2 {
  text?: string
  navigationEndpoint?: NavigationEndpoint2
}

export interface NavigationEndpoint2 {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint
  watchEndpoint?: WatchEndpoint
}

export interface BrowseEndpoint {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs
}

export interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig
}

export interface BrowseEndpointContextMusicConfig {
  pageType?: string
}

export interface WatchEndpoint {
  videoId?: string
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig
}

export interface WatchEndpointMusicConfig {
  musicVideoType?: string
}

export interface Menu {
  menuRenderer?: MenuRenderer
}

export interface MenuRenderer {
  items?: Item[]
  trackingParams?: string
  accessibility?: Accessibility
}

export interface Item {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
  menuServiceItemRenderer?: MenuServiceItemRenderer
}

export interface MenuNavigationItemRenderer {
  text?: Text2
  icon?: Icon2
  navigationEndpoint?: NavigationEndpoint3
  trackingParams?: string
}

export interface Text2 {
  runs?: Run3[]
}

export interface Run3 {
  text?: string
}

export interface Icon2 {
  iconType?: string
}

export interface NavigationEndpoint3 {
  clickTrackingParams?: string
  shareEntityEndpoint?: ShareEntityEndpoint
  browseEndpoint?: BrowseEndpoint2
  addToPlaylistEndpoint?: AddToPlaylistEndpoint
  watchEndpoint?: WatchEndpoint2
  watchPlaylistEndpoint?: WatchPlaylistEndpoint
}

export interface ShareEntityEndpoint {
  serializedShareEntity?: string
  sharePanelType?: string
}

export interface BrowseEndpoint2 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs2
}

export interface BrowseEndpointContextSupportedConfigs2 {
  browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig2
}

export interface BrowseEndpointContextMusicConfig2 {
  pageType?: string
}

export interface AddToPlaylistEndpoint {
  playlistId?: string
  videoId?: string
}

export interface WatchEndpoint2 {
  videoId?: string
  playlistId?: string
  params?: string
  loggingContext?: LoggingContext
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
}

export interface LoggingContext {
  vssLoggingContext?: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData?: string
}

export interface WatchEndpointMusicSupportedConfigs2 {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig2
}

export interface WatchEndpointMusicConfig2 {
  musicVideoType?: string
}

export interface WatchPlaylistEndpoint {
  playlistId?: string
  params?: string
}

export interface ToggleMenuServiceItemRenderer {
  defaultText?: DefaultText
  defaultIcon?: DefaultIcon
  defaultServiceEndpoint?: DefaultServiceEndpoint
  toggledText?: ToggledText
  toggledIcon?: ToggledIcon
  toggledServiceEndpoint?: ToggledServiceEndpoint
  trackingParams?: string
}

export interface DefaultText {
  runs?: Run4[]
}

export interface Run4 {
  text?: string
}

export interface DefaultIcon {
  iconType?: string
}

export interface DefaultServiceEndpoint {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint
  subscribeEndpoint?: SubscribeEndpoint
}

export interface LikeEndpoint {
  status?: string
  target?: Target
}

export interface Target {
  playlistId?: string
}

export interface SubscribeEndpoint {
  channelIds?: string[]
  params?: string
}

export interface ToggledText {
  runs?: Run5[]
}

export interface Run5 {
  text?: string
}

export interface ToggledIcon {
  iconType?: string
}

export interface ToggledServiceEndpoint {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint2
  unsubscribeEndpoint?: UnsubscribeEndpoint
}

export interface LikeEndpoint2 {
  status?: string
  target?: Target2
}

export interface Target2 {
  playlistId?: string
}

export interface UnsubscribeEndpoint {
  channelIds?: string[]
  params?: string
}

export interface MenuServiceItemRenderer {
  text?: Text3
  icon?: Icon3
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
}

export interface Text3 {
  runs?: Run6[]
}

export interface Run6 {
  text?: string
}

export interface Icon3 {
  iconType?: string
}

export interface ServiceEndpoint {
  clickTrackingParams?: string
  queueAddEndpoint?: QueueAddEndpoint
}

export interface QueueAddEndpoint {
  queueTarget?: QueueTarget
  queueInsertPosition?: string
  commands?: Command[]
}

export interface QueueTarget {
  videoId?: string
  onEmptyQueue?: OnEmptyQueue
  playlistId?: string
}

export interface OnEmptyQueue {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint3
}

export interface WatchEndpoint3 {
  videoId?: string
  playlistId?: string
}

export interface Command {
  clickTrackingParams?: string
  addToToastAction?: AddToToastAction
}

export interface AddToToastAction {
  item?: Item2
}

export interface Item2 {
  notificationTextRenderer?: NotificationTextRenderer
}

export interface NotificationTextRenderer {
  successResponseText?: SuccessResponseText
  trackingParams?: string
}

export interface SuccessResponseText {
  runs?: Run7[]
}

export interface Run7 {
  text?: string
}

export interface Accessibility {
  accessibilityData?: AccessibilityData
}

export interface AccessibilityData {
  label?: string
}

export interface NavigationEndpoint4 {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint3
  watchEndpoint?: WatchEndpoint4
}

export interface BrowseEndpoint3 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs3
}

export interface BrowseEndpointContextSupportedConfigs3 {
  browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig3
}

export interface BrowseEndpointContextMusicConfig3 {
  pageType?: string
}

export interface WatchEndpoint4 {
  videoId?: string
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
}

export interface WatchEndpointMusicSupportedConfigs3 {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig3
}

export interface WatchEndpointMusicConfig3 {
  musicVideoType?: string
}

export interface Overlay {
  musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
}

export interface MusicItemThumbnailOverlayRenderer {
  background?: Background
  content?: Content3
  contentPosition?: string
  displayStyle?: string
}

export interface Background {
  verticalGradient?: VerticalGradient
}

export interface VerticalGradient {
  gradientLayerColors?: string[]
}

export interface Content3 {
  musicPlayButtonRenderer?: MusicPlayButtonRenderer
}

export interface MusicPlayButtonRenderer {
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

export interface PlayNavigationEndpoint {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint5
  watchPlaylistEndpoint?: WatchPlaylistEndpoint2
}

export interface WatchEndpoint5 {
  videoId?: string
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs4
}

export interface WatchEndpointMusicSupportedConfigs4 {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig4
}

export interface WatchEndpointMusicConfig4 {
  musicVideoType?: string
}

export interface WatchPlaylistEndpoint2 {
  playlistId?: string
  params?: string
}

export interface PlayIcon {
  iconType?: string
}

export interface PauseIcon {
  iconType?: string
}

export interface PlayingIcon {
  iconType?: string
}

export interface AccessibilityPlayData {
  accessibilityData?: AccessibilityData2
}

export interface AccessibilityData2 {
  label?: string
}

export interface AccessibilityPauseData {
  accessibilityData?: AccessibilityData3
}

export interface AccessibilityData3 {
  label?: string
}

export interface PlaylistItemData {
  videoId?: string
}
