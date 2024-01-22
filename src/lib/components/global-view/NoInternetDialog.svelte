<script lang="ts">
  import { isRunOnPWA } from '$lib/utils/Utils'
  import { onMount } from 'svelte'
  import NO_INTERNET from '$lib/assets/img/ic_no_internet.svg'

  let showDialog: boolean = false

  function updateOnlineStatus() {
    if (navigator.onLine) {
      if (localStorage.getItem('offline_refresh') === 'false') {
        localStorage.setItem('offline_refresh', 'true')
        window.location.reload()
      }
    } else {
      localStorage.setItem('offline_refresh', 'false')
      showDialog = true
    }
  }

  onMount(() => {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    if (isRunOnPWA()) updateOnlineStatus()
  })
</script>

{#if showDialog}
  <div class="w-full h-full fixed z-50 top-0 right-0 left-0 bg-gray-600 bg-opacity-80 flex justify-center items-center">
    <div class="p-4 w-full max-w-md max-h-full">
      <div class="relative bg-maincolor rounded-lg shadow dark:bg-gray-700">
        <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparentrounded-lg text-sm size-8" on:click={() => (showDialog = false)}>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 md:p-5 text-center">
          <center>
            <img src={NO_INTERNET} alt="no internet" class="w-12 items-center justify-center" />
          </center>

          <h3 class="my-5 text-lg font-normal text-white">No Internet Avalible!! You are offline. Please connect to the internet for better experience.</h3>
          <button data-modal-hide="popup-modal" type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" on:click={() => (showDialog = false)}>Continue</button>
          <button class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5" on:click={() => window.location.reload()}>Refresh</button>
        </div>
      </div>
    </div>
  </div>
{/if}
