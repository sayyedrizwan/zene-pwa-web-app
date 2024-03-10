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
  import { ResponseDataEnum, type ResponseData } from '../../../../domain/RequestEnumClass'

  export let musicData: MusicPlayerData | null
  export let scrollMusicToTop: () => void

  let songs: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }

  async function s() {
    const l = songs.type == ResponseDataEnum.SUCCESS ? getSuggestRelatedSongId(musicData?.m.songId ?? '', songs.data) : null
    if (l != null) {
      songs = { type: ResponseDataEnum.SUCCESS, data: l }
      return
    }
    songs = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_S_Y_M_L_P, [musicData?.m.songId], { timeout: 60000 })
      const data = (await res.data) as SongsYouMayLike
      songs = { type: ResponseDataEnum.SUCCESS, data: new MusicDataList([...data.like, ...data.listen, ...data.explore]) }
      setSuggestRelatedSongId(musicData?.m.songId ?? '', songs.data)
    } catch (error) {  
      songs = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    document.addEventListener('playsongid', async (event: Event) => {
      scrollMusicToTop()
      await wait(1000)
      s()
    })
    
    await wait(1000)
    s()
  })
</script>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-4 md:ms-6 mt-16 mb-3">Related Songs</h3>

{#if songs.type == ResponseDataEnum.SUCCESS}
  {#if songs?.data?.results?.length ?? 0 > 0}
    <GridFullCardItem results={songs?.data} bg={'bg-black'} />
  {/if}
{:else if songs.type == ResponseDataEnum.LOADING}
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 leading-6 bg-stripes-fuchsia rounded-lg">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="w-full h-[8rem] rounded-xl bg-black bg-opacity-60 flex justify-center items-center animate-pulse" />
      </div>
    {/each}
  </div>
{:else}
  <h3 class="text-white urbanist-regular text-base mt-3 ms-6">Error while loading songs..... {`:(`}</h3>
{/if}
