<script lang="ts">
  import { browser } from '$app/environment'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'
  import TopVideoImgInfo from '$lib/components/artists-page/TopVideoImgInfo.svelte'
  import ArtistsImagesView from '$lib/components/artists-page/ArtistsImagesView.svelte'
  import ArtistsTopSongs from '$lib/components/artists-page/ArtistsTopSongs.svelte'
  import AlbumsAndTopSongs from '$lib/components/artists-page/AlbumsAndTopSongs.svelte'
  import ArtistsTopNews from '$lib/components/artists-page/ArtistsTopNews.svelte'
    import { showMusicPlayer } from '$lib/utils/f'

  export let data: any

  $: artistsInfo = data.info as ArtistsInfoData

  let key: string | null = null
  let ip: IpDetails | null
  let url: string | null

  if (browser) {
    showMusicPlayer(false)
    url = data.url
    key = window.atob(data.data)
    if (data.ip != undefined) ip = JSON.parse(data.ip)
  }
</script>

<svelte:head>
  <title>{artistsInfo?.name ?? 'Artists'} on Zene a music app</title>
  <meta name="description" content={artistsInfo?.description?.length ?? 0 > 140 ? `${artistsInfo?.description?.substring(0, 139)}....` : artistsInfo?.description} />
  <meta name="og:description" content={artistsInfo?.description?.length ?? 0 > 140 ? `${artistsInfo?.description?.substring(0, 139)}....` : artistsInfo?.description} />
  <meta property="og:title" content="{artistsInfo?.name} on Zene" />
  <meta property="og:image" content={artistsInfo?.artistsImage} />
  <meta property="og:image:alt" content={`${artistsInfo?.name} on Zene`} />
  <link rel="canonical" href={`https://zenemusic.co/a/${data.url}`} />
</svelte:head>

{#if key != null}
  <div class="bg-gray-950 w-full">
    <TopVideoImgInfo {key} {artistsInfo} {url}/>
    <ArtistsImagesView {key} {artistsInfo} />
    <ArtistsTopNews {key} {artistsInfo} />
    <ArtistsTopSongs {key} {artistsInfo} />
    <AlbumsAndTopSongs {key} {artistsInfo} />
  </div>

  <div class="h-60" />
{/if}
