<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let dialogImage: string = ''

  let response: ResponseData<string[]> = { type: ResponseDataEnum.EMPTY }

  async function artistsImages() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_SEARCH_ARTISTS_TOP_IMAGES, {}, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const images = (await res.data) as string[]

      response = { type: ResponseDataEnum.SUCCESS, data: images }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    artistsImages()
  })
</script>

{#if response.type == ResponseDataEnum.SUCCESS}
  {#if response.data?.length ?? 0 > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Artists Images</h3>

    <div class="flex overflow-x-scroll mt-2">
      <div class="flex flex-nowrap">
        {#each response.data as item}
          <button on:click|preventDefault={() => (dialogImage = item)} class="inline-block px-3">
            <img class="h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src={item} alt="zene artists images" />
          </button>
        {/each}
      </div>
    </div>
  {/if}
{:else if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Artists Images</h3>
  <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="relative w-80 h-36 rounded-lg bg-gray-400 animate-pulse" />
      </div>
    {/each}
  </div>
{/if}

{#if dialogImage.length > 5}
  <button class="fixed top-0 left-0 h-screen w-screen bg-black" on:click={() => (dialogImage = '')}>
    <img src={dialogImage} alt="Artists Name" class="object-contain h-screen w-screen" />
  </button>
{/if}
