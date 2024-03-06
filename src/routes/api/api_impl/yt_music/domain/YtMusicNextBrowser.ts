export interface YtMusicNextBrowser {
  responseContext?: ResponseContext
  contents?: Contents
  currentVideoEndpoint?: CurrentVideoEndpoint
  trackingParams?: string
  playerOverlays?: PlayerOverlays
  videoReporting?: VideoReporting
  queueContextParams?: string
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
  singleColumnMusicWatchNextResultsRenderer?: SingleColumnMusicWatchNextResultsRenderer
}

export interface SingleColumnMusicWatchNextResultsRenderer {
  tabbedRenderer?: TabbedRenderer
}

export interface TabbedRenderer {
  watchNextTabbedResultsRenderer?: WatchNextTabbedResultsRenderer
}

export interface WatchNextTabbedResultsRenderer {
  tabs?: Tab[]
}

export interface Tab {
  tabRenderer?: TabRenderer
}

export interface TabRenderer {
  title?: string
  content?: Content
  trackingParams?: string
  endpoint?: Endpoint
}

export interface Content {
  musicQueueRenderer?: MusicQueueRenderer
}

export interface MusicQueueRenderer {
  content?: Content2
  hack?: boolean
  header?: Header
}

export interface Content2 {
  playlistPanelRenderer?: PlaylistPanelRenderer
}

export interface PlaylistPanelRenderer {
  contents?: Content3[]
  playlistId?: string
  isInfinite?: boolean
  trackingParams?: string
}

export interface Content3 {
  playlistPanelVideoRenderer?: PlaylistPanelVideoRenderer
  automixPreviewVideoRenderer?: AutomixPreviewVideoRenderer
}

export interface PlaylistPanelVideoRenderer {
  title?: Title
  longBylineText?: LongBylineText
  thumbnail?: Thumbnail
  lengthText?: LengthText
  selected?: boolean
  navigationEndpoint?: NavigationEndpoint2
  videoId?: string
  shortBylineText?: ShortBylineText
  trackingParams?: string
  menu?: Menu
  canReorder?: boolean
}

export interface Title {
  runs?: Run[]
}

export interface Run {
  text?: string
}

export interface LongBylineText {
  runs?: Run2[]
}

export interface Run2 {
  text?: string
  navigationEndpoint?: NavigationEndpoint
}

