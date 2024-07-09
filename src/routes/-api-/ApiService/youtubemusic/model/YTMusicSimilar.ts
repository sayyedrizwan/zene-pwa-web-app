
export interface YTMusicSimilar {
    contents: Contents
    currentVideoEndpoint: CurrentVideoEndpoint
    trackingParams: string
    playerOverlays: PlayerOverlays
    videoReporting: VideoReporting
    queueContextParams: string
}

interface Contents {
    singleColumnMusicWatchNextResultsRenderer: SingleColumnMusicWatchNextResultsRenderer
}

interface SingleColumnMusicWatchNextResultsRenderer {
    tabbedRenderer: TabbedRenderer
}

interface TabbedRenderer {
    watchNextTabbedResultsRenderer: WatchNextTabbedResultsRenderer
}

interface WatchNextTabbedResultsRenderer {
    tabs: Tab[]
}

interface Tab {
    tabRenderer: TabRenderer
}

interface TabRenderer {
    title: string
    content?: Content
    trackingParams: string
    endpoint?: Endpoint
}

interface Content {
    musicQueueRenderer: MusicQueueRenderer
}

interface MusicQueueRenderer {
    content: Content2
    hack: boolean
    header: Header
}

interface Content2 {
    playlistPanelRenderer: PlaylistPanelRenderer
}

interface PlaylistPanelRenderer {
    contents: Content3[]
    playlistId: string
    isInfinite: boolean
    trackingParams: string
}

interface Content3 {
    playlistPanelVideoRenderer?: PlaylistPanelVideoRenderer
    automixPreviewVideoRenderer?: AutomixPreviewVideoRenderer
}

interface PlaylistPanelVideoRenderer {
    title: Title
    longBylineText: LongBylineText
    thumbnail: Thumbnail
    lengthText: LengthText
    selected: boolean
    navigationEndpoint: NavigationEndpoint2
    videoId: string
    shortBylineText: ShortBylineText
    trackingParams: string
    menu: Menu
    canReorder: boolean
}

interface Title {
    runs: Run[]
}

interface Run {
    text: string
}

interface LongBylineText {
    runs: Run2[]
}

interface Run2 {
    text: string
    navigationEndpoint?: NavigationEndpoint
}

interface NavigationEndpoint {
    clickTrackingParams: string
    browseEndpoint: BrowseEndpoint
}

interface BrowseEndpoint {
    browseId: string
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs
}

interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig
}

interface BrowseEndpointContextMusicConfig {
    pageType: string
}

interface Thumbnail {
    thumbnails: Thumbnail2[]
}

interface Thumbnail2 {
    url: string
    width: number
    height: number
}

interface LengthText {
    runs: Run3[]
    accessibility: Accessibility
}

interface Run3 {
    text: string
}

interface Accessibility {
    accessibilityData: AccessibilityData
}

interface AccessibilityData {
    label: string
}

interface NavigationEndpoint2 {
    clickTrackingParams: string
    watchEndpoint: WatchEndpoint
}

interface WatchEndpoint {
    videoId: string
    params: string
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs
}

interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig
}

interface WatchEndpointMusicConfig {
    hasPersistentPlaylistPanel: boolean
    musicVideoType: string
}

interface ShortBylineText {
    runs: Run4[]
}

interface Run4 {
    text: string
}

interface Menu {
    menuRenderer: MenuRenderer
}

interface MenuRenderer {
    items: Item[]
    trackingParams: string
    accessibility: Accessibility2
}

interface Item {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
    menuServiceItemRenderer?: MenuServiceItemRenderer
    toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer
}

interface MenuNavigationItemRenderer {
    text: Text
    icon: Icon
    navigationEndpoint: NavigationEndpoint3
    trackingParams: string
}

interface Text {
    runs: Run5[]
}

interface Run5 {
    text: string
}

interface Icon {
    iconType: string
}

interface NavigationEndpoint3 {
    clickTrackingParams: string
    shareEntityEndpoint?: ShareEntityEndpoint
    browseEndpoint?: BrowseEndpoint2
    addToPlaylistEndpoint?: AddToPlaylistEndpoint
    watchEndpoint?: WatchEndpoint2
}

interface ShareEntityEndpoint {
    serializedShareEntity: string
    sharePanelType: string
}

interface BrowseEndpoint2 {
    browseId: string
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs2
}

interface BrowseEndpointContextSupportedConfigs2 {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig2
}

interface BrowseEndpointContextMusicConfig2 {
    pageType: string
}

interface AddToPlaylistEndpoint {
    videoId: string
}

interface WatchEndpoint2 {
    videoId: string
    playlistId: string
    params: string
    loggingContext: LoggingContext
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs2
}

interface LoggingContext {
    vssLoggingContext: VssLoggingContext
}

interface VssLoggingContext {
    serializedContextData: string
}

interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig: WatchEndpointMusicConfig2
}

