<script lang="ts">
  import SettingsViewSelect from '$lib/components/global-view/SettingsViewSelect.svelte'
  import { getCookie } from '$lib/utils/c'
  import { onMount } from 'svelte'

  let songQuality: string

  onMount(() => {
    songQuality = getCookie('song_quality') == 'Low Quality' ? 'Low Quality' : 'High Quality'
  })
</script>

<svelte:head>
  <title>Settings | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Settings | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/settings" />
</svelte:head>

<div class="relative mx-auto px-6 pt-20 text-center pb-24 text-white">
  <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl w-full text-start">Settings</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
    <SettingsViewSelect txt={'Audio Quality'} list={['Low Quality', 'High Quality']} cookies_name={"song_quality"} bind:selected={songQuality} />
  </div>
</div>
