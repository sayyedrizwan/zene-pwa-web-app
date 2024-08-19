import axios from "axios";
import {
  isYear,
  ytMusicBrowse,
  ytMusicBrowseID,
  ytMusicBrowseIDWithParam,
  ytMusicGridListParam,
  ytMusicHeader,
  ytMusicIDWithParam,
  ytMusicInput,
  ytMusicMoodAndGenresCategoryParam,
  ytMusicMoodAndGenresParam,
  ytMusicNext,
  ytMusicPlayer,
  ytMusicPlaylistSongs,
  ytMusicQueryWithParam,
  ytMusicSearch,
  ytMusicSearchAlbumsParam,
  ytMusicSearchArtistsParam,
  ytMusicSearchPlaylistParam,
  ytMusicSearchSongParam,
  ytMusicSearchSuggestions,
  ytMusicSongID,
  ytMusicvideoID,
} from "../../utils/Utils";
import type { YTMusicSimilar } from "./model/YTMusicSimilar";
import type { YTMusicPlaylists } from "./model/YTMusicPlaylists";
import { MusicData, MUSICTYPE } from "../model/MusicData";
import { YTMusicSimiarId } from "./model/YTMusicSimiarId";
import type { YTMusicSearch } from "./model/YTMusicSearch";
import type { YTMusicReleasePlaylists } from "./model/YTMusicReleasePlaylists";
import type { YTMusicMood } from "./model/YTMusicMood";
import type { YTMusicMoodInfo } from "./model/YTMusicMoodInfo";
import { filterThumbnailURL } from "../../utils/extension/String";
import type { YTMusicSongsDetails } from "./model/YTMusicSongsDetails";
import type { YTMusicSearchPagination } from "./model/YTMusicSearchPagination";
import type { YTMusicSearchSuggestions } from "./model/YTMusicSearchSuggestions";
import { MoodplaylistData, MoodplaylistDataItems } from "../model/MoodplaylistData";
import type { YTArtistsData } from "./model/YTArtistsData";
import { YTArtistsSaveData } from "./model/YTArtistsSaveData";
import type { YTSearchWholeInfoData } from "./model/YTSearchWholeInfoData";

export class YoutubeMusicService {
  static instance = new YoutubeMusicService();

  async releasePlaylists(id: string): Promise<String[]> {
    let lists: String[] = [];
    let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(`VL${id}`) };

