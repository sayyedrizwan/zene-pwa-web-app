export interface YTMusicReleasePlaylists {
    contents?: Contents
    trackingParams?: string
    background?: Background2
}

interface Contents {
    twoColumnBrowseResultsRenderer?: TwoColumnBrowseResultsRenderer
}

interface TwoColumnBrowseResultsRenderer {
    secondaryContents?: SecondaryContents
    tabs?: Tab[]
}

interface SecondaryContents {
    sectionListRenderer?: SectionListRenderer
}

interface SectionListRenderer {
    contents?: Content[]
    continuations?: Continuation[]
    trackingParams?: string
}

interface Content {
    musicPlaylistShelfRenderer?: MusicPlaylistShelfRenderer
}

interface MusicPlaylistShelfRenderer {
    playlistId?: string
    contents?: Content2[]
    collapsedItemCount?: number
    trackingParams?: string
    contentsMultiSelectable?: boolean
}

interface Content2 {
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
}

interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail
    overlay?: Overlay
    flexColumns?: FlexColumn[]
    fixedColumns?: FixedColumn[]
    menu?: Menu
    playlistItemData?: PlaylistItemData
    multiSelectCheckbox?: MultiSelectCheckbox
    badges?: Badge[]
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
}

interface WatchEndpoint {
    videoId?: string
    playlistId?: string
    params?: string
    playlistSetVideoId?: string
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
    runs?: Run[]
}

interface Run {
    text?: string
    navigationEndpoint?: NavigationEndpoint
}

interface NavigationEndpoint {
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
    playlistId?: string
    params?: string
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

interface FixedColumn {
    musicResponsiveListItemFixedColumnRenderer?: MusicResponsiveListItemFixedColumnRenderer
}

interface MusicResponsiveListItemFixedColumnRenderer {
    text?: Text2
    displayPriority?: string
    size?: string
}

interface Text2 {
    runs?: Run2[]
}

interface Run2 {
    text?: string
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
    text?: Text3
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint2
    trackingParams?: string
}

interface Text3 {
    runs?: Run3[]
}

interface Run3 {
    text?: string
}

interface Icon {
    iconType?: string
}

interface NavigationEndpoint2 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint2
    addToPlaylistEndpoint?: AddToPlaylistEndpoint
    watchEndpoint?: WatchEndpoint3
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

interface AddToPlaylistEndpoint {
    videoId?: string
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
    runs?: Run4[]
}

interface Run4 {
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
    runs?: Run5[]
}

interface Run5 {
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
    runs?: Run6[]
}

interface Run6 {
    text?: string
}

interface DefaultIcon {
    iconType?: string
}

interface DefaultServiceEndpoint {
    clickTrackingParams?: string
    feedbackEndpoint?: FeedbackEndpoint
}

interface FeedbackEndpoint {
    feedbackToken?: string
}

interface ToggledText {
    runs?: Run7[]
}

interface Run7 {
    text?: string
}

interface ToggledIcon {
    iconType?: string
}

interface ToggledServiceEndpoint {
    clickTrackingParams?: string
    feedbackEndpoint?: FeedbackEndpoint2
}

interface FeedbackEndpoint2 {
    feedbackToken?: string
}

interface TopLevelButton {
    likeButtonRenderer?: LikeButtonRenderer
}

interface LikeButtonRenderer {
    target?: Target
    likeStatus?: string
    trackingParams?: string
    likesAllowed?: boolean
    serviceEndpoints?: ServiceEndpoint2[]
}

interface Target {
    videoId?: string
}

interface ServiceEndpoint2 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint
}

interface LikeEndpoint {
    status?: string
    target?: Target2
    actions?: Action[]
}

interface Target2 {
    videoId?: string
}

interface Action {
    clickTrackingParams?: string
    musicLibraryStatusUpdateCommand?: MusicLibraryStatusUpdateCommand
}

interface MusicLibraryStatusUpdateCommand {
    libraryStatus?: string
    addToLibraryFeedbackToken?: string
}

