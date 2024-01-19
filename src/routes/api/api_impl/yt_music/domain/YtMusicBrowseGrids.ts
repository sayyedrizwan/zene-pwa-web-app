export interface YtMusicBrowseGrids {
    responseContext?:ResponseContext
    contents?:Contents
    header?:Header2
    trackingParams?:string
    maxAgeStoreSeconds?:number
  }
  
  export interface ResponseContext {
    serviceTrackingParams?:ServiceTrackingParam[]
  }
  
  export interface ServiceTrackingParam {
    service?:string
    params?:Param[]
  }
  
  export interface Param {
    key?:string
    value?:string
  }
  
  export interface Contents {
    singleColumnBrowseResultsRenderer?:SingleColumnBrowseResultsRenderer
  }
  
  export interface SingleColumnBrowseResultsRenderer {
    tabs?:Tab[]
  }
  
  export interface Tab {
    tabRenderer?:TabRenderer
  }
  
  export interface TabRenderer {
    content?:Content
    trackingParams?:string
  }
  
  export interface Content {
    sectionListRenderer?:SectionListRenderer
  }
  
  export interface SectionListRenderer {
    contents?:Content2[]
    trackingParams?:string
  }
  
  export interface Content2 {
    gridRenderer?:GridRenderer
    musicCarouselShelfRenderer?:MusicCarouselShelfRenderer
  }
  
  export interface GridRenderer {
    items?:Item[]
    trackingParams?:string
  }
  
  export interface Item {
    musicTwoRowItemRenderer?:MusicTwoRowItemRenderer
  }
  
  export interface MusicTwoRowItemRenderer {
    thumbnailRenderer?:ThumbnailRenderer
    aspectRatio?:string
    title?:Title
    subtitle?:Subtitle
    navigationEndpoint?:NavigationEndpoint2
    trackingParams?:string
    menu?:Menu
    thumbnailOverlay?:ThumbnailOverlay
  }
  
  export interface ThumbnailRenderer {
    musicThumbnailRenderer?:MusicThumbnailRenderer
  }
  
  export interface MusicThumbnailRenderer {
    thumbnail?:Thumbnail
    thumbnailCrop?:string
    thumbnailScale?:string
    trackingParams?:string
  }
  
  export interface Thumbnail {
    thumbnails?:Thumbnail2[]
  }
  
  export interface Thumbnail2 {
    url?:string
    width?:number
    height?:number
  }
  
  export interface Title {
    runs?:Run[]
  }
  
  export interface Run {
    text?:string
    navigationEndpoint?:NavigationEndpoint
  }
  
  export interface NavigationEndpoint {
    clickTrackingParams?:string
    browseEndpoint?:BrowseEndpoint
  }
  
  export interface BrowseEndpoint {
    browseId?:string
    browseEndpointContextSupportedConfigs?:BrowseEndpointContextSupportedConfigs
  }
  
  export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig?:BrowseEndpointContextMusicConfig
  }
  
  export interface BrowseEndpointContextMusicConfig {
    pageType?:string
  }
  
  export interface Subtitle {
    runs?:Run2[]
  }
  
  export interface Run2 {
    text?:string
  }
  
  export interface NavigationEndpoint2 {
    clickTrackingParams?:string
    browseEndpoint?:BrowseEndpoint2
  }
  
  export interface BrowseEndpoint2 {
    browseId?:string
    browseEndpointContextSupportedConfigs?:BrowseEndpointContextSupportedConfigs2
  }
  
  export interface BrowseEndpointContextSupportedConfigs2 {
    browseEndpointContextMusicConfig?:BrowseEndpointContextMusicConfig2
  }
  
  export interface BrowseEndpointContextMusicConfig2 {
    pageType?:string
  }
  
  export interface Menu {
    menuRenderer?:MenuRenderer
  }
  
  export interface MenuRenderer {
    items?:Item2[]
    trackingParams?:string
    accessibility?:Accessibility
  }
  
  export interface Item2 {
    menuNavigationItemRenderer?:MenuNavigationItemRenderer
    menuServiceItemRenderer?:MenuServiceItemRenderer
    toggleMenuServiceItemRenderer?:ToggleMenuServiceItemRenderer
  }
  
  export interface MenuNavigationItemRenderer {
    text?:Text
    icon?:Icon
    navigationEndpoint?:NavigationEndpoint3
    trackingParams?:string
  }
  
  export interface Text {
    runs?:Run3[]
  }
  
  export interface Run3 {
    text?:string
  }
  
  export interface Icon {
    iconType?:string
  }
  
  export interface NavigationEndpoint3 {
    clickTrackingParams?:string
    addToPlaylistEndpoint?:AddToPlaylistEndpoint
    watchPlaylistEndpoint?:WatchPlaylistEndpoint
    shareEntityEndpoint?:ShareEntityEndpoint
  }
  
  export interface AddToPlaylistEndpoint {
    playlistId?:string
  }
  
  export interface WatchPlaylistEndpoint {
    playlistId?:string
    params?:string
  }
  
  export interface ShareEntityEndpoint {
    serializedShareEntity?:string
    sharePanelType?:string
  }
  
  export interface MenuServiceItemRenderer {
    text?:Text2
    icon?:Icon2
    serviceEndpoint?:ServiceEndpoint
    trackingParams?:string
  }
  
  export interface Text2 {
    runs?:Run4[]
  }
  
  export interface Run4 {
    text?:string
  }
  
  export interface Icon2 {
    iconType?:string
  }
  
  export interface ServiceEndpoint {
    clickTrackingParams?:string
    queueAddEndpoint?:QueueAddEndpoint
  }
  
  export interface QueueAddEndpoint {
    queueTarget?:QueueTarget
    queueInsertPosition?:string
    commands?:Command[]
  }
  
  export interface QueueTarget {
    playlistId?:string
    onEmptyQueue?:OnEmptyQueue
  }
  
  export interface OnEmptyQueue {
    clickTrackingParams?:string
    watchEndpoint?:WatchEndpoint
  }
  
  export interface WatchEndpoint {
    playlistId?:string
  }
  
  export interface Command {
    clickTrackingParams?:string
    addToToastAction?:AddToToastAction
  }
  
  export interface AddToToastAction {
    item?:Item3
  }
  
  export interface Item3 {
    notificationTextRenderer?:NotificationTextRenderer
  }
  
  export interface NotificationTextRenderer {
    successResponseText?:SuccessResponseText
    trackingParams?:string
  }
  
  export interface SuccessResponseText {
    runs?:Run5[]
  }
  
  export interface Run5 {
    text?:string
  }
  
  export interface ToggleMenuServiceItemRenderer {
    defaultText?:DefaultText
    defaultIcon?:DefaultIcon
    defaultServiceEndpoint?:DefaultServiceEndpoint
    toggledText?:ToggledText
    toggledIcon?:ToggledIcon
    toggledServiceEndpoint?:ToggledServiceEndpoint
    trackingParams?:string
  }
  
  export interface DefaultText {
    runs?:Run6[]
  }
  
  export interface Run6 {
    text?:string
  }
  
  export interface DefaultIcon {
    iconType?:string
  }
  
  export interface DefaultServiceEndpoint {
    clickTrackingParams?:string
    likeEndpoint?:LikeEndpoint
  }
  
  export interface LikeEndpoint {
    status?:string
    target?:Target
  }
  
  export interface Target {
    playlistId?:string
  }
  
  export interface ToggledText {
    runs?:Run7[]
  }
  
  export interface Run7 {
    text?:string
  }
  
  export interface ToggledIcon {
    iconType?:string
  }
  
  export interface ToggledServiceEndpoint {
    clickTrackingParams?:string
    likeEndpoint?:LikeEndpoint2
  }
  
  export interface LikeEndpoint2 {
    status?:string
    target?:Target2
  }
  
  export interface Target2 {
    playlistId?:string
  }
  
  export interface Accessibility {
    accessibilityData?:AccessibilityData
  }
  
  export interface AccessibilityData {
    label?:string
  }
  
  export interface ThumbnailOverlay {
    musicItemThumbnailOverlayRenderer?:MusicItemThumbnailOverlayRenderer
  }
  
  export interface MusicItemThumbnailOverlayRenderer {
    background?:Background
    content?:Content3
    contentPosition?:string
    displayStyle?:string
  }
  
  export interface Background {
    verticalGradient?:VerticalGradient
  }
  
  export interface VerticalGradient {
    gradientLayerColors?:string[]
  }
  
  export interface Content3 {
    musicPlayButtonRenderer?:MusicPlayButtonRenderer
  }
  
  export interface MusicPlayButtonRenderer {
    playNavigationEndpoint?:PlayNavigationEndpoint
    trackingParams?:string
    playIcon?:PlayIcon
    pauseIcon?:PauseIcon
    iconColor?:number
    backgroundColor?:number
    activeBackgroundColor?:number
    loadingIndicatorColor?:number
    playingIcon?:PlayingIcon
    iconLoadingColor?:number
    activeScaleFactor?:number
    buttonSize?:string
    rippleTarget?:string
    accessibilityPlayData?:AccessibilityPlayData
    accessibilityPauseData?:AccessibilityPauseData
  }
  
  export interface PlayNavigationEndpoint {
    clickTrackingParams?:string
    watchPlaylistEndpoint?:WatchPlaylistEndpoint2
  }
  
  export interface WatchPlaylistEndpoint2 {
    playlistId?:string
    params?:string
  }
  
  export interface PlayIcon {
    iconType?:string
  }
  
  export interface PauseIcon {
    iconType?:string
  }
  
  export interface PlayingIcon {
    iconType?:string
  }
  
  export interface AccessibilityPlayData {
    accessibilityData?:AccessibilityData2
  }
  
  export interface AccessibilityData2 {
    label?:string
  }
  
  export interface AccessibilityPauseData {
    accessibilityData?:AccessibilityData3
  }
  
  export interface AccessibilityData3 {
    label?:string
  }
  
  export interface MusicCarouselShelfRenderer {
    header?:Header
    contents?:Content4[]
    trackingParams?:string
    itemSize?:string
  }
  
  export interface Header {
    musicCarouselShelfBasicHeaderRenderer?:MusicCarouselShelfBasicHeaderRenderer
  }
  
  export interface MusicCarouselShelfBasicHeaderRenderer {
    title?:Title2
    accessibilityData?:AccessibilityData4
    headerStyle?:string
    moreContentButton?:MoreContentButton
    trackingParams?:string
  }
  
  export interface Title2 {
    runs?:Run8[]
  }
  
  export interface Run8 {
    text?:string
    navigationEndpoint?:NavigationEndpoint4
  }
  
  export interface NavigationEndpoint4 {
    clickTrackingParams?:string
    browseEndpoint?:BrowseEndpoint3
  }
  
  export interface BrowseEndpoint3 {
    browseId?:string
  }
  
  export interface AccessibilityData4 {
    accessibilityData?:AccessibilityData5
  }
  
  export interface AccessibilityData5 {
    label?:string
  }
  
  export interface MoreContentButton {
    buttonRenderer?:ButtonRenderer
  }
  
  export interface ButtonRenderer {
    style?:string
    text?:Text3
    navigationEndpoint?:NavigationEndpoint5
    trackingParams?:string
    accessibilityData?:AccessibilityData6
  }
  
  export interface Text3 {
    runs?:Run9[]
  }
  
  export interface Run9 {
    text?:string
  }
  
  export interface NavigationEndpoint5 {
    clickTrackingParams?:string
    browseEndpoint?:BrowseEndpoint4
  }
  
  export interface BrowseEndpoint4 {
    browseId?:string
  }
  
  export interface AccessibilityData6 {
    accessibilityData?:AccessibilityData7
  }
  
  export interface AccessibilityData7 {
    label?:string
  }
  
  export interface Content4 {
    musicTwoRowItemRenderer?:MusicTwoRowItemRenderer2
  }
  
  export interface MusicTwoRowItemRenderer2 {
    thumbnailRenderer?:ThumbnailRenderer2
    aspectRatio?:string
    title?:Title3
    subtitle?:Subtitle2
    navigationEndpoint?:NavigationEndpoint8
    trackingParams?:string
    menu?:Menu2
    thumbnailOverlay?:ThumbnailOverlay2
    subtitleBadges?:SubtitleBadge[]
  }
  
  export interface ThumbnailRenderer2 {
    musicThumbnailRenderer?:MusicThumbnailRenderer2
  }
  
  export interface MusicThumbnailRenderer2 {
    thumbnail?:Thumbnail3
    thumbnailCrop?:string
    thumbnailScale?:string
    trackingParams?:string
  }
  
  export interface Thumbnail3 {
    thumbnails?:Thumbnail4[]
  }
  
  export interface Thumbnail4 {
    url?:string
    width?:number
    height?:number
  }
  
  export interface Title3 {
    runs?:Run10[]
  }
  
  export interface Run10 {
    text?:string
    navigationEndpoint?:NavigationEndpoint6
  }
  
  export interface NavigationEndpoint6 {
    clickTrackingParams?:string
    browseEndpoint?:BrowseEndpoint5
  }
  
  export interface BrowseEndpoint5 {
    browseId?:string
    browseEndpointContextSupportedConfigs?:BrowseEndpointContextSupportedConfigs3
  }
  
  export interface BrowseEndpointContextSupportedConfigs3 {
    browseEndpointContextMusicConfig?:BrowseEndpointContextMusicConfig3
  }
  
  export interface BrowseEndpointContextMusicConfig3 {
    pageType?:string
  }
  
  export interface Subtitle2 {
    runs?:Run11[]
  }
  
  export interface Run11 {
    text?:string
    navigationEndpoint?:NavigationEndpoint7
  }
  
  export interface NavigationEndpoint7 {
    clickTrackingParams?:string
    browseEndpoint?:BrowseEndpoint6
  }
  
  export interface BrowseEndpoint6 {
    browseId?:string
    browseEndpointContextSupportedConfigs?:BrowseEndpointContextSupportedConfigs4
  }
  
  export interface BrowseEndpointContextSupportedConfigs4 {
    browseEndpointContextMusicConfig?:BrowseEndpointContextMusicConfig4
  }
  
  export interface BrowseEndpointContextMusicConfig4 {
    pageType?:string
  }
  
  export interface NavigationEndpoint8 {
    clickTrackingParams?:string
    browseEndpoint?:BrowseEndpoint7
    watchEndpoint?:WatchEndpoint2
  }
  
  export interface BrowseEndpoint7 {
    browseId?:string
    browseEndpointContextSupportedConfigs?:BrowseEndpointContextSupportedConfigs5
  }
  
  export interface BrowseEndpointContextSupportedConfigs5 {
    browseEndpointContextMusicConfig?:BrowseEndpointContextMusicConfig5
  }
  
  export interface BrowseEndpointContextMusicConfig5 {
    pageType?:string
  }
  
  export interface WatchEndpoint2 {
    videoId?:string
    watchEndpointMusicSupportedConfigs?:WatchEndpointMusicSupportedConfigs
  }
  
  export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig?:WatchEndpointMusicConfig
  }
  
  export interface WatchEndpointMusicConfig {
    musicVideoType?:string
  }
  
  export interface Menu2 {
    menuRenderer?:MenuRenderer2
  }
  
  export interface MenuRenderer2 {
    items?:Item4[]
    trackingParams?:string
    accessibility?:Accessibility2
  }
  
  export interface Item4 {
    toggleMenuServiceItemRenderer?:ToggleMenuServiceItemRenderer2
    menuServiceItemRenderer?:MenuServiceItemRenderer2
    menuNavigationItemRenderer?:MenuNavigationItemRenderer2
  }
  
  export interface ToggleMenuServiceItemRenderer2 {
    defaultText?:DefaultText2
    defaultIcon?:DefaultIcon2
    defaultServiceEndpoint?:DefaultServiceEndpoint2
    toggledText?:ToggledText2
    toggledIcon?:ToggledIcon2
    toggledServiceEndpoint?:ToggledServiceEndpoint2
    trackingParams?:string
    isToggled?:boolean
  }
  
  export interface DefaultText2 {
    runs?:Run12[]
  }
  
  export interface Run12 {
    text?:string
  }
  
  export interface DefaultIcon2 {
    iconType?:string
  }
  
  export interface DefaultServiceEndpoint2 {
    clickTrackingParams?:string
    likeEndpoint?:LikeEndpoint3
    playlistEditEndpoint?:PlaylistEditEndpoint
  }
  
  export interface LikeEndpoint3 {
    status?:string
    target?:Target3
  }
  
  export interface Target3 {
    playlistId?:string
    videoId?:string
  }
  
  export interface PlaylistEditEndpoint {
    playlistId?:string
    actions?:Action[]
    params?:string
  }
  
  export interface Action {
    addedVideoId?:string
    action?:string
    dedupeOption?:string
  }
  
  export interface ToggledText2 {
    runs?:Run13[]
  }
  
  export interface Run13 {
    text?:string
  }
  
  export interface ToggledIcon2 {
    iconType?:string
  }
  
  export interface ToggledServiceEndpoint2 {
    clickTrackingParams?:string
    likeEndpoint?:LikeEndpoint4
    playlistEditEndpoint?:PlaylistEditEndpoint2
  }
  
  export interface LikeEndpoint4 {
    status?:string
    target?:Target4
  }
  
  export interface Target4 {
    playlistId?:string
    videoId?:string
  }
  
  export interface PlaylistEditEndpoint2 {
    playlistId?:string
    actions?:Action2[]
  }
  
  export interface Action2 {
    action?:string
    removedVideoId?:string
  }
  
  export interface MenuServiceItemRenderer2 {
    text?:Text4
    icon?:Icon3
    serviceEndpoint?:ServiceEndpoint2
    trackingParams?:string
  }
  
  export interface Text4 {
    runs?:Run14[]
  }
  
  export interface Run14 {
    text?:string
  }
  
  export interface Icon3 {
    iconType?:string
  }
  
  export interface ServiceEndpoint2 {
    clickTrackingParams?:string
    queueAddEndpoint?:QueueAddEndpoint2
  }
  
  export interface QueueAddEndpoint2 {
    queueTarget?:QueueTarget2
    queueInsertPosition?:string
    commands?:Command2[]
  }
  
  export interface QueueTarget2 {
    playlistId?:string
    onEmptyQueue?:OnEmptyQueue2
    videoId?:string
  }
  
  export interface OnEmptyQueue2 {
    clickTrackingParams?:string
    watchEndpoint?:WatchEndpoint3
  }
  
  export interface WatchEndpoint3 {
    playlistId?:string
    videoId?:string
  }
  
  export interface Command2 {
    clickTrackingParams?:string
    addToToastAction?:AddToToastAction2
  }
  
  export interface AddToToastAction2 {
    item?:Item5
  }
  
  export interface Item5 {
    notificationTextRenderer?:NotificationTextRenderer2
  }
  
  export interface NotificationTextRenderer2 {
    successResponseText?:SuccessResponseText2
    trackingParams?:string
  }
  
  export interface SuccessResponseText2 {
    runs?:Run15[]
  }
  
  export interface Run15 {
    text?:string
  }
  
  export interface MenuNavigationItemRenderer2 {
    text?:Text5
    icon?:Icon4
    navigationEndpoint?:NavigationEndpoint9
    trackingParams?:string
  }
  
  export interface Text5 {
    runs?:Run16[]
  }
  
  export interface Run16 {
    text?:string
  }
  
  export interface Icon4 {
    iconType?:string
  }
  
  export interface NavigationEndpoint9 {
    clickTrackingParams?:string
    shareEntityEndpoint?:ShareEntityEndpoint2
    browseEndpoint?:BrowseEndpoint8
    addToPlaylistEndpoint?:AddToPlaylistEndpoint2
    watchPlaylistEndpoint?:WatchPlaylistEndpoint3
    watchEndpoint?:WatchEndpoint4
  }
  
  export interface ShareEntityEndpoint2 {
    serializedShareEntity?:string
    sharePanelType?:string
  }
  
  export interface BrowseEndpoint8 {
    browseId?:string
    browseEndpointContextSupportedConfigs?:BrowseEndpointContextSupportedConfigs6
  }
  
  export interface BrowseEndpointContextSupportedConfigs6 {
    browseEndpointContextMusicConfig?:BrowseEndpointContextMusicConfig6
  }
  
  export interface BrowseEndpointContextMusicConfig6 {
    pageType?:string
  }
  
  export interface AddToPlaylistEndpoint2 {
    videoId?:string
    playlistId?:string
  }
  
  export interface WatchPlaylistEndpoint3 {
    playlistId?:string
    params?:string
  }
  
  export interface WatchEndpoint4 {
    videoId?:string
    playlistId?:string
    params?:string
    loggingContext?:LoggingContext
    watchEndpointMusicSupportedConfigs?:WatchEndpointMusicSupportedConfigs2
  }
  
  export interface LoggingContext {
    vssLoggingContext?:VssLoggingContext
  }
  
  export interface VssLoggingContext {
    serializedContextData?:string
  }
  
  export interface WatchEndpointMusicSupportedConfigs2 {
    watchEndpointMusicConfig?:WatchEndpointMusicConfig2
  }
  
  export interface WatchEndpointMusicConfig2 {
    musicVideoType?:string
  }
  
  export interface Accessibility2 {
    accessibilityData?:AccessibilityData8
  }
  
  export interface AccessibilityData8 {
    label?:string
  }
  
  export interface ThumbnailOverlay2 {
    musicItemThumbnailOverlayRenderer?:MusicItemThumbnailOverlayRenderer2
  }
  
  export interface MusicItemThumbnailOverlayRenderer2 {
    background?:Background2
    content?:Content5
    contentPosition?:string
    displayStyle?:string
  }
  
  export interface Background2 {
    verticalGradient?:VerticalGradient2
  }
  
  export interface VerticalGradient2 {
    gradientLayerColors?:string[]
  }
  
  export interface Content5 {
    musicPlayButtonRenderer?:MusicPlayButtonRenderer2
  }
  
  export interface MusicPlayButtonRenderer2 {
    playNavigationEndpoint?:PlayNavigationEndpoint2
    trackingParams?:string
    playIcon?:PlayIcon2
    pauseIcon?:PauseIcon2
    iconColor?:number
    backgroundColor?:number
    activeBackgroundColor?:number
    loadingIndicatorColor?:number
    playingIcon?:PlayingIcon2
    iconLoadingColor?:number
    activeScaleFactor?:number
    buttonSize?:string
    rippleTarget?:string
    accessibilityPlayData?:AccessibilityPlayData2
    accessibilityPauseData?:AccessibilityPauseData2
  }
  
  export interface PlayNavigationEndpoint2 {
    clickTrackingParams?:string
    watchEndpoint?:WatchEndpoint5
    watchPlaylistEndpoint?:WatchPlaylistEndpoint4
  }
  
  export interface WatchEndpoint5 {
    videoId?:string
    params?:string
    watchEndpointMusicSupportedConfigs?:WatchEndpointMusicSupportedConfigs3
  }
  
  export interface WatchEndpointMusicSupportedConfigs3 {
    watchEndpointMusicConfig?:WatchEndpointMusicConfig3
  }
  
  export interface WatchEndpointMusicConfig3 {
    musicVideoType?:string
  }
  
  export interface WatchPlaylistEndpoint4 {
    playlistId?:string
  }
  
  export interface PlayIcon2 {
    iconType?:string
  }
  
  export interface PauseIcon2 {
    iconType?:string
  }
  
  export interface PlayingIcon2 {
    iconType?:string
  }
  
  export interface AccessibilityPlayData2 {
    accessibilityData?:AccessibilityData9
  }
  
  export interface AccessibilityData9 {
    label?:string
  }
  
  export interface AccessibilityPauseData2 {
    accessibilityData?:AccessibilityData10
  }
  
  export interface AccessibilityData10 {
    label?:string
  }
  
  export interface SubtitleBadge {
    musicInlineBadgeRenderer?:MusicInlineBadgeRenderer
  }
  
  export interface MusicInlineBadgeRenderer {
    trackingParams?:string
    icon?:Icon5
    accessibilityData?:AccessibilityData11
  }
  
  export interface Icon5 {
    iconType?:string
  }
  
  export interface AccessibilityData11 {
    accessibilityData?:AccessibilityData12
  }
  
  export interface AccessibilityData12 {
    label?:string
  }
  
  export interface Header2 {
    musicHeaderRenderer?:MusicHeaderRenderer
  }
  
  export interface MusicHeaderRenderer {
    title?:Title4
    trackingParams?:string
  }
  
  export interface Title4 {
    runs?:Run17[]
  }
  
  export interface Run17 {
    text?:string
  }
  