interface WatchEndpointMusicConfig2 {
    musicVideoType: string
}

interface MenuServiceItemRenderer {
    text: Text2
    icon: Icon2
    serviceEndpoint: ServiceEndpoint
    trackingParams: string
}

interface Text2 {
    runs: Run6[]
}

interface Run6 {
    text: string
}

interface Icon2 {
    iconType: string
}

interface ServiceEndpoint {
    clickTrackingParams: string
    getReportFormEndpoint?: GetReportFormEndpoint
    removeFromQueueEndpoint?: RemoveFromQueueEndpoint
    queueAddEndpoint?: QueueAddEndpoint
}

interface GetReportFormEndpoint {
    params: string
}

interface RemoveFromQueueEndpoint {
    videoId: string
    commands: Command[]
}

interface Command {
    clickTrackingParams: string
    addToToastAction: AddToToastAction
}

interface AddToToastAction {
    item: Item2
}

interface Item2 {
    notificationTextRenderer: NotificationTextRenderer
}

interface NotificationTextRenderer {
    successResponseText: SuccessResponseText
    trackingParams: string
}

interface SuccessResponseText {
    runs: Run7[]
}

interface Run7 {
    text: string
}

interface QueueAddEndpoint {
    queueTarget: QueueTarget
    queueInsertPosition: string
    commands: Command2[]
}

interface QueueTarget {
    videoId: string
    onEmptyQueue: OnEmptyQueue
}

interface OnEmptyQueue {
    clickTrackingParams: string
    watchEndpoint: WatchEndpoint3
}

interface WatchEndpoint3 {
    videoId: string
}

interface Command2 {
    clickTrackingParams: string
    addToToastAction: AddToToastAction2
}

interface AddToToastAction2 {
    item: Item3
}

interface Item3 {
    notificationTextRenderer: NotificationTextRenderer2
}

interface NotificationTextRenderer2 {
    successResponseText: SuccessResponseText2
    trackingParams: string
}

interface SuccessResponseText2 {
    runs: Run8[]
}

interface Run8 {
    text: string
}

interface ToggleMenuServiceItemRenderer {
    defaultText: DefaultText
    defaultIcon: DefaultIcon
    defaultServiceEndpoint: DefaultServiceEndpoint
    toggledText: ToggledText
    toggledIcon: ToggledIcon
    toggledServiceEndpoint: ToggledServiceEndpoint
    trackingParams: string
}

interface DefaultText {
    runs: Run9[]
}

interface Run9 {
    text: string
}

interface DefaultIcon {
    iconType: string
}

interface DefaultServiceEndpoint {
    clickTrackingParams: string
    likeEndpoint?: LikeEndpoint
    feedbackEndpoint?: FeedbackEndpoint
}

interface LikeEndpoint {
    status: string
    target: Target
    actions: Action[]
    likeParams: string
}

interface Target {
    videoId: string
}

interface Action {
    clickTrackingParams: string
    musicLibraryStatusUpdateCommand: MusicLibraryStatusUpdateCommand
}

interface MusicLibraryStatusUpdateCommand {
    libraryStatus: string
    addToLibraryFeedbackToken: string
}

interface FeedbackEndpoint {
    feedbackToken: string
}

interface ToggledText {
    runs: Run10[]
}

interface Run10 {
    text: string
}

interface ToggledIcon {
    iconType: string
}

interface ToggledServiceEndpoint {
    clickTrackingParams: string
    likeEndpoint?: LikeEndpoint2
    feedbackEndpoint?: FeedbackEndpoint2
}

interface LikeEndpoint2 {
    status: string
    target: Target2
    removeLikeParams: string
}

interface Target2 {
    videoId: string
}

interface FeedbackEndpoint2 {
    feedbackToken: string
}

interface Accessibility2 {
    accessibilityData: AccessibilityData2
}

interface AccessibilityData2 {
    label: string
}

interface AutomixPreviewVideoRenderer {
    content: Content4
}

interface Content4 {
    automixPlaylistVideoRenderer: AutomixPlaylistVideoRenderer
}

interface AutomixPlaylistVideoRenderer {
    navigationEndpoint: NavigationEndpoint4
    trackingParams: string
    automixMode: string
}

interface NavigationEndpoint4 {
    clickTrackingParams: string
    watchPlaylistEndpoint: WatchPlaylistEndpoint
}

interface WatchPlaylistEndpoint {
    playlistId: string
    params: string
}

interface Header {
    musicQueueHeaderRenderer: MusicQueueHeaderRenderer
}

interface MusicQueueHeaderRenderer {
    title: Title2
    subtitle: Subtitle
    buttons: Button[]
    trackingParams: string
}

interface Title2 {
    runs: Run11[]
}

interface Run11 {
    text: string
}

interface Subtitle {
    runs: Run12[]
}

interface Run12 {
    text: string
}

interface Button {
    chipCloudChipRenderer: ChipCloudChipRenderer
}

