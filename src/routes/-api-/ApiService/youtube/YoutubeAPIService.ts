import axios from "axios";
import { YT_COMMUNITY_PARAMS, YT_SHORTS_PARAMS, YT_SONG_AS_PLAYLISTS_PARAMS, YT_STORE_PARAMS, ytBrowse, ytBrowseQuery, ytBrowseQueryParams, ytHeader, ytNext, ytNextQuery, ytQueryParams, ytSearch } from "../../utils/Utils";
import type { YTSearchData } from "./model/YTSearchData";
import { MusicData, MUSICTYPE } from "../model/MusicData";
import type { YTStoreData } from "./model/YTStoreData";
import { convertDateAgoToTS, substringAfter, substringBefore } from "../../utils/extension/String";
import type { YTCommunityData } from "./model/YTCommunityData";
import { FEEDTYPE, ZenePostsData } from "../model/ZenePostsData";
import type { YTShortsData } from "./model/YTShortsData";

export class YoutubeAPIService {
  static instance = new YoutubeAPIService();

  async searchVideoIDFirst(q: String): Promise<String> {
    try {
      let config = { method: "post", url: ytSearch, headers: ytHeader, data: ytBrowseQuery(q.toString()) };
      const response = await axios.request(config);
      const data = (await response.data) as YTSearchData;

      let vID = "";

      data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach((e) => {
        if (vID == "") vID = e.itemSectionRenderer?.contents?.[0].videoRenderer?.videoId ?? "";
      });

      return vID;
    } catch (error) {
      return "";
    }
  }

