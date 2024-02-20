
export interface YtBrowsePlaylistsData {
    responseContext?: ResponseContext
    contents?: Contents
    header?: Header2
    trackingParams?: string
    microformat?: Microformat
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
    singleColumnBrowseResultsRenderer?: SingleColumnBrowseResultsRenderer
  }
  
  export interface SingleColumnBrowseResultsRenderer {
    tabs?: Tab[]
  }
  
  export interface Tab {
    tabRenderer?: TabRenderer
  }
  
  export interface TabRenderer {
    content?: Content
    trackingParams?: string
  }
  
  export interface Content {
    sectionListRenderer?: SectionListRenderer
  }
  
  export interface SectionListRenderer {
    contents?: Content2[]
    trackingParams?: string
  }
  
  export interface Content2 {
    musicShelfRenderer?: MusicShelfRenderer
    musicCarouselShelfRenderer?: MusicCarouselShelfRenderer
  }
  
  export interface MusicShelfRenderer {
    contents?: Content3[]
    trackingParams?: string
    shelfDivider?: ShelfDivider
    contentsMultiSelectable?: boolean
  }
  
  export interface Content3 {
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
  }
  
  export interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    flexColumns?: FlexColumn[]
    menu?: Menu
    badges?: Badge[]
    playlistItemData?: PlaylistItemData
    flexColumnDisplayStyle?: string
    navigationEndpoint?: NavigationEndpoint3
    itemHeight?: string
    index?: Index
    multiSelectCheckbox?: MultiSelectCheckbox
  }
  
  export interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer?: MusicResponsiveListItemFlexColumnRenderer
  }
  
  export interface MusicResponsiveListItemFlexColumnRenderer {
    text?: Text
    displayPriority?: string
  }
  
  export interface Text {
    runs?: Run[]
  }
  
  export interface Run {
    text?: string
    navigationEndpoint?: NavigationEndpoint
  }
  
  export interface NavigationEndpoint {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint
  }
  
  export interface WatchEndpoint {
    videoId?: string
    playlistId?: string
    loggingContext?: LoggingContext
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
  }
  
  export interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
  }
  
  export interface VssLoggingContext {
    serializedContextData?: string
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
    navigationEndpoint?: NavigationEndpoint2
    trackingParams?: string
  }
  
  export interface Text2 {
    runs?: Run2[]
  }
  
  export interface Run2 {
    text?: string
  }
  
  export interface Icon {
    iconType?: string
  }
  
  export interface NavigationEndpoint2 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint
    addToPlaylistEndpoint?: AddToPlaylistEndpoint
    watchEndpoint?: WatchEndpoint2
  }
  
  export interface ShareEntityEndpoint {
    serializedShareEntity?: string
    sharePanelType?: string
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
  
  export interface AddToPlaylistEndpoint {
    videoId?: string
  }
  
  export interface WatchEndpoint2 {
    videoId?: string
    playlistId?: string
    params?: string
    loggingContext?: LoggingContext2
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
  }
  
  export interface LoggingContext2 {
    vssLoggingContext?: VssLoggingContext2
  }
  
  export interface VssLoggingContext2 {
    serializedContextData?: string
  }
  
  export interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig2
  }
  
  export interface WatchEndpointMusicConfig2 {
    musicVideoType?: string
  }
  
  export interface MenuServiceItemRenderer {
    text?: Text3
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
  }
  
  export interface Text3 {
    runs?: Run3[]
  }
  
  export interface Run3 {
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
    runs?: Run4[]
  }
  
  export interface Run4 {
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
    runs?: Run5[]
  }
  
  export interface Run5 {
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
    runs?: Run6[]
  }
  
  export interface Run6 {
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
  }
  
  export interface Target2 {
    videoId?: string
  }
  
  export interface FeedbackEndpoint2 {
    feedbackToken?: string
  }
  
  export interface Accessibility {
    accessibilityData?: AccessibilityData
  }
  
  export interface AccessibilityData {
    label?: string
  }
  
  export interface Badge {
    musicInlineBadgeRenderer?: MusicInlineBadgeRenderer
  }
  
  export interface MusicInlineBadgeRenderer {
    trackingParams?: string
    icon?: Icon3
    accessibilityData?: AccessibilityData2
  }
  
  export interface Icon3 {
    iconType?: string
  }
  
  export interface AccessibilityData2 {
    accessibilityData?: AccessibilityData3
  }
  
  export interface AccessibilityData3 {
    label?: string
  }
  
  export interface PlaylistItemData {
    playlistSetVideoId?: string
    videoId?: string
  }
  
  export interface NavigationEndpoint3 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint4
  }
  
  export interface WatchEndpoint4 {
    videoId?: string
    playlistId?: string
    index?: number
    loggingContext?: LoggingContext3
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
    playlistSetVideoId?: string
  }
  
  export interface LoggingContext3 {
    vssLoggingContext?: VssLoggingContext3
  }
  
  export interface VssLoggingContext3 {
    serializedContextData?: string
  }
  
  export interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig?: WatchEndpointMusicConfig3
  }
  
  export interface WatchEndpointMusicConfig3 {
    musicVideoType?: string
  }
  
  export interface Index {
    runs?: Run7[]
  }
  
  export interface Run7 {
    text?: string
  }
  
  export interface MultiSelectCheckbox {
    checkboxRenderer?: CheckboxRenderer
  }
  
  export interface CheckboxRenderer {
    onSelectionChangeCommand?: OnSelectionChangeCommand
    checkedState?: string
    trackingParams?: string
  }
  
  export interface OnSelectionChangeCommand {
    clickTrackingParams?: string
    updateMultiSelectStateCommand?: UpdateMultiSelectStateCommand
  }
  
  export interface UpdateMultiSelectStateCommand {
    multiSelectParams?: string
    multiSelectItem?: string
  }
  
  export interface ShelfDivider {
    musicShelfDividerRenderer?: MusicShelfDividerRenderer
  }
  
  export interface MusicShelfDividerRenderer {
    hidden?: boolean
  }
  
  export interface MusicCarouselShelfRenderer {
    header?: Header
    contents?: Content4[]
    trackingParams?: string
    itemSize?: string
  }
  
  export interface Header {
    musicCarouselShelfBasicHeaderRenderer?: MusicCarouselShelfBasicHeaderRenderer
  }
  
  export interface MusicCarouselShelfBasicHeaderRenderer {
    title?: Title
    accessibilityData?: AccessibilityData4
    headerStyle?: string
    trackingParams?: string
  }
  
  export interface Title {
    runs?: Run8[]
  }
  
  export interface Run8 {
    text?: string
  }
  
  export interface AccessibilityData4 {
    accessibilityData?: AccessibilityData5
  }
  
  export interface AccessibilityData5 {
    label?: string
  }
  
  export interface Content4 {
    musicTwoRowItemRenderer?: MusicTwoRowItemRenderer
  }
  
  export interface MusicTwoRowItemRenderer {
    thumbnailRenderer?: ThumbnailRenderer
    aspectRatio?: string
    title?: Title2
    subtitle?: Subtitle
    navigationEndpoint?: NavigationEndpoint5
    trackingParams?: string
    menu?: Menu2
    thumbnailOverlay?: ThumbnailOverlay
  }
  
  export interface ThumbnailRenderer {
    musicThumbnailRenderer?: MusicThumbnailRenderer
  }
  
  export interface MusicThumbnailRenderer {
    thumbnail?: Thumbnail
    thumbnailCrop?: string
    thumbnailScale?: string
    trackingParams?: string
  }
  
  export interface Thumbnail {
    thumbnails?: Thumbnail2[]
  }
  
  export interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
  }
  
  export interface Title2 {
    runs?: Run9[]
  }
  
  export interface Run9 {
    text?: string
    navigationEndpoint?: NavigationEndpoint4
  }
  
  export interface NavigationEndpoint4 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint2
  }
  
  export interface BrowseEndpoint2 {
    browseId?: string
    params?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs2
  }
  
  export interface BrowseEndpointContextSupportedConfigs2 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig2
  }
  
  export interface BrowseEndpointContextMusicConfig2 {
    pageType?: string
  }
  
  export interface Subtitle {
    runs?: Run10[]
  }
  
  export interface Run10 {
    text?: string
  }
  
  export interface NavigationEndpoint5 {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint3
  }
  
  export interface BrowseEndpoint3 {
    browseId?: string
    params?: string
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs3
  }
  
  export interface BrowseEndpointContextSupportedConfigs3 {
    browseEndpointContextMusicConfig?: BrowseEndpointContextMusicConfig3
  }
  
  export interface BrowseEndpointContextMusicConfig3 {
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
    text?: Text4
    icon?: Icon4
    navigationEndpoint?: NavigationEndpoint6
    trackingParams?: string
  }
  
  export interface Text4 {
    runs?: Run11[]
  }
  
  export interface Run11 {
    text?: string
  }
  
  export interface Icon4 {
    iconType?: string
  }
  
  export interface NavigationEndpoint6 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint2
    browseEndpoint?: BrowseEndpoint4
    addToPlaylistEndpoint?: AddToPlaylistEndpoint2
    watchPlaylistEndpoint?: WatchPlaylistEndpoint
  }
  
  export interface ShareEntityEndpoint2 {
    serializedShareEntity?: string
    sharePanelType?: string
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
  
  export interface AddToPlaylistEndpoint2 {
    playlistId?: string
  }
  
  export interface WatchPlaylistEndpoint {
    playlistId?: string
    params?: string
  }
  
  export interface MenuServiceItemRenderer2 {
    text?: Text5
    icon?: Icon5
    serviceEndpoint?: ServiceEndpoint2
    trackingParams?: string
  }
  
  export interface Text5 {
    runs?: Run12[]
  }
  
  export interface Run12 {
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
    runs?: Run13[]
  }
  
  export interface Run13 {
    text?: string
  }
  
  export interface ToggleMenuServiceItemRenderer2 {
    defaultText?: DefaultText2
    defaultIcon?: DefaultIcon2
    defaultServiceEndpoint?: DefaultServiceEndpoint2
    toggledText?: ToggledText2
    toggledIcon?: ToggledIcon2
    toggledServiceEndpoint?: ToggledServiceEndpoint2
    trackingParams?: string
  }
  
  export interface DefaultText2 {
    runs?: Run14[]
  }
  
  export interface Run14 {
    text?: string
  }
  
  export interface DefaultIcon2 {
    iconType?: string
  }
  
  export interface DefaultServiceEndpoint2 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint3
  }
  
  export interface LikeEndpoint3 {
    status?: string
    target?: Target3
  }
  
  export interface Target3 {
    playlistId?: string
  }
  
  export interface ToggledText2 {
    runs?: Run15[]
  }
  
  export interface Run15 {
    text?: string
  }
  
  export interface ToggledIcon2 {
    iconType?: string
  }
  
  export interface ToggledServiceEndpoint2 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint4
  }
  
  export interface LikeEndpoint4 {
    status?: string
    target?: Target4
  }
  
  export interface Target4 {
    playlistId?: string
  }
  
  export interface Accessibility2 {
    accessibilityData?: AccessibilityData6
  }
  
  export interface AccessibilityData6 {
    label?: string
  }
  
  export interface ThumbnailOverlay {
    musicItemThumbnailOverlayRenderer?: MusicItemThumbnailOverlayRenderer
  }
  
  export interface MusicItemThumbnailOverlayRenderer {
    background?: Background
    content?: Content5
    contentPosition?: string
    displayStyle?: string
  }
  
  export interface Background {
    verticalGradient?: VerticalGradient
  }
  
  export interface VerticalGradient {
    gradientLayerColors?: string[]
  }
  
  export interface Content5 {
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
    accessibilityData?: AccessibilityData7
  }
  
  export interface AccessibilityData7 {
    label?: string
  }
  
  export interface AccessibilityPauseData {
    accessibilityData?: AccessibilityData8
  }
  
  export interface AccessibilityData8 {
    label?: string
  }
  
  export interface Header2 {
    musicDetailHeaderRenderer?: MusicDetailHeaderRenderer
  }
  
  export interface MusicDetailHeaderRenderer {
    title?: Title3
    subtitle?: Subtitle2
    menu?: Menu3
    thumbnail?: Thumbnail3
    trackingParams?: string
    description?: Description
    moreButton?: MoreButton
    subtitleBadges?: SubtitleBadge[]
    secondSubtitle?: SecondSubtitle
  }
  
  export interface Title3 {
    runs?: Run16[]
  }
  
  export interface Run16 {
    text?: string
  }
  
  export interface Subtitle2 {
    runs?: Run17[]
  }
  
  export interface Run17 {
    text?: string
    navigationEndpoint?: NavigationEndpoint7
  }
  
  export interface NavigationEndpoint7 {
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
  
  export interface Menu3 {
    menuRenderer?: MenuRenderer3
  }
  
  export interface MenuRenderer3 {
    items?: Item5[]
    trackingParams?: string
    topLevelButtons?: TopLevelButton[]
    accessibility?: Accessibility6
  }
  
  export interface Item5 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer3
    menuServiceItemRenderer?: MenuServiceItemRenderer3
  }
  
  export interface MenuNavigationItemRenderer3 {
    text?: Text6
    icon?: Icon6
    navigationEndpoint?: NavigationEndpoint8
    trackingParams?: string
  }
  
  export interface Text6 {
    runs?: Run18[]
  }
  
  export interface Run18 {
    text?: string
  }
  
  export interface Icon6 {
    iconType?: string
  }
  
  export interface NavigationEndpoint8 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint3
    browseEndpoint?: BrowseEndpoint6
    addToPlaylistEndpoint?: AddToPlaylistEndpoint3
    watchPlaylistEndpoint?: WatchPlaylistEndpoint3
  }
  
  export interface ShareEntityEndpoint3 {
    serializedShareEntity?: string
    sharePanelType?: string
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
  
  export interface AddToPlaylistEndpoint3 {
    playlistId?: string
  }
  
  export interface WatchPlaylistEndpoint3 {
    playlistId?: string
    params?: string
  }
  
  export interface MenuServiceItemRenderer3 {
    text?: Text7
    icon?: Icon7
    serviceEndpoint?: ServiceEndpoint3
    trackingParams?: string
  }
  
  export interface Text7 {
    runs?: Run19[]
  }
  
  export interface Run19 {
    text?: string
  }
  
  export interface Icon7 {
    iconType?: string
  }
  
  export interface ServiceEndpoint3 {
    clickTrackingParams?: string
    queueAddEndpoint?: QueueAddEndpoint3
  }
  
  export interface QueueAddEndpoint3 {
    queueTarget?: QueueTarget3
    queueInsertPosition?: string
    commands?: Command3[]
  }
  
  export interface QueueTarget3 {
    playlistId?: string
    onEmptyQueue?: OnEmptyQueue3
  }
  
  export interface OnEmptyQueue3 {
    clickTrackingParams?: string
    watchEndpoint?: WatchEndpoint6
  }
  
  export interface WatchEndpoint6 {
    playlistId?: string
  }
  
  export interface Command3 {
    clickTrackingParams?: string
    addToToastAction?: AddToToastAction3
  }
  
  export interface AddToToastAction3 {
    item?: Item6
  }
  
  export interface Item6 {
    notificationTextRenderer?: NotificationTextRenderer3
  }
  
  export interface NotificationTextRenderer3 {
    successResponseText?: SuccessResponseText3
    trackingParams?: string
  }
  
  export interface SuccessResponseText3 {
    runs?: Run20[]
  }
  
  export interface Run20 {
    text?: string
  }
  
  export interface TopLevelButton {
    buttonRenderer?: ButtonRenderer
    toggleButtonRenderer?: ToggleButtonRenderer
  }
  
  export interface ButtonRenderer {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text8
    icon?: Icon8
    navigationEndpoint?: NavigationEndpoint9
    accessibility?: Accessibility3
    trackingParams?: string
    accessibilityData?: AccessibilityData9
  }
  
  export interface Text8 {
    runs?: Run21[]
  }
  
  export interface Run21 {
    text?: string
  }
  
  export interface Icon8 {
    iconType?: string
  }
  
  export interface NavigationEndpoint9 {
    clickTrackingParams?: string
    watchPlaylistEndpoint?: WatchPlaylistEndpoint4
  }
  
  export interface WatchPlaylistEndpoint4 {
    playlistId?: string
  }
  
  export interface Accessibility3 {
    label?: string
  }
  
  export interface AccessibilityData9 {
    accessibilityData?: AccessibilityData10
  }
  
  export interface AccessibilityData10 {
    label?: string
  }
  
  export interface ToggleButtonRenderer {
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon3
    defaultText?: DefaultText3
    defaultServiceEndpoint?: DefaultServiceEndpoint3
    toggledIcon?: ToggledIcon3
    toggledText?: ToggledText3
    toggledServiceEndpoint?: ToggledServiceEndpoint3
    trackingParams?: string
  }
  
  export interface DefaultIcon3 {
    iconType?: string
  }
  
  export interface DefaultText3 {
    runs?: Run22[]
    accessibility?: Accessibility4
  }
  
  export interface Run22 {
    text?: string
  }
  
  export interface Accessibility4 {
    accessibilityData?: AccessibilityData11
  }
  
  export interface AccessibilityData11 {
    label?: string
  }
  
  export interface DefaultServiceEndpoint3 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint5
  }
  
  export interface LikeEndpoint5 {
    status?: string
    target?: Target5
  }
  
  export interface Target5 {
    playlistId?: string
  }
  
  export interface ToggledIcon3 {
    iconType?: string
  }
  
  export interface ToggledText3 {
    runs?: Run23[]
    accessibility?: Accessibility5
  }
  
  export interface Run23 {
    text?: string
  }
  
  export interface Accessibility5 {
    accessibilityData?: AccessibilityData12
  }
  
  export interface AccessibilityData12 {
    label?: string
  }
  
  export interface ToggledServiceEndpoint3 {
    clickTrackingParams?: string
    likeEndpoint?: LikeEndpoint6
  }
  
  export interface LikeEndpoint6 {
    status?: string
    target?: Target6
  }
  
  export interface Target6 {
    playlistId?: string
  }
  
  export interface Accessibility6 {
    accessibilityData?: AccessibilityData13
  }
  
  export interface AccessibilityData13 {
    label?: string
  }
  
  export interface Thumbnail3 {
    croppedSquareThumbnailRenderer?: CroppedSquareThumbnailRenderer
  }
  
  export interface CroppedSquareThumbnailRenderer {
    thumbnail?: Thumbnail4
    trackingParams?: string
  }
  
  export interface Thumbnail4 {
    thumbnails?: Thumbnail5[]
  }
  
  export interface Thumbnail5 {
    url?: string
    width?: number
    height?: number
  }
  
  export interface Description {
    runs?: Run24[]
  }
  
  export interface Run24 {
    text?: string
  }
  
  export interface MoreButton {
    toggleButtonRenderer?: ToggleButtonRenderer2
  }
  
  export interface ToggleButtonRenderer2 {
    isToggled?: boolean
    isDisabled?: boolean
    defaultIcon?: DefaultIcon4
    defaultText?: DefaultText4
    toggledIcon?: ToggledIcon4
    toggledText?: ToggledText4
    trackingParams?: string
  }
  
  export interface DefaultIcon4 {
    iconType?: string
  }
  
  export interface DefaultText4 {
    runs?: Run25[]
  }
  
  export interface Run25 {
    text?: string
  }
  
  export interface ToggledIcon4 {
    iconType?: string
  }
  
  export interface ToggledText4 {
    runs?: Run26[]
  }
  
  export interface Run26 {
    text?: string
  }
  
  export interface SubtitleBadge {
    musicInlineBadgeRenderer?: MusicInlineBadgeRenderer2
  }
  
  export interface MusicInlineBadgeRenderer2 {
    trackingParams?: string
    icon?: Icon9
    accessibilityData?: AccessibilityData14
  }
  
  export interface Icon9 {
    iconType?: string
  }
  
  export interface AccessibilityData14 {
    accessibilityData?: AccessibilityData15
  }
  
  export interface AccessibilityData15 {
    label?: string
  }
  
  export interface SecondSubtitle {
    runs?: Run27[]
  }
  
  export interface Run27 {
    text?: string
  }
  
  export interface Microformat {
    microformatDataRenderer?: MicroformatDataRenderer
  }
  
  export interface MicroformatDataRenderer {
    urlCanonical?: string
  }
  