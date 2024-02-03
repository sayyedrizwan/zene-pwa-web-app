<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let response: ResponseData<string[]> = { type: ResponseDataEnum.EMPTY }

  async function artistsImages() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_SEARCH_ARTISTS_TOP_IMAGES, {}, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const images = (await res.data) as string[]

      response = { type: ResponseDataEnum.SUCCESS, data: images }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    artistsImages()
  })
</script>


