<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import { support_mail_server } from "$lib/utils/Utils";
</script>

<svelte:head>
  <title>About Zene | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="About Zene | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/about-us" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
  <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
      <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div class="w-full flex-col justify-center items-start gap-8 flex">
          <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
            <h6 class="text-white text-base font-normal leading-relaxed">About Us</h6>
            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">A community for music lovers to connect and share</h2>
              <p class="text-white text-base font-normal leading-relaxed lg:text-start text-center">Zene is your go-to destination for unlimited, ad-free music streaming. Discover a vast library of songs, artists, albums and playlists, curated to suit every mood and occasion. With Zene, you can enjoy your favorite tunes anytime, anywhere, on your terms. Our intuitive interface and high-quality audio ensure a seamless and immersive listening experience. Download Zene today and start exploring the world of music.</p>
            </div>
          </div>
          <div class="w-full flex-col justify-center items-start gap-6 flex">
            <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-300 text-2xl font-bold font-manrope leading-9">Discover and Explore</h4>
                <p class="text-gray-300 text-base font-normal leading-relaxed">Our intelligent algorithms learn your tastes and suggest personalized playlists and tracks, ensuring there's always something new to discover.</p>
              </div>
              <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-300 text-2xl font-bold font-manrope leading-9">Stream Without Limits</h4>
                <p class="text-gray-300 text-base font-normal leading-relaxed">Enjoy ad-free music streaming, anytime, anywhere. Whether you're commuting, working, or relaxing, Zene is your constant companion.</p>
              </div>
            </div>
            <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-300 text-2xl font-bold font-manrope leading-9">Experience Premium Sound</h4>
                <p class="text-gray-300 text-base font-normal leading-relaxed">Our high-resolution audio ensures a listening experience that's rich, immersive, and truly unforgettable.</p>
              </div>
              <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-300 text-2xl font-bold font-manrope leading-9">Connect and Share</h4>
                <p class="text-gray-300 text-base font-normal leading-relaxed">Join a vibrant community of music enthusiasts and connect with like-minded individuals. Share your playlists, discover new artists, and engage as music lovers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:justify-start justify-center items-start flex">
        <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
          <img src="/listening_song.jpg" alt="About Us Zene" class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" />
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />