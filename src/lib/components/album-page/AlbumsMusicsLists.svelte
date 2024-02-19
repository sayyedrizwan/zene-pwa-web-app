<script lang="ts">
  import { onMount } from 'svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData'
    import axios from 'axios'
    import { env } from '$env/dynamic/public'

  export let key: string
  export let url: string | null

  let lists: MusicData[] = []

  onMount(async () => {
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_ARTISTS_ALBUMS_SONGS, headers: { AuthorizationKey: key }, data: { q: url.trim() } })
      let response = (await res.data) as SearchMusicData

      if (response.album.length > 1) {
        response = new SearchMusicData([], [], response.album.slice(1), [])
      }

      searchSuggestion = { type: ResponseDataEnum.SUCCESS, data: response }
    } catch (error) {
      searchSuggestion = { type: ResponseDataEnum.ERROR }
    }
  })
</script>
