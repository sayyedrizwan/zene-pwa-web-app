<script lang="ts">
  import { browser } from '$app/environment'
  import CardWithTopMenuIcon from '$lib/components/global-view/items/CardWithTopMenuIcon.svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData.js'
  import type { SpotifyPlaylistsMusicData } from '../../../domain/local/entities/SpotifyPlaylistsMusicData.js'

  export let data: any

  let lists: SpotifyPlaylistsMusicData[] = []
  let songsLists: MusicData[] = []
  let text = ''

  if (browser) {
    lists = data.response as SpotifyPlaylistsMusicData[]
    lists.forEach((item, index) => {
      if (index == 0) {
        text = item.name ?? ''
        songsLists = item.music ?? []
      }
    })
  }

  function updateNewLists(i: number) {
    text = lists[i].name ?? ''
    songsLists = lists[i].music ?? []
  }

</script>

<svelte:head>
  <title>Spotify Music Playlists | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Spotify Music Playlists | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/mymusic" />
</svelte:head>

<h3 class="text-white urbanist-semibold text-4xl md:text-6xl ms-4 md:ms-7 mt-11">Spotify Playlists</h3>
{#if lists.length > 0}
  <div class="overflow-x-auto flex scrollbar-hide w-full mt-5">
    {#each lists as playlists, index}
      <button class="flex-none py-6 px-1 first:pl-7 last:pr-6 me-5" on:click={() => updateNewLists(index)}>
        <img class="size-[13rem] md:size-[15rem] object-contain rounded-lg" src={playlists.thumbnail} alt={playlists.name} referrerpolicy="no-referrer" />
        <p class="w-[13rem] md:w-[15rem] text-start text-white urbanist-semibold mt-2 mx-1 text-base">{playlists.name}</p>
        <p class="w-[13rem] md:w-[15rem] text-start text-white urbanist-regular mt-0 mx-1 text-sm">{playlists.artists}</p>
      </button>
    {/each}
  </div>
{:else}
  <h3 class="text-white urbanist-egular text-xl ms-4 md:ms-7 mt-11">No Playlist found Spotify</h3>
{/if}

<h3 class="text-white urbanist-semibold text-xl ms-4 md:ms-7 mt-24">{text}</h3>
<div class="h-4" />

{#if lists.length > 0}
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 leading-6 rounded-lg px-4">
    {#each songsLists as musicData}
      {#if musicData.songId != null}
        <CardWithTopMenuIcon {musicData} />
      {/if}
    {/each}
  </div>
{:else if text != ''}
  <h3 class="text-white urbanist-egular text-xl ms-4 md:ms-7 mt-11">No Songs Found in Playlist</h3>
{/if}

<div class="h-64" />
