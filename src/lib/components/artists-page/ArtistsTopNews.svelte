<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { NewsData } from '../../../domain/local/entities/NewsData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { formatRelativeTime, getFavIcon, splitArrayIntoChunks } from '$lib/utils/Utils'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let response: ResponseData<NewsData[][]> = { type: ResponseDataEnum.EMPTY }

  async function artistsNews() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_SEARCH_ARTISTS_NEWS, {}, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const list = (await res.data) as NewsData[]
      console.log(list)
      response = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks(list, 3) }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    artistsNews()
  })
</script>

<div class="mt-2">
  {#if response.type == ResponseDataEnum.LOADING}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Artist News</h3>
    <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
      {#each Array(15) as _, index (index)}
        <div class="p-2">
          <div class="relative w-80 h-36 rounded-lg bg-gray-400 animate-pulse" />
        </div>
      {/each}
    </div>
  {:else if response.type == ResponseDataEnum.SUCCESS}
    {#if response.data.length ?? 0 > 0}
      <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Artist News</h3>
      <div class="flex overflow-x-auto overflow-y-hidden w-full scrollbar-hide mt-2">
        {#each response.data as topItems}
          <div>
            {#each topItems as item}
              <button class="p-2" on:click|stopPropagation={() => window.open(item.link, "_blank")}>
                <div class="relative w-[50vh] md:w-[56vh] rounded-lg bg-lightblack flex">
                  <div class="w-full h-full">
                    <p class="text-white urbanist-semibold text-start text-sm md:text-base m-3">{item?.title}</p>
                  </div>
                  <img src={getFavIcon(item.sourceURL ?? "")} alt={item?.source} class="size-36 p-4 object-cover" referrerpolicy="no-referrer" />
                
                  <p class='absolute bottom-1 left-1 text-white urbanist-thin text-start text-sm m-1'>{formatRelativeTime(item?.date ?? "")} • {item?.source}</p>
                </div>
              </button>
            {/each}
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</div>
