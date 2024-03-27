<script lang="ts">
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import axios from 'axios'
  import { moodsList } from '$lib/utils/Utils'
  import type { MoodDataResponse } from '../../domain/local/entities/MoodDataResponse'
  import { ResponseDataEnum, type ResponseData } from '../../domain/RequestEnumClass'
    import GridFullCardItem from '$lib/components/global-view/items/GridFullCardItem.svelte'
    import { MusicDataList } from '../../domain/local/entities/MusicData'

  export let data: any

  let response: ResponseData<MoodDataResponse> = { type: ResponseDataEnum.EMPTY }

  let authKey: string | null = null
  let mood: string = ''
  let moodFull: string = ''

  if (browser) mood = $page.url.searchParams.get('v') ?? ''

  onMount(async () => {
    response = { type: ResponseDataEnum.LOADING }
    if (moodsList.some((i) => i.includes(mood))) {
      moodFull = moodsList.findLast((v) => v.includes(mood)) ?? ''
      authKey = window.atob(data.data)
      const res = await axios.post(env.PUBLIC_MOOD_INFO, {}, { headers: { AuthorizationKey: authKey, mood: mood } })
      const responseMood = (await res.data) as MoodDataResponse
      response = { type: ResponseDataEnum.SUCCESS, data: responseMood }
      console.log(response)
    } else {
      goto('/')
    }
  })
</script>

<svelte:head>
  <title>{mood} Mood | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="{mood} Mood | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co" />
</svelte:head>

<div class="bg-black w-full">
  {#if response.type == ResponseDataEnum.SUCCESS}
    <div>
      <div class="flex flex-col md:flex-row justify-center items-center">
        <img class="w-full" src={response.data.gif} alt={mood} />
        <div class="w-full">
          <p class="text-white urbanist-semibold text-center w-full text-sm p-3 mt-7">Random Fact: {response.data.facts}</p>
          <h3 class="text-white urbanist-semibold text-2xl md:text-3xl mt-7 w-full text-center">{moodFull}</h3>
        </div>
      </div>

      <div class="h-11" />
      {#if response.data.tracks?.length ?? 0 > 0}
        <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 mb-5">Top Songs for this mood</h3>

        <GridFullCardItem results={new MusicDataList(response.data?.tracks ?? [])} bg={'bg-maincolor'} />
      {/if}
    </div>
  {:else if response.type == ResponseDataEnum.LOADING}
    <div role="status" class="flex w-full justify-center">
      <svg aria-hidden="true" class="size-12 text-gray-200 animate-spin fill-maincolor" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  {/if}
</div>

<div class="h-44" />
