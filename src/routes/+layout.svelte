<script lang="ts">
  import "../tailwind.css";
  import "$lib/firebase/firebase";
  import { onMount } from "svelte";
  import { musicEvents } from "$lib/utils/Utils";
  import type { MusicData } from "./-api-/ApiService/model/MusicData";
  import YtPlayer from "$lib/utils/YTPlayer.svelte";

  let music: MusicData | undefined = undefined;

  onMount(() => {
    document.addEventListener(musicEvents, (event: any) => {
      music = event.detail;
    });
  });
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
  <YtPlayer {music} />
{/if}
