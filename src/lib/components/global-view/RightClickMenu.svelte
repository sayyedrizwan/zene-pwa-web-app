<script lang="ts">
  import { onMount } from 'svelte'
    import RightClickItems from './items/RightClickItems.svelte'

  onMount(() => {
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
    
    <RightClickItems text={""}/>
    <RightClickItems text={"Settings"}/>
    <RightClickItems text={"Refresh"}/>
    
    <hr class="my-3 border-gray-300" />

    <RightClickItems text={"Notification"}/>
    <RightClickItems text={"Feed"}/>
    <RightClickItems text={"Search"}/>
    <RightClickItems text={"My Music"}/>
  </div>
</div>
