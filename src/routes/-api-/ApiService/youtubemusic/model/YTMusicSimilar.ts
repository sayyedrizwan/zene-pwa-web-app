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
    subHeaderChipCloud: SubHeaderChipCloud
}

interface Content2 {
    playlistPanelRenderer: PlaylistPanelRenderer
}

interface PlaylistPanelRenderer {
    title: string
    contents: Content3[]
    playlistId: string
    isInfinite: boolean
    continuations: Continuation[]
    shortBylineText: ShortBylineText2
    trackingParams: string
    titleText: TitleText
    previewDescription: PreviewDescription
    numItemsToShow: number
}

interface Content3 {
    playlistPanelVideoRenderer: PlaylistPanelVideoRenderer
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
    playlistSetVideoId: string
    canReorder: boolean
    badges?: Badge[]
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
    playlistId: string
    index: number
    params: string
    playerParams: string
    playlistSetVideoId: string
    loggingContext: LoggingContext
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs
}

interface LoggingContext {
    vssLoggingContext: VssLoggingContext
}

interface VssLoggingContext {
    serializedContextData: string
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
    modalEndpoint?: ModalEndpoint
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

interface ModalEndpoint {
    modal: Modal
}

interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer
}

interface ModalWithTitleAndButtonRenderer {
    title: Title2
    content: Content4
    button: Button
}

interface Title2 {
    runs: Run6[]
}

interface Run6 {
    text: string
}

interface Content4 {
    runs: Run7[]
}

interface Run7 {
    text: string
}

interface Button {
    buttonRenderer: ButtonRenderer
}

interface ButtonRenderer {
    style: string
    isDisabled: boolean
    text: Text2
    navigationEndpoint: NavigationEndpoint4
    trackingParams: string
}

interface Text2 {
    runs: Run8[]
}

interface Run8 {
    text: string
}

interface NavigationEndpoint4 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint
}

interface SignInEndpoint {
    hack: boolean
}

interface WatchEndpoint2 {
    videoId: string
    playlistId: string
    params: string
    loggingContext: LoggingContext2
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs2
}

interface LoggingContext2 {
    vssLoggingContext: VssLoggingContext2
}

interface VssLoggingContext2 {
    serializedContextData: string
}

interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig: WatchEndpointMusicConfig2
}

interface WatchEndpointMusicConfig2 {
    musicVideoType: string
}

interface MenuServiceItemRenderer {
    text: Text3
    icon: Icon2
    serviceEndpoint: ServiceEndpoint
    trackingParams: string
}

interface Text3 {
    runs: Run9[]
}

interface Run9 {
    text: string
}

interface Icon2 {
    iconType: string
}

interface ServiceEndpoint {
    clickTrackingParams: string
    modalEndpoint?: ModalEndpoint2
    removeFromQueueEndpoint?: RemoveFromQueueEndpoint
    queueAddEndpoint?: QueueAddEndpoint
}

interface ModalEndpoint2 {
    modal: Modal2
}

interface Modal2 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2
}

interface ModalWithTitleAndButtonRenderer2 {
    title: Title3
    content: Content5
    button: Button2
}

interface Title3 {
    runs: Run10[]
}

interface Run10 {
    text: string
}

interface Content5 {
    runs: Run11[]
}

interface Run11 {
    text: string
}

interface Button2 {
    buttonRenderer: ButtonRenderer2
}

interface ButtonRenderer2 {
    style: string
    isDisabled: boolean
    text: Text4
    navigationEndpoint: NavigationEndpoint5
    trackingParams: string
}

interface Text4 {
    runs: Run12[]
}

interface Run12 {
    text: string
}

interface NavigationEndpoint5 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint2
}

interface SignInEndpoint2 {
    hack: boolean
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
    runs: Run13[]
}

interface Run13 {
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
    runs: Run14[]
}

interface Run14 {
    text: string
}

interface ToggleMenuServiceItemRenderer {
    defaultText: DefaultText
    defaultIcon: DefaultIcon
    defaultServiceEndpoint: DefaultServiceEndpoint
    toggledText: ToggledText
    toggledIcon: ToggledIcon
    trackingParams: string
}

interface DefaultText {
    runs: Run15[]
}

interface Run15 {
    text: string
}

interface DefaultIcon {
    iconType: string
}

interface DefaultServiceEndpoint {
    clickTrackingParams: string
    modalEndpoint: ModalEndpoint3
}

interface ModalEndpoint3 {
    modal: Modal3
}

interface Modal3 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer3
}

interface ModalWithTitleAndButtonRenderer3 {
    title: Title4
    content: Content6
    button: Button3
}

interface Title4 {
    runs: Run16[]
}

interface Run16 {
    text: string
}

interface Content6 {
    runs: Run17[]
}

interface Run17 {
    text: string
}

