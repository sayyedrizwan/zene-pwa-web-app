<script lang="ts">
  import "../tailwind.css";
  import "$lib/firebase/firebase";
  import { musicEvents, sendMusicData } from "$lib/utils/Utils";
  import type { MusicData } from "./-api-/ApiService/model/MusicData";
  import YtPlayer from "$lib/components/player/YTPlayer.svelte";
  import { deTheVal, setK, updateK } from "$lib/utils/ad_ss";
  import { browser } from "$app/environment";
  import { getCookie, player_info_info } from "$lib/utils/Cookies";

  export let data: any;
  let music: MusicData | undefined = undefined;
  let isOldSong = false;

  if (browser) {
    setK(window.atob(data.i), window.atob(data.k), window.atob(data.mk));

    setInterval(() => {
      updateK();
    }, 1000);

    setTimeout(() => {
      if (getCookie(player_info_info) != null) {
        const player = deTheVal(getCookie(player_info_info)!);
        isOldSong = true;
        sendMusicData(JSON.parse(player) as MusicData);
      }
    }, 1000);

    document.addEventListener(musicEvents, (event: any) => {
      music = event.detail;
    });
  }
</script>

<div class="absolute left-0 top-0 z-30">
  <div class="mx-2 mt-5 md:mx-4 flex flex-wrap items-center justify-between px-2 md:px-5 z-30">
    <a href="/" class="relative flex items-center">
      <img src="/logo820.png" alt="zene" class="w-14" />
      <div class="ml-auto flex items-center ms-4">
        <p class="text-white urbanist-bold text-xl" data-svelte-h="svelte-15t1ev0">Zene</p>
      </div>
    </a>
  </div>
</div>

<slot />

{#if music != undefined}
  <YtPlayer {music} {isOldSong} />
{/if}