export interface NavigationEndpoint {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint
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

export interface Thumbnail {
  thumbnails?: Thumbnail2[]
}

export interface Thumbnail2 {
  url?: string
  width?: number
  height?: number
}

export interface LengthText {
  runs?: Run3[]
  accessibility?: Accessibility
}

export interface Run3 {
  text?: string
}

export interface Accessibility {
  accessibilityData?: AccessibilityData
}

export interface AccessibilityData {
  label?: string
}

export interface NavigationEndpoint2 {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint
}

export interface WatchEndpoint {
  videoId?: string
  params?: string
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig?: WatchEndpointMusicConfig
}

export interface WatchEndpointMusicConfig {
  hasPersistentPlaylistPanel?: boolean
  musicVideoType?: string
}

export interface ShortBylineText {
  runs?: Run4[]
}

export interface Run4 {
  text?: string
}

export interface Menu {
  menuRenderer?: MenuRenderer
}

export interface MenuRenderer {
  items?: Item[]
  trackingParams?: string
  accessibility?: Accessibility2
}

export interface Item {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer
  menuServiceItemRenderer?: MenuServiceItemRenderer
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
}

export interface MenuNavigationItemRenderer {
  text?: Text
  icon?: Icon
  navigationEndpoint?: NavigationEndpoint3
  trackingParams?: string
}

export interface Text {
  runs?: Run5[]
}

export interface Run5 {
  text?: string
}

export interface Icon {
  iconType?: string
}

export interface NavigationEndpoint3 {
  clickTrackingParams?: string
  shareEntityEndpoint?: ShareEntityEndpoint
  browseEndpoint?: BrowseEndpoint2
  addToPlaylistEndpoint?: AddToPlaylistEndpoint
  watchEndpoint?: WatchEndpoint2
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

export interface MenuServiceItemRenderer {
  text?: Text2
  icon?: Icon2
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
}

export interface Text2 {
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
  getReportFormEndpoint?: GetReportFormEndpoint
  removeFromQueueEndpoint?: RemoveFromQueueEndpoint
  queueAddEndpoint?: QueueAddEndpoint
}

export interface GetReportFormEndpoint {
  params?: string
}

export interface RemoveFromQueueEndpoint {
  videoId?: string
  commands?: Command[]
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

export interface QueueAddEndpoint {
  queueTarget?: QueueTarget
  queueInsertPosition?: string
  commands?: Command2[]
}

export interface QueueTarget {
  videoId?: string
  onEmptyQueue?: OnEmptyQueue
}

export interface OnEmptyQueue {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint3
}

export interface WatchEndpoint3 {
  videoId?: string
}

export interface Command2 {
  clickTrackingParams?: string
  addToToastAction?: AddToToastAction2
}

export interface AddToToastAction2 {
  item?: Item3
}

export interface Item3 {
  notificationTextRenderer?: NotificationTextRenderer2
}

export interface NotificationTextRenderer2 {
  successResponseText?: SuccessResponseText2
  trackingParams?: string
}

export interface SuccessResponseText2 {
  runs?: Run8[]
}

export interface Run8 {
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
  runs?: Run9[]
}

export interface Run9 {
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
  likeParams?: string
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
  runs?: Run10[]
}

export interface Run10 {
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
  removeLikeParams?: string
}

export interface Target2 {
  videoId?: string
}

export interface FeedbackEndpoint2 {
  feedbackToken?: string
}

export interface Accessibility2 {
  accessibilityData?: AccessibilityData2
}

export interface AccessibilityData2 {
  label?: string
}

export interface AutomixPreviewVideoRenderer {
  content?: Content4
}

export interface Content4 {
  automixPlaylistVideoRenderer?: AutomixPlaylistVideoRenderer
}

export interface AutomixPlaylistVideoRenderer {
  navigationEndpoint?: NavigationEndpoint4
  trackingParams?: string
  automixMode?: string
}

export interface NavigationEndpoint4 {
  clickTrackingParams?: string
  watchPlaylistEndpoint?: WatchPlaylistEndpoint
}

export interface WatchPlaylistEndpoint {
  playlistId?: string
  params?: string
}

export interface Header {
  musicQueueHeaderRenderer?: MusicQueueHeaderRenderer
}

export interface MusicQueueHeaderRenderer {
  title?: Title2
  subtitle?: Subtitle
  buttons?: Button[]
  trackingParams?: string
}

export interface Title2 {
  runs?: Run11[]
}

export interface Run11 {
  text?: string
}

export interface Subtitle {
  runs?: Run12[]
}

export interface Run12 {
  text?: string
}

export interface Button {
  chipCloudChipRenderer?: ChipCloudChipRenderer
}

export interface ChipCloudChipRenderer {
  style?: Style
  text?: Text3
  navigationEndpoint?: NavigationEndpoint5
  trackingParams?: string
  icon?: Icon3
  accessibilityData?: AccessibilityData3
  isSelected?: boolean
  uniqueId?: string
}

export interface Style {
  styleType?: string
}

export interface Text3 {
  runs?: Run13[]
}

export interface Run13 {
  text?: string
}

export interface NavigationEndpoint5 {
  clickTrackingParams?: string
  saveQueueToPlaylistCommand?: SaveQueueToPlaylistCommand
}

export interface SaveQueueToPlaylistCommand {}

export interface Icon3 {
  iconType?: string
}

export interface AccessibilityData3 {
  accessibilityData?: AccessibilityData4
}

export interface AccessibilityData4 {
  label?: string
}

export interface Endpoint {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint3
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

export interface CurrentVideoEndpoint {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint4
}

export interface WatchEndpoint4 {
  videoId?: string
}

export interface PlayerOverlays {
  playerOverlayRenderer?: PlayerOverlayRenderer
}

export interface PlayerOverlayRenderer {
  actions?: Action2[]
  browserMediaSession?: BrowserMediaSession
}

export interface Action2 {
  likeButtonRenderer?: LikeButtonRenderer
}

export interface LikeButtonRenderer {
  target?: Target3
  likeStatus?: string
  trackingParams?: string
  likesAllowed?: boolean
  serviceEndpoints?: ServiceEndpoint2[]
}

export interface Target3 {
  videoId?: string
}

export interface ServiceEndpoint2 {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint3
}

export interface LikeEndpoint3 {
  status?: string
  target?: Target4
  actions?: Action3[]
  likeParams?: string
  dislikeParams?: string
  removeLikeParams?: string
}

export interface Target4 {
  videoId?: string
}

export interface Action3 {
  clickTrackingParams?: string
  musicLibraryStatusUpdateCommand?: MusicLibraryStatusUpdateCommand2
}

export interface MusicLibraryStatusUpdateCommand2 {
  libraryStatus?: string
  addToLibraryFeedbackToken?: string
}

export interface BrowserMediaSession {
  browserMediaSessionRenderer?: BrowserMediaSessionRenderer
}

export interface BrowserMediaSessionRenderer {
  album?: Album
  thumbnailDetails?: ThumbnailDetails
}

export interface Album {
  runs?: Run14[]
}

export interface Run14 {
  text?: string
}

export interface ThumbnailDetails {
  thumbnails?: Thumbnail3[]
}

export interface Thumbnail3 {
  url?: string
  width?: number
  height?: number
}

export interface VideoReporting {
  reportFormModalRenderer?: ReportFormModalRenderer
}

export interface ReportFormModalRenderer {
  optionsSupportedRenderers?: OptionsSupportedRenderers
  trackingParams?: string
  title?: Title3
  submitButton?: SubmitButton
  cancelButton?: CancelButton
  footer?: Footer
}

export interface OptionsSupportedRenderers {
  optionsRenderer?: OptionsRenderer
}

export interface OptionsRenderer {
  items?: Item4[]
  trackingParams?: string
}

export interface Item4 {
  optionSelectableItemRenderer?: OptionSelectableItemRenderer
}

export interface OptionSelectableItemRenderer {
  text?: Text4
  trackingParams?: string
  submitEndpoint?: SubmitEndpoint
}

export interface Text4 {
  runs?: Run15[]
}

export interface Run15 {
  text?: string
}

export interface SubmitEndpoint {
  clickTrackingParams?: string
  flagEndpoint?: FlagEndpoint
}

export interface FlagEndpoint {
  flagAction?: string
}

export interface Title3 {
  runs?: Run16[]
}

export interface Run16 {
  text?: string
}

export interface SubmitButton {
  buttonRenderer?: ButtonRenderer
}

export interface ButtonRenderer {
  style?: string
  isDisabled?: boolean
  text?: Text5
  trackingParams?: string
}

export interface Text5 {
  runs?: Run17[]
}

export interface Run17 {
  text?: string
}

export interface CancelButton {
  buttonRenderer?: ButtonRenderer2
}

export interface ButtonRenderer2 {
  style?: string
  isDisabled?: boolean
  text?: Text6
  trackingParams?: string
}

export interface Text6 {
  runs?: Run18[]
}

export interface Run18 {
  text?: string
}

export interface Footer {
  runs?: Run19[]
}

export interface Run19 {
  text?: string
  navigationEndpoint?: NavigationEndpoint6
}

export interface NavigationEndpoint6 {
  clickTrackingParams?: string
  urlEndpoint?: UrlEndpoint
}

export interface UrlEndpoint {
  url?: string
}
