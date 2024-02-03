<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { SearchMusicData } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let searchSuggestion: ResponseData<SearchMusicData> = { type: ResponseDataEnum.EMPTY }

  async function search() {
    searchSuggestion = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_SEARCH_QUERY, headers: { AuthorizationKey: key }, data: { q: artistsInfo.name?.trim() } })
      const response = (await res.data) as SearchMusicData
      searchSuggestion = { type: ResponseDataEnum.SUCCESS, data: response }
    } catch (error) {
      searchSuggestion = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    search()
  })
</script>


<h3 class="text-white">dgvhdbdhgvdvb</h3>
