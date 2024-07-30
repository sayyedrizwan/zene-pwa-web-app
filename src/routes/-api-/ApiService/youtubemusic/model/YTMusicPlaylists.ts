export interface YTMusicPlaylists {
    contents?: Contents
    trackingParams?: string
}

interface Contents {
    sectionListRenderer?: SectionListRenderer
}

interface SectionListRenderer {
    contents?: Content[]
    trackingParams?: string
}

interface Content {
    musicCarouselShelfRenderer?: MusicCarouselShelfRenderer
    musicDescriptionShelfRenderer?: MusicDescriptionShelfRenderer
}

interface MusicCarouselShelfRenderer {
    header?: Header
    contents?: Content2[]
    trackingParams?: string
    itemSize?: string
    numItemsPerColumn?: string
    fullbleedStyle?: string
}

interface Header {
    musicCarouselShelfBasicHeaderRenderer?: MusicCarouselShelfBasicHeaderRenderer
}

interface MusicCarouselShelfBasicHeaderRenderer {
    title?: Title
    accessibilityData?: AccessibilityData
    headerStyle?: string
    trackingParams?: string
    strapline?: Strapline
    thumbnail?: Thumbnail
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
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs
}

interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig
}

interface BrowseEndpointContextMusicConfig {
    pageType?: string
}

interface AccessibilityData {
    accessibilityData?: AccessibilityData2
}

interface AccessibilityData2 {
    label?: string
}

interface Strapline {
    runs?: Run2[]
}

interface Run2 {
    text?: string
}

interface Thumbnail {
    musicThumbnailRenderer?: MusicThumbnailRenderer
}

interface MusicThumbnailRenderer {
    thumbnail?: Thumbnail2
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData3
    onTap?: OnTap
}

interface Thumbnail2 {
    thumbnails?: Thumbnail3[]
}

interface Thumbnail3 {
    url?: string
    width?: number
    height?: number
}

interface AccessibilityData3 {
    accessibilityData?: AccessibilityData4
}

interface AccessibilityData4 {
    label?: string
}

interface OnTap {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint2
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

interface Content2 {
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
    musicTwoRowItemRenderer?: MusicTwoRowItemRenderer
}

interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail4
    flexColumns?: FlexColumn[]
    menu?: Menu
    playlistItemData?: PlaylistItemData
    flexColumnDisplayStyle?: string
    navigationEndpoint?: NavigationEndpoint6
    itemHeight?: string
    badges?: Badge[]
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

interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer?: MusicResponsiveListItemFlexColumnRenderer
}

interface MusicResponsiveListItemFlexColumnRenderer {
    text?: Text
    displayPriority?: string
}

interface Text {
    runs?: Run3[]
}

interface Run3 {
    text?: string
    navigationEndpoint?: NavigationEndpoint2
}

interface NavigationEndpoint2 {
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
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
}

interface Text2 {
    runs?: Run4[]
}

interface Run4 {
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
    watchEndpoint?: WatchEndpoint2
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
    content?: Content3
    button?: Button
}

interface Title2 {
    runs?: Run5[]
}

interface Run5 {
    text?: string
}

interface Content3 {
    runs?: Run6[]
}

interface Run6 {
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
    runs?: Run7[]
}

interface Run7 {
    text?: string
}

interface NavigationEndpoint4 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint
}

interface SignInEndpoint {
    hack?: boolean
}

interface WatchEndpoint2 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
}

interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
}

interface VssLoggingContext {
    serializedContextData?: string
}

interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig2
}

interface WatchEndpointMusicConfig2 {
    musicVideoType?: string
}

interface MenuServiceItemRenderer {
    text?: Text4
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
}

interface Text4 {
    runs?: Run8[]
}

interface Run8 {
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
    watchEndpoint?: WatchEndpoint3
}

interface WatchEndpoint3 {
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
    runs?: Run9[]
}

interface Run9 {
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
    runs?: Run10[]
}

interface Run10 {
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
    content?: Content4
    button?: Button2
}

interface Title3 {
    runs?: Run11[]
}

interface Run11 {
    text?: string
}

interface Content4 {
    runs?: Run12[]
}

interface Run12 {
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
    runs?: Run13[]
}

interface Run13 {
    text?: string
}

interface NavigationEndpoint5 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint2
}

interface SignInEndpoint2 {
    hack?: boolean
}

interface ToggledText {
    runs?: Run14[]
}

interface Run14 {
    text?: string
}

interface ToggledIcon {
    iconType?: string
}

