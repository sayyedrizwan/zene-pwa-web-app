<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { NewsData } from '../../../domain/local/entities/NewsData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let response: ResponseData<NewsData> = { type: ResponseDataEnum.EMPTY }

  async function artistsNews() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_SEARCH_ARTISTS_NEWS, {}, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const list = (await res.data) as NewsData
      response = { type: ResponseDataEnum.SUCCESS, data: list }
      console.log(list)
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    artistsNews()
  })
</script>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Artists News</h3>
