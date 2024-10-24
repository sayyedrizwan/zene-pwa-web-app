
 interface YTNextRelatedData {
    contents?: Contents
    currentVideoEndpoint?: CurrentVideoEndpoint
    trackingParams?: string
    playerOverlays?: PlayerOverlays
    onResponseReceivedEndpoints?: OnResponseReceivedEndpoint[]
    engagementPanels?: EngagementPanel[]
    topbar?: Topbar
    cards?: Cards
    pageVisualEffects?: PageVisualEffect[]
    frameworkUpdates?: FrameworkUpdates
  }
  
   interface Contents {
    twoColumnWatchNextResults?: TwoColumnWatchNextResults
  }
  
   interface TwoColumnWatchNextResults {
    results?: Results
    secondaryResults?: SecondaryResults
    autoplay?: Autoplay
    conversationBar?: ConversationBar
  }
  
   interface Results {
    results?: Results2
  }
  
   interface Results2 {
    contents?: Content[]
    trackingParams?: string
  }
  
   interface Content {
    videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer
    videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer
    merchandiseShelfRenderer?: MerchandiseShelfRenderer
    itemSectionRenderer?: ItemSectionRenderer
  }
  
   interface VideoPrimaryInfoRenderer {
    title?: Title
    viewCount?: ViewCount
    videoActions?: VideoActions
    trackingParams?: string
    dateText?: DateText
    relativeDateText?: RelativeDateText
  }
  
   interface Title {
    runs?: Run[]
  }
  
   interface Run {
    text?: string
  }
  
   interface ViewCount {
    videoViewCountRenderer?: VideoViewCountRenderer
  }
  
   interface VideoViewCountRenderer {
    viewCount?: ViewCount2
    shortViewCount?: ShortViewCount
    originalViewCount?: string
  }
  
   interface ViewCount2 {
    simpleText?: string
  }
  
   interface ShortViewCount {
    simpleText?: string
  }
  
   interface VideoActions {
    menuRenderer?: MenuRenderer
  }
  
   interface MenuRenderer {
    items?: Item[]
    trackingParams?: string
    topLevelButtons?: TopLevelButton[]
    accessibility?: Accessibility
    flexibleItems?: FlexibleItem[]
  }
  
   interface Item {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer
  }
  
   interface MenuNavigationItemRenderer {
    text?: Text
    icon?: Icon
    navigationEndpoint?: NavigationEndpoint
    trackingParams?: string
  }
  
   interface Text {
    runs?: Run2[]
  }
  
   interface Run2 {
    text?: string
  }
  
   interface Icon {
    iconType?: string
  }
  
   interface NavigationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata
    modalEndpoint?: ModalEndpoint
  }
  
   interface CommandMetadata {
    webCommandMetadata?: WebCommandMetadata
  }
  
   interface WebCommandMetadata {
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
    content?: Content2
    button?: Button
  }
  
   interface Title2 {
    runs?: Run3[]
  }
  
   interface Run3 {
    text?: string
  }
  
   interface Content2 {
    runs?: Run4[]
  }
  
   interface Run4 {
    text?: string
  }
  
   interface Button {
    buttonRenderer?: ButtonRenderer
  }
  
   interface ButtonRenderer {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text2
    navigationEndpoint?: NavigationEndpoint2
    trackingParams?: string
  }
  
   interface Text2 {
    simpleText?: string
  }
  
   interface NavigationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata2
    signInEndpoint?: SignInEndpoint
  }
  
   interface CommandMetadata2 {
    webCommandMetadata?: WebCommandMetadata2
  }
  
   interface WebCommandMetadata2 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint {
    hack?: boolean
  }
  
   interface TopLevelButton {
    segmentedLikeDislikeButtonViewModel?: SegmentedLikeDislikeButtonViewModel
    buttonViewModel?: ButtonViewModel5
  }
  
   interface SegmentedLikeDislikeButtonViewModel {
    likeButtonViewModel?: LikeButtonViewModel
    dislikeButtonViewModel?: DislikeButtonViewModel
    iconType?: string
    likeCountEntity?: LikeCountEntity
    dynamicLikeCountUpdateData?: DynamicLikeCountUpdateData
  }
  
   interface LikeButtonViewModel {
    likeButtonViewModel?: LikeButtonViewModel2
  }
  
   interface LikeButtonViewModel2 {
    toggleButtonViewModel?: ToggleButtonViewModel
    likeStatusEntityKey?: string
    likeStatusEntity?: LikeStatusEntity
  }
  
   interface ToggleButtonViewModel {
    toggleButtonViewModel?: ToggleButtonViewModel2
  }
  
   interface ToggleButtonViewModel2 {
    defaultButtonViewModel?: DefaultButtonViewModel
    toggledButtonViewModel?: ToggledButtonViewModel
    identifier?: string
    trackingParams?: string
    isTogglingDisabled?: boolean
  }
  
   interface DefaultButtonViewModel {
    buttonViewModel?: ButtonViewModel
  }
  
   interface ButtonViewModel {
    iconName?: string
    title?: string
    onTap?: OnTap
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    accessibilityId?: string
    tooltip?: string
  }
  
   interface OnTap {
    serialCommand?: SerialCommand
  }
  
   interface SerialCommand {
    commands?: Command[]
  }
  
   interface Command {
    logGestureCommand?: LogGestureCommand
    innertubeCommand?: InnertubeCommand
  }
  
   interface LogGestureCommand {
    gestureType?: string
    trackingParams?: string
  }
  
   interface InnertubeCommand {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata3
    modalEndpoint?: ModalEndpoint2
  }
  
   interface CommandMetadata3 {
    webCommandMetadata?: WebCommandMetadata3
  }
  
   interface WebCommandMetadata3 {
    ignoreNavigation?: boolean
  }
  
   interface ModalEndpoint2 {
    modal?: Modal2
  }
  
   interface Modal2 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer2
  }
  
   interface ModalWithTitleAndButtonRenderer2 {
    title?: Title3
    content?: Content3
    button?: Button2
  }
  
   interface Title3 {
    simpleText?: string
  }
  
   interface Content3 {
    simpleText?: string
  }
  
   interface Button2 {
    buttonRenderer?: ButtonRenderer2
  }
  
   interface ButtonRenderer2 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text3
    navigationEndpoint?: NavigationEndpoint3
    trackingParams?: string
  }
  
   interface Text3 {
    simpleText?: string
  }
  
   interface NavigationEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata4
    signInEndpoint?: SignInEndpoint2
  }
  
   interface CommandMetadata4 {
    webCommandMetadata?: WebCommandMetadata4
  }
  
   interface WebCommandMetadata4 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint2 {
    nextEndpoint?: NextEndpoint
    idamTag?: string
  }
  
   interface NextEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata5
    likeEndpoint?: LikeEndpoint
  }
  
   interface CommandMetadata5 {
    webCommandMetadata?: WebCommandMetadata5
  }
  
   interface WebCommandMetadata5 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface LikeEndpoint {
    status?: string
    target?: Target
    likeParams?: string
  }
  
   interface Target {
    videoId?: string
  }
  
   interface ToggledButtonViewModel {
    buttonViewModel?: ButtonViewModel2
  }
  
   interface ButtonViewModel2 {
    iconName?: string
    title?: string
    onTap?: OnTap2
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    accessibilityId?: string
    tooltip?: string
  }
  
   interface OnTap2 {
    serialCommand?: SerialCommand2
  }
  
   interface SerialCommand2 {
    commands?: Command2[]
  }
  
   interface Command2 {
    logGestureCommand?: LogGestureCommand2
    innertubeCommand?: InnertubeCommand2
  }
  
   interface LogGestureCommand2 {
    gestureType?: string
    trackingParams?: string
  }
  
   interface InnertubeCommand2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata6
    likeEndpoint?: LikeEndpoint2
  }
  
   interface CommandMetadata6 {
    webCommandMetadata?: WebCommandMetadata6
  }
  
   interface WebCommandMetadata6 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface LikeEndpoint2 {
    status?: string
    target?: Target2
    removeLikeParams?: string
  }
  
   interface Target2 {
    videoId?: string
  }
  
   interface LikeStatusEntity {
    key?: string
    likeStatus?: string
  }
  
   interface DislikeButtonViewModel {
    dislikeButtonViewModel?: DislikeButtonViewModel2
  }
  
   interface DislikeButtonViewModel2 {
    toggleButtonViewModel?: ToggleButtonViewModel3
    dislikeEntityKey?: string
  }
  
   interface ToggleButtonViewModel3 {
    toggleButtonViewModel?: ToggleButtonViewModel4
  }
  
   interface ToggleButtonViewModel4 {
    defaultButtonViewModel?: DefaultButtonViewModel2
    toggledButtonViewModel?: ToggledButtonViewModel2
    trackingParams?: string
    isTogglingDisabled?: boolean
  }
  
   interface DefaultButtonViewModel2 {
    buttonViewModel?: ButtonViewModel3
  }
  
   interface ButtonViewModel3 {
    iconName?: string
    title?: string
    onTap?: OnTap3
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    accessibilityId?: string
    tooltip?: string
  }
  
   interface OnTap3 {
    serialCommand?: SerialCommand3
  }
  
   interface SerialCommand3 {
    commands?: Command3[]
  }
  
   interface Command3 {
    logGestureCommand?: LogGestureCommand3
    innertubeCommand?: InnertubeCommand3
  }
  
   interface LogGestureCommand3 {
    gestureType?: string
    trackingParams?: string
  }
  
   interface InnertubeCommand3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata7
    modalEndpoint?: ModalEndpoint3
  }
  
   interface CommandMetadata7 {
    webCommandMetadata?: WebCommandMetadata7
  }
  
   interface WebCommandMetadata7 {
    ignoreNavigation?: boolean
  }
  
   interface ModalEndpoint3 {
    modal?: Modal3
  }
  
   interface Modal3 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer3
  }
  
   interface ModalWithTitleAndButtonRenderer3 {
    title?: Title4
    content?: Content4
    button?: Button3
  }
  
   interface Title4 {
    simpleText?: string
  }
  
   interface Content4 {
    simpleText?: string
  }
  
   interface Button3 {
    buttonRenderer?: ButtonRenderer3
  }
  
   interface ButtonRenderer3 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text4
    navigationEndpoint?: NavigationEndpoint4
    trackingParams?: string
  }
  
   interface Text4 {
    simpleText?: string
  }
  
   interface NavigationEndpoint4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata8
    signInEndpoint?: SignInEndpoint3
  }
  
   interface CommandMetadata8 {
    webCommandMetadata?: WebCommandMetadata8
  }
  
   interface WebCommandMetadata8 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint3 {
    nextEndpoint?: NextEndpoint2
    idamTag?: string
  }
  
   interface NextEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata9
    likeEndpoint?: LikeEndpoint3
  }
  
   interface CommandMetadata9 {
    webCommandMetadata?: WebCommandMetadata9
  }
  
   interface WebCommandMetadata9 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface LikeEndpoint3 {
    status?: string
    target?: Target3
    dislikeParams?: string
  }
  
   interface Target3 {
    videoId?: string
  }
  
   interface ToggledButtonViewModel2 {
    buttonViewModel?: ButtonViewModel4
  }
  
   interface ButtonViewModel4 {
    iconName?: string
    title?: string
    onTap?: OnTap4
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    accessibilityId?: string
    tooltip?: string
  }
  
   interface OnTap4 {
    serialCommand?: SerialCommand4
  }
  
   interface SerialCommand4 {
    commands?: Command4[]
  }
  
   interface Command4 {
    logGestureCommand?: LogGestureCommand4
    innertubeCommand?: InnertubeCommand4
  }
  
   interface LogGestureCommand4 {
    gestureType?: string
    trackingParams?: string
  }
  
   interface InnertubeCommand4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata10
    likeEndpoint?: LikeEndpoint4
  }
  
   interface CommandMetadata10 {
    webCommandMetadata?: WebCommandMetadata10
  }
  
   interface WebCommandMetadata10 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface LikeEndpoint4 {
    status?: string
    target?: Target4
    removeLikeParams?: string
  }
  
   interface Target4 {
    videoId?: string
  }
  
   interface LikeCountEntity {
    key?: string
  }
  
   interface DynamicLikeCountUpdateData {
    updateStatusKey?: string
    placeholderLikeCountValuesKey?: string
    updateDelayLoopId?: string
    updateDelaySec?: number
  }
  
   interface ButtonViewModel5 {
    iconName?: string
    title?: string
    onTap?: OnTap5
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    state?: string
    accessibilityId?: string
    tooltip?: string
  }
  
   interface OnTap5 {
    serialCommand?: SerialCommand5
  }
  
   interface SerialCommand5 {
    commands?: Command5[]
  }
  
   interface Command5 {
    logGestureCommand?: LogGestureCommand5
    innertubeCommand?: InnertubeCommand5
  }
  
   interface LogGestureCommand5 {
    gestureType?: string
    trackingParams?: string
  }
  
   interface InnertubeCommand5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata11
    shareEntityServiceEndpoint?: ShareEntityServiceEndpoint
  }
  
   interface CommandMetadata11 {
    webCommandMetadata?: WebCommandMetadata11
  }
  
   interface WebCommandMetadata11 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ShareEntityServiceEndpoint {
    serializedShareEntity?: string
    commands?: Command6[]
  }
  
   interface Command6 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction
  }
  
   interface OpenPopupAction {
    popup?: Popup
    popupType?: string
    beReused?: boolean
  }
  
   interface Popup {
    unifiedSharePanelRenderer?: UnifiedSharePanelRenderer
  }
  
   interface UnifiedSharePanelRenderer {
    trackingParams?: string
    showLoadingSpinner?: boolean
  }
  
   interface Accessibility {
    accessibilityData?: AccessibilityData
  }
  
   interface AccessibilityData {
    label?: string
  }
  
   interface FlexibleItem {
    menuFlexibleItemRenderer?: MenuFlexibleItemRenderer
  }
  
   interface MenuFlexibleItemRenderer {
    menuItem?: MenuItem
    topLevelButton?: TopLevelButton2
  }
  
   interface MenuItem {
    menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer
    menuServiceItemRenderer?: MenuServiceItemRenderer
  }
  
   interface MenuServiceItemDownloadRenderer {
    serviceEndpoint?: ServiceEndpoint
    trackingParams?: string
  }
  
   interface ServiceEndpoint {
    clickTrackingParams?: string
    offlineVideoEndpoint?: OfflineVideoEndpoint
  }
  
   interface OfflineVideoEndpoint {
    videoId?: string
    onAddCommand?: OnAddCommand
  }
  
   interface OnAddCommand {
    clickTrackingParams?: string
    getDownloadActionCommand?: GetDownloadActionCommand
  }
  
   interface GetDownloadActionCommand {
    videoId?: string
    params?: string
    offlineabilityEntityKey?: string
  }
  
   interface MenuServiceItemRenderer {
    text?: Text5
    icon?: Icon2
    serviceEndpoint?: ServiceEndpoint2
    trackingParams?: string
  }
  
   interface Text5 {
    runs?: Run5[]
  }
  
   interface Run5 {
    text?: string
  }
  
   interface Icon2 {
    iconType?: string
  }
  
   interface ServiceEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata12
    modalEndpoint?: ModalEndpoint4
  }
  
   interface CommandMetadata12 {
    webCommandMetadata?: WebCommandMetadata12
  }
  
   interface WebCommandMetadata12 {
    ignoreNavigation?: boolean
  }
  
   interface ModalEndpoint4 {
    modal?: Modal4
  }
  
   interface Modal4 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer4
  }
  
   interface ModalWithTitleAndButtonRenderer4 {
    title?: Title5
    content?: Content5
    button?: Button4
  }
  
   interface Title5 {
    runs?: Run6[]
  }
  
   interface Run6 {
    text?: string
  }
  
   interface Content5 {
    runs?: Run7[]
  }
  
   interface Run7 {
    text?: string
  }
  
   interface Button4 {
    buttonRenderer?: ButtonRenderer4
  }
  
   interface ButtonRenderer4 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text6
    navigationEndpoint?: NavigationEndpoint5
    trackingParams?: string
  }
  
   interface Text6 {
    simpleText?: string
  }
  
   interface NavigationEndpoint5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata13
    signInEndpoint?: SignInEndpoint4
  }
  
   interface CommandMetadata13 {
    webCommandMetadata?: WebCommandMetadata13
  }
  
   interface WebCommandMetadata13 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint4 {
    nextEndpoint?: NextEndpoint3
    idamTag?: string
  }
  
   interface NextEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata14
    watchEndpoint?: WatchEndpoint
  }
  
   interface CommandMetadata14 {
    webCommandMetadata?: WebCommandMetadata14
  }
  
   interface WebCommandMetadata14 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint {
    videoId?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig
  }
  
   interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig
  }
  
   interface Html5PlaybackOnesieConfig {
    commonConfig?: CommonConfig
  }
  
   interface CommonConfig {
    url?: string
  }
  
   interface TopLevelButton2 {
    downloadButtonRenderer?: DownloadButtonRenderer
    buttonViewModel?: ButtonViewModel6
  }
  
   interface DownloadButtonRenderer {
    trackingParams?: string
    style?: string
    size?: string
    targetId?: string
    command?: Command7
  }
  
   interface Command7 {
    clickTrackingParams?: string
    offlineVideoEndpoint?: OfflineVideoEndpoint2
  }
  
   interface OfflineVideoEndpoint2 {
    videoId?: string
    onAddCommand?: OnAddCommand2
  }
  
   interface OnAddCommand2 {
    clickTrackingParams?: string
    getDownloadActionCommand?: GetDownloadActionCommand2
  }
  
   interface GetDownloadActionCommand2 {
    videoId?: string
    params?: string
    offlineabilityEntityKey?: string
  }
  
   interface ButtonViewModel6 {
    iconName?: string
    title?: string
    onTap?: OnTap6
    accessibilityText?: string
    style?: string
    trackingParams?: string
    isFullWidth?: boolean
    type?: string
    buttonSize?: string
    tooltip?: string
  }
  
   interface OnTap6 {
    serialCommand?: SerialCommand6
  }
  
   interface SerialCommand6 {
    commands?: Command8[]
  }
  
   interface Command8 {
    logGestureCommand?: LogGestureCommand6
    innertubeCommand?: InnertubeCommand6
  }
  
   interface LogGestureCommand6 {
    gestureType?: string
    trackingParams?: string
  }
  
   interface InnertubeCommand6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata15
    modalEndpoint?: ModalEndpoint5
  }
  
   interface CommandMetadata15 {
    webCommandMetadata?: WebCommandMetadata15
  }
  
   interface WebCommandMetadata15 {
    ignoreNavigation?: boolean
  }
  
   interface ModalEndpoint5 {
    modal?: Modal5
  }
  
   interface Modal5 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer5
  }
  
   interface ModalWithTitleAndButtonRenderer5 {
    title?: Title6
    content?: Content6
    button?: Button5
  }
  
   interface Title6 {
    runs?: Run8[]
  }
  
   interface Run8 {
    text?: string
  }
  
   interface Content6 {
    runs?: Run9[]
  }
  
   interface Run9 {
    text?: string
  }
  
   interface Button5 {
    buttonRenderer?: ButtonRenderer5
  }
  
   interface ButtonRenderer5 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text7
    navigationEndpoint?: NavigationEndpoint6
    trackingParams?: string
  }
  
   interface Text7 {
    simpleText?: string
  }
  
   interface NavigationEndpoint6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata16
    signInEndpoint?: SignInEndpoint5
  }
  
   interface CommandMetadata16 {
    webCommandMetadata?: WebCommandMetadata16
  }
  
   interface WebCommandMetadata16 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint5 {
    nextEndpoint?: NextEndpoint4
    idamTag?: string
  }
  
   interface NextEndpoint4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata17
    watchEndpoint?: WatchEndpoint2
  }
  
   interface CommandMetadata17 {
    webCommandMetadata?: WebCommandMetadata17
  }
  
   interface WebCommandMetadata17 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint2 {
    videoId?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig2
  }
  
   interface WatchEndpointSupportedOnesieConfig2 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig2
  }
  
   interface Html5PlaybackOnesieConfig2 {
    commonConfig?: CommonConfig2
  }
  
   interface CommonConfig2 {
    url?: string
  }
  
   interface DateText {
    simpleText?: string
  }
  
   interface RelativeDateText {
    accessibility?: Accessibility2
    simpleText?: string
  }
  
   interface Accessibility2 {
    accessibilityData?: AccessibilityData2
  }
  
   interface AccessibilityData2 {
    label?: string
  }
  
   interface VideoSecondaryInfoRenderer {
    owner?: Owner
    subscribeButton?: SubscribeButton
    metadataRowContainer?: MetadataRowContainer
    showMoreText?: ShowMoreText
    showLessText?: ShowLessText
    trackingParams?: string
    defaultExpanded?: boolean
    descriptionCollapsedLines?: number
    showMoreCommand?: ShowMoreCommand
    showLessCommand?: ShowLessCommand
    attributedDescription?: AttributedDescription
    headerRuns?: HeaderRun[]
  }
  
   interface Owner {
    videoOwnerRenderer?: VideoOwnerRenderer
  }
  
   interface VideoOwnerRenderer {
    thumbnail?: Thumbnail
    title?: Title7
    subscriptionButton?: SubscriptionButton
    navigationEndpoint?: NavigationEndpoint8
    subscriberCountText?: SubscriberCountText
    trackingParams?: string
    badges?: Badge[]
  }
  
   interface Thumbnail {
    thumbnails?: Thumbnail2[]
  }
  
   interface Thumbnail2 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Title7 {
    runs?: Run10[]
  }
  
   interface Run10 {
    text?: string
    navigationEndpoint?: NavigationEndpoint7
  }
  
   interface NavigationEndpoint7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata18
    browseEndpoint?: BrowseEndpoint
  }
  
   interface CommandMetadata18 {
    webCommandMetadata?: WebCommandMetadata18
  }
  
   interface WebCommandMetadata18 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface SubscriptionButton {
    type?: string
  }
  
   interface NavigationEndpoint8 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata19
    browseEndpoint?: BrowseEndpoint2
  }
  
   interface CommandMetadata19 {
    webCommandMetadata?: WebCommandMetadata19
  }
  
   interface WebCommandMetadata19 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint2 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface SubscriberCountText {
    accessibility?: Accessibility3
    simpleText?: string
  }
  
   interface Accessibility3 {
    accessibilityData?: AccessibilityData3
  }
  
   interface AccessibilityData3 {
    label?: string
  }
  
   interface Badge {
    metadataBadgeRenderer?: MetadataBadgeRenderer
  }
  
   interface MetadataBadgeRenderer {
    icon?: Icon3
    style?: string
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData4
  }
  
   interface Icon3 {
    iconType?: string
  }
  
   interface AccessibilityData4 {
    label?: string
  }
  
   interface SubscribeButton {
    subscribeButtonRenderer?: SubscribeButtonRenderer
  }
  
   interface SubscribeButtonRenderer {
    buttonText?: ButtonText
    subscribed?: boolean
    enabled?: boolean
    type?: string
    channelId?: string
    showPreferences?: boolean
    subscribedButtonText?: SubscribedButtonText
    unsubscribedButtonText?: UnsubscribedButtonText
    trackingParams?: string
    unsubscribeButtonText?: UnsubscribeButtonText
    subscribeAccessibility?: SubscribeAccessibility
    unsubscribeAccessibility?: UnsubscribeAccessibility
    notificationPreferenceButton?: NotificationPreferenceButton
    targetId?: string
    signInEndpoint?: SignInEndpoint6
    subscribedEntityKey?: string
    onSubscribeEndpoints?: OnSubscribeEndpoint[]
    onUnsubscribeEndpoints?: OnUnsubscribeEndpoint[]
  }
  
   interface ButtonText {
    runs?: Run11[]
  }
  
   interface Run11 {
    text?: string
  }
  
   interface SubscribedButtonText {
    runs?: Run12[]
  }
  
   interface Run12 {
    text?: string
  }
  
   interface UnsubscribedButtonText {
    runs?: Run13[]
  }
  
   interface Run13 {
    text?: string
  }
  
   interface UnsubscribeButtonText {
    runs?: Run14[]
  }
  
   interface Run14 {
    text?: string
  }
  
   interface SubscribeAccessibility {
    accessibilityData?: AccessibilityData5
  }
  
   interface AccessibilityData5 {
    label?: string
  }
  
   interface UnsubscribeAccessibility {
    accessibilityData?: AccessibilityData6
  }
  
   interface AccessibilityData6 {
    label?: string
  }
  
   interface NotificationPreferenceButton {
    subscriptionNotificationToggleButtonRenderer?: SubscriptionNotificationToggleButtonRenderer
  }
  
   interface SubscriptionNotificationToggleButtonRenderer {
    states?: State[]
    currentStateId?: number
    trackingParams?: string
    command?: Command9
    targetId?: string
    secondaryIcon?: SecondaryIcon
  }
  
   interface State {
    stateId?: number
    nextStateId?: number
    state?: State2
  }
  
   interface State2 {
    buttonRenderer?: ButtonRenderer6
  }
  
   interface ButtonRenderer6 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon4
    accessibility?: Accessibility4
    trackingParams?: string
    accessibilityData?: AccessibilityData7
  }
  
   interface Icon4 {
    iconType?: string
  }
  
   interface Accessibility4 {
    label?: string
  }
  
   interface AccessibilityData7 {
    accessibilityData?: AccessibilityData8
  }
  
   interface AccessibilityData8 {
    label?: string
  }
  
   interface Command9 {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand
  }
  
   interface CommandExecutorCommand {
    commands?: Command10[]
  }
  
   interface Command10 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction2
  }
  
   interface OpenPopupAction2 {
    popup?: Popup2
    popupType?: string
  }
  
   interface Popup2 {
    menuPopupRenderer?: MenuPopupRenderer
  }
  
   interface MenuPopupRenderer {
    items?: Item2[]
  }
  
   interface Item2 {
    menuServiceItemRenderer?: MenuServiceItemRenderer2
  }
  
   interface MenuServiceItemRenderer2 {
    text?: Text8
    icon?: Icon5
    serviceEndpoint?: ServiceEndpoint3
    trackingParams?: string
    isSelected?: boolean
  }
  
   interface Text8 {
    simpleText?: string
    runs?: Run15[]
  }
  
   interface Run15 {
    text?: string
  }
  
   interface Icon5 {
    iconType?: string
  }
  
   interface ServiceEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata20
    modifyChannelNotificationPreferenceEndpoint?: ModifyChannelNotificationPreferenceEndpoint
    signalServiceEndpoint?: SignalServiceEndpoint
  }
  
   interface CommandMetadata20 {
    webCommandMetadata?: WebCommandMetadata20
  }
  
   interface WebCommandMetadata20 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ModifyChannelNotificationPreferenceEndpoint {
    params?: string
  }
  
   interface SignalServiceEndpoint {
    signal?: string
    actions?: Action[]
  }
  
   interface Action {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction3
  }
  
   interface OpenPopupAction3 {
    popup?: Popup3
    popupType?: string
  }
  
   interface Popup3 {
    confirmDialogRenderer?: ConfirmDialogRenderer
  }
  
   interface ConfirmDialogRenderer {
    trackingParams?: string
    dialogMessages?: DialogMessage[]
    confirmButton?: ConfirmButton
    cancelButton?: CancelButton
    primaryIsCancel?: boolean
  }
  
   interface DialogMessage {
    runs?: Run16[]
  }
  
   interface Run16 {
    text?: string
  }
  
   interface ConfirmButton {
    buttonRenderer?: ButtonRenderer7
  }
  
   interface ButtonRenderer7 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text9
    serviceEndpoint?: ServiceEndpoint4
    accessibility?: Accessibility5
    trackingParams?: string
  }
  
   interface Text9 {
    runs?: Run17[]
  }
  
   interface Run17 {
    text?: string
  }
  
   interface ServiceEndpoint4 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata21
    unsubscribeEndpoint?: UnsubscribeEndpoint
  }
  
   interface CommandMetadata21 {
    webCommandMetadata?: WebCommandMetadata21
  }
  
   interface WebCommandMetadata21 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface UnsubscribeEndpoint {
    channelIds?: string[]
    params?: string
  }
  
   interface Accessibility5 {
    label?: string
  }
  
   interface CancelButton {
    buttonRenderer?: ButtonRenderer8
  }
  
   interface ButtonRenderer8 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text10
    accessibility?: Accessibility6
    trackingParams?: string
  }
  
   interface Text10 {
    runs?: Run18[]
  }
  
   interface Run18 {
    text?: string
  }
  
   interface Accessibility6 {
    label?: string
  }
  
   interface SecondaryIcon {
    iconType?: string
  }
  
   interface SignInEndpoint6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata22
    modalEndpoint?: ModalEndpoint6
  }
  
   interface CommandMetadata22 {
    webCommandMetadata?: WebCommandMetadata22
  }
  
   interface WebCommandMetadata22 {
    ignoreNavigation?: boolean
  }
  
   interface ModalEndpoint6 {
    modal?: Modal6
  }
  
   interface Modal6 {
    modalWithTitleAndButtonRenderer?: ModalWithTitleAndButtonRenderer6
  }
  
   interface ModalWithTitleAndButtonRenderer6 {
    title?: Title8
    content?: Content7
    button?: Button6
  }
  
   interface Title8 {
    simpleText?: string
  }
  
   interface Content7 {
    simpleText?: string
  }
  
   interface Button6 {
    buttonRenderer?: ButtonRenderer9
  }
  
   interface ButtonRenderer9 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text11
    navigationEndpoint?: NavigationEndpoint9
    trackingParams?: string
  }
  
   interface Text11 {
    simpleText?: string
  }
  
   interface NavigationEndpoint9 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata23
    signInEndpoint?: SignInEndpoint7
  }
  
   interface CommandMetadata23 {
    webCommandMetadata?: WebCommandMetadata23
  }
  
   interface WebCommandMetadata23 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint7 {
    nextEndpoint?: NextEndpoint5
    continueAction?: string
    idamTag?: string
  }
  
   interface NextEndpoint5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata24
    watchEndpoint?: WatchEndpoint3
  }
  
   interface CommandMetadata24 {
    webCommandMetadata?: WebCommandMetadata24
  }
  
   interface WebCommandMetadata24 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint3 {
    videoId?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig3
  }
  
   interface WatchEndpointSupportedOnesieConfig3 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig3
  }
  
   interface Html5PlaybackOnesieConfig3 {
    commonConfig?: CommonConfig3
  }
  
   interface CommonConfig3 {
    url?: string
  }
  
   interface OnSubscribeEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata25
    subscribeEndpoint?: SubscribeEndpoint
  }
  
   interface CommandMetadata25 {
    webCommandMetadata?: WebCommandMetadata25
  }
  
   interface WebCommandMetadata25 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SubscribeEndpoint {
    channelIds?: string[]
    params?: string
  }
  
   interface OnUnsubscribeEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata26
    signalServiceEndpoint?: SignalServiceEndpoint2
  }
  
   interface CommandMetadata26 {
    webCommandMetadata?: WebCommandMetadata26
  }
  
   interface WebCommandMetadata26 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint2 {
    signal?: string
    actions?: Action2[]
  }
  
   interface Action2 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction4
  }
  
   interface OpenPopupAction4 {
    popup?: Popup4
    popupType?: string
  }
  
   interface Popup4 {
    confirmDialogRenderer?: ConfirmDialogRenderer2
  }
  
   interface ConfirmDialogRenderer2 {
    trackingParams?: string
    dialogMessages?: DialogMessage2[]
    confirmButton?: ConfirmButton2
    cancelButton?: CancelButton2
    primaryIsCancel?: boolean
  }
  
   interface DialogMessage2 {
    runs?: Run19[]
  }
  
   interface Run19 {
    text?: string
  }
  
   interface ConfirmButton2 {
    buttonRenderer?: ButtonRenderer10
  }
  
   interface ButtonRenderer10 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text12
    serviceEndpoint?: ServiceEndpoint5
    accessibility?: Accessibility7
    trackingParams?: string
  }
  
   interface Text12 {
    runs?: Run20[]
  }
  
   interface Run20 {
    text?: string
  }
  
   interface ServiceEndpoint5 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata27
    unsubscribeEndpoint?: UnsubscribeEndpoint2
  }
  
   interface CommandMetadata27 {
    webCommandMetadata?: WebCommandMetadata27
  }
  
   interface WebCommandMetadata27 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface UnsubscribeEndpoint2 {
    channelIds?: string[]
    params?: string
  }
  
   interface Accessibility7 {
    label?: string
  }
  
   interface CancelButton2 {
    buttonRenderer?: ButtonRenderer11
  }
  
   interface ButtonRenderer11 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text13
    accessibility?: Accessibility8
    trackingParams?: string
  }
  
   interface Text13 {
    runs?: Run21[]
  }
  
   interface Run21 {
    text?: string
  }
  
   interface Accessibility8 {
    label?: string
  }
  
   interface MetadataRowContainer {
    metadataRowContainerRenderer?: MetadataRowContainerRenderer
  }
  
   interface MetadataRowContainerRenderer {
    collapsedItemCount?: number
    trackingParams?: string
  }
  
   interface ShowMoreText {
    simpleText?: string
  }
  
   interface ShowLessText {
    simpleText?: string
  }
  
   interface ShowMoreCommand {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand2
  }
  
   interface CommandExecutorCommand2 {
    commands?: Command11[]
  }
  
   interface Command11 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand
  }
  
   interface ChangeEngagementPanelVisibilityAction {
    targetId?: string
    visibility?: string
  }
  
   interface ScrollToEngagementPanelCommand {
    targetId?: string
  }
  
   interface ShowLessCommand {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction2
  }
  
   interface ChangeEngagementPanelVisibilityAction2 {
    targetId?: string
    visibility?: string
  }
  
   interface AttributedDescription {
    content?: string
    commandRuns?: CommandRun[]
    styleRuns?: StyleRun[]
    attachmentRuns?: AttachmentRun[]
    decorationRuns?: DecorationRun[]
  }
  
   interface CommandRun {
    startIndex?: number
    length?: number
    onTap?: OnTap7
    loggingDirectives?: LoggingDirectives
    onTapOptions?: OnTapOptions
  }
  
   interface OnTap7 {
    innertubeCommand?: InnertubeCommand7
  }
  
   interface InnertubeCommand7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata28
    urlEndpoint?: UrlEndpoint
  }
  
   interface CommandMetadata28 {
    webCommandMetadata?: WebCommandMetadata28
  }
  
   interface WebCommandMetadata28 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint {
    url?: string
    target?: string
    nofollow?: boolean
  }
  
   interface LoggingDirectives {
    trackingParams?: string
    enableDisplayloggerExperiment?: boolean
  }
  
   interface OnTapOptions {
    accessibilityInfo?: AccessibilityInfo
  }
  
   interface AccessibilityInfo {
    accessibilityLabel?: string
  }
  
   interface StyleRun {
    startIndex?: number
    length?: number
    styleRunExtensions?: StyleRunExtensions
    fontFamilyName?: string
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
    url?: string
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
    top?: Top
  }
  
   interface Top {
    value?: number
    unit?: string
  }
  
   interface DecorationRun {
    textDecorator?: TextDecorator
  }
  
   interface TextDecorator {
    highlightTextDecorator?: HighlightTextDecorator
  }
  
   interface HighlightTextDecorator {
    startIndex?: number
    length?: number
    backgroundCornerRadius?: number
    bottomPadding?: number
    highlightTextDecoratorExtensions?: HighlightTextDecoratorExtensions
  }
  
   interface HighlightTextDecoratorExtensions {
    highlightTextDecoratorColorMapExtension?: HighlightTextDecoratorColorMapExtension
  }
  
   interface HighlightTextDecoratorColorMapExtension {
    colorMap?: ColorMap2[]
  }
  
   interface ColorMap2 {
    key?: string
    value?: number
  }
  
   interface HeaderRun {
    startIndex?: number
    length?: number
    headerMapping?: string
  }
  
   interface MerchandiseShelfRenderer {
    title?: string
    items?: Item3[]
    trackingParams?: string
    showText?: string
    hideText?: string
    actionButton?: ActionButton
    shelfType?: string
  }
  
   interface Item3 {
    merchandiseItemRenderer?: MerchandiseItemRenderer
  }
  
   interface MerchandiseItemRenderer {
    title?: string
    description?: string
    thumbnail?: Thumbnail3
    price?: string
    vendorName?: string
    trackingParams?: string
    buttonText?: string
    buttonCommand?: ButtonCommand
    accessibilityTitle?: string
    buttonAccessibilityText?: string
    fromVendorText?: string
    additionalFeesText?: string
    showOpenInNewIcon?: boolean
  }
  
   interface Thumbnail3 {
    thumbnails?: Thumbnail4[]
  }
  
   interface Thumbnail4 {
    url?: string
    width?: number
    height?: number
  }
  
   interface ButtonCommand {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand3
  }
  
   interface CommandExecutorCommand3 {
    commands?: Command12[]
  }
  
   interface Command12 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata29
    feedbackEndpoint?: FeedbackEndpoint
    urlEndpoint?: UrlEndpoint2
  }
  
   interface CommandMetadata29 {
    webCommandMetadata?: WebCommandMetadata29
  }
  
   interface WebCommandMetadata29 {
    sendPost?: boolean
    apiUrl?: string
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface FeedbackEndpoint {
    feedbackToken?: string
  }
  
   interface UrlEndpoint2 {
    url?: string
    target?: string
  }
  
   interface ActionButton {
    menuRenderer?: MenuRenderer2
  }
  
   interface MenuRenderer2 {
    items?: Item4[]
    trackingParams?: string
    accessibility?: Accessibility11
  }
  
   interface Item4 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer2
    menuServiceItemRenderer?: MenuServiceItemRenderer3
  }
  
   interface MenuNavigationItemRenderer2 {
    text?: Text14
    icon?: Icon6
    navigationEndpoint?: NavigationEndpoint10
    trackingParams?: string
  }
  
   interface Text14 {
    accessibility?: Accessibility9
    simpleText?: string
  }
  
   interface Accessibility9 {
    accessibilityData?: AccessibilityData9
  }
  
   interface AccessibilityData9 {
    label?: string
  }
  
   interface Icon6 {
    iconType?: string
  }
  
   interface NavigationEndpoint10 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction5
  }
  
   interface OpenPopupAction5 {
    popup?: Popup5
    popupType?: string
  }
  
   interface Popup5 {
    fancyDismissibleDialogRenderer?: FancyDismissibleDialogRenderer
  }
  
   interface FancyDismissibleDialogRenderer {
    dialogMessage?: DialogMessage3
    confirmLabel?: ConfirmLabel
    trackingParams?: string
  }
  
   interface DialogMessage3 {
    runs?: Run22[]
  }
  
   interface Run22 {
    text?: string
    textColor?: number
    navigationEndpoint?: NavigationEndpoint11
  }
  
   interface NavigationEndpoint11 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata30
    urlEndpoint?: UrlEndpoint3
  }
  
   interface CommandMetadata30 {
    webCommandMetadata?: WebCommandMetadata30
  }
  
   interface WebCommandMetadata30 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint3 {
    url?: string
    target?: string
  }
  
   interface ConfirmLabel {
    simpleText?: string
  }
  
   interface MenuServiceItemRenderer3 {
    text?: Text15
    icon?: Icon7
    serviceEndpoint?: ServiceEndpoint6
    trackingParams?: string
    loggingDirectives?: LoggingDirectives2
  }
  
   interface Text15 {
    accessibility?: Accessibility10
    simpleText?: string
  }
  
   interface Accessibility10 {
    accessibilityData?: AccessibilityData10
  }
  
   interface AccessibilityData10 {
    label?: string
  }
  
   interface Icon7 {
    iconType?: string
  }
  
   interface ServiceEndpoint6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata31
    signInEndpoint?: SignInEndpoint8
  }
  
   interface CommandMetadata31 {
    webCommandMetadata?: WebCommandMetadata31
  }
  
   interface WebCommandMetadata31 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint8 {
    nextEndpoint?: NextEndpoint6
  }
  
   interface NextEndpoint6 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata32
    getReportFormEndpoint?: GetReportFormEndpoint
  }
  
   interface CommandMetadata32 {
    webCommandMetadata?: WebCommandMetadata32
  }
  
   interface WebCommandMetadata32 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface GetReportFormEndpoint {
    params?: string
  }
  
   interface LoggingDirectives2 {
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
  
   interface Accessibility11 {
    accessibilityData?: AccessibilityData11
  }
  
   interface AccessibilityData11 {
    label?: string
  }
  
   interface ItemSectionRenderer {
    contents?: Content8[]
    trackingParams?: string
    sectionIdentifier?: string
    targetId?: string
  }
  
   interface Content8 {
    continuationItemRenderer?: ContinuationItemRenderer
    commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer
  }
  
   interface ContinuationItemRenderer {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint
  }
  
   interface ContinuationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata33
    continuationCommand?: ContinuationCommand
  }
  
   interface CommandMetadata33 {
    webCommandMetadata?: WebCommandMetadata33
  }
  
   interface WebCommandMetadata33 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand {
    token?: string
    request?: string
  }
  
   interface CommentsEntryPointHeaderRenderer {
    headerText?: HeaderText
    onTap?: OnTap8
    trackingParams?: string
    commentCount?: CommentCount
    contentRenderer?: ContentRenderer
    targetId?: string
  }
  
   interface HeaderText {
    runs?: Run23[]
  }
  
   interface Run23 {
    text?: string
  }
  
   interface OnTap8 {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand4
  }
  
   interface CommandExecutorCommand4 {
    commands?: Command13[]
  }
  
   interface Command13 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction3
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand2
  }
  
   interface ChangeEngagementPanelVisibilityAction3 {
    targetId?: string
    visibility?: string
  }
  
   interface ScrollToEngagementPanelCommand2 {
    targetId?: string
  }
  
   interface CommentCount {
    simpleText?: string
  }
  
   interface ContentRenderer {
    commentsEntryPointTeaserRenderer?: CommentsEntryPointTeaserRenderer
  }
  
   interface CommentsEntryPointTeaserRenderer {
    teaserAvatar?: TeaserAvatar
    teaserContent?: TeaserContent
    trackingParams?: string
  }
  
   interface TeaserAvatar {
    thumbnails?: Thumbnail5[]
    accessibility?: Accessibility12
  }
  
   interface Thumbnail5 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Accessibility12 {
    accessibilityData?: AccessibilityData12
  }
  
   interface AccessibilityData12 {
    label?: string
  }
  
   interface TeaserContent {
    simpleText?: string
  }
  
   interface SecondaryResults {
    secondaryResults?: SecondaryResults2
  }
  
   interface SecondaryResults2 {
    results?: Result[]
    continuations?: Continuation[]
    trackingParams?: string
  }
  
   interface Result {
    compactVideoRenderer?: CompactVideoRenderer
  }
  
   interface CompactVideoRenderer {
    videoId?: string
    thumbnail?: Thumbnail6
    title?: Title9
    longBylineText?: LongBylineText
    publishedTimeText?: PublishedTimeText
    viewCountText?: ViewCountText
    lengthText?: LengthText
    navigationEndpoint?: NavigationEndpoint13
    shortBylineText?: ShortBylineText
    channelThumbnail?: ChannelThumbnail
    ownerBadges?: OwnerBadge[]
    trackingParams?: string
    shortViewCountText?: ShortViewCountText
    menu?: Menu
    thumbnailOverlays?: ThumbnailOverlay[]
    accessibility?: Accessibility18
    richThumbnail?: RichThumbnail
  }
  
   interface Thumbnail6 {
    thumbnails?: Thumbnail7[]
  }
  
   interface Thumbnail7 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Title9 {
    accessibility?: Accessibility13
    simpleText?: string
  }
  
   interface Accessibility13 {
    accessibilityData?: AccessibilityData13
  }
  
   interface AccessibilityData13 {
    label?: string
  }
  
   interface LongBylineText {
    runs?: Run24[]
  }
  
   interface Run24 {
    text?: string
    navigationEndpoint?: NavigationEndpoint12
  }
  
   interface NavigationEndpoint12 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata34
    browseEndpoint?: BrowseEndpoint3
  }
  
   interface CommandMetadata34 {
    webCommandMetadata?: WebCommandMetadata34
  }
  
   interface WebCommandMetadata34 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint3 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface PublishedTimeText {
    simpleText?: string
  }
  
   interface ViewCountText {
    simpleText?: string
  }
  
   interface LengthText {
    accessibility?: Accessibility14
    simpleText?: string
  }
  
   interface Accessibility14 {
    accessibilityData?: AccessibilityData14
  }
  
   interface AccessibilityData14 {
    label?: string
  }
  
   interface NavigationEndpoint13 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata35
    watchEndpoint?: WatchEndpoint4
  }
  
   interface CommandMetadata35 {
    webCommandMetadata?: WebCommandMetadata35
  }
  
   interface WebCommandMetadata35 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint4 {
    videoId?: string
    nofollow?: boolean
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig4
  }
  
   interface WatchEndpointSupportedOnesieConfig4 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig4
  }
  
   interface Html5PlaybackOnesieConfig4 {
    commonConfig?: CommonConfig4
  }
  
   interface CommonConfig4 {
    url?: string
  }
  
   interface ShortBylineText {
    runs?: Run25[]
  }
  
   interface Run25 {
    text?: string
    navigationEndpoint?: NavigationEndpoint14
  }
  
   interface NavigationEndpoint14 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata36
    browseEndpoint?: BrowseEndpoint4
  }
  
   interface CommandMetadata36 {
    webCommandMetadata?: WebCommandMetadata36
  }
  
   interface WebCommandMetadata36 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint4 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface ChannelThumbnail {
    thumbnails?: Thumbnail8[]
  }
  
   interface Thumbnail8 {
    url?: string
    width?: number
    height?: number
  }
  
   interface OwnerBadge {
    metadataBadgeRenderer?: MetadataBadgeRenderer2
  }
  
   interface MetadataBadgeRenderer2 {
    icon?: Icon8
    style?: string
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData15
  }
  
   interface Icon8 {
    iconType?: string
  }
  
   interface AccessibilityData15 {
    label?: string
  }
  
   interface ShortViewCountText {
    accessibility?: Accessibility15
    simpleText?: string
  }
  
   interface Accessibility15 {
    accessibilityData?: AccessibilityData16
  }
  
   interface AccessibilityData16 {
    label?: string
  }
  
   interface Menu {
    menuRenderer?: MenuRenderer3
  }
  
   interface MenuRenderer3 {
    items?: Item5[]
    trackingParams?: string
    accessibility?: Accessibility16
    targetId?: string
  }
  
   interface Item5 {
    menuServiceItemRenderer?: MenuServiceItemRenderer4
    menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer2
  }
  
   interface MenuServiceItemRenderer4 {
    text?: Text16
    icon?: Icon9
    serviceEndpoint?: ServiceEndpoint7
    trackingParams?: string
    hasSeparator?: boolean
  }
  
   interface Text16 {
    runs?: Run26[]
  }
  
   interface Run26 {
    text?: string
  }
  
   interface Icon9 {
    iconType?: string
  }
  
   interface ServiceEndpoint7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata37
    signalServiceEndpoint?: SignalServiceEndpoint3
    shareEntityServiceEndpoint?: ShareEntityServiceEndpoint2
  }
  
   interface CommandMetadata37 {
    webCommandMetadata?: WebCommandMetadata37
  }
  
   interface WebCommandMetadata37 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SignalServiceEndpoint3 {
    signal?: string
    actions?: Action3[]
  }
  
   interface Action3 {
    clickTrackingParams?: string
    addToPlaylistCommand?: AddToPlaylistCommand
    openPopupAction?: OpenPopupAction6
  }
  
   interface AddToPlaylistCommand {
    openMiniplayer?: boolean
    openListPanel?: boolean
    videoId?: string
    listType?: string
    onCreateListCommand?: OnCreateListCommand
    videoIds?: string[]
  }
  
   interface OnCreateListCommand {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata38
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint
  }
  
   interface CommandMetadata38 {
    webCommandMetadata?: WebCommandMetadata38
  }
  
   interface WebCommandMetadata38 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface CreatePlaylistServiceEndpoint {
    videoIds?: string[]
    params?: string
  }
  
   interface OpenPopupAction6 {
    popup?: Popup6
    popupType?: string
  }
  
   interface Popup6 {
    notificationActionRenderer?: NotificationActionRenderer
  }
  
   interface NotificationActionRenderer {
    responseText?: ResponseText
    trackingParams?: string
  }
  
   interface ResponseText {
    simpleText?: string
  }
  
   interface ShareEntityServiceEndpoint2 {
    serializedShareEntity?: string
    commands?: Command14[]
  }
  
   interface Command14 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction7
  }
  
   interface OpenPopupAction7 {
    popup?: Popup7
    popupType?: string
    beReused?: boolean
  }
  
   interface Popup7 {
    unifiedSharePanelRenderer?: UnifiedSharePanelRenderer2
  }
  
   interface UnifiedSharePanelRenderer2 {
    trackingParams?: string
    showLoadingSpinner?: boolean
  }
  
   interface MenuServiceItemDownloadRenderer2 {
    serviceEndpoint?: ServiceEndpoint8
    trackingParams?: string
  }
  
   interface ServiceEndpoint8 {
    clickTrackingParams?: string
    offlineVideoEndpoint?: OfflineVideoEndpoint3
  }
  
   interface OfflineVideoEndpoint3 {
    videoId?: string
    onAddCommand?: OnAddCommand3
  }
  
   interface OnAddCommand3 {
    clickTrackingParams?: string
    getDownloadActionCommand?: GetDownloadActionCommand3
  }
  
   interface GetDownloadActionCommand3 {
    videoId?: string
    params?: string
  }
  
   interface Accessibility16 {
    accessibilityData?: AccessibilityData17
  }
  
   interface AccessibilityData17 {
    label?: string
  }
  
   interface ThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
    thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
  }
  
   interface ThumbnailOverlayTimeStatusRenderer {
    text?: Text17
    style?: string
  }
  
   interface Text17 {
    accessibility?: Accessibility17
    simpleText?: string
  }
  
   interface Accessibility17 {
    accessibilityData?: AccessibilityData18
  }
  
   interface AccessibilityData18 {
    label?: string
  }
  
   interface ThumbnailOverlayToggleButtonRenderer {
    untoggledIcon?: UntoggledIcon
    toggledIcon?: ToggledIcon
    untoggledTooltip?: string
    toggledTooltip?: string
    untoggledServiceEndpoint?: UntoggledServiceEndpoint
    untoggledAccessibility?: UntoggledAccessibility
    toggledAccessibility?: ToggledAccessibility
    trackingParams?: string
    isToggled?: boolean
    toggledServiceEndpoint?: ToggledServiceEndpoint
  }
  
   interface UntoggledIcon {
    iconType?: string
  }
  
   interface ToggledIcon {
    iconType?: string
  }
  
   interface UntoggledServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata39
    signalServiceEndpoint?: SignalServiceEndpoint4
    playlistEditEndpoint?: PlaylistEditEndpoint
  }
  
   interface CommandMetadata39 {
    webCommandMetadata?: WebCommandMetadata39
  }
  
   interface WebCommandMetadata39 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SignalServiceEndpoint4 {
    signal?: string
    actions?: Action4[]
  }
  
   interface Action4 {
    clickTrackingParams?: string
    addToPlaylistCommand?: AddToPlaylistCommand2
  }
  
   interface AddToPlaylistCommand2 {
    openMiniplayer?: boolean
    openListPanel?: boolean
    videoId?: string
    listType?: string
    onCreateListCommand?: OnCreateListCommand2
    videoIds?: string[]
  }
  
   interface OnCreateListCommand2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata40
    createPlaylistServiceEndpoint?: CreatePlaylistServiceEndpoint2
  }
  
   interface CommandMetadata40 {
    webCommandMetadata?: WebCommandMetadata40
  }
  
   interface WebCommandMetadata40 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface CreatePlaylistServiceEndpoint2 {
    videoIds?: string[]
    params?: string
  }
  
   interface PlaylistEditEndpoint {
    playlistId?: string
    actions?: Action5[]
  }
  
   interface Action5 {
    addedVideoId?: string
    action?: string
  }
  
   interface UntoggledAccessibility {
    accessibilityData?: AccessibilityData19
  }
  
   interface AccessibilityData19 {
    label?: string
  }
  
   interface ToggledAccessibility {
    accessibilityData?: AccessibilityData20
  }
  
   interface AccessibilityData20 {
    label?: string
  }
  
   interface ToggledServiceEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata41
    playlistEditEndpoint?: PlaylistEditEndpoint2
  }
  
   interface CommandMetadata41 {
    webCommandMetadata?: WebCommandMetadata41
  }
  
   interface WebCommandMetadata41 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface PlaylistEditEndpoint2 {
    playlistId?: string
    actions?: Action6[]
  }
  
   interface Action6 {
    action?: string
    removedVideoId?: string
  }
  
   interface ThumbnailOverlayNowPlayingRenderer {
    text?: Text18
  }
  
   interface Text18 {
    runs?: Run27[]
  }
  
   interface Run27 {
    text?: string
  }
  
   interface Accessibility18 {
    accessibilityData?: AccessibilityData21
  }
  
   interface AccessibilityData21 {
    label?: string
  }
  
   interface RichThumbnail {
    movingThumbnailRenderer?: MovingThumbnailRenderer
  }
  
   interface MovingThumbnailRenderer {
    enableHoveredLogging?: boolean
    enableOverlay?: boolean
  }
  
   interface Continuation {
    nextContinuationData?: NextContinuationData
  }
  
   interface NextContinuationData {
    continuation?: string
    clickTrackingParams?: string
    label?: Label
  }
  
   interface Label {
    runs?: Run28[]
  }
  
   interface Run28 {
    text?: string
  }
  
   interface Autoplay {
    autoplay?: Autoplay2
  }
  
   interface Autoplay2 {
    sets?: SetAutoPlay[]
    countDownSecs?: number
    trackingParams?: string
  }
  
   interface SetAutoPlay {
    mode?: string
    autoplayVideo?: AutoplayVideo
  }
  
   interface AutoplayVideo {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata42
    watchEndpoint?: WatchEndpoint5
  }
  
   interface CommandMetadata42 {
    webCommandMetadata?: WebCommandMetadata42
  }
  
   interface WebCommandMetadata42 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint5 {
    videoId?: string
    params?: string
    playerParams?: string
    watchEndpointSupportedPrefetchConfig?: WatchEndpointSupportedPrefetchConfig
  }
  
   interface WatchEndpointSupportedPrefetchConfig {
    prefetchHintConfig?: PrefetchHintConfig
  }
  
   interface PrefetchHintConfig {
    prefetchPriority?: number
    countdownUiRelativeSecondsPrefetchCondition?: number
  }
  
   interface ConversationBar {
    liveChatRenderer?: LiveChatRenderer
  }
  
   interface LiveChatRenderer {
    continuations?: Continuation2[]
    header?: Header
    trackingParams?: string
    clientMessages?: ClientMessages
    isReplay?: boolean
    initialDisplayState?: string
    showButton?: ShowButton
  }
  
   interface Continuation2 {
    reloadContinuationData?: ReloadContinuationData
  }
  
   interface ReloadContinuationData {
    continuation?: string
    clickTrackingParams?: string
  }
  
   interface Header {
    liveChatHeaderRenderer?: LiveChatHeaderRenderer
  }
  
   interface LiveChatHeaderRenderer {
    overflowMenu?: OverflowMenu
    collapseButton?: CollapseButton
    viewSelector?: ViewSelector
  }
  
   interface OverflowMenu {
    menuRenderer?: MenuRenderer4
  }
  
   interface MenuRenderer4 {
    items?: Item6[]
    trackingParams?: string
    accessibility?: Accessibility19
  }
  
   interface Item6 {
    clientSideToggleMenuItemRenderer?: ClientSideToggleMenuItemRenderer
    menuNavigationItemRenderer?: MenuNavigationItemRenderer3
  }
  
   interface ClientSideToggleMenuItemRenderer {
    defaultText?: DefaultText
    defaultIcon?: DefaultIcon
    toggledText?: ToggledText
    toggledIcon?: ToggledIcon2
    menuItemIdentifier?: string
    command?: Command15
  }
  
   interface DefaultText {
    runs?: Run29[]
  }
  
   interface Run29 {
    text?: string
  }
  
   interface DefaultIcon {
    iconType?: string
  }
  
   interface ToggledText {
    runs?: Run30[]
  }
  
   interface Run30 {
    text?: string
  }
  
   interface ToggledIcon2 {
    iconType?: string
  }
  
   interface Command15 {
    clickTrackingParams?: string
    toggleLiveChatTimestampsEndpoint?: ToggleLiveChatTimestampsEndpoint
  }
  
   interface ToggleLiveChatTimestampsEndpoint {
    hack?: boolean
  }
  
   interface MenuNavigationItemRenderer3 {
    text?: Text19
    icon?: Icon10
    navigationEndpoint?: NavigationEndpoint15
    trackingParams?: string
  }
  
   interface Text19 {
    runs?: Run31[]
  }
  
   interface Run31 {
    text?: string
  }
  
   interface Icon10 {
    iconType?: string
  }
  
   interface NavigationEndpoint15 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata43
    userFeedbackEndpoint?: UserFeedbackEndpoint
  }
  
   interface CommandMetadata43 {
    webCommandMetadata?: WebCommandMetadata43
  }
  
   interface WebCommandMetadata43 {
    ignoreNavigation?: boolean
  }
  
   interface UserFeedbackEndpoint {
    hack?: boolean
    bucketIdentifier?: string
  }
  
   interface Accessibility19 {
    accessibilityData?: AccessibilityData22
  }
  
   interface AccessibilityData22 {
    label?: string
  }
  
   interface CollapseButton {
    buttonRenderer?: ButtonRenderer12
  }
  
   interface ButtonRenderer12 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon11
    accessibility?: Accessibility20
    trackingParams?: string
    command?: Command16
  }
  
   interface Icon11 {
    iconType?: string
  }
  
   interface Accessibility20 {
    label?: string
  }
  
   interface Command16 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata44
    signalServiceEndpoint?: SignalServiceEndpoint5
  }
  
   interface CommandMetadata44 {
    webCommandMetadata?: WebCommandMetadata44
  }
  
   interface WebCommandMetadata44 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint5 {
    signal?: string
    actions?: Action7[]
  }
  
   interface Action7 {
    clickTrackingParams?: string
    signalAction?: SignalAction
  }
  
   interface SignalAction {
    signal?: string
  }
  
   interface ViewSelector {
    sortFilterSubMenuRenderer?: SortFilterSubMenuRenderer
  }
  
   interface SortFilterSubMenuRenderer {
    subMenuItems?: SubMenuItem[]
    accessibility?: Accessibility22
    trackingParams?: string
    targetId?: string
  }
  
   interface SubMenuItem {
    title?: string
    selected?: boolean
    continuation?: Continuation3
    accessibility?: Accessibility21
    subtitle?: string
    trackingParams?: string
  }
  
   interface Continuation3 {
    reloadContinuationData?: ReloadContinuationData2
  }
  
   interface ReloadContinuationData2 {
    continuation?: string
    clickTrackingParams?: string
  }
  
   interface Accessibility21 {
    accessibilityData?: AccessibilityData23
  }
  
   interface AccessibilityData23 {
    label?: string
  }
  
   interface Accessibility22 {
    accessibilityData?: AccessibilityData24
  }
  
   interface AccessibilityData24 {
    label?: string
  }
  
   interface ClientMessages {
    reconnectMessage?: ReconnectMessage
    unableToReconnectMessage?: UnableToReconnectMessage
    fatalError?: FatalError
    reconnectedMessage?: ReconnectedMessage
    genericError?: GenericError
  }
  
   interface ReconnectMessage {
    runs?: Run32[]
  }
  
   interface Run32 {
    text?: string
  }
  
   interface UnableToReconnectMessage {
    runs?: Run33[]
  }
  
   interface Run33 {
    text?: string
  }
  
   interface FatalError {
    runs?: Run34[]
  }
  
   interface Run34 {
    text?: string
  }
  
   interface ReconnectedMessage {
    runs?: Run35[]
  }
  
   interface Run35 {
    text?: string
  }
  
   interface GenericError {
    runs?: Run36[]
  }
  
   interface Run36 {
    text?: string
  }
  
   interface ShowButton {
    buttonRenderer?: ButtonRenderer13
  }
  
   interface ButtonRenderer13 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text20
    trackingParams?: string
  }
  
   interface Text20 {
    simpleText?: string
  }
  
   interface CurrentVideoEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata45
    watchEndpoint?: WatchEndpoint6
  }
  
   interface CommandMetadata45 {
    webCommandMetadata?: WebCommandMetadata45
  }
  
   interface WebCommandMetadata45 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint6 {
    videoId?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig5
  }
  
   interface WatchEndpointSupportedOnesieConfig5 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig5
  }
  
   interface Html5PlaybackOnesieConfig5 {
    commonConfig?: CommonConfig5
  }
  
   interface CommonConfig5 {
    url?: string
  }
  
   interface PlayerOverlays {
    playerOverlayRenderer?: PlayerOverlayRenderer
  }
  
   interface PlayerOverlayRenderer {
    endScreen?: EndScreen
    autoplay?: Autoplay3
    shareButton?: ShareButton
    addToMenu?: AddToMenu
    videoDetails?: VideoDetails
    autonavToggle?: AutonavToggle
    decoratedPlayerBarRenderer?: DecoratedPlayerBarRenderer
    speedmasterUserEdu?: SpeedmasterUserEdu
  }
  
   interface EndScreen {
    watchNextEndScreenRenderer?: WatchNextEndScreenRenderer
  }
  
   interface WatchNextEndScreenRenderer {
    results?: Result2[]
    title?: Title11
    trackingParams?: string
  }
  
   interface Result2 {
    endScreenVideoRenderer?: EndScreenVideoRenderer
  }
  
   interface EndScreenVideoRenderer {
    videoId?: string
    thumbnail?: Thumbnail9
    title?: Title10
    shortBylineText?: ShortBylineText2
    lengthText?: LengthText2
    lengthInSeconds?: number
    navigationEndpoint?: NavigationEndpoint17
    trackingParams?: string
    shortViewCountText?: ShortViewCountText2
    publishedTimeText?: PublishedTimeText2
    thumbnailOverlays?: ThumbnailOverlay2[]
  }
  
   interface Thumbnail9 {
    thumbnails?: Thumbnail10[]
  }
  
   interface Thumbnail10 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Title10 {
    accessibility?: Accessibility23
    simpleText?: string
  }
  
   interface Accessibility23 {
    accessibilityData?: AccessibilityData25
  }
  
   interface AccessibilityData25 {
    label?: string
  }
  
   interface ShortBylineText2 {
    runs?: Run37[]
  }
  
   interface Run37 {
    text?: string
    navigationEndpoint?: NavigationEndpoint16
  }
  
   interface NavigationEndpoint16 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata46
    browseEndpoint?: BrowseEndpoint5
  }
  
   interface CommandMetadata46 {
    webCommandMetadata?: WebCommandMetadata46
  }
  
   interface WebCommandMetadata46 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint5 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface LengthText2 {
    accessibility?: Accessibility24
    simpleText?: string
  }
  
   interface Accessibility24 {
    accessibilityData?: AccessibilityData26
  }
  
   interface AccessibilityData26 {
    label?: string
  }
  
   interface NavigationEndpoint17 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata47
    watchEndpoint?: WatchEndpoint7
  }
  
   interface CommandMetadata47 {
    webCommandMetadata?: WebCommandMetadata47
  }
  
   interface WebCommandMetadata47 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint7 {
    videoId?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig6
  }
  
   interface WatchEndpointSupportedOnesieConfig6 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig6
  }
  
   interface Html5PlaybackOnesieConfig6 {
    commonConfig?: CommonConfig6
  }
  
   interface CommonConfig6 {
    url?: string
  }
  
   interface ShortViewCountText2 {
    accessibility?: Accessibility25
    simpleText?: string
  }
  
   interface Accessibility25 {
    accessibilityData?: AccessibilityData27
  }
  
   interface AccessibilityData27 {
    label?: string
  }
  
   interface PublishedTimeText2 {
    simpleText?: string
  }
  
   interface ThumbnailOverlay2 {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer2
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer2
  }
  
   interface ThumbnailOverlayTimeStatusRenderer2 {
    text?: Text21
    style?: string
  }
  
   interface Text21 {
    accessibility?: Accessibility26
    simpleText?: string
  }
  
   interface Accessibility26 {
    accessibilityData?: AccessibilityData28
  }
  
   interface AccessibilityData28 {
    label?: string
  }
  
   interface ThumbnailOverlayNowPlayingRenderer2 {
    text?: Text22
  }
  
   interface Text22 {
    runs?: Run38[]
  }
  
   interface Run38 {
    text?: string
  }
  
   interface Title11 {
    simpleText?: string
  }
  
   interface Autoplay3 {
    playerOverlayAutoplayRenderer?: PlayerOverlayAutoplayRenderer
  }
  
   interface PlayerOverlayAutoplayRenderer {
    title?: Title12
    videoTitle?: VideoTitle
    byline?: Byline
    pauseText?: PauseText
    background?: Background
    countDownSecs?: number
    cancelButton?: CancelButton3
    nextButton?: NextButton
    trackingParams?: string
    closeButton?: CloseButton
    thumbnailOverlays?: ThumbnailOverlay3[]
    preferImmediateRedirect?: boolean
    videoId?: string
    publishedTimeText?: PublishedTimeText3
    webShowNewAutonavCountdown?: boolean
    webShowBigThumbnailEndscreen?: boolean
    shortViewCountText?: ShortViewCountText3
    countDownSecsForFullscreen?: number
  }
  
   interface Title12 {
    simpleText?: string
  }
  
   interface VideoTitle {
    accessibility?: Accessibility27
    simpleText?: string
  }
  
   interface Accessibility27 {
    accessibilityData?: AccessibilityData29
  }
  
   interface AccessibilityData29 {
    label?: string
  }
  
   interface Byline {
    runs?: Run39[]
  }
  
   interface Run39 {
    text?: string
    navigationEndpoint?: NavigationEndpoint18
  }
  
   interface NavigationEndpoint18 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata48
    browseEndpoint?: BrowseEndpoint6
  }
  
   interface CommandMetadata48 {
    webCommandMetadata?: WebCommandMetadata48
  }
  
   interface WebCommandMetadata48 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint6 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface PauseText {
    simpleText?: string
  }
  
   interface Background {
    thumbnails?: Thumbnail11[]
  }
  
   interface Thumbnail11 {
    url?: string
    width?: number
    height?: number
  }
  
   interface CancelButton3 {
    buttonRenderer?: ButtonRenderer14
  }
  
   interface ButtonRenderer14 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text23
    accessibility?: Accessibility28
    trackingParams?: string
    accessibilityData?: AccessibilityData30
    command?: Command17
  }
  
   interface Text23 {
    simpleText?: string
  }
  
   interface Accessibility28 {
    label?: string
  }
  
   interface AccessibilityData30 {
    accessibilityData?: AccessibilityData31
  }
  
   interface AccessibilityData31 {
    label?: string
  }
  
   interface Command17 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata49
    getSurveyCommand?: GetSurveyCommand
  }
  
   interface CommandMetadata49 {
    webCommandMetadata?: WebCommandMetadata49
  }
  
   interface WebCommandMetadata49 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface GetSurveyCommand {
    endpoint?: Endpoint
    action?: string
  }
  
   interface Endpoint {
    watch?: Watch
  }
  
   interface Watch {
    hack?: boolean
  }
  
   interface NextButton {
    buttonRenderer?: ButtonRenderer15
  }
  
   interface ButtonRenderer15 {
    style?: string
    size?: string
    isDisabled?: boolean
    navigationEndpoint?: NavigationEndpoint19
    accessibility?: Accessibility29
    trackingParams?: string
    accessibilityData?: AccessibilityData32
  }
  
   interface NavigationEndpoint19 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata50
    watchEndpoint?: WatchEndpoint8
  }
  
   interface CommandMetadata50 {
    webCommandMetadata?: WebCommandMetadata50
  }
  
   interface WebCommandMetadata50 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface WatchEndpoint8 {
    videoId?: string
    watchEndpointSupportedOnesieConfig?: WatchEndpointSupportedOnesieConfig7
  }
  
   interface WatchEndpointSupportedOnesieConfig7 {
    html5PlaybackOnesieConfig?: Html5PlaybackOnesieConfig7
  }
  
   interface Html5PlaybackOnesieConfig7 {
    commonConfig?: CommonConfig7
  }
  
   interface CommonConfig7 {
    url?: string
  }
  
   interface Accessibility29 {
    label?: string
  }
  
   interface AccessibilityData32 {
    accessibilityData?: AccessibilityData33
  }
  
   interface AccessibilityData33 {
    label?: string
  }
  
   interface CloseButton {
    buttonRenderer?: ButtonRenderer16
  }
  
   interface ButtonRenderer16 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon12
    accessibility?: Accessibility30
    trackingParams?: string
  }
  
   interface Icon12 {
    iconType?: string
  }
  
   interface Accessibility30 {
    label?: string
  }
  
   interface ThumbnailOverlay3 {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer3
  }
  
   interface ThumbnailOverlayTimeStatusRenderer3 {
    text?: Text24
    style?: string
  }
  
   interface Text24 {
    accessibility?: Accessibility31
    simpleText?: string
  }
  
   interface Accessibility31 {
    accessibilityData?: AccessibilityData34
  }
  
   interface AccessibilityData34 {
    label?: string
  }
  
   interface PublishedTimeText3 {
    simpleText?: string
  }
  
   interface ShortViewCountText3 {
    accessibility?: Accessibility32
    simpleText?: string
  }
  
   interface Accessibility32 {
    accessibilityData?: AccessibilityData35
  }
  
   interface AccessibilityData35 {
    label?: string
  }
  
   interface ShareButton {
    buttonRenderer?: ButtonRenderer17
  }
  
   interface ButtonRenderer17 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon13
    navigationEndpoint?: NavigationEndpoint20
    tooltip?: string
    trackingParams?: string
  }
  
   interface Icon13 {
    iconType?: string
  }
  
   interface NavigationEndpoint20 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata51
    shareEntityServiceEndpoint?: ShareEntityServiceEndpoint3
  }
  
   interface CommandMetadata51 {
    webCommandMetadata?: WebCommandMetadata51
  }
  
   interface WebCommandMetadata51 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ShareEntityServiceEndpoint3 {
    serializedShareEntity?: string
    commands?: Command18[]
  }
  
   interface Command18 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction8
  }
  
   interface OpenPopupAction8 {
    popup?: Popup8
    popupType?: string
    beReused?: boolean
  }
  
   interface Popup8 {
    unifiedSharePanelRenderer?: UnifiedSharePanelRenderer3
  }
  
   interface UnifiedSharePanelRenderer3 {
    trackingParams?: string
    showLoadingSpinner?: boolean
  }
  
   interface AddToMenu {
    menuRenderer?: MenuRenderer5
  }
  
   interface MenuRenderer5 {
    trackingParams?: string
  }
  
   interface VideoDetails {
    playerOverlayVideoDetailsRenderer?: PlayerOverlayVideoDetailsRenderer
  }
  
   interface PlayerOverlayVideoDetailsRenderer {
    title?: Title13
    subtitle?: Subtitle
  }
  
   interface Title13 {
    simpleText?: string
  }
  
   interface Subtitle {
    runs?: Run40[]
  }
  
   interface Run40 {
    text?: string
  }
  
   interface AutonavToggle {
    autoplaySwitchButtonRenderer?: AutoplaySwitchButtonRenderer
  }
  
   interface AutoplaySwitchButtonRenderer {
    onEnabledCommand?: OnEnabledCommand
    onDisabledCommand?: OnDisabledCommand
    enabledAccessibilityData?: EnabledAccessibilityData
    disabledAccessibilityData?: DisabledAccessibilityData
    trackingParams?: string
    enabled?: boolean
  }
  
   interface OnEnabledCommand {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata52
    setSettingEndpoint?: SetSettingEndpoint
  }
  
   interface CommandMetadata52 {
    webCommandMetadata?: WebCommandMetadata52
  }
  
   interface WebCommandMetadata52 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SetSettingEndpoint {
    settingItemId?: string
    boolValue?: boolean
    settingItemIdForClient?: string
  }
  
   interface OnDisabledCommand {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata53
    setSettingEndpoint?: SetSettingEndpoint2
  }
  
   interface CommandMetadata53 {
    webCommandMetadata?: WebCommandMetadata53
  }
  
   interface WebCommandMetadata53 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SetSettingEndpoint2 {
    settingItemId?: string
    boolValue?: boolean
    settingItemIdForClient?: string
  }
  
   interface EnabledAccessibilityData {
    accessibilityData?: AccessibilityData36
  }
  
   interface AccessibilityData36 {
    label?: string
  }
  
   interface DisabledAccessibilityData {
    accessibilityData?: AccessibilityData37
  }
  
   interface AccessibilityData37 {
    label?: string
  }
  
   interface DecoratedPlayerBarRenderer {
    decoratedPlayerBarRenderer?: DecoratedPlayerBarRenderer2
  }
  
   interface DecoratedPlayerBarRenderer2 {
    playerBar?: PlayerBar
  }
  
   interface PlayerBar {
    multiMarkersPlayerBarRenderer?: MultiMarkersPlayerBarRenderer
  }
  
   interface MultiMarkersPlayerBarRenderer {
    visibleOnLoad?: VisibleOnLoad
    trackingParams?: string
  }
  
   interface VisibleOnLoad {
    key?: string
  }
  
   interface SpeedmasterUserEdu {
    speedmasterEduViewModel?: SpeedmasterEduViewModel
  }
  
   interface SpeedmasterEduViewModel {
    bodyText?: BodyText
  }
  
   interface BodyText {
    content?: string
  }
  
   interface OnResponseReceivedEndpoint {
    clickTrackingParams?: string
    loadMarkersCommand?: LoadMarkersCommand
  }
  
   interface LoadMarkersCommand {
    visibleOnLoadKeys?: string[]
    entityKeys?: string[]
  }
  
   interface EngagementPanel {
    engagementPanelSectionListRenderer?: EngagementPanelSectionListRenderer
  }
  
   interface EngagementPanelSectionListRenderer {
    panelIdentifier?: string
    header?: Header2
    content?: Content9
    veType?: number
    targetId?: string
    visibility?: string
    loggingDirectives?: LoggingDirectives8
    onShowCommands?: OnShowCommand[]
  }
  
   interface Header2 {
    engagementPanelTitleHeaderRenderer?: EngagementPanelTitleHeaderRenderer
  }
  
   interface EngagementPanelTitleHeaderRenderer {
    title?: Title14
    menu?: Menu2
    visibilityButton?: VisibilityButton
    trackingParams?: string
    contextualInfo?: ContextualInfo
  }
  
   interface Title14 {
    runs?: Run41[]
    simpleText?: string
    accessibility?: Accessibility33
  }
  
   interface Run41 {
    text?: string
  }
  
   interface Accessibility33 {
    accessibilityData?: AccessibilityData38
  }
  
   interface AccessibilityData38 {
    label?: string
  }
  
   interface Menu2 {
    menuRenderer?: MenuRenderer6
    sortFilterSubMenuRenderer?: SortFilterSubMenuRenderer2
  }
  
   interface MenuRenderer6 {
    items?: Item7[]
    trackingParams?: string
    accessibility?: Accessibility34
  }
  
   interface Item7 {
    menuServiceItemRenderer?: MenuServiceItemRenderer5
  }
  
   interface MenuServiceItemRenderer5 {
    text?: Text25
    serviceEndpoint?: ServiceEndpoint9
    trackingParams?: string
  }
  
   interface Text25 {
    runs?: Run42[]
  }
  
   interface Run42 {
    text?: string
  }
  
   interface ServiceEndpoint9 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata54
    signalServiceEndpoint?: SignalServiceEndpoint6
  }
  
   interface CommandMetadata54 {
    webCommandMetadata?: WebCommandMetadata54
  }
  
   interface WebCommandMetadata54 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint6 {
    signal?: string
    actions?: Action8[]
  }
  
   interface Action8 {
    clickTrackingParams?: string
    signalAction?: SignalAction2
  }
  
   interface SignalAction2 {
    signal?: string
  }
  
   interface Accessibility34 {
    accessibilityData?: AccessibilityData39
  }
  
   interface AccessibilityData39 {
    label?: string
  }
  
   interface SortFilterSubMenuRenderer2 {
    subMenuItems?: SubMenuItem2[]
    icon?: Icon14
    accessibility?: Accessibility35
    trackingParams?: string
  }
  
   interface SubMenuItem2 {
    title?: string
    selected?: boolean
    serviceEndpoint?: ServiceEndpoint10
    trackingParams?: string
  }
  
   interface ServiceEndpoint10 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata55
    continuationCommand?: ContinuationCommand2
  }
  
   interface CommandMetadata55 {
    webCommandMetadata?: WebCommandMetadata55
  }
  
   interface WebCommandMetadata55 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand2 {
    token?: string
    request?: string
    command?: Command19
  }
  
   interface Command19 {
    clickTrackingParams?: string
    showReloadUiCommand?: ShowReloadUiCommand
  }
  
   interface ShowReloadUiCommand {
    targetId?: string
  }
  
   interface Icon14 {
    iconType?: string
  }
  
   interface Accessibility35 {
    accessibilityData?: AccessibilityData40
  }
  
   interface AccessibilityData40 {
    label?: string
  }
  
   interface VisibilityButton {
    buttonRenderer?: ButtonRenderer18
  }
  
   interface ButtonRenderer18 {
    icon?: Icon15
    accessibility?: Accessibility36
    trackingParams?: string
    accessibilityData?: AccessibilityData41
    command?: Command20
    style?: string
    size?: string
    isDisabled?: boolean
  }
  
   interface Icon15 {
    iconType?: string
  }
  
   interface Accessibility36 {
    label?: string
  }
  
   interface AccessibilityData41 {
    accessibilityData?: AccessibilityData42
  }
  
   interface AccessibilityData42 {
    label?: string
  }
  
   interface Command20 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction4
    commandExecutorCommand?: CommandExecutorCommand5
    hideEngagementPanelEndpoint?: HideEngagementPanelEndpoint
  }
  
   interface ChangeEngagementPanelVisibilityAction4 {
    targetId?: string
    visibility?: string
  }
  
   interface CommandExecutorCommand5 {
    commands?: Command21[]
  }
  
   interface Command21 {
    clickTrackingParams?: string
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction5
    updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand
  }
  
   interface ChangeEngagementPanelVisibilityAction5 {
    targetId?: string
    visibility?: string
  }
  
   interface UpdateToggleButtonStateCommand {
    toggled?: boolean
    buttonId?: string
  }
  
   interface HideEngagementPanelEndpoint {
    panelIdentifier?: string
  }
  
   interface ContextualInfo {
    runs?: Run43[]
  }
  
   interface Run43 {
    text?: string
  }
  
   interface Content9 {
    sectionListRenderer?: SectionListRenderer
    adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer
    productListRenderer?: ProductListRenderer
    structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer
    continuationItemRenderer?: ContinuationItemRenderer3
  }
  
   interface SectionListRenderer {
    contents?: Content10[]
    trackingParams?: string
  }
  
   interface Content10 {
    itemSectionRenderer?: ItemSectionRenderer2
  }
  
   interface ItemSectionRenderer2 {
    contents?: Content11[]
    trackingParams?: string
    sectionIdentifier?: string
    targetId?: string
  }
  
   interface Content11 {
    continuationItemRenderer?: ContinuationItemRenderer2
  }
  
   interface ContinuationItemRenderer2 {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint2
  }
  
   interface ContinuationEndpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata56
    continuationCommand?: ContinuationCommand3
  }
  
   interface CommandMetadata56 {
    webCommandMetadata?: WebCommandMetadata56
  }
  
   interface WebCommandMetadata56 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface ContinuationCommand3 {
    token?: string
    request?: string
  }
  
   interface AdsEngagementPanelContentRenderer {
    hack?: boolean
  }
  
   interface ProductListRenderer {
    contents?: Content12[]
    trackingParams?: string
  }
  
   interface Content12 {
    productListHeaderRenderer?: ProductListHeaderRenderer
    productListItemRenderer?: ProductListItemRenderer
  }
  
   interface ProductListHeaderRenderer {
    title?: Title15
    trackingParams?: string
    suppressPaddingDisclaimer?: boolean
  }
  
   interface Title15 {
    runs?: Run44[]
  }
  
   interface Run44 {
    text?: string
    navigationEndpoint?: NavigationEndpoint21
  }
  
   interface NavigationEndpoint21 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata57
    openPopupAction?: OpenPopupAction9
  }
  
   interface CommandMetadata57 {
    webCommandMetadata?: WebCommandMetadata57
  }
  
   interface WebCommandMetadata57 {
    url?: string
  }
  
   interface OpenPopupAction9 {
    popup?: Popup9
    popupType?: string
  }
  
   interface Popup9 {
    menuPopupRenderer?: MenuPopupRenderer2
  }
  
   interface MenuPopupRenderer2 {
    items?: Item8[]
    menuPopupAccessibility?: MenuPopupAccessibility
  }
  
   interface Item8 {
    menuNavigationItemRenderer?: MenuNavigationItemRenderer4
    menuServiceItemRenderer?: MenuServiceItemRenderer6
  }
  
   interface MenuNavigationItemRenderer4 {
    text?: Text26
    icon?: Icon16
    navigationEndpoint?: NavigationEndpoint22
    trackingParams?: string
  }
  
   interface Text26 {
    accessibility?: Accessibility37
    simpleText?: string
  }
  
   interface Accessibility37 {
    accessibilityData?: AccessibilityData43
  }
  
   interface AccessibilityData43 {
    label?: string
  }
  
   interface Icon16 {
    iconType?: string
  }
  
   interface NavigationEndpoint22 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction10
  }
  
   interface OpenPopupAction10 {
    popup?: Popup10
    popupType?: string
  }
  
   interface Popup10 {
    fancyDismissibleDialogRenderer?: FancyDismissibleDialogRenderer2
  }
  
   interface FancyDismissibleDialogRenderer2 {
    dialogMessage?: DialogMessage4
    confirmLabel?: ConfirmLabel2
    trackingParams?: string
  }
  
   interface DialogMessage4 {
    runs?: Run45[]
  }
  
   interface Run45 {
    text?: string
    textColor?: number
    navigationEndpoint?: NavigationEndpoint23
  }
  
   interface NavigationEndpoint23 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata58
    urlEndpoint?: UrlEndpoint4
  }
  
   interface CommandMetadata58 {
    webCommandMetadata?: WebCommandMetadata58
  }
  
   interface WebCommandMetadata58 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint4 {
    url?: string
    target?: string
  }
  
   interface ConfirmLabel2 {
    simpleText?: string
  }
  
   interface MenuServiceItemRenderer6 {
    text?: Text27
    icon?: Icon17
    serviceEndpoint?: ServiceEndpoint11
    trackingParams?: string
    loggingDirectives?: LoggingDirectives3
  }
  
   interface Text27 {
    accessibility?: Accessibility38
    simpleText?: string
  }
  
   interface Accessibility38 {
    accessibilityData?: AccessibilityData44
  }
  
   interface AccessibilityData44 {
    label?: string
  }
  
   interface Icon17 {
    iconType?: string
  }
  
   interface ServiceEndpoint11 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata59
    signInEndpoint?: SignInEndpoint9
  }
  
   interface CommandMetadata59 {
    webCommandMetadata?: WebCommandMetadata59
  }
  
   interface WebCommandMetadata59 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint9 {
    nextEndpoint?: NextEndpoint7
  }
  
   interface NextEndpoint7 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata60
    getReportFormEndpoint?: GetReportFormEndpoint2
  }
  
   interface CommandMetadata60 {
    webCommandMetadata?: WebCommandMetadata60
  }
  
   interface WebCommandMetadata60 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface GetReportFormEndpoint2 {
    params?: string
  }
  
   interface LoggingDirectives3 {
    trackingParams?: string
    visibility?: Visibility2
    gestures?: Gestures2
  }
  
   interface Visibility2 {
    types?: string
  }
  
   interface Gestures2 {
    types?: string
  }
  
   interface MenuPopupAccessibility {
    label?: string
  }
  
   interface ProductListItemRenderer {
    title?: Title16
    accessibilityTitle?: string
    thumbnail?: Thumbnail12
    price?: string
    onClickCommand?: OnClickCommand
    trackingParams?: string
    merchantName?: string
    stayInApp?: boolean
    viewButton?: ViewButton
    loggingDirectives?: LoggingDirectives4
  }
  
   interface Title16 {
    simpleText?: string
  }
  
   interface Thumbnail12 {
    thumbnails?: Thumbnail13[]
  }
  
   interface Thumbnail13 {
    url?: string
    width?: number
    height?: number
  }
  
   interface OnClickCommand {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand6
  }
  
   interface CommandExecutorCommand6 {
    commands?: Command22[]
  }
  
   interface Command22 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata61
    feedbackEndpoint?: FeedbackEndpoint2
    urlEndpoint?: UrlEndpoint5
  }
  
   interface CommandMetadata61 {
    webCommandMetadata?: WebCommandMetadata61
  }
  
   interface WebCommandMetadata61 {
    sendPost?: boolean
    apiUrl?: string
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface FeedbackEndpoint2 {
    feedbackToken?: string
  }
  
   interface UrlEndpoint5 {
    url?: string
    target?: string
  }
  
   interface ViewButton {
    buttonRenderer?: ButtonRenderer19
  }
  
   interface ButtonRenderer19 {
    style?: string
    size?: string
    text?: Text28
    icon?: Icon18
    trackingParams?: string
    iconPosition?: string
  }
  
   interface Text28 {
    simpleText?: string
  }
  
   interface Icon18 {
    iconType?: string
  }
  
   interface LoggingDirectives4 {
    trackingParams?: string
    visibility?: Visibility3
    gestures?: Gestures3
  }
  
   interface Visibility3 {
    types?: string
  }
  
   interface Gestures3 {
    types?: string
  }
  
   interface StructuredDescriptionContentRenderer {
    items?: Item9[]
  }
  
   interface Item9 {
    videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer
    expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer
    horizontalCardListRenderer?: HorizontalCardListRenderer
    reelShelfRenderer?: ReelShelfRenderer
    videoDescriptionTranscriptSectionRenderer?: VideoDescriptionTranscriptSectionRenderer
    videoDescriptionInfocardsSectionRenderer?: VideoDescriptionInfocardsSectionRenderer
  }
  
   interface VideoDescriptionHeaderRenderer {
    title?: Title17
    channel?: Channel
    views?: Views
    publishDate?: PublishDate
    channelNavigationEndpoint?: ChannelNavigationEndpoint
    channelThumbnail?: ChannelThumbnail2
  }
  
   interface Title17 {
    runs?: Run46[]
  }
  
   interface Run46 {
    text?: string
  }
  
   interface Channel {
    simpleText?: string
  }
  
   interface Views {
    simpleText?: string
  }
  
   interface PublishDate {
    simpleText?: string
  }
  
   interface ChannelNavigationEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata62
    browseEndpoint?: BrowseEndpoint7
  }
  
   interface CommandMetadata62 {
    webCommandMetadata?: WebCommandMetadata62
  }
  
   interface WebCommandMetadata62 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint7 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface ChannelThumbnail2 {
    thumbnails?: Thumbnail14[]
  }
  
   interface Thumbnail14 {
    url?: string
  }
  
   interface ExpandableVideoDescriptionBodyRenderer {
    showMoreText?: ShowMoreText2
    showLessText?: ShowLessText2
    attributedDescriptionBodyText?: AttributedDescriptionBodyText
    headerRuns?: HeaderRun2[]
  }
  
   interface ShowMoreText2 {
    accessibility?: Accessibility39
    simpleText?: string
  }
  
   interface Accessibility39 {
    accessibilityData?: AccessibilityData45
  }
  
   interface AccessibilityData45 {
    label?: string
  }
  
   interface ShowLessText2 {
    simpleText?: string
  }
  
   interface AttributedDescriptionBodyText {
    content?: string
    commandRuns?: CommandRun2[]
    styleRuns?: StyleRun2[]
    attachmentRuns?: AttachmentRun2[]
    decorationRuns?: DecorationRun2[]
  }
  
   interface CommandRun2 {
    startIndex?: number
    length?: number
    onTap?: OnTap9
    loggingDirectives?: LoggingDirectives5
    onTapOptions?: OnTapOptions2
  }
  
   interface OnTap9 {
    innertubeCommand?: InnertubeCommand8
  }
  
   interface InnertubeCommand8 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata63
    urlEndpoint?: UrlEndpoint6
  }
  
   interface CommandMetadata63 {
    webCommandMetadata?: WebCommandMetadata63
  }
  
   interface WebCommandMetadata63 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint6 {
    url?: string
    target?: string
    nofollow?: boolean
  }
  
   interface LoggingDirectives5 {
    trackingParams?: string
    enableDisplayloggerExperiment?: boolean
  }
  
   interface OnTapOptions2 {
    accessibilityInfo?: AccessibilityInfo2
  }
  
   interface AccessibilityInfo2 {
    accessibilityLabel?: string
  }
  
   interface StyleRun2 {
    startIndex?: number
    length?: number
    styleRunExtensions?: StyleRunExtensions2
    fontFamilyName?: string
  }
  
   interface StyleRunExtensions2 {
    styleRunColorMapExtension?: StyleRunColorMapExtension2
  }
  
   interface StyleRunColorMapExtension2 {
    colorMap?: ColorMap3[]
  }
  
   interface ColorMap3 {
    key?: string
    value?: number
  }
  
   interface AttachmentRun2 {
    startIndex?: number
    length?: number
    element?: Element2
    alignment?: string
  }
  
   interface Element2 {
    type?: Type2
    properties?: Properties2
  }
  
   interface Type2 {
    imageType?: ImageType2
  }
  
   interface ImageType2 {
    image?: Image2
  }
  
   interface Image2 {
    sources?: Source2[]
  }
  
   interface Source2 {
    url?: string
  }
  
   interface Properties2 {
    layoutProperties?: LayoutProperties2
  }
  
   interface LayoutProperties2 {
    height?: Height2
    width?: Width2
    margin?: Margin2
  }
  
   interface Height2 {
    value?: number
    unit?: string
  }
  
   interface Width2 {
    value?: number
    unit?: string
  }
  
   interface Margin2 {
    top?: Top2
  }
  
   interface Top2 {
    value?: number
    unit?: string
  }
  
   interface DecorationRun2 {
    textDecorator?: TextDecorator2
  }
  
   interface TextDecorator2 {
    highlightTextDecorator?: HighlightTextDecorator2
  }
  
   interface HighlightTextDecorator2 {
    startIndex?: number
    length?: number
    backgroundCornerRadius?: number
    bottomPadding?: number
    highlightTextDecoratorExtensions?: HighlightTextDecoratorExtensions2
  }
  
   interface HighlightTextDecoratorExtensions2 {
    highlightTextDecoratorColorMapExtension?: HighlightTextDecoratorColorMapExtension2
  }
  
   interface HighlightTextDecoratorColorMapExtension2 {
    colorMap?: ColorMap4[]
  }
  
   interface ColorMap4 {
    key?: string
    value?: number
  }
  
   interface HeaderRun2 {
    startIndex?: number
    length?: number
    headerMapping?: string
  }
  
   interface HorizontalCardListRenderer {
    cards?: Card[]
    trackingParams?: string
    header?: Header3
    style?: Style
    footerButton?: FooterButton
  }
  
   interface Card {
    videoAttributeViewModel?: VideoAttributeViewModel
  }
  
   interface VideoAttributeViewModel {
    image?: Image3
    imageStyle?: string
    title?: string
    subtitle?: string
    secondarySubtitle?: SecondarySubtitle
    orientation?: string
    sizingRule?: string
    overflowMenuOnTap?: OverflowMenuOnTap
    overflowMenuA11yLabel?: string
    loggingDirectives?: LoggingDirectives6
  }
  
   interface Image3 {
    sources?: Source3[]
  }
  
   interface Source3 {
    url?: string
  }
  
   interface SecondarySubtitle {
    content?: string
  }
  
   interface OverflowMenuOnTap {
    innertubeCommand?: InnertubeCommand9
  }
  
   interface InnertubeCommand9 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata64
    confirmDialogEndpoint?: ConfirmDialogEndpoint
  }
  
   interface CommandMetadata64 {
    webCommandMetadata?: WebCommandMetadata64
  }
  
   interface WebCommandMetadata64 {
    ignoreNavigation?: boolean
  }
  
   interface ConfirmDialogEndpoint {
    content?: Content13
  }
  
   interface Content13 {
    confirmDialogRenderer?: ConfirmDialogRenderer3
  }
  
   interface ConfirmDialogRenderer3 {
    title?: Title18
    trackingParams?: string
    dialogMessages?: DialogMessage5[]
    confirmButton?: ConfirmButton3
    primaryIsCancel?: boolean
  }
  
   interface Title18 {
    runs?: Run47[]
  }
  
   interface Run47 {
    text?: string
  }
  
   interface DialogMessage5 {
    runs?: Run48[]
  }
  
   interface Run48 {
    text?: string
    bold?: boolean
  }
  
   interface ConfirmButton3 {
    buttonRenderer?: ButtonRenderer20
  }
  
   interface ButtonRenderer20 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text29
    trackingParams?: string
    accessibilityData?: AccessibilityData46
  }
  
   interface Text29 {
    runs?: Run49[]
  }
  
   interface Run49 {
    text?: string
  }
  
   interface AccessibilityData46 {
    accessibilityData?: AccessibilityData47
  }
  
   interface AccessibilityData47 {
    label?: string
  }
  
   interface LoggingDirectives6 {
    trackingParams?: string
    visibility?: Visibility4
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility4 {
    types?: string
  }
  
   interface Header3 {
    richListHeaderRenderer?: RichListHeaderRenderer
  }
  
   interface RichListHeaderRenderer {
    title?: Title19
    subtitle?: Subtitle2
    trackingParams?: string
  }
  
   interface Title19 {
    simpleText?: string
  }
  
   interface Subtitle2 {
    simpleText?: string
  }
  
   interface Style {
    type?: string
  }
  
   interface FooterButton {
    buttonViewModel?: ButtonViewModel7
  }
  
   interface ButtonViewModel7 {
    iconName?: string
    onTap?: OnTap10
    style?: string
    trackingParams?: string
    type?: string
    buttonSize?: string
    titleFormatted?: TitleFormatted
  }
  
   interface OnTap10 {
    innertubeCommand?: InnertubeCommand10
  }
  
   interface InnertubeCommand10 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata65
    browseEndpoint?: BrowseEndpoint8
  }
  
   interface CommandMetadata65 {
    webCommandMetadata?: WebCommandMetadata65
  }
  
   interface WebCommandMetadata65 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint8 {
    browseId?: string
  }
  
   interface TitleFormatted {
    content?: string
  }
  
   interface ReelShelfRenderer {
    title?: Title20
    items?: Item10[]
    trackingParams?: string
  }
  
   interface Title20 {
    runs?: Run50[]
  }
  
   interface Run50 {
    text?: string
  }
  
   interface Item10 {
    shortsLockupViewModel?: ShortsLockupViewModel
  }
  
   interface ShortsLockupViewModel {
    entityId?: string
    accessibilityText?: string
    thumbnail?: Thumbnail15
    onTap?: OnTap11
    indexInCollection?: number
    overlayMetadata?: OverlayMetadata
    loggingDirectives?: LoggingDirectives7
  }
  
   interface Thumbnail15 {
    sources?: Source4[]
  }
  
   interface Source4 {
    url?: string
    width?: number
    height?: number
  }
  
   interface OnTap11 {
    innertubeCommand?: InnertubeCommand11
  }
  
   interface InnertubeCommand11 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata66
    reelWatchEndpoint?: ReelWatchEndpoint
  }
  
   interface CommandMetadata66 {
    webCommandMetadata?: WebCommandMetadata66
  }
  
   interface WebCommandMetadata66 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface ReelWatchEndpoint {
    videoId?: string
    playerParams?: string
    thumbnail?: Thumbnail16
    overlay?: Overlay
    params?: string
    sequenceProvider?: string
    sequenceParams?: string
    loggingContext?: LoggingContext
    ustreamerConfig?: string
  }
  
   interface Thumbnail16 {
    thumbnails?: Thumbnail17[]
    isOriginalAspectRatio?: boolean
  }
  
   interface Thumbnail17 {
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
  
   interface OverlayMetadata {
    secondaryText?: SecondaryText
  }
  
   interface SecondaryText {
    content?: string
  }
  
   interface LoggingDirectives7 {
    trackingParams?: string
    visibility?: Visibility5
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility5 {
    types?: string
  }
  
   interface VideoDescriptionTranscriptSectionRenderer {
    sectionTitle?: SectionTitle
    subHeaderText?: SubHeaderText
    primaryButton?: PrimaryButton
    trackingParams?: string
  }
  
   interface SectionTitle {
    runs?: Run51[]
  }
  
   interface Run51 {
    text?: string
  }
  
   interface SubHeaderText {
    runs?: Run52[]
  }
  
   interface Run52 {
    text?: string
  }
  
   interface PrimaryButton {
    buttonRenderer?: ButtonRenderer21
  }
  
   interface ButtonRenderer21 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text30
    trackingParams?: string
    command?: Command23
  }
  
   interface Text30 {
    runs?: Run53[]
  }
  
   interface Run53 {
    text?: string
  }
  
   interface Command23 {
    clickTrackingParams?: string
    commandExecutorCommand?: CommandExecutorCommand7
  }
  
   interface CommandExecutorCommand7 {
    commands?: Command24[]
  }
  
   interface Command24 {
    clickTrackingParams?: string
    showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand3
  }
  
   interface ShowEngagementPanelEndpoint {
    panelIdentifier?: string
    sourcePanelIdentifier?: string
  }
  
   interface ScrollToEngagementPanelCommand3 {
    targetId?: string
  }
  
   interface VideoDescriptionInfocardsSectionRenderer {
    sectionTitle?: SectionTitle2
    creatorVideosButton?: CreatorVideosButton
    creatorAboutButton?: CreatorAboutButton
    infocards?: Infocard[]
    sectionSubtitle?: SectionSubtitle
    channelAvatar?: ChannelAvatar
    channelEndpoint?: ChannelEndpoint
    creatorCustomUrlButtons?: CreatorCustomUrlButton[]
    trackingParams?: string
  }
  
   interface SectionTitle2 {
    simpleText?: string
  }
  
   interface CreatorVideosButton {
    buttonRenderer?: ButtonRenderer22
  }
  
   interface ButtonRenderer22 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text31
    icon?: Icon19
    trackingParams?: string
    command?: Command25
  }
  
   interface Text31 {
    simpleText?: string
  }
  
   interface Icon19 {
    iconType?: string
  }
  
   interface Command25 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata67
    browseEndpoint?: BrowseEndpoint9
  }
  
   interface CommandMetadata67 {
    webCommandMetadata?: WebCommandMetadata67
  }
  
   interface WebCommandMetadata67 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint9 {
    browseId?: string
    params?: string
  }
  
   interface CreatorAboutButton {
    buttonRenderer?: ButtonRenderer23
  }
  
   interface ButtonRenderer23 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text32
    icon?: Icon20
    trackingParams?: string
    command?: Command26
  }
  
   interface Text32 {
    simpleText?: string
  }
  
   interface Icon20 {
    iconType?: string
  }
  
   interface Command26 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata68
    browseEndpoint?: BrowseEndpoint10
  }
  
   interface CommandMetadata68 {
    webCommandMetadata?: WebCommandMetadata68
  }
  
   interface WebCommandMetadata68 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint10 {
    browseId?: string
    params?: string
  }
  
   interface Infocard {
    compactInfocardRenderer?: CompactInfocardRenderer
  }
  
   interface CompactInfocardRenderer {
    content?: Content14
    trackingParams?: string
  }
  
   interface Content14 {
    mediaLockupRenderer?: MediaLockupRenderer
  }
  
   interface MediaLockupRenderer {
    title?: Title21
    subtitle?: Subtitle3
    thumbnailDetails?: ThumbnailDetails
    endpoint?: Endpoint2
    trackingParams?: string
    enableSubtitleLaunchIcon?: boolean
    uiTweaks?: UiTweaks
    maxLinesTitle?: number
    maxLinesSubtitle?: number
    disableEndpoint?: boolean
  }
  
   interface Title21 {
    simpleText?: string
  }
  
   interface Subtitle3 {
    simpleText?: string
  }
  
   interface ThumbnailDetails {
    thumbnails?: Thumbnail18[]
  }
  
   interface Thumbnail18 {
    url?: string
    width?: number
    height?: number
  }
  
   interface Endpoint2 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata69
    urlEndpoint?: UrlEndpoint7
  }
  
   interface CommandMetadata69 {
    webCommandMetadata?: WebCommandMetadata69
  }
  
   interface WebCommandMetadata69 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint7 {
    url?: string
    target?: string
  }
  
   interface UiTweaks {
    useZeroPadding?: boolean
    thumbnailWidth?: number
    thumbnailHeight?: number
  }
  
   interface SectionSubtitle {
    accessibility?: Accessibility40
    simpleText?: string
  }
  
   interface Accessibility40 {
    accessibilityData?: AccessibilityData48
  }
  
   interface AccessibilityData48 {
    label?: string
  }
  
   interface ChannelAvatar {
    thumbnails?: Thumbnail19[]
  }
  
   interface Thumbnail19 {
    url?: string
  }
  
   interface ChannelEndpoint {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata70
    browseEndpoint?: BrowseEndpoint11
  }
  
   interface CommandMetadata70 {
    webCommandMetadata?: WebCommandMetadata70
  }
  
   interface WebCommandMetadata70 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint11 {
    browseId?: string
    canonicalBaseUrl?: string
  }
  
   interface CreatorCustomUrlButton {
    buttonViewModel?: ButtonViewModel8
  }
  
   interface ButtonViewModel8 {
    title?: string
    onTap?: OnTap12
    style?: string
    trackingParams?: string
    type?: string
    buttonSize?: string
    iconImage?: IconImage
  }
  
   interface OnTap12 {
    innertubeCommand?: InnertubeCommand12
  }
  
   interface InnertubeCommand12 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata71
    urlEndpoint?: UrlEndpoint8
  }
  
   interface CommandMetadata71 {
    webCommandMetadata?: WebCommandMetadata71
  }
  
   interface WebCommandMetadata71 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface UrlEndpoint8 {
    url?: string
    target?: string
  }
  
   interface IconImage {
    url?: string
    width?: number
    height?: number
  }
  
   interface ContinuationItemRenderer3 {
    trigger?: string
    continuationEndpoint?: ContinuationEndpoint3
  }
  
   interface ContinuationEndpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata72
    getTranscriptEndpoint?: GetTranscriptEndpoint
  }
  
   interface CommandMetadata72 {
    webCommandMetadata?: WebCommandMetadata72
  }
  
   interface WebCommandMetadata72 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface GetTranscriptEndpoint {
    params?: string
  }
  
   interface LoggingDirectives8 {
    trackingParams?: string
    visibility?: Visibility6
    enableDisplayloggerExperiment?: boolean
  }
  
   interface Visibility6 {
    types?: string
  }
  
   interface OnShowCommand {
    clickTrackingParams?: string
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand4
  }
  
   interface ScrollToEngagementPanelCommand4 {
    targetId?: string
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
    iconImage?: IconImage2
    tooltipText?: TooltipText
    endpoint?: Endpoint3
    trackingParams?: string
    overrideEntityKey?: string
  }
  
   interface IconImage2 {
    iconType?: string
  }
  
   interface TooltipText {
    runs?: Run54[]
  }
  
   interface Run54 {
    text?: string
  }
  
   interface Endpoint3 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata73
    browseEndpoint?: BrowseEndpoint12
  }
  
   interface CommandMetadata73 {
    webCommandMetadata?: WebCommandMetadata73
  }
  
   interface WebCommandMetadata73 {
    url?: string
    webPageType?: string
    rootVe?: number
    apiUrl?: string
  }
  
   interface BrowseEndpoint12 {
    browseId?: string
  }
  
   interface Searchbox {
    fusionSearchboxRenderer?: FusionSearchboxRenderer
  }
  
   interface FusionSearchboxRenderer {
    icon?: Icon21
    placeholderText?: PlaceholderText
    config?: Config
    trackingParams?: string
    searchEndpoint?: SearchEndpoint
    clearButton?: ClearButton
  }
  
   interface Icon21 {
    iconType?: string
  }
  
   interface PlaceholderText {
    runs?: Run55[]
  }
  
   interface Run55 {
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
    commandMetadata?: CommandMetadata74
    searchEndpoint?: SearchEndpoint2
  }
  
   interface CommandMetadata74 {
    webCommandMetadata?: WebCommandMetadata74
  }
  
   interface WebCommandMetadata74 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SearchEndpoint2 {
    query?: string
  }
  
   interface ClearButton {
    buttonRenderer?: ButtonRenderer24
  }
  
   interface ButtonRenderer24 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon22
    trackingParams?: string
    accessibilityData?: AccessibilityData49
  }
  
   interface Icon22 {
    iconType?: string
  }
  
   interface AccessibilityData49 {
    accessibilityData?: AccessibilityData50
  }
  
   interface AccessibilityData50 {
    label?: string
  }
  
   interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
    buttonRenderer?: ButtonRenderer25
  }
  
   interface TopbarMenuButtonRenderer {
    icon?: Icon23
    menuRequest?: MenuRequest
    trackingParams?: string
    accessibility?: Accessibility41
    tooltip?: string
    style?: string
  }
  
   interface Icon23 {
    iconType?: string
  }
  
   interface MenuRequest {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata75
    signalServiceEndpoint?: SignalServiceEndpoint7
  }
  
   interface CommandMetadata75 {
    webCommandMetadata?: WebCommandMetadata75
  }
  
   interface WebCommandMetadata75 {
    sendPost?: boolean
    apiUrl?: string
  }
  
   interface SignalServiceEndpoint7 {
    signal?: string
    actions?: Action9[]
  }
  
   interface Action9 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction11
  }
  
   interface OpenPopupAction11 {
    popup?: Popup11
    popupType?: string
    beReused?: boolean
  }
  
   interface Popup11 {
    multiPageMenuRenderer?: MultiPageMenuRenderer
  }
  
   interface MultiPageMenuRenderer {
    trackingParams?: string
    style?: string
    showLoadingSpinner?: boolean
  }
  
   interface Accessibility41 {
    accessibilityData?: AccessibilityData51
  }
  
   interface AccessibilityData51 {
    label?: string
  }
  
   interface ButtonRenderer25 {
    style?: string
    size?: string
    text?: Text33
    icon?: Icon24
    navigationEndpoint?: NavigationEndpoint24
    trackingParams?: string
    targetId?: string
  }
  
   interface Text33 {
    runs?: Run56[]
  }
  
   interface Run56 {
    text?: string
  }
  
   interface Icon24 {
    iconType?: string
  }
  
   interface NavigationEndpoint24 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata76
    signInEndpoint?: SignInEndpoint10
  }
  
   interface CommandMetadata76 {
    webCommandMetadata?: WebCommandMetadata76
  }
  
   interface WebCommandMetadata76 {
    url?: string
    webPageType?: string
    rootVe?: number
  }
  
   interface SignInEndpoint10 {
    idamTag?: string
  }
  
   interface HotkeyDialog {
    hotkeyDialogRenderer?: HotkeyDialogRenderer
  }
  
   interface HotkeyDialogRenderer {
    title?: Title22
    sections?: Section[]
    dismissButton?: DismissButton
    trackingParams?: string
  }
  
   interface Title22 {
    runs?: Run57[]
  }
  
   interface Run57 {
    text?: string
  }
  
   interface Section {
    hotkeyDialogSectionRenderer?: HotkeyDialogSectionRenderer
  }
  
   interface HotkeyDialogSectionRenderer {
    title?: Title23
    options?: Option[]
  }
  
   interface Title23 {
    runs?: Run58[]
  }
  
   interface Run58 {
    text?: string
  }
  
   interface Option {
    hotkeyDialogSectionOptionRenderer?: HotkeyDialogSectionOptionRenderer
  }
  
   interface HotkeyDialogSectionOptionRenderer {
    label?: Label2
    hotkey?: string
    hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
  }
  
   interface Label2 {
    runs?: Run59[]
  }
  
   interface Run59 {
    text?: string
  }
  
   interface HotkeyAccessibilityLabel {
    accessibilityData?: AccessibilityData52
  }
  
   interface AccessibilityData52 {
    label?: string
  }
  
   interface DismissButton {
    buttonRenderer?: ButtonRenderer26
  }
  
   interface ButtonRenderer26 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text34
    trackingParams?: string
  }
  
   interface Text34 {
    runs?: Run60[]
  }
  
   interface Run60 {
    text?: string
  }
  
   interface BackButton {
    buttonRenderer?: ButtonRenderer27
  }
  
   interface ButtonRenderer27 {
    trackingParams?: string
    command?: Command27
  }
  
   interface Command27 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata77
    signalServiceEndpoint?: SignalServiceEndpoint8
  }
  
   interface CommandMetadata77 {
    webCommandMetadata?: WebCommandMetadata77
  }
  
   interface WebCommandMetadata77 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint8 {
    signal?: string
    actions?: Action10[]
  }
  
   interface Action10 {
    clickTrackingParams?: string
    signalAction?: SignalAction3
  }
  
   interface SignalAction3 {
    signal?: string
  }
  
   interface ForwardButton {
    buttonRenderer?: ButtonRenderer28
  }
  
   interface ButtonRenderer28 {
    trackingParams?: string
    command?: Command28
  }
  
   interface Command28 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata78
    signalServiceEndpoint?: SignalServiceEndpoint9
  }
  
   interface CommandMetadata78 {
    webCommandMetadata?: WebCommandMetadata78
  }
  
   interface WebCommandMetadata78 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint9 {
    signal?: string
    actions?: Action11[]
  }
  
   interface Action11 {
    clickTrackingParams?: string
    signalAction?: SignalAction4
  }
  
   interface SignalAction4 {
    signal?: string
  }
  
   interface A11ySkipNavigationButton {
    buttonRenderer?: ButtonRenderer29
  }
  
   interface ButtonRenderer29 {
    style?: string
    size?: string
    isDisabled?: boolean
    text?: Text35
    trackingParams?: string
    command?: Command29
  }
  
   interface Text35 {
    runs?: Run61[]
  }
  
   interface Run61 {
    text?: string
  }
  
   interface Command29 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata79
    signalServiceEndpoint?: SignalServiceEndpoint10
  }
  
   interface CommandMetadata79 {
    webCommandMetadata?: WebCommandMetadata79
  }
  
   interface WebCommandMetadata79 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint10 {
    signal?: string
    actions?: Action12[]
  }
  
   interface Action12 {
    clickTrackingParams?: string
    signalAction?: SignalAction5
  }
  
   interface SignalAction5 {
    signal?: string
  }
  
   interface VoiceSearchButton {
    buttonRenderer?: ButtonRenderer30
  }
  
   interface ButtonRenderer30 {
    style?: string
    size?: string
    isDisabled?: boolean
    serviceEndpoint?: ServiceEndpoint12
    icon?: Icon26
    tooltip?: string
    trackingParams?: string
    accessibilityData?: AccessibilityData55
  }
  
   interface ServiceEndpoint12 {
    clickTrackingParams?: string
    commandMetadata?: CommandMetadata80
    signalServiceEndpoint?: SignalServiceEndpoint11
  }
  
   interface CommandMetadata80 {
    webCommandMetadata?: WebCommandMetadata80
  }
  
   interface WebCommandMetadata80 {
    sendPost?: boolean
  }
  
   interface SignalServiceEndpoint11 {
    signal?: string
    actions?: Action13[]
  }
  
   interface Action13 {
    clickTrackingParams?: string
    openPopupAction?: OpenPopupAction12
  }
  
   interface OpenPopupAction12 {
    popup?: Popup12
    popupType?: string
  }
  
   interface Popup12 {
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
    runs?: Run62[]
  }
  
   interface Run62 {
    text?: string
  }
  
   interface PromptHeader {
    runs?: Run63[]
  }
  
   interface Run63 {
    text?: string
  }
  
   interface ExampleQuery1 {
    runs?: Run64[]
  }
  
   interface Run64 {
    text?: string
  }
  
   interface ExampleQuery2 {
    runs?: Run65[]
  }
  
   interface Run65 {
    text?: string
  }
  
   interface PromptMicrophoneLabel {
    runs?: Run66[]
  }
  
   interface Run66 {
    text?: string
  }
  
   interface LoadingHeader {
    runs?: Run67[]
  }
  
   interface Run67 {
    text?: string
  }
  
   interface ConnectionErrorHeader {
    runs?: Run68[]
  }
  
   interface Run68 {
    text?: string
  }
  
   interface ConnectionErrorMicrophoneLabel {
    runs?: Run69[]
  }
  
   interface Run69 {
    text?: string
  }
  
   interface PermissionsHeader {
    runs?: Run70[]
  }
  
   interface Run70 {
    text?: string
  }
  
   interface PermissionsSubtext {
    runs?: Run71[]
  }
  
   interface Run71 {
    text?: string
  }
  
   interface DisabledHeader {
    runs?: Run72[]
  }
  
   interface Run72 {
    text?: string
  }
  
   interface DisabledSubtext {
    runs?: Run73[]
  }
  
   interface Run73 {
    text?: string
  }
  
   interface MicrophoneButtonAriaLabel {
    runs?: Run74[]
  }
  
   interface Run74 {
    text?: string
  }
  
   interface ExitButton {
    buttonRenderer?: ButtonRenderer31
  }
  
   interface ButtonRenderer31 {
    style?: string
    size?: string
    isDisabled?: boolean
    icon?: Icon25
    trackingParams?: string
    accessibilityData?: AccessibilityData53
  }
  
   interface Icon25 {
    iconType?: string
  }
  
   interface AccessibilityData53 {
    accessibilityData?: AccessibilityData54
  }
  
   interface AccessibilityData54 {
    label?: string
  }
  
   interface MicrophoneOffPromptHeader {
    runs?: Run75[]
  }
  
   interface Run75 {
    text?: string
  }
  
   interface Icon26 {
    iconType?: string
  }
  
   interface AccessibilityData55 {
    accessibilityData?: AccessibilityData56
  }
  
   interface AccessibilityData56 {
    label?: string
  }
  
   interface Cards {
    cardCollectionRenderer?: CardCollectionRenderer
  }
  
   interface CardCollectionRenderer {
    cards?: Card2[]
    headerText?: HeaderText2
    trackingParams?: string
    onIconTapCommand?: OnIconTapCommand
  }
  
   interface Card2 {
    cardRenderer?: CardRenderer
  }
  
   interface CardRenderer {
    teaser?: Teaser
    cueRanges?: CueRange[]
    trackingParams?: string
  }
  
   interface Teaser {
    simpleCardTeaserRenderer?: SimpleCardTeaserRenderer
  }
  
   interface SimpleCardTeaserRenderer {
    message?: Message
    trackingParams?: string
    onTapCommand?: OnTapCommand
    channelAvatar?: ChannelAvatar2
  }
  
   interface Message {
    simpleText?: string
  }
  
   interface OnTapCommand {
    clickTrackingParams?: string
    showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint2
  }
  
   interface ShowEngagementPanelEndpoint2 {
    panelIdentifier?: string
    forcePortrait?: boolean
    engagementPanelExtras?: EngagementPanelExtras
  }
  
   interface EngagementPanelExtras {
    sectionListEngagementPanelExtras?: SectionListEngagementPanelExtras
  }
  
   interface SectionListEngagementPanelExtras {
    scrollToItemSectionIdentifier?: string
    scrollToItemSectionOffsetDistance?: number
  }
  
   interface ChannelAvatar2 {
    thumbnails?: Thumbnail20[]
  }
  
   interface Thumbnail20 {
    url?: string
    width?: number
    height?: number
  }
  
   interface CueRange {
    startCardActiveMs?: string
    endCardActiveMs?: string
    teaserDurationMs?: string
  }
  
   interface HeaderText2 {
    simpleText?: string
  }
  
   interface OnIconTapCommand {
    clickTrackingParams?: string
    showEngagementPanelEndpoint?: ShowEngagementPanelEndpoint3
  }
  
   interface ShowEngagementPanelEndpoint3 {
    panelIdentifier?: string
    forcePortrait?: boolean
    engagementPanelExtras?: EngagementPanelExtras2
  }
  
   interface EngagementPanelExtras2 {
    sectionListEngagementPanelExtras?: SectionListEngagementPanelExtras2
  }
  
   interface SectionListEngagementPanelExtras2 {
    scrollToItemSectionIdentifier?: string
  }
  
   interface PageVisualEffect {
    cinematicContainerRenderer?: CinematicContainerRenderer
  }
  
   interface CinematicContainerRenderer {
    gradientColorConfig?: GradientColorConfig[]
    presentationStyle?: string
    config?: Config2
  }
  
   interface GradientColorConfig {
    darkThemeColor?: number
    startLocation?: number
  }
  
   interface Config2 {
    lightThemeBackgroundColor?: number
    darkThemeBackgroundColor?: number
    animationConfig?: AnimationConfig
    colorSourceSizeMultiplier?: number
    applyClientImageBlur?: boolean
    bottomColorSourceHeightMultiplier?: number
    maxBottomColorSourceHeight?: number
    colorSourceWidthMultiplier?: number
    colorSourceHeightMultiplier?: number
    blurStrength?: number
    watchFullscreenConfig?: WatchFullscreenConfig
    enableInLightTheme?: boolean
  }
  
   interface AnimationConfig {
    minImageUpdateIntervalMs?: number
    crossfadeDurationMs?: number
    crossfadeStartOffset?: number
    maxFrameRate?: number
  }
  
   interface WatchFullscreenConfig {
    colorSourceWidthMultiplier?: number
    colorSourceHeightMultiplier?: number
    scrimWidthMultiplier?: number
    scrimHeightMultiplier?: number
    flatScrimColor?: number
  }
  
   interface FrameworkUpdates {
    entityBatchUpdate?: EntityBatchUpdate
  }
  
   interface EntityBatchUpdate {
    mutations?: Mutation[]
    timestamp?: Timestamp
  }
  
   interface Mutation {
    entityKey?: string
    type?: string
    payload?: Payload
    options?: Options
  }
  
   interface Payload {
    subscriptionStateEntity?: SubscriptionStateEntity
    likeStatusEntity?: LikeStatusEntity2
    macroMarkersListEntity?: MacroMarkersListEntity
  }
  
   interface SubscriptionStateEntity {
    key?: string
    subscribed?: boolean
  }
  
   interface LikeStatusEntity2 {
    key?: string
    likeStatus?: string
  }
  
   interface MacroMarkersListEntity {
    key?: string
    externalVideoId?: string
    markersList?: MarkersList
  }
  
   interface MarkersList {
    markerType?: string
    markers?: Marker[]
    markersMetadata?: MarkersMetadata
    markersDecoration?: MarkersDecoration
  }
  
   interface Marker {
    startMillis?: string
    durationMillis?: string
    intensityScoreNormalized?: number
  }
  
   interface MarkersMetadata {
    heatmapMetadata?: HeatmapMetadata
  }
  
   interface HeatmapMetadata {
    maxHeightDp?: number
    minHeightDp?: number
    showHideAnimationDurationMillis?: number
  }
  
   interface MarkersDecoration {
    timedMarkerDecorations?: TimedMarkerDecoration[]
  }
  
   interface TimedMarkerDecoration {
    visibleTimeRangeStartMillis?: number
    visibleTimeRangeEndMillis?: number
    decorationTimeMillis?: number
    label?: Label3
    icon?: string
  }
  
   interface Label3 {
    runs?: Run76[]
  }
  
   interface Run76 {
    text?: string
  }
  
   interface Options {
    persistenceOption?: string
  }
  
   interface Timestamp {
    seconds?: string
    nanos?: number
  }
  