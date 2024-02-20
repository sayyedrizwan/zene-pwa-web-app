<script lang="ts">
  import { browser } from '$app/environment'
  import AlbumsLIstsInfo from '$lib/components/album-page/AlbumsLIstsInfo.svelte'
  import AlbumsMusicsLists from '$lib/components/album-page/AlbumsMusicsLists.svelte'
  import TopAlbumsInfo from '$lib/components/album-page/TopAlbumsInfo.svelte'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'
  import type { MusicData } from '../../../domain/local/entities/MusicData'

  export let data: any

  const albumInfo = data.info as MusicData

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
  <title>{albumInfo?.name ?? 'Album'} Album on Zene: A free music app</title>
  <meta name="description" content={albumInfo?.songId?.length ?? 0 > 140 ? `${albumInfo?.songId?.substring(0, 139)}....` : albumInfo?.songId} />
  <meta name="og:description" content={albumInfo?.songId?.length ?? 0 > 140 ? `${albumInfo?.songId?.substring(0, 139)}....` : albumInfo?.songId} />
  <meta property="og:title" content="{albumInfo?.name ?? 'Album'} Album on Zene" />
  <meta property="og:image" content={albumInfo?.thumbnail} />
  <meta property="og:image:alt" content={`${albumInfo?.name} on Zene`} />
  <link rel="canonical" href={`https://zenemusic.co/album/${data.url}`} />
</svelte:head>

{#if key != null}
  <div class="w-full">
    <TopAlbumsInfo {albumInfo} />

    <AlbumsLIstsInfo {key} name={`${albumInfo?.name} - ${albumInfo.artists}`} />

    <AlbumsMusicsLists {key} {url} />
  </div>

  <div class="h-60" />
{/if}
