export interface YTArtistsData {
    responseContext?: ResponseContext
    contents?: Contents
    header?: Header3
    trackingParams?: string
    overlay?: Overlay2
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
    singleColumnBrowseResultsRenderer?: SingleColumnBrowseResultsRenderer
}

interface SingleColumnBrowseResultsRenderer {
    tabs?: Tab[]
}

interface Tab {
    tabRenderer?: TabRenderer
}

interface TabRenderer {
    content?: Content
    trackingParams?: string
}

interface Content {
    sectionListRenderer?: SectionListRenderer
}

interface SectionListRenderer {
    contents?: Content2[]
    trackingParams?: string
}

interface Content2 {
    musicShelfRenderer?: MusicShelfRenderer
    musicCarouselShelfRenderer?: MusicCarouselShelfRenderer
    musicDescriptionShelfRenderer?: MusicDescriptionShelfRenderer
}

interface MusicShelfRenderer {
    title?: Title
    contents?: Content3[]
    trackingParams?: string
    bottomText?: BottomText
    bottomEndpoint?: BottomEndpoint
    shelfDivider?: ShelfDivider
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
    browseEndpoint?: BrowseEndpoint
}

interface BrowseEndpoint {
    browseId?: string
    params?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs
}

interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig
}

interface BrowseEndpointContextMusicConfig {
    pageType?: string
}

interface Content3 {
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
}

interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail
    overlay?: Overlay
    flexColumns?: FlexColumn[]
    menu?: Menu
    playlistItemData?: PlaylistItemData
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
    watchEndpoint?: WatchEndpoint
}

interface WatchEndpoint {
    videoId?: string
    playlistId?: string
    index?: number
    loggingContext?: LoggingContext
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
}

interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
}

interface VssLoggingContext {
    serializedContextData?: string
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
    runs?: Run2[]
}

interface Run2 {
    text?: string
    navigationEndpoint?: NavigationEndpoint2
}

interface NavigationEndpoint2 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint2
    watchEndpoint?: WatchEndpoint2
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

interface WatchEndpoint2 {
    videoId?: string
    playlistId?: string
    loggingContext?: LoggingContext2
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
}

interface LoggingContext2 {
    vssLoggingContext?: VssLoggingContext2
}

interface VssLoggingContext2 {
    serializedContextData?: string
}

interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig2
}

interface WatchEndpointMusicConfig2 {
    musicVideoType?: string
}

interface Menu {
    menuRenderer?: MenuRenderer
}

interface MenuRenderer {
    items?: Item[]
    trackingParams?: string
    topLevelButtons?: TopLevelButton[]
    accessibility?: Accessibility
}

interface Item {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
    menuServiceItemRenderer?: MenuServiceItemRenderer
}

interface MenuNavigationItemRenderer {
    text?: Text2
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
}

interface Text2 {
    runs?: Run3[]
}

interface Run3 {
    text?: string
}

interface Icon {
    iconType?: string
}

interface NavigationEndpoint3 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint3
    modalEndpoint?: ModalEndpoint
    watchEndpoint?: WatchEndpoint3
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
    runs?: Run4[]
}

interface Run4 {
    text?: string
}

interface Content5 {
    runs?: Run5[]
}

interface Run5 {
    text?: string
}

interface Button {
    buttonRenderer?: ButtonRenderer
}

interface ButtonRenderer {
    style?: string
    isDisabled?: boolean
    text?: Text3
    navigationEndpoint?: NavigationEndpoint4
    trackingParams?: string
}

interface Text3 {
    runs?: Run6[]
}

interface Run6 {
    text?: string
}

interface NavigationEndpoint4 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint
}

interface SignInEndpoint {
    hack?: boolean
}

interface WatchEndpoint3 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext3
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
}

interface LoggingContext3 {
    vssLoggingContext?: VssLoggingContext3
}

interface VssLoggingContext3 {
    serializedContextData?: string
}

interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig3
}

interface WatchEndpointMusicConfig3 {
    musicVideoType?: string
}

interface MenuServiceItemRenderer {
    text?: Text4
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
}

interface Text4 {
    runs?: Run7[]
}

interface Run7 {
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
    runs?: Run8[]
}

interface Run8 {
    text?: string
}

