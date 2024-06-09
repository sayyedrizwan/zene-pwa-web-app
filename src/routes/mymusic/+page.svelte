<script lang="ts">
  import MyMusicHistory from '$lib/components/mymusic-page/MyMusicHistory.svelte'
  import ImportMyMusic from '$lib/components/mymusic-page/ImportMyMusic.svelte'
  import { onMount } from 'svelte'
  import SettingsIcon from '$lib/assets/img/ic_setting.svg'
  import Footer from '$lib/components/global-view/Footer.svelte'
  import MyMusicParty from '$lib/components/mymusic-page/MyMusicParty.svelte'
    import DonateUsView from '$lib/components/mymusic-page/DonateUSView.svelte'

  onMount(async () => {
    // window.performance.getEntries().map(e => console.log(e.name) )
  })
</script>

<svelte:head>
  <title>My Music | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="My Music | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/mymusic" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<div class="relative md:ms-7 mt-11 mb-11">
  <h3 class="absolute top-2 text-white urbanist-semibold text-4xl md:text-6xl">My Music</h3>
  <a href="/settings"><img class="absolute top-2 right-4 size-8" src={SettingsIcon} alt="settings" /></a>
</div>

<br /><br />

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-4 md:ms-7 mt-20">History</h3>

<div class="overflow-x-auto flex scrollbar-hide mt-3">
  <MyMusicHistory />
</div>

<div class="h-44 md:h-72" />

<ImportMyMusic />

<div class="h-44 md:h-72" />

<MyMusicParty />

<div class="h-44 md:h-72" />

<DonateUsView />

<div class="h-64" />

<Footer />
