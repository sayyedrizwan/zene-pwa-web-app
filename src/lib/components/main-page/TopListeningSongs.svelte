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

  <div class="relative rounded-xl overflow-auto">

    <!-- Contents -->
    <!-- <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80" />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80" />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80" />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80" />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80" />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80" />
      </div>
    </div> -->
  </div>

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