interface TopLevelButton {
    likeButtonRenderer?: LikeButtonRenderer
}

interface LikeButtonRenderer {
    target?: Target
    likeStatus?: string
    trackingParams?: string
    likesAllowed?: boolean
    dislikeNavigationEndpoint?: DislikeNavigationEndpoint
    likeCommand?: LikeCommand
}

interface Target {
    videoId?: string
}

interface DislikeNavigationEndpoint {
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
    runs?: Run9[]
}

interface Run9 {
    text?: string
}

interface Content6 {
    runs?: Run10[]
}

interface Run10 {
    text?: string
}

interface Button2 {
    buttonRenderer?: ButtonRenderer2
}

interface ButtonRenderer2 {
    style?: string
    isDisabled?: boolean
    text?: Text5
    navigationEndpoint?: NavigationEndpoint5
    trackingParams?: string
}

interface Text5 {
    runs?: Run11[]
}

interface Run11 {
    text?: string
}

interface NavigationEndpoint5 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint2
}

interface SignInEndpoint2 {
    hack?: boolean
}

interface LikeCommand {
    clickTrackingParams?: string
    modalEndpoint?: ModalEndpoint3
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
    button?: Button3
}

interface Title4 {
    runs?: Run12[]
}

interface Run12 {
    text?: string
}

interface Content7 {
    runs?: Run13[]
}

interface Run13 {
    text?: string
}

interface Button3 {
    buttonRenderer?: ButtonRenderer3
}

interface ButtonRenderer3 {
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
    signInEndpoint?: SignInEndpoint3
}

interface SignInEndpoint3 {
    hack?: boolean
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

interface BottomText {
    runs?: Run15[]
}

interface Run15 {
    text?: string
}

interface BottomEndpoint {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint4
}

interface BrowseEndpoint4 {
    browseId?: string
    params?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs4
}

interface BrowseEndpointContextSupportedConfigs4 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig4
}

interface BrowseEndpointContextMusicConfig4 {
    pageType?: string
}

interface ShelfDivider {
    musicShelfDividerRenderer?: MusicShelfDividerRenderer
}

interface MusicShelfDividerRenderer {
    hidden?: boolean
}

interface MusicCarouselShelfRenderer {
    header?: Header
    contents?: Content8[]
    trackingParams?: string
    itemSize?: string
}

interface Header {
    musicCarouselShelfBasicHeaderRenderer?: MusicCarouselShelfBasicHeaderRenderer
}

interface MusicCarouselShelfBasicHeaderRenderer {
    title?: Title5
    accessibilityData?: AccessibilityData4
    headerStyle?: string
    trackingParams?: string
    moreContentButton?: MoreContentButton
}

interface Title5 {
    runs?: Run16[]
}

interface Run16 {
    text?: string
    navigationEndpoint?: NavigationEndpoint7
}

interface NavigationEndpoint7 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint5
}

interface BrowseEndpoint5 {
    browseId?: string
    params?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs5
}

interface BrowseEndpointContextSupportedConfigs5 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig5
}

interface BrowseEndpointContextMusicConfig5 {
    pageType?: string
}

interface AccessibilityData4 {
    accessibilityData?: AccessibilityData5
}

interface AccessibilityData5 {
    label?: string
}

interface MoreContentButton {
    buttonRenderer?: ButtonRenderer4
}

interface ButtonRenderer4 {
    style?: string
    text?: Text7
    navigationEndpoint?: NavigationEndpoint8
    trackingParams?: string
    accessibilityData?: AccessibilityData6
}

interface Text7 {
    runs?: Run17[]
}

interface Run17 {
    text?: string
}

interface NavigationEndpoint8 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint6
}

interface BrowseEndpoint6 {
    browseId?: string
    params?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs6
}

interface BrowseEndpointContextSupportedConfigs6 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig6
}

interface BrowseEndpointContextMusicConfig6 {
    pageType?: string
}

interface AccessibilityData6 {
    accessibilityData?: AccessibilityData7
}

interface AccessibilityData7 {
    label?: string
}

interface Content8 {
    musicTwoRowItemRenderer?: MusicTwoRowItemRenderer
}

interface MusicTwoRowItemRenderer {
    thumbnailRenderer?: ThumbnailRenderer
    aspectRatio?: string
    title?: Title6
    subtitle?: Subtitle
    navigationEndpoint?: NavigationEndpoint11
    trackingParams?: string
    menu?: Menu2
    thumbnailOverlay?: ThumbnailOverlay
    subtitleBadges?: SubtitleBadge[]
}

interface ThumbnailRenderer {
    musicThumbnailRenderer?: MusicThumbnailRenderer2
}

interface MusicThumbnailRenderer2 {
    thumbnail?: Thumbnail4
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
}

interface Thumbnail4 {
    thumbnails?: Thumbnail5[]
}

interface Thumbnail5 {
    url?: string
    width?: number
    height?: number
}

interface Title6 {
    runs?: Run18[]
}

interface Run18 {
    text?: string
    navigationEndpoint?: NavigationEndpoint9
}

interface NavigationEndpoint9 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint7
}

interface BrowseEndpoint7 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs7
    params?: string
}

interface BrowseEndpointContextSupportedConfigs7 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig7
}

interface BrowseEndpointContextMusicConfig7 {
    pageType?: string
}

interface Subtitle {
    runs?: Run19[]
}

interface Run19 {
    text?: string
    navigationEndpoint?: NavigationEndpoint10
}

interface NavigationEndpoint10 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint8
}

interface BrowseEndpoint8 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs8
}

interface BrowseEndpointContextSupportedConfigs8 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig8
}

interface BrowseEndpointContextMusicConfig8 {
    pageType?: string
}

interface NavigationEndpoint11 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint9
    watchEndpoint?: WatchEndpoint5
}

interface BrowseEndpoint9 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs9
    params?: string
}

interface BrowseEndpointContextSupportedConfigs9 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig9
}

interface BrowseEndpointContextMusicConfig9 {
    pageType?: string
}

interface WatchEndpoint5 {
    videoId?: string
    playlistId?: string
    index?: number
    loggingContext?: LoggingContext4
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs4
}

interface LoggingContext4 {
    vssLoggingContext?: VssLoggingContext4
}

interface VssLoggingContext4 {
    serializedContextData?: string
}

interface WatchEndpointMusicSupportedConfigs4 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig4
}

interface WatchEndpointMusicConfig4 {
    musicVideoType?: string
}

interface Menu2 {
    menuRenderer?: MenuRenderer2
}

interface MenuRenderer2 {
    items?: Item3[]
    trackingParams?: string
    accessibility?: Accessibility2
}

interface Item3 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer2
    menuServiceItemRenderer?: MenuServiceItemRenderer2
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
}

interface MenuNavigationItemRenderer2 {
    text?: Text8
    icon?: Icon3
    navigationEndpoint?: NavigationEndpoint12
    trackingParams?: string
}

interface Text8 {
    runs?: Run20[]
}

interface Run20 {
    text?: string
}

interface Icon3 {
    iconType?: string
}

interface NavigationEndpoint12 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint2
    watchPlaylistEndpoint?: WatchPlaylistEndpoint
    modalEndpoint?: ModalEndpoint4
    watchEndpoint?: WatchEndpoint6
}

interface ShareEntityEndpoint2 {
    serializedShareEntity?: string
    sharePanelType?: string
}

interface WatchPlaylistEndpoint {
    playlistId?: string
    params?: string
}

interface ModalEndpoint4 {
    modal?: Modal4
}

interface Modal4 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer4
}

interface ModalWithTitleAndButtonRenderer4 {
    title?: Title7
    content?: Content9
    button?: Button4
}

interface Title7 {
    runs?: Run21[]
}

interface Run21 {
    text?: string
}

interface Content9 {
    runs?: Run22[]
}

interface Run22 {
    text?: string
}

interface Button4 {
    buttonRenderer?: ButtonRenderer5
}

interface ButtonRenderer5 {
    style?: string
    isDisabled?: boolean
    text?: Text9
    navigationEndpoint?: NavigationEndpoint13
    trackingParams?: string
}

interface Text9 {
    runs?: Run23[]
}

interface Run23 {
    text?: string
}

interface NavigationEndpoint13 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint4
}

interface SignInEndpoint4 {
    hack?: boolean
}

interface WatchEndpoint6 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext5
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs5
}

interface LoggingContext5 {
    vssLoggingContext?: VssLoggingContext5
}

