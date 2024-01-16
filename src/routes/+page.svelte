<script lang="ts">
  import './tailwind.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { browser } from '$app/environment'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
  import type { MusicData } from '../domain/local/entities/MusicData'
  export let data: any

  let songMenuDialog: MusicData | null = null

  let key: string | null = null
  if (browser) {
    key = window.atob(data.data)

    document.addEventListener('songdialog', (event: Event) => {
      songMenuDialog = (event as CustomEvent).detail.value
    })
  }
</script>


{#if key != null}
  <TopListeningSongs authKey={key} />

  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
  <br />
  <div>This div should be 2/3 of the remaining screen (i.e., screen excluding the sidebar)</div>
{/if}

{#if songMenuDialog != null}
  <SongInfoSheet />
{/if}
