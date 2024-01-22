<script lang="ts">
  import { pwaInfo } from 'virtual:pwa-info'
  import './tailwind.svelte'
  import { page } from '$app/stores'
  import { browser } from '$app/environment'
  import { onBrowser } from '$lib/utils/Utils'
  import LogoWithBrand from '$lib/components/global-view/LogoWithBrand.svelte'
  import { onMount } from 'svelte'
  import axios from 'axios'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import { APManager } from './api/utils/s'
  import { env } from '$env/dynamic/public'
    import NoInternetDialog from '$lib/components/global-view/NoInternetDialog.svelte'

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
  $: browser ? onBrowser() : ''

  onMount(async () => {
    const audioPlayer = new APManager()
    audioPlayer.init()

    document.addEventListener('playsongid', async (event: Event) => {
      const song = (event as CustomEvent).detail.value as MusicData

      try {
        const headers = { timeout: 30000, headers: { id: song.songId } }
        const res = await axios.post(env.PUBLIC_DOWNLOAD_URL, {}, headers)
        audioPlayer.play(window.atob(res.data), song)
      } catch (error) {
        alert('Error playing the song try again later..')
      }
    })
  })
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

{#if $page.url.pathname === '/home' || $page.url.pathname === '/faq' || $page.url.pathname === '/privacy-policy'}
  <LogoWithBrand showOnlyLogo={true} />
  <slot />
{:else}
  <LogoWithBrand showOnlyLogo={false} />
  <slot />
{/if}

<NoInternetDialog />
