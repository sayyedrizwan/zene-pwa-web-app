<script lang="ts">
  import { page } from "$app/stores";
  import SEARCH_ICON from "$lib/assets/img/ic_search.svg";
  import SCROLL_ICON from "$lib/assets/img/ic_scroll.svg";
  import MUSIC_ICON from "$lib/assets/img/ic_music.svg";
  import HOME_ICON from "$lib/assets/img/ic_home.svg";
</script>

<div class="z-40 fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-end items-end">
  <div class="bg-white rounded-lg px-4 py-3 flex flex-row">
 
    <div class="flex flex-col justify-center items-center">
      <a href="/" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={HOME_ICON} alt="search" />
      </a>
      {#if $page.url.pathname == "/"}
      <div class="bg-black rounded-full size-1 -translate-x-0.5" />
      {/if}
    </div>

    <div class="flex flex-col justify-center items-center">
      <a href="/search" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={SEARCH_ICON} alt="search" />
      </a>
      {#if $page.url.pathname == "/search"}
      <div class="bg-black rounded-full size-1 -translate-x-0.5" />
      {/if}
    </div>

    <div class="flex flex-col justify-center items-center">
      <a href="/feed" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={SCROLL_ICON} alt="search" />
      </a>
      {#if $page.url.pathname == "/feed"}
      <div class="bg-black rounded-full size-1 -translate-x-0.5" />
      {/if}
    </div>

    <div class="flex flex-col justify-center items-center">
      <a href="/my_music" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={MUSIC_ICON} alt="search" />
      </a>
      {#if $page.url.pathname == "/my_music"}
      <div class="bg-black rounded-full size-1 -translate-x-0.5" />
      {/if}
    </div>
  </div>
</div>