interface Accessibility {
    accessibilityData?: AccessibilityData3
}

interface AccessibilityData3 {
    label?: string
}

interface PlaylistItemData {
    playlistSetVideoId?: string
    videoId?: string
}

interface MultiSelectCheckbox {
    checkboxRenderer?: CheckboxRenderer
}

interface CheckboxRenderer {
    onSelectionChangeCommand?: OnSelectionChangeCommand
    checkedState?: string
    trackingParams?: string
}

interface OnSelectionChangeCommand {
    clickTrackingParams?: string
    updateMultiSelectStateCommand?: UpdateMultiSelectStateCommand
}

interface UpdateMultiSelectStateCommand {
    multiSelectParams?: string
    multiSelectItem?: string
}

interface Badge {
    musicInlineBadgeRenderer?: MusicInlineBadgeRenderer
}

interface MusicInlineBadgeRenderer {
    trackingParams?: string
    icon?: Icon3
    accessibilityData?: AccessibilityData4
}

interface Icon3 {
    iconType?: string
}

interface AccessibilityData4 {
    accessibilityData?: AccessibilityData5
}

interface AccessibilityData5 {
    label?: string
}

interface Continuation {
    nextContinuationData?: NextContinuationData
}

interface NextContinuationData {
    continuation?: string
    clickTrackingParams?: string
}

interface Tab {
    tabRenderer?: TabRenderer
}

interface TabRenderer {
    content?: Content4
    trackingParams?: string
}

interface Content4 {
    sectionListRenderer?: SectionListRenderer2
}

interface SectionListRenderer2 {
    contents?: Content5[]
    trackingParams?: string
}

interface Content5 {
    musicResponsiveHeaderRenderer?: MusicResponsiveHeaderRenderer
}

interface MusicResponsiveHeaderRenderer {
    thumbnail?: Thumbnail4
    buttons?: Button[]
    title?: Title
    subtitle?: Subtitle
    trackingParams?: string
    straplineTextOne?: StraplineTextOne
    description?: Description
    secondSubtitle?: SecondSubtitle
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

interface Button {
    toggleButtonRenderer?: ToggleButtonRenderer
    musicPlayButtonRenderer?: MusicPlayButtonRenderer2
    menuRenderer?: MenuRenderer2
}

interface ToggleButtonRenderer {
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon2
    defaultServiceEndpoint?: DefaultServiceEndpoint2
    toggledIcon?: ToggledIcon2
    toggledServiceEndpoint?: ToggledServiceEndpoint2
    trackingParams?: string
    accessibilityData?: AccessibilityData6
    toggledAccessibilityData?: ToggledAccessibilityData
}

interface DefaultIcon2 {
    iconType?: string
}

interface DefaultServiceEndpoint2 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint2
}

interface LikeEndpoint2 {
    status?: string
    target?: Target3
}

interface Target3 {
    playlistId?: string
}

interface ToggledIcon2 {
    iconType?: string
}

interface ToggledServiceEndpoint2 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint3
}

interface LikeEndpoint3 {
    status?: string
    target?: Target4
}

interface Target4 {
    playlistId?: string
}

interface AccessibilityData6 {
    accessibilityData?: AccessibilityData7
}

interface AccessibilityData7 {
    label?: string
}

interface ToggledAccessibilityData {
    accessibilityData?: AccessibilityData8
}

interface AccessibilityData8 {
    label?: string
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
    accessibilityPlayData?: AccessibilityPlayData2
    accessibilityPauseData?: AccessibilityPauseData2
}

interface PlayNavigationEndpoint2 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint5
}

interface WatchEndpoint5 {
    videoId?: string
    playlistId?: string
    params?: string
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

interface MenuRenderer2 {
    items?: Item3[]
    trackingParams?: string
    accessibility?: Accessibility2
}

interface Item3 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer2
    menuServiceItemRenderer?: MenuServiceItemRenderer2
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer2
}

interface MenuNavigationItemRenderer2 {
    text?: Text5
    icon?: Icon4
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
}

