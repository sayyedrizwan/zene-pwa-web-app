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
  import { APManager } from '../lib/utils/s'
  import { env } from '$env/dynamic/public'
  import NoInternetDialog from '$lib/components/global-view/NoInternetDialog.svelte'
  import MusicPlaySmallView from '$lib/components/global-view/MusicPlaySmallView.svelte'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
    import ZeneMusicPlayer from '$lib/components/music-player/ZeneMusicPlayer.svelte'

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
  $: browser ? onBrowser() : ''

  let audioPlayer: APManager

  let songMenuDialog: MusicData | null = null

  let songPlayer: Boolean = true

  onMount(async () => {
    audioPlayer = new APManager()
    audioPlayer.init()

    document.addEventListener('songplayer', async (event: Event) => {
      songPlayer = (event as CustomEvent).detail.value as Boolean
    })

    document.addEventListener('playsongid', async (event: Event) => {
      const song = (event as CustomEvent).detail.value as MusicData
      try {
        const response = await axios.get(`${env.PUBLIC_DOWNLOAD_URL}?id=${window.btoa(song.songId ?? '')}`, { timeout: 120000 })
        audioPlayer.play(window.atob(response.data), song)
      } catch (error) {
        console.log(error)
        alert('Error loading song. Please try again later.')
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
  
  {#if songPlayer === true}
    <ZeneMusicPlayer bind:songPlayer={songPlayer} audioPlayer={audioPlayer}/>
  {/if}
{/if}

<NoInternetDialog />
