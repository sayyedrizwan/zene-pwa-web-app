<script lang="ts">
    import ImageAndInfoSideBySide from '$lib/components/ImageAndInfoSideBySide.svelte';
import HomeGetAppFor from './components/HomeGetAppFor.svelte';
  import HomeVideoTopHeader from './components/HomeVideoTopHeader.svelte';
  import HomeYtVideoPlayer from './components/HomeYtVideoPlayer.svelte';
</script>

<div class="bg-gray-950">
  <HomeYtVideoPlayer />
  <HomeVideoTopHeader />

  <div>
  <ImageAndInfoSideBySide />
    <HomeGetAppFor />
  </div>
</div>

<div class="bg-black text-white">
  <section class="text-black body-font lg:pt-20">
    <div class="container mx-auto px-5 pt-32 lg:px-4 lg:py-4">
      <div class="mb-2 flex w-full flex-col text-left md:text-center">
        <h1 class="mb-2 text-6xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl">
          <span>Zene Web Player for </span><br class="hidden lg:block" /> IOS and Web is <br class="hidden lg:block" /> under development
        </h1>
        <br />
        <p class="dark:text-gray-300 mx-auto text-xl font-normal leading-relaxed text-gray-600 lg:w-2/3">Zene team is working and try to provide a free music expreience to all the user all accross the world.</p>
      </div>
    </div>
    <div class="container mx-auto flex flex-col items-center justify-center rounded-lg p-3 py-8 md:p-1">
      <img class="dark:border-gray-900 g327 mb-10 w-full rounded-lg border border-gray-200 object-cover object-center shadow-md" alt="hero" src="./images/placeholder.png" />
    </div>
    <section class="body-font text-gray-600">
      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-10">
          <div class="-m-4 flex flex-wrap text-center">
            <div class="w-1/2 p-4 sm:w-1/3">
              <h2 class="title-font text-3xl font-medium text-white sm:text-5xl">
                <span>20,000+</span>
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="w-1/2 p-4 sm:w-1/3">
              <h2 class="title-font text-3xl font-medium text-white sm:text-5xl">
                <span>6,000+</span>
              </h2>
              <p class="leading-relaxed">Listeners/s</p>
            </div>
            <div class="w-1/2 p-4 sm:w-1/3">
              <h2 class="title-font text-3xl font-medium text-white sm:text-4xl">
                <span>1B+</span>
              </h2>
              <p class="leading-relaxed">Song, Artists, Albums Library</p>
            </div>
          </div>
        </div>
      </section>
      <div class="container mx-auto flex flex-wrap px-5 py-24">
        <div class="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
          <img alt="feature" class="h-full w-full object-cover object-center" src="./images/placeholder.png" />
        </div>
        <div class="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
          <div class="mb-10 flex flex-col items-center lg:items-start">
            <div class="flex-grow">
              <h2 class="title-font mb-3 text-2xl font-medium text-white">Free</h2>
              <p class="text-lg leading-relaxed">Ad-Free Forever</p>
            </div>
          </div>
          <div class="mb-10 flex flex-col items-center lg:items-start">
            <div class="flex-grow">
              <h2 class="title-font mb-3 text-2xl font-medium text-white">Responsive</h2>
              <p class="text-lg leading-relaxed">Work on all kind of devices.</p>
            </div>
          </div>
          <div class="mb-10 flex flex-col items-center lg:items-start">
            <div class="flex-grow">
              <h2 class="title-font mb-3 text-2xl font-medium text-white">Fast</h2>
              <p class="text-lg leading-relaxed">Zene Web App and Song are cache all around the world</p>
            </div>
          </div>
          <div class="mb-10 flex flex-col items-center lg:items-start">
            <div class="flex-grow">
              <h2 class="title-font mb-3 text-2xl font-medium text-white">High Defination Music</h2>
              <p class="text-lg leading-relaxed">All Music on Zene is in HD and support 192kHz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="body-font text-gray-600">
      <div class="container mx-auto px-5">
        <div class="mb-20 text-center">
          <h2 class="title-font mb-4 font-medium text-white sm:text-5xl">Our Motto</h2>
          <p class="text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">To Give Free Music to All Users</p>
          <div class="mt-6 flex justify-center">
            <div class="inline-flex h-1 w-16 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <footer class="body-font text-white">
    <div class="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
      <a class="title-font flex items-center justify-center font-medium md:justify-start" href="/"><span class="ml-3 text-xl">Zene</span></a><span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"
        ><a class="ml-3" href="https://www.instagram.com/zene__music/"
          ><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24"
            ><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg
          ></a
        ></span
      >
    </div>
  </footer>
</div>