interface VssLoggingContext5 {
    serializedContextData?: string
}

interface WatchEndpointMusicSupportedConfigs5 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig5
}

interface WatchEndpointMusicConfig5 {
    musicVideoType?: string
}

interface MenuServiceItemRenderer2 {
    text?: Text10
    icon?: Icon4
    serviceEndpoint?: ServiceEndpoint2
    trackingParams?: string
}

interface Text10 {
    runs?: Run24[]
}

interface Run24 {
    text?: string
}

interface Icon4 {
    iconType?: string
}

interface ServiceEndpoint2 {
    clickTrackingParams?: string
    queueAddEndpoint?: QueueAddEndpoint2
}

interface QueueAddEndpoint2 {
    queueTarget?: QueueTarget2
    queueInsertPosition?: string
    commands?: Command2[]
}

interface QueueTarget2 {
    playlistId?: string
    onEmptyQueue?: OnEmptyQueue2
    videoId?: string
}

interface OnEmptyQueue2 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint7
}

interface WatchEndpoint7 {
    playlistId?: string
    videoId?: string
}

interface Command2 {
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

interface ToggleMenuServiceItemRenderer {
    defaultText?: DefaultText
    defaultIcon?: DefaultIcon
    defaultServiceEndpoint?: DefaultServiceEndpoint
    toggledText?: ToggledText
    toggledIcon?: ToggledIcon
    trackingParams?: string
    toggledServiceEndpoint?: ToggledServiceEndpoint
}

interface DefaultText {
    runs?: Run26[]
}

interface Run26 {
    text?: string
}

interface DefaultIcon {
    iconType?: string
}

interface DefaultServiceEndpoint {
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
    title?: Title8
    content?: Content10
    button?: Button5
}

interface Title8 {
    runs?: Run27[]
}

interface Run27 {
    text?: string
}

interface Content10 {
    runs?: Run28[]
}

interface Run28 {
    text?: string
}

interface Button5 {
    buttonRenderer?: ButtonRenderer6
}

interface ButtonRenderer6 {
    style?: string
    isDisabled?: boolean
    text?: Text11
    navigationEndpoint?: NavigationEndpoint14
    trackingParams?: string
}

interface Text11 {
    runs?: Run29[]
}

interface Run29 {
    text?: string
}

interface NavigationEndpoint14 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint5
}

interface SignInEndpoint5 {
    hack?: boolean
}

interface ToggledText {
    runs?: Run30[]
}

interface Run30 {
    text?: string
}

interface ToggledIcon {
    iconType?: string
}

interface ToggledServiceEndpoint {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint
}

interface LikeEndpoint {
    status?: string
    target?: Target2
}

interface Target2 {
    playlistId?: string
}

interface Accessibility2 {
    accessibilityData?: AccessibilityData8
}

interface AccessibilityData8 {
    label?: string
}

interface ThumbnailOverlay {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer2
}

interface MusicItemThumbnailOverlayRenderer2 {
    background?: Background2
    content?: Content11
    contentPosition?: string
    displayStyle?: string
}

interface Background2 {
    verticalGradient?: VerticalGradient2
}

interface VerticalGradient2 {
    gradientLayerColors?: string[]
}

interface Content11 {
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
    watchPlaylistEndpoint?: WatchPlaylistEndpoint2
    watchEndpoint?: WatchEndpoint8
}

interface WatchPlaylistEndpoint2 {
    playlistId?: string
    params?: string
}

interface WatchEndpoint8 {
    videoId?: string
    playlistId?: string
    index?: number
    loggingContext?: LoggingContext6
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs6
}

interface LoggingContext6 {
    vssLoggingContext?: VssLoggingContext6
}

interface VssLoggingContext6 {
    serializedContextData?: string
}

interface WatchEndpointMusicSupportedConfigs6 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig6
}

interface WatchEndpointMusicConfig6 {
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
    accessibilityData?: AccessibilityData9
}

interface AccessibilityData9 {
    label?: string
}

interface AccessibilityPauseData2 {
    accessibilityData?: AccessibilityData10
}

interface AccessibilityData10 {
    label?: string
}

interface SubtitleBadge {
    musicInlineBadgeRenderer?: MusicInlineBadgeRenderer
}

