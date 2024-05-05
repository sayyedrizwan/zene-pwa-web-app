export interface YtMusicNextSearchTokenResponse {
    responseContext: ResponseContext
    continuationContents: ContinuationContents
    trackingParams: string
    header: Header
  }
  
  export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[]
    maxAgeSeconds: number
  }
  
  export interface ServiceTrackingParam {
    service: string
    params: Param[]
  }
  
  export interface Param {
    key: string
    value: string
  }
  
  export interface ContinuationContents {
    musicShelfContinuation: MusicShelfContinuation
  }
  
  export interface MusicShelfContinuation {
    contents: Content[]
    trackingParams: string
    continuations: Continuation[]
    shelfDivider: ShelfDivider
    autoReloadWhenEmpty: boolean
  }
  
  export interface Content {
    musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer
  }
  
  export interface MusicResponsiveListItemRenderer {
    trackingParams: string
    thumbnail: Thumbnail
    flexColumns: FlexColumn[]
    menu: Menu
    playlistItemData: PlaylistItemData
    flexColumnDisplayStyle: string
    navigationEndpoint: NavigationEndpoint5
    itemHeight: string
    badges?: Badge[]
  }
  
  export interface Thumbnail {
    musicThumbnailRenderer: MusicThumbnailRenderer
  }
  
  export interface MusicThumbnailRenderer {
    thumbnail: Thumbnail2
    thumbnailCrop: string
    thumbnailScale: string
    trackingParams: string
  }
  
  export interface Thumbnail2 {
    thumbnails: Thumbnail3[]
  }
  
  export interface Thumbnail3 {
    url: string
    width: number
    height: number
  }
  
  export interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer
  }
  
  export interface MusicResponsiveListItemFlexColumnRenderer {
    text: Text
    displayPriority: string
  }
  
  export interface Text {
    runs: Run[]
  }
  
  export interface Run {
    text: string
    navigationEndpoint?: NavigationEndpoint
  }
  
  export interface NavigationEndpoint {
    clickTrackingParams: string
    watchEndpoint: WatchEndpoint
  }
  
  export interface WatchEndpoint {
    videoId: string
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs
  }
  
  export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig
  }
  
  export interface WatchEndpointMusicConfig {
    musicVideoType: string
  }
  
  export interface Menu {
    menuRenderer: MenuRenderer
  }
  
  export interface MenuRenderer {
    items: Item[]
    trackingParams: string
    accessibility: Accessibility
  }
  
  export interface Item {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
    menuServiceItemRenderer?: MenuServiceItemRenderer
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
  }
  
  export interface MenuNavigationItemRenderer {
    text: Text2
    icon: Icon
    navigationEndpoint: NavigationEndpoint2
    trackingParams: string
  }
  
  export interface Text2 {
    runs: Run2[]
  }
  
  export interface Run2 {
    text: string
  }
  
  export interface Icon {
    iconType: string
  }
  
  export interface NavigationEndpoint2 {
    clickTrackingParams: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint
    modalEndpoint?: ModalEndpoint
    watchEndpoint?: WatchEndpoint2
  }
  
  export interface ShareEntityEndpoint {
    serializedShareEntity: string
    sharePanelType: string
  }
  
  export interface BrowseEndpoint {
    browseId: string
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs
  }
  
  export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig
  }
  
  export interface BrowseEndpointContextMusicConfig {
    pageType: string
  }
  
  export interface ModalEndpoint {
    modal: Modal
  }
  
  export interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer
  }
  
  export interface ModalWithTitleAndButtonRenderer {
    title: Title
    content: Content2
    button: Button
  }
  
  export interface Title {
    runs: Run3[]
  }
  
  export interface Run3 {
    text: string
  }
  
  export interface Content2 {
    runs: Run4[]
  }
  
  export interface Run4 {
    text: string
  }
  
  export interface Button {
    buttonRenderer: ButtonRenderer
  }
  
  export interface ButtonRenderer {
    style: string
    isDisabled: boolean
    text: Text3
    navigationEndpoint: NavigationEndpoint3
    trackingParams: string
  }
  
  export interface Text3 {
    runs: Run5[]
  }
  
  export interface Run5 {
    text: string
  }
  
  export interface NavigationEndpoint3 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint
  }
  
  export interface SignInEndpoint {
    hack: boolean
  }
  
  export interface WatchEndpoint2 {
    videoId: string
    playlistId: string
    params: string
    loggingContext: LoggingContext
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs2
  }
  
  export interface LoggingContext {
    vssLoggingContext: VssLoggingContext
  }
  
  export interface VssLoggingContext {
    serializedContextData: string
  }
  
  export interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig: WatchEndpointMusicConfig2
  }
  
  export interface WatchEndpointMusicConfig2 {
    musicVideoType: string
  }
  
  export interface MenuServiceItemRenderer {
    text: Text4
    icon: Icon2
    serviceEndpoint: ServiceEndpoint
    trackingParams: string
  }
  
  export interface Text4 {
    runs: Run6[]
  }
  
  export interface Run6 {
    text: string
  }
  
  export interface Icon2 {
    iconType: string
  }
  
  export interface ServiceEndpoint {
    clickTrackingParams: string
    queueAddEndpoint: QueueAddEndpoint
  }
  
  export interface QueueAddEndpoint {
    queueTarget: QueueTarget
    queueInsertPosition: string
    commands: Command[]
  }
  
  export interface QueueTarget {
    videoId: string
    onEmptyQueue: OnEmptyQueue
  }
  
  export interface OnEmptyQueue {
    clickTrackingParams: string
    watchEndpoint: WatchEndpoint3
  }
  
  export interface WatchEndpoint3 {
    videoId: string
  }
  
  export interface Command {
    clickTrackingParams: string
    addToToastAction: AddToToastAction
  }
  
  export interface AddToToastAction {
    item: Item2
  }
  
  export interface Item2 {
    notificationTextRenderer: NotificationTextRenderer
  }
  
  export interface NotificationTextRenderer {
    successResponseText: SuccessResponseText
    trackingParams: string
  }
  
  export interface SuccessResponseText {
    runs: Run7[]
  }
  
  export interface Run7 {
    text: string
  }
  
  export interface ToggleMenuServiceItemRenderer {
    defaultText: DefaultText
    defaultIcon: DefaultIcon
    defaultServiceEndpoint: DefaultServiceEndpoint
    toggledText: ToggledText
    toggledIcon: ToggledIcon
    trackingParams: string
  }
  
  export interface DefaultText {
    runs: Run8[]
  }
  
  export interface Run8 {
    text: string
  }
  
  export interface DefaultIcon {
    iconType: string
  }
  
  export interface DefaultServiceEndpoint {
    clickTrackingParams: string
    modalEndpoint: ModalEndpoint2
  }
  
  export interface ModalEndpoint2 {
    modal: Modal2
  }
  
  export interface Modal2 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2
  }
  
  export interface ModalWithTitleAndButtonRenderer2 {
    title: Title2
    content: Content3
    button: Button2
  }
  
  export interface Title2 {
    runs: Run9[]
  }
  
  export interface Run9 {
    text: string
  }
  
  export interface Content3 {
    runs: Run10[]
  }
  
  export interface Run10 {
    text: string
  }
  
  export interface Button2 {
    buttonRenderer: ButtonRenderer2
  }
  
  export interface ButtonRenderer2 {
    style: string
    isDisabled: boolean
    text: Text5
    navigationEndpoint: NavigationEndpoint4
    trackingParams: string
  }
  
  export interface Text5 {
    runs: Run11[]
  }
  
  export interface Run11 {
    text: string
  }
  
  export interface NavigationEndpoint4 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint2
  }
  
  export interface SignInEndpoint2 {
    hack: boolean
  }
  
  export interface ToggledText {
    runs: Run12[]
  }
  
  export interface Run12 {
    text: string
  }
  
  export interface ToggledIcon {
    iconType: string
  }
  
  export interface Accessibility {
    accessibilityData: AccessibilityData
  }
  
  export interface AccessibilityData {
    label: string
  }
  
  export interface PlaylistItemData {
    videoId: string
  }
  
  export interface NavigationEndpoint5 {
    clickTrackingParams: string
    watchEndpoint: WatchEndpoint4
  }
  
  export interface WatchEndpoint4 {
    videoId: string
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs3
  }
  
  export interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig: WatchEndpointMusicConfig3
  }
  
  export interface WatchEndpointMusicConfig3 {
    musicVideoType: string
  }
  
  export interface Badge {
    musicInlineBadgeRenderer: MusicInlineBadgeRenderer
  }
  
  export interface MusicInlineBadgeRenderer {
    trackingParams: string
    icon: Icon3
    accessibilityData: AccessibilityData2
  }
  
  export interface Icon3 {
    iconType: string
  }
  
  export interface AccessibilityData2 {
    accessibilityData: AccessibilityData3
  }
  
  export interface AccessibilityData3 {
    label: string
  }
  
  export interface Continuation {
    nextContinuationData: NextContinuationData
  }
  
  export interface NextContinuationData {
    continuation: string
    clickTrackingParams: string
  }
  
  export interface ShelfDivider {
    musicShelfDividerRenderer: MusicShelfDividerRenderer
  }
  
  export interface MusicShelfDividerRenderer {
    hidden: boolean
  }
  
  export interface Header {
    musicHeaderRenderer: MusicHeaderRenderer
  }
  
  export interface MusicHeaderRenderer {
    header: Header2
    trackingParams: string
  }
  
  export interface Header2 {
    chipCloudRenderer: ChipCloudRenderer
  }
  
  export interface ChipCloudRenderer {
    chips: Chip[]
    collapsedRowCount: number
    trackingParams: string
    horizontalScrollable: boolean
  }
  
  export interface Chip {
    chipCloudChipRenderer: ChipCloudChipRenderer
  }
  
  export interface ChipCloudChipRenderer {
    style: Style
    navigationEndpoint: NavigationEndpoint6
    trackingParams: string
    icon?: Icon4
    accessibilityData: AccessibilityData4
    isSelected: boolean
    text?: Text6
    uniqueId?: string
  }
  
  export interface Style {
    styleType: string
  }
  
  export interface NavigationEndpoint6 {
    clickTrackingParams: string
    searchEndpoint: SearchEndpoint
  }
  
  export interface SearchEndpoint {
    query: string
    params?: string
  }
  
  export interface Icon4 {
    iconType: string
  }
  
  export interface AccessibilityData4 {
    accessibilityData: AccessibilityData5
  }
  
  export interface AccessibilityData5 {
    label: string
  }
  
  export interface Text6 {
    runs: Run13[]
  }
  
  export interface Run13 {
    text: string
  }
  