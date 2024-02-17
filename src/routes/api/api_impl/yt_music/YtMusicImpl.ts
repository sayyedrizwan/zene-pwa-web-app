import { MusicData, MusicDataList, MusicType } from '../../../../domain/local/entities/MusicData'
import type { IpJsonResponse } from '../../radiolist/domain/IpJsonResponse'
import { encryptAppSharedData } from '../../utils/EncryptionForAPI'
import { getTextAfterKeyword, getTextBeforeKeyword, getTextBeforeLastKeyword, joinArtists } from '../../utils/utils'
import { all_search_albums_params, all_search_artists_params, all_search_params, new_release_params, ytMusicBodyWithInput, ytMusicBodyWithParams, ytMusicBodyWithParamsNext, ytMusicBodyWithParamsWithIp, ytMusicBodyWithVID, ytMusicHeader, yt_music_browse, yt_music_next, yt_music_search, yt_music_search_suggestion, yt_music_song_info } from './YtMusicUtil'
import type { YtMusicBrowseData } from './domain/YtMusicBrowseData'
import type { YtMusicBrowseGrids } from './domain/YtMusicBrowseGrids'
import type { YtMusicBrowsePlaylists } from './domain/YtMusicBrowsePlaylists'
import type { YtMusicNextBrowser } from './domain/YtMusicNextBrowser'
import type { YtMusicSearchKeywordsSuggestion } from './domain/YtMusicSearchKeywordsSuggestion'
import type { YtMusicSearchResponse } from './domain/YtMusicSearchResponse'
import type { YtMusicSongsInfoData } from './domain/YtMusicSongsInfoData'

export class YtMusicAPIImpl {

  async artistsSearch(search: string): Promise<MusicData[]> {
    const music: MusicData[] = []

    const r = await fetch(yt_music_search, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParams(search, all_search_artists_params) })
    const response = (await r.json()) as YtMusicSearchResponse

