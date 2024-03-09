<script lang="ts">
  import { onMount } from 'svelte'
  import RightClickItems from './items/RightClickItems.svelte'
  // import { appWindow } from '@tauri-apps/api/window'
  import { goto } from '$app/navigation'
  import { APManager } from '$lib/utils/p/s'
  import { open } from '@tauri-apps/api/shell'
  import { support_mail_server } from '../../../routes/api/utils/utils'

  export let audioPlayer: APManager

  function shortcutListeners() {
    // appWindow.listen('menu_shortcuts', ({ event, payload }) => {
    //   if (payload == 'settings') goto('/settings')
    //   else if (payload == 'refresh') window.location.reload()
    //   else if (payload == 'notifications') console.log('')
    //   else if (payload == 'feed') goto('/feed')
    //   else if (payload == 'search') goto('/search')
    //   else if (payload == 'my_music') goto('/mymusic')
    //   else if (payload == 'play') audioPlayer.playOrPause()
    //   else if (payload == 'next_song') audioPlayer.nextSong()
    //   else if (payload == 'previous_song') audioPlayer.previousSong()
    //   else if (payload == 'seek_forward') audioPlayer.seekForward(5)
    //   else if (payload == 'seek_backward') audioPlayer.seekBackward(5)
    //   else if (payload == 'android') open('https://play.google.com/store/apps/details?id=com.rizwansayyed.zene')
    //   else if (payload == 'download_app') open('https://zenemusic.co/download')
    //   else if (payload == 'mail_us') open(`mailto:${support_mail_server}`)
    //   else if (payload == 'feedback') open(`mailto:${support_mail_server}?subject=feedback`)
    //   else if (payload == 'faq') open('https://zenemusic.co/faq')
    // })
  }

  onMount(() => {
    shortcutListeners()
    const contextMenu = document.getElementById('contextMenu') as HTMLElement
    document.onclick = hideMenu
    document.oncontextmenu = rightClick

    function hideMenu() {
      contextMenu.style.display = 'none'
    }

    function rightClick(e: any) {
      e.preventDefault()
      if (contextMenu.style.display == 'block') hideMenu()
      else {
        contextMenu.style.display = 'block'
        contextMenu.style.left = e.pageX + 'px'
        contextMenu.style.top = e.pageY + 'px'
      }
    }
  })
</script>

<div class="absolute" id="contextMenu" style="display:none">
  <div class="bg-white w-60 border border-gray-300 rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg">
    <RightClickItems text={''} click={() => {}}/>
    <RightClickItems text={'Settings'} click={() => goto('/settings')}/>
    <RightClickItems text={'Refresh'} click={() =>  window.location.reload()}/>

    <hr class="my-3 border-gray-300" />

    <RightClickItems text={'Feed'} click={() => goto('/feed')}/>
    <RightClickItems text={'Search'} click={() => goto('/search')}/>
    <RightClickItems text={'My Music'} click={() => goto('/mymusic')}/>
  </div>
</div>