interface ToggledServiceEndpoint {
    clickTrackingParams?: string
    feedbackEndpoint?: FeedbackEndpoint
}

interface FeedbackEndpoint {
    feedbackToken?: string
}

interface Accessibility {
    accessibilityData?: AccessibilityData5
}

interface AccessibilityData5 {
    label?: string
}

interface PlaylistItemData {
    videoId?: string
}

interface NavigationEndpoint6 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint4
}

interface WatchEndpoint4 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
}

interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig3
}

interface WatchEndpointMusicConfig3 {
    musicVideoType?: string
}

interface Badge {
    musicInlineBadgeRenderer?: MusicInlineBadgeRenderer
}

interface MusicInlineBadgeRenderer {
    trackingParams?: string
    icon?: Icon3
    accessibilityData?: AccessibilityData6
}

interface Icon3 {
    iconType?: string
}

interface AccessibilityData6 {
    accessibilityData?: AccessibilityData7
}

interface AccessibilityData7 {
    label?: string
}

interface MusicTwoRowItemRenderer {
    thumbnailRenderer?: ThumbnailRenderer
    aspectRatio?: string
    title?: Title4
    subtitle?: Subtitle
    navigationEndpoint?: NavigationEndpoint8
    trackingParams?: string
    menu?: Menu2
    thumbnailOverlay?: ThumbnailOverlay
    subtitleBadges?: SubtitleBadge[]
    thumbnailCornerOverlay?: ThumbnailCornerOverlay
}

interface ThumbnailRenderer {
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

interface Title4 {
    runs?: Run15[]
}

interface Run15 {
    text?: string
    navigationEndpoint?: NavigationEndpoint7
}

interface NavigationEndpoint7 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint4
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

interface Subtitle {
    runs?: Run16[]
}

interface Run16 {
    text?: string
}

interface NavigationEndpoint8 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint5
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
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer2
    menuServiceItemRenderer?: MenuServiceItemRenderer2
}

interface MenuNavigationItemRenderer2 {
    text?: Text6
    icon?: Icon4
    navigationEndpoint?: NavigationEndpoint9
    trackingParams?: string
}

interface Text6 {
    runs?: Run17[]
}

interface Run17 {
    text?: string
}

interface Icon4 {
    iconType?: string
}

interface NavigationEndpoint9 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint2
    browseEndpoint?: BrowseEndpoint6
    modalEndpoint?: ModalEndpoint3
    watchPlaylistEndpoint?: WatchPlaylistEndpoint
}

interface ShareEntityEndpoint2 {
    serializedShareEntity?: string
    sharePanelType?: string
}

interface BrowseEndpoint6 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs6
}

interface BrowseEndpointContextSupportedConfigs6 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig6
}

interface BrowseEndpointContextMusicConfig6 {
    pageType?: string
}

interface ModalEndpoint3 {
    modal?: Modal3
}

interface Modal3 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer3
}

interface ModalWithTitleAndButtonRenderer3 {
    title?: Title5
    content?: Content5
    button?: Button3
}

interface Title5 {
    runs?: Run18[]
}

interface Run18 {
    text?: string
}

interface Content5 {
    runs?: Run19[]
}

interface Run19 {
    text?: string
}

interface Button3 {
    buttonRenderer?: ButtonRenderer3
}

interface ButtonRenderer3 {
    style?: string
    isDisabled?: boolean
    text?: Text7
    navigationEndpoint?: NavigationEndpoint10
    trackingParams?: string
}

interface Text7 {
    runs?: Run20[]
}

interface Run20 {
    text?: string
}

interface NavigationEndpoint10 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint3
}

interface SignInEndpoint3 {
    hack?: boolean
}

interface WatchPlaylistEndpoint {
    playlistId?: string
    params?: string
}

interface ToggleMenuServiceItemRenderer2 {
    defaultText?: DefaultText2
    defaultIcon?: DefaultIcon2
    defaultServiceEndpoint?: DefaultServiceEndpoint2
    toggledText?: ToggledText2
    toggledIcon?: ToggledIcon2
    toggledServiceEndpoint?: ToggledServiceEndpoint2
    trackingParams?: string
}

interface DefaultText2 {
    runs?: Run21[]
}

interface Run21 {
    text?: string
}

interface DefaultIcon2 {
    iconType?: string
}

interface DefaultServiceEndpoint2 {
    clickTrackingParams?: string
    modalEndpoint?: ModalEndpoint4
}

interface ModalEndpoint4 {
    modal?: Modal4
}

interface Modal4 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer4
}

