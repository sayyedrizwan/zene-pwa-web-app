<script lang="ts">
    import type { MusicData } from "../../../../domain/local/entities/MusicData"

    export let albums : MusicData[]
</script>


<div class="overflow-x-auto flex scrollbar-hide">
    {#each albums as musicData}
      <a class="flex-none py-6 px-1 first:pl-2 last:pr-3 mx-3 justify-center items-center" href={`/album/${musicData.songId}`}>
        <img src={musicData.thumbnail} alt={musicData.name} class="size-44 rounded-lg" />
        <p class="text-white urbanist-semibold text-base mt-2 text-center w-44">{musicData.name}</p>
      </a>
    {/each}
  </div>