interface ChipCloudChipRenderer {
    style: Style
    text: Text3
    navigationEndpoint: NavigationEndpoint5
    trackingParams: string
    icon: Icon3
    accessibilityData: AccessibilityData3
    isSelected: boolean
    uniqueId: string
}

interface Style {
    styleType: string
}

interface Text3 {
    runs: Run13[]
}

interface Run13 {
    text: string
}

interface NavigationEndpoint5 {
    clickTrackingParams: string
    saveQueueToPlaylistCommand: SaveQueueToPlaylistCommand
}

interface SaveQueueToPlaylistCommand { }

interface Icon3 {
    iconType: string
}

interface AccessibilityData3 {
    accessibilityData: AccessibilityData4
}

interface AccessibilityData4 {
    label: string
}

interface Endpoint {
    clickTrackingParams: string
    browseEndpoint: BrowseEndpoint3
}

interface BrowseEndpoint3 {
    browseId: string
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs3
}

interface BrowseEndpointContextSupportedConfigs3 {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig3
}

interface BrowseEndpointContextMusicConfig3 {
    pageType: string
}

interface CurrentVideoEndpoint {
    clickTrackingParams: string
    watchEndpoint: WatchEndpoint4
}

interface WatchEndpoint4 {
    videoId: string
    ustreamerConfig: string
}

interface PlayerOverlays {
    playerOverlayRenderer: PlayerOverlayRenderer
}

interface PlayerOverlayRenderer {
    actions: Action2[]
    browserMediaSession: BrowserMediaSession
}

interface Action2 {
    likeButtonRenderer: LikeButtonRenderer
}

interface LikeButtonRenderer {
    target: Target3
    likeStatus: string
    trackingParams: string
    likesAllowed: boolean
    serviceEndpoints: ServiceEndpoint2[]
}

interface Target3 {
    videoId: string
}

interface ServiceEndpoint2 {
    clickTrackingParams: string
    likeEndpoint: LikeEndpoint3
}

interface LikeEndpoint3 {
    status: string
    target: Target4
    actions?: Action3[]
    likeParams?: string
    dislikeParams?: string
    removeLikeParams?: string
}

interface Target4 {
    videoId: string
}

interface Action3 {
    clickTrackingParams: string
    musicLibraryStatusUpdateCommand: MusicLibraryStatusUpdateCommand2
}

interface MusicLibraryStatusUpdateCommand2 {
    libraryStatus: string
    addToLibraryFeedbackToken: string
}

interface BrowserMediaSession {
    browserMediaSessionRenderer: BrowserMediaSessionRenderer
}

interface BrowserMediaSessionRenderer {
    album: Album
    thumbnailDetails: ThumbnailDetails
}

interface Album {
    runs: Run14[]
}

interface Run14 {
    text: string
}

interface ThumbnailDetails {
    thumbnails: Thumbnail3[]
}

interface Thumbnail3 {
    url: string
    width: number
    height: number
}

interface VideoReporting {
    reportFormModalRenderer: ReportFormModalRenderer
}

interface ReportFormModalRenderer {
    optionsSupportedRenderers: OptionsSupportedRenderers
    trackingParams: string
    title: Title3
    submitButton: SubmitButton
    cancelButton: CancelButton
    footer: Footer
}

interface OptionsSupportedRenderers {
    optionsRenderer: OptionsRenderer
}

interface OptionsRenderer {
    items: Item4[]
    trackingParams: string
}

interface Item4 {
    optionSelectableItemRenderer: OptionSelectableItemRenderer
}

interface OptionSelectableItemRenderer {
    text: Text4
    trackingParams: string
    submitEndpoint: SubmitEndpoint
}

interface Text4 {
    runs: Run15[]
}

interface Run15 {
    text: string
}

interface SubmitEndpoint {
    clickTrackingParams: string
    flagEndpoint: FlagEndpoint
}

interface FlagEndpoint {
    flagAction: string
}

interface Title3 {
    runs: Run16[]
}

interface Run16 {
    text: string
}

interface SubmitButton {
    buttonRenderer: ButtonRenderer
}

interface ButtonRenderer {
    style: string
    isDisabled: boolean
    text: Text5
    trackingParams: string
}

interface Text5 {
    runs: Run17[]
}

interface Run17 {
    text: string
}

interface CancelButton {
    buttonRenderer: ButtonRenderer2
}

interface ButtonRenderer2 {
    style: string
    isDisabled: boolean
    text: Text6
    trackingParams: string
}

interface Text6 {
    runs: Run18[]
}

interface Run18 {
    text: string
}

interface Footer {
    runs: Run19[]
}

interface Run19 {
    text: string
    navigationEndpoint?: NavigationEndpoint6
}

interface NavigationEndpoint6 {
    clickTrackingParams: string
    urlEndpoint: UrlEndpoint
}

interface UrlEndpoint {
    url: string
}
