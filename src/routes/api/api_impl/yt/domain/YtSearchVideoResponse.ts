export interface YtSearchVideoResponse {
  responseContext: ResponseContext
  estimatedResults: string
  contents: Contents
  trackingParams: string
  header: Header2
  topbar: Topbar
  refinements: string[]
  onResponseReceivedCommands: OnResponseReceivedCommand[]
  targetId: string
}

export interface ResponseContext {
  visitorData: string
  serviceTrackingParams: ServiceTrackingParam[]
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
  hasDecorated: boolean
}

export interface Contents {
  twoColumnSearchResultsRenderer: TwoColumnSearchResultsRenderer
}

export interface TwoColumnSearchResultsRenderer {
  primaryContents: PrimaryContents
}

export interface PrimaryContents {
  sectionListRenderer: SectionListRenderer
}

export interface SectionListRenderer {
  contents: Content[]
  trackingParams: string
  subMenu: SubMenu
  hideBottomSeparator: boolean
  targetId: string
}

export interface Content {
  itemSectionRenderer?: ItemSectionRenderer
  continuationItemRenderer?: ContinuationItemRenderer
}

export interface ItemSectionRenderer {
  contents: Content2[]
  trackingParams: string
}

export interface Content2 {
  videoRenderer?: VideoRenderer
  channelRenderer?: ChannelRenderer
  shelfRenderer?: ShelfRenderer
  playlistRenderer?: PlaylistRenderer
  reelShelfRenderer?: ReelShelfRenderer
  radioRenderer?: RadioRenderer
  adSlotRenderer?: AdSlotRenderer
}

export interface VideoRenderer {
  videoId: string
  thumbnail: Thumbnail
  title: Title
  longBylineText: LongBylineText
  publishedTimeText: PublishedTimeText
  lengthText: LengthText
  viewCountText: ViewCountText
  navigationEndpoint: NavigationEndpoint2
  badges?: Badge[]
  ownerBadges: OwnerBadge[]
  ownerText: OwnerText
  shortBylineText: ShortBylineText
  trackingParams: string
  showActionMenu: boolean
  shortViewCountText: ShortViewCountText
  menu: Menu
  channelThumbnailSupportedRenderers: ChannelThumbnailSupportedRenderers
  thumbnailOverlays: ThumbnailOverlay[]
  detailedMetadataSnippets: DetailedMetadataSnippet[]
  inlinePlaybackEndpoint: InlinePlaybackEndpoint
  searchVideoResultEntityKey: string
  expandableMetadata?: ExpandableMetadata
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

export interface LongBylineText {
  runs: Run2[]
}

export interface Run2 {
  text: string
  navigationEndpoint: NavigationEndpoint
}

export interface NavigationEndpoint {
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
  canonicalBaseUrl: string
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

export interface NavigationEndpoint2 {
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
  params: string
  playerParams: string
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

export interface Badge {
  metadataBadgeRenderer: MetadataBadgeRenderer
}

export interface MetadataBadgeRenderer {
  style: string
  label: string
  trackingParams: string
  accessibilityData: AccessibilityData3
}

export interface AccessibilityData3 {
  label: string
}

export interface OwnerBadge {
  metadataBadgeRenderer: MetadataBadgeRenderer2
}

export interface MetadataBadgeRenderer2 {
  icon: Icon
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData4
}

export interface Icon {
  iconType: string
}

export interface AccessibilityData4 {
  label: string
}

export interface OwnerText {
  runs: Run3[]
}

export interface Run3 {
  text: string
  navigationEndpoint: NavigationEndpoint3
}

export interface NavigationEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata3
  browseEndpoint: BrowseEndpoint2
}

export interface CommandMetadata3 {
  webCommandMetadata: WebCommandMetadata3
}

export interface WebCommandMetadata3 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint2 {
  browseId: string
  canonicalBaseUrl: string
}

export interface ShortBylineText {
  runs: Run4[]
}

export interface Run4 {
  text: string
  navigationEndpoint: NavigationEndpoint4
}

export interface NavigationEndpoint4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata4
  browseEndpoint: BrowseEndpoint3
}

export interface CommandMetadata4 {
  webCommandMetadata: WebCommandMetadata4
}

export interface WebCommandMetadata4 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint3 {
  browseId: string
  canonicalBaseUrl: string
}

export interface ShortViewCountText {
  accessibility: Accessibility3
  simpleText: string
}

export interface Accessibility3 {
  accessibilityData: AccessibilityData5
}

export interface AccessibilityData5 {
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
  hasSeparator?: boolean
}

export interface Text {
  runs: Run5[]
}

export interface Run5 {
  text: string
}

export interface Icon2 {
  iconType: string
}

export interface ServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata5
  signalServiceEndpoint?: SignalServiceEndpoint
  shareEntityServiceEndpoint?: ShareEntityServiceEndpoint
}

export interface CommandMetadata5 {
  webCommandMetadata: WebCommandMetadata5
}

export interface WebCommandMetadata5 {
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
  commandMetadata: CommandMetadata6
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint
}

export interface CommandMetadata6 {
  webCommandMetadata: WebCommandMetadata6
}

export interface WebCommandMetadata6 {
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
  accessibilityData: AccessibilityData6
}

export interface AccessibilityData6 {
  label: string
}

export interface ChannelThumbnailSupportedRenderers {
  channelThumbnailWithLinkRenderer: ChannelThumbnailWithLinkRenderer
}

export interface ChannelThumbnailWithLinkRenderer {
  thumbnail: Thumbnail3
  navigationEndpoint: NavigationEndpoint5
  accessibility: Accessibility5
}

export interface Thumbnail3 {
  thumbnails: Thumbnail4[]
}

export interface Thumbnail4 {
  url: string
  width: number
  height: number
}

export interface NavigationEndpoint5 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata7
  browseEndpoint: BrowseEndpoint4
}

export interface CommandMetadata7 {
  webCommandMetadata: WebCommandMetadata7
}

export interface WebCommandMetadata7 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint4 {
  browseId: string
}

export interface Accessibility5 {
  accessibilityData: AccessibilityData7
}

export interface AccessibilityData7 {
  label: string
}

export interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
  thumbnailOverlayLoadingPreviewRenderer?: ThumbnailOverlayLoadingPreviewRenderer
}

export interface ThumbnailOverlayTimeStatusRenderer {
  text: Text2
  style: string
}

export interface Text2 {
  accessibility: Accessibility6
  simpleText: string
}

export interface Accessibility6 {
  accessibilityData: AccessibilityData8
}

export interface AccessibilityData8 {
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
  commandMetadata: CommandMetadata8
  signalServiceEndpoint?: SignalServiceEndpoint2
  playlistEditEndpoint?: PlaylistEditEndpoint
}

export interface CommandMetadata8 {
  webCommandMetadata: WebCommandMetadata8
}

export interface WebCommandMetadata8 {
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
  commandMetadata: CommandMetadata9
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint2
}

export interface CommandMetadata9 {
  webCommandMetadata: WebCommandMetadata9
}

export interface WebCommandMetadata9 {
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
  accessibilityData: AccessibilityData9
}

export interface AccessibilityData9 {
  label: string
}

export interface ToggledAccessibility {
  accessibilityData: AccessibilityData10
}

export interface AccessibilityData10 {
  label: string
}

export interface ToggledServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata10
  playlistEditEndpoint: PlaylistEditEndpoint2
}

export interface CommandMetadata10 {
  webCommandMetadata: WebCommandMetadata10
}

export interface WebCommandMetadata10 {
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
  runs: Run6[]
}

export interface Run6 {
  text: string
}

export interface ThumbnailOverlayLoadingPreviewRenderer {
  text: Text4
}

export interface Text4 {
  runs: Run7[]
}

export interface Run7 {
  text: string
}

export interface DetailedMetadataSnippet {
  snippetText: SnippetText
  snippetHoverText: SnippetHoverText
  maxOneLine: boolean
}

export interface SnippetText {
  runs: Run8[]
}

export interface Run8 {
  text: string
  bold?: boolean
}

export interface SnippetHoverText {
  runs: Run9[]
}

export interface Run9 {
  text: string
}

export interface InlinePlaybackEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata11
  watchEndpoint: WatchEndpoint2
}

export interface CommandMetadata11 {
  webCommandMetadata: WebCommandMetadata11
}

