<script lang="ts">
  import { env } from '$env/dynamic/public'
  import ArrowLeft from '$lib/assets/img/ic_arrow_left.svg'
  import { capitalizeFirstLetterOfEveryWords } from '$lib/utils/Utils'
  import { onMount } from 'svelte'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import axios from 'axios'
  import type { SearchMusicData } from '../../../domain/local/entities/MusicData'
  import RadioStationItems from '../main-page/radio/RadioStationItems.svelte'
  import CardWithTopMenuIcon from '../global-view/items/CardWithTopMenuIcon.svelte'
  import CardAlbumsItems from '../global-view/items/CardAlbumsItems.svelte'

  export let key: string
  export let searchParam: string

  let searchSuggestion: ResponseData<SearchMusicData> = { type: ResponseDataEnum.EMPTY }

  function refreshPage() {
    searchParam = ''
  }

  onMount(async () => {
    searchSuggestion = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_SEARCH_QUERY, headers: { AuthorizationKey: key }, data: { q: searchParam.trim() } })
      const response = (await res.data) as SearchMusicData

      searchSuggestion = { type: ResponseDataEnum.SUCCESS, data: response }
    } catch (error) {
      searchSuggestion = { type: ResponseDataEnum.ERROR }
    }
  })
</script>

<div>
  <div class="flex md:mt-20">
    <button on:click|stopPropagation={refreshPage}><img src={ArrowLeft} alt="search back arrow" class="w-6 md:w-8 ms-3 md:ms-9" /></button>
    <h2 class="urbanist-semibold text-white w-full text-center text-base md:text-5xl">{capitalizeFirstLetterOfEveryWords(searchParam)}</h2>
  </div>

  {#if searchSuggestion.type == ResponseDataEnum.LOADING}
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-16 p-4">
      {#each Array(22) as _, index (index)}
        <div class="bg-gray-600 pl animate-pulse rounded-lg w-full h-48" />
      {/each}
    </div>
  {/if}

  {#if searchSuggestion.type == ResponseDataEnum.ERROR}
    <center class="mt-16">
      <p class="text-white">Error Searching. Please refresh the browser and try again</p>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-9 py-3 mt-7" on:click|stopPropagation={refreshPage}>Refresh</button>
    </center>
  {/if}

  {#if searchSuggestion.type == ResponseDataEnum.SUCCESS}
    <div>
      {#if searchSuggestion.data.radio.length > 0}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Radio Stations</h3>
        <div class="overflow-x-auto flex scrollbar-hide">
          {#each searchSuggestion.data.radio as musicData}
            <RadioStationItems {musicData} />
          {/each}
        </div>
      {/if}
    </div>

    <div>
      {#if searchSuggestion.data.artists.length > 0}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Artists</h3>
        <div class="overflow-x-auto flex scrollbar-hide">
          {#each searchSuggestion.data.artists as musicData}
            <a class="flex-none py-6 px-1 first:pl-2 last:pr-3 mx-3 justify-center items-center" href={`/a/${musicData?.songId}`}>
              <img src={musicData?.thumbnail} alt={musicData?.name} class="size-44 rounded-full" />
              <p class="text-white urbanist-semibold text-base mt-2 text-center w-44">{musicData?.name}</p>
            </a>
          {/each}
        </div>
      {:else}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Artists</h3>
        <h3 class="text-white urbanist-light text-sm md:text-xl mx-2 md:mx-4 mt-4">No Artists Found.</h3>
      {/if}
    </div>

    <div>
      {#if searchSuggestion.data.album.length > 0}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Albums</h3>
        <CardAlbumsItems albums={searchSuggestion.data.album} />
      {:else}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Albums</h3>
        <h3 class="text-white urbanist-light text-sm md:text-xl mx-2 md:mx-4 mt-4">No Album Found.</h3>
      {/if}
    </div>

    <div>
      {#if searchSuggestion.data.songs.length > 0}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs</h3>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 leading-6 rounded-lg">
          {#each searchSuggestion.data.songs as musicData}
            <CardWithTopMenuIcon {musicData} />
          {/each}
        </div>
      {:else}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs</h3>
        <h3 class="text-white urbanist-light text-sm md:text-xl mx-2 md:mx-4 mt-4">No Song Found.</h3>
      {/if}
    </div>
  {/if}
</div>
