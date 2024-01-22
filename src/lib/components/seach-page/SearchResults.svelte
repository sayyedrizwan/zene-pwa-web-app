<script lang="ts">
    import { env } from '$env/dynamic/public'
  import ArrowLeft from '$lib/assets/img/ic_arrow_left.svg'
  import { capitalizeFirstLetterOfEveryWords } from '$lib/utils/Utils'
    import { onMount } from 'svelte'
    import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
    import axios from 'axios'
    import type { SearchMusicData } from '../../../domain/local/entities/MusicData'

  export let key: string
  export let searchParam: string


  let searchSuggestion: ResponseData<string[]> = { type: ResponseDataEnum.EMPTY }

  function refreshPage() {
    window.location.reload()
  }

  onMount(async ()=> {
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_SEARCH_QUERY, headers: { AuthorizationKey: key }, data: { q: searchParam.trim() } })
      const response = (await res.data) as SearchMusicData
      console.log(response)
    //   searchSuggestion = { type: ResponseDataEnum.SUCCESS, data: response }
    } catch (error) {
      searchSuggestion = { type: ResponseDataEnum.ERROR }
    }
  })
</script>

<div>
  <div class="flex md:mt-20">
    <button on:click={refreshPage}><img src={ArrowLeft} alt="search back arrow" class="w-6 md:w-8 ms-3 md:ms-9" /></button>
    <h2 class="urbanist-semibold text-white w-full text-center text-base md:text-5xl">{capitalizeFirstLetterOfEveryWords(searchParam)}</h2>
  </div>
</div>
