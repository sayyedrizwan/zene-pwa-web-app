export interface YTStoreData {
    responseContext?: ResponseContext
    contents?: Contents
    header?: Header
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
    sectionListRenderer?: SectionListRenderer
}

interface SectionListRenderer {
    contents?: Content2[]
    trackingParams?: string
    disablePullToRefresh?: boolean
}

interface Content2 {
    itemSectionRenderer?: ItemSectionRenderer
}

interface ItemSectionRenderer {
    contents?: Content3[]
    trackingParams?: string
}

interface Content3 {
    shelfRenderer?: ShelfRenderer
}

interface ShelfRenderer {
    title?: Title
    content?: Content4
    trackingParams?: string
    menu?: Menu
}

interface Title {
    simpleText?: string
}

interface Content4 {
    gridRenderer?: GridRenderer
}

interface GridRenderer {
    items?: Item[]
    trackingParams?: string
}

interface Item {
    verticalProductCardRenderer?: VerticalProductCardRenderer
}

interface VerticalProductCardRenderer {
    title?: string
    thumbnail?: Thumbnail
    navigationEndpoint?: NavigationEndpoint
    price?: string
    accessibilityTitle?: string
    merchantName?: string
    trackingParams?: string
    fromMerchantText?: string
    showOpenInNewIcon?: boolean
    useNewStyle?: boolean
    dealsData?: DealsData
    ctaText?: CtaText
    ctaStyle?: string
    layoutStyle?: string
}

interface Thumbnail {
    thumbnails?: Thumbnail2[]
}

interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
}

interface NavigationEndpoint {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand
}

interface CommandExecutorCommand {
    commands?: Command[]
}

interface Command {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata2
    feedbackEndpoint?: FeedbackEndpoint
    urlEndpoint?: UrlEndpoint
}

interface CommandMetadata2 {
    webCommandMetadata?: WebCommandMetadata2
}

interface WebCommandMetadata2 {
    sendPost?: boolean
    apiUrl?: string
    url?: string
    webPageType?: string
    rootVe?: number
}

interface FeedbackEndpoint {
    feedbackToken?: string
}

interface UrlEndpoint {
    url?: string
    target?: string
    nofollow?: boolean
}

interface DealsData {
    currentPrice?: string
}

interface CtaText {
    runs?: Run[]
}

interface Run {
    text?: string
}

interface Menu {
    menuRenderer?: MenuRenderer
}

interface MenuRenderer {
    trackingParams?: string
    topLevelButtons?: TopLevelButton[]
}

interface TopLevelButton {
    buttonRenderer?: ButtonRenderer
}

interface ButtonRenderer {
    icon?: Icon
    trackingParams?: string
    command?: Command2
}

interface Icon {
    iconType?: string
}

interface Command2 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction
}

interface OpenPopupAction {
    popup?: Popup
    popupType?: string
}

interface Popup {
    menuPopupRenderer?: MenuPopupRenderer
}

interface MenuPopupRenderer {
    items?: Item2[]
    menuPopupAccessibility?: MenuPopupAccessibility
}

interface Item2 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
    menuServiceItemRenderer?: MenuServiceItemRenderer
}

interface MenuNavigationItemRenderer {
    text?: Text
    icon?: Icon2
    navigationEndpoint?: NavigationEndpoint2
    trackingParams?: string
}

interface Text {
    accessibility?: Accessibility
    simpleText?: string
}

interface Accessibility {
    accessibilityData?: AccessibilityData
}

interface AccessibilityData {
    label?: string
}

interface Icon2 {
    iconType?: string
}

interface NavigationEndpoint2 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction2
}

interface OpenPopupAction2 {
    popup?: Popup2
    popupType?: string
}

interface Popup2 {
    fancyDismissibleDialogRenderer?: FancyDismissibleDialogRenderer
}

interface FancyDismissibleDialogRenderer {
    dialogMessage?: DialogMessage
    confirmLabel?: ConfirmLabel
    trackingParams?: string
}

interface DialogMessage {
    runs?: Run2[]
}

interface Run2 {
    text?: string
    textColor?: number
    navigationEndpoint?: NavigationEndpoint3
}

interface NavigationEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata3
    urlEndpoint?: UrlEndpoint2
}

interface CommandMetadata3 {
    webCommandMetadata?: WebCommandMetadata3
}

interface WebCommandMetadata3 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface UrlEndpoint2 {
    url?: string
    target?: string
}

interface ConfirmLabel {
    simpleText?: string
}

