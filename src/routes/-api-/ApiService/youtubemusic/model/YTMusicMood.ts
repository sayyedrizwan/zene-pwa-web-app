 export interface YTMusicMood {
    contents?: Contents
    header?: Header2
    trackingParams?: string
    maxAgeStoreSeconds?: number
  }
  
   interface Contents {
    singleColumnBrowseResultsRenderer?: SingleColumnBrowseResultsRenderer
  }
  
   interface SingleColumnBrowseResultsRenderer {
    tabs?: Tab[]
  }
  
   interface Tab {
    tabRenderer?: TabRenderer
  }
  
   interface TabRenderer {
    content?: Content
    trackingParams?: string
  }
  
   interface Content {
    sectionListRenderer?: SectionListRenderer
  }
  
   interface SectionListRenderer {
    contents?: Content2[]
    trackingParams?: string
  }
  
   interface Content2 {
    gridRenderer?: GridRenderer
  }
  
   interface GridRenderer {
    items?: Item[]
    trackingParams?: string
    itemSize?: string
    header?: Header
  }
  
   interface Item {
    musicTwoRowItemRenderer?: MusicNavigationButtonRenderer
    musicNavigationButtonRenderer?: MusicNavigationButtonRenderer
  }
  
   interface MusicNavigationButtonRenderer {
    title?: Title
    thumbnailRenderer?: ThumbnailRenderer
    subtitle?: ButtonText
    navigationEndpoint: NavigationEndpoint
    buttonText?: ButtonText
    solid?: Solid
    clickCommand?: ClickCommand
    trackingParams?: string
  }


  export interface ThumbnailRenderer {
    musicThumbnailRenderer: MusicThumbnailRenderer
  }
  
  export interface MusicThumbnailRenderer {
    thumbnail: Thumbnail
    thumbnailCrop: string
    thumbnailScale: string
    trackingParams: string
  }
  
  export interface Thumbnail {
    thumbnails: Thumbnail2[]
  }
  
  export interface Thumbnail2 {
    url: string
    width: number
    height: number
  }
  
  
  export interface NavigationEndpoint {
    clickTrackingParams: string
    browseEndpoint: BrowseEndpoint2
  }
  
  export interface BrowseEndpoint2 {
    browseId: string
    params: string
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs
  }
  
  export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig
  }
  
  export interface BrowseEndpointContextMusicConfig {
    pageType: string
  }
  
  
   interface ButtonText {
    runs?: Run[]
  }
  
   interface Run {
    text?: string
  }
  
   interface Solid {
    leftStripeColor?: number
  }
  
   interface ClickCommand {
    clickTrackingParams?: string
    browseEndpoint?: BrowseEndpoint
  }
  
   interface BrowseEndpoint {
    browseId?: string
    params?: string
  }
  
   interface Header {
    gridHeaderRenderer?: GridHeaderRenderer
  }
  
   interface GridHeaderRenderer {
    title?: Title
  }
  
   interface Title {
    runs?: Run2[]
  }
  
   interface Run2 {
    text?: string
  }
  
   interface Header2 {
    musicHeaderRenderer?: MusicHeaderRenderer
  }
  
   interface MusicHeaderRenderer {
    title?: Title2
    trackingParams?: string
  }
  
   interface Title2 {
    runs?: Run3[]
  }
  
   interface Run3 {
    text?: string
  }
  