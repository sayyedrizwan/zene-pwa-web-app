 export interface YTShortsData {
    responseContext?: ResponseContext
    contents?: Contents
    header?: Header2
    metadata?: Metadata2
    trackingParams?: string
    topbar?: Topbar
    microformat?: Microformat
  }
  
   interface ResponseContext {
    serviceTrackingParams?: ServiceTrackingParam[]
    maxAgeSeconds?: number
    mainAppWebResponseContext?: MainAppWebResponseContext
    webResponseContextExtensionData?: WebResponseContextExtensionData
  }
  
   interface ServiceTrackingParam {
    service?: string
    params?: Param[]
  }
  
   interface Param {
    key?: string
    value?: string
  }
  
   interface MainAppWebResponseContext {
    loggedOut?: boolean
    trackingParam?: string
  }
  
   interface WebResponseContextExtensionData {
    hasDecorated?: boolean
  }
  
   interface Contents {
    twoColumnBrowseResultsRenderer?: TwoColumnBrowseResultsRenderer
  }
  
   interface TwoColumnBrowseResultsRenderer {
    tabs?: Tab[]
  }
  
   interface Tab {
    tabRenderer?: TabRenderer
    expandableTabRenderer?: ExpandableTabRenderer
  }
  
   interface TabRenderer {
    endpoint?: Endpoint
    title?: string
    trackingParams?: string
    selected?: boolean
    content?: Content
  }
  
   interface Endpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata
    browseEndpoint?: BrowseEndpoint
  }
  
   interface CommandMetadata {
    webCommandMetadata?: WebCommandMetadata
  }
  
   interface WebCommandMetadata {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface Content {
    richGridRenderer?: RichGridRenderer
  }
  
   interface RichGridRenderer {
    contents?: Content2[]
    trackingParams?: string
    header?: Header
    targetId?: string
    style?: string
  }
  
   interface Content2 {
    richItemRenderer?: RichItemRenderer
  }
  
   interface RichItemRenderer {
    content?: Content3
    trackingParams?: string
  }
  
   interface Content3 {
    reelItemRenderer?: ReelItemRenderer
  }
  
   interface ReelItemRenderer {
    videoId?: string
    headline?: Headline
    thumbnail?: Thumbnail
    viewCountText?: ViewCountText
    navigationEndpoint?: NavigationEndpoint
    menu?: Menu
    trackingParams?: string
    accessibility?: Accessibility4
    style?: string
    videoType?: string
    loggingDirectives?: LoggingDirectives
  }
  
   interface Headline {
    simpleText?: string
  }
  
   interface Thumbnail {
    thumbnails?: Thumbnail2[]
    isOriginalAspectRatio?: boolean
  }
  
   interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
  }
  
   interface ViewCountText {
    accessibility?: Accessibility
    simpleText?: string
  }
  
   interface Accessibility {
    accessibilityData?: AccessibilityData
  }
  
   interface AccessibilityData {
    label?: string
  }
  
   interface NavigationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata2
    reelWatchEndpoint?: ReelWatchEndpoint
  }
  
   interface CommandMetadata2 {
    webCommandMetadata?: WebCommandMetadata2
  }
  
   interface WebCommandMetadata2 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface ReelWatchEndpoint {
    videoId?: string
    playerParams?: string
    thumbnail?: Thumbnail3
    overlay?: Overlay
    params?: string
    sequenceProvider?: string
    sequenceParams?: string
    loggingContext?: LoggingContext
    ustreamerConfig?: string
  }
  
   interface Thumbnail3 {
    thumbnails?: Thumbnail4[]
    isOriginalAspectRatio?: boolean
  }
  
   interface Thumbnail4 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Overlay {
    reelPlayerOverlayRenderer?: ReelPlayerOverlayRenderer
  }
  
   interface ReelPlayerOverlayRenderer {
    style?: string
    trackingParams?: string
    reelPlayerNavigationModel?: string
  }
  
   interface LoggingContext {
    vssLoggingContext?: VssLoggingContext
    qoeLoggingContext?: QoeLoggingContext
  }
  
   interface VssLoggingContext {
    serializedContextData?: string
  }
  
   interface QoeLoggingContext {
    serializedContextData?: string
  }
  
   interface Menu {
    menuRenderer?: MenuRenderer
  }
  
   interface MenuRenderer {
    items?: Item[]
    trackingParams?: string
    accessibility?: Accessibility3
  }
  
   interface Item {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
  }
  
   interface MenuNavigationItemRenderer {
    text?: Text
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint2
    trackingParams?: string
    accessibility?: Accessibility2
  }
  
   interface Text {
    runs?: Run[]
  }
  
   interface Run {
    text?: string
  }
  
   interface Icon {
    iconType?: string
  }
  
   interface NavigationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata3
    userFeedbackEndpoint?: UserFeedbackEndpoint
  }
  
   interface CommandMetadata3 {
    webCommandMetadata?: WebCommandMetadata3
  }
  
   interface WebCommandMetadata3 {
    ignoreNavigation?: boolean
  }
  
   interface UserFeedbackEndpoint {
    additionalDatas?: AdditionalData[]
  }
  
   interface AdditionalData {
    userFeedbackEndpointProductSpecificValueData?: UserFeedbackEndpointProductSpecificValueData
  }
  
   interface UserFeedbackEndpointProductSpecificValueData {
    key?: string
    value?: string
  }
  
   interface Accessibility2 {
    accessibilityData?: AccessibilityData2
  }
  
   interface AccessibilityData2 {
    label?: string
  }
  
   interface Accessibility3 {
    accessibilityData?: AccessibilityData3
  }
  
   interface AccessibilityData3 {
    label?: string
  }
  
   interface Accessibility4 {
    accessibilityData?: AccessibilityData4
  }
  
   interface AccessibilityData4 {
    label?: string
  }
  
   interface LoggingDirectives {
    trackingParams?: string
    visibility?: Visibility
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility {
    types?: string
  }
  
   interface Header {
    feedFilterChipBarRenderer?: FeedFilterChipBarRenderer
  }
  
   interface FeedFilterChipBarRenderer {
    contents?: Content4[]
    trackingParams?: string
    nextButton?: NextButton
    previousButton?: PreviousButton
    styleType?: string
  }
  
   interface Content4 {
    chipCloudChipRenderer?: ChipCloudChipRenderer
  }
  
   interface ChipCloudChipRenderer {
    text?: Text2
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
    isSelected?: boolean
  }
  
   interface Text2 {
    simpleText?: string
  }
  
   interface NavigationEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata4
    continuationCommand?: ContinuationCommand
  }
  
   interface CommandMetadata4 {
    webCommandMetadata?: WebCommandMetadata4
  }
  
   interface WebCommandMetadata4 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand {
    token?: string
    request?: string
    command?: Command
  }
  
   interface Command {
    clickTrackingParams?: string
    showReloadUiCommand?: ShowReloadUiCommand
  }
  
   interface ShowReloadUiCommand {
    targetId?: string
  }
  
   interface NextButton {
    buttonRenderer?: ButtonRenderer
  }
  
   interface ButtonRenderer {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon2
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData5
  }
  
   interface Icon2 {
    iconType?: string
  }
  
   interface AccessibilityData5 {
    accessibilityData?: AccessibilityData6
  }
  
   interface AccessibilityData6 {
    label?: string
  }
  
   interface PreviousButton {
    buttonRenderer?: ButtonRenderer2
  }
  
   interface ButtonRenderer2 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon3
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData7
  }
  
   interface Icon3 {
    iconType?: string
  }
  
   interface AccessibilityData7 {
    accessibilityData?: AccessibilityData8
  }
  
   interface AccessibilityData8 {
    label?: string
  }
  
   interface ExpandableTabRenderer {
    endpoint?: Endpoint2
    title?: string
    selected?: boolean
  }
  
   interface Endpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata5
    browseEndpoint?: BrowseEndpoint2
  }
  
   interface CommandMetadata5 {
    webCommandMetadata?: WebCommandMetadata5
  }
  
   interface WebCommandMetadata5 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint2 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface Header2 {
    pageHeaderRenderer?: PageHeaderRenderer
  }
  
   interface PageHeaderRenderer {
    pageTitle?: string
    content?: Content5
  }
  
   interface Content5 {
    pageHeaderViewModel?: PageHeaderViewModel
  }
  
   interface PageHeaderViewModel {
    title?: Title
    image?: Image2
    metadata?: Metadata
    actions?: Actions
    description?: Description
    attribution?: Attribution
    banner?: Banner
    rendererContext?: RendererContext7
  }
  
   interface Title {
    dynamicTextViewModel?: DynamicTextViewModel
  }
  
   interface DynamicTextViewModel {
    text?: Text3
    maxLines?: number
    rendererContext?: RendererContext
  }
  
   interface Text3 {
    content?: string
    styleRuns?: StyleRun[]
    attachmentRuns?: AttachmentRun[]
  }
  
   interface StyleRun {
    startIndex?: number
    styleRunExtensions?: StyleRunExtensions
  }
  
   interface StyleRunExtensions {
    styleRunColorMapExtension?: StyleRunColorMapExtension
  }
  
   interface StyleRunColorMapExtension {
    colorMap?: ColorMap[]
  }
  
   interface ColorMap {
    key?: string
    value?: number
  }
  
   interface AttachmentRun {
    startIndex?: number
    length?: number
    element?: Element
    alignment?: string
  }
  
   interface Element {
    type?: Type
    properties?: Properties
  }
  
   interface Type {
    imageType?: ImageType
  }
  
   interface ImageType {
    image?: Image
  }
  
   interface Image {
    sources?: Source[]
  }
  
   interface Source {
    clientResource?: ClientResource
    width?: number
    height?: number
  }
  
   interface ClientResource {
    imageName?: string
  }
  
   interface Properties {
    layoutProperties?: LayoutProperties
  }
  
   interface LayoutProperties {
    height?: Height
    width?: Width
    margin?: Margin
  }
  
   interface Height {
    value?: number
    unit?: string
  }
  
   interface Width {
    value?: number
    unit?: string
  }
  
   interface Margin {
    left?: Left
  }
  
   interface Left {
    value?: number
    unit?: string
  }
  
   interface RendererContext {
    loggingContext?: LoggingContext2
    accessibilityContext?: AccessibilityContext
  }
  
   interface LoggingContext2 {
    loggingDirectives?: LoggingDirectives2
  }
  
   interface LoggingDirectives2 {
    trackingParams?: string
    visibility?: Visibility2
    clientVeSpec?: ClientVeSpec
  }
  
   interface Visibility2 {
    types?: string
  }
  
   interface ClientVeSpec {
    uiType?: number
    veCounter?: number
  }
  
   interface AccessibilityContext {
    label?: string
  }
  
   interface Image2 {
    decoratedAvatarViewModel?: DecoratedAvatarViewModel
  }
  
   interface DecoratedAvatarViewModel {
    avatar?: Avatar
  }
  
   interface Avatar {
    avatarViewModel?: AvatarViewModel
  }
  
   interface AvatarViewModel {
    image?: Image3
    avatarImageSize?: string
    loggingDirectives?: LoggingDirectives3
  }
  
   interface Image3 {
    sources?: Source2[]
    processor?: Processor
  }
  
   interface Source2 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Processor {
    borderImageProcessor?: BorderImageProcessor
  }
  
   interface BorderImageProcessor {
    circular?: boolean
  }
  
   interface LoggingDirectives3 {
    trackingParams?: string
    visibility?: Visibility3
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility3 {
    types?: string
  }
  
   interface Metadata {
    contentMetadataViewModel?: ContentMetadataViewModel
  }
  
   interface ContentMetadataViewModel {
    metadataRows?: MetadataRow[]
    delimiter?: string
    rendererContext?: RendererContext2
  }
  
   interface MetadataRow {
    metadataParts?: MetadataPart[]
  }
  
   interface MetadataPart {
    text?: Text4
    enableTruncation?: boolean
  }
  
   interface Text4 {
    content?: string
    styleRuns?: StyleRun2[]
  }
  
   interface StyleRun2 {
    startIndex?: number
    length?: number
  }
  
   interface RendererContext2 {
    loggingContext?: LoggingContext3
  }
  
   interface LoggingContext3 {
    loggingDirectives?: LoggingDirectives4
  }
  
   interface LoggingDirectives4 {
    trackingParams?: string
    visibility?: Visibility4
    clientVeSpec?: ClientVeSpec2
  }
  
   interface Visibility4 {
    types?: string
  }
  
   interface ClientVeSpec2 {
    uiType?: number
    veCounter?: number
  }
  
   interface Actions {
    flexibleActionsViewModel?: FlexibleActionsViewModel
  }
  
   interface FlexibleActionsViewModel {
    actionsRows?: ActionsRow[]
    minimumRowHeight?: number
    rendererContext?: RendererContext3
  }
  
   interface ActionsRow {
    actions?: Action[]
  }
  
   interface Action {
    buttonViewModel?: ButtonViewModel
  }
  
   interface ButtonViewModel {
    title?: string
    onTap?: OnTap
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    state?: string
  }
  
   interface OnTap {
    innertubeCommand?: InnertubeCommand
  }
  
   interface InnertubeCommand {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata6
    modalEndpoint?: ModalEndpoint
  }
  
   interface CommandMetadata6 {
    webCommandMetadata?: WebCommandMetadata6
  }
  
   interface WebCommandMetadata6 {
    ignoreNavigation?: boolean
  }
  
   interface ModalEndpoint {
    modal?: Modal
  }
  
   interface Modal {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
  }
  
   interface ModalWithTitleAndButtonRenderer {
    title?: Title2
    content?: Content6
    button?: Button
  }
  
   interface Title2 {
    simpleText?: string
  }
  
   interface Content6 {
    simpleText?: string
  }
  
   interface Button {
    buttonRenderer?: ButtonRenderer3
  }
  
   interface ButtonRenderer3 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text5
    navigationEndpoint?: NavigationEndpoint4
    trackingParams?: string
  }
  
   interface Text5 {
    simpleText?: string
  }
  
   interface NavigationEndpoint4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata7
    signInEndpoint?: SignInEndpoint
  }
  
   interface CommandMetadata7 {
    webCommandMetadata?: WebCommandMetadata7
  }
  
   interface WebCommandMetadata7 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint {
    nextEndpoint?: NextEndpoint
    continueAction?: string
    idamTag?: string
  }
  
   interface NextEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata8
    browseEndpoint?: BrowseEndpoint3
  }
  
   interface CommandMetadata8 {
    webCommandMetadata?: WebCommandMetadata8
  }
  
   interface WebCommandMetadata8 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint3 {
    browseId?: string
    params?: string
    canonicalBaseUrl?: string
  }
  
   interface RendererContext3 {
    loggingContext?: LoggingContext4
  }
  
   interface LoggingContext4 {
    loggingDirectives?: LoggingDirectives5
  }
  
   interface LoggingDirectives5 {
    trackingParams?: string
    visibility?: Visibility5
    clientVeSpec?: ClientVeSpec3
  }
  
   interface Visibility5 {
    types?: string
  }
  
   interface ClientVeSpec3 {
    uiType?: number
    veCounter?: number
  }
  
   interface Description {
    descriptionPreviewViewModel?: DescriptionPreviewViewModel
  }
  
   interface DescriptionPreviewViewModel {
    description?: Description2
    maxLines?: number
    truncationText?: TruncationText
    alwaysShowTruncationText?: boolean
    rendererContext?: RendererContext4
  }
  
   interface Description2 {
    content?: string
  }
  
   interface TruncationText {
    content?: string
    styleRuns?: StyleRun3[]
  }
  
   interface StyleRun3 {
    startIndex?: number
    length?: number
    weight?: number
  }
  
   interface RendererContext4 {
    loggingContext?: LoggingContext5
    accessibilityContext?: AccessibilityContext2
    commandContext?: CommandContext
  }
  
   interface LoggingContext5 {
    loggingDirectives?: LoggingDirectives6
  }
  
   interface LoggingDirectives6 {
    trackingParams?: string
    visibility?: Visibility6
    clientVeSpec?: ClientVeSpec4
  }
  
   interface Visibility6 {
    types?: string
  }
  
   interface ClientVeSpec4 {
    uiType?: number
    veCounter?: number
  }
  
   interface AccessibilityContext2 {
    label?: string
  }
  
   interface CommandContext {
    onTap?: OnTap2
  }
  
   interface OnTap2 {
    innertubeCommand?: InnertubeCommand2
  }
  
   interface InnertubeCommand2 {
    clickTrackingParams?: string
    showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint
  }
  
   interface ShowEngagementPanelEndpoint {
    engagementPanel?: EngagementPanel
    identifier?: Identifier2
    engagementPanelPresentationConfigs?: EngagementPanelPresentationConfigs
  }
  
   interface EngagementPanel {
    engagementPanelSectionListRenderer?: EngagementPanelSectionListRenderer
  }
  
   interface EngagementPanelSectionListRenderer {
    header?: Header3
    content?: Content7
    targetId?: string
    identifier?: Identifier
  }
  
   interface Header3 {
    engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer
  }
  
   interface EngagementPanelTitleHeaderRenderer {
    title?: Title3
    visibilityButton?: VisibilityButton
    trackingParams?: string
  }
  
   interface Title3 {
    simpleText?: string
  }
  
   interface VisibilityButton {
    buttonRenderer?: ButtonRenderer4
  }
  
   interface ButtonRenderer4 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon4
    accessibility?: Accessibility5
    trackingParams?: string
    accessibilityData?: AccessibilityData9
    command?: Command2
  }
  
   interface Icon4 {
    iconType?: string
  }
  
   interface Accessibility5 {
    label?: string
  }
  
   interface AccessibilityData9 {
    accessibilityData?: AccessibilityData10
  }
  
   interface AccessibilityData10 {
    label?: string
  }
  
   interface Command2 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction
  }
  
   interface ChangeEngagementPanelVisibilityAction {
    targetId?: string
    visibility?: string
  }
  
   interface Content7 {
    sectionListRenderer?: SectionListRenderer
  }
  
   interface SectionListRenderer {
    contents?: Content8[]
    trackingParams?: string
    scrollPaneStyle?: ScrollPaneStyle
  }
  
   interface Content8 {
    itemSectionRenderer?: ItemSectionRenderer
  }
  
   interface ItemSectionRenderer {
    contents?: Content9[]
    trackingParams?: string
    sectionIdentifier?: string
    targetId?: string
  }
  
   interface Content9 {
    continuationItemRenderer?: ContinuationItemRenderer
  }
  
   interface ContinuationItemRenderer {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint
  }
  
   interface ContinuationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata9
    continuationCommand?: ContinuationCommand2
  }
  
   interface CommandMetadata9 {
    webCommandMetadata?: WebCommandMetadata9
  }
  
   interface WebCommandMetadata9 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand2 {
    token?: string
    request?: string
  }
  
   interface ScrollPaneStyle {
    scrollable?: boolean
  }
  
   interface Identifier {
    surface?: string
    tag?: string
  }
  
   interface Identifier2 {
    surface?: string
    tag?: string
  }
  
   interface EngagementPanelPresentationConfigs {
    engagementPanelPopupPresentationConfig?: EngagementPanelPopupPresentationConfig
  }
  
   interface EngagementPanelPopupPresentationConfig {
    popupType?: string
  }
  
   interface Attribution {
    attributionViewModel?: AttributionViewModel
  }
  
   interface AttributionViewModel {
    text?: Text6
    suffix?: Suffix
    rendererContext?: RendererContext5
  }
  
   interface Text6 {
    content?: string
    commandRuns?: CommandRun[]
    styleRuns?: StyleRun4[]
  }
  
   interface CommandRun {
    startIndex?: number
    length?: number
    onTap?: OnTap3
  }
  
   interface OnTap3 {
    innertubeCommand?: InnertubeCommand3
  }
  
   interface InnertubeCommand3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata10
    urlEndpoint?: UrlEndpoint
  }
  
   interface CommandMetadata10 {
    webCommandMetadata?: WebCommandMetadata10
  }
  
   interface WebCommandMetadata10 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint {
    url?: string
    target?: string
  }
  
   interface StyleRun4 {
    weightLabel?: string
    styleRunExtensions?: StyleRunExtensions2
  }
  
   interface StyleRunExtensions2 {
    styleRunColorMapExtension?: StyleRunColorMapExtension2
  }
  
   interface StyleRunColorMapExtension2 {
    colorMap?: ColorMap2[]
  }
  
   interface ColorMap2 {
    key?: string
    value?: number
  }
  
   interface Suffix {
    content?: string
    commandRuns?: CommandRun2[]
    styleRuns?: StyleRun5[]
  }
  
   interface CommandRun2 {
    startIndex?: number
    length?: number
    onTap?: OnTap4
  }
  
   interface OnTap4 {
    innertubeCommand?: InnertubeCommand4
  }
  
   interface InnertubeCommand4 {
    clickTrackingParams?: string
    showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint2
  }
  
   interface ShowEngagementPanelEndpoint2 {
    engagementPanel?: EngagementPanel2
    identifier?: Identifier4
    engagementPanelPresentationConfigs?: EngagementPanelPresentationConfigs2
  }
  
   interface EngagementPanel2 {
    engagementPanelSectionListRenderer?: EngagementPanelSectionListRenderer2
  }
  
   interface EngagementPanelSectionListRenderer2 {
    header?: Header4
    content?: Content10
    targetId?: string
    identifier?: Identifier3
  }
  
   interface Header4 {
    engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer2
  }
  
   interface EngagementPanelTitleHeaderRenderer2 {
    title?: Title4
    visibilityButton?: VisibilityButton2
    trackingParams?: string
  }
  
   interface Title4 {
    simpleText?: string
  }
  
   interface VisibilityButton2 {
    buttonRenderer?: ButtonRenderer5
  }
  
   interface ButtonRenderer5 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon5
    accessibility?: Accessibility6
    trackingParams?: string
    accessibilityData?: AccessibilityData11
    command?: Command3
  }
  
   interface Icon5 {
    iconType?: string
  }
  
   interface Accessibility6 {
    label?: string
  }
  
   interface AccessibilityData11 {
    accessibilityData?: AccessibilityData12
  }
  
   interface AccessibilityData12 {
    label?: string
  }
  
   interface Command3 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction2
  }
  
   interface ChangeEngagementPanelVisibilityAction2 {
    targetId?: string
    visibility?: string
  }
  
   interface Content10 {
    sectionListRenderer?: SectionListRenderer2
  }
  
   interface SectionListRenderer2 {
    contents?: Content11[]
    trackingParams?: string
    scrollPaneStyle?: ScrollPaneStyle2
  }
  
   interface Content11 {
    itemSectionRenderer?: ItemSectionRenderer2
  }
  
   interface ItemSectionRenderer2 {
    contents?: Content12[]
    trackingParams?: string
    sectionIdentifier?: string
    targetId?: string
  }
  
   interface Content12 {
    continuationItemRenderer?: ContinuationItemRenderer2
  }
  
   interface ContinuationItemRenderer2 {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint2
  }
  
   interface ContinuationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata11
    continuationCommand?: ContinuationCommand3
  }
  
   interface CommandMetadata11 {
    webCommandMetadata?: WebCommandMetadata11
  }
  
   interface WebCommandMetadata11 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand3 {
    token?: string
    request?: string
  }
  
   interface ScrollPaneStyle2 {
    scrollable?: boolean
  }
  
   interface Identifier3 {
    surface?: string
    tag?: string
  }
  
   interface Identifier4 {
    surface?: string
    tag?: string
  }
  
   interface EngagementPanelPresentationConfigs2 {
    engagementPanelPopupPresentationConfig?: EngagementPanelPopupPresentationConfig2
  }
  
   interface EngagementPanelPopupPresentationConfig2 {
    popupType?: string
  }
  
   interface StyleRun5 {
    fontName?: string
    fontSize?: number
    weightLabel?: string
  }
  
   interface RendererContext5 {
    loggingContext?: LoggingContext6
  }
  
   interface LoggingContext6 {
    loggingDirectives?: LoggingDirectives7
  }
  
   interface LoggingDirectives7 {
    trackingParams?: string
    visibility?: Visibility7
    clientVeSpec?: ClientVeSpec5
  }
  
   interface Visibility7 {
    types?: string
  }
  
   interface ClientVeSpec5 {
    uiType?: number
    veCounter?: number
  }
  
   interface Banner {
    imageBannerViewModel?: ImageBannerViewModel
  }
  
   interface ImageBannerViewModel {
    image?: Image4
    style?: string
    rendererContext?: RendererContext6
  }
  
   interface Image4 {
    sources?: Source3[]
  }
  
   interface Source3 {
    url?: string
    width?: number
    height?: number
  }
  
   interface RendererContext6 {
    loggingContext?: LoggingContext7
  }
  
   interface LoggingContext7 {
    loggingDirectives?: LoggingDirectives8
  }
  
   interface LoggingDirectives8 {
    trackingParams?: string
    visibility?: Visibility8
    clientVeSpec?: ClientVeSpec6
  }
  
   interface Visibility8 {
    types?: string
  }
  
   interface ClientVeSpec6 {
    uiType?: number
    veCounter?: number
  }
  
   interface RendererContext7 {
    loggingContext?: LoggingContext8
  }
  
   interface LoggingContext8 {
    loggingDirectives?: LoggingDirectives9
  }
  
   interface LoggingDirectives9 {
    trackingParams?: string
    visibility?: Visibility9
    clientVeSpec?: ClientVeSpec7
  }
  
   interface Visibility9 {
    types?: string
  }
  
   interface ClientVeSpec7 {
    uiType?: number
    veCounter?: number
  }
  
   interface Metadata2 {
    channelMetadataRenderer?: ChannelMetadataRenderer
  }
  
   interface ChannelMetadataRenderer {
    title?: string
    description?: string
    rssUrl?: string
    channelConversionUrl?: string
    externalId?: string
    keywords?: string
    ownerUrls?: string[]
    avatar?: Avatar2
    channelUrl?: string
    isFamilySafe?: boolean
    facebookProfileId?: string
    availableCountryCodes?: string[]
    musicArtistName?: string
    androidDeepLink?: string
    androidAppindexingLink?: string
    iosAppindexingLink?: string
    vanityChannelUrl?: string
  }
  
   interface Avatar2 {
    thumbnails?: Thumbnail5[]
  }
  
   interface Thumbnail5 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Topbar {
    desktopTopbarRenderer?: DesktopTopbarRenderer
  }
  
   interface DesktopTopbarRenderer {
    logo?: Logo
    searchbox?: Searchbox
    trackingParams?: string
    countryCode?: string
    topbarButtons?: TopbarButton[]
    hotkeyDialog?: HotkeyDialog
    backButton?: BackButton
    forwardButton?: ForwardButton
    a11ySkipNavigationButton?: A11ySkipNavigationButton
    voiceSearchButton?: VoiceSearchButton
  }
  
   interface Logo {
    topbarLogoRenderer?: TopbarLogoRenderer
  }
  
   interface TopbarLogoRenderer {
    iconImage?: IconImage
    tooltipText?: TooltipText
    endpoint?: Endpoint3
    trackingParams?: string
    overrideEntityKey?: string
  }
  
   interface IconImage {
    iconType?: string
  }
  
   interface TooltipText {
    runs?: Run2[]
  }
  
   interface Run2 {
    text?: string
  }
  
   interface Endpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata12
    browseEndpoint?: BrowseEndpoint4
  }
  
   interface CommandMetadata12 {
    webCommandMetadata?: WebCommandMetadata12
  }
  
   interface WebCommandMetadata12 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint4 {
    browseId?: string
  }
  
   interface Searchbox {
    fusionSearchboxRenderer?: FusionSearchboxRenderer
  }
  
   interface FusionSearchboxRenderer {
    icon?: Icon6
    placeholderText?: PlaceholderText
    config?: Config
    trackingParams?: string
    searchEndpoint?: SearchEndpoint
    clearButton?: ClearButton
  }
  
   interface Icon6 {
    iconType?: string
  }
  
   interface PlaceholderText {
    runs?: Run3[]
  }
  
   interface Run3 {
    text?: string
  }
  
   interface Config {
    webSearchboxConfig?: WebSearchboxConfig
  }
  
   interface WebSearchboxConfig {
    requestLanguage?: string
    requestDomain?: string
    hasOnscreenKeyboard?: boolean
    focusSearchbox?: boolean
  }
  
   interface SearchEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata13
    searchEndpoint?: SearchEndpoint2
  }
  
   interface CommandMetadata13 {
    webCommandMetadata?: WebCommandMetadata13
  }
  
   interface WebCommandMetadata13 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SearchEndpoint2 {
    query?: string
  }
  
   interface ClearButton {
    buttonRenderer?: ButtonRenderer6
  }
  
   interface ButtonRenderer6 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon7
    trackingParams?: string
    accessibilityData?: AccessibilityData13
  }
  
   interface Icon7 {
    iconType?: string
  }
  
   interface AccessibilityData13 {
    accessibilityData?: AccessibilityData14
  }
  
   interface AccessibilityData14 {
    label?: string
  }
  
   interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
    buttonRenderer?: ButtonRenderer7
  }
  
   interface TopbarMenuButtonRenderer {
    icon?: Icon8
    menuRequest?: MenuRequest
    trackingParams?: string
    accessibility?: Accessibility7
    tooltip?: string
    style?: string
  }
  
   interface Icon8 {
    iconType?: string
  }
  
   interface MenuRequest {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata14
    signalServiceEndpoint?: SignalServiceEndpoint
  }
  
   interface CommandMetadata14 {
    webCommandMetadata?: WebCommandMetadata14
  }
  
   interface WebCommandMetadata14 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SignalServiceEndpoint {
    signal?: string
    actions?: Action2[]
  }
  
   interface Action2 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction
  }
  
   interface OpenPopupAction {
    popup?: Popup
    popupType?: string
    beReused?: boolean
  }
  
   interface Popup {
    multiPageMenuRenderer?: MultiPageMenuRenderer
  }
  
   interface MultiPageMenuRenderer {
    trackingParams?: string
    style?: string
    showLoadingSpinner?: boolean
  }
  
   interface Accessibility7 {
    accessibilityData?: AccessibilityData15
  }
  
   interface AccessibilityData15 {
    label?: string
  }
  
   interface ButtonRenderer7 {
    style?: string
    size?: string
    text?: Text7
    icon?: Icon9
    navigationEndpoint?: NavigationEndpoint5
    trackingParams?: string
    targetId?: string
  }
  
   interface Text7 {
    runs?: Run4[]
  }
  
   interface Run4 {
    text?: string
  }
  
   interface Icon9 {
    iconType?: string
  }
  
   interface NavigationEndpoint5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata15
    signInEndpoint?: SignInEndpoint2
  }
  
   interface CommandMetadata15 {
    webCommandMetadata?: WebCommandMetadata15
  }
  
   interface WebCommandMetadata15 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint2 {
    idamTag?: string
  }
  
   interface HotkeyDialog {
    hotkeyDialogRenderer?: HotkeyDialogRenderer
  }
  
   interface HotkeyDialogRenderer {
    title?: Title5
    sections?: Section[]
    dismissButton?: DismissButton
    trackingParams?: string
  }
  
   interface Title5 {
    runs?: Run5[]
  }
  
   interface Run5 {
    text?: string
  }
  
   interface Section {
    hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
  }
  
   interface HotkeyDialogSectionRenderer {
    title?: Title6
    options?: Option[]
  }
  
   interface Title6 {
    runs?: Run6[]
  }
  
   interface Run6 {
    text?: string
  }
  
   interface Option {
    hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer
  }
  
   interface HotkeyDialogSectionOptionRenderer {
    label?: Label
    hotkey?: string
    hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
  }
  
   interface Label {
    runs?: Run7[]
  }
  
   interface Run7 {
    text?: string
  }
  
   interface HotkeyAccessibilityLabel {
    accessibilityData?: AccessibilityData16
  }
  
   interface AccessibilityData16 {
    label?: string
  }
  
   interface DismissButton {
    buttonRenderer?: ButtonRenderer8
  }
  
   interface ButtonRenderer8 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text8
    trackingParams?: string
  }
  
   interface Text8 {
    runs?: Run8[]
  }
  
   interface Run8 {
    text?: string
  }
  
   interface BackButton {
    buttonRenderer?: ButtonRenderer9
  }
  
   interface ButtonRenderer9 {
    trackingParams?: string
    command?: Command4
  }
  
   interface Command4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata16
    signalServiceEndpoint?: SignalServiceEndpoint2
  }
  
   interface CommandMetadata16 {
    webCommandMetadata?: WebCommandMetadata16
  }
  
   interface WebCommandMetadata16 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint2 {
    signal?: string
    actions?: Action3[]
  }
  
   interface Action3 {
    clickTrackingParams?: string
    signalAction?: SignalAction
  }
  
   interface SignalAction {
    signal?: string
  }
  
   interface ForwardButton {
    buttonRenderer?: ButtonRenderer10
  }
  
   interface ButtonRenderer10 {
    trackingParams?: string
    command?: Command5
  }
  
   interface Command5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata17
    signalServiceEndpoint?: SignalServiceEndpoint3
  }
  
   interface CommandMetadata17 {
    webCommandMetadata?: WebCommandMetadata17
  }
  
   interface WebCommandMetadata17 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint3 {
    signal?: string
    actions?: Action4[]
  }
  
   interface Action4 {
    clickTrackingParams?: string
    signalAction?: SignalAction2
  }
  
   interface SignalAction2 {
    signal?: string
  }
  
   interface A11ySkipNavigationButton {
    buttonRenderer?: ButtonRenderer11
  }
  
   interface ButtonRenderer11 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text9
    trackingParams?: string
    command?: Command6
  }
  
   interface Text9 {
    runs?: Run9[]
  }
  
   interface Run9 {
    text?: string
  }
  
   interface Command6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata18
    signalServiceEndpoint?: SignalServiceEndpoint4
  }
  
   interface CommandMetadata18 {
    webCommandMetadata?: WebCommandMetadata18
  }
  
   interface WebCommandMetadata18 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint4 {
    signal?: string
    actions?: Action5[]
  }
  
   interface Action5 {
    clickTrackingParams?: string
    signalAction?: SignalAction3
  }
  
   interface SignalAction3 {
    signal?: string
  }
  
   interface VoiceSearchButton {
    buttonRenderer?: ButtonRenderer12
  }
  
   interface ButtonRenderer12 {
    style?: string
    size?: string
    isDisabled?: boolean
    serviceEndpoint?: ServiceEndpoint
    icon?: Icon11
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData19
  }
  
   interface ServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata19
    signalServiceEndpoint?: SignalServiceEndpoint5
  }
  
   interface CommandMetadata19 {
    webCommandMetadata?: WebCommandMetadata19
  }
  
   interface WebCommandMetadata19 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint5 {
    signal?: string
    actions?: Action6[]
  }
  
   interface Action6 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction2
  }
  
   interface OpenPopupAction2 {
    popup?: Popup2
    popupType?: string
  }
  
   interface Popup2 {
    voiceSearchDialogRenderer?: VoiceSearchDialogRenderer
  }
  
   interface VoiceSearchDialogRenderer {
    placeholderHeader?: PlaceholderHeader
    promptHeader?: PromptHeader
    exampleQuery1?: ExampleQuery1
    exampleQuery2?: ExampleQuery2
    promptMicrophoneLabel?: PromptMicrophoneLabel
    loadingHeader?: LoadingHeader
    connectionErrorHeader?: ConnectionErrorHeader
    connectionErrorMicrophoneLabel?: ConnectionErrorMicrophoneLabel
    permissionsHeader?: PermissionsHeader
    permissionsSubtext?: PermissionsSubtext
    disabledHeader?: DisabledHeader
    disabledSubtext?: DisabledSubtext
    microphoneButtonAriaLabel?: MicrophoneButtonAriaLabel
    exitButton?: ExitButton
    trackingParams?: string
    microphoneOffPromptHeader?: MicrophoneOffPromptHeader
  }
  
   interface PlaceholderHeader {
    runs?: Run10[]
  }
  
   interface Run10 {
    text?: string
  }
  
   interface PromptHeader {
    runs?: Run11[]
  }
  
   interface Run11 {
    text?: string
  }
  
   interface ExampleQuery1 {
    runs?: Run12[]
  }
  
   interface Run12 {
    text?: string
  }
  
   interface ExampleQuery2 {
    runs?: Run13[]
  }
  
   interface Run13 {
    text?: string
  }
  
   interface PromptMicrophoneLabel {
    runs?: Run14[]
  }
  
   interface Run14 {
    text?: string
  }
  
   interface LoadingHeader {
    runs?: Run15[]
  }
  
   interface Run15 {
    text?: string
  }
  
   interface ConnectionErrorHeader {
    runs?: Run16[]
  }
  
   interface Run16 {
    text?: string
  }
  
   interface ConnectionErrorMicrophoneLabel {
    runs?: Run17[]
  }
  
   interface Run17 {
    text?: string
  }
  
   interface PermissionsHeader {
    runs?: Run18[]
  }
  
   interface Run18 {
    text?: string
  }
  
   interface PermissionsSubtext {
    runs?: Run19[]
  }
  
   interface Run19 {
    text?: string
  }
  
   interface DisabledHeader {
    runs?: Run20[]
  }
  
   interface Run20 {
    text?: string
  }
  
   interface DisabledSubtext {
    runs?: Run21[]
  }
  
   interface Run21 {
    text?: string
  }
  
   interface MicrophoneButtonAriaLabel {
    runs?: Run22[]
  }
  
   interface Run22 {
    text?: string
  }
  
   interface ExitButton {
    buttonRenderer?: ButtonRenderer13
  }
  
   interface ButtonRenderer13 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon10
    trackingParams?: string
    accessibilityData?: AccessibilityData17
  }
  
   interface Icon10 {
    iconType?: string
  }
  
   interface AccessibilityData17 {
    accessibilityData?: AccessibilityData18
  }
  
   interface AccessibilityData18 {
    label?: string
  }
  
   interface MicrophoneOffPromptHeader {
    runs?: Run23[]
  }
  
   interface Run23 {
    text?: string
  }
  
   interface Icon11 {
    iconType?: string
  }
  
   interface AccessibilityData19 {
    accessibilityData?: AccessibilityData20
  }
  
   interface AccessibilityData20 {
    label?: string
  }
  
   interface Microformat {
    microformatDataRenderer?: MicroformatDataRenderer
  }
  
   interface MicroformatDataRenderer {
    urlCanonical?: string
    title?: string
    description?: string
    thumbnail?: Thumbnail6
    siteName?: string
    appName?: string
    androidPackage?: string
    iosAppStoreId?: string
    iosAppArguments?: string
    ogType?: string
    urlApplinksWeb?: string
    urlApplinksIos?: string
    urlApplinksAndroid?: string
    urlTwitterIos?: string
    urlTwitterAndroid?: string
    twitterCardType?: string
    twitterSiteHandle?: string
    schemaDotOrgType?: string
    noindex?: boolean
    unlisted?: boolean
    familySafe?: boolean
    tags?: string[]
    availableCountries?: string[]
    linkAlternates?: LinkAlternate[]
  }
  
   interface Thumbnail6 {
    thumbnails?: Thumbnail7[]
  }
  
   interface Thumbnail7 {
    url?: string
    width?: number
    height?: number
  }
  
   interface LinkAlternate {
    hrefUrl?: string
  }
  