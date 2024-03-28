<script lang="ts">
  import Footer from '$lib/components/global-view/Footer.svelte'
  import HomeGetAppFor from '$lib/components/home-page/HomeGetAppFor.svelte'
  import HomeInfoPage from '$lib/components/home-page/HomeInfoPage.svelte'
  import HomeVideoTopHeader from '$lib/components/home-page/HomeVideoTopHeader.svelte'
  import HomeYtVideoPlayer from '$lib/components/home-page/HomeYtVideoPlayer.svelte'
</script>

<svelte:head>
  <title>Zene: A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Zene: A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/home" />
</svelte:head>



<div class="bg-gray-950 w-full">
  <HomeYtVideoPlayer />
  <HomeVideoTopHeader />

  <div>
    <HomeInfoPage />

    <HomeGetAppFor />

    <Footer />
  </div>
</div>
