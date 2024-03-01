<script lang="ts">
  import { pwaInfo } from 'virtual:pwa-info'
  import './tailwind.svelte'
  import '$lib/firebase/firebase'
  import { page } from '$app/stores'
  import { browser } from '$app/environment'
  import { onBrowser } from '$lib/utils/Utils'
  import LogoWithBrand from '$lib/components/global-view/LogoWithBrand.svelte'
  import { onMount } from 'svelte'
  import axios from 'axios'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import { APManager } from '../lib/utils/p/s'
  import { env } from '$env/dynamic/public'
  import NoInternetDialog from '$lib/components/global-view/NoInternetDialog.svelte'
  import MusicPlaySmallView from '$lib/components/global-view/MusicPlaySmallView.svelte'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
  import ZeneMusicPlayer from '$lib/components/music-player/ZeneMusicPlayer.svelte'
  import { setUpForegroundFCM } from '$lib/firebase/firebase'
    import type { DURLResponse } from '../domain/local/entities/DURLResponse'

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
  $: browser ? onBrowser() : ''

  let audioPlayer: APManager

  let songMenuDialog: MusicData | null = null

  let songPlayer: Boolean = false

  onMount(async () => {
    audioPlayer = new APManager()
    audioPlayer.init()

    document.addEventListener('songplayer', async (event: Event) => {
      songPlayer = (event as CustomEvent).detail.value as Boolean
    })

    document.addEventListener('playsongid', async (event: Event) => {
      const song = (event as CustomEvent).detail.value as MusicData
      audioPlayer.stop()
      try {
        audioPlayer.startBuffering()
        const response = await axios.get(`${env.PUBLIC_DOWNLOAD_URL}?id=${song.songId ?? ''}`, { timeout: 120000 })
        console.log(response.data)
        audioPlayer.playMusic(response.data as DURLResponse, song)
      } catch (error) {
        alert('Error loading song. Please try again later.')
      }
    })
    document.addEventListener('songdialog', (event: Event) => {
      songMenuDialog = (event as CustomEvent).detail.value
    })

    setTimeout(() => {
      setUpForegroundFCM()
    }, 2000)
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
    <SongInfoSheet bind:songMenuDialog />
  {/if}

  {#if songPlayer === true}
    <ZeneMusicPlayer bind:songPlayer bind:audioPlayer />
  {/if}
{/if}

<NoInternetDialog />
