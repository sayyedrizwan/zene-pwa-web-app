<script lang="ts">
  import TickIcon from '$lib/assets/img/ic_tick.svg'
  import { setCookie } from '$lib/utils/c'

  export let txt: string
  export let list: [string, string][]
  export let cookies_name: string
  export let selected: string

  function changeSettings(txt: string) {
    setCookie(cookies_name, txt)
    selected = txt
  }
</script>

<div class="w-full bg-gray-900 rounded-md">
  <p class="text-white urbanist-semibold text-xl m-4 md:m-7 text-start mb-4">{txt}</p>
  {#each list as t}
    <div class="flex m-5 md:m-9 mt-0 md:mt-2 items-center">
      <button class="text-white urbanist-regular text-sm text-start cursor-pointer w-screen" on:click={() => (t[1] == '' ? changeSettings(t[0]) : changeSettings(t[1]))}>{t[0]}</button>
      {#if selected == t[0] || selected == t[1]}
        <img src={TickIcon} alt="tick" class="size-6" />
      {/if}
    </div>
  {/each}
</div>
