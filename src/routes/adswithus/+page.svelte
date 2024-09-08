<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
</script>

<svelte:head>
  <title>Advertise on Zene | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="About Zene | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/faq" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<br />
<br />
<br />
<br />

<div class="relative mx-auto w-full pt-20 text-center pb-24 text-white rounded-lg">
  <h1 class="text-7xl tracking-tight text-slate-900">{txt}</h1>
    <h3 class="text-lg urbanist-bold text-white mt-5 mx-2">Forget skippable ads! Zene Captivating stories, one brand ad/story at a time on all our platform. Stand out, not interrupt. #ZeneAds</h3>

    <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-maincolor rounded-full shadow-xl border border-transparent hover-animation hover:bg-gray-600 text-white hover:text-white" href="mailto:{ads_mail_server}?subject=Rent Dynamic Ad Space">Contact Us on ads@zenemusic.co</a>
   
    

    <div class="h-48" />
  {:else}
    <div class="h-96" />
  {/if}
</div>


<Footer />
