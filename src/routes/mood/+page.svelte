<script lang="ts">
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import axios from 'axios'
  import { moodsList } from '$lib/utils/Utils'

  export let data: any

  let authKey: string | null = null
  let mood: string = ''

  if (browser) mood = $page.url.searchParams.get('v') ?? ''

  onMount(async () => {
    if (moodsList.some((i) => i.includes(mood))) {
      authKey = window.atob(data.data)
      const res = await axios.post(env.PUBLIC_MOOD_INFO, {}, { headers: { AuthorizationKey: authKey } })
      const response = await res.data
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

<div class="bg-black w-full" />
