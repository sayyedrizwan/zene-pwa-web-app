<script lang="ts">
    import { artistsSplitToHTMLString } from '$lib/utils/f'
  import type { MusicPlayerData } from '../../../../domain/local/entities/MusicPlayerData'

  export let musicData: MusicPlayerData | null
</script>

<div class="w-full flex justify-center items-center mt-32">
  <center>
    <img src={musicData?.m.thumbnail} alt={musicData?.m.name} class="size-72 md:size-96" />

    <h2 class="text-white urbanist-bold text-base md:text-xl mt-5">{musicData?.m.name}</h2>

    <div class="flex flex-wrap justify-center items-center w-full">
      {@html artistsSplitToHTMLString(musicData?.m?.artists ?? "")}
    </div>
  </center>
</div>
