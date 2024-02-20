<script lang="ts">
  import { onMount } from 'svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import CardWithTopMenuIcon from '../global-view/items/CardWithTopMenuIcon.svelte'

  export let key: string
  export let url: string | null

  let response: ResponseData<MusicData[]> = { type: ResponseDataEnum.EMPTY }

  onMount(async () => {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_ARTISTS_ALBUMS_SONGS, headers: { AuthorizationKey: key, id: window.atob(url ?? '') } })
      let data = (await res.data) as MusicData[]
      response = { type: ResponseDataEnum.SUCCESS, data: data }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  })
</script>

{#if response.type == ResponseDataEnum.SUCCESS}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs</h3>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 leading-6 rounded-lg">
    {#each response.data as musicData}
      <CardWithTopMenuIcon {musicData} />
    {/each}
  </div>
{:else if response.type == ResponseDataEnum.LOADING}
  {#each Array(15) as _, index (index)}
    <div class="px-4 pt-8">
      <div class="relative w-full h-28 rounded-lg bg-gray-400 animate-pulse" />
    </div>
  {/each}
{/if}
