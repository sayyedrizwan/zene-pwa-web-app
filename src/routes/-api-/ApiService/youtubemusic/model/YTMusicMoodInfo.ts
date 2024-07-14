export interface YTMusicMoodInfo {
    contents?: Contents
    header?: Header2
    trackingParams?: string
    maxAgeStoreSeconds?: number
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
    musicCarouselShelfRenderer?: MusicCarouselShelfRenderer
}

interface MusicCarouselShelfRenderer {
    header?: Header
    contents?: Content3[]
    trackingParams?: string
    itemSize?: string
}

interface Header {
    musicCarouselShelfBasicHeaderRenderer?: MusicCarouselShelfBasicHeaderRenderer
}

interface MusicCarouselShelfBasicHeaderRenderer {
    title?: Title
    accessibilityData?: AccessibilityData
    headerStyle?: string
    moreContentButton?: MoreContentButton
    trackingParams?: string
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
}

interface AccessibilityData {
    accessibilityData?: AccessibilityData2
}

interface AccessibilityData2 {
    label?: string
}

interface MoreContentButton {
    buttonRenderer?: ButtonRenderer
}

interface ButtonRenderer {
    style?: string
    text?: Text
    navigationEndpoint?: NavigationEndpoint2
    trackingParams?: string
    accessibilityData?: AccessibilityData3
}

interface Text {
    runs?: Run2[]
}

interface Run2 {
    text?: string
}

interface NavigationEndpoint2 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint2
}

interface BrowseEndpoint2 {
    browseId?: string
    params?: string
}

interface AccessibilityData3 {
    accessibilityData?: AccessibilityData4
}

interface AccessibilityData4 {
    label?: string
}

interface Content3 {
    musicTwoRowItemRenderer?: MusicTwoRowItemRenderer
}

interface MusicTwoRowItemRenderer {
    thumbnailRenderer?: ThumbnailRenderer
    aspectRatio?: string
    title?: Title2
    subtitle?: Subtitle
    navigationEndpoint?: NavigationEndpoint4
    trackingParams?: string
    menu?: Menu
    thumbnailOverlay?: ThumbnailOverlay
}

interface ThumbnailRenderer {
    musicThumbnailRenderer?: MusicThumbnailRenderer
}

interface MusicThumbnailRenderer {
    thumbnail?: Thumbnail
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
}

interface Thumbnail {
    thumbnails?: Thumbnail2[]
}

interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
}

interface Title2 {
    runs?: Run3[]
}

interface Run3 {
    text?: string
    navigationEndpoint?: NavigationEndpoint3
}

interface NavigationEndpoint3 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint3
}

interface BrowseEndpoint3 {
    browseId?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs
}

interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig
}

interface BrowseEndpointContextMusicConfig {
    pageType?: string
}

interface Subtitle {
    runs?: Run4[]
}

interface Run4 {
    text?: string
}

interface NavigationEndpoint4 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint4
}

interface BrowseEndpoint4 {
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
    text?: Text2
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint5
    trackingParams?: string
}

interface Text2 {
    runs?: Run5[]
}

interface Run5 {
    text?: string
}

interface Icon {
    iconType?: string
}

interface NavigationEndpoint5 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    modalEndpoint?: ModalEndpoint
    watchPlaylistEndpoint?: WatchPlaylistEndpoint
}

interface ShareEntityEndpoint {
    serializedShareEntity?: string
    sharePanelType?: string
}

interface ModalEndpoint {
    modal?: Modal
}

interface Modal {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
}

interface ModalWithTitleAndButtonRenderer {
    title?: Title3
    content?: Content4
    button?: Button
}

interface Title3 {
    runs?: Run6[]
}

interface Run6 {
    text?: string
}

interface Content4 {
    runs?: Run7[]
}

interface Run7 {
    text?: string
}

interface Button {
    buttonRenderer?: ButtonRenderer2
}

interface ButtonRenderer2 {
    style?: string
    isDisabled?: boolean
    text?: Text3
    navigationEndpoint?: NavigationEndpoint6
    trackingParams?: string
}

interface Text3 {
    runs?: Run8[]
}

interface Run8 {
    text?: string
}

interface NavigationEndpoint6 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint
}

interface SignInEndpoint {
    hack?: boolean
}

interface WatchPlaylistEndpoint {
    playlistId?: string
    params?: string
}

interface MenuServiceItemRenderer {
    text?: Text4
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
}

interface Text4 {
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
    playlistId?: string
    onEmptyQueue?: OnEmptyQueue
}

interface OnEmptyQueue {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint
}

interface WatchEndpoint {
    playlistId?: string
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
    toggledServiceEndpoint?: ToggledServiceEndpoint
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
    title?: Title4
    content?: Content5
    button?: Button2
}

interface Title4 {
    runs?: Run12[]
}

interface Run12 {
    text?: string
}

interface Content5 {
    runs?: Run13[]
}

interface Run13 {
    text?: string
}

interface Button2 {
    buttonRenderer?: ButtonRenderer3
}

interface ButtonRenderer3 {
    style?: string
    isDisabled?: boolean
    text?: Text5
    navigationEndpoint?: NavigationEndpoint7
    trackingParams?: string
}

interface Text5 {
    runs?: Run14[]
}

interface Run14 {
    text?: string
}

interface NavigationEndpoint7 {
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

interface ToggledServiceEndpoint {
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

interface Accessibility {
    accessibilityData?: AccessibilityData5
}

interface AccessibilityData5 {
    label?: string
}

interface ThumbnailOverlay {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
}

interface MusicItemThumbnailOverlayRenderer {
    background?: Background
    content?: Content6
    contentPosition?: string
    displayStyle?: string
}

interface Background {
    verticalGradient?: VerticalGradient
}

interface VerticalGradient {
    gradientLayerColors?: string[]
}

interface Content6 {
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
    accessibilityData?: AccessibilityData6
}

interface AccessibilityData6 {
    label?: string
}

interface AccessibilityPauseData {
    accessibilityData?: AccessibilityData7
}

interface AccessibilityData7 {
    label?: string
}

interface Header2 {
    musicHeaderRenderer?: MusicHeaderRenderer
}

interface MusicHeaderRenderer {
    title?: Title5
    trackingParams?: string
}

interface Title5 {
    runs?: Run16[]
}

interface Run16 {
    text?: string
}