export interface WebCommandMetadata11 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint2 {
  videoId: string
  params: string
  playerParams: string
  playerExtraUrlParams: PlayerExtraUrlParam[]
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig2
}

export interface PlayerExtraUrlParam {
  key: string
  value: string
}

export interface WatchEndpointSupportedOnesieConfig2 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig2
}

export interface Html5PlaybackOnesieConfig2 {
  commonConfig: CommonConfig2
}

export interface CommonConfig2 {
  url: string
}

export interface ExpandableMetadata {
  expandableMetadataRenderer: ExpandableMetadataRenderer
}

export interface ExpandableMetadataRenderer {
  header: Header
  expandedContent: ExpandedContent
  expandButton: ExpandButton
  collapseButton: CollapseButton
  trackingParams: string
  colorData: ColorData
  useCustomColors: boolean
  loggingDirectives: LoggingDirectives
}

export interface Header {
  collapsedTitle: CollapsedTitle
  collapsedThumbnail: CollapsedThumbnail
  collapsedLabel: CollapsedLabel
  expandedTitle: ExpandedTitle
}

export interface CollapsedTitle {
  runs: Run10[]
}

export interface Run10 {
  text: string
}

export interface CollapsedThumbnail {
  thumbnails: Thumbnail5[]
}

export interface Thumbnail5 {
  url: string
  width: number
  height: number
}

export interface CollapsedLabel {
  runs: Run11[]
}

export interface Run11 {
  text: string
}

export interface ExpandedTitle {
  runs: Run12[]
}

export interface Run12 {
  text: string
}

export interface ExpandedContent {
  horizontalCardListRenderer: HorizontalCardListRenderer
}

export interface HorizontalCardListRenderer {
  cards: Card[]
  trackingParams: string
  style: Style
  previousButton: PreviousButton
  nextButton: NextButton
}

export interface Card {
  macroMarkersListItemRenderer: MacroMarkersListItemRenderer
}

export interface MacroMarkersListItemRenderer {
  title: Title2
  timeDescription: TimeDescription
  thumbnail: Thumbnail6
  onTap: OnTap
  trackingParams: string
  layout: string
  isHighlighted: boolean
}

export interface Title2 {
  runs: Run13[]
}

export interface Run13 {
  text: string
}

export interface TimeDescription {
  runs: Run14[]
}

export interface Run14 {
  text: string
}

export interface Thumbnail6 {
  thumbnails: Thumbnail7[]
}

export interface Thumbnail7 {
  url: string
  width: number
  height: number
}

export interface OnTap {
  clickTrackingParams: string
  commandMetadata: CommandMetadata12
  watchEndpoint: WatchEndpoint3
}

export interface CommandMetadata12 {
  webCommandMetadata: WebCommandMetadata12
}

export interface WebCommandMetadata12 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint3 {
  videoId: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig3
  startTimeSeconds?: number
}

export interface WatchEndpointSupportedOnesieConfig3 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig3
}

export interface Html5PlaybackOnesieConfig3 {
  commonConfig: CommonConfig3
}

export interface CommonConfig3 {
  url: string
}

export interface Style {
  type: string
}

export interface PreviousButton {
  buttonRenderer: ButtonRenderer
}

export interface ButtonRenderer {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon3
  trackingParams: string
}

export interface Icon3 {
  iconType: string
}

export interface NextButton {
  buttonRenderer: ButtonRenderer2
}

export interface ButtonRenderer2 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon4
  trackingParams: string
}

export interface Icon4 {
  iconType: string
}

export interface ExpandButton {
  buttonRenderer: ButtonRenderer3
}

export interface ButtonRenderer3 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon5
  trackingParams: string
  accessibilityData: AccessibilityData11
}

export interface Icon5 {
  iconType: string
}

export interface AccessibilityData11 {
  accessibilityData: AccessibilityData12
}

export interface AccessibilityData12 {
  label: string
}

export interface CollapseButton {
  buttonRenderer: ButtonRenderer4
}

export interface ButtonRenderer4 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon6
  trackingParams: string
  accessibilityData: AccessibilityData13
}

export interface Icon6 {
  iconType: string
}

export interface AccessibilityData13 {
  accessibilityData: AccessibilityData14
}

export interface AccessibilityData14 {
  label: string
}

export interface ColorData {
  lightColorPalette: LightColorPalette
  darkColorPalette: DarkColorPalette
  vibrantColorPalette: VibrantColorPalette
}

export interface LightColorPalette {
  section1Color: number
  section2Color: number
  section3Color: number
  primaryTitleColor: number
  secondaryTitleColor: number
  iconActivatedColor: number
  iconInactiveColor: number
  section4Color: number
  iconDisabledColor: number
}

export interface DarkColorPalette {
  section1Color: number
  section2Color: number
  section3Color: number
  primaryTitleColor: number
  secondaryTitleColor: number
  iconActivatedColor: number
  iconInactiveColor: number
  section4Color: number
  iconDisabledColor: number
}

export interface VibrantColorPalette {
  section1Color: number
  section2Color: number
  section3Color: number
  primaryTitleColor: number
  secondaryTitleColor: number
  iconActivatedColor: number
  iconInactiveColor: number
  section4Color: number
  iconDisabledColor: number
}

export interface LoggingDirectives {
  trackingParams: string
  visibility: Visibility
  enableDisplayloggerExperiment: boolean
}

export interface Visibility {
  types: string
}

export interface ChannelRenderer {
  channelId: string
  title: Title3
  navigationEndpoint: NavigationEndpoint6
  thumbnail: Thumbnail8
  descriptionSnippet: DescriptionSnippet
  shortBylineText: ShortBylineText2
  videoCountText: VideoCountText
  subscriptionButton: SubscriptionButton
  ownerBadges: OwnerBadge2[]
  subscriberCountText: SubscriberCountText
  subscribeButton: SubscribeButton
  trackingParams: string
  longBylineText: LongBylineText2
}

export interface Title3 {
  simpleText: string
}

export interface NavigationEndpoint6 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata13
  browseEndpoint: BrowseEndpoint5
}

export interface CommandMetadata13 {
  webCommandMetadata: WebCommandMetadata13
}

export interface WebCommandMetadata13 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint5 {
  browseId: string
  canonicalBaseUrl: string
}

export interface Thumbnail8 {
  thumbnails: Thumbnail9[]
}

export interface Thumbnail9 {
  url: string
  width: number
  height: number
}

export interface DescriptionSnippet {
  runs: Run15[]
}

export interface Run15 {
  text: string
}

export interface ShortBylineText2 {
  runs: Run16[]
}

export interface Run16 {
  text: string
  navigationEndpoint: NavigationEndpoint7
}

export interface NavigationEndpoint7 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata14
  browseEndpoint: BrowseEndpoint6
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

export interface BrowseEndpoint6 {
  browseId: string
  canonicalBaseUrl: string
}

export interface VideoCountText {
  accessibility: Accessibility7
  simpleText: string
}

export interface Accessibility7 {
  accessibilityData: AccessibilityData15
}

export interface AccessibilityData15 {
  label: string
}

export interface SubscriptionButton {
  subscribed: boolean
}

export interface OwnerBadge2 {
  metadataBadgeRenderer: MetadataBadgeRenderer3
}

export interface MetadataBadgeRenderer3 {
  icon: Icon7
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData16
}

export interface Icon7 {
  iconType: string
}

export interface AccessibilityData16 {
  label: string
}

export interface SubscriberCountText {
  simpleText: string
}

export interface SubscribeButton {
  buttonRenderer: ButtonRenderer5
}

export interface ButtonRenderer5 {
  style: string
  size: string
  isDisabled: boolean
  text: Text5
  navigationEndpoint: NavigationEndpoint8
  trackingParams: string
}

export interface Text5 {
  runs: Run17[]
}

export interface Run17 {
  text: string
}

export interface NavigationEndpoint8 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata15
  signInEndpoint: SignInEndpoint
}

export interface CommandMetadata15 {
  webCommandMetadata: WebCommandMetadata15
}

export interface WebCommandMetadata15 {
  url: string
  webPageType: string
  rootVe: number
}

export interface SignInEndpoint {
  nextEndpoint: NextEndpoint
  continueAction: string
}

export interface NextEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata16
  searchEndpoint: SearchEndpoint
}

export interface CommandMetadata16 {
  webCommandMetadata: WebCommandMetadata16
}

