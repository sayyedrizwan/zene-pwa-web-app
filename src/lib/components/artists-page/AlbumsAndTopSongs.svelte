<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { MusicDataList, type MusicData, type SearchMusicData } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import CardAlbumsItems from '../global-view/items/CardAlbumsItems.svelte'
  import DualArtistsItems from '../global-view/items/DualArtistsItems.svelte'
    import { splitArrayIntoChunks } from '$lib/utils/Utils'
    import GridFullCardItem from '../global-view/items/GridFullCardItem.svelte'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let searchSuggestion: ResponseData<SearchMusicData> = { type: ResponseDataEnum.EMPTY }
  let artistsLists: ResponseData<MusicData[][]> = { type: ResponseDataEnum.EMPTY }

  async function search() {
    searchSuggestion = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_SEARCH_QUERY, headers: { AuthorizationKey: key }, data: { q: artistsInfo.name?.trim() } })
      const response = (await res.data) as SearchMusicData
      searchSuggestion = { type: ResponseDataEnum.SUCCESS, data: response }
      artistsLists = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks<MusicData>(response.artists ?? [], 2) }
    } catch (error) {
      searchSuggestion = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    search()
  })
</script>

{#if searchSuggestion.type == ResponseDataEnum.SUCCESS}
  {#if searchSuggestion.data?.album?.length ?? 0 > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Latest Songs</h3>
    <GridFullCardItem results={new MusicDataList(searchSuggestion.data.songs)} />
  {/if}
{:else if searchSuggestion.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Latest Songs</h3>
  <div class="flex overflow-x-auto w-full scrollbar-hide mt-2 scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="relative w-80 h-36 rounded-lg bg-gray-400 animate-pulse" />
      </div>
    {/each}
  </div>
{/if}



{#if searchSuggestion.type == ResponseDataEnum.SUCCESS}
  {#if searchSuggestion.data?.album?.length ?? 0 > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Albums</h3>
    <CardAlbumsItems albums={searchSuggestion.data.album} />
  {/if}
{:else if searchSuggestion.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Albums</h3>
  <div class="flex overflow-x-auto w-full scrollbar-hide mt-2 scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="relative w-80 h-36 rounded-lg bg-gray-400 animate-pulse" />
      </div>
    {/each}
  </div>
{/if}



{#if artistsLists.type == ResponseDataEnum.SUCCESS}
  {#if artistsLists.data.length ?? 0 > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Similar Artists</h3>
    <DualArtistsItems list={artistsLists.data} />
  {/if}
{:else if artistsLists.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Similar Artists</h3>
  <div class="flex overflow-x-auto w-full scrollbar-hide mt-2 scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="relative w-80 h-36 rounded-lg bg-gray-400 animate-pulse" />
      </div>
    {/each}
  </div>
{/if}
