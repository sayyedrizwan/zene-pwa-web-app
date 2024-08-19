export interface YTMusicSearch {
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
    header?: Header
}

interface Content2 {
    musicShelfRenderer?: MusicShelfRenderer
}

interface MusicShelfRenderer {
    title?: Title
    contents?: Content3[]
    trackingParams?: string
    continuations?: Continuation[]
    shelfDivider?: ShelfDivider
}

interface Title {
    runs?: Run[]
}

interface Run {
    text?: string
}

interface Content3 {
    musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer
}

interface MusicResponsiveListItemRenderer {
    trackingParams?: string
    thumbnail?: Thumbnail
    flexColumns?: FlexColumn[]
    menu?: Menu
    playlistItemData?: PlaylistItemData
    flexColumnDisplayStyle?: string
    navigationEndpoint?: NavigationEndpoint5
    itemHeight?: string
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
    navigationEndpoint?: NavigationEndpoint
}

interface NavigationEndpoint {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint
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
    navigationEndpoint?: NavigationEndpoint2
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

interface NavigationEndpoint2 {
    clickTrackingParams?: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint
    modalEndpoint?: ModalEndpoint
    watchEndpoint?: WatchEndpoint2
}

interface ShareEntityEndpoint {
    serializedShareEntity?: string
    sharePanelType?: string
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

interface ModalEndpoint {
    modal?: Modal
}

interface Modal {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
}

interface ModalWithTitleAndButtonRenderer {
    title?: Title2
    content?: Content4
    button?: Button
}

interface Title2 {
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
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
}

interface Text3 {
    runs?: Run6[]
}

interface Run6 {
    text?: string
}

interface NavigationEndpoint3 {
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
    title?: Title3
    content?: Content5
    button?: Button2
}

interface Title3 {
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
    navigationEndpoint?: NavigationEndpoint4
    trackingParams?: string
}

interface Text5 {
    runs?: Run12[]
}

interface Run12 {
    text?: string
}

interface NavigationEndpoint4 {
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

interface Accessibility {
    accessibilityData?: AccessibilityData
}

interface AccessibilityData {
    label?: string
}

interface PlaylistItemData {
    videoId?: string
}

interface NavigationEndpoint5 {
    browseEndpoint?: BrowseEndpoint
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

interface Continuation {
    nextContinuationData?: NextContinuationData
}

interface NextContinuationData {
    continuation?: string
    clickTrackingParams?: string
}

interface ShelfDivider {
    musicShelfDividerRenderer?: MusicShelfDividerRenderer
}

interface MusicShelfDividerRenderer {
    hidden?: boolean
}

interface Header {
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
    style?: Style
    navigationEndpoint?: NavigationEndpoint6
    trackingParams?: string
    icon?: Icon3
    accessibilityData?: AccessibilityData2
    isSelected?: boolean
    text?: Text6
    uniqueId?: string
}

interface Style {
    styleType?: string
}

interface NavigationEndpoint6 {
    clickTrackingParams?: string
    searchEndpoint?: SearchEndpoint
}

interface SearchEndpoint {
    query?: string
    params?: string
}

interface Icon3 {
    iconType?: string
}

interface AccessibilityData2 {
    accessibilityData?: AccessibilityData3
}

interface AccessibilityData3 {
    label?: string
}

interface Text6 {
    runs?: Run14[]
}

interface Run14 {
    text?: string
}
