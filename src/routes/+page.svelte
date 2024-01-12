<script lang="ts">
  import { onMount } from 'svelte'
  import { LastFmImpl } from '../domain/apis/lastfm/implementation/LastFmImpl'
  import './tailwind.svelte'
  import type { LastFmTopSongsResponse } from '../domain/apis/entities/LastFmTopSongsResponse'
  import { ResponseDataEnum, type ResponseData } from '../domain/RequestEnumClass'

  const lastFm = new LastFmImpl()

  let response: ResponseData<LastFmTopSongsResponse> = { type: ResponseDataEnum.EMPTY }

  onMount(async () => {
    response = { type: ResponseDataEnum.LOADING }
    const res: LastFmTopSongsResponse | null = await lastFm.getTopPlayingSongs()
    if (res == null) {
      response = { type: ResponseDataEnum.ERROR }
    } else {
      response = { type: ResponseDataEnum.SUCCESS, data: res }
    }
  })
</script>

<h3>bdhjndddd</h3>