interface MenuServiceItemRenderer {
    text?: Text2
    icon?: Icon3
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
    loggingDirectives?: LoggingDirectives
}

interface Text2 {
    accessibility?: Accessibility2
    simpleText?: string
}

interface Accessibility2 {
    accessibilityData?: AccessibilityData2
}

interface AccessibilityData2 {
    label?: string
}

interface Icon3 {
    iconType?: string
}

interface ServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata4
    signInEndpoint?: SignInEndpoint
}

interface CommandMetadata4 {
    webCommandMetadata?: WebCommandMetadata4
}

interface WebCommandMetadata4 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface SignInEndpoint {
    nextEndpoint?: NextEndpoint
}

interface NextEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata5
    getReportFormEndpoint?: GetReportFormEndpoint
}

interface CommandMetadata5 {
    webCommandMetadata?: WebCommandMetadata5
}

interface WebCommandMetadata5 {
    sendPost?: boolean
    apiUrl?: string
}

interface GetReportFormEndpoint {
    params?: string
}

interface LoggingDirectives {
    trackingParams?: string
    visibility?: Visibility
    gestures?: Gestures
}

interface Visibility {
    types?: string
}

interface Gestures {
    types?: string
}

interface MenuPopupAccessibility {
    label?: string
}

interface ExpandableTabRenderer {
    endpoint?: Endpoint2
    title?: string
    selected?: boolean
}

interface Endpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata6
    browseEndpoint?: BrowseEndpoint2
}

interface CommandMetadata6 {
    webCommandMetadata?: WebCommandMetadata6
}

interface WebCommandMetadata6 {
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

interface Header {
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
    title?: Title2
    image?: Image2
    metadata?: Metadata
    actions?: Actions
    description?: Description
    attribution?: Attribution
    banner?: Banner
    rendererContext?: RendererContext7
}

interface Title2 {
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
    loggingContext?: LoggingContext
    accessibilityContext?: AccessibilityContext
}

interface LoggingContext {
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
    onLongPress?: OnLongPress
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

interface OnLongPress {
    innertubeCommand?: InnertubeCommand
}

interface InnertubeCommand {
    clickTrackingParams?: string
    copyTextEndpoint?: CopyTextEndpoint
}

interface CopyTextEndpoint {
    text?: string
}

interface RendererContext2 {
    loggingContext?: LoggingContext2
}

interface LoggingContext2 {
    loggingDirectives?: LoggingDirectives3
}

interface LoggingDirectives3 {
    trackingParams?: string
    visibility?: Visibility3
    clientVeSpec?: ClientVeSpec2
}

interface Visibility3 {
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
    innertubeCommand?: InnertubeCommand2
}

interface InnertubeCommand2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata7
    modalEndpoint?: ModalEndpoint
}

interface CommandMetadata7 {
    webCommandMetadata?: WebCommandMetadata7
}

interface WebCommandMetadata7 {
    ignoreNavigation?: boolean
}

interface ModalEndpoint {
    modal?: Modal
}

interface Modal {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer
}

interface ModalWithTitleAndButtonRenderer {
    title?: Title3
    content?: Content6
    button?: Button
}

interface Title3 {
    simpleText?: string
}

interface Content6 {
    simpleText?: string
}

interface Button {
    buttonRenderer?: ButtonRenderer2
}

interface ButtonRenderer2 {
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
    commandMetadata?: CommandMetadata8
    signInEndpoint?: SignInEndpoint2
}

interface CommandMetadata8 {
    webCommandMetadata?: WebCommandMetadata8
}

interface WebCommandMetadata8 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface SignInEndpoint2 {
    nextEndpoint?: NextEndpoint2
    continueAction?: string
    idamTag?: string
}

interface NextEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata9
    browseEndpoint?: BrowseEndpoint3
}

interface CommandMetadata9 {
    webCommandMetadata?: WebCommandMetadata9
}

interface WebCommandMetadata9 {
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
    loggingContext?: LoggingContext3
}

interface LoggingContext3 {
    loggingDirectives?: LoggingDirectives4
}

interface LoggingDirectives4 {
    trackingParams?: string
    visibility?: Visibility4
    clientVeSpec?: ClientVeSpec3
}

interface Visibility4 {
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
    loggingContext?: LoggingContext4
    accessibilityContext?: AccessibilityContext2
    commandContext?: CommandContext
}

interface LoggingContext4 {
    loggingDirectives?: LoggingDirectives5
}