export interface WebCommandMetadata16 {
  url: string
  webPageType: string
  rootVe: number
}

export interface SearchEndpoint {
  query: string
}

export interface LongBylineText2 {
  runs: Run18[]
}

export interface Run18 {
  text: string
  navigationEndpoint: NavigationEndpoint9
}

export interface NavigationEndpoint9 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata17
  browseEndpoint: BrowseEndpoint7
}

export interface CommandMetadata17 {
  webCommandMetadata: WebCommandMetadata17
}

export interface WebCommandMetadata17 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint7 {
  browseId: string
  canonicalBaseUrl: string
}

export interface ShelfRenderer {
  title: Title4
  content: Content3
  trackingParams: string
}

export interface Title4 {
  simpleText: string
}

export interface Content3 {
  verticalListRenderer: VerticalListRenderer
}

export interface VerticalListRenderer {
  items: Item2[]
  collapsedItemCount: number
  collapsedStateButtonText: CollapsedStateButtonText
  trackingParams: string
}

export interface Item2 {
  videoRenderer: VideoRenderer2
}

export interface VideoRenderer2 {
  videoId: string
  thumbnail: Thumbnail10
  title: Title5
  longBylineText: LongBylineText3
  publishedTimeText: PublishedTimeText2
  lengthText: LengthText2
  viewCountText: ViewCountText2
  navigationEndpoint: NavigationEndpoint11
  ownerText: OwnerText2
  shortBylineText: ShortBylineText3
  trackingParams: string
  showActionMenu: boolean
  shortViewCountText: ShortViewCountText2
  menu: Menu2
  channelThumbnailSupportedRenderers: ChannelThumbnailSupportedRenderers2
  thumbnailOverlays: ThumbnailOverlay2[]
  detailedMetadataSnippets: DetailedMetadataSnippet2[]
  inlinePlaybackEndpoint: InlinePlaybackEndpoint2
  searchVideoResultEntityKey: string
  badges?: Badge2[]
  ownerBadges?: OwnerBadge3[]
}

export interface Thumbnail10 {
  thumbnails: Thumbnail11[]
}

export interface Thumbnail11 {
  url: string
  width: number
  height: number
}

export interface Title5 {
  runs: Run19[]
  accessibility: Accessibility8
}

export interface Run19 {
  text: string
}

export interface Accessibility8 {
  accessibilityData: AccessibilityData17
}

export interface AccessibilityData17 {
  label: string
}

export interface LongBylineText3 {
  runs: Run20[]
}

export interface Run20 {
  text: string
  navigationEndpoint: NavigationEndpoint10
}

export interface NavigationEndpoint10 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata18
  browseEndpoint: BrowseEndpoint8
}

export interface CommandMetadata18 {
  webCommandMetadata: WebCommandMetadata18
}

export interface WebCommandMetadata18 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint8 {
  browseId: string
  canonicalBaseUrl: string
}

export interface PublishedTimeText2 {
  simpleText: string
}

export interface LengthText2 {
  accessibility: Accessibility9
  simpleText: string
}

export interface Accessibility9 {
  accessibilityData: AccessibilityData18
}

export interface AccessibilityData18 {
  label: string
}

export interface ViewCountText2 {
  simpleText: string
}

export interface NavigationEndpoint11 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata19
  watchEndpoint: WatchEndpoint4
}

export interface CommandMetadata19 {
  webCommandMetadata: WebCommandMetadata19
}

export interface WebCommandMetadata19 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint4 {
  videoId: string
  params: string
  playerParams: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig4
}

export interface WatchEndpointSupportedOnesieConfig4 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig4
}

export interface Html5PlaybackOnesieConfig4 {
  commonConfig: CommonConfig4
}

export interface CommonConfig4 {
  url: string
}

export interface OwnerText2 {
  runs: Run21[]
}

export interface Run21 {
  text: string
  navigationEndpoint: NavigationEndpoint12
}

export interface NavigationEndpoint12 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata20
  browseEndpoint: BrowseEndpoint9
}

export interface CommandMetadata20 {
  webCommandMetadata: WebCommandMetadata20
}

export interface WebCommandMetadata20 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint9 {
  browseId: string
  canonicalBaseUrl: string
}

export interface ShortBylineText3 {
  runs: Run22[]
}

export interface Run22 {
  text: string
  navigationEndpoint: NavigationEndpoint13
}

export interface NavigationEndpoint13 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata21
  browseEndpoint: BrowseEndpoint10
}

export interface CommandMetadata21 {
  webCommandMetadata: WebCommandMetadata21
}

export interface WebCommandMetadata21 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint10 {
  browseId: string
  canonicalBaseUrl: string
}

export interface ShortViewCountText2 {
  accessibility: Accessibility10
  simpleText: string
}

export interface Accessibility10 {
  accessibilityData: AccessibilityData19
}

export interface AccessibilityData19 {
  label: string
}

export interface Menu2 {
  menuRenderer: MenuRenderer2
}

export interface MenuRenderer2 {
  items: Item3[]
  trackingParams: string
  accessibility: Accessibility11
}

export interface Item3 {
  menuServiceItemRenderer: MenuServiceItemRenderer2
}

export interface MenuServiceItemRenderer2 {
  text: Text6
  icon: Icon8
  serviceEndpoint: ServiceEndpoint2
  trackingParams: string
  hasSeparator?: boolean
}

export interface Text6 {
  runs: Run23[]
}

export interface Run23 {
  text: string
}

export interface Icon8 {
  iconType: string
}

export interface ServiceEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata22
  signalServiceEndpoint?: SignalServiceEndpoint3
  shareEntityServiceEndpoint?: ShareEntityServiceEndpoint2
}

export interface CommandMetadata22 {
  webCommandMetadata: WebCommandMetadata22
}

export interface WebCommandMetadata22 {
  sendPost: boolean
  apiUrl?: string
}

export interface SignalServiceEndpoint3 {
  signal: string
  actions: Action5[]
}

export interface Action5 {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand3
}

export interface AddToPlaylistCommand3 {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand3
  videoIds: string[]
}

export interface OnCreateListCommand3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata23
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint3
}

export interface CommandMetadata23 {
  webCommandMetadata: WebCommandMetadata23
}

export interface WebCommandMetadata23 {
  sendPost: boolean
  apiUrl: string
}

export interface CreatePlaylistServiceEndpoint3 {
  videoIds: string[]
  params: string
}

export interface ShareEntityServiceEndpoint2 {
  serializedShareEntity: string
  commands: Command2[]
}

export interface Command2 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction2
}

export interface OpenPopupAction2 {
  popup: Popup2
  popupType: string
  beReused: boolean
}

export interface Popup2 {
  unifiedSharePanelRenderer: UnifiedSharePanelRenderer2
}

export interface UnifiedSharePanelRenderer2 {
  trackingParams: string
  showLoadingSpinner: boolean
}

export interface Accessibility11 {
  accessibilityData: AccessibilityData20
}

export interface AccessibilityData20 {
  label: string
}

export interface ChannelThumbnailSupportedRenderers2 {
  channelThumbnailWithLinkRenderer: ChannelThumbnailWithLinkRenderer2
}

export interface ChannelThumbnailWithLinkRenderer2 {
  thumbnail: Thumbnail12
  navigationEndpoint: NavigationEndpoint14
  accessibility: Accessibility12
}

export interface Thumbnail12 {
  thumbnails: Thumbnail13[]
}

export interface Thumbnail13 {
  url: string
  width: number
  height: number
}

export interface NavigationEndpoint14 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata24
  browseEndpoint: BrowseEndpoint11
}

export interface CommandMetadata24 {
  webCommandMetadata: WebCommandMetadata24
}

export interface WebCommandMetadata24 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint11 {
  browseId: string
  canonicalBaseUrl?: string
}

export interface Accessibility12 {
  accessibilityData: AccessibilityData21
}

export interface AccessibilityData21 {
  label: string
}

export interface ThumbnailOverlay2 {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer2
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer2
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer2
  thumbnailOverlayLoadingPreviewRenderer?: ThumbnailOverlayLoadingPreviewRenderer2
}

export interface ThumbnailOverlayTimeStatusRenderer2 {
  text: Text7
  style: string
}

export interface Text7 {
  accessibility: Accessibility13
  simpleText: string
}

export interface Accessibility13 {
  accessibilityData: AccessibilityData22
}

export interface AccessibilityData22 {
  label: string
}

