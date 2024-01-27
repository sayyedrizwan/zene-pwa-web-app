export interface YtMusicSearchResponse {
  contents?: Contents
  trackingParams?: string
}

export interface Contents {
  tabbedSearchResultsRenderer?: TabbedSearchResultsRenderer
}

export interface TabbedSearchResultsRenderer {
  tabs?: Tab[]
}

export interface Tab {
  tabRenderer?: TabRenderer
}

export interface TabRenderer {
  title?: string
  selected?: boolean
  content?: Content
  tabIdentifier?: string
  trackingParams?: string
}

export interface Content {
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  contents?: Content2[]
  trackingParams?: string
  header?: Header
}

export interface Content2 {
  musicShelfRenderer?: MusicShelfRenderer
}

export interface MusicShelfRenderer {
  title?: Title
  contents?: Content3[]
  trackingParams?: string
  continuations?: Continuation[]
  shelfDivider?: ShelfDivider
}

export interface Title {
  runs?: Run[]
}

export interface Run {
  text?: string
}

export interface Content3 {
  musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
}

export interface MusicResponsiveListItemRenderer {
  trackingParams?: string
  thumbnail?: Thumbnail
  overlay?: Overlay
  flexColumns?: FlexColumn[]
  menu?: Menu
  navigationEndpoint?: NavigationEndpoint2
  playlistItemData?: PlaylistItemData
  flexColumnDisplayStyle?: string
  itemHeight?: string
  badges?: Badge[]
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

export interface Overlay {
  musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
}

export interface MusicItemThumbnailOverlayRenderer {
  background?: Background
  content?: Content4
  contentPosition?: string
  displayStyle?: string
}

export interface Background {
  verticalGradient?: VerticalGradient
}

export interface VerticalGradient {
  gradientLayerColors?: string[]
}

export interface Content4 {
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
  watchEndpoint?: WatchEndpoint
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
  accessibilityData?: AccessibilityData
}

export interface AccessibilityData {
  label?: string
}

export interface AccessibilityPauseData {
  accessibilityData?: AccessibilityData2
}

export interface AccessibilityData2 {
  label?: string
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
  navigationEndpoint?: NavigationEndpoint
}

export interface NavigationEndpoint {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint2
  browseEndpoint?: BrowseEndpoint
}

export interface WatchEndpoint2 {
  videoId?: string
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
}

export interface WatchEndpointMusicSupportedConfigs2 {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig2
}

export interface WatchEndpointMusicConfig2 {
  musicVideoType?: string
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
  menuServiceItemRenderer?: MenuServiceItemRenderer
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
}

export interface MenuNavigationItemRenderer {
  text?: Text2
  icon?: Icon
  navigationEndpoint?: NavigationEndpoint2
  trackingParams?: string
}

export interface Text2 {
  runs?: Run3[]
}

export interface Run3 {
  text?: string
}

export interface Icon {
  iconType?: string
}

export interface NavigationEndpoint2 {
  clickTrackingParams?: string
  shareEntityEndpoint?: ShareEntityEndpoint
  browseEndpoint?: BrowseEndpoint2
  addToPlaylistEndpoint?: AddToPlaylistEndpoint
  watchEndpoint?: WatchEndpoint3
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
  videoId?: string
}

export interface WatchEndpoint3 {
  videoId?: string
  playlistId?: string
  params?: string
  loggingContext?: LoggingContext
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
}

export interface LoggingContext {
  vssLoggingContext?: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData?: string
}

export interface WatchEndpointMusicSupportedConfigs3 {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig3
}

export interface WatchEndpointMusicConfig3 {
  musicVideoType?: string
}

export interface MenuServiceItemRenderer {
  text?: Text3
  icon?: Icon2
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
}

export interface Text3 {
  runs?: Run4[]
}

export interface Run4 {
  text?: string
}

export interface Icon2 {
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
}

export interface OnEmptyQueue {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint4
}

export interface WatchEndpoint4 {
  videoId?: string
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
  runs?: Run5[]
}

export interface Run5 {
  text?: string
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
  runs?: Run6[]
}

export interface Run6 {
  text?: string
}

export interface DefaultIcon {
  iconType?: string
}

export interface DefaultServiceEndpoint {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint
  feedbackEndpoint?: FeedbackEndpoint
}

export interface LikeEndpoint {
  status?: string
  target?: Target
  actions?: Action[]
}

export interface Target {
  videoId?: string
}

export interface Action {
  clickTrackingParams?: string
  musicLibraryStatusUpdateCommand?: MusicLibraryStatusUpdateCommand
}

export interface MusicLibraryStatusUpdateCommand {
  libraryStatus?: string
  addToLibraryFeedbackToken?: string
}

export interface FeedbackEndpoint {
  feedbackToken?: string
}

export interface ToggledText {
  runs?: Run7[]
}

export interface Run7 {
  text?: string
}

export interface ToggledIcon {
  iconType?: string
}

export interface ToggledServiceEndpoint {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint2
  feedbackEndpoint?: FeedbackEndpoint2
}

export interface LikeEndpoint2 {
  status?: string
  target?: Target2
}

export interface Target2 {
  videoId?: string
}

export interface FeedbackEndpoint2 {
  feedbackToken?: string
}

export interface Accessibility {
  accessibilityData?: AccessibilityData3
}

export interface AccessibilityData3 {
  label?: string
}

export interface PlaylistItemData {
  videoId?: string
}

export interface Badge {
  musicInlineBadgeRenderer?: MusicInlineBadgeRenderer
}

export interface MusicInlineBadgeRenderer {
  trackingParams?: string
  icon?: Icon3
  accessibilityData?: AccessibilityData4
}

export interface Icon3 {
  iconType?: string
}

export interface AccessibilityData4 {
  accessibilityData?: AccessibilityData5
}

export interface AccessibilityData5 {
  label?: string
}

export interface Continuation {
  nextContinuationData?: NextContinuationData
}

export interface NextContinuationData {
  continuation?: string
  clickTrackingParams?: string
}

export interface ShelfDivider {
  musicShelfDividerRenderer?: MusicShelfDividerRenderer
}

export interface MusicShelfDividerRenderer {
  hidden?: boolean
}

export interface Header {
  chipCloudRenderer?: ChipCloudRenderer
}

export interface ChipCloudRenderer {
  chips?: Chip[]
  collapsedRowCount?: number
  trackingParams?: string
  horizontalScrollable?: boolean
}

export interface Chip {
  chipCloudChipRenderer?: ChipCloudChipRenderer
}

export interface ChipCloudChipRenderer {
  style?: Style
  navigationEndpoint?: NavigationEndpoint3
  trackingParams?: string
  icon?: Icon4
  accessibilityData?: AccessibilityData6
  isSelected?: boolean
  text?: Text4
  uniqueId?: string
}

export interface Style {
  styleType?: string
}

export interface NavigationEndpoint3 {
  clickTrackingParams?: string
  searchEndpoint?: SearchEndpoint
}

export interface SearchEndpoint {
  query?: string
  params?: string
}

export interface Icon4 {
  iconType?: string
}

export interface AccessibilityData6 {
  accessibilityData?: AccessibilityData7
}

export interface AccessibilityData7 {
  label?: string
}

export interface Text4 {
  runs?: Run8[]
}

export interface Run8 {
  text?: string
}
