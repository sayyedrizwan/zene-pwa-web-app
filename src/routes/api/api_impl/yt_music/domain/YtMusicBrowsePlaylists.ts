export interface YtMusicBrowsePlaylists {
  responseContext?: ResponseContext
  contents?: Contents
  header?: Header
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

export interface Contents {
  singleColumnBrowseResultsRenderer?: SingleColumnBrowseResultsRenderer
}

export interface SingleColumnBrowseResultsRenderer {
  tabs?: Tab[]
}

export interface Tab {
  tabRenderer?: TabRenderer
}

export interface TabRenderer {
  content?: Content
  trackingParams?: string
}

export interface Content {
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  contents?: Content2[]
  continuations?: Continuation[]
  trackingParams?: string
}

export interface Content2 {
  musicPlaylistShelfRenderer?: MusicPlaylistShelfRenderer
}

export interface MusicPlaylistShelfRenderer {
  playlistId?: string
  contents?: Content3[]
  collapsedItemCount?: number
  trackingParams?: string
  contentsMultiSelectable?: boolean
}

export interface Content3 {
  musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
}

export interface MusicResponsiveListItemRenderer {
  trackingParams?: string
  thumbnail?: Thumbnail
  overlay?: Overlay
  flexColumns?: FlexColumn[]
  fixedColumns?: FixedColumn[]
  menu?: Menu
  playlistItemData?: PlaylistItemData
  multiSelectCheckbox?: MultiSelectCheckbox
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
  playlistId?: string
  params?: string
  playlistSetVideoId?: string
  loggingContext?: LoggingContext
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
}

export interface LoggingContext {
  vssLoggingContext?: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData?: string
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
  runs?: Run[]
}

export interface Run {
  text?: string
  navigationEndpoint?: NavigationEndpoint
}

export interface NavigationEndpoint {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint
  watchEndpoint?: WatchEndpoint2
}

export interface BrowseEndpoint {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs
  params?: string
}

export interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig
}

export interface BrowseEndpointContextMusicConfig {
  pageType?: string
}

export interface WatchEndpoint2 {
  videoId?: string
  playlistId?: string
  params?: string
  loggingContext?: LoggingContext2
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
}

export interface LoggingContext2 {
  vssLoggingContext?: VssLoggingContext2
}

export interface VssLoggingContext2 {
  serializedContextData?: string
}

export interface WatchEndpointMusicSupportedConfigs2 {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig2
}

export interface WatchEndpointMusicConfig2 {
  musicVideoType?: string
}

export interface FixedColumn {
  musicResponsiveListItemFixedColumnRenderer?: MusicResponsiveListItemFixedColumnRenderer
}

export interface MusicResponsiveListItemFixedColumnRenderer {
  text?: Text2
  displayPriority?: string
  size?: string
}

export interface Text2 {
  runs?: Run2[]
}

export interface Run2 {
  text?: string
}

export interface Menu {
  menuRenderer?: MenuRenderer
}

export interface MenuRenderer {
  items?: Item[]
  trackingParams?: string
  topLevelButtons?: TopLevelButton[]
  accessibility?: Accessibility
}

export interface Item {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
  menuServiceItemRenderer?: MenuServiceItemRenderer
}

export interface MenuNavigationItemRenderer {
  text?: Text3
  icon?: Icon
  navigationEndpoint?: NavigationEndpoint2
  trackingParams?: string
}

export interface Text3 {
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
  loggingContext?: LoggingContext3
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
}

export interface LoggingContext3 {
  vssLoggingContext?: VssLoggingContext3
}

export interface VssLoggingContext3 {
  serializedContextData?: string
}

export interface WatchEndpointMusicSupportedConfigs3 {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig3
}

export interface WatchEndpointMusicConfig3 {
  musicVideoType?: string
}

export interface ToggleMenuServiceItemRenderer {
  defaultText?: DefaultText
  defaultIcon?: DefaultIcon
  defaultServiceEndpoint?: DefaultServiceEndpoint
  toggledText?: ToggledText
  toggledIcon?: ToggledIcon
  toggledServiceEndpoint?: ToggledServiceEndpoint
  trackingParams?: string
  isToggled?: boolean
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
  feedbackEndpoint?: FeedbackEndpoint
  playlistEditEndpoint?: PlaylistEditEndpoint
}

export interface FeedbackEndpoint {
  feedbackToken?: string
}

export interface PlaylistEditEndpoint {
  playlistId?: string
  actions?: Action[]
  params?: string
}

export interface Action {
  addedVideoId?: string
  action?: string
  dedupeOption?: string
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
  feedbackEndpoint?: FeedbackEndpoint2
  playlistEditEndpoint?: PlaylistEditEndpoint2
}

export interface FeedbackEndpoint2 {
  feedbackToken?: string
}

export interface PlaylistEditEndpoint2 {
  playlistId?: string
  actions?: Action2[]
}