interface LoggingDirectives5 {
    trackingParams?: string
    visibility?: Visibility5
    clientVeSpec?: ClientVeSpec4
}

interface Visibility5 {
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
    innertubeCommand?: InnertubeCommand3
}

interface InnertubeCommand3 {
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
    header?: Header2
    content?: Content7
    targetId?: string
    identifier?: Identifier
}

interface Header2 {
    engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer
}

interface EngagementPanelTitleHeaderRenderer {
    title?: Title4
    visibilityButton?: VisibilityButton
    trackingParams?: string
}

interface Title4 {
    simpleText?: string
}

interface VisibilityButton {
    buttonRenderer?: ButtonRenderer3
}

interface ButtonRenderer3 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon4
    accessibility?: Accessibility3
    trackingParams?: string
    accessibilityData?: AccessibilityData3
    command?: Command3
}

interface Icon4 {
    iconType?: string
}

interface Accessibility3 {
    label?: string
}

interface AccessibilityData3 {
    accessibilityData?: AccessibilityData4
}

interface AccessibilityData4 {
    label?: string
}

interface Command3 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction
}

interface ChangeEngagementPanelVisibilityAction {
    targetId?: string
    visibility?: string
}

interface Content7 {
    sectionListRenderer?: SectionListRenderer2
}

interface SectionListRenderer2 {
    contents?: Content8[]
    trackingParams?: string
    scrollPaneStyle?: ScrollPaneStyle
}

interface Content8 {
    itemSectionRenderer?: ItemSectionRenderer2
}

interface ItemSectionRenderer2 {
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
    commandMetadata?: CommandMetadata10
    continuationCommand?: ContinuationCommand
}

interface CommandMetadata10 {
    webCommandMetadata?: WebCommandMetadata10
}

interface WebCommandMetadata10 {
    sendPost?: boolean
    apiUrl?: string
}

interface ContinuationCommand {
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
    innertubeCommand?: InnertubeCommand4
}

interface InnertubeCommand4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata11
    urlEndpoint?: UrlEndpoint3
}

interface CommandMetadata11 {
    webCommandMetadata?: WebCommandMetadata11
}

interface WebCommandMetadata11 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface UrlEndpoint3 {
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
    innertubeCommand?: InnertubeCommand5
}

interface InnertubeCommand5 {
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
    header?: Header3
    content?: Content10
    targetId?: string
    identifier?: Identifier3
}

interface Header3 {
    engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer2
}

interface EngagementPanelTitleHeaderRenderer2 {
    title?: Title5
    visibilityButton?: VisibilityButton2
    trackingParams?: string
}

interface Title5 {
    simpleText?: string
}

interface VisibilityButton2 {
    buttonRenderer?: ButtonRenderer4
}

interface ButtonRenderer4 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon5
    accessibility?: Accessibility4
    trackingParams?: string
    accessibilityData?: AccessibilityData5
    command?: Command4
}

interface Icon5 {
    iconType?: string
}

interface Accessibility4 {
    label?: string
}

interface AccessibilityData5 {
    accessibilityData?: AccessibilityData6
}

interface AccessibilityData6 {
    label?: string
}

interface Command4 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction2
}

interface ChangeEngagementPanelVisibilityAction2 {
    targetId?: string
    visibility?: string
}

interface Content10 {
    sectionListRenderer?: SectionListRenderer3
}

interface SectionListRenderer3 {
    contents?: Content11[]
    trackingParams?: string
    scrollPaneStyle?: ScrollPaneStyle2
}

interface Content11 {
    itemSectionRenderer?: ItemSectionRenderer3
}

interface ItemSectionRenderer3 {
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
    commandMetadata?: CommandMetadata12
    continuationCommand?: ContinuationCommand2
}

interface CommandMetadata12 {
    webCommandMetadata?: WebCommandMetadata12
}

interface WebCommandMetadata12 {
    sendPost?: boolean
    apiUrl?: string
}

interface ContinuationCommand2 {
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
    loggingContext?: LoggingContext5
}

interface LoggingContext5 {
    loggingDirectives?: LoggingDirectives6
}

interface LoggingDirectives6 {
    trackingParams?: string
    visibility?: Visibility6
    clientVeSpec?: ClientVeSpec5
}

interface Visibility6 {
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
    loggingContext?: LoggingContext6
}

interface LoggingContext6 {
    loggingDirectives?: LoggingDirectives7
}

interface LoggingDirectives7 {
    trackingParams?: string
    visibility?: Visibility7
    clientVeSpec?: ClientVeSpec6
}