interface Text5 {
    runs?: Run8[]
}

interface Run8 {
    text?: string
}

interface Icon4 {
    iconType?: string
}

interface NavigationEndpoint3 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint2
    addToPlaylistEndpoint?: AddToPlaylistEndpoint2
    watchPlaylistEndpoint?: WatchPlaylistEndpoint
}

interface ShareEntityEndpoint2 {
    serializedShareEntity?: string
    sharePanelType?: string
}

interface AddToPlaylistEndpoint2 {
    playlistId?: string
}

interface WatchPlaylistEndpoint {
    playlistId?: string
    params?: string
}

interface MenuServiceItemRenderer2 {
    text?: Text6
    icon?: Icon5
    serviceEndpoint?: ServiceEndpoint3
    trackingParams?: string
}

interface Text6 {
    runs?: Run9[]
}

interface Run9 {
    text?: string
}

interface Icon5 {
    iconType?: string
}

interface ServiceEndpoint3 {
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
    watchEndpoint?: WatchEndpoint6
}

interface WatchEndpoint6 {
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
    runs?: Run10[]
}

interface Run10 {
    text?: string
}

interface ToggleMenuServiceItemRenderer2 {
    defaultText?: DefaultText2
    defaultIcon?: DefaultIcon3
    defaultServiceEndpoint?: DefaultServiceEndpoint3
    toggledText?: ToggledText2
    toggledIcon?: ToggledIcon3
    toggledServiceEndpoint?: ToggledServiceEndpoint3
    trackingParams?: string
}

interface DefaultText2 {
    runs?: Run11[]
}

interface Run11 {
    text?: string
}

interface DefaultIcon3 {
    iconType?: string
}

interface DefaultServiceEndpoint3 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint4
}

interface LikeEndpoint4 {
    status?: string
    target?: Target5
}

interface Target5 {
    playlistId?: string
}

interface ToggledText2 {
    runs?: Run12[]
}

interface Run12 {
    text?: string
}

interface ToggledIcon3 {
    iconType?: string
}

interface ToggledServiceEndpoint3 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint5
}

interface LikeEndpoint5 {
    status?: string
    target?: Target6
}

interface Target6 {
    playlistId?: string
}

interface Accessibility2 {
    accessibilityData?: AccessibilityData11
}

interface AccessibilityData11 {
    label?: string
}

interface Title {
    runs?: Run13[]
}

interface Run13 {
    text?: string
}

interface Subtitle {
    runs?: Run14[]
}

interface Run14 {
    text?: string
}

interface StraplineTextOne {
    runs?: Run15[]
}

interface Run15 {
    text?: string
}

interface Description {
    musicDescriptionShelfRenderer?: MusicDescriptionShelfRenderer
}

interface MusicDescriptionShelfRenderer {
    description?: Description2
    moreButton?: MoreButton
    trackingParams?: string
    shelfStyle?: string
}

interface Description2 {
    runs?: Run16[]
}

interface Run16 {
    text?: string
    navigationEndpoint?: NavigationEndpoint4
    loggingDirectives?: LoggingDirectives
}

interface NavigationEndpoint4 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint3
}

interface BrowseEndpoint3 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
}

interface LoggingDirectives {
    trackingParams?: string
    enableDisplayloggerExperiment?: boolean
}

interface MoreButton {
    toggleButtonRenderer?: ToggleButtonRenderer2
}

interface ToggleButtonRenderer2 {
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon4
    defaultText?: DefaultText3
    toggledIcon?: ToggledIcon4
    toggledText?: ToggledText3
    trackingParams?: string
}

interface DefaultIcon4 {
    iconType?: string
}

interface DefaultText3 {
    runs?: Run17[]
}

interface Run17 {
    text?: string
}

interface ToggledIcon4 {
    iconType?: string
}

interface ToggledText3 {
    runs?: Run18[]
}

interface Run18 {
    text?: string
}

interface SecondSubtitle {
    runs?: Run19[]
}

interface Run19 {
    text?: string
}

interface Background2 {
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
