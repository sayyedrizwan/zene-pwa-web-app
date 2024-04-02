<script lang="ts">
    import type { MusicData } from "../../../../domain/local/entities/MusicData"

    export let list: MusicData[][]
</script>

<div class="flex overflow-x-auto w-full scrollbar-hide">
    {#each list as topItem}
      <div>
        {#each topItem as item}
          <div class="p-3">
            <a href={`/a/${item.songId}`}>
              <div class="relative size-[13rem] md:size-[15rem] bg-black rounded-lg">
                <img class="absolute top-0 left-0 size-[13rem] md:size-[15rem] object-contain rounded-lg" src={item.thumbnail} alt={item.name} referrerpolicy="no-referrer" />
                <div class="absolute top-0 left-0 size-[13rem] md:size-[15rem] bg-gradient-to-bl from-transparent to-maincolor"></div>
                <p class="absolute bottom-2 left-2 text-white urbanist-semibold text-base ms-1.5 line-clamp-3">{item.name}</p>
              </div>
            </a>
          </div>
        {/each}
      </div>
    {/each}
  </div>