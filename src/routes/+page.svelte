<script lang="ts">
  import './tailwind.svelte'
  import LogoWithBrand from '$lib/components/LogoWithBrand.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { atob } from 'buffer'
  import { browser } from '$app/environment'
  export let data: any

  let key: string | null = null
  if (browser) {
    key = window.atob(data.data)
  }
</script>

<h1>{key}</h1>
<LogoWithBrand />

{#if key != null}
  <TopListeningSongs authKey={key} />
{/if}
