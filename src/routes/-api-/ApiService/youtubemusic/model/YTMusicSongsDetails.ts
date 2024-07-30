 export interface YTMusicSongsDetails {
    playabilityStatus?: PlayabilityStatus
    streamingData?: StreamingData
    playerAds?: PlayerAd[]
    playbackTracking?: PlaybackTracking
    videoDetails?: VideoDetails
    playerConfig?: PlayerConfig
    storyboards?: Storyboards
    microformat?: Microformat
    trackingParams?: string
    attestation?: Attestation
    adPlacements?: AdPlacement[]
    adSlots?: AdSlot[]
    adBreakHeartbeatParams?: string
  }
  
   interface PlayabilityStatus {
    status?: string
    playableInEmbed?: boolean
    audioOnlyPlayability?: AudioOnlyPlayability
    miniplayer?: Miniplayer
    contextParams?: string
  }
  
   interface AudioOnlyPlayability {
    audioOnlyPlayabilityRenderer?: AudioOnlyPlayabilityRenderer
  }
  
   interface AudioOnlyPlayabilityRenderer {
    trackingParams?: string
    audioOnlyAvailability?: string
  }
  
   interface Miniplayer {
    miniplayerRenderer?: MiniplayerRenderer
  }
  
   interface MiniplayerRenderer {
    playbackMode?: string
  }
  
   interface StreamingData {
    expiresInSeconds?: string
    formats?: Format[]
    adaptiveFormats?: AdaptiveFormat[]
  }
  
   interface Format {
    itag?: number
    mimeType?: string
    bitrate?: number
    width?: number
    height?: number
    lastModified?: string
    quality?: string
    xtags?: string
    fps?: number
    qualityLabel?: string
    projectionType?: string
    audioQuality?: string
    approxDurationMs?: string
    audioSampleRate?: string
    audioChannels?: number
    signatureCipher?: string
  }
  
   interface AdaptiveFormat {
    itag?: number
    mimeType?: string
    bitrate?: number
    width?: number
    height?: number
    initRange?: InitRange
    indexRange?: IndexRange
    lastModified?: string
    contentLength?: string
    quality?: string
    fps?: number
    qualityLabel?: string
    projectionType?: string
    averageBitrate?: number
    approxDurationMs?: string
    signatureCipher?: string
    colorInfo?: ColorInfo
    highReplication?: boolean
    audioQuality?: string
    audioSampleRate?: string
    audioChannels?: number
    loudnessDb?: number
  }
  
   interface InitRange {
    start?: string
    end?: string
  }
  
   interface IndexRange {
    start?: string
    end?: string
  }
  
   interface ColorInfo {
    primaries?: string
    transferCharacteristics?: string
    matrixCoefficients?: string
  }
  
   interface PlayerAd {
    playerLegacyDesktopWatchAdsRenderer?: PlayerLegacyDesktopWatchAdsRenderer
  }
  
   interface PlayerLegacyDesktopWatchAdsRenderer {
    playerAdParams?: PlayerAdParams
    gutParams?: GutParams
    showCompanion?: boolean
    showInstream?: boolean
    useGut?: boolean
  }
  
   interface PlayerAdParams {
    showContentThumbnail?: boolean
    enabledEngageTypes?: string
  }
  
   interface GutParams {
    tag?: string
  }
  
   interface PlaybackTracking {
    videostatsPlaybackUrl?: VideostatsPlaybackUrl
    videostatsDelayplayUrl?: VideostatsDelayplayUrl
    videostatsWatchtimeUrl?: VideostatsWatchtimeUrl
    ptrackingUrl?: PtrackingUrl
    qoeUrl?: QoeUrl
    atrUrl?: AtrUrl
    videostatsScheduledFlushWalltimeSeconds?: number[]
    videostatsDefaultFlushIntervalSeconds?: number
  }
  
   interface VideostatsPlaybackUrl {
    baseUrl?: string
    headers?: Header[]
  }
  
   interface Header {
    headerType?: string
  }
  
   interface VideostatsDelayplayUrl {
    baseUrl?: string
    headers?: Header2[]
  }
  
   interface Header2 {
    headerType?: string
  }
  
   interface VideostatsWatchtimeUrl {
    baseUrl?: string
    headers?: Header3[]
  }
  
   interface Header3 {
    headerType?: string
  }
  
   interface PtrackingUrl {
    baseUrl?: string
    headers?: Header4[]
  }
  
   interface Header4 {
    headerType?: string
  }
  
   interface QoeUrl {
    baseUrl?: string
    headers?: Header5[]
  }
  
   interface Header5 {
    headerType?: string
  }
  
   interface AtrUrl {
    baseUrl?: string
    elapsedMediaTimeSeconds?: number
    headers?: Header6[]
  }
  
   interface Header6 {
    headerType?: string
  }
  
   interface VideoDetails {
    videoId?: string
    title?: string
    lengthSeconds?: string
    channelId?: string
    isOwnerViewing?: boolean
    isCrawlable?: boolean
    thumbnail?: Thumbnail
    allowRatings?: boolean
    viewCount?: string
    author?: string
    isPrivate?: boolean
    isUnpluggedCorpus?: boolean
    musicVideoType?: string
    isLiveContent?: boolean
  }
  
   interface Thumbnail {
    thumbnails?: Thumbnail2[]
  }
  
   interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
  }
  
   interface PlayerConfig {
    audioConfig?: AudioConfig
    streamSelectionConfig?: StreamSelectionConfig
    mediaCommonConfig?: MediaCommonConfig
    webPlayerConfig?: WebPlayerConfig
  }
  
   interface AudioConfig {
    loudnessDb?: number
    perceptualLoudnessDb?: number
    enablePerFormatLoudness?: boolean
  }
  
   interface StreamSelectionConfig {
    maxBitrate?: string
  }
  
   interface MediaCommonConfig {
    dynamicReadaheadConfig?: DynamicReadaheadConfig
    useServerDrivenAbr?: boolean
  }
  
   interface DynamicReadaheadConfig {
    maxReadAheadMediaTimeMs?: number
    minReadAheadMediaTimeMs?: number
    readAheadGrowthRateMs?: number
  }
  
   interface WebPlayerConfig {
    useCobaltTvosDash?: boolean
    webPlayerActionsPorting?: WebPlayerActionsPorting
  }
  
   interface WebPlayerActionsPorting {
    subscribeCommand?: SubscribeCommand
    unsubscribeCommand?: UnsubscribeCommand
    addToWatchLaterCommand?: AddToWatchLaterCommand
    removeFromWatchLaterCommand?: RemoveFromWatchLaterCommand
  }
  
   interface SubscribeCommand {
    clickTrackingParams?: string
    subscribeEndpoint?: SubscribeEndpoint
  }
  
   interface SubscribeEndpoint {
    channelIds?: string[]
    params?: string
  }
  
   interface UnsubscribeCommand {
    clickTrackingParams?: string
    unsubscribeEndpoint?: UnsubscribeEndpoint
  }
  
   interface UnsubscribeEndpoint {
    channelIds?: string[]
    params?: string
  }
  
   interface AddToWatchLaterCommand {
    clickTrackingParams?: string
    playlistEditEndpoint?: PlaylistEditEndpoint
  }
  
   interface PlaylistEditEndpoint {
    playlistId?: string
    actions?: Action[]
  }
  
   interface Action {
    addedVideoId?: string
    action?: string
  }
  
   interface RemoveFromWatchLaterCommand {
    clickTrackingParams?: string
    playlistEditEndpoint?: PlaylistEditEndpoint2
  }
  
   interface PlaylistEditEndpoint2 {
    playlistId?: string
    actions?: Action2[]
  }
  
   interface Action2 {
    action?: string
    removedVideoId?: string
  }
  
   interface Storyboards {
    playerStoryboardSpecRenderer?: PlayerStoryboardSpecRenderer
  }
  
   interface PlayerStoryboardSpecRenderer {
    spec?: string
    recommendedLevel?: number
  }
  
   interface Microformat {
    microformatDataRenderer?: MicroformatDataRenderer
  }
  
   interface MicroformatDataRenderer {
    urlCanonical?: string
    title?: string
    description?: string
    thumbnail?: Thumbnail3
    siteName?: string
    appName?: string
    androidPackage?: string
    iosAppStoreId?: string
    iosAppArguments?: string
    ogType?: string
    urlApplinksIos?: string
    urlApplinksAndroid?: string
    urlTwitterIos?: string
    urlTwitterAndroid?: string
    twitterCardType?: string
    twitterSiteHandle?: string
    schemaDotOrgType?: string
    noindex?: boolean
    unlisted?: boolean
    paid?: boolean
    familySafe?: boolean
    tags?: string[]
    availableCountries?: string[]
    pageOwnerDetails?: PageOwnerDetails
    videoDetails?: VideoDetails2
    linkAlternates?: LinkAlternate[]
    viewCount?: string
    publishDate?: string
    category?: string
    uploadDate?: string
  }
  
   interface Thumbnail3 {
    thumbnails?: Thumbnail4[]
  }
  
   interface Thumbnail4 {
    url?: string
    width?: number
    height?: number
  }
  
   interface PageOwnerDetails {
    name?: string
    externalChannelId?: string
    youtubeProfileUrl?: string
  }
  
   interface VideoDetails2 {
    externalVideoId?: string
    durationSeconds?: string
    durationIso8601?: string
  }
  
   interface LinkAlternate {
    hrefUrl?: string
    title?: string
    alternateType?: string
  }
  
   interface Attestation {
    playerAttestationRenderer?: PlayerAttestationRenderer
  }
  
   interface PlayerAttestationRenderer {
    challenge?: string
    botguardData?: BotguardData
  }
  
   interface BotguardData {
    program?: string
    interpreterSafeUrl?: InterpreterSafeUrl
    serverEnvironment?: number
  }
  
   interface InterpreterSafeUrl {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string
  }
  
   interface AdPlacement {
    adPlacementRenderer?: AdPlacementRenderer
  }
  
   interface AdPlacementRenderer {
    config?: Config
    renderer?: Renderer
    adSlotLoggingData?: AdSlotLoggingData
  }
  
   interface Config {
    adPlacementConfig?: AdPlacementConfig
  }
  
   interface AdPlacementConfig {
    kind?: string
    adTimeOffset?: AdTimeOffset
    hideCueRangeMarker?: boolean
  }
  
   interface AdTimeOffset {
    offsetStartMilliseconds?: string
    offsetEndMilliseconds?: string
  }
  
   interface Renderer {
    adBreakServiceRenderer?: AdBreakServiceRenderer
  }
  
   interface AdBreakServiceRenderer {
    prefetchMilliseconds?: string
    getAdBreakUrl?: string
  }
  
   interface AdSlotLoggingData {
    serializedSlotAdServingDataEntry?: string
  }
  
   interface AdSlot {
    adSlotRenderer?: AdSlotRenderer
  }
  
   interface AdSlotRenderer {
    adSlotMetadata?: AdSlotMetadata
    fulfillmentContent?: FulfillmentContent
    slotEntryTrigger?: SlotEntryTrigger
    slotFulfillmentTriggers?: SlotFulfillmentTrigger[]
    slotExpirationTriggers?: SlotExpirationTrigger[]
  }
  
   interface AdSlotMetadata {
    slotId?: string
    slotType?: string
    adSlotLoggingData?: AdSlotLoggingData2
    triggerEvent?: string
    triggeringSourceLayoutId?: string
  }
  
   interface AdSlotLoggingData2 {
    serializedSlotAdServingDataEntry?: string
  }
  
   interface FulfillmentContent {
    fulfilledLayout?: FulfilledLayout
  }
  
   interface FulfilledLayout {
    playerBytesAdLayoutRenderer?: PlayerBytesAdLayoutRenderer
    inPlayerAdLayoutRenderer?: InPlayerAdLayoutRenderer
  }
  
   interface PlayerBytesAdLayoutRenderer {
    adLayoutMetadata?: AdLayoutMetadata
    renderingContent?: RenderingContent
    layoutExitNormalTriggers?: LayoutExitNormalTrigger[]
    layoutExitSkipTriggers?: LayoutExitSkipTrigger[]
    layoutExitMuteTriggers?: LayoutExitMuteTrigger[]
  }
  
   interface AdLayoutMetadata {
    layoutId?: string
    layoutType?: string
    adLayoutLoggingData?: AdLayoutLoggingData
  }
  
   interface AdLayoutLoggingData {
    serializedAdServingDataEntry?: string
  }
  
   interface RenderingContent {
    playerBytesSequentialLayoutRenderer?: PlayerBytesSequentialLayoutRenderer
  }
  
   interface PlayerBytesSequentialLayoutRenderer {
    sequentialLayouts?: SequentialLayout[]
  }
  
   interface SequentialLayout {
    playerBytesAdLayoutRenderer?: PlayerBytesAdLayoutRenderer2
  }
  
   interface PlayerBytesAdLayoutRenderer2 {
    adLayoutMetadata?: AdLayoutMetadata2
    renderingContent?: RenderingContent2
  }
  
   interface AdLayoutMetadata2 {
    layoutId?: string
    layoutType?: string
    adLayoutLoggingData?: AdLayoutLoggingData2
  }
  
   interface AdLayoutLoggingData2 {
    serializedAdServingDataEntry?: string
  }
  
   interface RenderingContent2 {
    instreamVideoAdRenderer?: InstreamVideoAdRenderer
  }
  
   interface InstreamVideoAdRenderer {
    skipOffsetMilliseconds?: number
    pings?: Pings
    clickthroughEndpoint?: ClickthroughEndpoint
    csiParameters?: CsiParameter[]
    playerVars?: string
    elementId?: string
    trackingParams?: string
    legacyInfoCardVastExtension?: string
    sodarExtensionData?: SodarExtensionData
    externalVideoId?: string
    adLayoutLoggingData?: AdLayoutLoggingData3
    layoutId?: string
  }
  
   interface Pings {
    impressionPings?: ImpressionPing[]
    errorPings?: ErrorPing[]
    mutePings?: MutePing[]
    unmutePings?: UnmutePing[]
    pausePings?: PausePing[]
    rewindPings?: RewindPing[]
    resumePings?: ResumePing[]
    skipPings?: SkipPing[]
    closePings?: ClosePing[]
    progressPings?: ProgressPing[]
    activeViewViewablePings?: ActiveViewViewablePing[]
    activeViewMeasurablePings?: ActiveViewMeasurablePing[]
    abandonPings?: AbandonPing[]
    activeViewFullyViewableAudibleHalfDurationPings?: ActiveViewFullyViewableAudibleHalfDurationPing[]
    completePings?: CompletePing[]
    activeViewTracking?: ActiveViewTracking
  }
  
   interface ImpressionPing {
    baseUrl?: string
    headers?: Header7[]
  }
  
   interface Header7 {
    headerType?: string
  }
  
   interface ErrorPing {
    baseUrl?: string
  }
  
   interface MutePing {
    baseUrl?: string
  }
  
   interface UnmutePing {
    baseUrl?: string
  }
  
   interface PausePing {
    baseUrl?: string
  }
  
   interface RewindPing {
    baseUrl?: string
  }
  
   interface ResumePing {
    baseUrl?: string
  }
  
   interface SkipPing {
    baseUrl?: string
  }
  
   interface ClosePing {
    baseUrl?: string
  }
  
   interface ProgressPing {
    baseUrl?: string
    offsetMilliseconds?: number
    attributionSrcMode?: string
  }
  
   interface ActiveViewViewablePing {
    baseUrl?: string
  }
  
   interface ActiveViewMeasurablePing {
    baseUrl?: string
  }
  
   interface AbandonPing {
    baseUrl?: string
  }
  
   interface ActiveViewFullyViewableAudibleHalfDurationPing {
    baseUrl?: string
  }
  
   interface CompletePing {
    baseUrl?: string
  }
  
   interface ActiveViewTracking {
    trafficType?: string
    identifier?: string
  }
  
   interface ClickthroughEndpoint {
    clickTrackingParams?: string
    urlEndpoint?: UrlEndpoint
  }
  
   interface UrlEndpoint {
    url?: string
    target?: string
    attributionSrcMode?: string
  }
  
   interface CsiParameter {
    key?: string
    value?: string
  }
  
   interface SodarExtensionData {
    siub?: string
    bgub?: string
    scs?: string
    bgp?: string
  }
  
   interface AdLayoutLoggingData3 {
    serializedAdServingDataEntry?: string
  }
  
   interface LayoutExitNormalTrigger {
    id?: string
    onLayoutSelfExitRequestedTrigger?: OnLayoutSelfExitRequestedTrigger
  }
  
   interface OnLayoutSelfExitRequestedTrigger {
    triggeringLayoutId?: string
  }
  
   interface LayoutExitSkipTrigger {
    id?: string
    skipRequestedTrigger?: SkipRequestedTrigger
  }
  
   interface SkipRequestedTrigger {
    triggeringLayoutId?: string
  }
  
   interface LayoutExitMuteTrigger {
    id?: string
    skipRequestedTrigger?: SkipRequestedTrigger2
  }
  
   interface SkipRequestedTrigger2 {
    triggeringLayoutId?: string
  }
  
   interface InPlayerAdLayoutRenderer {
    adLayoutMetadata?: AdLayoutMetadata3
    renderingContent?: RenderingContent3
    layoutExitNormalTriggers?: LayoutExitNormalTrigger2[]
  }
  
   interface AdLayoutMetadata3 {
    layoutId?: string
    layoutType?: string
    adLayoutLoggingData?: AdLayoutLoggingData4
  }
  
   interface AdLayoutLoggingData4 {
    serializedAdServingDataEntry?: string
  }
  
   interface RenderingContent3 {
    instreamAdPlayerOverlayRenderer?: InstreamAdPlayerOverlayRenderer
  }
  
   interface InstreamAdPlayerOverlayRenderer {
    skipOrPreviewRenderer?: SkipOrPreviewRenderer
    trackingParams?: string
    visitAdvertiserRenderer?: VisitAdvertiserRenderer
    adBadgeRenderer?: AdBadgeRenderer
    adDurationRemaining?: AdDurationRemaining
    adInfoRenderer?: AdInfoRenderer
    adLayoutLoggingData?: AdLayoutLoggingData5
    elementId?: string
    inPlayerLayoutId?: string
    adDurationMs?: number
  }
  
   interface SkipOrPreviewRenderer {
    skipAdRenderer?: SkipAdRenderer
  }
  
   interface SkipAdRenderer {
    preskipRenderer?: PreskipRenderer
    skippableRenderer?: SkippableRenderer
    trackingParams?: string
    skipOffsetMilliseconds?: number
  }
  
   interface PreskipRenderer {
    adPreviewRenderer?: AdPreviewRenderer
  }
  
   interface AdPreviewRenderer {
    thumbnail?: Thumbnail5
    trackingParams?: string
    templatedCountdown?: TemplatedCountdown
    durationMilliseconds?: number
  }
  
   interface Thumbnail5 {
    thumbnail?: Thumbnail6
    trackingParams?: string
  }
  
   interface Thumbnail6 {
    thumbnails?: Thumbnail7[]
  }
  
   interface Thumbnail7 {
    url?: string
    width?: number
    height?: number
  }
  
   interface TemplatedCountdown {
    templatedAdText?: TemplatedAdText
  }
  
   interface TemplatedAdText {
    text?: string
    isTemplated?: boolean
    trackingParams?: string
  }
  
   interface SkippableRenderer {
    skipButtonRenderer?: SkipButtonRenderer
  }
  
   interface SkipButtonRenderer {
    message?: Message
    trackingParams?: string
  }
  
   interface Message {
    text?: string
    isTemplated?: boolean
    trackingParams?: string
  }
  
   interface VisitAdvertiserRenderer {
    buttonRenderer?: ButtonRenderer
  }
  
   interface ButtonRenderer {
    style?: string
    text?: Text
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint
    trackingParams?: string
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
  
   interface NavigationEndpoint {
    clickTrackingParams?: string
    urlEndpoint?: UrlEndpoint2
  }
  
   interface UrlEndpoint2 {
    url?: string
    target?: string
    attributionSrcMode?: string
  }
  
   interface AdBadgeRenderer {
    simpleAdBadgeRenderer?: SimpleAdBadgeRenderer
  }
  
   interface SimpleAdBadgeRenderer {
    text?: Text2
    trackingParams?: string
  }
  
   interface Text2 {
    text?: string
    isTemplated?: boolean
    trackingParams?: string
  }
  
   interface AdDurationRemaining {
    adDurationRemainingRenderer?: AdDurationRemainingRenderer
  }
  
   interface AdDurationRemainingRenderer {
    templatedCountdown?: TemplatedCountdown2
    trackingParams?: string
  }
  
   interface TemplatedCountdown2 {
    templatedAdText?: TemplatedAdText2
  }
  
   interface TemplatedAdText2 {
    text?: string
    isTemplated?: boolean
    trackingParams?: string
  }
  
   interface AdInfoRenderer {
    adHoverTextButtonRenderer?: AdHoverTextButtonRenderer
  }
  
   interface AdHoverTextButtonRenderer {
    button?: Button
    hoverText?: HoverText
    trackingParams?: string
  }
  
   interface Button {
    buttonRenderer?: ButtonRenderer2
  }
  
   interface ButtonRenderer2 {
    style?: string
    size?: string
    isDisabled?: boolean
    serviceEndpoint?: ServiceEndpoint
    icon?: Icon2
    trackingParams?: string
    accessibilityData?: AccessibilityData
  }
  
   interface ServiceEndpoint {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction
  }
  
   interface OpenPopupAction {
    popup?: Popup
    popupType?: string
  }
  
   interface Popup {
    aboutThisAdRenderer?: AboutThisAdRenderer
  }
  
   interface AboutThisAdRenderer {
    url?: Url
    trackingParams?: string
  }
  
   interface Url {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string
  }
  
   interface Icon2 {
    iconType?: string
  }
  
   interface AccessibilityData {
    accessibilityData?: AccessibilityData2
  }
  
   interface AccessibilityData2 {
    label?: string
  }
  
   interface HoverText {
    runs?: Run2[]
  }
  
   interface Run2 {
    text?: string
  }
  
   interface AdLayoutLoggingData5 {
    serializedAdServingDataEntry?: string
  }
  
   interface LayoutExitNormalTrigger2 {
    id?: string
    layoutIdExitedTrigger?: LayoutIdExitedTrigger
  }
  
   interface LayoutIdExitedTrigger {
    triggeringLayoutId?: string
  }
  
   interface SlotEntryTrigger {
    id?: string
    beforeContentVideoIdStartedTrigger?: BeforeContentVideoIdStartedTrigger
    layoutIdEnteredTrigger?: LayoutIdEnteredTrigger
  }
  
   interface BeforeContentVideoIdStartedTrigger {}
  
   interface LayoutIdEnteredTrigger {
    triggeringLayoutId?: string
  }
  
   interface SlotFulfillmentTrigger {
    id?: string
    slotIdEnteredTrigger?: SlotIdEnteredTrigger
  }
  
   interface SlotIdEnteredTrigger {
    triggeringSlotId?: string
  }
  
   interface SlotExpirationTrigger {
    id?: string
    slotIdExitedTrigger?: SlotIdExitedTrigger
    onNewPlaybackAfterContentVideoIdTrigger?: OnNewPlaybackAfterContentVideoIdTrigger
  }
  
   interface SlotIdExitedTrigger {
    triggeringSlotId?: string
  }
  
   interface OnNewPlaybackAfterContentVideoIdTrigger {}
  