<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsPinData } from '../../../domain/local/entities/ArtistsPinData'
  import { addedPinLists } from '$lib/utils/p/pin'
    import axios from 'axios'
    import { env } from '$env/dynamic/public'
    import type { FeedData } from '../../../domain/local/entities/FeedData'

  export let authKey: string

  const pin = async (results: ArtistsPinData[]) => {
    const res = await axios.post(env.PUBLIC_FEEDS, results, { timeout: 60000, headers: { AuthorizationKey: authKey } })
    const data = (await res.data) as FeedData
  }

  onMount(async () => {
    await addedPinLists(pin)
  })
</script>