interface MusicInlineBadgeRenderer {
    trackingParams?: string
    icon?: Icon5
    accessibilityData?: AccessibilityData11
}

interface Icon5 {
    iconType?: string
}

interface AccessibilityData11 {
    accessibilityData?: AccessibilityData12
}

interface AccessibilityData12 {
    label?: string
}

interface MusicDescriptionShelfRenderer {
    header?: Header2
    subheader?: Subheader
    description?: Description
    moreButton?: MoreButton
    trackingParams?: string
}

interface Header2 {
    runs?: Run31[]
}

interface Run31 {
    text?: string
}

interface Subheader {
    runs?: Run32[]
}

interface Run32 {
    text?: string
}

interface Description {
    runs?: Run33[]
}

interface Run33 {
    text?: string
}

interface MoreButton {
    toggleButtonRenderer?: ToggleButtonRenderer
}

interface ToggleButtonRenderer {
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon2
    defaultText?: DefaultText2
    toggledIcon?: ToggledIcon2
    toggledText?: ToggledText2
    trackingParams?: string
}

interface DefaultIcon2 {
    iconType?: string
}

interface DefaultText2 {
    runs?: Run34[]
}

interface Run34 {
    text?: string
}

interface ToggledIcon2 {
    iconType?: string
}

interface ToggledText2 {
    runs?: Run35[]
}

interface Run35 {
    text?: string
}

interface Header3 {
    musicImmersiveHeaderRenderer?: MusicImmersiveHeaderRenderer
}

interface MusicImmersiveHeaderRenderer {
    title?: Title9
    subscriptionButton?: SubscriptionButton
    description?: Description2
    moreButton?: MoreButton2
    menu?: Menu3
    thumbnail?: Thumbnail6
    trackingParams?: string
    playButton?: PlayButton
    startRadioButton?: StartRadioButton
    shareEndpoint?: ShareEndpoint
}

interface Title9 {
    runs?: Run36[]
}

interface Run36 {
    text?: string
}

interface SubscriptionButton {
    subscribeButtonRenderer?: SubscribeButtonRenderer
}

interface SubscribeButtonRenderer {
    subscriberCountText?: SubscriberCountText
    subscribed?: boolean
    enabled?: boolean
    type?: string
    channelId?: string
    showPreferences?: boolean
    subscriberCountWithSubscribeText?: SubscriberCountWithSubscribeText
    subscribedButtonText?: SubscribedButtonText
    unsubscribedButtonText?: UnsubscribedButtonText
    trackingParams?: string
    unsubscribeButtonText?: UnsubscribeButtonText
    serviceEndpoints?: ServiceEndpoint3[]
    longSubscriberCountText?: LongSubscriberCountText
    shortSubscriberCountText?: ShortSubscriberCountText
    subscribeAccessibility?: SubscribeAccessibility
    unsubscribeAccessibility?: UnsubscribeAccessibility
    signInEndpoint?: SignInEndpoint6
}

interface SubscriberCountText {
    runs?: Run37[]
}

interface Run37 {
    text?: string
}

interface SubscriberCountWithSubscribeText {
    runs?: Run38[]
}

interface Run38 {
    text?: string
}

interface SubscribedButtonText {
    runs?: Run39[]
}

interface Run39 {
    text?: string
}

interface UnsubscribedButtonText {
    runs?: Run40[]
}

interface Run40 {
    text?: string
}

interface UnsubscribeButtonText {
    runs?: Run41[]
}

interface Run41 {
    text?: string
}

interface ServiceEndpoint3 {
    clickTrackingParams?: string
    subscribeEndpoint?: SubscribeEndpoint
    signalServiceEndpoint?: SignalServiceEndpoint
}

interface SubscribeEndpoint {
    channelIds?: string[]
    params?: string
}

interface SignalServiceEndpoint {
    signal?: string
    actions?: Action[]
}

interface Action {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction
}

interface OpenPopupAction {
    popup?: Popup
    popupType?: string
}

interface Popup {
    confirmDialogRenderer?: ConfirmDialogRenderer
}

interface ConfirmDialogRenderer {
    trackingParams?: string
    dialogMessages?: DialogMessage[]
    confirmButton?: ConfirmButton
    cancelButton?: CancelButton
}

interface DialogMessage {
    runs?: Run42[]
}

