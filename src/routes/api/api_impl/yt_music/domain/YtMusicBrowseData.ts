export interface YtMusicBrowseData {
  responseContext?: ResponseContext
  contents?: Contents
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
  sectionListRenderer?: SectionListRenderer
}

export interface SectionListRenderer {
  contents?: Content[]
  trackingParams?: string
}

export interface Content {
  musicCarouselShelfRenderer?: MusicCarouselShelfRenderer
  musicDescriptionShelfRenderer?: MusicDescriptionShelfRenderer
}

export interface MusicCarouselShelfRenderer {
  header?: Header
  contents?: Content2[]
  trackingParams?: string
  itemSize?: string
  numItemsPerColumn?: string
  fullbleedStyle?: string
}

export interface Header {
  musicCarouselShelfBasicHeaderRenderer?: MusicCarouselShelfBasicHeaderRenderer
}

export interface MusicCarouselShelfBasicHeaderRenderer {
  title?: Title
  accessibilityData?: AccessibilityData
  headerStyle?: string
  trackingParams?: string
  strapline?: Strapline
  thumbnail?: Thumbnail
}

export interface Title {
  runs?: Run[]
}

export interface Run {
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

export interface AccessibilityData {
  accessibilityData?: AccessibilityData2
}

export interface AccessibilityData2 {
  label?: string
}

export interface Strapline {
  runs?: Run2[]
}

export interface Run2 {
  text?: string
}

export interface Thumbnail {
  musicThumbnailRenderer?: MusicThumbnailRenderer
}

export interface MusicThumbnailRenderer {
  thumbnail?: Thumbnail2
  thumbnailCrop?: string
  thumbnailScale?: string
  trackingParams?: string
  accessibilityData?: AccessibilityData3
  onTap?: OnTap
}

export interface Thumbnail2 {
  thumbnails?: Thumbnail3[]
}

export interface Thumbnail3 {
  url?: string
  width?: number
  height?: number
}

export interface AccessibilityData3 {
  accessibilityData?: AccessibilityData4
}

export interface AccessibilityData4 {
  label?: string
}

export interface OnTap {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint2
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

export interface Content2 {
  musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
  musicTwoRowItemRenderer?: MusicTwoRowItemRenderer
}

export interface MusicResponsiveListItemRenderer {
  trackingParams?: string
  thumbnail?: Thumbnail4
  flexColumns?: FlexColumn[]
  menu?: Menu
  badges?: Badge[]
  playlistItemData?: PlaylistItemData
  flexColumnDisplayStyle?: string
  navigationEndpoint?: NavigationEndpoint6
  itemHeight?: string
}

export interface Thumbnail4 {
  musicThumbnailRenderer?: MusicThumbnailRenderer2
}

export interface MusicThumbnailRenderer2 {
  thumbnail?: Thumbnail5
  thumbnailCrop?: string
  thumbnailScale?: string
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

export interface FlexColumn {
  musicResponsiveListItemFlexColumnRenderer?: MusicResponsiveListItemFlexColumnRenderer
}

export interface MusicResponsiveListItemFlexColumnRenderer {
  text?: Text
  displayPriority?: string
}

export interface Text {
  runs?: Run3[]
}

export interface Run3 {
  text?: string
  navigationEndpoint?: NavigationEndpoint2
}

export interface NavigationEndpoint2 {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint3
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
  navigationEndpoint?: NavigationEndpoint3
  trackingParams?: string
}

export interface Text2 {
  runs?: Run4[]
}

export interface Run4 {
  text?: string
}

export interface Icon {
  iconType?: string
}

export interface NavigationEndpoint3 {
  clickTrackingParams?: string
  shareEntityEndpoint?: ShareEntityEndpoint
  browseEndpoint?: BrowseEndpoint3
  modalEndpoint?: ModalEndpoint
  watchEndpoint?: WatchEndpoint2
}

export interface ShareEntityEndpoint {
  serializedShareEntity?: string
  sharePanelType?: string
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

export interface ModalEndpoint {
  modal?: Modal
}

export interface Modal {
  modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
}

export interface ModalWithTitleAndButtonRenderer {
  title?: Title2
  content?: Content3
  button?: Button
}

export interface Title2 {
  runs?: Run5[]
}

export interface Run5 {
  text?: string
}

export interface Content3 {
  runs?: Run6[]
}

export interface Run6 {
  text?: string
}

export interface Button {
  buttonRenderer?: ButtonRenderer
}

export interface ButtonRenderer {
  style?: string
  isDisabled?: boolean
  text?: Text3
  navigationEndpoint?: NavigationEndpoint4
  trackingParams?: string
}

export interface Text3 {
  runs?: Run7[]
}

export interface Run7 {
  text?: string
}

export interface NavigationEndpoint4 {
  clickTrackingParams?: string
  signInEndpoint?: SignInEndpoint
}

export interface SignInEndpoint {
  hack?: boolean
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
  text?: Text4
  icon?: Icon2
  serviceEndpoint?: ServiceEndpoint
  trackingParams?: string
}

export interface Text4 {
  runs?: Run8[]
}

export interface Run8 {
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
  watchEndpoint?: WatchEndpoint3
}

export interface WatchEndpoint3 {
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
  runs?: Run9[]
}

export interface Run9 {
  text?: string
}

export interface ToggleMenuServiceItemRenderer {
  defaultText?: DefaultText
  defaultIcon?: DefaultIcon
  defaultServiceEndpoint?: DefaultServiceEndpoint
  toggledText?: ToggledText
  toggledIcon?: ToggledIcon
  trackingParams?: string
  toggledServiceEndpoint?: ToggledServiceEndpoint
}

export interface DefaultText {
  runs?: Run10[]
}

export interface Run10 {
  text?: string
}

export interface DefaultIcon {
  iconType?: string
}

export interface DefaultServiceEndpoint {
  clickTrackingParams?: string
  modalEndpoint?: ModalEndpoint2
}

export interface ModalEndpoint2 {
  modal?: Modal2
}

export interface Modal2 {
  modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer2
}

export interface ModalWithTitleAndButtonRenderer2 {
  title?: Title3
  content?: Content4
  button?: Button2
}

export interface Title3 {
  runs?: Run11[]
}

export interface Run11 {
  text?: string
}

export interface Content4 {
  runs?: Run12[]
}

export interface Run12 {
  text?: string
}

export interface Button2 {
  buttonRenderer?: ButtonRenderer2
}

export interface ButtonRenderer2 {
  style?: string
  isDisabled?: boolean
  text?: Text5
  navigationEndpoint?: NavigationEndpoint5
  trackingParams?: string
}

export interface Text5 {
  runs?: Run13[]
}

export interface Run13 {
  text?: string
}

export interface NavigationEndpoint5 {
  clickTrackingParams?: string
  signInEndpoint?: SignInEndpoint2
}

export interface SignInEndpoint2 {
  hack?: boolean
}

export interface ToggledText {
  runs?: Run14[]
}

export interface Run14 {
  text?: string
}

export interface ToggledIcon {
  iconType?: string
}

export interface ToggledServiceEndpoint {
  clickTrackingParams?: string
  feedbackEndpoint?: FeedbackEndpoint
}

export interface FeedbackEndpoint {
  feedbackToken?: string
}

export interface Accessibility {
  accessibilityData?: AccessibilityData5
}

export interface AccessibilityData5 {
  label?: string
}

export interface Badge {
  musicInlineBadgeRenderer?: MusicInlineBadgeRenderer
}

export interface MusicInlineBadgeRenderer {
  trackingParams?: string
  icon?: Icon3
  accessibilityData?: AccessibilityData6
}

export interface Icon3 {
  iconType?: string
}

export interface AccessibilityData6 {
  accessibilityData?: AccessibilityData7
}

export interface AccessibilityData7 {
  label?: string
}

export interface PlaylistItemData {
  videoId?: string
}

export interface NavigationEndpoint6 {
  clickTrackingParams?: string
  watchEndpoint?: WatchEndpoint4
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

export interface MusicTwoRowItemRenderer {
  thumbnailRenderer?: ThumbnailRenderer
  aspectRatio?: string
  title?: Title4
  subtitle?: Subtitle
  navigationEndpoint?: NavigationEndpoint8
  trackingParams?: string
  menu?: Menu2
  thumbnailOverlay?: ThumbnailOverlay
}

export interface ThumbnailRenderer {
  musicThumbnailRenderer?: MusicThumbnailRenderer3
}

export interface MusicThumbnailRenderer3 {
  thumbnail?: Thumbnail7
  thumbnailCrop?: string
  thumbnailScale?: string
  trackingParams?: string
}

export interface Thumbnail7 {
  thumbnails?: Thumbnail8[]
}

export interface Thumbnail8 {
  url?: string
  width?: number
  height?: number
}

export interface Title4 {
  runs?: Run15[]
}

export interface Run15 {
  text?: string
  navigationEndpoint?: NavigationEndpoint7
}

export interface NavigationEndpoint7 {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint4
}

export interface BrowseEndpoint4 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs4
}

export interface BrowseEndpointContextSupportedConfigs4 {
  browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig4
}

export interface BrowseEndpointContextMusicConfig4 {
  pageType?: string
}

export interface Subtitle {
  runs?: Run16[]
}

export interface Run16 {
  text?: string
}

export interface NavigationEndpoint8 {
  clickTrackingParams?: string
  browseEndpoint?: BrowseEndpoint5
}

export interface BrowseEndpoint5 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs5
}

export interface BrowseEndpointContextSupportedConfigs5 {
  browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig5
}

export interface BrowseEndpointContextMusicConfig5 {
  pageType?: string
}

export interface Menu2 {
  menuRenderer?: MenuRenderer2
}

export interface MenuRenderer2 {
  items?: Item3[]
  trackingParams?: string
  accessibility?: Accessibility2
}

export interface Item3 {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer2
  menuServiceItemRenderer?: MenuServiceItemRenderer2
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer2
}

export interface MenuNavigationItemRenderer2 {
  text?: Text6
  icon?: Icon4
  navigationEndpoint?: NavigationEndpoint9
  trackingParams?: string
}

export interface Text6 {
  runs?: Run17[]
}

export interface Run17 {
  text?: string
}

export interface Icon4 {
  iconType?: string
}

export interface NavigationEndpoint9 {
  clickTrackingParams?: string
  shareEntityEndpoint?: ShareEntityEndpoint2
  watchPlaylistEndpoint?: WatchPlaylistEndpoint
  browseEndpoint?: BrowseEndpoint6
  modalEndpoint?: ModalEndpoint3
}

export interface ShareEntityEndpoint2 {
  serializedShareEntity?: string
  sharePanelType?: string
}

export interface WatchPlaylistEndpoint {
  playlistId?: string
  params?: string
}

export interface BrowseEndpoint6 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs6
}

export interface BrowseEndpointContextSupportedConfigs6 {
  browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig6
}

export interface BrowseEndpointContextMusicConfig6 {
  pageType?: string
}

export interface ModalEndpoint3 {
  modal?: Modal3
}

export interface Modal3 {
  modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer3
}

export interface ModalWithTitleAndButtonRenderer3 {
  title?: Title5
  content?: Content5
  button?: Button3
}

export interface Title5 {
  runs?: Run18[]
}

export interface Run18 {
  text?: string
}

export interface Content5 {
  runs?: Run19[]
}

export interface Run19 {
  text?: string
}

export interface Button3 {
  buttonRenderer?: ButtonRenderer3
}

export interface ButtonRenderer3 {
  style?: string
  isDisabled?: boolean
  text?: Text7
  navigationEndpoint?: NavigationEndpoint10
  trackingParams?: string
}

export interface Text7 {
  runs?: Run20[]
}

export interface Run20 {
  text?: string
}

export interface NavigationEndpoint10 {
  clickTrackingParams?: string
  signInEndpoint?: SignInEndpoint3
}

export interface SignInEndpoint3 {
  hack?: boolean
}

export interface MenuServiceItemRenderer2 {
  text?: Text8
  icon?: Icon5
  serviceEndpoint?: ServiceEndpoint2
  trackingParams?: string
}

export interface Text8 {
  runs?: Run21[]
}

export interface Run21 {
  text?: string
}

export interface Icon5 {
  iconType?: string
}

export interface ServiceEndpoint2 {
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
  runs?: Run22[]
}

export interface Run22 {
  text?: string
}

export interface ToggleMenuServiceItemRenderer2 {
  defaultText?: DefaultText2
  defaultIcon?: DefaultIcon2
  defaultServiceEndpoint?: DefaultServiceEndpoint2
  toggledText?: ToggledText2
  toggledIcon?: ToggledIcon2
  trackingParams?: string
  toggledServiceEndpoint?: ToggledServiceEndpoint2
}

export interface DefaultText2 {
  runs?: Run23[]
}

export interface Run23 {
  text?: string
}

export interface DefaultIcon2 {
  iconType?: string
}

export interface DefaultServiceEndpoint2 {
  clickTrackingParams?: string
  modalEndpoint?: ModalEndpoint4
}

export interface ModalEndpoint4 {
  modal?: Modal4
}

export interface Modal4 {
  modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer4
}

export interface ModalWithTitleAndButtonRenderer4 {
  title?: Title6
  content?: Content6
  button?: Button4
}

export interface Title6 {
  runs?: Run24[]
}

export interface Run24 {
  text?: string
}

export interface Content6 {
  runs?: Run25[]
}

export interface Run25 {
  text?: string
}

export interface Button4 {
  buttonRenderer?: ButtonRenderer4
}

export interface ButtonRenderer4 {
  style?: string
  isDisabled?: boolean
  text?: Text9
  navigationEndpoint?: NavigationEndpoint11
  trackingParams?: string
}

export interface Text9 {
  runs?: Run26[]
}

export interface Run26 {
  text?: string
}

export interface NavigationEndpoint11 {
  clickTrackingParams?: string
  signInEndpoint?: SignInEndpoint4
}

export interface SignInEndpoint4 {
  hack?: boolean
}

export interface ToggledText2 {
  runs?: Run27[]
}

export interface Run27 {
  text?: string
}

export interface ToggledIcon2 {
  iconType?: string
}

export interface ToggledServiceEndpoint2 {
  clickTrackingParams?: string
  likeEndpoint?: LikeEndpoint
}

export interface LikeEndpoint {
  status?: string
  target?: Target
}

export interface Target {
  playlistId?: string
}

export interface Accessibility2 {
  accessibilityData?: AccessibilityData8
}

export interface AccessibilityData8 {
  label?: string
}

export interface ThumbnailOverlay {
  musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
}

export interface MusicItemThumbnailOverlayRenderer {
  background?: Background
  content?: Content7
  contentPosition?: string
  displayStyle?: string
}

export interface Background {
  verticalGradient?: VerticalGradient
}

export interface VerticalGradient {
  gradientLayerColors?: string[]
}

export interface Content7 {
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
  watchPlaylistEndpoint?: WatchPlaylistEndpoint2
}

export interface WatchPlaylistEndpoint2 {
  playlistId?: string
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
  accessibilityData?: AccessibilityData9
}

export interface AccessibilityData9 {
  label?: string
}

export interface AccessibilityPauseData {
  accessibilityData?: AccessibilityData10
}

export interface AccessibilityData10 {
  label?: string
}

export interface MusicDescriptionShelfRenderer {
  header?: Header2
  description?: Description
  moreButton?: MoreButton
  trackingParams?: string
  shelfStyle?: string
}

export interface Header2 {
  runs?: Run28[]
}

export interface Run28 {
  text?: string
}

export interface Description {
  runs?: Run29[]
}

export interface Run29 {
  text?: string
}

export interface MoreButton {
  toggleButtonRenderer?: ToggleButtonRenderer
}

export interface ToggleButtonRenderer {
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
  runs?: Run30[]
}

export interface Run30 {
  text?: string
}

export interface ToggledIcon3 {
  iconType?: string
}

export interface ToggledText3 {
  runs?: Run31[]
}

export interface Run31 {
  text?: string
}