export interface ThumbnailOverlayToggleButtonRenderer2 {
  untoggledIcon: UntoggledIcon2
  toggledIcon: ToggledIcon2
  untoggledTooltip: string
  toggledTooltip: string
  untoggledServiceEndpoint: UntoggledServiceEndpoint2
  untoggledAccessibility: UntoggledAccessibility2
  toggledAccessibility: ToggledAccessibility2
  trackingParams: string
  isToggled?: boolean
  toggledServiceEndpoint?: ToggledServiceEndpoint2
}

export interface UntoggledIcon2 {
  iconType: string
}

export interface ToggledIcon2 {
  iconType: string
}

export interface UntoggledServiceEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata25
  signalServiceEndpoint?: SignalServiceEndpoint4
  playlistEditEndpoint?: PlaylistEditEndpoint3
}

export interface CommandMetadata25 {
  webCommandMetadata: WebCommandMetadata25
}

export interface WebCommandMetadata25 {
  sendPost: boolean
  apiUrl?: string
}

export interface SignalServiceEndpoint4 {
  signal: string
  actions: Action6[]
}

export interface Action6 {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand4
}

export interface AddToPlaylistCommand4 {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand4
  videoIds: string[]
}

export interface OnCreateListCommand4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata26
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint4
}

export interface CommandMetadata26 {
  webCommandMetadata: WebCommandMetadata26
}

export interface WebCommandMetadata26 {
  sendPost: boolean
  apiUrl: string
}

export interface CreatePlaylistServiceEndpoint4 {
  videoIds: string[]
  params: string
}

export interface PlaylistEditEndpoint3 {
  playlistId: string
  actions: Action7[]
}

export interface Action7 {
  addedVideoId: string
  action: string
}

export interface UntoggledAccessibility2 {
  accessibilityData: AccessibilityData23
}

export interface AccessibilityData23 {
  label: string
}

export interface ToggledAccessibility2 {
  accessibilityData: AccessibilityData24
}

export interface AccessibilityData24 {
  label: string
}

export interface ToggledServiceEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata27
  playlistEditEndpoint: PlaylistEditEndpoint4
}

export interface CommandMetadata27 {
  webCommandMetadata: WebCommandMetadata27
}

export interface WebCommandMetadata27 {
  sendPost: boolean
  apiUrl: string
}

export interface PlaylistEditEndpoint4 {
  playlistId: string
  actions: Action8[]
}

export interface Action8 {
  action: string
  removedVideoId: string
}

export interface ThumbnailOverlayNowPlayingRenderer2 {
  text: Text8
}

export interface Text8 {
  runs: Run24[]
}

export interface Run24 {
  text: string
}

export interface ThumbnailOverlayLoadingPreviewRenderer2 {
  text: Text9
}

export interface Text9 {
  runs: Run25[]
}

export interface Run25 {
  text: string
}

export interface DetailedMetadataSnippet2 {
  snippetText: SnippetText2
  snippetHoverText: SnippetHoverText2
  maxOneLine: boolean
}

export interface SnippetText2 {
  runs: Run26[]
}

export interface Run26 {
  text: string
  bold?: boolean
}

export interface SnippetHoverText2 {
  runs: Run27[]
}

export interface Run27 {
  text: string
}

export interface InlinePlaybackEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata28
  watchEndpoint: WatchEndpoint5
}

export interface CommandMetadata28 {
  webCommandMetadata: WebCommandMetadata28
}

export interface WebCommandMetadata28 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint5 {
  videoId: string
  params: string
  playerParams: string
  playerExtraUrlParams: PlayerExtraUrlParam2[]
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig5
}

export interface PlayerExtraUrlParam2 {
  key: string
  value: string
}

export interface WatchEndpointSupportedOnesieConfig5 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig5
}

export interface Html5PlaybackOnesieConfig5 {
  commonConfig: CommonConfig5
}

export interface CommonConfig5 {
  url: string
}

export interface Badge2 {
  metadataBadgeRenderer: MetadataBadgeRenderer4
}

export interface MetadataBadgeRenderer4 {
  style: string
  label: string
  trackingParams: string
  accessibilityData?: AccessibilityData25
}

export interface AccessibilityData25 {
  label: string
}

export interface OwnerBadge3 {
  metadataBadgeRenderer: MetadataBadgeRenderer5
}

export interface MetadataBadgeRenderer5 {
  icon: Icon9
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData26
}

export interface Icon9 {
  iconType: string
}

export interface AccessibilityData26 {
  label: string
}

export interface CollapsedStateButtonText {
  runs: Run28[]
  accessibility: Accessibility14
}

export interface Run28 {
  text: string
}

export interface Accessibility14 {
  accessibilityData: AccessibilityData27
}

export interface AccessibilityData27 {
  label: string
}

export interface PlaylistRenderer {
  playlistId: string
  title: Title6
  thumbnails: Thumbnail14[]
  videoCount: string
  navigationEndpoint: NavigationEndpoint15
  viewPlaylistText: ViewPlaylistText
  shortBylineText: ShortBylineText4
  videos: Video[]
  videoCountText: VideoCountText2
  trackingParams: string
  thumbnailText: ThumbnailText
  longBylineText: LongBylineText4
  thumbnailRenderer: ThumbnailRenderer
  thumbnailOverlays: ThumbnailOverlay3[]
}

export interface Title6 {
  simpleText: string
}

export interface Thumbnail14 {
  thumbnails: Thumbnail15[]
}

export interface Thumbnail15 {
  url: string
  width: number
  height: number
}

export interface NavigationEndpoint15 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata29
  watchEndpoint: WatchEndpoint6
}

export interface CommandMetadata29 {
  webCommandMetadata: WebCommandMetadata29
}

export interface WebCommandMetadata29 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint6 {
  videoId: string
  playlistId: string
  params: string
  loggingContext: LoggingContext
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig6
}

export interface LoggingContext {
  vssLoggingContext: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData: string
}

export interface WatchEndpointSupportedOnesieConfig6 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig6
}

export interface Html5PlaybackOnesieConfig6 {
  commonConfig: CommonConfig6
}

export interface CommonConfig6 {
  url: string
}

export interface ViewPlaylistText {
  runs: Run29[]
}

export interface Run29 {
  text: string
  navigationEndpoint: NavigationEndpoint16
}

export interface NavigationEndpoint16 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata30
  browseEndpoint: BrowseEndpoint12
}

export interface CommandMetadata30 {
  webCommandMetadata: WebCommandMetadata30
}

export interface WebCommandMetadata30 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint12 {
  browseId: string
}

export interface ShortBylineText4 {
  runs: Run30[]
}

export interface Run30 {
  text: string
  navigationEndpoint?: NavigationEndpoint17
}

export interface NavigationEndpoint17 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata31
  browseEndpoint: BrowseEndpoint13
}

export interface CommandMetadata31 {
  webCommandMetadata: WebCommandMetadata31
}

export interface WebCommandMetadata31 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint13 {
  browseId: string
  canonicalBaseUrl: string
}

export interface Video {
  childVideoRenderer: ChildVideoRenderer
}

export interface ChildVideoRenderer {
  title: Title7
  navigationEndpoint: NavigationEndpoint18
  lengthText: LengthText3
  videoId: string
}

export interface Title7 {
  simpleText: string
}

export interface NavigationEndpoint18 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata32
  watchEndpoint: WatchEndpoint7
}

export interface CommandMetadata32 {
  webCommandMetadata: WebCommandMetadata32
}

export interface WebCommandMetadata32 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint7 {
  videoId: string
  playlistId: string
  loggingContext: LoggingContext2
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig7
}

export interface LoggingContext2 {
  vssLoggingContext: VssLoggingContext2
}

export interface VssLoggingContext2 {
  serializedContextData: string
}

export interface WatchEndpointSupportedOnesieConfig7 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig7
}

export interface Html5PlaybackOnesieConfig7 {
  commonConfig: CommonConfig7
}

export interface CommonConfig7 {
  url: string
}

export interface LengthText3 {
  accessibility: Accessibility15
  simpleText: string
}

export interface Accessibility15 {
  accessibilityData: AccessibilityData28
}

export interface AccessibilityData28 {
  label: string
}

export interface VideoCountText2 {
  runs: Run31[]
}

export interface Run31 {
  text: string
}

export interface ThumbnailText {
  runs: Run32[]
}

