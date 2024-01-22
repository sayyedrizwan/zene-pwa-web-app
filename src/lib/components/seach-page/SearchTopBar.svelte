<script lang="ts">
  import axios from 'axios'
  import MIC from '$lib/assets/img/ic_mic.svg'
  import MUSIC_NOTE from '$lib/assets/img/ic_music_note.svg'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { env } from '$env/dynamic/public'
  import SEARCH from '$lib/assets/img/ic_search.svg'
  import ARROW_UP_RIGHT from '$lib/assets/img/ic-arrow-up-right.svg'

  export let key: string
  export let searchParam: string

  let searchSuggestion: ResponseData<string[]> = { type: ResponseDataEnum.EMPTY }
  let timeout: NodeJS.Timeout | null

  function onSubmit() {
    const searchValue = document.getElementById('voice-search') as HTMLInputElement

    if (searchValue.value.trim().length <= 3) return
    searchParam = searchValue.value.trim()
  }

  async function searchSuggestions() {
    searchSuggestion = { type: ResponseDataEnum.LOADING }
    const searchValue = document.getElementById('voice-search') as HTMLInputElement
    try {
      const res = await axios({ method: 'post', url: env.PUBLIC_SEARCH_KEYWORDS, headers: { AuthorizationKey: key }, data: { q: searchValue.value.trim() } })
      const response = (await res.data) as string[]
      searchSuggestion = { type: ResponseDataEnum.SUCCESS, data: response }
    } catch (error) {
      searchSuggestion = { type: ResponseDataEnum.ERROR }
    }
  }

  async function onSearch() {
    const searchValue = document.getElementById('voice-search') as HTMLInputElement
    if (searchValue.value.trim().length <= 3) return

    if (timeout != null) clearTimeout(timeout)
    timeout = setTimeout(searchSuggestions, 1000)
  }

  function startSpeech() {
    if (('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) === false) {
      alert('speech not supported. please upgrade your browser.')
      return
    }
    console.log('dd')
    const recognization = (window as any).SpeechRecognition || window.webkitSpeechRecognition

    recognization.onstart = () => {
      console.log('listening')
    }
  }
</script>

<center class="p-3">
  <form class="flex items-center w-full md:w-3/6" on:submit={onSubmit}>
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <img src={MUSIC_NOTE} alt="mic" class="size-5" />
      </div>
      <input
        on:input={onSearch}
        autocomplete="off"
        type="text"
        id="voice-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
        placeholder="Search songs, artists, radio...."
        required
      />
      <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3" on:click={startSpeech}>
        <img src={MIC} alt="mic" class="size-5" />
      </button>
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 pe-6 ms-2 text-sm font-medium text-white bg-maincolor rounded-lg border border-blue-700">
      <img src={SEARCH} alt="mic" class="size-4 me-2" />Search
    </button>
  </form>
</center>

{#if searchSuggestion.type == ResponseDataEnum.LOADING}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
    {#each Array(6) as _, index (index)}
      <div class="bg-gray-600 pl animate-pulse rounded-lg w-full h-10" />
    {/each}
  </div>
{:else if searchSuggestion.type == ResponseDataEnum.SUCCESS}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
    {#each searchSuggestion.data as item}
      <button on:click={() => (searchParam = item.trim())} class="p-3 text-gray-300 flex cursor-pointer md:border-2 border-maincolor rounded-xl md:hover:bg-maincolor hover-animation">
        <img src={SEARCH} alt="mic" class="size-5 me-2 translate-y-1" />
        <p class="urbanist-semibold text-base md:text-lg ms-1 w-full text-start">{item}</p>

        <img src={ARROW_UP_RIGHT} alt="mic" class="size-5 me-2 translate-y-1" />
      </button>
    {/each}
  </div>
{/if}
