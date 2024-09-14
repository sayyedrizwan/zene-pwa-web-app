<script lang="ts">
  import HomeTopView from "$lib/components/HomeTopView.svelte";
  import Footer from "$lib/components/item/Footer.svelte";
  import CardItemView from "./CardItemView.svelte";
  import FansReviewView from "./FansReviewView.svelte";
  import FollowUsOn from "./FollowUsOn.svelte";
  import GOOGLE_PLAY_ICON from "$lib/assets/img/get_on_google_play.png";
  import APPLE_PLAY_ICON from "$lib/assets/img/get_on_app_store.svg";
  import IPHONE_MOCKUP_ICON from "$lib/assets/img/iphone_mockup_app.png";

  export let data: any;
</script>

<svelte:head>
  <title>Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Zene : A Music App" />
  <meta property="og:image" content="/logo820.png" />
  <link rel="icon" type="image/x-icon" href="/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<div class="bg-black w-full">
  <HomeTopView {data} />

  <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      <CardItemView title={"Unlimited Ad-Free Music Streaming"} desc={"Enjoy unlimited music with no ads. Personalized playlists, offline listening, and more."} emoji={"🎉"} img={"https://cdn-icons-png.flaticon.com/512/17728/17728523.png"} />
      <CardItemView title={"Music Anywhere Anytime"} desc={"Stream music seamlessly across all your devices. Enjoy ad-free, personalized playlists."} emoji={"💻"} img={"https://cdn-icons-png.flaticon.com/512/3659/3659784.png"} />
      <CardItemView title={"Stream High-Quality Music"} desc={"Experience premium sound quality. Enjoy ad-free, high-definition music on any device."} emoji={"🎺"} img={"https://cdn-icons-png.flaticon.com/512/11125/11125966.png"} />
      <CardItemView title={"Handpicked Personal Soundtrack"} desc={"Get personalized song suggestions tailored to your taste."} emoji={"💭"} img={"https://cdn-icons-png.flaticon.com/512/1027/1027567.png"} />
    </div>
  </div>

  <FansReviewView />

  <section class="m-auto flex max-w-screen-2xl grow flex-col justify-center bg-slate-50 lg:flex-row mt-7" id="download">
    <div class="flex h-full flex-col items-center justify-center md:min-w-[589px]">
      <img src={IPHONE_MOCKUP_ICON} role="presentation" alt="" class="pt-6 h-[90vh] lg:pt-12" />
    </div>
    <div class="flex flex-1 flex-col items-center gap-12 bg-black py-12 text-center md:gap-8 lg:items-start lg:py-16 lg:pb-0 lg:text-start xl:pt-24 2xl:gap-12 px-3 sm:px-8 lg:px-16 xl:px-32">
      <span class="inline-flex rounded-[64px] border text-center font-semibold transition-all duration-300 ease-in-out h-7 px-3 py-1 text-sm border-blue-300 bg-lightblack text-white">Zene Music Apps</span>
      <div class="flex max-w-lg flex-col gap-6">
        <h3 class="text-4xl poppins-semi-bold text-white md:text-6xl">Get Zene on Your Favorite Platform!</h3>
        <h4 class="text-lg font-normal leading-7 text-white">Discover the ultimate music experience with Zene! Available on all major platforms, our app lets you enjoy your favorite tunes anytime, anywhere. Download Zene now and take your music with you wherever you go!</h4>
      </div>
      <div class="flex flex-wrap gap-5 justify-center items-center w-full">
        <a href="https://play.google.com/store/apps/details?id=com.rizwansayyed.zene">
          <img src={GOOGLE_PLAY_ICON} class="h-12 object-contain" alt="zene google play" />
        </a>
        <a href="https://apps.apple.com/us/app/zene-a-music-app/id6504202797">
          <img src={APPLE_PLAY_ICON} class="h-12 object-contain" alt="zene app store" />
        </a>

        <a href="/download" class="flex flex-row gap-4 w-full justify-center items-center mt-3">
          <button type="button" aria-disabled="false" class="flex flex-row justify-center items-center rounded-lg py-6 px-6 text-sm poppins-regular transition-all duration-300 ease-in-out bg-blue text-white hover:bg-maincolor h-11 w-52 gap-2">
            <div>Download More</div>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="size-6 stroke-inherit">
              <path d="M11 16L15 12L11 8" stroke-linecap="round" stroke-linejoin="round"></path>
              <circle cx="12" cy="12" r="9"></circle>
            </svg>
          </button>
        </a>
      </div>
    </div>
  </section>

  <FollowUsOn />

  <Footer />
</div>
