<script lang="ts">
  import { app_name } from '$lib/assets/string/en'
  import NotificationIcon from '$lib/assets/img/ic_notification.svg'
  import SeachIcon from '$lib/assets/img/ic_search.svg'
  import MusicIcon from '$lib/assets/img/ic_music.svg'

  export let showOnlyLogo: boolean
</script>

<header class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
  <nav>
    <div class="mx-0 md:mx-4 flex flex-wrap items-center justify-between px-2 md:px-5">
      <a href="/" class="relative flex items-center py-[2.125rem]">
        <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
        <img src="/logo120.png" alt={app_name} class="w-14" />
        <div class="ml-auto flex items-center ms-4">
          <p class="text-white urbanist-semibold text-xl">{app_name}</p>
        </div>
      </a>

      {#if !showOnlyLogo}
        <div class="block w-auto">
          <ul class="font-medium flex items-center p-4 md:p-0 mt-4 flex-row fill-white">
            <li class="group hover-animation pt-0 md:pt-5 me-2 md:me-8">
              <center>
                <img src={NotificationIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer ms-2 md:ms-0" alt="notification" />
                <h1 class="text-white text-sm urbanist-thin hover-animation hidden md:block invisible group-hover:visible">notification</h1>
              </center>
            </li>

            <li class="group hover-animation pt-0 md:pt-5 me-2 md:me-8">
              <a href="/search">
                <center>
                  <img src={SeachIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer ms-2 md:ms-0" alt="search" />
                  <h1 class="text-white text-sm urbanist-thin hover-animation hidden md:block invisible group-hover:visible">search</h1>
                </center>
              </a>
            </li>

            <li class="group hover-animation pt-0 md:pt-5 me-2 md:me-8">
              <a href="/mymusic">
                <img src={MusicIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer ms-2" alt="music" />
                <h1 class="text-white text-sm urbanist-thin hover-animation hidden md:block invisible group-hover:visible">my music</h1>
              </a>
            </li>
          </ul>
        </div>
      {/if}
    </div>
  </nav>
</header>
