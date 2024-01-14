<script lang="ts">
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import { type ResponseData, ResponseDataEnum } from '../../../domain/RequestEnumClass'
  import type { LastFmTopSongsResponse } from '../../../domain/apis/entities/LastFmTopSongsResponse'

  export let authKey: string

  let response: ResponseData<LastFmTopSongsResponse> = { type: ResponseDataEnum.EMPTY }

  async function topSongs() {
    response = { type: ResponseDataEnum.LOADING }

    try {
      const res = await fetch(env.PUBLIC_TOP_LISITING_SONGS, {
        method: 'POST',
        headers: { AuthorizationKey: authKey, 'cache-control': 'max-age=1200' },
      })
      const data = await res.json()
      response = { type: ResponseDataEnum.SUCCESS, data: data }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    topSongs()
  })
</script>

<div class="md:bg-maincolor rounded-ss-lg w-full md:h-screen md:fixed md:overflow-y-auto">
  <h3 class="text-white urbanist-semibold text-3xl ms-4 mt-7">Discover the Currently <br />Most Playing Songs on Zene</h3>
  {#if response.type == ResponseDataEnum.LOADING}
    <div></div>
  {:else if response.type == ResponseDataEnum.ERROR}
    <h1>{response.type}</h1>
  {:else if response.type == ResponseDataEnum.SUCCESS}
    {#each response.data.results.track as item, index (item.url)}
      <li>{item.artist} - {item.name}</li>
    {/each}
  {:else}
    <span></span>
  {/if}
</div>