export interface Run32 {
  text: string
  bold?: boolean
}

export interface LongBylineText4 {
  runs: Run33[]
}

export interface Run33 {
  text: string
  navigationEndpoint?: NavigationEndpoint19
}

export interface NavigationEndpoint19 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata33
  browseEndpoint: BrowseEndpoint14
}

export interface CommandMetadata33 {
  webCommandMetadata: WebCommandMetadata33
}

export interface WebCommandMetadata33 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint14 {
  browseId: string
  canonicalBaseUrl: string
}

export interface ThumbnailRenderer {
  playlistVideoThumbnailRenderer: PlaylistVideoThumbnailRenderer
}

export interface PlaylistVideoThumbnailRenderer {
  thumbnail: Thumbnail16
  trackingParams: string
}

export interface Thumbnail16 {
  thumbnails: Thumbnail17[]
  sampledThumbnailColor: SampledThumbnailColor
  darkColorPalette: DarkColorPalette2
  vibrantColorPalette: VibrantColorPalette2
}

export interface Thumbnail17 {
  url: string
  width: number
  height: number
}

export interface SampledThumbnailColor {
  red: number
  green: number
  blue: number
}

export interface DarkColorPalette2 {
  section2Color: number
  iconInactiveColor: number
  iconDisabledColor: number
}

export interface VibrantColorPalette2 {
  iconInactiveColor: number
}

export interface ThumbnailOverlay3 {
  thumbnailOverlayBottomPanelRenderer?: ThumbnailOverlayBottomPanelRenderer
  thumbnailOverlayHoverTextRenderer?: ThumbnailOverlayHoverTextRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer3
}

export interface ThumbnailOverlayBottomPanelRenderer {
  text: Text10
  icon: Icon10
}

export interface Text10 {
  simpleText: string
}

export interface Icon10 {
  iconType: string
}

export interface ThumbnailOverlayHoverTextRenderer {
  text: Text11
  icon: Icon11
}

export interface Text11 {
  runs: Run34[]
}

export interface Run34 {
  text: string
}

export interface Icon11 {
  iconType: string
}

export interface ThumbnailOverlayNowPlayingRenderer3 {
  text: Text12
}

export interface Text12 {
  runs: Run35[]
}

export interface Run35 {
  text: string
}

export interface ReelShelfRenderer {
  title: Title8
  button: Button
  items: Item5[]
  trackingParams: string
  icon: Icon14
}

export interface Title8 {
  simpleText: string
}

export interface Button {
  menuRenderer: MenuRenderer3
}

export interface MenuRenderer3 {
  items: Item4[]
  trackingParams: string
  accessibility: Accessibility17
}

export interface Item4 {
  menuNavigationItemRenderer: MenuNavigationItemRenderer
}

export interface MenuNavigationItemRenderer {
  text: Text13
  icon: Icon12
  navigationEndpoint: NavigationEndpoint20
  trackingParams: string
  accessibility: Accessibility16
}

export interface Text13 {
  runs: Run36[]
}

export interface Run36 {
  text: string
}

export interface Icon12 {
  iconType: string
}

export interface NavigationEndpoint20 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata34
  userFeedbackEndpoint: UserFeedbackEndpoint
}

export interface CommandMetadata34 {
  webCommandMetadata: WebCommandMetadata34
}

export interface WebCommandMetadata34 {
  ignoreNavigation: boolean
}

export interface UserFeedbackEndpoint {
  additionalDatas: AdditionalData[]
}

export interface AdditionalData {
  userFeedbackEndpointProductSpecificValueData: UserFeedbackEndpointProductSpecificValueData
}

export interface UserFeedbackEndpointProductSpecificValueData {
  key: string
  value: string
}

export interface Accessibility16 {
  accessibilityData: AccessibilityData29
}

export interface AccessibilityData29 {
  label: string
}

export interface Accessibility17 {
  accessibilityData: AccessibilityData30
}

export interface AccessibilityData30 {
  label: string
}

export interface Item5 {
  reelItemRenderer: ReelItemRenderer
}

export interface ReelItemRenderer {
  videoId: string
  headline: Headline
  thumbnail: Thumbnail18
  viewCountText: ViewCountText3
  navigationEndpoint: NavigationEndpoint21
  menu: Menu3
  trackingParams: string
  accessibility: Accessibility21
  style: string
  videoType: string
  inlinePlaybackEndpoint: InlinePlaybackEndpoint3
  loggingDirectives: LoggingDirectives2
  badge?: Badge3
}

export interface Headline {
  simpleText: string
}

export interface Thumbnail18 {
  thumbnails: Thumbnail19[]
  isOriginalAspectRatio: boolean
}

export interface Thumbnail19 {
  url: string
  width: number
  height: number
}

export interface ViewCountText3 {
  accessibility: Accessibility18
  simpleText: string
}

export interface Accessibility18 {
  accessibilityData: AccessibilityData31
}

export interface AccessibilityData31 {
  label: string
}

export interface NavigationEndpoint21 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata35
  reelWatchEndpoint: ReelWatchEndpoint
}

export interface CommandMetadata35 {
  webCommandMetadata: WebCommandMetadata35
}

export interface WebCommandMetadata35 {
  url: string
  webPageType: string
  rootVe: number
}

export interface ReelWatchEndpoint {
  videoId: string
  playerParams: string
  thumbnail: Thumbnail20
  overlay: Overlay
  params: string
  sequenceProvider: string
  sequenceParams: string
  loggingContext: LoggingContext3
  ustreamerConfig: string
}

export interface Thumbnail20 {
  thumbnails: Thumbnail21[]
  isOriginalAspectRatio: boolean
}

export interface Thumbnail21 {
  url: string
  width: number
  height: number
}

export interface Overlay {
  reelPlayerOverlayRenderer: ReelPlayerOverlayRenderer
}

export interface ReelPlayerOverlayRenderer {
  style: string
  trackingParams: string
  reelPlayerNavigationModel: string
}

export interface LoggingContext3 {
  vssLoggingContext: VssLoggingContext3
  qoeLoggingContext: QoeLoggingContext
}

export interface VssLoggingContext3 {
  serializedContextData: string
}

export interface QoeLoggingContext {
  serializedContextData: string
}

export interface Menu3 {
  menuRenderer: MenuRenderer4
}

export interface MenuRenderer4 {
  items: Item6[]
  trackingParams: string
  accessibility: Accessibility20
}

export interface Item6 {
  menuNavigationItemRenderer: MenuNavigationItemRenderer2
}

export interface MenuNavigationItemRenderer2 {
  text: Text14
  icon: Icon13
  navigationEndpoint: NavigationEndpoint22
  trackingParams: string
  accessibility: Accessibility19
}

export interface Text14 {
  runs: Run37[]
}

export interface Run37 {
  text: string
}

export interface Icon13 {
  iconType: string
}

export interface NavigationEndpoint22 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata36
  userFeedbackEndpoint: UserFeedbackEndpoint2
}

export interface CommandMetadata36 {
  webCommandMetadata: WebCommandMetadata36
}

export interface WebCommandMetadata36 {
  ignoreNavigation: boolean
}

export interface UserFeedbackEndpoint2 {
  additionalDatas: AdditionalData2[]
}

export interface AdditionalData2 {
  userFeedbackEndpointProductSpecificValueData: UserFeedbackEndpointProductSpecificValueData2
}

export interface UserFeedbackEndpointProductSpecificValueData2 {
  key: string
  value: string
}

export interface Accessibility19 {
  accessibilityData: AccessibilityData32
}

export interface AccessibilityData32 {
  label: string
}

export interface Accessibility20 {
  accessibilityData: AccessibilityData33
}

export interface AccessibilityData33 {
  label: string
}

export interface Accessibility21 {
  accessibilityData: AccessibilityData34
}

export interface AccessibilityData34 {
  label: string
}

export interface InlinePlaybackEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata37
  watchEndpoint: WatchEndpoint8
}

export interface CommandMetadata37 {
  webCommandMetadata: WebCommandMetadata37
}

export interface WebCommandMetadata37 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint8 {
  videoId: string
  playerParams: string
  playerExtraUrlParams: PlayerExtraUrlParam3[]
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig8
}

export interface PlayerExtraUrlParam3 {
  key: string
  value: string
}

export interface WatchEndpointSupportedOnesieConfig8 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig8
}

export interface Html5PlaybackOnesieConfig8 {
  commonConfig: CommonConfig8
}

