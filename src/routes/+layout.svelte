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
  import MusicPlaySmallView from '$lib/components/global-view/MusicPlaySmallView.svelte'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
    

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
  $: browser ? onBrowser() : ''

  let audioPlayer: APManager

  let songMenuDialog: MusicData | null = null

  onMount(async () => {
    audioPlayer = new APManager()
    audioPlayer.init()

    document.addEventListener('playsongid', async (event: Event) => {
      const song = (event as CustomEvent).detail.value as MusicData
      try {
        console.log(song.songId)

        const res = await axios.get(`${env.PUBLIC_DOWNLOAD_URL}?id=${window.btoa(song.songId ?? "")}`)
        console.log(res.data)
        audioPlayer?.play(res.data as string, song)
      } catch (error) {
        alert('Error playing the song try again later..')
      }
    })

    document.addEventListener('songdialog', (event: Event) => {
      songMenuDialog = (event as CustomEvent).detail.value
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
  <MusicPlaySmallView {audioPlayer} />

  {#if songMenuDialog != null}
    <SongInfoSheet />
  {/if}
{/if}

<NoInternetDialog />
