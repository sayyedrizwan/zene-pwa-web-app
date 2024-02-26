<script lang="ts">
  import { wait } from '$lib/utils/indexd'
  import CardWithTopMenuIcon from '$lib/components/global-view/items/CardWithTopMenuIcon.svelte'
  import { onMount } from 'svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData.js'
  import type { SpotifyPlaylistsMusicData, SpotifyPlaylistsMusicTrackData } from '../../../domain/local/entities/SpotifyPlaylistsMusicData.js'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass.js'

  export let data: any

  let lists: SpotifyPlaylistsMusicData[] = []
  let songsLists: SpotifyPlaylistsMusicTrackData[] = []
  let selectedLists: MusicData[] = []
  let text = ''
  let loadingNum = 0

  let responses: ResponseData<Boolean> = { type: ResponseDataEnum.EMPTY }

  async function getAllMusic() {
    songsLists = []

    responses = { type: ResponseDataEnum.LOADING }

    await Promise.all(
      lists.map(async (items, num) => {
        const response = await axios.post(env.PUBLIC_SPOTIFY_ZENE_S_API, { id: items.id, code: items.token, name: items.name }, { headers: { AuthorizationKey: window.atob(data.data) } })
        const r = (await response.data) as SpotifyPlaylistsMusicTrackData
        loadingNum += 1
        if (r.id != undefined) songsLists.push(r)
      })
    )

    lists.forEach((item, index) => {
      if (index == 0) {
        updateNewLists(item.id ?? '')
        text = item.name ?? ''
      }
    })

    responses = { type: ResponseDataEnum.SUCCESS, data: true }
  }

  onMount(async () => {
    loadingNum = 0
    lists = data.response as SpotifyPlaylistsMusicData[]
    getAllMusic()
  })

  function updateNewLists(id: string) {
    selectedLists = []
    lists.forEach((items) => {
      if (items.id == id) text = items.name ?? ''
    })

    songsLists.forEach((items) => {
      if (items.id == id) selectedLists = items.lists ?? []
    })
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
    {#each lists as playlists}
      <button class="flex-none py-6 px-1 first:pl-7 last:pr-6 me-5" on:click={() => updateNewLists(playlists.id ?? '')}>
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

{#if responses.type == ResponseDataEnum.SUCCESS}
  {#if lists.length > 0}
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 leading-6 rounded-lg px-4">
      {#each selectedLists as musicData}
        {#if musicData.songId != null}
          <CardWithTopMenuIcon {musicData} />
        {/if}
      {/each}
    </div>
  {:else if text != ''}
    <h3 class="text-white urbanist-egular text-xl ms-4 md:ms-7 mt-11">No Songs Found in Playlist</h3>
  {/if}
{:else if responses.type == ResponseDataEnum.LOADING}
  <div class="relative">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <svg class="animate-spin size-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="text-white urbanist-regular mt-3 mx-1 text-sm text-center">Loading all playlists songs... Please wait... {loadingNum}/{lists.length}</p>
    </div>
  </div>
{/if}

<div class="h-64" />
