 export interface YTSearchWholeInfoData {
    responseContext?: ResponseContext
    contents?: Contents
    trackingParams?: string
  }
  
   interface ResponseContext {
    serviceTrackingParams?: ServiceTrackingParam[]
    maxAgeSeconds?: number
  }
  
   interface ServiceTrackingParam {
    service?: string
    params?: Param[]
  }
  
   interface Param {
    key?: string
    value?: string
  }
  
   interface Contents {
    tabbedSearchResultsRenderer?: TabbedSearchResultsRenderer
  }
  
   interface TabbedSearchResultsRenderer {
    tabs?: Tab[]
  }
  
   interface Tab {
    tabRenderer?: TabRenderer
  }
  
   interface TabRenderer {
    title?: string
    selected?: boolean
    content?: Content
    tabIdentifier?: string
    trackingParams?: string
  }
  
   interface Content {
    sectionListRenderer?: SectionListRenderer
  }
  
   interface SectionListRenderer {
    contents?: Content2[]
    trackingParams?: string
    header?: Header2
  }
  
   interface Content2 {
    musicCardShelfRenderer?: MusicCardShelfRenderer
    musicShelfRenderer?: MusicShelfRenderer
  }
  
   interface MusicCardShelfRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail
    title?: Title
    subtitle?: Subtitle
    contents?: Content3[]
    buttons?: Button3[]
    menu?: Menu2
    onTap?: OnTap
    header?: Header
    thumbnailOverlay?: ThumbnailOverlay
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
  
   interface Title {
    runs?: Run[]
  }
  
   interface Run {
    text?: string
    navigationEndpoint?: NavigationEndpoint
  }
  
   interface NavigationEndpoint {
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
  
   interface Subtitle {
    runs?: Run2[]
  }
  
   interface Run2 {
    text?: string
    navigationEndpoint?: NavigationEndpoint2
  }
  
   interface NavigationEndpoint2 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint
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
  
   interface Content3 {
    messageRenderer?: MessageRenderer
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
  }
  
   interface MessageRenderer {
    text?: Text
    trackingParams?: string
    style?: Style
  }
  
   interface Text {
    runs?: Run3[]
  }
  
   interface Run3 {
    text?: string
  }
  
   interface Style {
    value?: string
  }
  
   interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail4
    overlay?: Overlay
    flexColumns?: FlexColumn[]
    menu?: Menu
    playlistItemData?: PlaylistItemData
    flexColumnDisplayStyle?: string
    itemHeight?: string
  }
  
   interface Thumbnail4 {
    musicThumbnailRenderer?: MusicThumbnailRenderer2
  }
  
   interface MusicThumbnailRenderer2 {
    thumbnail?: Thumbnail5
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
  }
  
   interface Thumbnail5 {
    thumbnails?: Thumbnail6[]
  }
  
   interface Thumbnail6 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Overlay {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
  }
  
   interface MusicItemThumbnailOverlayRenderer {
    background?: Background
    content?: Content4
    contentPosition?: string
    displayStyle?: string
  }
  
   interface Background {
    verticalGradient?: VerticalGradient
  }
  
   interface VerticalGradient {
    gradientLayerColors?: string[]
  }
  
   interface Content4 {
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
    watchEndpoint?: WatchEndpoint2
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
    text?: Text2
    displayPriority?: string
  }
  
   interface Text2 {
    runs?: Run4[]
  }
  
   interface Run4 {
    text?: string
    navigationEndpoint?: NavigationEndpoint3
  }
  
   interface NavigationEndpoint3 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint3
    browseEndpoint?: BrowseEndpoint2
  }
  
   interface WatchEndpoint3 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
  }
  
   interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig3
  }
  
   interface WatchEndpointMusicConfig3 {
    musicVideoType?: string
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
    text?: Text3
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint4
    trackingParams?: string
  }
  
   interface Text3 {
    runs?: Run5[]
  }
  
   interface Run5 {
    text?: string
  }
  
   interface Icon {
    iconType?: string
  }
  
   interface NavigationEndpoint4 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint3
    modalEndpoint?: ModalEndpoint
    watchEndpoint?: WatchEndpoint4
  }
  
   interface ShareEntityEndpoint {
    serializedShareEntity?: string
    sharePanelType?: string
  }
  
   interface BrowseEndpoint3 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs3
  }
  
   interface BrowseEndpointContextSupportedConfigs3 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig3
  }
  
   interface BrowseEndpointContextMusicConfig3 {
    pageType?: string
  }
  
   interface ModalEndpoint {
    modal?: Modal
  }
  
   interface Modal {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
  }
  
   interface ModalWithTitleAndButtonRenderer {
    title?: Title2
    content?: Content5
    button?: Button
  }
  
   interface Title2 {
    runs?: Run6[]
  }
  
   interface Run6 {
    text?: string
  }
  
   interface Content5 {
    runs?: Run7[]
  }
  
   interface Run7 {
    text?: string
  }
  
   interface Button {
    buttonRenderer?: ButtonRenderer
  }
  
   interface ButtonRenderer {
    style?: string
    isDisabled?: boolean
    text?: Text4
    navigationEndpoint?: NavigationEndpoint5
    trackingParams?: string
  }
  
   interface Text4 {
    runs?: Run8[]
  }
  
   interface Run8 {
    text?: string
  }
  
   interface NavigationEndpoint5 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint
  }
  
   interface SignInEndpoint {
    hack?: boolean
  }
  
   interface WatchEndpoint4 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs4
  }
  
   interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
  }
  
   interface VssLoggingContext {
    serializedContextData?: string
  }
  
   interface WatchEndpointMusicSupportedConfigs4 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig4
  }
  
   interface WatchEndpointMusicConfig4 {
    musicVideoType?: string
  }
  
   interface MenuServiceItemRenderer {
    text?: Text5
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
  }
  
   interface Text5 {
    runs?: Run9[]
  }
  
   interface Run9 {
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
    watchEndpoint?: WatchEndpoint5
  }
  
   interface WatchEndpoint5 {
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
    runs?: Run10[]
  }
  
   interface Run10 {
    text?: string
  }
  
   interface ToggleMenuServiceItemRenderer {
    defaultText?: DefaultText
    defaultIcon?: DefaultIcon
    defaultServiceEndpoint?: DefaultServiceEndpoint
    toggledText?: ToggledText
    toggledIcon?: ToggledIcon
    trackingParams?: string
  }
  
   interface DefaultText {
    runs?: Run11[]
  }
  
   interface Run11 {
    text?: string
  }
  
   interface DefaultIcon {
    iconType?: string
  }
  
   interface DefaultServiceEndpoint {
    clickTrackingParams?: string
    modalEndpoint?: ModalEndpoint2
  }
  
   interface ModalEndpoint2 {
    modal?: Modal2
  }
  
   interface Modal2 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer2
  }
  
   interface ModalWithTitleAndButtonRenderer2 {
    title?: Title3
    content?: Content6
    button?: Button2
  }
  
   interface Title3 {
    runs?: Run12[]
  }
  
   interface Run12 {
    text?: string
  }
  
   interface Content6 {
    runs?: Run13[]
  }
  
   interface Run13 {
    text?: string
  }
  
   interface Button2 {
    buttonRenderer?: ButtonRenderer2
  }
  
   interface ButtonRenderer2 {
    style?: string
    isDisabled?: boolean
    text?: Text6
    navigationEndpoint?: NavigationEndpoint6
    trackingParams?: string
  }
  
   interface Text6 {
    runs?: Run14[]
  }
  
   interface Run14 {
    text?: string
  }
  
   interface NavigationEndpoint6 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint2
  }
  
   interface SignInEndpoint2 {
    hack?: boolean
  }
  
   interface ToggledText {
    runs?: Run15[]
  }
  
   interface Run15 {
    text?: string
  }
  
   interface ToggledIcon {
    iconType?: string
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
  
   interface Button3 {
    buttonRenderer?: ButtonRenderer3
  }
  
   interface ButtonRenderer3 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text7
    icon?: Icon3
    accessibility?: Accessibility2
    trackingParams?: string
    accessibilityData?: AccessibilityData4
    command?: Command2
  }
  
   interface Text7 {
    runs?: Run16[]
  }
  
   interface Run16 {
    text?: string
  }
  
   interface Icon3 {
    iconType?: string
  }
  
   interface Accessibility2 {
    label?: string
  }
  
   interface AccessibilityData4 {
    accessibilityData?: AccessibilityData5
  }
  
   interface AccessibilityData5 {
    label?: string
  }
  
   interface Command2 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint6
    modalEndpoint?: ModalEndpoint3
  }
  
   interface WatchEndpoint6 {
    videoId?: string
    params?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs5
  }
  
   interface WatchEndpointMusicSupportedConfigs5 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig5
  }
  
   interface WatchEndpointMusicConfig5 {
    musicVideoType?: string
  }
  
   interface ModalEndpoint3 {
    modal?: Modal3
  }
  
   interface Modal3 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer3
  }
  
   interface ModalWithTitleAndButtonRenderer3 {
    title?: Title4
    content?: Content7
    button?: Button4
  }
  
   interface Title4 {
    runs?: Run17[]
  }
  
   interface Run17 {
    text?: string
  }
  
   interface Content7 {
    runs?: Run18[]
  }
  
   interface Run18 {
    text?: string
  }
  
   interface Button4 {
    buttonRenderer?: ButtonRenderer4
  }
  
   interface ButtonRenderer4 {
    style?: string
    isDisabled?: boolean
    text?: Text8
    navigationEndpoint?: NavigationEndpoint7
    trackingParams?: string
  }
  
   interface Text8 {
    runs?: Run19[]
  }
  
   interface Run19 {
    text?: string
  }
  
   interface NavigationEndpoint7 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint3
  }
  
   interface SignInEndpoint3 {
    hack?: boolean
  }
  
   interface Menu2 {
    menuRenderer?: MenuRenderer2
  }
  
   interface MenuRenderer2 {
    items?: Item3[]
    trackingParams?: string
    accessibility?: Accessibility3
  }
  
   interface Item3 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer2
    menuServiceItemRenderer?: MenuServiceItemRenderer2
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer2
  }
  
   interface MenuNavigationItemRenderer2 {
    text?: Text9
    icon?: Icon4
    navigationEndpoint?: NavigationEndpoint8
    trackingParams?: string
  }
  
   interface Text9 {
    runs?: Run20[]
  }
  
   interface Run20 {
    text?: string
  }
  
   interface Icon4 {
    iconType?: string
  }
  
   interface NavigationEndpoint8 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint2
    modalEndpoint?: ModalEndpoint4
    watchEndpoint?: WatchEndpoint7
  }
  
   interface ShareEntityEndpoint2 {
    serializedShareEntity?: string
    sharePanelType?: string
  }
  
   interface ModalEndpoint4 {
    modal?: Modal4
  }
  
   interface Modal4 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer4
  }
  
   interface ModalWithTitleAndButtonRenderer4 {
    title?: Title5
    content?: Content8
    button?: Button5
  }
  
   interface Title5 {
    runs?: Run21[]
  }
  
   interface Run21 {
    text?: string
  }
  
   interface Content8 {
    runs?: Run22[]
  }
  
   interface Run22 {
    text?: string
  }
  
   interface Button5 {
    buttonRenderer?: ButtonRenderer5
  }
  
   interface ButtonRenderer5 {
    style?: string
    isDisabled?: boolean
    text?: Text10
    navigationEndpoint?: NavigationEndpoint9
    trackingParams?: string
  }
  
   interface Text10 {
    runs?: Run23[]
  }
  
   interface Run23 {
    text?: string
  }
  
   interface NavigationEndpoint9 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint4
  }
  
   interface SignInEndpoint4 {
    hack?: boolean
  }
  
   interface WatchEndpoint7 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext2
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs6
  }
  
   interface LoggingContext2 {
    vssLoggingContext?: VssLoggingContext2
  }
  
   interface VssLoggingContext2 {
    serializedContextData?: string
  }
  
   interface WatchEndpointMusicSupportedConfigs6 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig6
  }
  
   interface WatchEndpointMusicConfig6 {
    musicVideoType?: string
  }
  
   interface MenuServiceItemRenderer2 {
    text?: Text11
    icon?: Icon5
    serviceEndpoint?: ServiceEndpoint2
    trackingParams?: string
  }
  
   interface Text11 {
    runs?: Run24[]
  }
  
   interface Run24 {
    text?: string
  }
  
   interface Icon5 {
    iconType?: string
  }
  
   interface ServiceEndpoint2 {
    clickTrackingParams?: string
    queueAddEndpoint?: QueueAddEndpoint2
  }
  
   interface QueueAddEndpoint2 {
    queueTarget?: QueueTarget2
    queueInsertPosition?: string
    commands?: Command3[]
  }
  
   interface QueueTarget2 {
    videoId?: string
    onEmptyQueue?: OnEmptyQueue2
  }
  
   interface OnEmptyQueue2 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint8
  }
  
   interface WatchEndpoint8 {
    videoId?: string
  }
  
   interface Command3 {
    clickTrackingParams?: string
    addToToastAction?: AddToToastAction2
  }
  
   interface AddToToastAction2 {
    item?: Item4
  }
  
   interface Item4 {
    notificationTextRenderer?: NotificationTextRenderer2
  }
  
   interface NotificationTextRenderer2 {
    successResponseText?: SuccessResponseText2
    trackingParams?: string
  }
  
   interface SuccessResponseText2 {
    runs?: Run25[]
  }
  
   interface Run25 {
    text?: string
  }
  
   interface ToggleMenuServiceItemRenderer2 {
    defaultText?: DefaultText2
    defaultIcon?: DefaultIcon2
    defaultServiceEndpoint?: DefaultServiceEndpoint2
    toggledText?: ToggledText2
    toggledIcon?: ToggledIcon2
    trackingParams?: string
  }
  
   interface DefaultText2 {
    runs?: Run26[]
  }
  
   interface Run26 {
    text?: string
  }
  
   interface DefaultIcon2 {
    iconType?: string
  }
  
   interface DefaultServiceEndpoint2 {
    clickTrackingParams?: string
    modalEndpoint?: ModalEndpoint5
  }
  
   interface ModalEndpoint5 {
    modal?: Modal5
  }
  
   interface Modal5 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer5
  }
  
   interface ModalWithTitleAndButtonRenderer5 {
    title?: Title6
    content?: Content9
    button?: Button6
  }
  
   interface Title6 {
    runs?: Run27[]
  }
  
   interface Run27 {
    text?: string
  }
  
   interface Content9 {
    runs?: Run28[]
  }
  
   interface Run28 {
    text?: string
  }
  
   interface Button6 {
    buttonRenderer?: ButtonRenderer6
  }
  
   interface ButtonRenderer6 {
    style?: string
    isDisabled?: boolean
    text?: Text12
    navigationEndpoint?: NavigationEndpoint10
    trackingParams?: string
  }
  
   interface Text12 {
    runs?: Run29[]
  }
  
   interface Run29 {
    text?: string
  }
  
   interface NavigationEndpoint10 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint5
  }
  
   interface SignInEndpoint5 {
    hack?: boolean
  }
  
   interface ToggledText2 {
    runs?: Run30[]
  }
  
   interface Run30 {
    text?: string
  }
  
   interface ToggledIcon2 {
    iconType?: string
  }
  
   interface Accessibility3 {
    accessibilityData?: AccessibilityData6
  }
  
   interface AccessibilityData6 {
    label?: string
  }
  
   interface OnTap {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint9
  }
  
   interface WatchEndpoint9 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs7
  }
  
   interface WatchEndpointMusicSupportedConfigs7 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig7
  }
  
   interface WatchEndpointMusicConfig7 {
    musicVideoType?: string
  }
  
   interface Header {
    musicCardShelfHeaderBasicRenderer?: MusicCardShelfHeaderBasicRenderer
  }
  
   interface MusicCardShelfHeaderBasicRenderer {
    title?: Title7
    trackingParams?: string
  }
  
   interface Title7 {
    runs?: Run31[]
  }
  
   interface Run31 {
    text?: string
  }
  
   interface ThumbnailOverlay {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer2
  }
  
   interface MusicItemThumbnailOverlayRenderer2 {
    background?: Background2
    content?: Content10
    contentPosition?: string
    displayStyle?: string
  }
  
   interface Background2 {
    verticalGradient?: VerticalGradient2
  }
  
   interface VerticalGradient2 {
    gradientLayerColors?: string[]
  }
  
   interface Content10 {
    musicPlayButtonRenderer?: MusicPlayButtonRenderer2
  }
  
   interface MusicPlayButtonRenderer2 {
    playNavigationEndpoint?: PlayNavigationEndpoint2
    trackingParams?: string
    playIcon?: PlayIcon2
    pauseIcon?: PauseIcon2
    iconColor?: number
    backgroundColor?: number
    activeBackgroundColor?: number
    loadingIndicatorColor?: number
    playingIcon?: PlayingIcon2
    iconLoadingColor?: number
    activeScaleFactor?: number
    buttonSize?: string
    rippleTarget?: string
    accessibilityPlayData?: AccessibilityPlayData2
    accessibilityPauseData?: AccessibilityPauseData2
  }
  
   interface PlayNavigationEndpoint2 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint10
  }
  
   interface WatchEndpoint10 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs8
  }
  
   interface WatchEndpointMusicSupportedConfigs8 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig8
  }
  
   interface WatchEndpointMusicConfig8 {
    musicVideoType?: string
  }
  
   interface PlayIcon2 {
    iconType?: string
  }
  
   interface PauseIcon2 {
    iconType?: string
  }
  
   interface PlayingIcon2 {
    iconType?: string
  }
  
   interface AccessibilityPlayData2 {
    accessibilityData?: AccessibilityData7
  }
  
   interface AccessibilityData7 {
    label?: string
  }
  
   interface AccessibilityPauseData2 {
    accessibilityData?: AccessibilityData8
  }
  
   interface AccessibilityData8 {
    label?: string
  }
  
   interface MusicShelfRenderer {
    title?: Title8
    contents?: Content11[]
    trackingParams?: string
    bottomText?: BottomText
    bottomEndpoint?: BottomEndpoint
    shelfDivider?: ShelfDivider
  }
  
   interface Title8 {
    runs?: Run32[]
  }
  
   interface Run32 {
    text?: string
  }
  
   interface Content11 {
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer2
  }
  
   interface MusicResponsiveListItemRenderer2 {
    trackingParams?: string
    thumbnail?: Thumbnail7
    overlay?: Overlay2
    flexColumns?: FlexColumn2[]
    menu?: Menu3
    playlistItemData?: PlaylistItemData2
    flexColumnDisplayStyle?: string
    itemHeight?: string
  }
  
   interface Thumbnail7 {
    musicThumbnailRenderer?: MusicThumbnailRenderer3
  }
  
   interface MusicThumbnailRenderer3 {
    thumbnail?: Thumbnail8
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
  }
  
   interface Thumbnail8 {
    thumbnails?: Thumbnail9[]
  }
  
   interface Thumbnail9 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Overlay2 {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer3
  }
  
   interface MusicItemThumbnailOverlayRenderer3 {
    background?: Background3
    content?: Content12
    contentPosition?: string
    displayStyle?: string
  }
  
   interface Background3 {
    verticalGradient?: VerticalGradient3
  }
  
   interface VerticalGradient3 {
    gradientLayerColors?: string[]
  }
  
   interface Content12 {
    musicPlayButtonRenderer?: MusicPlayButtonRenderer3
  }
  
   interface MusicPlayButtonRenderer3 {
    playNavigationEndpoint?: PlayNavigationEndpoint3
    trackingParams?: string
    playIcon?: PlayIcon3
    pauseIcon?: PauseIcon3
    iconColor?: number
    backgroundColor?: number
    activeBackgroundColor?: number
    loadingIndicatorColor?: number
    playingIcon?: PlayingIcon3
    iconLoadingColor?: number
    activeScaleFactor?: number
    buttonSize?: string
    rippleTarget?: string
    accessibilityPlayData?: AccessibilityPlayData3
    accessibilityPauseData?: AccessibilityPauseData3
  }
  
   interface PlayNavigationEndpoint3 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint11
  }
  
   interface WatchEndpoint11 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs9
  }
  
   interface WatchEndpointMusicSupportedConfigs9 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig9
  }
  
   interface WatchEndpointMusicConfig9 {
    musicVideoType?: string
  }
  
   interface PlayIcon3 {
    iconType?: string
  }
  
   interface PauseIcon3 {
    iconType?: string
  }
  
   interface PlayingIcon3 {
    iconType?: string
  }
  
   interface AccessibilityPlayData3 {
    accessibilityData?: AccessibilityData9
  }
  
   interface AccessibilityData9 {
    label?: string
  }
  
   interface AccessibilityPauseData3 {
    accessibilityData?: AccessibilityData10
  }
  
   interface AccessibilityData10 {
    label?: string
  }
  
   interface FlexColumn2 {
    musicResponsiveListItemFlexColumnRenderer?: MusicResponsiveListItemFlexColumnRenderer2
  }
  
   interface MusicResponsiveListItemFlexColumnRenderer2 {
    text?: Text13
    displayPriority?: string
  }
  
   interface Text13 {
    runs?: Run33[]
  }
  
   interface Run33 {
    text?: string
    navigationEndpoint?: NavigationEndpoint11
  }
  
   interface NavigationEndpoint11 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint12
    browseEndpoint?: BrowseEndpoint4
  }
  
   interface WatchEndpoint12 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs10
  }
  
   interface WatchEndpointMusicSupportedConfigs10 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig10
  }
  
   interface WatchEndpointMusicConfig10 {
    musicVideoType?: string
  }
  
   interface BrowseEndpoint4 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs4
  }
  
   interface BrowseEndpointContextSupportedConfigs4 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig4
  }
  
   interface BrowseEndpointContextMusicConfig4 {
    pageType?: string
  }
  
   interface Menu3 {
    menuRenderer?: MenuRenderer3
  }
  
   interface MenuRenderer3 {
    items?: Item5[]
    trackingParams?: string
    accessibility?: Accessibility4
  }
  
   interface Item5 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer3
    menuServiceItemRenderer?: MenuServiceItemRenderer3
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer3
  }
  
   interface MenuNavigationItemRenderer3 {
    text?: Text14
    icon?: Icon6
    navigationEndpoint?: NavigationEndpoint12
    trackingParams?: string
  }
  
   interface Text14 {
    runs?: Run34[]
  }
  
   interface Run34 {
    text?: string
  }
  
   interface Icon6 {
    iconType?: string
  }
  
   interface NavigationEndpoint12 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint3
    modalEndpoint?: ModalEndpoint6
    watchEndpoint?: WatchEndpoint13
    browseEndpoint?: BrowseEndpoint5
  }
  
   interface ShareEntityEndpoint3 {
    serializedShareEntity?: string
    sharePanelType?: string
  }
  
   interface ModalEndpoint6 {
    modal?: Modal6
  }
  
   interface Modal6 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer6
  }
  
   interface ModalWithTitleAndButtonRenderer6 {
    title?: Title9
    content?: Content13
    button?: Button7
  }
  
   interface Title9 {
    runs?: Run35[]
  }
  
   interface Run35 {
    text?: string
  }
  
   interface Content13 {
    runs?: Run36[]
  }
  
   interface Run36 {
    text?: string
  }
  
   interface Button7 {
    buttonRenderer?: ButtonRenderer7
  }
  
   interface ButtonRenderer7 {
    style?: string
    isDisabled?: boolean
    text?: Text15
    navigationEndpoint?: NavigationEndpoint13
    trackingParams?: string
  }
  
   interface Text15 {
    runs?: Run37[]
  }
  
   interface Run37 {
    text?: string
  }
  
   interface NavigationEndpoint13 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint6
  }
  
   interface SignInEndpoint6 {
    hack?: boolean
  }
  
   interface WatchEndpoint13 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext3
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs11
  }
  
   interface LoggingContext3 {
    vssLoggingContext?: VssLoggingContext3
  }
  
   interface VssLoggingContext3 {
    serializedContextData?: string
  }
  
   interface WatchEndpointMusicSupportedConfigs11 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig11
  }
  
   interface WatchEndpointMusicConfig11 {
    musicVideoType?: string
  }
  
   interface BrowseEndpoint5 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs5
  }
  
   interface BrowseEndpointContextSupportedConfigs5 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig5
  }
  
   interface BrowseEndpointContextMusicConfig5 {
    pageType?: string
  }
  
   interface MenuServiceItemRenderer3 {
    text?: Text16
    icon?: Icon7
    serviceEndpoint?: ServiceEndpoint3
    trackingParams?: string
  }
  
   interface Text16 {
    runs?: Run38[]
  }
  
   interface Run38 {
    text?: string
  }
  
   interface Icon7 {
    iconType?: string
  }
  
   interface ServiceEndpoint3 {
    clickTrackingParams?: string
    queueAddEndpoint?: QueueAddEndpoint3
  }
  
   interface QueueAddEndpoint3 {
    queueTarget?: QueueTarget3
    queueInsertPosition?: string
    commands?: Command4[]
  }
  
   interface QueueTarget3 {
    videoId?: string
    onEmptyQueue?: OnEmptyQueue3
  }
  
   interface OnEmptyQueue3 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint14
  }
  
   interface WatchEndpoint14 {
    videoId?: string
  }
  
   interface Command4 {
    clickTrackingParams?: string
    addToToastAction?: AddToToastAction3
  }
  
   interface AddToToastAction3 {
    item?: Item6
  }
  
   interface Item6 {
    notificationTextRenderer?: NotificationTextRenderer3
  }
  
   interface NotificationTextRenderer3 {
    successResponseText?: SuccessResponseText3
    trackingParams?: string
  }
  
   interface SuccessResponseText3 {
    runs?: Run39[]
  }
  
   interface Run39 {
    text?: string
  }
  
   interface ToggleMenuServiceItemRenderer3 {
    defaultText?: DefaultText3
    defaultIcon?: DefaultIcon3
    defaultServiceEndpoint?: DefaultServiceEndpoint3
    toggledText?: ToggledText3
    toggledIcon?: ToggledIcon3
    trackingParams?: string
  }
  
   interface DefaultText3 {
    runs?: Run40[]
  }
  
   interface Run40 {
    text?: string
  }
  
   interface DefaultIcon3 {
    iconType?: string
  }
  
   interface DefaultServiceEndpoint3 {
    clickTrackingParams?: string
    modalEndpoint?: ModalEndpoint7
  }
  
   interface ModalEndpoint7 {
    modal?: Modal7
  }
  
   interface Modal7 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer7
  }
  
   interface ModalWithTitleAndButtonRenderer7 {
    title?: Title10
    content?: Content14
    button?: Button8
  }
  
   interface Title10 {
    runs?: Run41[]
  }
  
   interface Run41 {
    text?: string
  }
  
   interface Content14 {
    runs?: Run42[]
  }
  
   interface Run42 {
    text?: string
  }
  
   interface Button8 {
    buttonRenderer?: ButtonRenderer8
  }
  
   interface ButtonRenderer8 {
    style?: string
    isDisabled?: boolean
    text?: Text17
    navigationEndpoint?: NavigationEndpoint14
    trackingParams?: string
  }
  
   interface Text17 {
    runs?: Run43[]
  }
  
   interface Run43 {
    text?: string
  }
  
   interface NavigationEndpoint14 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint7
  }
  
   interface SignInEndpoint7 {
    hack?: boolean
  }
  
   interface ToggledText3 {
    runs?: Run44[]
  }
  
   interface Run44 {
    text?: string
  }
  
   interface ToggledIcon3 {
    iconType?: string
  }
  
   interface Accessibility4 {
    accessibilityData?: AccessibilityData11
  }
  
   interface AccessibilityData11 {
    label?: string
  }
  
   interface PlaylistItemData2 {
    videoId?: string
  }
  
   interface BottomText {
    runs?: Run45[]
  }
  
   interface Run45 {
    text?: string
  }
  
   interface BottomEndpoint {
    clickTrackingParams?: string
    searchEndpoint?: SearchEndpoint
  }
  
   interface SearchEndpoint {
    query?: string
    params?: string
  }
  
   interface ShelfDivider {
    musicShelfDividerRenderer?: MusicShelfDividerRenderer
  }
  
   interface MusicShelfDividerRenderer {
    hidden?: boolean
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
    style?: Style2
    text?: Text18
    navigationEndpoint?: NavigationEndpoint15
    trackingParams?: string
    accessibilityData?: AccessibilityData12
    isSelected?: boolean
    uniqueId?: string
  }
  
   interface Style2 {
    styleType?: string
  }
  
   interface Text18 {
    runs?: Run46[]
  }
  
   interface Run46 {
    text?: string
  }
  
   interface NavigationEndpoint15 {
    clickTrackingParams?: string
    searchEndpoint?: SearchEndpoint2
  }
  
   interface SearchEndpoint2 {
    query?: string
    params?: string
  }
  
   interface AccessibilityData12 {
    accessibilityData?: AccessibilityData13
  }
  
   interface AccessibilityData13 {
    label?: string
  }
  