interface Button3 {
    buttonRenderer: ButtonRenderer3
}

interface ButtonRenderer3 {
    style: string
    isDisabled: boolean
    text: Text5
    navigationEndpoint: NavigationEndpoint6
    trackingParams: string
}

interface Text5 {
    runs: Run18[]
}

interface Run18 {
    text: string
}

interface NavigationEndpoint6 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint3
}

interface SignInEndpoint3 {
    hack: boolean
}

interface ToggledText {
    runs: Run19[]
}

interface Run19 {
    text: string
}

interface ToggledIcon {
    iconType: string
}

interface Accessibility2 {
    accessibilityData: AccessibilityData2
}

interface AccessibilityData2 {
    label: string
}

interface Badge {
    musicInlineBadgeRenderer: MusicInlineBadgeRenderer
}

interface MusicInlineBadgeRenderer {
    trackingParams: string
    icon: Icon3
    accessibilityData: AccessibilityData3
}

interface Icon3 {
    iconType: string
}

interface AccessibilityData3 {
    accessibilityData: AccessibilityData4
}

interface AccessibilityData4 {
    label: string
}

interface Continuation {
    nextRadioContinuationData: NextRadioContinuationData
}

interface NextRadioContinuationData {
    continuation: string
    clickTrackingParams: string
}

interface ShortBylineText2 {
    runs: Run20[]
}

interface Run20 {
    text: string
}

interface TitleText {
    runs: Run21[]
}

interface Run21 {
    text: string
}

interface PreviewDescription { }

interface Header {
    musicQueueHeaderRenderer: MusicQueueHeaderRenderer
}

interface MusicQueueHeaderRenderer {
    title: Title5
    subtitle: Subtitle
    buttons: Button4[]
    trackingParams: string
}

interface Title5 {
    runs: Run22[]
}

interface Run22 {
    text: string
}

interface Subtitle {
    runs: Run23[]
}

interface Run23 {
    text: string
}

interface Button4 {
    chipCloudChipRenderer: ChipCloudChipRenderer
}

interface ChipCloudChipRenderer {
    style: Style
    text: Text6
    navigationEndpoint: NavigationEndpoint7
    trackingParams: string
    icon: Icon4
    accessibilityData: AccessibilityData5
    isSelected: boolean
    uniqueId: string
}

interface Style {
    styleType: string
}

interface Text6 {
    runs: Run24[]
}

interface Run24 {
    text: string
}

interface NavigationEndpoint7 {
    clickTrackingParams: string
    modalEndpoint: ModalEndpoint4
    saveQueueToPlaylistCommand: SaveQueueToPlaylistCommand
}

interface ModalEndpoint4 {
    modal: Modal4
}

interface Modal4 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer4
}

interface ModalWithTitleAndButtonRenderer4 {
    title: Title6
    content: Content7
    button: Button5
}

interface Title6 {
    runs: Run25[]
}

interface Run25 {
    text: string
}

interface Content7 {
    runs: Run26[]
}

interface Run26 {
    text: string
}

interface Button5 {
    buttonRenderer: ButtonRenderer4
}

interface ButtonRenderer4 {
    style: string
    isDisabled: boolean
    text: Text7
    navigationEndpoint: NavigationEndpoint8
    trackingParams: string
}

interface Text7 {
    runs: Run27[]
}

interface Run27 {
    text: string
}

interface NavigationEndpoint8 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint4
}

interface SignInEndpoint4 {
    hack: boolean
}

interface SaveQueueToPlaylistCommand { }

interface Icon4 {
    iconType: string
}

interface AccessibilityData5 {
    accessibilityData: AccessibilityData6
}

interface AccessibilityData6 {
    label: string
}

interface SubHeaderChipCloud {
    chipCloudRenderer: ChipCloudRenderer
}

interface ChipCloudRenderer {
    chips: Chip[]
    trackingParams: string
}

interface Chip {
    chipCloudChipRenderer: ChipCloudChipRenderer2
}

interface ChipCloudChipRenderer2 {
    text: Text8
    navigationEndpoint: NavigationEndpoint9
    trackingParams: string
    accessibilityData: AccessibilityData7
    isSelected: boolean
    uniqueId: string
}

interface Text8 {
    runs: Run28[]
}

interface Run28 {
    text: string
}

interface NavigationEndpoint9 {
    clickTrackingParams: string
    queueUpdateCommand: QueueUpdateCommand
}

interface QueueUpdateCommand {
    queueUpdateSection: string
    fetchContentsCommand: FetchContentsCommand
    dedupeAgainstLocalQueue: boolean
}

interface FetchContentsCommand {
    clickTrackingParams: string
    watchEndpoint: WatchEndpoint4
}

interface WatchEndpoint4 {
    playlistId: string
    params: string
    loggingContext: LoggingContext3
}

