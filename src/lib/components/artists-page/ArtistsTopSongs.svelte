<script lang="ts">
  import axios from 'axios'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { MusicDataList } from '../../../domain/local/entities/MusicData'
  import CardsWithFullColor from '../global-view/items/CardsWithFullColor.svelte'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let response: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }

  async function artistsTopSongs() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_SEARCH_ARTISTS_TOP_SONGS, {}, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const list = (await res.data) as MusicDataList
      response = { type: ResponseDataEnum.SUCCESS, data: list }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  $: artistsInfo.name, artistsTopSongs()
</script>

{#if response.type == ResponseDataEnum.SUCCESS}
  {#if response.data?.results?.length ?? 0 > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-28 text-start">Top Songs</h3>
    <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
      {#each response?.data?.results ?? [] as item}
        <CardsWithFullColor {item} list={response.data?.results ?? [item]} />
      {/each}
    </div>
  {/if}
{:else if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-28 text-start">Top Songs</h3>
  <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="relative w-80 h-36 rounded-lg bg-gray-400 animate-pulse" />
      </div>
    {/each}
  </div>
{/if}
