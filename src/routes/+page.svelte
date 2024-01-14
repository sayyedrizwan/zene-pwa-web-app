<script lang="ts">
  import './tailwind.svelte'
  import LogoWithBrand from '$lib/components/LogoWithBrand.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { browser } from '$app/environment'
  export let data: any

  let key: string | null = null
  if (browser) {
    key = window.atob(data.data)
  }
</script>

<LogoWithBrand showOnlyLogo={false}/>

{#if key != null}
  <TopListeningSongs authKey={key} />
{/if}