interface LoggingContext3 {
    vssLoggingContext: VssLoggingContext3
}

interface VssLoggingContext3 {
    serializedContextData: string
}

interface AccessibilityData7 {
    accessibilityData: AccessibilityData8
}

interface AccessibilityData8 {
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
    watchEndpoint: WatchEndpoint5
}

interface WatchEndpoint5 {
    videoId: string
    playlistId: string
    index: number
    playlistSetVideoId: string
    loggingContext: LoggingContext4
}

interface LoggingContext4 {
    vssLoggingContext: VssLoggingContext4
}

interface VssLoggingContext4 {
    serializedContextData: string
}

interface PlayerOverlays {
    playerOverlayRenderer: PlayerOverlayRenderer
}

interface PlayerOverlayRenderer {
    actions: Action[]
    browserMediaSession: BrowserMediaSession
}

interface Action {
    likeButtonRenderer: LikeButtonRenderer
}

interface LikeButtonRenderer {
    target: Target
    likeStatus: string
    trackingParams: string
    likesAllowed: boolean
    dislikeNavigationEndpoint: DislikeNavigationEndpoint
    likeCommand: LikeCommand
}

interface Target {
    videoId: string
}

interface DislikeNavigationEndpoint {
    clickTrackingParams: string
    modalEndpoint: ModalEndpoint5
}

interface ModalEndpoint5 {
    modal: Modal5
}

interface Modal5 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer5
}

interface ModalWithTitleAndButtonRenderer5 {
    title: Title7
    content: Content8
    button: Button6
}

interface Title7 {
    runs: Run29[]
}

interface Run29 {
    text: string
}

interface Content8 {
    runs: Run30[]
}

interface Run30 {
    text: string
}

interface Button6 {
    buttonRenderer: ButtonRenderer5
}

interface ButtonRenderer5 {
    style: string
    isDisabled: boolean
    text: Text9
    navigationEndpoint: NavigationEndpoint10
    trackingParams: string
}

interface Text9 {
    runs: Run31[]
}

interface Run31 {
    text: string
}

interface NavigationEndpoint10 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint5
}

interface SignInEndpoint5 {
    hack: boolean
}

interface LikeCommand {
    clickTrackingParams: string
    modalEndpoint: ModalEndpoint6
}

interface ModalEndpoint6 {
    modal: Modal6
}

interface Modal6 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer6
}

interface ModalWithTitleAndButtonRenderer6 {
    title: Title8
    content: Content9
    button: Button7
}

interface Title8 {
    runs: Run32[]
}

interface Run32 {
    text: string
}

interface Content9 {
    runs: Run33[]
}

interface Run33 {
    text: string
}

interface Button7 {
    buttonRenderer: ButtonRenderer6
}

interface ButtonRenderer6 {
    style: string
    isDisabled: boolean
    text: Text10
    navigationEndpoint: NavigationEndpoint11
    trackingParams: string
}

interface Text10 {
    runs: Run34[]
}

interface Run34 {
    text: string
}

interface NavigationEndpoint11 {
    clickTrackingParams: string
    signInEndpoint: SignInEndpoint6
}

interface SignInEndpoint6 {
    hack: boolean
}

interface BrowserMediaSession {
    browserMediaSessionRenderer: BrowserMediaSessionRenderer
}

interface BrowserMediaSessionRenderer {
    album: Album
    thumbnailDetails: ThumbnailDetails
}

interface Album {
    runs: Run35[]
}

interface Run35 {
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
    title: Title9
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
    text: Text11
    trackingParams: string
    submitEndpoint: SubmitEndpoint
}

interface Text11 {
    runs: Run36[]
}

interface Run36 {
    text: string
}

interface SubmitEndpoint {
    clickTrackingParams: string
    flagEndpoint: FlagEndpoint
}

interface FlagEndpoint {
    flagAction: string
}

interface Title9 {
    runs: Run37[]
}

interface Run37 {
    text: string
}

interface SubmitButton {
    buttonRenderer: ButtonRenderer7
}

interface ButtonRenderer7 {
    style: string
    isDisabled: boolean
    text: Text12
    trackingParams: string
}

interface Text12 {
    runs: Run38[]
}

interface Run38 {
    text: string
}

interface CancelButton {
    buttonRenderer: ButtonRenderer8
}

interface ButtonRenderer8 {
    style: string
    isDisabled: boolean
    text: Text13
    trackingParams: string
}

interface Text13 {
    runs: Run39[]
}

interface Run39 {
    text: string
}

interface Footer {
    runs: Run40[]
}

interface Run40 {
    text: string
    navigationEndpoint?: NavigationEndpoint12
}

interface NavigationEndpoint12 {
    clickTrackingParams: string
    urlEndpoint: UrlEndpoint
}

interface UrlEndpoint {
    url: string
}