interface Visibility7 {
    types?: string
}

interface ClientVeSpec6 {
    uiType?: number
    veCounter?: number
}

interface RendererContext7 {
    loggingContext?: LoggingContext7
}

interface LoggingContext7 {
    loggingDirectives?: LoggingDirectives8
}

interface LoggingDirectives8 {
    trackingParams?: string
    visibility?: Visibility8
    clientVeSpec?: ClientVeSpec7
}

interface Visibility8 {
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
    thumbnails?: Thumbnail3[]
}

interface Thumbnail3 {
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
    runs?: Run3[]
}

interface Run3 {
    text?: string
}

interface Endpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata13
    browseEndpoint?: BrowseEndpoint4
}

interface CommandMetadata13 {
    webCommandMetadata?: WebCommandMetadata13
}

interface WebCommandMetadata13 {
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
    runs?: Run4[]
}

interface Run4 {
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
    commandMetadata?: CommandMetadata14
    searchEndpoint?: SearchEndpoint2
}

interface CommandMetadata14 {
    webCommandMetadata?: WebCommandMetadata14
}

interface WebCommandMetadata14 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface SearchEndpoint2 {
    query?: string
}

interface ClearButton {
    buttonRenderer?: ButtonRenderer5
}

interface ButtonRenderer5 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon7
    trackingParams?: string
    accessibilityData?: AccessibilityData7
}

interface Icon7 {
    iconType?: string
}

interface AccessibilityData7 {
    accessibilityData?: AccessibilityData8
}

interface AccessibilityData8 {
    label?: string
}

interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
    buttonRenderer?: ButtonRenderer6
}

interface TopbarMenuButtonRenderer {
    icon?: Icon8
    menuRequest?: MenuRequest
    trackingParams?: string
    accessibility?: Accessibility5
    tooltip?: string
    style?: string
}

interface Icon8 {
    iconType?: string
}

interface MenuRequest {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata15
    signalServiceEndpoint?: SignalServiceEndpoint
}

interface CommandMetadata15 {
    webCommandMetadata?: WebCommandMetadata15
}

interface WebCommandMetadata15 {
    sendPost?: boolean
    apiUrl?: string
}

interface SignalServiceEndpoint {
    signal?: string
    actions?: Action2[]
}

interface Action2 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction3
}

interface OpenPopupAction3 {
    popup?: Popup3
    popupType?: string
    beReused?: boolean
}

interface Popup3 {
    multiPageMenuRenderer?: MultiPageMenuRenderer
}

interface MultiPageMenuRenderer {
    trackingParams?: string
    style?: string
    showLoadingSpinner?: boolean
}

interface Accessibility5 {
    accessibilityData?: AccessibilityData9
}

interface AccessibilityData9 {
    label?: string
}

interface ButtonRenderer6 {
    style?: string
    size?: string
    text?: Text7
    icon?: Icon9
    navigationEndpoint?: NavigationEndpoint5
    trackingParams?: string
    targetId?: string
}

interface Text7 {
    runs?: Run5[]
}

interface Run5 {
    text?: string
}

interface Icon9 {
    iconType?: string
}

interface NavigationEndpoint5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata16
    signInEndpoint?: SignInEndpoint3
}

interface CommandMetadata16 {
    webCommandMetadata?: WebCommandMetadata16
}

interface WebCommandMetadata16 {
    url?: string
    webPageType?: string
    rootVe?: number
}

interface SignInEndpoint3 {
    idamTag?: string
}

interface HotkeyDialog {
    hotkeyDialogRenderer?: HotkeyDialogRenderer
}

interface HotkeyDialogRenderer {
    title?: Title6
    sections?: Section[]
    dismissButton?: DismissButton
    trackingParams?: string
}

interface Title6 {
    runs?: Run6[]
}

interface Run6 {
    text?: string
}

interface Section {
    hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
}

interface HotkeyDialogSectionRenderer {
    title?: Title7
    options?: Option[]
}

interface Title7 {
    runs?: Run7[]
}

interface Run7 {
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
    runs?: Run8[]
}

interface Run8 {
    text?: string
}

interface HotkeyAccessibilityLabel {
    accessibilityData?: AccessibilityData10
}

interface AccessibilityData10 {
    label?: string
}

interface DismissButton {
    buttonRenderer?: ButtonRenderer7
}

interface ButtonRenderer7 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text8
    trackingParams?: string
}

interface Text8 {
    runs?: Run9[]
}

interface Run9 {
    text?: string
}

