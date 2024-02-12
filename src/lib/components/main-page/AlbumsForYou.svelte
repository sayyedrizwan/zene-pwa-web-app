<script lang="ts">
  import { onMount } from 'svelte'
  import type { MusicData, MusicDataList } from '../../../domain/local/entities/MusicData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { topTenSongsListener } from '$lib/utils/p/shistory'
    import { DataIndexDS, albumsForYouCache, indexDB } from '$lib/utils/indexd'
    import type { SongsYouMayLikeCache } from '../../../domain/local/entities/SongsYouMayLike'

  export let authKey: string

  let response: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }

  const readMusic = async (music: string[]) => {
    const cacheDB = new DataIndexDS<SongsYouMayLikeCache<MusicData>>(albumsForYouCache, indexDB)
    const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

    if (music.length <= 0) {
      response = { type: ResponseDataEnum.ERROR }
      return
    }

    
  }

  onMount(async () => {
    await topTenSongsListener(readMusic)
  })
</script>



<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Albums for you</h3>