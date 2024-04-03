<script lang="ts">
  import NotificationIcon from '$lib/assets/img/ic_notification.svg'
  import SeachIcon from '$lib/assets/img/ic_search.svg'
  import MusicIcon from '$lib/assets/img/ic_music.svg'
  import FeedIcon from '$lib/assets/img/ic_feed.svg'
  import HomeIcon from '$lib/assets/img/ic_home.svg'

  export let showOnlyLogo: boolean
</script>

<header class="relative z-30 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
  <nav>
    <div class="mx-2 md:mx-4 flex flex-wrap items-center justify-between px-2 md:px-5">
      <a href="/" class="relative flex items-center py-[2.125rem]">
        <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
        <img src="/logo820.png" alt="zene" class="w-14" />
        <div class="ml-auto flex items-center ms-4">
          <p class="text-white urbanist-bold text-xl">Zene</p>
        </div>
      </a>

      {#if !showOnlyLogo}
        <div class="hidden md:block w-auto">
          <ul class="font-medium flex items-center p-0 mt-4 flex-row fill-white">
            <!-- <li class="group hover-animation pt-5 me-4">
              <center>
                <img src={NotificationIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer" alt="notification" />
                <h1 class="text-white text-sm urbanist-thin hover-animation block invisible group-hover:visible">notification</h1>
              </center>
            </li> -->

            <li class="group hover-animation pt-5 me-4">
              <center>
                <a href="/feed">
                  <img src={FeedIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer" alt="feed" />
                  <h1 class="text-white text-sm urbanist-thin hover-animation block invisible group-hover:visible">&nbsp;&nbsp;&nbsp;&nbsp;feed&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                </a>
              </center>
            </li>

            <li class="group hover-animation pt-5 me-4">
              <center>
                <a href="/search">
                  <img src={SeachIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer" alt="search" />
                  <h1 class="text-white text-sm urbanist-thin hover-animation block invisible group-hover:visible">&nbsp;&nbsp;&nbsp;search&nbsp;&nbsp;&nbsp;</h1>
                </a>
              </center>
            </li>

            <li class="group hover-animation pt-5 me-4">
              <center>
                <a href="/mymusic">
                  <img src={MusicIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer" alt="my music" />
                  <h1 class="text-white text-sm urbanist-thin hover-animation block invisible group-hover:visible">&nbsp;&nbsp;my music&nbsp;&nbsp;</h1>
                </a>
              </center>
            </li>
          </ul>
        </div>

        <div class="md:hidden fixed bottom-4 bg-gray-800 w-11/12 z-50 py-3 rounded-full grid grid-cols-4 gap-4 place-items-center p-3">
          <a href="/" class="flex justify-center flex-col items-center">
            <img src={HomeIcon} class="size-5" alt="home" />
            <p class="urbanist-light text-[11px] text-white">Home</p>
          </a>
          <a href="/feed" class="flex justify-center flex-col items-center">
            <img src={FeedIcon} class="size-5" alt="home" />
            <p class="urbanist-light text-[11px] text-white">Feed</p>
          </a>
          <a href="/search" class="flex justify-center flex-col items-center">
            <img src={SeachIcon} class="size-5" alt="home" />
            <p class="urbanist-light text-[11px] text-white">Search</p>
          </a>
          <a href="/mymusic" class="flex justify-center flex-col items-center">
            <img src={MusicIcon} class="size-5" alt="home" />
            <p class="urbanist-light text-[11px] text-white">My Music</p>
          </a>
        </div>
      {/if}
    </div>
  </nav>
</header>
