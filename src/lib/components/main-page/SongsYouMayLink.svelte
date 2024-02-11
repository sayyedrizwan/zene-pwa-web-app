<script lang="ts">
  import { onMount } from 'svelte'
    import type { MusicHistoryData } from '../../../domain/local/entities/MusicHistoryData'
    import { topTenSongsListener } from '$lib/utils/p/shistory'

  export let authKey: string

  onMount(async () => {
    const readMusic = (music: MusicHistoryData[]) => {
      console.log(music)
    }
    await topTenSongsListener(readMusic)
   
  })
</script>
