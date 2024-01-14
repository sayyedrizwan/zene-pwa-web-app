<script lang="ts">
  import { app_name } from '$lib/assets/string/en'
  import SeachIcon from '$lib/assets/img/ic_search.svg'
  import MusicIcon from '$lib/assets/img/ic_music.svg'

  export let showOnlyLogo: boolean
</script>

<header class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
  <nav>
    <div class="mx-4 flex flex-wrap items-center justify-between px-5">
      <a href="/" class="relative flex items-center py-[2.125rem]">
        <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
        <img src="/logo120.png" alt={app_name} class="w-14" />
        <div class="ml-auto flex items-center ms-4">
          <p class="text-white urbanist-semibold text-xl">{app_name}</p>
        </div>
      </a>

      {#if !showOnlyLogo}
        <div class="block w-auto">
          <ul class="font-medium flex items-center p-4 md:p-0 mt-4 flex-row space-x-8 rtl:space-x-revers fill-white">
            <li>
              <a href="/search"><img src={SeachIcon} class="size-6 hover:size-8 fill-white hover-animation cursor-pointer" alt="search" /></a>
            </li>

           <li>
              <a href="/mymusic"><img src={MusicIcon} class="size-6 hover:size-8 fill-white hover-animation cursor-pointer" alt="music" /></a>
            </li>
          </ul>
        </div>
      {/if}
    </div>
  </nav>
</header>