interface ModalWithTitleAndButtonRenderer4 {
    title?: Title6
    content?: Content6
    button?: Button4
}

interface Title6 {
    runs?: Run22[]
}

interface Run22 {
    text?: string
}

interface Content6 {
    runs?: Run23[]
}

interface Run23 {
    text?: string
}

interface Button4 {
    buttonRenderer?: ButtonRenderer4
}

interface ButtonRenderer4 {
    style?: string
    isDisabled?: boolean
    text?: Text8
    navigationEndpoint?: NavigationEndpoint11
    trackingParams?: string
}

interface Text8 {
    runs?: Run24[]
}

interface Run24 {
    text?: string
}

interface NavigationEndpoint11 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint4
}

interface SignInEndpoint4 {
    hack?: boolean
}

interface ToggledText2 {
    runs?: Run25[]
}

interface Run25 {
    text?: string
}

interface ToggledIcon2 {
    iconType?: string
}

interface ToggledServiceEndpoint2 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint
}

interface LikeEndpoint {
    status?: string
    target?: Target
}

interface Target {
    playlistId?: string
}

interface MenuServiceItemRenderer2 {
    text?: Text9
    icon?: Icon5
    serviceEndpoint?: ServiceEndpoint2
    trackingParams?: string
}

interface Text9 {
    runs?: Run26[]
}

interface Run26 {
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
    commands?: Command2[]
}

interface QueueTarget2 {
    playlistId?: string
    onEmptyQueue?: OnEmptyQueue2
}

interface OnEmptyQueue2 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint5
}

interface WatchEndpoint5 {
    playlistId?: string
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
    runs?: Run27[]
}

interface Run27 {
    text?: string
}

interface Accessibility2 {
    accessibilityData?: AccessibilityData8
}

interface AccessibilityData8 {
    label?: string
}

interface ThumbnailOverlay {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
}

interface MusicItemThumbnailOverlayRenderer {
    background?: Background
    content?: Content7
    contentPosition?: string
    displayStyle?: string
}

interface Background {
    verticalGradient?: VerticalGradient
}

interface VerticalGradient {
    gradientLayerColors?: string[]
}

interface Content7 {
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
    watchPlaylistEndpoint?: WatchPlaylistEndpoint2
}

interface WatchPlaylistEndpoint2 {
    playlistId?: string
    params?: string
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
    accessibilityData?: AccessibilityData9
}

interface AccessibilityData9 {
    label?: string
}

interface AccessibilityPauseData {
    accessibilityData?: AccessibilityData10
}

interface AccessibilityData10 {
    label?: string
}

interface SubtitleBadge {
    musicInlineBadgeRenderer?: MusicInlineBadgeRenderer2
}

interface MusicInlineBadgeRenderer2 {
    trackingParams?: string
    icon?: Icon6
    accessibilityData?: AccessibilityData11
}

interface Icon6 {
    iconType?: string
}

interface AccessibilityData11 {
    accessibilityData?: AccessibilityData12
}

interface AccessibilityData12 {
    label?: string
}

interface ThumbnailCornerOverlay {
    musicThumbnailRenderer?: MusicThumbnailRenderer4
}

interface MusicThumbnailRenderer4 {
    thumbnail?: Thumbnail9
    thumbnailCrop?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData13
    onTap?: OnTap2
}

interface Thumbnail9 {
    thumbnails?: Thumbnail10[]
}

interface Thumbnail10 {
    url?: string
    width?: number
    height?: number
}

interface AccessibilityData13 {
    accessibilityData?: AccessibilityData14
}

interface AccessibilityData14 {
    label?: string
}

interface OnTap2 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint7
}

interface BrowseEndpoint7 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs7
}

interface BrowseEndpointContextSupportedConfigs7 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig7
}

interface BrowseEndpointContextMusicConfig7 {
    pageType?: string
}

interface MusicDescriptionShelfRenderer {
    header?: Header2
    description?: Description
    moreButton?: MoreButton
    trackingParams?: string
    shelfStyle?: string
}

interface Header2 {
    runs?: Run28[]
}

interface Run28 {
    text?: string
}

interface Description {
    runs?: Run29[]
}

interface Run29 {
    text?: string
}

interface MoreButton {
    toggleButtonRenderer?: ToggleButtonRenderer
}

interface ToggleButtonRenderer {
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
    runs?: Run30[]
}

interface Run30 {
    text?: string
}

interface ToggledIcon3 {
    iconType?: string
}

interface ToggledText3 {
    runs?: Run31[]
}

interface Run31 {
    text?: string
}
