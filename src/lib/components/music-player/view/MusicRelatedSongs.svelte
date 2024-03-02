<script lang="ts">
  import { env } from '$env/dynamic/public'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import type { SongsYouMayLike } from '../../../../domain/local/entities/SongsYouMayLike'
  import type { MusicPlayerData } from '../../../../domain/local/entities/MusicPlayerData'
  import { wait } from '$lib/utils/indexd'
  import { MusicDataList } from '../../../../domain/local/entities/MusicData'
  import GridFullCardItem from '$lib/components/global-view/items/GridFullCardItem.svelte'
  import { getSuggestRelatedSongId, setSuggestRelatedSongId } from '$lib/utils/pid'

  export let musicData: MusicPlayerData | null

  let songs: MusicDataList = new MusicDataList([])

  onMount(async () => {
    await wait(1000)
    const l = getSuggestRelatedSongId(musicData?.m.songId ?? '', songs)
    if (l != null) {
      songs = l
      return
    }

    const res = await axios.post(env.PUBLIC_S_Y_M_L_P, [musicData?.m.songId], { timeout: 60000 })
    const data = (await res.data) as SongsYouMayLike
    songs = new MusicDataList([...data.like, ...data.listen, ...data.explore])
    setSuggestRelatedSongId(musicData?.m.songId ?? '', songs)
  })
</script>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-4 md:ms-6 mt-16 mb-3">Releated Songs</h3>

{#if songs?.results?.length ?? 0 > 0}
  <GridFullCardItem results={songs} bg={'bg-black'} />
{/if}