export interface Action2 {
  action?: string
  removedVideoId?: string
}

export interface MenuServiceItemRenderer {
  text?: Text4
  icon?: Icon2
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
}

export interface Text4 {
  runs?: Run6[]
}

export interface Run6 {
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
  runs?: Run7[]
}

export interface Run7 {
  text?: string
}

export interface TopLevelButton {
  likeButtonRenderer?: LikeButtonRenderer
}

export interface LikeButtonRenderer {
  target?: Target
  likeStatus?: string
  trackingParams?: string
  likesAllowed?: boolean
  serviceEndpoints?: ServiceEndpoint2[]
}

export interface Target {
  videoId?: string
}

export interface ServiceEndpoint2 {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint
}

export interface LikeEndpoint {
  status?: string
  target?: Target2
  actions?: Action3[]
}

export interface Target2 {
  videoId?: string
}

export interface Action3 {
  clickTrackingParams?: string
  musicLibraryStatusUpdateCommand?: MusicLibraryStatusUpdateCommand
}

export interface MusicLibraryStatusUpdateCommand {
  libraryStatus?: string
  addToLibraryFeedbackToken?: string
}

export interface Accessibility {
  accessibilityData?: AccessibilityData3
}

export interface AccessibilityData3 {
  label?: string
}

export interface PlaylistItemData {
  playlistSetVideoId?: string
  videoId?: string
}

export interface MultiSelectCheckbox {
  checkboxRenderer?: CheckboxRenderer
}

export interface CheckboxRenderer {
  onSelectionChangeCommand?: OnSelectionChangeCommand
  checkedState?: string
  trackingParams?: string
}

export interface OnSelectionChangeCommand {
  clickTrackingParams?: string
  updateMultiSelectStateCommand?: UpdateMultiSelectStateCommand
}

export interface UpdateMultiSelectStateCommand {
  multiSelectParams?: string
  multiSelectItem?: string
}

export interface Continuation {
  nextContinuationData?: NextContinuationData
}

export interface NextContinuationData {
  continuation?: string
  clickTrackingParams?: string
}

export interface Header {
  musicDetailHeaderRenderer?: MusicDetailHeaderRenderer
}

export interface MusicDetailHeaderRenderer {
  title?: Title
  subtitle?: Subtitle
  menu?: Menu2
  thumbnail?: Thumbnail4
  trackingParams?: string
  description?: Description
  moreButton?: MoreButton
  secondSubtitle?: SecondSubtitle
}

export interface Title {
  runs?: Run8[]
}

export interface Run8 {
  text?: string
}

export interface Subtitle {
  runs?: Run9[]
}

export interface Run9 {
  text?: string
  navigationEndpoint?: NavigationEndpoint
}

export interface Menu2 {
  menuRenderer?: MenuRenderer2
}

export interface MenuRenderer2 {
  items?: Item3[]
  trackingParams?: string
  topLevelButtons?: TopLevelButton2[]
  accessibility?: Accessibility5
}

export interface Item3 {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer2
  menuServiceItemRenderer?: MenuServiceItemRenderer2
}

export interface MenuNavigationItemRenderer2 {
  text?: Text5
  icon?: Icon3
  navigationEndpoint?: NavigationEndpoint3
  trackingParams?: string
}

export interface Text5 {
  runs?: Run10[]
}

export interface Run10 {
  text?: string
}

export interface Icon3 {
  iconType?: string
}

export interface NavigationEndpoint3 {
  clickTrackingParams?: string
  shareEntityEndpoint?: ShareEntityEndpoint2
  addToPlaylistEndpoint?: AddToPlaylistEndpoint2
  watchPlaylistEndpoint?: WatchPlaylistEndpoint
}

export interface ShareEntityEndpoint2 {
  serializedShareEntity?: string
  sharePanelType?: string
}

export interface AddToPlaylistEndpoint2 {
  playlistId?: string
}

export interface WatchPlaylistEndpoint {
  playlistId?: string
  params?: string
}

export interface MenuServiceItemRenderer2 {
  text?: Text6
  icon?: Icon4
  serviceEndpoint?: ServiceEndpoint3
  trackingParams?: string
}

export interface Text6 {
  runs?: Run11[]
}

export interface Run11 {
  text?: string
}

export interface Icon4 {
  iconType?: string
}

export interface ServiceEndpoint3 {
  clickTrackingParams?: string
  queueAddEndpoint?: QueueAddEndpoint2
}

export interface QueueAddEndpoint2 {
  queueTarget?: QueueTarget2
  queueInsertPosition?: string
  commands?: Command2[]
}

export interface QueueTarget2 {
  playlistId?: string
  onEmptyQueue?: OnEmptyQueue2
}

export interface OnEmptyQueue2 {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint5
}

export interface WatchEndpoint5 {
  playlistId?: string
}