export interface CommonConfig8 {
  url: string
}

export interface LoggingDirectives2 {
  trackingParams: string
  visibility: Visibility2
  enableDisplayloggerExperiment: boolean
}

export interface Visibility2 {
  types: string
}

export interface Badge3 {
  textBadgeRenderer: TextBadgeRenderer
}

export interface TextBadgeRenderer {
  label: Label
}

export interface Label {
  simpleText: string
}

export interface Icon14 {
  iconType: string
}

export interface RadioRenderer {
  playlistId: string
  title: Title9
  thumbnail: Thumbnail22
  videoCountText: VideoCountText3
  navigationEndpoint: NavigationEndpoint23
  trackingParams: string
  videos: Video2[]
  thumbnailText: ThumbnailText2
  longBylineText: LongBylineText5
  thumbnailOverlays: ThumbnailOverlay4[]
  videoCountShortText: VideoCountShortText
  thumbnailRenderer: ThumbnailRenderer2
}

export interface Title9 {
  simpleText: string
}

export interface Thumbnail22 {
  thumbnails: Thumbnail23[]
  sampledThumbnailColor: SampledThumbnailColor2
  darkColorPalette: DarkColorPalette3
  vibrantColorPalette: VibrantColorPalette3
}

export interface Thumbnail23 {
  url: string
  width: number
  height: number
}

export interface SampledThumbnailColor2 {
  red: number
  green: number
  blue: number
}

export interface DarkColorPalette3 {
  section2Color: number
  iconInactiveColor: number
  iconDisabledColor: number
}

export interface VibrantColorPalette3 {
  iconInactiveColor: number
}

export interface VideoCountText3 {
  runs: Run38[]
}

export interface Run38 {
  text: string
}

export interface NavigationEndpoint23 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata38
  watchEndpoint: WatchEndpoint9
}

export interface CommandMetadata38 {
  webCommandMetadata: WebCommandMetadata38
}

export interface WebCommandMetadata38 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint9 {
  videoId: string
  playlistId: string
  params: string
  continuePlayback: boolean
  loggingContext: LoggingContext4
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig9
}

export interface LoggingContext4 {
  vssLoggingContext: VssLoggingContext4
}

export interface VssLoggingContext4 {
  serializedContextData: string
}

export interface WatchEndpointSupportedOnesieConfig9 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig9
}

export interface Html5PlaybackOnesieConfig9 {
  commonConfig: CommonConfig9
}

export interface CommonConfig9 {
  url: string
}

export interface Video2 {
  childVideoRenderer: ChildVideoRenderer2
}

export interface ChildVideoRenderer2 {
  title: Title10
  navigationEndpoint: NavigationEndpoint24
  lengthText: LengthText4
  videoId: string
}

export interface Title10 {
  simpleText: string
}

export interface NavigationEndpoint24 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata39
  watchEndpoint: WatchEndpoint10
}

export interface CommandMetadata39 {
  webCommandMetadata: WebCommandMetadata39
}

export interface WebCommandMetadata39 {
  url: string
  webPageType: string
  rootVe: number
}

export interface WatchEndpoint10 {
  videoId: string
  playlistId: string
  params: string
  loggingContext: LoggingContext5
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig10
}

export interface LoggingContext5 {
  vssLoggingContext: VssLoggingContext5
}

export interface VssLoggingContext5 {
  serializedContextData: string
}

export interface WatchEndpointSupportedOnesieConfig10 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig10
}

export interface Html5PlaybackOnesieConfig10 {
  commonConfig: CommonConfig10
}

export interface CommonConfig10 {
  url: string
}

export interface LengthText4 {
  accessibility: Accessibility22
  simpleText: string
}

export interface Accessibility22 {
  accessibilityData: AccessibilityData35
}

export interface AccessibilityData35 {
  label: string
}

export interface ThumbnailText2 {
  runs: Run39[]
}

export interface Run39 {
  text: string
}

export interface LongBylineText5 {
  simpleText: string
}

export interface ThumbnailOverlay4 {
  thumbnailOverlayBottomPanelRenderer?: ThumbnailOverlayBottomPanelRenderer2
  thumbnailOverlayHoverTextRenderer?: ThumbnailOverlayHoverTextRenderer2
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer4
}

export interface ThumbnailOverlayBottomPanelRenderer2 {
  text: Text15
  icon: Icon15
}

export interface Text15 {
  simpleText: string
}

export interface Icon15 {
  iconType: string
}

export interface ThumbnailOverlayHoverTextRenderer2 {
  text: Text16
  icon: Icon16
}

export interface Text16 {
  runs: Run40[]
}

export interface Run40 {
  text: string
}

export interface Icon16 {
  iconType: string
}

export interface ThumbnailOverlayNowPlayingRenderer4 {
  text: Text17
}

export interface Text17 {
  runs: Run41[]
}

export interface Run41 {
  text: string
}

export interface VideoCountShortText {
  runs: Run42[]
}

export interface Run42 {
  text: string
}

export interface ThumbnailRenderer2 {
  playlistVideoThumbnailRenderer: PlaylistVideoThumbnailRenderer2
}

export interface PlaylistVideoThumbnailRenderer2 {
  thumbnail: Thumbnail24
  trackingParams: string
}

export interface Thumbnail24 {
  thumbnails: Thumbnail25[]
}

export interface Thumbnail25 {
  url: string
  width: number
  height: number
}

export interface AdSlotRenderer {
  adSlotMetadata: AdSlotMetadata
  fulfillmentContent: FulfillmentContent
  enablePacfLoggingWeb: boolean
}

export interface AdSlotMetadata {
  slotId: string
  slotType: string
  slotPhysicalPosition: number
  adSlotLoggingData: AdSlotLoggingData
}

export interface AdSlotLoggingData {
  serializedSlotAdServingDataEntry: string
}

export interface FulfillmentContent {
  fulfilledLayout: FulfilledLayout
}

export interface FulfilledLayout {
  inFeedAdLayoutRenderer: InFeedAdLayoutRenderer
}

export interface InFeedAdLayoutRenderer {
  adLayoutMetadata: AdLayoutMetadata
  renderingContent: RenderingContent
}

export interface AdLayoutMetadata {
  layoutId: string
  layoutType: string
  adLayoutLoggingData: AdLayoutLoggingData
}

export interface AdLayoutLoggingData {
  serializedAdServingDataEntry: string
}

export interface RenderingContent {
  promotedSparklesWebRenderer: PromotedSparklesWebRenderer
}

export interface PromotedSparklesWebRenderer {
  thumbnail: Thumbnail26
  title: Title11
  description: Description
  websiteText: WebsiteText
  navigationEndpoint: NavigationEndpoint25
  impressionCommands: ImpressionCommand[]
  menu: Menu4
  trackingParams: string
  clickLocationTargets: ClickLocationTarget[]
  mediaHoverOverlay: MediaHoverOverlay
  mediaBadge: MediaBadge
  promotedSparklesWebStyle: string
  isSquareThumbnail: boolean
  thumbnailNavigationEndpoint: ThumbnailNavigationEndpoint
  adBadge: AdBadge
}

export interface Thumbnail26 {
  thumbnails: Thumbnail27[]
}

export interface Thumbnail27 {
  url: string
  width: number
  height: number
}

export interface Title11 {
  simpleText: string
}

export interface Description {
  simpleText: string
}

export interface WebsiteText {
  simpleText: string
}

export interface NavigationEndpoint25 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata40
  urlEndpoint: UrlEndpoint
}

export interface CommandMetadata40 {
  webCommandMetadata: WebCommandMetadata40
}

export interface WebCommandMetadata40 {
  url: string
  webPageType: string
  rootVe: number
}

export interface UrlEndpoint {
  url: string
  target: string
}

export interface ImpressionCommand {
  clickTrackingParams: string
  loggingUrls: LoggingUrl[]
  pingingEndpoint: PingingEndpoint
}

export interface LoggingUrl {
  baseUrl: string
}

export interface PingingEndpoint {
  hack: boolean
}

export interface Menu4 {
  menuRenderer: MenuRenderer5
}

export interface MenuRenderer5 {
  trackingParams: string
  isDisabled: boolean
  disabledCommand: DisabledCommand
}

export interface DisabledCommand {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction3
}

export interface OpenPopupAction3 {
  popup: Popup3
  popupType: string
}

