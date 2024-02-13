export interface YtMusicSongsInfoData {
    responseContext?: ResponseContext
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
  
  export interface ResponseContext {
    serviceTrackingParams?: ServiceTrackingParam[]
    maxAgeSeconds?: number
  }
  
  export interface ServiceTrackingParam {
    service?: string
    params?: Param[]
  }
  
  export interface Param {
    key?: string
    value?: string
  }
  
  export interface PlayabilityStatus {
    status?: string
    playableInEmbed?: boolean
    audioOnlyPlayability?: AudioOnlyPlayability
    miniplayer?: Miniplayer
    contextParams?: string
  }
  
  export interface AudioOnlyPlayability {
    audioOnlyPlayabilityRenderer?: AudioOnlyPlayabilityRenderer
  }
  
  export interface AudioOnlyPlayabilityRenderer {
    trackingParams?: string
    audioOnlyAvailability?: string
  }
  
  export interface Miniplayer {
    miniplayerRenderer?: MiniplayerRenderer
  }
  
  export interface MiniplayerRenderer {
    playbackMode?: string
  }
  
  export interface StreamingData {
    expiresInSeconds?: string
    formats?: Format[]
    adaptiveFormats?: AdaptiveFormat[]
  }
  
  export interface Format {
    itag?: number
    mimeType?: string
    bitrate?: number
    width?: number
    height?: number
    lastModified?: string
    contentLength?: string
    quality?: string
    fps?: number
    qualityLabel?: string
    projectionType?: string
    averageBitrate?: number
    audioQuality?: string
    approxDurationMs?: string
    audioSampleRate?: string
    audioChannels?: number
    signatureCipher?: string
  }
  
  export interface AdaptiveFormat {
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
  
  export interface InitRange {
    start?: string
    end?: string
  }
  
  export interface IndexRange {
    start?: string
    end?: string
  }
  
  export interface ColorInfo {
    primaries?: string
    transferCharacteristics?: string
    matrixCoefficients?: string
  }
  
  export interface PlayerAd {
    playerLegacyDesktopWatchAdsRenderer?: PlayerLegacyDesktopWatchAdsRenderer
  }
  
  export interface PlayerLegacyDesktopWatchAdsRenderer {
    playerAdParams?: PlayerAdParams
    gutParams?: GutParams
    showCompanion?: boolean
    showInstream?: boolean
    useGut?: boolean
  }
  
  export interface PlayerAdParams {
    showContentThumbnail?: boolean
    enabledEngageTypes?: string
  }
  
  export interface GutParams {
    tag?: string
  }
  
  export interface PlaybackTracking {
    videostatsPlaybackUrl?: VideostatsPlaybackUrl
    videostatsDelayplayUrl?: VideostatsDelayplayUrl
    videostatsWatchtimeUrl?: VideostatsWatchtimeUrl
    ptrackingUrl?: PtrackingUrl
    qoeUrl?: QoeUrl
    atrUrl?: AtrUrl
    videostatsScheduledFlushWalltimeSeconds?: number[]
    videostatsDefaultFlushIntervalSeconds?: number
  }
  
  export interface VideostatsPlaybackUrl {
    baseUrl?: string
    headers?: Header[]
  }
  
  export interface Header {
    headerType?: string
  }
  
  export interface VideostatsDelayplayUrl {
    baseUrl?: string
    headers?: Header2[]
  }
  
  export interface Header2 {
    headerType?: string
  }
  
  export interface VideostatsWatchtimeUrl {
    baseUrl?: string
    headers?: Header3[]
  }
  
  export interface Header3 {
    headerType?: string
  }
  
  export interface PtrackingUrl {
    baseUrl?: string
    headers?: Header4[]
  }
  
  export interface Header4 {
    headerType?: string
  }
  
  export interface QoeUrl {
    baseUrl?: string
    headers?: Header5[]
  }
  
  export interface Header5 {
    headerType?: string
  }
  
  export interface AtrUrl {
    baseUrl?: string
    elapsedMediaTimeSeconds?: number
    headers?: Header6[]
  }
  
  export interface Header6 {
    headerType?: string
  }
  
  export interface VideoDetails {
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
  
  export interface Thumbnail {
    thumbnails?: Thumbnail2[]
  }
  
  export interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
  }
  
  export interface PlayerConfig {
    audioConfig?: AudioConfig
    streamSelectionConfig?: StreamSelectionConfig
    mediaCommonConfig?: MediaCommonConfig
    webPlayerConfig?: WebPlayerConfig
  }
  
  export interface AudioConfig {
    loudnessDb?: number
    perceptualLoudnessDb?: number
    enablePerFormatLoudness?: boolean
  }
  
  export interface StreamSelectionConfig {
    maxBitrate?: string
  }
  
  export interface MediaCommonConfig {
    dynamicReadaheadConfig?: DynamicReadaheadConfig
  }
  
  export interface DynamicReadaheadConfig {
    maxReadAheadMediaTimeMs?: number
    minReadAheadMediaTimeMs?: number
    readAheadGrowthRateMs?: number
  }
  
  export interface WebPlayerConfig {
    useCobaltTvosDash?: boolean
    webPlayerActionsPorting?: WebPlayerActionsPorting
  }
  
  export interface WebPlayerActionsPorting {
    subscribeCommand?: SubscribeCommand
    unsubscribeCommand?: UnsubscribeCommand
    addToWatchLaterCommand?: AddToWatchLaterCommand
    removeFromWatchLaterCommand?: RemoveFromWatchLaterCommand
  }
  
  export interface SubscribeCommand {
    clickTrackingParams?: string
    subscribeEndpoint?: SubscribeEndpoint
  }
  
  export interface SubscribeEndpoint {
    channelIds?: string[]
    params?: string
  }
  
  export interface UnsubscribeCommand {
    clickTrackingParams?: string
    unsubscribeEndpoint?: UnsubscribeEndpoint
  }
  
  export interface UnsubscribeEndpoint {
    channelIds?: string[]
    params?: string
  }
  
  export interface AddToWatchLaterCommand {
    clickTrackingParams?: string
    playlistEditEndpoint?: PlaylistEditEndpoint
  }
  
  export interface PlaylistEditEndpoint {
    playlistId?: string
    actions?: Action[]
  }
  
  export interface Action {
    addedVideoId?: string
    action?: string
  }
  
  export interface RemoveFromWatchLaterCommand {
    clickTrackingParams?: string
    playlistEditEndpoint?: PlaylistEditEndpoint2
  }
  
  export interface PlaylistEditEndpoint2 {
    playlistId?: string
    actions?: Action2[]
  }
  
  export interface Action2 {
    action?: string
    removedVideoId?: string
  }
  
  export interface Storyboards {
    playerStoryboardSpecRenderer?: PlayerStoryboardSpecRenderer
  }
  
  export interface PlayerStoryboardSpecRenderer {
    spec?: string
    recommendedLevel?: number
  }
  
  export interface Microformat {
    microformatDataRenderer?: MicroformatDataRenderer
  }
  
  export interface MicroformatDataRenderer {
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
  
  export interface Thumbnail3 {
    thumbnails?: Thumbnail4[]
  }
  
  export interface Thumbnail4 {
    url?: string
    width?: number
    height?: number
  }
  
  export interface PageOwnerDetails {
    name?: string
    externalChannelId?: string
    youtubeProfileUrl?: string
  }
  
  export interface VideoDetails2 {
    externalVideoId?: string
    durationSeconds?: string
    durationIso8601?: string
  }
  
  export interface LinkAlternate {
    hrefUrl?: string
    title?: string
    alternateType?: string
  }
  
  export interface Attestation {
    playerAttestationRenderer?: PlayerAttestationRenderer
  }
  
  export interface PlayerAttestationRenderer {
    challenge?: string
    botguardData?: BotguardData
  }
  
  export interface BotguardData {
    program?: string
    interpreterSafeUrl?: InterpreterSafeUrl
    serverEnvironment?: number
  }
  
  export interface InterpreterSafeUrl {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string
  }
  
  export interface AdPlacement {
    adPlacementRenderer?: AdPlacementRenderer
  }
  
  export interface AdPlacementRenderer {
    config?: Config
    renderer?: Renderer
    adSlotLoggingData?: AdSlotLoggingData
  }
  
  export interface Config {
    adPlacementConfig?: AdPlacementConfig
  }
  
  export interface AdPlacementConfig {
    kind?: string
    adTimeOffset?: AdTimeOffset
    hideCueRangeMarker?: boolean
  }
  
  export interface AdTimeOffset {
    offsetStartMilliseconds?: string
    offsetEndMilliseconds?: string
  }
  
  export interface Renderer {
    instreamVideoAdRenderer?: InstreamVideoAdRenderer
    adBreakServiceRenderer?: AdBreakServiceRenderer
  }
  
  export interface InstreamVideoAdRenderer {
    playerOverlay?: PlayerOverlay
    trackingParams?: string
    layoutId?: string
    associatedPlayerBytesLayoutId?: string
  }
  
  export interface PlayerOverlay {
    instreamAdPlayerOverlayRenderer?: InstreamAdPlayerOverlayRenderer
  }
  
  export interface InstreamAdPlayerOverlayRenderer {
    skipOrPreviewRenderer?: SkipOrPreviewRenderer
    trackingParams?: string
    visitAdvertiserRenderer?: VisitAdvertiserRenderer
    adBadgeRenderer?: AdBadgeRenderer
    adDurationRemaining?: AdDurationRemaining
    adInfoRenderer?: AdInfoRenderer
    adLayoutLoggingData?: AdLayoutLoggingData
    elementId?: string
    inPlayerSlotId?: string
    inPlayerLayoutId?: string
  }
  
  export interface SkipOrPreviewRenderer {
    adPreviewRenderer?: AdPreviewRenderer
  }
  
  export interface AdPreviewRenderer {
    thumbnail?: Thumbnail5
    trackingParams?: string
    staticPreview?: StaticPreview
  }
  
  export interface Thumbnail5 {
    thumbnail?: Thumbnail6
    trackingParams?: string
  }
  
  export interface Thumbnail6 {
    thumbnails?: Thumbnail7[]
  }
  
  export interface Thumbnail7 {
    url?: string
    width?: number
    height?: number
  }
  
  export interface StaticPreview {
    text?: string
    isTemplated?: boolean
    trackingParams?: string
  }
  
  export interface VisitAdvertiserRenderer {
    buttonRenderer?: ButtonRenderer
  }
  
  export interface ButtonRenderer {
    style?: string
    text?: Text
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint
    trackingParams?: string
  }
  
  export interface Text {
    runs?: Run[]
  }
  
  export interface Run {
    text?: string
  }
  
  export interface Icon {
    iconType?: string
  }
  
  export interface NavigationEndpoint {
    clickTrackingParams?: string
    urlEndpoint?: UrlEndpoint
  }
  
  export interface UrlEndpoint {
    url?: string
    target?: string
    attributionSrcMode?: string
  }
  
  export interface AdBadgeRenderer {
    simpleAdBadgeRenderer?: SimpleAdBadgeRenderer
  }
  
  export interface SimpleAdBadgeRenderer {
    text?: Text2
    trackingParams?: string
  }
  
  export interface Text2 {
    text?: string
    isTemplated?: boolean
    trackingParams?: string
  }
  
  export interface AdDurationRemaining {
    adDurationRemainingRenderer?: AdDurationRemainingRenderer
  }
  
  export interface AdDurationRemainingRenderer {
    templatedCountdown?: TemplatedCountdown
    trackingParams?: string
  }
  
  export interface TemplatedCountdown {
    templatedAdText?: TemplatedAdText
  }
  
  export interface TemplatedAdText {
    text?: string
    isTemplated?: boolean
    trackingParams?: string
  }
  
  export interface AdInfoRenderer {
    adHoverTextButtonRenderer?: AdHoverTextButtonRenderer
  }
  
  export interface AdHoverTextButtonRenderer {
    button?: Button
    hoverText?: HoverText
    trackingParams?: string
  }
  
  export interface Button {
    buttonRenderer?: ButtonRenderer2
  }
  
  export interface ButtonRenderer2 {
    style?: string
    size?: string
    isDisabled?: boolean
    serviceEndpoint?: ServiceEndpoint
    icon?: Icon2
    trackingParams?: string
    accessibilityData?: AccessibilityData
  }
  
  export interface ServiceEndpoint {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction
  }
  
  export interface OpenPopupAction {
    popup?: Popup
    popupType?: string
  }
  
  export interface Popup {
    aboutThisAdRenderer?: AboutThisAdRenderer
  }
  
  export interface AboutThisAdRenderer {
    url?: Url
    trackingParams?: string
  }
  
  export interface Url {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string
  }
  
  export interface Icon2 {
    iconType?: string
  }
  
  export interface AccessibilityData {
    accessibilityData?: AccessibilityData2
  }
  
  export interface AccessibilityData2 {
    label?: string
  }
  
  export interface HoverText {
    runs?: Run2[]
  }
  
  export interface Run2 {
    text?: string
  }
  
  export interface AdLayoutLoggingData {
    serializedAdServingDataEntry?: string
  }
  
  export interface AdBreakServiceRenderer {
    prefetchMilliseconds?: string
    getAdBreakUrl?: string
  }
  
  export interface AdSlotLoggingData {
    serializedSlotAdServingDataEntry?: string
  }
  
  export interface AdSlot {
    adSlotRenderer?: AdSlotRenderer
  }
  
  export interface AdSlotRenderer {
    adSlotMetadata?: AdSlotMetadata
    fulfillmentContent?: FulfillmentContent
    slotEntryTrigger?: SlotEntryTrigger
    slotFulfillmentTriggers?: SlotFulfillmentTrigger[]
    slotExpirationTriggers?: SlotExpirationTrigger[]
  }
  
  export interface AdSlotMetadata {
    slotId?: string
    slotType?: string
    adSlotLoggingData?: AdSlotLoggingData2
    triggerEvent?: string
  }
  
  export interface AdSlotLoggingData2 {
    serializedSlotAdServingDataEntry?: string
  }
  
  export interface FulfillmentContent {
    fulfilledLayout?: FulfilledLayout
  }
  
  export interface FulfilledLayout {
    playerBytesAdLayoutRenderer?: PlayerBytesAdLayoutRenderer
  }
  
  export interface PlayerBytesAdLayoutRenderer {
    adLayoutMetadata?: AdLayoutMetadata
    renderingContent?: RenderingContent
    layoutExitNormalTriggers?: LayoutExitNormalTrigger[]
    layoutExitMuteTriggers?: LayoutExitMuteTrigger[]
  }
  
  export interface AdLayoutMetadata {
    layoutId?: string
    layoutType?: string
    adLayoutLoggingData?: AdLayoutLoggingData2
  }
  
  export interface AdLayoutLoggingData2 {
    serializedAdServingDataEntry?: string
  }
  
  export interface RenderingContent {
    instreamVideoAdRenderer?: InstreamVideoAdRenderer2
  }
  
  export interface InstreamVideoAdRenderer2 {
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
  
  export interface Pings {
    impressionPings?: ImpressionPing[]
    errorPings?: ErrorPing[]
    mutePings?: MutePing[]
    unmutePings?: UnmutePing[]
    pausePings?: PausePing[]
    rewindPings?: RewindPing[]
    resumePings?: ResumePing[]
    closePings?: ClosePing[]
    clickthroughPings?: ClickthroughPing[]
    fullscreenPings?: FullscreenPing[]
    activeViewViewablePings?: ActiveViewViewablePing[]
    endFullscreenPings?: EndFullscreenPing[]
    activeViewMeasurablePings?: ActiveViewMeasurablePing[]
    abandonPings?: AbandonPing[]
    activeViewFullyViewableAudibleHalfDurationPings?: ActiveViewFullyViewableAudibleHalfDurationPing[]
    startPings?: StartPing[]
    firstQuartilePings?: FirstQuartilePing[]
    secondQuartilePings?: SecondQuartilePing[]
    thirdQuartilePings?: ThirdQuartilePing[]
    completePings?: CompletePing[]
    activeViewTracking?: ActiveViewTracking
  }
  
  export interface ImpressionPing {
    baseUrl?: string
    attributionSrcMode?: string
    headers?: Header7[]
  }
  
  export interface Header7 {
    headerType?: string
  }
  
  export interface ErrorPing {
    baseUrl?: string
  }
  
  export interface MutePing {
    baseUrl?: string
  }
  
  export interface UnmutePing {
    baseUrl?: string
  }
  
  export interface PausePing {
    baseUrl?: string
  }
  
  export interface RewindPing {
    baseUrl?: string
  }
  
  export interface ResumePing {
    baseUrl?: string
  }
  
  export interface ClosePing {
    baseUrl?: string
  }
  
  export interface ClickthroughPing {
    baseUrl?: string
    attributionSrcMode?: string
  }
  
  export interface FullscreenPing {
    baseUrl?: string
  }
  
  export interface ActiveViewViewablePing {
    baseUrl?: string
  }
  
  export interface EndFullscreenPing {
    baseUrl?: string
  }
  
  export interface ActiveViewMeasurablePing {
    baseUrl?: string
  }
  
  export interface AbandonPing {
    baseUrl?: string
  }
  
  export interface ActiveViewFullyViewableAudibleHalfDurationPing {
    baseUrl?: string
  }
  
  export interface StartPing {
    baseUrl?: string
  }
  
  export interface FirstQuartilePing {
    baseUrl?: string
  }
  
  export interface SecondQuartilePing {
    baseUrl?: string
  }
  
  export interface ThirdQuartilePing {
    baseUrl?: string
  }
  
  export interface CompletePing {
    baseUrl?: string
  }
  
  export interface ActiveViewTracking {
    trafficType?: string
  }
  
  export interface ClickthroughEndpoint {
    clickTrackingParams?: string
    urlEndpoint?: UrlEndpoint2
  }
  
  export interface UrlEndpoint2 {
    url?: string
    target?: string
    attributionSrcMode?: string
  }
  
  export interface CsiParameter {
    key?: string
    value?: string
  }
  
  export interface SodarExtensionData {
    siub?: string
    bgub?: string
    scs?: string
    bgp?: string
  }
  
  export interface AdLayoutLoggingData3 {
    serializedAdServingDataEntry?: string
  }
  
  export interface LayoutExitNormalTrigger {
    id?: string
    onLayoutSelfExitRequestedTrigger?: OnLayoutSelfExitRequestedTrigger
  }
  
  export interface OnLayoutSelfExitRequestedTrigger {
    triggeringLayoutId?: string
  }
  
  export interface LayoutExitMuteTrigger {
    id?: string
    skipRequestedTrigger?: SkipRequestedTrigger
  }
  
  export interface SkipRequestedTrigger {
    triggeringLayoutId?: string
  }
  
  export interface SlotEntryTrigger {
    id?: string
    beforeContentVideoIdStartedTrigger?: BeforeContentVideoIdStartedTrigger
  }
  
  export interface BeforeContentVideoIdStartedTrigger {}
  
  export interface SlotFulfillmentTrigger {
    id?: string
    slotIdEnteredTrigger?: SlotIdEnteredTrigger
  }
  
  export interface SlotIdEnteredTrigger {
    triggeringSlotId?: string
  }
  
  export interface SlotExpirationTrigger {
    id?: string
    slotIdExitedTrigger?: SlotIdExitedTrigger
    onNewPlaybackAfterContentVideoIdTrigger?: OnNewPlaybackAfterContentVideoIdTrigger
  }
  
  export interface SlotIdExitedTrigger {
    triggeringSlotId?: string
  }
  
  export interface OnNewPlaybackAfterContentVideoIdTrigger {}
  