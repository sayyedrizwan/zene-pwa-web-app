<script lang="ts">
  import Footer from '$lib/components/global-view/Footer.svelte'
  import { onMount } from 'svelte'
  import { ads_mail_server } from '../api/utils/utils'

  let txt = ``
  let showOther = false

  const pointsLists = [
    '🛒 Online Sales',
    '📈 Brand Recognition',
    '📲 App Downloads',
    '🙋🏻‍♂️ Customer Engagement',
    '🚀 Audience Reach',
    '🤳 Social Media Engagement',
    '🚦 Website Traffic',
    '🚦 Website Traffic',
    '🎯 Lead Generation',
    '📊 Business Growth',
    '👨🏻‍💻 Online Presence',
    '📦 Product Visibility',
    '📋 Customer Feedback & Insights',
    '📤 Content Sharing',
    '🌈💰🍀 and many many more',
  ]

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
    <h3 class="text-lg urbanist-bold text-white mt-5 mx-2">Forget skippable ads! Zene Captivating stories, one brand ad/story at a time on all our platform. Stand out, not interrupt. #ZeneAds</h3>

    <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-maincolor rounded-full shadow-xl border border-transparent hover-animation hover:bg-gray-600 text-white hover:text-white" href="mailto:{ads_mail_server}?subject=Rent Dynamic Ad Space"
      >Contact Us on ads@zenemusic.co</a
    >

    <h1 class="text-3xl urbanist-semibold tracking-tight text-slate-900 mt-56">What are you interested in? Get More 👇</h1>

    <div class="flex flex-wrap mt-6">
      {#each pointsLists as item}
        <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">{item.textBeforeKeyword(' ')}</span> &nbsp; {item.textAfterKeyword(' ')}</div>
      {/each}
    </div>

    <h1 class="text-3xl urbanist-semibold tracking-tight text-slate-900 mt-56">Make Zene Platform all About <u>Your Brand story</u></h1>

    <div class="flex flex-col md:flex-row justify-center items-center my-20 gap-4">

      <div class="flex flex-col justify-center items-center">
        <p class="text-lg text-white urbanist-regular mb-4">Zene Ads on Desktop, MacOS, Linux, Chrome extension</p>
        <video controls={true} muted={true} autoplay={true} loop={true}>
          <track kind="captions" />
          <source src="/ad/web-ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      
      <div class="flex flex-col justify-center items-center">
        <video controls={true} muted={true} autoplay={true} loop={true}>
          <track kind="captions" />
          <source src="/ad/web-ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    </div>
    

    <div class="h-48" />
  {:else}
    <div class="h-96" />
  {/if}
</div>

<Footer />