export interface Popup3 {
  aboutThisAdRenderer: AboutThisAdRenderer
}

export interface AboutThisAdRenderer {
  url: Url
  trackingParams: string
}

export interface Url {
  privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string
}

export interface ClickLocationTarget {
  location: string
  code: number
  behaviorType: string
}

export interface MediaHoverOverlay {
  buttonRenderer: ButtonRenderer6
}

export interface ButtonRenderer6 {
  style: string
  text: Text18
  icon: Icon17
  trackingParams: string
  iconPosition: string
}

export interface Text18 {
  simpleText: string
}

export interface Icon17 {
  iconType: string
}

export interface MediaBadge {
  metadataBadgeRenderer: MetadataBadgeRenderer6
}

export interface MetadataBadgeRenderer6 {
  icon: Icon18
  style: string
  trackingParams: string
}

export interface Icon18 {
  iconType: string
}

export interface ThumbnailNavigationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata41
  urlEndpoint: UrlEndpoint2
}

export interface CommandMetadata41 {
  webCommandMetadata: WebCommandMetadata41
}

export interface WebCommandMetadata41 {
  url: string
  webPageType: string
  rootVe: number
}

export interface UrlEndpoint2 {
  url: string
  target: string
}

export interface AdBadge {
  metadataBadgeRenderer: MetadataBadgeRenderer7
}

export interface MetadataBadgeRenderer7 {
  style: string
  label: string
  trackingParams: string
}

export interface ContinuationItemRenderer {
  trigger: string
  continuationEndpoint: ContinuationEndpoint
  loggingDirectives: LoggingDirectives3
}

export interface ContinuationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata42
  continuationCommand: ContinuationCommand
}

export interface CommandMetadata42 {
  webCommandMetadata: WebCommandMetadata42
}

export interface WebCommandMetadata42 {
  sendPost: boolean
  apiUrl: string
}

export interface ContinuationCommand {
  token: string
  request: string
}

export interface LoggingDirectives3 {
  trackingParams: string
}

export interface SubMenu {
  searchSubMenuRenderer: SearchSubMenuRenderer
}

export interface SearchSubMenuRenderer {
  trackingParams: string
}

export interface Header2 {
  searchHeaderRenderer: SearchHeaderRenderer
}

export interface SearchHeaderRenderer {
  chipBar: ChipBar
  searchFilterButton: SearchFilterButton
  trackingParams: string
}

export interface ChipBar {
  chipCloudRenderer: ChipCloudRenderer
}

export interface ChipCloudRenderer {
  chips: Chip[]
  trackingParams: string
  nextButton: NextButton2
  previousButton: PreviousButton2
  loggingDirectives: LoggingDirectives4
}

export interface Chip {
  chipCloudChipRenderer: ChipCloudChipRenderer
}

export interface ChipCloudChipRenderer {
  style: Style2
  text: Text19
  trackingParams: string
  isSelected: boolean
  location: string
  navigationEndpoint?: NavigationEndpoint26
}

export interface Style2 {
  styleType: string
}

export interface Text19 {
  simpleText: string
}

export interface NavigationEndpoint26 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata43
  continuationCommand: ContinuationCommand2
}

export interface CommandMetadata43 {
  webCommandMetadata: WebCommandMetadata43
}

export interface WebCommandMetadata43 {
  sendPost: boolean
  apiUrl: string
}

export interface ContinuationCommand2 {
  token: string
  request: string
  command: Command3
}

export interface Command3 {
  clickTrackingParams: string
  showReloadUiCommand: ShowReloadUiCommand
}

export interface ShowReloadUiCommand {
  targetId: string
}

export interface NextButton2 {
  buttonRenderer: ButtonRenderer7
}

export interface ButtonRenderer7 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon19
  accessibility: Accessibility23
  trackingParams: string
}

export interface Icon19 {
  iconType: string
}

export interface Accessibility23 {
  label: string
}

export interface PreviousButton2 {
  buttonRenderer: ButtonRenderer8
}

export interface ButtonRenderer8 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon20
  accessibility: Accessibility24
  trackingParams: string
}

export interface Icon20 {
  iconType: string
}

export interface Accessibility24 {
  label: string
}

export interface LoggingDirectives4 {
  trackingParams: string
  visibility: Visibility3
  enableDisplayloggerExperiment: boolean
}

export interface Visibility3 {
  types: string
}

export interface SearchFilterButton {
  buttonRenderer: ButtonRenderer9
}

export interface ButtonRenderer9 {
  style: string
  size: string
  isDisabled: boolean
  text: Text20
  icon: Icon21
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData36
  command: Command4
  iconPosition: string
}

export interface Text20 {
  runs: Run43[]
}

export interface Run43 {
  text: string
}

export interface Icon21 {
  iconType: string
}

export interface AccessibilityData36 {
  accessibilityData: AccessibilityData37
}

export interface AccessibilityData37 {
  label: string
}

export interface Command4 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction4
}

export interface OpenPopupAction4 {
  popup: Popup4
  popupType: string
}

export interface Popup4 {
  searchFilterOptionsDialogRenderer: SearchFilterOptionsDialogRenderer
}

export interface SearchFilterOptionsDialogRenderer {
  title: Title12
  groups: Group[]
}

export interface Title12 {
  runs: Run44[]
}

export interface Run44 {
  text: string
}

export interface Group {
  searchFilterGroupRenderer: SearchFilterGroupRenderer
}

export interface SearchFilterGroupRenderer {
  title: Title13
  filters: Filter[]
  trackingParams: string
}

export interface Title13 {
  simpleText: string
}

export interface Filter {
  searchFilterRenderer: SearchFilterRenderer
}

export interface SearchFilterRenderer {
  label: Label2
  navigationEndpoint?: NavigationEndpoint27
  tooltip: string
  trackingParams: string
  status?: string
}

export interface Label2 {
  simpleText: string
}

export interface NavigationEndpoint27 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata44
  searchEndpoint: SearchEndpoint2
}

export interface CommandMetadata44 {
  webCommandMetadata: WebCommandMetadata44
}

export interface WebCommandMetadata44 {
  url: string
  webPageType: string
  rootVe: number
}

export interface SearchEndpoint2 {
  query: string
  params: string
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
  endpoint: Endpoint
  trackingParams: string
  overrideEntityKey: string
}

export interface IconImage {
  iconType: string
}

export interface TooltipText {
  runs: Run45[]
}

export interface Run45 {
  text: string
}

export interface Endpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata45
  browseEndpoint: BrowseEndpoint15
}

export interface CommandMetadata45 {
  webCommandMetadata: WebCommandMetadata45
}

export interface WebCommandMetadata45 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

export interface BrowseEndpoint15 {
  browseId: string
}

export interface Searchbox {
  fusionSearchboxRenderer: FusionSearchboxRenderer
}

export interface FusionSearchboxRenderer {
  icon: Icon22
  placeholderText: PlaceholderText
  config: Config
  trackingParams: string
  searchEndpoint: SearchEndpoint3
  clearButton: ClearButton
}

export interface Icon22 {
  iconType: string
}

export interface PlaceholderText {
  runs: Run46[]
}

export interface Run46 {
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

export interface SearchEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata46
  searchEndpoint: SearchEndpoint4
}

export interface CommandMetadata46 {
  webCommandMetadata: WebCommandMetadata46
}

export interface WebCommandMetadata46 {
  url: string
  webPageType: string
  rootVe: number
}

export interface SearchEndpoint4 {
  query: string
}

export interface ClearButton {
  buttonRenderer: ButtonRenderer10
}

export interface ButtonRenderer10 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon23
  trackingParams: string
  accessibilityData: AccessibilityData38
}

export interface Icon23 {
  iconType: string
}

export interface AccessibilityData38 {
  accessibilityData: AccessibilityData39
}

export interface AccessibilityData39 {
  label: string
}

export interface TopbarButton {
  topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
  buttonRenderer?: ButtonRenderer11
}

export interface TopbarMenuButtonRenderer {
  icon: Icon24
  menuRequest: MenuRequest
  trackingParams: string
  accessibility: Accessibility25
  tooltip: string
  style: string
}

export interface Icon24 {
  iconType: string
}

export interface MenuRequest {
  clickTrackingParams: string
  commandMetadata: CommandMetadata47
  signalServiceEndpoint: SignalServiceEndpoint5
}

