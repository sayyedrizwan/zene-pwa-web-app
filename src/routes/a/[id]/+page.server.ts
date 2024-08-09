import { decryptSharingData } from "../../-api-/utils/EncrypDecrypt.js"
import { LastFMService } from "../../-api-/ApiService/lastfm/LastFMService.js"
import { MusicData, MUSICTYPE } from "../../-api-/ApiService/model/MusicData.js"
import { YoutubeMusicService } from "../../-api-/ApiService/youtubemusic/YoutubeMusicService.js"

export async function load({ params }) {
  const name = await decryptSharingData(params.id)

  const ytMusicURL = await YoutubeMusicService.instance.searchArtistsSpecific(name)
  const lastFMURL = await LastFMService.instance.searchArtists(name)

  const lastFMWiki = await LastFMService.instance.wiki(lastFMURL) ?? null
  const lastFMImages = await LastFMService.instance.searchImages(lastFMURL, 1)
  
  const desc = ((lastFMWiki?.length ?? 0) > 520 ? `${lastFMWiki?.substring(0, 520)}.....` : lastFMWiki) ?? ""
  const img = (lastFMImages?.length ?? 0) > 0 ? lastFMImages[0] : ytMusicURL?.thumbnail
  const m = new MusicData(ytMusicURL?.name ?? "", desc, "", img ?? "", MUSICTYPE.ARTISTS)
  return { data: JSON.stringify(m), url: params.id }
}
