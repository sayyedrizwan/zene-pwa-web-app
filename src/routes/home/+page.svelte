<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import HomeGetAppFor from './components/HomeGetAppFor.svelte';
  import HomeInfoPage from './components/HomeInfoPage.svelte';
  import HomeVideoTopHeader from './components/HomeVideoTopHeader.svelte';
  import HomeYtVideoPlayer from './components/HomeYtVideoPlayer.svelte';
</script>

<div class="bg-gray-950 w-full">
  <HomeYtVideoPlayer />
  <HomeVideoTopHeader />

  <div>
    <HomeInfoPage />

    <HomeGetAppFor />

    <Footer />
  </div>
</div>
