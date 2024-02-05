<script lang="ts">
  import type { MusicPlayerData } from '../../../../domain/local/entities/MusicPlayerData'

  export let musicData: MusicPlayerData | null
</script>

<div class="w-full flex justify-center mt-32">
  <img src={musicData?.m.thumbnail} alt={musicData?.m.name} class="size-72 md:size-96" />
</div>
