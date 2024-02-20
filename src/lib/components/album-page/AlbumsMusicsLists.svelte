<script lang="ts">
  import { onMount } from 'svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'

  export let key: string
  export let url: string | null

  let lists: ResponseData<MusicData[]> = { type: ResponseDataEnum.EMPTY }

  onMount(async () => {
    try {
        console.log(window.atob(url ?? ""))
      const res = await axios({ method: 'post', url: env.PUBLIC_ARTISTS_ALBUMS_SONGS, headers: { AuthorizationKey: key, id: window.atob(url ?? "") }})
      let response = (await res.data) as MusicData[]
      console.log(response)
      lists = { type: ResponseDataEnum.SUCCESS, data: response }
    } catch (error) {
      lists = { type: ResponseDataEnum.ERROR }
    }
  })

</script>