interface Run42 {
    text?: string
}

interface ConfirmButton {
    buttonRenderer?: ButtonRenderer7
}

interface ButtonRenderer7 {
    style?: string
    size?: string
    text?: Text12
    serviceEndpoint?: ServiceEndpoint4
    trackingParams?: string
}

interface Text12 {
    runs?: Run43[]
}

interface Run43 {
    text?: string
}

interface ServiceEndpoint4 {
    clickTrackingParams?: string
    unsubscribeEndpoint?: UnsubscribeEndpoint
}

interface UnsubscribeEndpoint {
    channelIds?: string[]
}

interface CancelButton {
    buttonRenderer?: ButtonRenderer8
}

interface ButtonRenderer8 {
    style?: string
    size?: string
    text?: Text13
    trackingParams?: string
}

interface Text13 {
    runs?: Run44[]
}

interface Run44 {
    text?: string
}

interface LongSubscriberCountText {
    runs?: Run45[]
    accessibility?: Accessibility3
}

interface Run45 {
    text?: string
}

interface Accessibility3 {
    accessibilityData?: AccessibilityData13
}

interface AccessibilityData13 {
    label?: string
}

interface ShortSubscriberCountText {
    runs?: Run46[]
}

interface Run46 {
    text?: string
}

interface SubscribeAccessibility {
    accessibilityData?: AccessibilityData14
}

interface AccessibilityData14 {
    label?: string
}

interface UnsubscribeAccessibility {
    accessibilityData?: AccessibilityData15
}

interface AccessibilityData15 {
    label?: string
}

interface SignInEndpoint6 {
    clickTrackingParams?: string
    modalEndpoint?: ModalEndpoint6
}

interface ModalEndpoint6 {
    modal?: Modal6
}

interface Modal6 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer6
}

interface ModalWithTitleAndButtonRenderer6 {
    title?: Title10
    content?: Content12
    button?: Button6
}

interface Title10 {
    runs?: Run47[]
}

interface Run47 {
    text?: string
}

interface Content12 {
    runs?: Run48[]
}

interface Run48 {
    text?: string
}

interface Button6 {
    buttonRenderer?: ButtonRenderer9
}

interface ButtonRenderer9 {
    style?: string
    isDisabled?: boolean
    text?: Text14
    navigationEndpoint?: NavigationEndpoint15
    trackingParams?: string
}

interface Text14 {
    runs?: Run49[]
}

interface Run49 {
    text?: string
}

interface NavigationEndpoint15 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint7
}

interface SignInEndpoint7 {
    hack?: boolean
}

interface Description2 {
    runs?: Run50[]
}

interface Run50 {
    text?: string
}

interface MoreButton2 {
    toggleButtonRenderer?: ToggleButtonRenderer2
}

interface ToggleButtonRenderer2 {
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon3
    defaultText?: DefaultText3
    toggledIcon?: ToggledIcon3
    toggledText?: ToggledText3
    trackingParams?: string
}

interface DefaultIcon3 {
    iconType?: string
}

interface DefaultText3 {
    runs?: Run51[]
}

interface Run51 {
    text?: string
}

interface ToggledIcon3 {
    iconType?: string
}

interface ToggledText3 {
    runs?: Run52[]
}

interface Run52 {
    text?: string
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
}

interface MenuNavigationItemRenderer3 {
    text?: Text15
    icon?: Icon6
    navigationEndpoint?: NavigationEndpoint16
    trackingParams?: string
}

interface Text15 {
    runs?: Run53[]
}

interface Run53 {
    text?: string
}

interface Icon6 {
    iconType?: string
}

interface NavigationEndpoint16 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint3
}

interface ShareEntityEndpoint3 {
    serializedShareEntity?: string
    sharePanelType?: string
}

interface Accessibility4 {
    accessibilityData?: AccessibilityData16
}

interface AccessibilityData16 {
    label?: string
}

interface Thumbnail6 {
    musicThumbnailRenderer?: MusicThumbnailRenderer3
}

interface MusicThumbnailRenderer3 {
    thumbnail?: Thumbnail7
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
}

interface Thumbnail7 {
    thumbnails?: Thumbnail8[]
}

interface Thumbnail8 {
    url?: string
    width?: number
    height?: number
}

