<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import HomeGetAppFor from '$lib/components/home-page/HomeGetAppFor.svelte';
  import HomeInfoPage from '$lib/components/home-page/HomeInfoPage.svelte';
  import HomeVideoTopHeader from '$lib/components/home-page/HomeVideoTopHeader.svelte';
  import HomeYtVideoPlayer from '$lib/components/home-page/HomeYtVideoPlayer.svelte';
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
