<script lang="ts">
  import { browser } from '$app/environment'
  import AlbumsMusicsLists from '$lib/components/album-page/AlbumsMusicsLists.svelte'
  import AlbumsSimilarAlbums from '$lib/components/album-page/AlbumsSimilarAlbums.svelte'
  import TopAlbumsInfo from '$lib/components/album-page/TopAlbumsInfo.svelte'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'
  import type { MusicData } from '../../../domain/local/entities/MusicData'

  export let data: any

  $: albumInfo = data.info as MusicData

  let key: string | null = null
  let ip: IpDetails | null
  let url: string | null

  if (browser) {
    url = data.url
    key = window.atob(data.data)
    if (data.ip != undefined) ip = JSON.parse(data.ip)
  }
</script>

<svelte:head>
  <title>{albumInfo?.name ?? 'Album'} Album on Zene a Music app</title>
  <meta name="description" content={albumInfo?.songId?.length ?? 0 > 140 ? `${albumInfo?.songId?.substring(0, 139)}....` : albumInfo?.songId} />
  <meta name="og:description" content={albumInfo?.songId?.length ?? 0 > 140 ? `${albumInfo?.songId?.substring(0, 139)}....` : albumInfo?.songId} />
  <meta property="og:title" content="{albumInfo?.name ?? 'Album'} Album on Zene" />
  <meta property="og:image" content={albumInfo?.thumbnail} />
  <meta property="og:image:alt" content={`${albumInfo?.name} on Zene`} />
  <link rel="canonical" href={`https://zenemusic.co/album/${data.url}`} />
  <meta name="keywords" content="zene, {albumInfo?.name} on zene, {albumInfo?.name} on zene music, zene music {albumInfo?.name}, {albumInfo?.name} songs, zene free music, zene a free music, {albumInfo?.name} free music, zene, zene songs, zene music, {albumInfo?.name} music streaming, {albumInfo?.name} music streaming app, {albumInfo?.name} free music streaming, {albumInfo?.name} music app for android, {albumInfo?.name} music app for iphone, {albumInfo?.name} music player app, {albumInfo?.name} free music download, {albumInfo?.name} music discovery app, {albumInfo?.name} offline listening, {albumInfo?.name} curated playlists, {albumInfo?.name} high-fidelity audio, {albumInfo?.name} free music streaming with no ads, {albumInfo?.name} workout music app, {albumInfo?.name} music for studying app, {albumInfo?.name} audio streaming, {albumInfo?.name} mobile music app, radio, {albumInfo?.name} radio streaming" />
</svelte:head>

{#if key != null}
  <div class="w-full">
    <TopAlbumsInfo {albumInfo} />

    <AlbumsSimilarAlbums {key} name={`${albumInfo?.name} - ${albumInfo.artists}`} />

    <AlbumsMusicsLists {key} {url} />
  </div>

  <div class="h-60" />
{/if}