export interface CommandMetadata47 {
  webCommandMetadata: WebCommandMetadata47
}

export interface WebCommandMetadata47 {
  sendPost: boolean
  apiUrl: string
}

export interface SignalServiceEndpoint5 {
  signal: string
  actions: Action9[]
}

export interface Action9 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction5
}

export interface OpenPopupAction5 {
  popup: Popup5
  popupType: string
  beReused: boolean
}

export interface Popup5 {
  multiPageMenuRenderer: MultiPageMenuRenderer
}

export interface MultiPageMenuRenderer {
  trackingParams: string
  style: string
  showLoadingSpinner: boolean
}

export interface Accessibility25 {
  accessibilityData: AccessibilityData40
}

export interface AccessibilityData40 {
  label: string
}

export interface ButtonRenderer11 {
  style: string
  size: string
  text: Text21
  icon: Icon25
  navigationEndpoint: NavigationEndpoint28
  trackingParams: string
  targetId: string
}

export interface Text21 {
  runs: Run47[]
}

export interface Run47 {
  text: string
}

export interface Icon25 {
  iconType: string
}

export interface NavigationEndpoint28 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata48
  signInEndpoint: SignInEndpoint2
}

export interface CommandMetadata48 {
  webCommandMetadata: WebCommandMetadata48
}

export interface WebCommandMetadata48 {
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
  title: Title14
  sections: Section[]
  dismissButton: DismissButton
  trackingParams: string
}

export interface Title14 {
  runs: Run48[]
}

export interface Run48 {
  text: string
}

export interface Section {
  hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer
}

export interface HotkeyDialogSectionRenderer {
  title: Title15
  options: Option[]
}

export interface Title15 {
  runs: Run49[]
}

export interface Run49 {
  text: string
}

export interface Option {
  hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer
}

export interface HotkeyDialogSectionOptionRenderer {
  label: Label3
  hotkey: string
  hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
}

export interface Label3 {
  runs: Run50[]
}

export interface Run50 {
  text: string
}

export interface HotkeyAccessibilityLabel {
  accessibilityData: AccessibilityData41
}

export interface AccessibilityData41 {
  label: string
}

export interface DismissButton {
  buttonRenderer: ButtonRenderer12
}

export interface ButtonRenderer12 {
  style: string
  size: string
  isDisabled: boolean
  text: Text22
  trackingParams: string
}

export interface Text22 {
  runs: Run51[]
}

export interface Run51 {
  text: string
}

export interface BackButton {
  buttonRenderer: ButtonRenderer13
}

export interface ButtonRenderer13 {
  trackingParams: string
  command: Command5
}

export interface Command5 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata49
  signalServiceEndpoint: SignalServiceEndpoint6
}

export interface CommandMetadata49 {
  webCommandMetadata: WebCommandMetadata49
}

export interface WebCommandMetadata49 {
  sendPost: boolean
}

export interface SignalServiceEndpoint6 {
  signal: string
  actions: Action10[]
}

export interface Action10 {
  clickTrackingParams: string
  signalAction: SignalAction
}

export interface SignalAction {
  signal: string
}

export interface ForwardButton {
  buttonRenderer: ButtonRenderer14
}

export interface ButtonRenderer14 {
  trackingParams: string
  command: Command6
}

export interface Command6 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata50
  signalServiceEndpoint: SignalServiceEndpoint7
}

export interface CommandMetadata50 {
  webCommandMetadata: WebCommandMetadata50
}

export interface WebCommandMetadata50 {
  sendPost: boolean
}

export interface SignalServiceEndpoint7 {
  signal: string
  actions: Action11[]
}

export interface Action11 {
  clickTrackingParams: string
  signalAction: SignalAction2
}

export interface SignalAction2 {
  signal: string
}

export interface A11ySkipNavigationButton {
  buttonRenderer: ButtonRenderer15
}

export interface ButtonRenderer15 {
  style: string
  size: string
  isDisabled: boolean
  text: Text23
  trackingParams: string
  command: Command7
}

export interface Text23 {
  runs: Run52[]
}

export interface Run52 {
  text: string
}

export interface Command7 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata51
  signalServiceEndpoint: SignalServiceEndpoint8
}

export interface CommandMetadata51 {
  webCommandMetadata: WebCommandMetadata51
}

export interface WebCommandMetadata51 {
  sendPost: boolean
}

export interface SignalServiceEndpoint8 {
  signal: string
  actions: Action12[]
}

export interface Action12 {
  clickTrackingParams: string
  signalAction: SignalAction3
}

export interface SignalAction3 {
  signal: string
}

export interface VoiceSearchButton {
  buttonRenderer: ButtonRenderer16
}

export interface ButtonRenderer16 {
  style: string
  size: string
  isDisabled: boolean
  serviceEndpoint: ServiceEndpoint3
  icon: Icon27
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData44
}

export interface ServiceEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata52
  signalServiceEndpoint: SignalServiceEndpoint9
}

export interface CommandMetadata52 {
  webCommandMetadata: WebCommandMetadata52
}

export interface WebCommandMetadata52 {
  sendPost: boolean
}

export interface SignalServiceEndpoint9 {
  signal: string
  actions: Action13[]
}

export interface Action13 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction6
}

export interface OpenPopupAction6 {
  popup: Popup6
  popupType: string
}

export interface Popup6 {
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
  runs: Run53[]
}

export interface Run53 {
  text: string
}

export interface PromptHeader {
  runs: Run54[]
}

export interface Run54 {
  text: string
}

export interface ExampleQuery1 {
  runs: Run55[]
}

export interface Run55 {
  text: string
}

export interface ExampleQuery2 {
  runs: Run56[]
}

export interface Run56 {
  text: string
}

export interface PromptMicrophoneLabel {
  runs: Run57[]
}

export interface Run57 {
  text: string
}

export interface LoadingHeader {
  runs: Run58[]
}

export interface Run58 {
  text: string
}

export interface ConnectionErrorHeader {
  runs: Run59[]
}

export interface Run59 {
  text: string
}

export interface ConnectionErrorMicrophoneLabel {
  runs: Run60[]
}

export interface Run60 {
  text: string
}

export interface PermissionsHeader {
  runs: Run61[]
}

export interface Run61 {
  text: string
}

export interface PermissionsSubtext {
  runs: Run62[]
}

export interface Run62 {
  text: string
}

export interface DisabledHeader {
  runs: Run63[]
}

export interface Run63 {
  text: string
}

export interface DisabledSubtext {
  runs: Run64[]
}

export interface Run64 {
  text: string
}

export interface MicrophoneButtonAriaLabel {
  runs: Run65[]
}

export interface Run65 {
  text: string
}

export interface ExitButton {
  buttonRenderer: ButtonRenderer17
}

export interface ButtonRenderer17 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon26
  trackingParams: string
  accessibilityData: AccessibilityData42
}

export interface Icon26 {
  iconType: string
}

export interface AccessibilityData42 {
  accessibilityData: AccessibilityData43
}

export interface AccessibilityData43 {
  label: string
}

export interface MicrophoneOffPromptHeader {
  runs: Run66[]
}

export interface Run66 {
  text: string
}

export interface Icon27 {
  iconType: string
}

export interface AccessibilityData44 {
  accessibilityData: AccessibilityData45
}

export interface AccessibilityData45 {
  label: string
}

export interface OnResponseReceivedCommand {
  clickTrackingParams: string
  adsControlFlowOpportunityReceivedCommand: AdsControlFlowOpportunityReceivedCommand
}

export interface AdsControlFlowOpportunityReceivedCommand {
  opportunityType: string
  isInitialLoad: boolean
  adSlotAndLayoutMetadata: AdSlotAndLayoutMetadaum[]
  enablePacfLoggingWeb: boolean
}

export interface AdSlotAndLayoutMetadaum {
  adSlotMetadata: AdSlotMetadata2
  adLayoutMetadata: AdLayoutMetadaum[]
}

export interface AdSlotMetadata2 {
  slotId: string
  slotType: string
  slotPhysicalPosition: number
  adSlotLoggingData: AdSlotLoggingData2
}

export interface AdSlotLoggingData2 {
  serializedSlotAdServingDataEntry: string
}

export interface AdLayoutMetadaum {
  layoutId: string
  layoutType: string
  adLayoutLoggingData: AdLayoutLoggingData2
}

export interface AdLayoutLoggingData2 {
  serializedAdServingDataEntry: string
}
