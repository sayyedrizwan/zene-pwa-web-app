export interface YTMusicSearchSuggestions {
    contents?: Content[]
    trackingParams?: string
}

interface Content {
    searchSuggestionsSectionRenderer?: SearchSuggestionsSectionRenderer
}

interface SearchSuggestionsSectionRenderer {
    contents?: Content2[]
}

interface Content2 {
    searchSuggestionRenderer?: SearchSuggestionRenderer
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
}

interface SearchSuggestionRenderer {
    suggestion?: Suggestion
    navigationEndpoint?: NavigationEndpoint
    trackingParams?: string
    icon?: Icon
}

interface Suggestion {
    runs?: Run[]
}

interface Run {
    text?: string
    bold?: boolean
}

interface NavigationEndpoint {
    clickTrackingParams?: string
    searchEndpoint?: SearchEndpoint
}

interface SearchEndpoint {
    query?: string
}

interface Icon {
    iconType?: string
}

interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail
    overlay?: Overlay
    flexColumns?: FlexColumn[]
    menu?: Menu
    playlistItemData?: PlaylistItemData
    flexColumnDisplayStyle?: string
    navigationEndpoint?: NavigationEndpoint8
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
    content?: Content3
    contentPosition?: string
    displayStyle?: string
}

interface Background {
    verticalGradient?: VerticalGradient
}

interface VerticalGradient {
    gradientLayerColors?: string[]
}

interface Content3 {
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
    watchPlaylistEndpoint?: WatchPlaylistEndpoint
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

interface WatchPlaylistEndpoint {
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
    browseEndpoint?: BrowseEndpoint
    watchEndpoint?: WatchEndpoint2
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
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
}

interface MenuNavigationItemRenderer {
    text?: Text2
    icon?: Icon2
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
}

interface Text2 {
    runs?: Run3[]
}

interface Run3 {
    text?: string
}

interface Icon2 {
    iconType?: string
}

interface NavigationEndpoint3 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint2
    modalEndpoint?: ModalEndpoint
    watchEndpoint?: WatchEndpoint3
    watchPlaylistEndpoint?: WatchPlaylistEndpoint2
}

interface ShareEntityEndpoint {
    serializedShareEntity?: string
    sharePanelType?: string
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

interface ModalEndpoint {
    modal?: Modal
}

interface Modal {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
}

interface ModalWithTitleAndButtonRenderer {
    title?: Title
    content?: Content4
    button?: Button
}

interface Title {
    runs?: Run4[]
}

interface Run4 {
    text?: string
}

interface Content4 {
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
    loggingContext?: LoggingContext
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
}

interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
}

interface VssLoggingContext {
    serializedContextData?: string
}

interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig3
}

interface WatchEndpointMusicConfig3 {
    musicVideoType?: string
}

interface WatchPlaylistEndpoint2 {
    playlistId?: string
    params?: string
}

interface MenuServiceItemRenderer {
    text?: Text4
    icon?: Icon3
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
}

interface Text4 {
    runs?: Run7[]
}

interface Run7 {
    text?: string
}

interface Icon3 {
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
    videoId?: string
}

interface OnEmptyQueue {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint4
}

interface WatchEndpoint4 {
    playlistId?: string
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
    runs?: Run9[]
}

interface Run9 {
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
    title?: Title2
    content?: Content5
    button?: Button2
}

interface Title2 {
    runs?: Run10[]
}

interface Run10 {
    text?: string
}

interface Content5 {
    runs?: Run11[]
}

interface Run11 {
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
    runs?: Run12[]
}

interface Run12 {
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
    runs?: Run13[]
}

interface Run13 {
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

interface TopLevelButton {
    likeButtonRenderer?: LikeButtonRenderer
}

interface LikeButtonRenderer {
    target?: Target2
    likeStatus?: string
    trackingParams?: string
    likesAllowed?: boolean
    dislikeNavigationEndpoint?: DislikeNavigationEndpoint
    likeCommand?: LikeCommand
}

interface Target2 {
    videoId?: string
}

interface DislikeNavigationEndpoint {
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
    title?: Title3
    content?: Content6
    button?: Button3
}

interface Title3 {
    runs?: Run14[]
}

interface Run14 {
    text?: string
}

interface Content6 {
    runs?: Run15[]
}

interface Run15 {
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
    runs?: Run16[]
}

interface Run16 {
    text?: string
}

interface NavigationEndpoint6 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint3
}

interface SignInEndpoint3 {
    hack?: boolean
}

interface LikeCommand {
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
    text?: Text7
    navigationEndpoint?: NavigationEndpoint7
    trackingParams?: string
}

interface Text7 {
    runs?: Run19[]
}

interface Run19 {
    text?: string
}

interface NavigationEndpoint7 {
    clickTrackingParams?: string
    signInEndpoint?: SignInEndpoint4
}

interface SignInEndpoint4 {
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

interface NavigationEndpoint8 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint5
    browseEndpoint?: BrowseEndpoint3
}

interface WatchEndpoint5 {
    videoId?: string
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs4
}

interface WatchEndpointMusicSupportedConfigs4 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig4
}

interface WatchEndpointMusicConfig4 {
    musicVideoType?: string
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
