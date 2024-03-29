<script lang="ts">
  import { env } from '$env/dynamic/public'
  import axios from 'axios'
  import { onDestroy, onMount } from 'svelte'
  import type { SongsYouMayLike } from '../../../../domain/local/entities/SongsYouMayLike'
  import type { MusicPlayerData } from '../../../../domain/local/entities/MusicPlayerData'
  import { wait } from '$lib/utils/indexd'
  import { MusicData, MusicDataList } from '../../../../domain/local/entities/MusicData'
  import GridFullCardItem from '$lib/components/global-view/items/GridFullCardItem.svelte'
  import { getSuggestRelatedSongId, pSongEData, setSuggestRelatedSongId } from '$lib/utils/pid'
  import { ResponseDataEnum, type ResponseData } from '../../../../domain/RequestEnumClass'

  export let musicData: MusicPlayerData | null
  export let scrollMusicToTop: () => void

  let lastSyncId = ''
  let lastSyncIdTimeout: NodeJS.Timeout

  let songs: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }
  let tempSongs: MusicDataList = new MusicDataList([])

  async function s() {
    await wait(500)
    const l = getSuggestRelatedSongId(musicData?.m.songId ?? '', tempSongs)
    if (l != null) {
      if (tempSongs == (l.results ?? [])) return
      tempSongs.results = l.results ?? []
      songs = { type: ResponseDataEnum.SUCCESS, data: l }
      return
    }
    songs = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_S_Y_M_L_P, [musicData?.m.songId], { headers: { AuthorizationKey: pSongEData() } })
      const data = (await res.data) as SongsYouMayLike
      const songsLists = new MusicDataList([...data.like, ...data.listen, ...data.explore])
      songs = { type: ResponseDataEnum.SUCCESS, data: songsLists }
      tempSongs = songsLists
      setSuggestRelatedSongId(musicData?.m.songId ?? '', songsLists)
    } catch (error) {
      songs = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    lastSyncIdTimeout = setInterval(() => {
      if (musicData?.m.songId != lastSyncId) {
        s()
        lastSyncId = musicData?.m.songId ?? ''
      }
    }, 1000)

    document.addEventListener('playsongid', async (event: Event) => {
      scrollMusicToTop()
    })
  })

  onDestroy(() => {
    clearInterval(lastSyncIdTimeout)
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