    response.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tab) => {
      tab.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
        contents.musicShelfRenderer?.contents?.forEach((artists) => {
          artists?.musicResponsiveListItemRenderer?.flexColumns?.forEach((names) => {
            if (names.musicResponsiveListItemFlexColumnRenderer?.displayPriority == 'MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH') {
              const name = names.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? null
              const thumbnail = artists?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace('w120-h120-', 'w512-h512-')
              if (name != null) if (name.trim().toLocaleLowerCase() != "artist") music.push(new MusicData(name, name, encryptAppSharedData(name), thumbnail ?? '', MusicType.ARTISTS))
            }
          })
        })
      })
    })

    return music
  }

  async searchKeywordsSuggestions(search: string): Promise<string[]> {
    const lists: string[] = []

    const r = await fetch(yt_music_search_suggestion, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithInput(search) })
    const response = (await r.json()) as YtMusicSearchKeywordsSuggestion

    response.contents?.forEach((c) => {
      c?.searchSuggestionsSectionRenderer?.contents?.forEach((items) => {
        const value = items?.searchSuggestionRenderer?.navigationEndpoint?.searchEndpoint?.query
        if (value != undefined) lists.push(value)
      })
    })
    return lists
  }

  async musicSearchSingle(search: string, doCheck: boolean): Promise<MusicData> {
    let music: MusicData = new MusicData(null, null, null, '', MusicType.MUSIC)

    const r = await fetch(yt_music_search, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParams(search, all_search_params) })
    const response = (await r.json()) as YtMusicSearchResponse
    response?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tabs) => {
      tabs?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
        contents.musicShelfRenderer?.contents?.forEach((musicContents) => {
          const thumbnail = musicContents?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace('w120-h120-', 'w512-h512-')
          let name: string | null
          let songId: string | null
          let artistsName: string[] = []

          musicContents?.musicResponsiveListItemRenderer?.flexColumns?.forEach((names) => {
            const info = names.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]
            if (info?.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType == 'MUSIC_VIDEO_TYPE_ATV') {
              name = info.text ?? null
              songId = info.navigationEndpoint?.watchEndpoint?.videoId ?? null
            }
            if (info?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == 'MUSIC_PAGE_TYPE_ARTIST') {
              if (info.text != undefined && info.text.trim() != '') artistsName.push(info.text)
            }
          })

          if (music.songId == null) {
            if (artistsName.length == 0) {
              try {
                const a = musicContents?.musicResponsiveListItemRenderer?.flexColumns?.[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.text
                artistsName.push(a ?? '')
              } catch (error) {
                error
              }
            }
            if (doCheck) {
              if (search?.includes(name!)) music = new MusicData(name!, joinArtists(artistsName), songId!, thumbnail!, MusicType.MUSIC)
            } else music = new MusicData(name!, joinArtists(artistsName), songId!, thumbnail!, MusicType.MUSIC)
          }
        })
      })
    })
    return music
  }

  async songInfo(id: string): Promise<MusicData | null> {
    const r = await fetch(yt_music_song_info, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithVID(id) })
    const response = (await r.json()) as YtMusicSongsInfoData

    const name = response?.videoDetails?.title
    const artists = response?.videoDetails?.author?.replaceAll("and", "&")
    const songId = response?.videoDetails?.videoId
    const thumbnail = response?.videoDetails?.thumbnail?.thumbnails?.findLast((t) => t.height == 544)?.url



    return name != undefined && songId != undefined ? new MusicData(name, artists ?? "", songId, thumbnail ?? "", MusicType.MUSIC) : null
  }


  async newReleaseSearch(ip: IpJsonResponse): Promise<MusicDataList> {
    const lists: string[] = []
    const listsNew: MusicData[] = []
    let releasedId = 'RDCLAK5uy_k5n4srrEB1wgvIjPNTXS9G1ufE9WQxhnA'

    const r = await fetch(yt_music_browse, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParamsWithIp(ip, new_release_params) })
    const response = (await r.json()) as YtMusicBrowseGrids

    response?.contents?.singleColumnBrowseResultsRenderer?.tabs?.[0].tabRenderer?.content?.sectionListRenderer?.contents?.[0].gridRenderer?.items?.forEach((e) => {
      try {
        if (e?.musicTwoRowItemRenderer?.title?.runs?.[0].text?.toLowerCase() === 'released') {
          releasedId = e?.musicTwoRowItemRenderer?.title?.runs?.[0]?.navigationEndpoint?.browseEndpoint?.browseId ?? ''
        }
      } catch (error) {
        error
      }
    })

    const musicr = await fetch(yt_music_browse, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParamsWithIp(ip, releasedId) })
    const musics = (await musicr.json()) as YtMusicBrowsePlaylists

    musics?.contents?.singleColumnBrowseResultsRenderer?.tabs?.forEach((element) => {
      element?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((music) => {
        music?.musicPlaylistShelfRenderer?.contents?.forEach((items) => {
          const name = items.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.accessibilityPlayData?.accessibilityData?.label
          let data = getTextAfterKeyword(name?.toLowerCase() ?? '', 'play')
          if (data?.includes('|')) data = getTextBeforeKeyword(data, '|')
          else {
            const temp = getTextBeforeKeyword(data ?? '', 'minute')
            data = getTextBeforeLastKeyword(temp ?? '', '-')
          }
          lists.push(data ?? '')
        })
      })
    })

    await Promise.all(
      lists.map(async (m) => {
        const music = await this.musicSearchSingle(m, false)
        if (music.songId != null) listsNew.push(music)
      })
    )
    return new MusicDataList(listsNew)
  }

  async browseSongsId(ip: IpJsonResponse, id: string): Promise<[MusicData[], MusicData[]]> {
    const youMightAlsoLike: MusicData[] = []
    const similarArtists: MusicData[] = []

    const r = await fetch(yt_music_browse, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParamsWithIp(ip, id) })
    const response = (await r.json()) as YtMusicBrowseData

    response.contents?.sectionListRenderer?.contents?.forEach(c => {
      if (c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label?.toLowerCase() == "you might also like") {
        c.musicCarouselShelfRenderer?.contents?.forEach(item => {
          const thumbnail = item?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace('w120-h120-', 'w512-h512-')
          let name: string | null = null
          let songId: string | null = null
          let artistsName: string[] = []

          item.musicResponsiveListItemRenderer?.flexColumns?.forEach(n => {
            n.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.forEach(t => {
              if (t.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType == "MUSIC_VIDEO_TYPE_ATV") {
                songId = t.navigationEndpoint.watchEndpoint.videoId ?? null
                name = t.text ?? null
              }

              if (t.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == "MUSIC_PAGE_TYPE_ARTIST") {
                if (t.text != undefined) artistsName.push(t.text)
              }
            })
          })

          if (name != null && songId != null) youMightAlsoLike.push(new MusicData(name, joinArtists(artistsName), songId, thumbnail ?? "", MusicType.MUSIC))
        })
      }

      if (c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label?.toLowerCase() == "similar artists") {
        c.musicCarouselShelfRenderer?.contents?.forEach(item => {
          const thumbnail = item?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 226)?.url?.replace('w226-h226-', 'w512-h512-')
          let name: string | null = null
          let id: string | null = null

          item?.musicTwoRowItemRenderer?.title?.runs?.forEach(t => {
            if (t.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == "MUSIC_PAGE_TYPE_ARTIST") {
              if (t.text != undefined) {
                id = t.navigationEndpoint?.browseEndpoint?.browseId ?? null
                name = t.text
              }
            }
          })
          if (name != undefined)
            similarArtists.push(new MusicData(name, name, encryptAppSharedData(name), thumbnail ?? "", MusicType.ARTISTS))
        })
      }
    })


    return [youMightAlsoLike, similarArtists]
  }


  async albumSearch(search: string): Promise<MusicData[]> {
    const lists: MusicData[] = []

    const r = await fetch(yt_music_search, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParams(search, all_search_albums_params) })
    const response = (await r.json()) as YtMusicSearchResponse

    response.contents?.tabbedSearchResultsRenderer?.tabs?.forEach(tabs => {
      tabs?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach(contents => {
        contents?.musicShelfRenderer?.contents?.forEach(albums => {
          const thumbnail = albums?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace('w120-h120-', 'w512-h512-')
          const name = getTextAfterKeyword(albums?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.accessibilityPauseData?.accessibilityData?.label ?? "", "Pause")
          const id = albums?.musicResponsiveListItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId

          if (id != null) lists.push(new MusicData(name, name, id, thumbnail ?? "", MusicType.ALBUM))
        })
      })
    })
    return lists
  }


  async getBrowseDetailsAndNextSongs(ip: IpJsonResponse, sId: string): Promise<[MusicData[], string | null]> {
    const r = await fetch(yt_music_next, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParamsNext(ip, sId) })
    const response = (await r.json()) as YtMusicNextBrowser

    let browserId: string | null = null
    let musicData: MusicData[] = []

    response.contents?.singleColumnMusicWatchNextResultsRenderer?.tabbedRenderer?.watchNextTabbedResultsRenderer?.tabs?.forEach(tabs => {
      if (tabs.tabRenderer?.endpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == "MUSIC_PAGE_TYPE_TRACK_RELATED")
        browserId = tabs.tabRenderer?.endpoint?.browseEndpoint.browseId ?? null
    })

    response.contents?.singleColumnMusicWatchNextResultsRenderer?.tabbedRenderer?.watchNextTabbedResultsRenderer?.tabs?.forEach(tabs => {
      if (tabs.tabRenderer?.title?.toLowerCase() === "up next") {
        tabs.tabRenderer.content?.musicQueueRenderer?.content?.playlistPanelRenderer?.contents?.forEach(items => {
          const name = items.playlistPanelVideoRenderer?.title?.runs?.[0].text
          const thumbnail = items?.playlistPanelVideoRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace('w120-h120-', 'w512-h512-')
          const artists = items.playlistPanelVideoRenderer?.shortBylineText?.runs?.[0].text?.replaceAll("and", "&")
          const id = items.playlistPanelVideoRenderer?.videoId

          if (name != undefined && id != undefined) musicData.push(new MusicData(name, artists ?? "", id, thumbnail ?? "", MusicType.ALBUM))
        })
      }
    })

    return [musicData, browserId]
  }

  async songsSearch(search: string): Promise<MusicData[]> {
    const list: MusicData[] = []

    const r = await fetch(yt_music_search, { method: 'POST', headers: ytMusicHeader, body: ytMusicBodyWithParams(search, all_search_params) })
    const response = (await r.json()) as YtMusicSearchResponse
    response?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tabs) => {
      tabs?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
        contents.musicShelfRenderer?.contents?.forEach((musicContents) => {
          const thumbnail = musicContents?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.findLast((t) => t.height == 120)?.url?.replace('w120-h120-', 'w512-h512-')
          let name: string | null
          let songId: string | null
          let artistsName: string[] = []
          musicContents?.musicResponsiveListItemRenderer?.flexColumns?.forEach((names) => {
            const info = names.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]
            if (info?.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType == 'MUSIC_VIDEO_TYPE_ATV') {
              name = info.text ?? null
              songId = info.navigationEndpoint?.watchEndpoint?.videoId ?? null
            }
            if (info?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == 'MUSIC_PAGE_TYPE_ARTIST') {
              if (info.text != undefined && info.text.trim() != '') artistsName.push(info.text)
            }
          })

          if (artistsName.length == 0) {
            try {
              const a = musicContents?.musicResponsiveListItemRenderer?.flexColumns?.[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.text
              artistsName.push(a ?? '')
            } catch (error) {
              error
            }
          }

          list.push(new MusicData(name!, joinArtists(artistsName), songId!, thumbnail!, MusicType.MUSIC))
        })
      })
    })

    return list
  }
}