export interface Command2 {
  clickTrackingParams?: string
  addToToastAction?: AddToToastAction2
}

export interface AddToToastAction2 {
  item?: Item4
}

export interface Item4 {
  notificationTextRenderer?: NotificationTextRenderer2
}

export interface NotificationTextRenderer2 {
  successResponseText?: SuccessResponseText2
  trackingParams?: string
}

export interface SuccessResponseText2 {
  runs?: Run12[]
}

export interface Run12 {
  text?: string
}

export interface TopLevelButton2 {
  buttonRenderer?: ButtonRenderer
  toggleButtonRenderer?: ToggleButtonRenderer
}

export interface ButtonRenderer {
  style?: string
  size?: string
  text?: Text7
  icon?: Icon5
  navigationEndpoint?: NavigationEndpoint4
  accessibility?: Accessibility2
  trackingParams?: string
  accessibilityData?: AccessibilityData4
}

export interface Text7 {
  runs?: Run13[]
}

export interface Run13 {
  text?: string
}

export interface Icon5 {
  iconType?: string
}

export interface NavigationEndpoint4 {
  clickTrackingParams?: string
  watchPlaylistEndpoint?: WatchPlaylistEndpoint2
}

export interface WatchPlaylistEndpoint2 {
  playlistId?: string
  params?: string
}

export interface Accessibility2 {
  label?: string
}

export interface AccessibilityData4 {
  accessibilityData?: AccessibilityData5
}

export interface AccessibilityData5 {
  label?: string
}

export interface ToggleButtonRenderer {
  isToggled?: boolean
  isDisabled?: boolean
  defaultIcon?: DefaultIcon2
  defaultText?: DefaultText2
  defaultServiceEndpoint?: DefaultServiceEndpoint2
  toggledIcon?: ToggledIcon2
  toggledText?: ToggledText2
  toggledServiceEndpoint?: ToggledServiceEndpoint2
  trackingParams?: string
}

export interface DefaultIcon2 {
  iconType?: string
}

export interface DefaultText2 {
  runs?: Run14[]
  accessibility?: Accessibility3
}

export interface Run14 {
  text?: string
}

export interface Accessibility3 {
  accessibilityData?: AccessibilityData6
}

export interface AccessibilityData6 {
  label?: string
}

export interface DefaultServiceEndpoint2 {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint2
}

export interface LikeEndpoint2 {
  status?: string
  target?: Target3
}

export interface Target3 {
  playlistId?: string
}

export interface ToggledIcon2 {
  iconType?: string
}

export interface ToggledText2 {
  runs?: Run15[]
  accessibility?: Accessibility4
}

export interface Run15 {
  text?: string
}

export interface Accessibility4 {
  accessibilityData?: AccessibilityData7
}

export interface AccessibilityData7 {
  label?: string
}

export interface ToggledServiceEndpoint2 {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint3
}

export interface LikeEndpoint3 {
  status?: string
  target?: Target4
}

export interface Target4 {
  playlistId?: string
}

export interface Accessibility5 {
  accessibilityData?: AccessibilityData8
}

export interface AccessibilityData8 {
  label?: string
}

export interface Thumbnail4 {
  croppedSquareThumbnailRenderer?: CroppedSquareThumbnailRenderer
}

export interface CroppedSquareThumbnailRenderer {
  thumbnail?: Thumbnail5
  trackingParams?: string
}

export interface Thumbnail5 {
  thumbnails?: Thumbnail6[]
}

export interface Thumbnail6 {
  url?: string
  width?: number
  height?: number
}

export interface Description {
  runs?: Run16[]
}

export interface Run16 {
  text?: string
  navigationEndpoint?: NavigationEndpoint5
  loggingDirectives?: LoggingDirectives
}

export interface NavigationEndpoint5 {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint3
}

export interface BrowseEndpoint3 {
  browseId?: string
  params?: string
  canonicalBaseUrl?: string
}

export interface LoggingDirectives {
  trackingParams?: string
  enableDisplayloggerExperiment?: boolean
}

export interface MoreButton {
  toggleButtonRenderer?: ToggleButtonRenderer2
}

export interface ToggleButtonRenderer2 {
  isToggled?: boolean
  isDisabled?: boolean
  defaultIcon?: DefaultIcon3
  defaultText?: DefaultText3
  toggledIcon?: ToggledIcon3
  toggledText?: ToggledText3
  trackingParams?: string
}

export interface DefaultIcon3 {
  iconType?: string
}

export interface DefaultText3 {
  runs?: Run17[]
}

export interface Run17 {
  text?: string
}

export interface ToggledIcon3 {
  iconType?: string
}

export interface ToggledText3 {
  runs?: Run18[]
}

export interface Run18 {
  text?: string
}

export interface SecondSubtitle {
  runs?: Run19[]
}

export interface Run19 {
  text?: string
}
