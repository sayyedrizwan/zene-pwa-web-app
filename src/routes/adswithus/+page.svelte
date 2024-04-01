<script lang="ts">
  import Footer from '$lib/components/global-view/Footer.svelte'
  import { onMount } from 'svelte'
  import { ads_mail_server } from '../api/utils/utils'

  let txt = ``
  let showOther = false

  let i = 0
  const txtToWrite = `Don't Just Advertise, Sell your Stories...`
  const speed = 1 //70

  function typeWriter() {
    if (i < txtToWrite.length) {
      txt += txtToWrite.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    } else {
      showOther = true
    }
  }

  onMount(() => {
    typeWriter()
  })
</script>

<svelte:head>
  <title>Advertise on Zene. Don't Just Advertise, Sell your Stories..</title>
  <meta name="description" content="Ditch boring ads. Sell your stories on Zene. Ads that captivate, not interrupt. #ZeneAds" />
  <meta name="og:description" content="Ditch boring ads. Sell your stories on Zene. Ads that captivate, not interrupt. #ZeneAds" />
  <meta property="og:title" content="Advertise on Zene. Don't Just Advertise, Sell your Stories.." />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/adswithus" />
</svelte:head>

<div class="relative mx-auto w-full pt-20 text-center pb-24 text-white rounded-lg">
  <h1 class="text-7xl tracking-tight text-slate-900">{txt}</h1>
  {#if showOther}
    <h3 class="text-lg urbanist-regular text-white mt-5 mx-2">Forget skippable ads! Zene Captivating stories, one brand ad/story at a time on all our platform. Stand out, not interrupt. #ZeneAds</h3>

    <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-maincolor rounded-full shadow-xl border border-transparent hover-animation hover:bg-gray-600 text-white hover:text-white" href="mailto:{ads_mail_server}?subject=Rent Dynamic Ad Space"
      >Contact Us on ads@zenemusic.co</a
    >

    <h1 class="text-3xl urbanist-semibold tracking-tight text-slate-900 mt-40">What are you interested in? Get More 👇</h1>

    <div class="flex flex-wrap mt-9">
      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">🛒</span> &nbsp; Online Sales</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">📈</span> &nbsp; Brand Recognition</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">📲</span> &nbsp; App Downloads</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">🙋🏻‍♂️</span> &nbsp; Customer Engagement</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">🚀</span> &nbsp; Audience Reach</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">🤳</span> &nbsp; Social Media Engagement</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">🚦</span> &nbsp; Website Traffic</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">🎯</span> &nbsp; Lead Generation</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">📊</span> &nbsp; Business Growth</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">👨🏻‍💻</span> &nbsp; Online Presence</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">📦</span> &nbsp; Product Visibility</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">📋</span> &nbsp; Customer Feedback & Insights</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">📤</span> &nbsp; Content Sharing</div>

      <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">🌈💰🍀</span> &nbsp; and many many more</div>
    </div>
  {:else}
    <div class="h-96" />
  {/if}
</div>

<Footer />