interface PlayButton {
    buttonRenderer?: ButtonRenderer10
}

interface ButtonRenderer10 {
    style?: string
    size?: string
    text?: Text16
    icon?: Icon7
    navigationEndpoint?: NavigationEndpoint17
    accessibility?: Accessibility5
    trackingParams?: string
    accessibilityData?: AccessibilityData17
}

interface Text16 {
    runs?: Run54[]
}

interface Run54 {
    text?: string
}

interface Icon7 {
    iconType?: string
}

interface NavigationEndpoint17 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint9
}

interface WatchEndpoint9 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext7
}

interface LoggingContext7 {
    vssLoggingContext?: VssLoggingContext7
}

interface VssLoggingContext7 {
    serializedContextData?: string
}

interface Accessibility5 {
    label?: string
}

interface AccessibilityData17 {
    accessibilityData?: AccessibilityData18
}

interface AccessibilityData18 {
    label?: string
}

interface StartRadioButton {
    buttonRenderer?: ButtonRenderer11
}

interface ButtonRenderer11 {
    text?: Text17
    icon?: Icon8
    navigationEndpoint?: NavigationEndpoint18
    accessibility?: Accessibility6
    trackingParams?: string
}

interface Text17 {
    runs?: Run55[]
}

interface Run55 {
    text?: string
}

interface Icon8 {
    iconType?: string
}

interface NavigationEndpoint18 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint10
}

interface WatchEndpoint10 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext8
}

interface LoggingContext8 {
    vssLoggingContext?: VssLoggingContext8
}

interface VssLoggingContext8 {
    serializedContextData?: string
}

interface Accessibility6 {
    label?: string
}

interface ShareEndpoint {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint4
}

interface ShareEntityEndpoint4 {
    serializedShareEntity?: string
    sharePanelType?: string
}

interface Overlay2 {
    mealbarPromoRenderer?: MealbarPromoRenderer
}

interface MealbarPromoRenderer {
    messageTexts?: MessageText[]
    actionButton?: ActionButton
    dismissButton?: DismissButton
    triggerCondition?: string
    style?: string
    trackingParams?: string
    impressionEndpoints?: ImpressionEndpoint[]
    isVisible?: boolean
    messageTitle?: MessageTitle
}

interface MessageText {
    runs?: Run56[]
}

interface Run56 {
    text?: string
}

interface ActionButton {
    buttonRenderer?: ButtonRenderer12
}

interface ButtonRenderer12 {
    style?: string
    size?: string
    text?: Text18
    serviceEndpoint?: ServiceEndpoint5
    trackingParams?: string
}

interface Text18 {
    runs?: Run57[]
}

interface Run57 {
    text?: string
}

interface ServiceEndpoint5 {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand
}

interface CommandExecutorCommand {
    commands?: Command3[]
}

interface Command3 {
    clickTrackingParams?: string
    musicShowInstallPromptCommand?: MusicShowInstallPromptCommand
    feedbackEndpoint?: FeedbackEndpoint
}

interface MusicShowInstallPromptCommand {
    installationSource?: string
}

interface FeedbackEndpoint {
    feedbackToken?: string
    uiActions?: UiActions
}

interface UiActions {
    hideEnclosingContainer?: boolean
}

interface DismissButton {
    buttonRenderer?: ButtonRenderer13
}

interface ButtonRenderer13 {
    style?: string
    size?: string
    text?: Text19
    serviceEndpoint?: ServiceEndpoint6
    trackingParams?: string
}

interface Text19 {
    runs?: Run58[]
}

interface Run58 {
    text?: string
}

interface ServiceEndpoint6 {
    clickTrackingParams?: string
    feedbackEndpoint?: FeedbackEndpoint2
}

interface FeedbackEndpoint2 {
    feedbackToken?: string
    uiActions?: UiActions2
}

interface UiActions2 {
    hideEnclosingContainer?: boolean
}

interface ImpressionEndpoint {
    clickTrackingParams?: string
    feedbackEndpoint?: FeedbackEndpoint3
}

interface FeedbackEndpoint3 {
    feedbackToken?: string
    uiActions?: UiActions3
}

interface UiActions3 {
    hideEnclosingContainer?: boolean
}

interface MessageTitle {
    runs?: Run59[]
}

interface Run59 {
    text?: string
}