interface BackButton {
    buttonRenderer?: ButtonRenderer8
}

interface ButtonRenderer8 {
    trackingParams?: string
    command?: Command5
}

interface Command5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata17
    signalServiceEndpoint?: SignalServiceEndpoint2
}

interface CommandMetadata17 {
    webCommandMetadata?: WebCommandMetadata17
}

interface WebCommandMetadata17 {
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
    buttonRenderer?: ButtonRenderer9
}

interface ButtonRenderer9 {
    trackingParams?: string
    command?: Command6
}

interface Command6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata18
    signalServiceEndpoint?: SignalServiceEndpoint3
}

interface CommandMetadata18 {
    webCommandMetadata?: WebCommandMetadata18
}

interface WebCommandMetadata18 {
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
    buttonRenderer?: ButtonRenderer10
}

interface ButtonRenderer10 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text9
    trackingParams?: string
    command?: Command7
}

interface Text9 {
    runs?: Run10[]
}

interface Run10 {
    text?: string
}

interface Command7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata19
    signalServiceEndpoint?: SignalServiceEndpoint4
}

interface CommandMetadata19 {
    webCommandMetadata?: WebCommandMetadata19
}

interface WebCommandMetadata19 {
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
    buttonRenderer?: ButtonRenderer11
}

interface ButtonRenderer11 {
    style?: string
    size?: string
    isDisabled?: boolean
    serviceEndpoint?: ServiceEndpoint2
    icon?: Icon11
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData13
}

interface ServiceEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata20
    signalServiceEndpoint?: SignalServiceEndpoint5
}

interface CommandMetadata20 {
    webCommandMetadata?: WebCommandMetadata20
}

interface WebCommandMetadata20 {
    sendPost?: boolean
}

interface SignalServiceEndpoint5 {
    signal?: string
    actions?: Action6[]
}

interface Action6 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction4
}

interface OpenPopupAction4 {
    popup?: Popup4
    popupType?: string
}

interface Popup4 {
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
    runs?: Run11[]
}

interface Run11 {
    text?: string
}

interface PromptHeader {
    runs?: Run12[]
}

interface Run12 {
    text?: string
}

interface ExampleQuery1 {
    runs?: Run13[]
}

interface Run13 {
    text?: string
}

interface ExampleQuery2 {
    runs?: Run14[]
}

interface Run14 {
    text?: string
}

interface PromptMicrophoneLabel {
    runs?: Run15[]
}

interface Run15 {
    text?: string
}

interface LoadingHeader {
    runs?: Run16[]
}

interface Run16 {
    text?: string
}

interface ConnectionErrorHeader {
    runs?: Run17[]
}

interface Run17 {
    text?: string
}

interface ConnectionErrorMicrophoneLabel {
    runs?: Run18[]
}

interface Run18 {
    text?: string
}

interface PermissionsHeader {
    runs?: Run19[]
}

interface Run19 {
    text?: string
}

interface PermissionsSubtext {
    runs?: Run20[]
}

interface Run20 {
    text?: string
}

interface DisabledHeader {
    runs?: Run21[]
}

interface Run21 {
    text?: string
}

interface DisabledSubtext {
    runs?: Run22[]
}

interface Run22 {
    text?: string
}

interface MicrophoneButtonAriaLabel {
    runs?: Run23[]
}

interface Run23 {
    text?: string
}

interface ExitButton {
    buttonRenderer?: ButtonRenderer12
}

interface ButtonRenderer12 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon10
    trackingParams?: string
    accessibilityData?: AccessibilityData11
}

interface Icon10 {
    iconType?: string
}

interface AccessibilityData11 {
    accessibilityData?: AccessibilityData12
}

interface AccessibilityData12 {
    label?: string
}

interface MicrophoneOffPromptHeader {
    runs?: Run24[]
}

interface Run24 {
    text?: string
}

interface Icon11 {
    iconType?: string
}

interface AccessibilityData13 {
    accessibilityData?: AccessibilityData14
}

interface AccessibilityData14 {
    label?: string
}

interface Microformat {
    microformatDataRenderer?: MicroformatDataRenderer
}

interface MicroformatDataRenderer {
    urlCanonical?: string
    title?: string
    description?: string
    thumbnail?: Thumbnail4
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

interface Thumbnail4 {
    thumbnails?: Thumbnail5[]
}

interface Thumbnail5 {
    url?: string
    width?: number
    height?: number
}

interface LinkAlternate {
    hrefUrl?: string
}
