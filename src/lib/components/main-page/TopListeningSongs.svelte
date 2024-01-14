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
        headers: { AuthorizationKey: authKey },
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

{#if response.type == ResponseDataEnum.LOADING}
  <h1>Loading</h1>
{:else if response.type == ResponseDataEnum.ERROR}
  <h1>{response.type}</h1>
{:else if response.type == ResponseDataEnum.SUCCESS}
  <h1>{response.data}</h1>
{:else}
  <span>errror {response.type}</span>
{/if}
