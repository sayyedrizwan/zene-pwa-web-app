<script lang="ts">
  import { onMount } from 'svelte'
  import { topTenSongsListener } from '$lib/utils/p/shistory'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'

  export let authKey: string

  const readMusic = async (music: string[]) => {
    const res = await axios.post(env.PUBLIC_S_Y_M_L, music, { timeout: 60000, headers: { AuthorizationKey: authKey }})
    const data = (await res.data)
    // console.log(data)

    // console.log(music)
  }

  onMount(async () => {
    await topTenSongsListener(readMusic)
  })
</script>
