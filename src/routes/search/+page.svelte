<script lang="ts">
  import { browser } from '$app/environment'
  import { env } from '$env/dynamic/public'
  import axios from 'axios'
  import { ResponseDataEnum, type ResponseData } from '../../domain/RequestEnumClass'

  export let data: any
  let key: string | null = null

  let searchSuggestion: ResponseData<string[]> = { type: ResponseDataEnum.EMPTY }

  if (browser) key = window.atob(data.data)

  function onSubmit(){
    const searchValue = document.getElementById("voice-search") as HTMLInputElement
    console.log(searchValue.value)
  }

  async function onSearch(){
    const searchValue = document.getElementById("voice-search") as HTMLInputElement
    if(searchValue.value.trim().length <= 3) return

    try {
      const res = await axios({method: 'post', url: env.PUBLIC_SEARCH_KEYWORDS, headers: { AuthorizationKey: key } , data: { q: searchValue.value.trim() } })
    const response = await res.data as string[]
    console.log(response) 
    } catch (error) {
      console.log(error)
    }
  }
</script>

{#if key != null}
  <center class="p-3">
    <form class="flex items-center w-full md:w-3/6" on:submit={onSubmit}>
      <label for="voice-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
            />
          </svg>
        </div>
        <input
          on:change={onSearch}
          autocomplete="off"
          type="text"
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
          </svg>
        </button>
      </div>
      <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-maincolor rounded-lg border border-blue-700">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>Search
      </button>
    </form>
  </center>

  <div class="h-60" />
{/if}
