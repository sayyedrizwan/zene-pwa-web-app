<script lang="ts">
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { SearchMusicData } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import CardAlbumsItems from '../global-view/items/CardAlbumsItems.svelte'

  export let key: string
  export let name: string

  let searchSuggestion: ResponseData<SearchMusicData> = { type: ResponseDataEnum.EMPTY }

  async function mount() {
    searchSuggestion = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_SEARCH_QUERY, headers: { AuthorizationKey: key }, data: { q: name.trim() } })
      let response = (await res.data) as SearchMusicData

      if (response.album.length > 1) {
        response = new SearchMusicData([], [], response.album.slice(1), [])
      }

      searchSuggestion = { type: ResponseDataEnum.SUCCESS, data: response }
    } catch (error) {
      searchSuggestion = { type: ResponseDataEnum.ERROR }
    }
  }

  $: name, mount()
</script>

{#if searchSuggestion.type == ResponseDataEnum.SUCCESS}
  <div class="mt-28">
    {#if searchSuggestion.data.album.length > 0}
      <CardAlbumsItems albums={searchSuggestion.data.album} />
    {/if}
  </div>
{:else if searchSuggestion.type == ResponseDataEnum.LOADING}
  <div class="overflow-x-auto flex scrollbar-hide mt-28">
    {#each Array(15) as _, index (index)}
      <div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="w-[16rem] h-[14rem] bg-gray-400 animate-pulse rounded-lg" />
        </div>
      </div>
    {/each}
  </div>
{/if}
