<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import { LastFmImpl } from '../../../domain/apis/lastfm/implementation/LastFmImpl'
  import { type ResponseData, ResponseDataEnum } from '../../../domain/RequestEnumClass'
  import type { LastFmTopSongsResponse } from '../../../domain/apis/entities/LastFmTopSongsResponse'

  export let authKey: string

  const lastFm = new LastFmImpl()

  let response: ResponseData<LastFmTopSongsResponse> = { type: ResponseDataEnum.EMPTY }

  async function topSongs() {
    response = { type: ResponseDataEnum.LOADING }
    const res: LastFmTopSongsResponse | null = await lastFm.getTopPlayingSongs(authKey)
    if (res == null) {
      response = { type: ResponseDataEnum.ERROR }
    } else {
      response = { type: ResponseDataEnum.SUCCESS, data: res }
    }
  }

  onMount(async () => {
    if (browser) {
      topSongs()
    }
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