  async searchVideos(q: String, addOnlyThree: Boolean = false): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytSearch, headers: ytHeader, data: ytBrowseQuery(q.toString()) };
      const response = await axios.request(config);
      const data = (await response.data) as YTSearchData;

      const list: MusicData[] = [];

      data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach((e) => {
        e.itemSectionRenderer?.contents?.forEach((v) => {
          if (v.videoRenderer != undefined) {
            const vID = v.videoRenderer?.videoId;
            const name = v.videoRenderer.title?.runs?.[0].text;
            const artists = v.videoRenderer.longBylineText?.runs?.[0].text;
            const thumbnail = `https://i.ytimg.com/vi/${vID}/sddefault.jpg`;

            if (vID != undefined && name != undefined) list.push(new MusicData(name, artists ?? "", vID, thumbnail, MUSICTYPE.VIDEO, vID));
          }
        });
      });

      return addOnlyThree ? list.slice(0, 5) : list;
    } catch (error) {
      return [];
    }
  }

  async searchVideosPlaylist(q: String): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytSearch, headers: ytHeader, data: ytQueryParams(q.toString(), YT_SONG_AS_PLAYLISTS_PARAMS) };
      const response = await axios.request(config);
      const datas = (await response.data) as YTSearchData;

      const list: MusicData[] = [];

      datas.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach((e) => {
        e.itemSectionRenderer?.contents?.forEach((v) => {
          if (v.videoRenderer != undefined) {
            const vID = v.videoRenderer?.videoId;
            const name = v.videoRenderer.title?.runs?.[0].text;
            const artists = v.videoRenderer.longBylineText?.runs?.[0].text;
            const thumbnail = `https://i.ytimg.com/vi/${vID}/sddefault.jpg`;

            if (vID != undefined && name != undefined) list.push(new MusicData(name, artists ?? "", vID, thumbnail, MUSICTYPE.VIDEO, vID));
          }
        });
      });
      return list.length > 5 ? list.slice(0, 5) : list;
    } catch (error) {
      return [];
    }
  }

  async relatedVideo(vID: string) : Promise<MusicData[]> {
    try {
      const lists : MusicData[] = []
      let config = { method: "post", url: ytNext, headers: ytHeader, data: ytNextQuery(vID) };
      const response = await axios.request(config);
      const data = (await response.data) as YTNextRelatedData;

      data.contents?.twoColumnWatchNextResults?.secondaryResults?.secondaryResults?.results?.forEach(e => {
        const id = e.compactVideoRenderer?.videoId
        const name = e.compactVideoRenderer?.title?.simpleText ?? ""
        const artists = e.compactVideoRenderer?.longBylineText?.runs?.[0].text ?? ""
        const finalName = name.includes(artists) ? substringAfter(name, " -").trim() : name
        const thumbnail = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;

        if (id != undefined) lists.push(new MusicData(finalName, artists, id, thumbnail, MUSICTYPE.VIDEO, id))
      });

      return lists
    } catch (error) {
      return []
    }
  }
  async merchandises(q: String): Promise<MusicData[]> {
    try {
      let config = { method: "post", url: ytSearch, headers: ytHeader, data: ytBrowseQuery(q.toString()) };
      const response = await axios.request(config);
      const data = (await response.data) as YTSearchData;

      let channelID = "";

      data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach((e) => {
        e.itemSectionRenderer?.contents?.[0].videoRenderer?.longBylineText?.runs?.forEach((e) => {
          if (e.navigationEndpoint?.commandMetadata?.webCommandMetadata?.webPageType == "WEB_PAGE_TYPE_CHANNEL" && channelID == "") {
            channelID = e.navigationEndpoint.browseEndpoint?.browseId ?? "";
          }
        });
      });

      let configStore = { method: "post", url: ytBrowse, headers: ytHeader, data: ytBrowseQueryParams(channelID, YT_STORE_PARAMS) };
      const responseStore = await axios.request(configStore);
      const dataStore = (await responseStore.data) as YTStoreData;

      let storeList: MusicData[] = [];

      dataStore.contents?.twoColumnBrowseResultsRenderer?.tabs?.forEach((t) => {
        if (t.tabRenderer?.title == "Store") {
          t.tabRenderer.content?.sectionListRenderer?.contents?.forEach((c) => {
            c.itemSectionRenderer?.contents?.forEach((i) => {
              i.shelfRenderer?.content?.gridRenderer?.items?.forEach((store) => {
                const name = store.verticalProductCardRenderer?.title;
                const thumbnail = store.verticalProductCardRenderer?.thumbnail?.thumbnails?.[0].url;
                let link = "";
                store.verticalProductCardRenderer?.navigationEndpoint?.commandExecutorCommand?.commands?.forEach((c) => {
                  if (link == "") link = c.urlEndpoint?.url ?? "";
                });

                const price = store.verticalProductCardRenderer?.price;

                if (name != undefined) storeList.push(new MusicData(name, price ?? "", link, thumbnail ?? "", MUSICTYPE.STORE));
              });
            });
          });
        }
      });

      return storeList;
    } catch (error) {
      return [];
    }
  }

  async youtubeCommunity(user: String): Promise<ZenePostsData[]> {
    const config = { method: "post", url: ytSearch, headers: ytHeader, data: ytBrowseQuery(`${user} channel`) };
    const response = await axios.request(config);
    const data = (await response.data) as YTSearchData;

    let channelID = "";

    data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.forEach((c) => {
      c.itemSectionRenderer?.contents?.forEach((i) => {
        if (i.channelRenderer != undefined && channelID == "" && i.channelRenderer.title?.simpleText?.toString().toLowerCase() == user.toLowerCase()) channelID = i.channelRenderer?.channelId ?? "";
      });
    });

    if (channelID == "") return [];

    const list: ZenePostsData[] = [];

    const configCommunity = { method: "post", url: ytBrowse, headers: ytHeader, data: ytBrowseQueryParams(channelID, YT_COMMUNITY_PARAMS) };
    const resCommunity = await axios.request(configCommunity);
    const responseCommunity = (await resCommunity.data) as YTCommunityData;

    const name = responseCommunity.metadata?.channelMetadataRenderer?.title;
    const username = substringAfter(responseCommunity.metadata?.channelMetadataRenderer?.vanityChannelUrl ?? "", "/@");

    const profilePic = responseCommunity.metadata?.channelMetadataRenderer?.avatar?.thumbnails?.reduce((prev, current) => {
      return (prev.width ?? 0) > (current.width ?? 0) ? prev : current;
    });

    await Promise.all(
      (responseCommunity.contents?.twoColumnBrowseResultsRenderer?.tabs ?? []).map(async (e) => {
        try {
          if (e.tabRenderer?.title == "Community") {
            e.tabRenderer.content?.sectionListRenderer?.contents?.forEach((c) => {
              c.itemSectionRenderer?.contents?.forEach((m) => {
                const postID = m.backstagePostThreadRenderer?.post?.backstagePostRenderer?.postId;
                let mainThumbnail = "";
                const media: string[] = [];

                const vidThumb = m.backstagePostThreadRenderer?.post?.backstagePostRenderer?.backstageAttachment?.videoRenderer;
                const backThumb = m.backstagePostThreadRenderer?.post?.backstagePostRenderer?.backstageAttachment?.backstageImageRenderer;
                const multiThumb = m.backstagePostThreadRenderer?.post?.backstagePostRenderer?.backstageAttachment?.postMultiImageRenderer;

                if (vidThumb != undefined) {
                  let t = vidThumb.thumbnail?.thumbnails?.reduce((prev, current) => {
                    return (prev.width ?? 0) > (current.width ?? 0) ? prev : current;
                  });
                  mainThumbnail = t?.url ?? "";
                  if (t?.url != undefined) media.push(t.url);
                }

                if (backThumb != undefined) {
                  let t = backThumb.image?.thumbnails?.reduce((prev, current) => {
                    return (prev.width ?? 0) > (current.width ?? 0) ? prev : current;
                  });
                  mainThumbnail = t?.url ?? "";
                  if (t?.url != undefined) media.push(t.url);
                }

                if (multiThumb != undefined) {
                  multiThumb.images?.forEach((img) => {
                    img.backstageImageRenderer?.image;

                    let t = img.backstageImageRenderer?.image?.thumbnails?.reduce((prev, current) => {
                      return (prev.width ?? 0) > (current.width ?? 0) ? prev : current;
                    });

                    if (mainThumbnail == "") mainThumbnail = t?.url ?? "";
                    if (t?.url != undefined) media.push(t.url);
                  });
                }

                const timestamp = m.backstagePostThreadRenderer?.post?.backstagePostRenderer?.publishedTimeText?.runs?.[0].text;
                const caption = m.backstagePostThreadRenderer?.post?.backstagePostRenderer?.contentText?.runs?.[0].text;

                list.push(new ZenePostsData(`http://youtube.com/post/${postID}`, mainThumbnail, media, convertDateAgoToTS(timestamp ?? "0"), profilePic?.url ?? "", username ?? "", name ?? "", caption ?? "", FEEDTYPE.YOUTUBE_POSTS));
              });
            });
          }
        } catch (error) {
          error;
        }
      })
    );

    const configShorts = { method: "post", url: ytBrowse, headers: ytHeader, data: ytBrowseQueryParams(channelID, YT_SHORTS_PARAMS) };
    const resShorts = await axios.request(configShorts);
    const responseShorts = (await resShorts.data) as YTShortsData;

    await Promise.all(
      (responseShorts.contents?.twoColumnBrowseResultsRenderer?.tabs ?? []).map(async (e) => {
        try {
          if (e.tabRenderer?.title == "Shorts") {
            await Promise.all(
              (e.tabRenderer.content?.richGridRenderer?.contents ?? []).map(async (e) => {
                const postID = e.richItemRenderer?.content?.reelItemRenderer?.videoId;
                const caption = e.richItemRenderer?.content?.reelItemRenderer?.headline?.simpleText;
                const thumbnail = e.richItemRenderer?.content?.reelItemRenderer?.thumbnail?.thumbnails?.reduce((prev, current) => {
                  return (prev.width ?? 0) > (current.width ?? 0) ? prev : current;
                });

                const timestampResponse = await (await axios.get(`https://www.youtube.com/watch?v=${postID}`)).data;
                const firsTS = substringAfter(timestampResponse.toString(), `"publishedTimeText":{"simpleText":"`);
                const finalTS = substringBefore(firsTS.toString(), `"},`).trim();

                list.push(new ZenePostsData(`https://youtube.com/shorts/${postID}`, thumbnail?.url ?? "", [thumbnail?.url ?? ""], convertDateAgoToTS(finalTS ?? "0"), profilePic?.url ?? "", `@${username}`, name ?? "", caption ?? "", FEEDTYPE.YOUTUBE_POSTS));
              })
            );
          }
        } catch (error) {
          error;
        }
      })
    );

    return list;
  }
}
