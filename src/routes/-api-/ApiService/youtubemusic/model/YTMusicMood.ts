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
    musicNavigationButtonRenderer?: MusicNavigationButtonRenderer
  }
  
   interface MusicNavigationButtonRenderer {
    buttonText?: ButtonText
    solid?: Solid
    clickCommand?: ClickCommand
    trackingParams?: string
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
  