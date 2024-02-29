<script lang="ts">
  import Footer from '$lib/components/global-view/Footer.svelte'
  import PhoneMusicImg from '$lib/assets/img/download/phone_music_clipart.svg'
  import MacMusicImg from '$lib/assets/img/download/macbook_music_clipart.svg'
  import DesktopMusicImg from '$lib/assets/img/download/desktop_clipart.svg'
  import { onMount } from 'svelte'

  let deviceType = 0

  onMount(() => {
    const userAgent = navigator.userAgent
    if (/iPhone|iPod/.test(userAgent)) deviceType = 0
    else if (/iPad/.test(userAgent)) deviceType = 1
    else if (/Android/.test(userAgent)) deviceType = 2
    else if (/Macintosh/.test(userAgent)) deviceType = 3
    else if (/Windows/.test(userAgent)) deviceType = 4
    else if (/Android/.test(userAgent) && /tablet/.test(userAgent)) deviceType = 5
    else deviceType = 6
  })
</script>

<svelte:head>
  <title>Zene Download | Zene: A Free Muic App</title>
  <meta name="description" content="Bring your free music to your iPhone, iPad, Mac, Desktop, Smartphone and Tablet too." />
  <meta name="og:description" content="Bring your free music to your iPhone, iPad, Mac, Desktop, Smartphone and Tablet too." />
  <meta property="og:title" content="Zene Download | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/download" />
</svelte:head>

<section class="relative z-10 bg-primary py-[120px]">
  <div class="container mx-auto">
    <div class="w-full px-4">
      <div class="mx-auto max-w-[400px] text-center flex flex-col justify-center items-center">
        <img class="mb-2" src={deviceType == 4 ? DesktopMusicImg : deviceType == 3 ? MacMusicImg : PhoneMusicImg} alt="clipart" />
        <h4 class="mb-3 text-[22px] font-semibold leading-tight text-white mt-6 urbanist-bold">Download Zene</h4>
        <p class="mb-8 text-lg text-white urbanist-light">
          Bring your free music to your {deviceType == 0 ? 'iPhone' : deviceType == 1 ? 'iPad' : deviceType == 2 ? 'Android Smartphone' : deviceType == 3 ? 'Mac and Macbook' : deviceType == 4 ? 'Windows Desktop' : deviceType == 5 ? 'Android Tablet' : 'Device'}.
        </p>
        <button class="font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:bg-gray-800 flex items-center gap-3 urbanist-regular" type="button">
          <svg class=" size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 20.8201C15.426 22.392 8.574 22.392 2 20.8201" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.9492 2V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M16.8996 11.8L13.3796 15.4099C13.2011 15.5978 12.9863 15.7476 12.7482 15.8499C12.5101 15.9521 12.2538 16.0046 11.9946 16.0046C11.7355 16.0046 11.4791 15.9521 11.241 15.8499C11.0029 15.7476 10.7881 15.5978 10.6096 15.4099L7.09961 11.8"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {deviceType == 0 ? 'Install iPhone' : deviceType == 1 ? 'Install iPad' : deviceType == 2 ? 'Go to Play Store' : deviceType == 3 ? 'Download for Mac' : deviceType == 4 ? 'Download for Windows' : deviceType == 5 ? 'Go to Play Store' : 'Device'}</button
        >
      </div>
    </div>
  </div>
  <div class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
    <div class="h-full w-1/3 bg-gradient-to-t from-maincolor to-[#C4C4C400]"></div>
    <div class="flex h-full w-1/3">
      <div class="h-full w-1/2 bg-gradient-to-b from-maincolor to-[#C4C4C400]"></div>
      <div class="h-full w-1/2 bg-gradient-to-t from-maincolor to-[#C4C4C400]"></div>
    </div>
    <div class="h-full w-1/3 bg-gradient-to-b from-maincolor to-[#C4C4C400]"></div>
  </div>
</section>

<Footer />
