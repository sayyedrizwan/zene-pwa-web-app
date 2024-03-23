<script lang="ts">
  import './tailwind.svelte'
  import '$lib/firebase/firebase'
  import { page } from '$app/stores'
  import { browser } from '$app/environment'
  import { onBrowser, setCT, setServerIpAddress } from '$lib/utils/Utils'
  import LogoWithBrand from '$lib/components/global-view/LogoWithBrand.svelte'
  import { onMount } from 'svelte'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import { APManager } from '../lib/utils/p/s'
  import NoInternetDialog from '$lib/components/global-view/NoInternetDialog.svelte'
  import MusicPlaySmallView from '$lib/components/global-view/MusicPlaySmallView.svelte'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
  import ZeneMusicPlayer from '$lib/components/music-player/ZeneMusicPlayer.svelte'
  import { setUpForegroundFCM } from '$lib/firebase/firebase'
  import AlertDialog from '$lib/components/global-view/AlertDialog.svelte'
  import type { NotificationAlertsData } from '../domain/local/entities/NotificationAlertsData'
  import { wait } from '$lib/utils/indexd'
  import { notificationAlertListener } from '$lib/utils/f'
  import RightClickMenu from '$lib/components/global-view/RightClickMenu.svelte'
  import { pppllaaayyyPatthh } from '$lib/utils/pid'
  // import MyWorker from '$lib/assets/worker/ap'
  import axios from 'axios'

  axios.defaults.timeout = 20000

  export let data: any

  $: browser ? onBrowser() : ''

  let audioPlayer: APManager

  let songMenuDialog: MusicData | null = null

  let songPlayer: Boolean = false

  let notificationAlert: NotificationAlertsData | null = null

  if (browser) {
    if ('__TAURI__' in window) setServerIpAddress()
    setCT(data.t as number, data.a as string)
  }

  onMount(async () => {
    audioPlayer = new APManager()
    audioPlayer.init()

    document.addEventListener('songplayer', async (event: Event) => {
      songPlayer = (event as CustomEvent).detail.value as Boolean
    })

    document.addEventListener('changeplaybackspeed', async (event: Event) => {
      await wait(1000)
      audioPlayer.playbackSpeed()
    })

    document.addEventListener('notificationalert', async (event: Event) => {
      const notification = (event as CustomEvent).detail.value as NotificationAlertsData
      if (notification?.title == notificationAlert?.title && notification?.desc == notificationAlert?.desc && notification?.desc == notificationAlert?.desc) return

      if (notificationAlert != null) {
        notificationAlert = null
        await wait(500)
      }
      notificationAlert = notification
    })

    document.addEventListener('playsongid', async (event: Event) => {
      const song = (event as CustomEvent).detail.value as MusicData
      audioPlayer.startBuffering()
      audioPlayer.stop()
      try {
        audioPlayer.startBuffering()
        audioPlayer.playMusic(pppllaaayyyPatthh(song.songId ?? '', data.p), song, data.p)
      } catch (error) {
        notificationAlertListener('Error while loading song.', 'Please try again or check your internet connection.', song.thumbnail ?? null)
      }
    })

    document.addEventListener('songdialog', (event: Event) => {
      songMenuDialog = (event as CustomEvent).detail.value
    })

    document.body.onkeyup = (e) => {
      if ((e.key == ' ' && e.code == 'Space') || (e.key == 's' && e.code == 'KeyS')) audioPlayer.playOrPause()
      if ((e.key == 'ArrowRight' && e.code == 'ArrowRight') || (e.key == 'd' && e.code == 'KeyD')) audioPlayer.seekForward(5)
      if ((e.key == 'ArrowLeft' && e.code == 'ArrowLeft') || (e.key == 'a' && e.code == 'KeyA')) audioPlayer.seekBackward(5)
    }

    setTimeout(() => {
      setUpForegroundFCM()
    }, 2000)
  })
</script>

{#if $page.url.pathname === '/home' || $page.url.pathname === '/faq' || $page.url.pathname === '/privacy-policy'}
  <LogoWithBrand showOnlyLogo={true} />
  <slot />
{:else}
  <LogoWithBrand showOnlyLogo={false} />
  <main>
    <slot />
  </main>
  <MusicPlaySmallView {audioPlayer} />

  {#if songMenuDialog != null}
    <SongInfoSheet bind:songMenuDialog />
  {/if}

  {#if songPlayer === true}
    <ZeneMusicPlayer bind:songPlayer bind:audioPlayer />
  {/if}

  <RightClickMenu bind:audioPlayer />
{/if}

<NoInternetDialog />

{#if notificationAlert != null}
  <AlertDialog bind:notificationAlert />
{/if}