    try {
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicReleasePlaylists;

      data.contents?.twoColumnBrowseResultsRenderer?.secondaryContents?.sectionListRenderer?.contents?.forEach((c) => {
        c.musicPlaylistShelfRenderer?.contents?.forEach((cc) => {
          const name = cc?.musicResponsiveListItemRenderer?.flexColumns?.[0].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.text;
          const artists = cc?.musicResponsiveListItemRenderer?.flexColumns?.[1].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.text;

          if (name != undefined) lists.push(`${name} - ${artists ?? ""}`);
        });
      });

      return lists;
    } catch (error) {
      return [];
    }
  }

  async similarPlaylist(id: string): Promise<MusicData[] | undefined> {
    const playlistID = await this.similarIds(id);
    try {
      let lists: MusicData[] = [];
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(String(playlistID.related)) };

      const response = await axios.request(config);
      const data = (await response.data) as YTMusicPlaylists;
      data?.contents?.sectionListRenderer?.contents?.forEach((c) => {
        if (c?.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label == "Recommended playlists") {
          c?.musicCarouselShelfRenderer?.contents?.forEach((content) => {
            const thumbnail = content?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
            const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
            const name = content?.musicTwoRowItemRenderer?.title?.runs?.[0].text ?? "";
            const id = content?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;
            let artists = "";
            content?.musicTwoRowItemRenderer?.subtitle?.runs?.forEach((a) => {
              if (!a?.text?.includes("Playlist") && !a?.text?.includes("•") && !a?.text?.includes("views") && !a?.text?.includes("YouTube Music")) artists += artists == "" ? a.text : `, ${a.text}`;
            });

            if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.PLAYLIST));
          });
        }
      });
      return lists;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async similarAlbums(id: string): Promise<MusicData[] | undefined> {
    const releatedID = await this.similarIds(id);
    try {
      let lists: MusicData[] = [];
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(String(releatedID.related)) };

      const response = await axios.request(config);
      const data = (await response.data) as YTMusicPlaylists;
      data?.contents?.sectionListRenderer?.contents?.forEach((c) => {
        if (c?.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label?.includes("MORE FROM")) {
          c?.musicCarouselShelfRenderer?.contents?.forEach((content) => {
            const thumbnail = content?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
            const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
            const name = content?.musicTwoRowItemRenderer?.title?.runs?.[0].text ?? "";
            const id = content?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;
            let artists = "";
            content?.musicTwoRowItemRenderer?.subtitle?.runs?.forEach((a) => {
              if (isYear(a.text ?? "") && artists == "") artists = a.text ?? "";
            });

            if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.ALBUMS));
          });
        }
      });
      return lists;
    } catch (error) {
      return [];
    }
  }

  async similarSongs(id: string): Promise<MusicData[] | undefined> {
    const releatedID = await this.similarIds(id);
    try {
      let lists: MusicData[] = [];
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(String(releatedID.related)) };

      const response = await axios.request(config);
      const data = (await response.data) as YTMusicPlaylists;
      data?.contents?.sectionListRenderer?.contents?.forEach((c) => {
        if (c?.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label == "You might also like") {
          c?.musicCarouselShelfRenderer?.contents?.forEach((content) => {
            const thumbnail = content?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
            const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
            const name = content?.musicTwoRowItemRenderer?.title?.runs?.[0].text ?? "";
            const id = content?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;
            let artists = "";
            content?.musicTwoRowItemRenderer?.subtitle?.runs?.forEach((a) => {
              if (isYear(a.text ?? "") && artists == "") artists = a.text ?? "";
            });

            if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.SONGS));
          });
        }
      });
      return lists;
    } catch (error) {
      return [];
    }
  }

  async upNextSongs(id: string): Promise<MusicData[]> {
    let lists: MusicData[] = [];
    try {
      let config = { method: "post", url: ytMusicNext, headers: ytMusicHeader, data: ytMusicPlaylistSongs(id) };

      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSimilar;
      data?.contents?.singleColumnMusicWatchNextResultsRenderer?.tabbedRenderer?.watchNextTabbedResultsRenderer?.tabs?.forEach((t) => {
        if (t?.tabRenderer?.title?.toLocaleLowerCase() == "up next") {
          t?.tabRenderer?.content?.musicQueueRenderer?.content?.playlistPanelRenderer?.contents?.forEach((m) => {
            const name = m?.playlistPanelVideoRenderer?.title?.runs?.[0].text ?? "";
            const thumbnail = m.playlistPanelVideoRenderer?.thumbnail?.thumbnails ?? [];
            const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
            const id = m.playlistPanelVideoRenderer?.videoId;
            const artists = m?.playlistPanelVideoRenderer?.shortBylineText?.runs?.[0]?.text ?? "";

            if (id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.SONGS));
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
    return lists;
  }

  async lyricsOfVideo(id: string): Promise<String> {
    const releatedID = await this.similarIds(id);
    let lyrics: string = "";

    try {
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(String(releatedID.lyrics)) };

      const response = await axios.request(config);
      const data = (await response.data) as YTMusicPlaylists;
      lyrics = data.contents?.sectionListRenderer?.contents?.[0].musicDescriptionShelfRenderer?.description?.runs?.[0].text ?? "";
      return lyrics;
    } catch (error) {
      return "";
    }
  }

  private async similarIds(id: string): Promise<YTMusicSimiarId> {
    const similar = new YTMusicSimiarId("", "", "");
    try {
      let config = { method: "post", url: ytMusicNext, headers: ytMusicHeader, data: ytMusicvideoID(id) };

      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSimilar;
      data?.contents?.singleColumnMusicWatchNextResultsRenderer?.tabbedRenderer?.watchNextTabbedResultsRenderer?.tabs?.forEach((t) => {
        if (t?.tabRenderer?.title?.toLocaleLowerCase() == "related" && similar.related == "") similar.related = t?.tabRenderer?.endpoint?.browseEndpoint?.browseId ?? "";

        if (t?.tabRenderer?.title?.toLocaleLowerCase() == "lyrics" && similar.lyrics == "") similar.lyrics = t.tabRenderer.endpoint?.browseEndpoint?.browseId ?? "";
      });
    } catch (error) {
      console.log(error);
    }
    return similar;
  }

  async searchSongs(q: string, searchMore: Boolean = false): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytMusicSearch, headers: ytMusicHeader, data: ytMusicBrowseIDWithParam(q, ytMusicSearchSongParam) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSearch;

      let list: MusicData[] = [];
      let token: String = "";
      let trackingParams: String = "";
      data?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tab) => {
        tab?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
          if (contents?.musicShelfRenderer?.title?.runs?.[0].text == "Songs") {
            contents?.musicShelfRenderer?.contents?.forEach((c) => {
              const thumbnail = c?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = c?.musicResponsiveListItemRenderer?.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";
              const id = c?.musicResponsiveListItemRenderer?.playlistItemData?.videoId;
              const artists = c?.musicResponsiveListItemRenderer?.flexColumns?.[1].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";

              if (id != undefined) list.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.SONGS));
            });
          }

          if (contents.musicShelfRenderer?.continuations != undefined) {
            contents.musicShelfRenderer.continuations?.forEach((t) => {
              token = t.nextContinuationData?.continuation ?? "";
              trackingParams = t.nextContinuationData?.clickTrackingParams ?? "";
            });
          }
        });
      });

      if (searchMore && token != "" && trackingParams != "") {
        let url = new URL(ytMusicSearch);
        url.searchParams.set("ctoken", token.toString());
        url.searchParams.set("continuation", token.toString());
        url.searchParams.set("type", "next");
        url.searchParams.set("itct", trackingParams.toString());

        let config = { method: "post", url: url.toString(), headers: ytMusicHeader, data: ytMusicBrowseIDWithParam(q, ytMusicSearchSongParam) };
        const response = await axios.request(config);
        const data = (await response.data) as YTMusicSearchPagination;

        data.continuationContents?.musicShelfContinuation?.contents?.forEach((c) => {
          const thumbnail = c?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
          const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
          const name = c?.musicResponsiveListItemRenderer?.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";
          const id = c?.musicResponsiveListItemRenderer?.playlistItemData?.videoId;
          const artists = c?.musicResponsiveListItemRenderer?.flexColumns?.[1].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";

          if (id != undefined) list.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.SONGS));
        });
      }

      return list;
    } catch (error) {
      return [];
    }
  }

  async searchArtists(q: string): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytMusicSearch, headers: ytMusicHeader, data: ytMusicBrowseIDWithParam(q, ytMusicSearchArtistsParam) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSearch;

      let list: MusicData[] = [];
      data?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tab) => {
        tab?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
          if (contents?.musicShelfRenderer?.title?.runs?.[0].text == "Artists") {
            contents?.musicShelfRenderer?.contents?.forEach((c) => {
              const thumbnail = c?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = c?.musicResponsiveListItemRenderer?.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";
              const id = c?.musicResponsiveListItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

              if (id != undefined) list.push(new MusicData(name, name, id, highestThumbnail, MUSICTYPE.ARTISTS));
            });
          }
        });
      });
      return list;
    } catch (error) {
      return [];
    }
  }

  async searchArtistsSpecific(q: string): Promise<MusicData | undefined> {
    try {
      let config = { method: "post", url: ytMusicSearch, headers: ytMusicHeader, data: ytMusicBrowseIDWithParam(q, ytMusicSearchArtistsParam) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSearch;

      let list: MusicData | undefined = undefined;
      data?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tab) => {
        tab?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
          if (contents?.musicShelfRenderer?.title?.runs?.[0].text == "Artists") {
            contents?.musicShelfRenderer?.contents?.forEach((c) => {
              const thumbnail = c?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = c?.musicResponsiveListItemRenderer?.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";
              const id = c?.musicResponsiveListItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

              if (id != undefined && list == undefined) list = new MusicData(name, name, id, highestThumbnail, MUSICTYPE.ARTISTS);
            });
          }
        });
      });
      return list;
    } catch (error) {
      return undefined;
    }
  }

  async searchAlbums(q: string): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytMusicSearch, headers: ytMusicHeader, data: ytMusicBrowseIDWithParam(q, ytMusicSearchAlbumsParam) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSearch;

      let list: MusicData[] = [];
      data?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tab) => {
        tab?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
          if (contents?.musicShelfRenderer?.title?.runs?.[0].text == "Albums") {
            contents?.musicShelfRenderer?.contents?.forEach((c) => {
              const thumbnail = c?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = c?.musicResponsiveListItemRenderer?.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";
              const id = c?.musicResponsiveListItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

              let artists = "";
              c?.musicResponsiveListItemRenderer?.flexColumns?.forEach((f) => {
                f.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.forEach((a) => {
                  if (isYear(a.text ?? "") && artists == "") artists = a.text ?? "";
                });
              });

              if (id != undefined) list.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.ALBUMS));
            });
          }
        });
      });
      return list;
    } catch (error) {
      return [];
    }
  }

  async searchPlaylists(q: string): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytMusicSearch, headers: ytMusicHeader, data: ytMusicBrowseIDWithParam(q, ytMusicSearchPlaylistParam) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSearch;

      let list: MusicData[] = [];
      data?.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tab) => {
        tab?.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((contents) => {
          if (contents?.musicShelfRenderer?.title?.runs?.[0].text == "Community playlists") {
            contents?.musicShelfRenderer?.contents?.forEach((c) => {
              const thumbnail = c?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = c?.musicResponsiveListItemRenderer?.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text ?? "";
              const id = c?.musicResponsiveListItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

              if (id != undefined) list.push(new MusicData(name, name, id, highestThumbnail, MUSICTYPE.PLAYLIST));
            });
          }
        });
      });
      return list;
    } catch (error) {
      return [];
    }
  }

  async playlistsData(id: string): Promise<[MusicData | undefined, MusicData[] | undefined]> {
    let playlistData: MusicData | undefined = undefined;
    let playlistMusic: MusicData[] = [];

    try {
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(id) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicReleasePlaylists;

      data.contents?.twoColumnBrowseResultsRenderer?.tabs?.forEach((t) => {
        t.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((c) => {
          const thumbnail = c?.musicResponsiveHeaderRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
          const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
          const name = c.musicResponsiveHeaderRenderer?.title?.runs?.[0].text;
          let artists = "";
          let isAlbum = false;
          c.musicResponsiveHeaderRenderer?.subtitle?.runs?.forEach((t) => {
            if ((t.text == "Album" || t.text == "EP") && !isAlbum) isAlbum = true;
            if (isYear(t.text ?? "") && artists == "") artists = t.text ?? "";
          });

          const desc = c.musicResponsiveHeaderRenderer?.description?.musicDescriptionShelfRenderer?.description?.runs?.[0].text;

          if (name != undefined) playlistData = new MusicData(name, artists, id, highestThumbnail, isAlbum ? MUSICTYPE.ALBUMS : MUSICTYPE.PLAYLIST, desc);
        });
      });

      data.contents?.twoColumnBrowseResultsRenderer?.secondaryContents?.sectionListRenderer?.contents?.forEach((e) => {
        e.musicPlaylistShelfRenderer?.contents?.forEach((c) => {
          const thumbnail = c?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
          const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;

          const name = c.musicResponsiveListItemRenderer?.flexColumns?.[0].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text;
          const artists = c.musicResponsiveListItemRenderer?.flexColumns?.[1].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text;

          const id = c.musicResponsiveListItemRenderer?.playlistItemData?.videoId;

          if (id != undefined) playlistMusic.push(new MusicData(name ?? "", artists ?? "", id, highestThumbnail, MUSICTYPE.SONGS));
        });
      });

      data.contents?.twoColumnBrowseResultsRenderer?.secondaryContents?.sectionListRenderer?.contents?.forEach((e) => {
        e.musicShelfRenderer?.contents?.forEach((c) => {
          const name = c.musicResponsiveListItemRenderer?.flexColumns?.[0].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text;
          const artists = c.musicResponsiveListItemRenderer?.flexColumns?.[1].musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0].text;
          const id = c.musicResponsiveListItemRenderer?.playlistItemData?.videoId;
          if (id != undefined) playlistMusic.push(new MusicData(name ?? "", artists ?? "", id, "", MUSICTYPE.SONGS));
        });
      });

      return [playlistData, playlistMusic];
    } catch (error) {
      return [undefined, undefined];
    }
  }

  async listGridData(id: string): Promise<MusicData[]> {
    let lists: MusicData[] = [];

    try {
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicIDWithParam(id, ytMusicGridListParam) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicMood;

      data.contents?.singleColumnBrowseResultsRenderer?.tabs?.forEach((t) => {
        t.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((c) => {
          c.gridRenderer?.items?.forEach((i) => {
            const thumbnail = i.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail.thumbnails ?? [];
            const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;

            const name = i.musicTwoRowItemRenderer?.title?.runs?.[0]?.text;
            const id = i.musicTwoRowItemRenderer?.navigationEndpoint.browseEndpoint.browseId;
            let artists = "";
            let isAlbum = false;
            i.musicTwoRowItemRenderer?.subtitle?.runs?.forEach((t) => {
              if ((t.text == "Album" || t.text == "EP") && !isAlbum) isAlbum = true;
              if (isYear(t.text ?? "") && artists == "") artists = t.text ?? "";
            });

            if (name != undefined && id != undefined) lists.push(new MusicData(name, artists, id, highestThumbnail, isAlbum ? MUSICTYPE.ALBUMS : MUSICTYPE.PLAYLIST));
          });
        });
      });

      return lists;
    } catch (e) {
      return [];
    }
  }

  async searchKeywords(q: string): Promise<String[]> {
    try {
      let config = { method: "post", url: ytMusicSearchSuggestions, headers: ytMusicHeader, data: ytMusicInput(q) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSearchSuggestions;

      let list: String[] = [];

      data.contents?.forEach((c) => {
        c.searchSuggestionsSectionRenderer?.contents?.forEach((s) => {
          let q = s.searchSuggestionRenderer?.navigationEndpoint?.searchEndpoint?.query;
          if (q != undefined) list.push(q);
        });
      });

      if (list.length > 1) {
        let config = { method: "post", url: ytMusicSearchSuggestions, headers: ytMusicHeader, data: ytMusicInput(list?.[1].toString()) };
        const response = await axios.request(config);
        const data = (await response.data) as YTMusicSearchSuggestions;

        data.contents?.forEach((c) => {
          c.searchSuggestionsSectionRenderer?.contents?.forEach((s) => {
            let q = s.searchSuggestionRenderer?.navigationEndpoint?.searchEndpoint?.query;
            if (q != undefined && !list.some((item) => item === q)) list.push(q);
          });
        });
      }

      return list;
    } catch (error) {
      return [];
    }
  }

  async allMoods(): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(ytMusicMoodAndGenresParam) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicMood;

      let list: MusicData[] = [];
      data.contents?.singleColumnBrowseResultsRenderer?.tabs?.forEach((t) => {
        t.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((c) => {
          c.gridRenderer?.items?.forEach((i) => {
            const name = i.musicNavigationButtonRenderer?.buttonText?.runs?.[0].text;
            const id = i.musicNavigationButtonRenderer?.clickCommand?.browseEndpoint?.browseId;
            const params = i.musicNavigationButtonRenderer?.clickCommand?.browseEndpoint?.params;

            if (name != undefined && id != undefined && params != undefined) list.push(new MusicData(name, name, params, "", MUSICTYPE.MOOD, id));
          });
        });
      });

      return list;
    } catch (error) {
      return [];
    }
  }

  async moodData(params: String): Promise<MoodplaylistData | undefined> {
    try {
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicIDWithParam(ytMusicMoodAndGenresCategoryParam, params.toString()) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicMoodInfo;
      let moodData: MoodplaylistData = new MoodplaylistData("", []);
      moodData.name = data.header?.musicHeaderRenderer?.title?.runs?.[0]?.text ?? "";
      let itemsLists: MoodplaylistDataItems[] = [];

      data.contents?.singleColumnBrowseResultsRenderer?.tabs?.forEach((t) => {
        t.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((c) => {
          let topName = c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label ?? "";
          let lists: MusicData[] = [];
          c.musicCarouselShelfRenderer?.contents?.forEach((m) => {
            const thumbnail = m?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
            const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
            const name = m?.musicTwoRowItemRenderer?.title?.runs?.[0]?.text;
            const id = m?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

            if (name != undefined && id != undefined) {
              lists.push(new MusicData(name, name, id, highestThumbnail, MUSICTYPE.PLAYLIST));
            }
          });

          itemsLists.push(new MoodplaylistDataItems(topName, lists));
        });
      });
      moodData.list = itemsLists;
      return moodData;
    } catch (error) {
      return undefined;
    }
  }

  async songInfo(VID: string): Promise<MusicData | undefined> {
    try {
      let config = { method: "post", url: ytMusicPlayer, headers: ytMusicHeader, data: ytMusicSongID(VID) };
      const response = await axios.request(config);
      const data = (await response.data) as YTMusicSongsDetails;

      const id = data.videoDetails?.videoId;
      const name = data.videoDetails?.title;
      const thumbnail = data.videoDetails?.thumbnail?.thumbnails ?? [];
      const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
      const artists = data.videoDetails?.author?.replaceAll(" and ", " & ") ?? "";

      return id != undefined && name != undefined ? new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.SONGS) : undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async songInfoViaSearch(VID: string): Promise<MusicData | undefined> {
    try {
      let config = { method: "post", url: ytMusicSearch, headers: ytMusicHeader, data: ytMusicQueryWithParam(VID) };
      const response = await axios.request(config);
      const data = (await response.data) as YTSearchWholeInfoData;

      let mData: MusicData | undefined = undefined;

      data.contents?.tabbedSearchResultsRenderer?.tabs?.forEach((tab) => {
        tab.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((c) => {
          if (c?.musicShelfRenderer?.contents != undefined) {
            c?.musicShelfRenderer?.contents?.forEach((cont) => {
              const thumbnail = cont?.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              let name = "";
              let vID = "";
              let artists: String[] = [];

              cont?.musicResponsiveListItemRenderer?.flexColumns?.forEach((a) => {
                a.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.forEach((aName) => {
                  const type = aName.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType;
                  if (type == "MUSIC_VIDEO_TYPE_ATV") {
                    if (aName.text != undefined && aName.navigationEndpoint?.watchEndpoint?.videoId != undefined) {
                      name = aName.text;
                      vID = aName.navigationEndpoint?.watchEndpoint?.videoId;
                    }
                  } else if (type == "MUSIC_PAGE_TYPE_ARTIST") {
                    if (aName.text != undefined) artists.push(aName.text);
                  }
                });
              });

              if (mData == undefined && VID.trim() == vID.trim()) {
                const joinListWithAnd = (items: String[]): string => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} & ${items[items.length - 1]}`);

                mData = new MusicData(name, joinListWithAnd(artists), vID, highestThumbnail, MUSICTYPE.SONGS);
              }
            });
          } 
          
          if (c?.musicCardShelfRenderer != undefined) {
            const thumbnail = c?.musicCardShelfRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
            const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;

            let name = "";
            let vID = "";
            let artists: String[] = [];

            console.log(highestThumbnail);

            c?.musicCardShelfRenderer?.title?.runs?.forEach((t) => {
              if (t.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType == "MUSIC_VIDEO_TYPE_ATV") {
                if (t.text != undefined && t.navigationEndpoint.watchEndpoint.videoId != undefined) {
                  name = t.text;
                  vID = t.navigationEndpoint?.watchEndpoint?.videoId;
                }
              }
            });

            c?.musicCardShelfRenderer?.subtitle?.runs?.forEach((t) => {
              if (t.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType == "MUSIC_PAGE_TYPE_ARTIST") {
                if (t.text != undefined) {
                  artists.push(t.text);
                }
              }
            });

            if (mData == undefined && VID.trim() == vID.trim()) {
              const joinListWithAnd = (items: String[]): string => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} & ${items[items.length - 1]}`);

              mData = new MusicData(name, joinListWithAnd(artists), vID, highestThumbnail, MUSICTYPE.SONGS);
            }
          }
        });
      });

      return mData;
    } catch (error) {
      return undefined;
    }
  }

  async artistsPageData(channelID: string): Promise<YTArtistsSaveData | undefined> {
    try {
      let config = { method: "post", url: ytMusicBrowse, headers: ytMusicHeader, data: ytMusicBrowseID(channelID) };
      const response = await axios.request(config);
      const data = (await response.data) as YTArtistsData;

      let saveData: YTArtistsSaveData = new YTArtistsSaveData("", [], "", [], "", [], "", [], []);

      data.contents?.singleColumnBrowseResultsRenderer?.tabs?.forEach((t) => {
        t.tabRenderer?.content?.sectionListRenderer?.contents?.forEach((c) => {
          c.musicShelfRenderer?.title?.runs?.forEach(async (e) => {
            if (e.text == "Songs") {
              if (e.navigationEndpoint?.browseEndpoint?.browseId != undefined) {
                saveData.songPlaylistID = e.navigationEndpoint?.browseEndpoint?.browseId ?? "";
              }
            }
          });

          if (c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label == "Albums") {
            let albumsList: MusicData[] = [];
            c.musicCarouselShelfRenderer.contents?.forEach((m) => {
              const thumbnail = m?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = m?.musicTwoRowItemRenderer?.title?.runs?.[0]?.text;
              const id = m?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

              let artists = "";
              m?.musicTwoRowItemRenderer?.subtitle?.runs?.forEach((a) => {
                if (isYear(a.text ?? "") && artists == "") artists = a.text ?? "";
              });
              if (id != undefined && name != undefined) albumsList.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.ALBUMS));
            });

            saveData.albumsID = c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.title?.runs?.[0].navigationEndpoint?.browseEndpoint?.browseId ?? "";
            saveData.albumsItems = albumsList;
          }

          if (c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label == "Videos") {
            let videoList: MusicData[] = [];
            c.musicCarouselShelfRenderer.contents?.forEach((m) => {
              const thumbnail = m?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = m?.musicTwoRowItemRenderer?.title?.runs?.[0]?.text;
              const id = m?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

              let artists = "";
              m.musicTwoRowItemRenderer?.subtitle?.runs?.forEach((a) => {
                artists += a.text;
              });

              if (id != undefined && name != undefined) videoList.push(new MusicData(name, artists, id, highestThumbnail, MUSICTYPE.VIDEO, id));
            });

            saveData.videoID = c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.title?.runs?.[0].navigationEndpoint?.browseEndpoint?.browseId ?? "";
            saveData.videoItems = videoList;
          }

          if (c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label == "Featured on") {
            let playlistList: MusicData[] = [];
            c.musicCarouselShelfRenderer.contents?.forEach((m) => {
              const thumbnail = m?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = m?.musicTwoRowItemRenderer?.title?.runs?.[0]?.text;
              const id = m?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;

              if (id != undefined && name != undefined) playlistList.push(new MusicData(name, "", id, highestThumbnail, MUSICTYPE.PLAYLIST));
            });

            saveData.playlistID = c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.title?.runs?.[0].navigationEndpoint?.browseEndpoint?.browseId ?? "";
            saveData.playlistItems = playlistList;
          }

          if (c.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.accessibilityData?.accessibilityData?.label == "Fans might also like") {
            let similarArtists: MusicData[] = [];
            c.musicCarouselShelfRenderer.contents?.forEach((m) => {
              const thumbnail = m?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails ?? [];
              const highestThumbnail = `${filterThumbnailURL(thumbnail[0].url ?? "")}=w544-h544-l90-rj`;
              const name = m?.musicTwoRowItemRenderer?.title?.runs?.[0]?.text;
              const id = m?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId;
              if (id != undefined && name != undefined) similarArtists.push(new MusicData(name, name, id, highestThumbnail, MUSICTYPE.ARTISTS));
            });

            saveData.artistsItems = similarArtists;
          }
        });
      });

      return saveData;
    } catch (error) {
      return undefined;
    }
  }
}
