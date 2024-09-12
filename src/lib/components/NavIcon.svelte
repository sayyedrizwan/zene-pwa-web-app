<script lang="ts">
  import { page } from "$app/stores";
  import SEARCH_ICON from "$lib/assets/img/ic_search.svg";
  import SCROLL_ICON from "$lib/assets/img/ic_scroll.svg";
  import MUSIC_ICON from "$lib/assets/img/ic_music.svg";
  import HOME_ICON from "$lib/assets/img/ic_home.svg";
</script>

<div class="w-full flex justify-end items-end">
  <div class="bg-white rounded-lg px-4 py-3 flex flex-row">
    {#if $page.url.pathname != "/"}
      <a href="/" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={HOME_ICON} alt="search" />
      </a>
    {/if}
    {#if $page.url.pathname != "/search"}
      <a href="/search" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={SEARCH_ICON} alt="search" />
      </a>
    {/if}
    
    {#if $page.url.pathname != "/feed"}
      <a href="/feed" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={SCROLL_ICON} alt="feed" />
      </a>
    {/if}

    {#if $page.url.pathname != "/my_music"}
      <a href="/my_music" class="size-7 mx-5 hover:p-1 hover-animation">
        <img src={MUSIC_ICON} alt="feed" />
      </a>
    {/if}
  </div>
</div>
