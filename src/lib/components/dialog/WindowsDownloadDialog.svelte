<script lang="ts">
  export let close: () => void

  function downloadForWindows(file: string) {
    const anchor = document.createElement('a')
    anchor.href = `/download/Zene_windows.${file}`
    anchor.download = `Zene_windows.${file}`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    alert('Download started... Please install the file on your Windows.')
    close()
  }
</script>

<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full bg-black bg-opacity-70">
  <div id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <div>
            <h3 class="text-xl font-semibold text-black urbanist-semibold">Download Zene in Windows</h3>
          </div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" on:click={close}>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-900 urbanist-regular">Zene Windows App is avaliable in msi and exe file to install.</p>
          <div class="flex justify-between">
            <button on:click={() => downloadForWindows('msi')} class="shadow-lg rounded-xl bg-maincolor flex flex-row items-center justify-center cursor-pointer m-5">
              <h2 class="font-bold text-xl leading-snug text-white urbanist-bold px-11 py-14 text-center self-center">Download .msi</h2>
            </button>

            <button on:click={() => downloadForWindows('exe')} class="shadow-lg rounded-xl bg-maincolor flex flex-row items-center justify-center cursor-pointer m-5">
              <h2 class="font-bold text-xl leading-snug text-white urbanist-bold px-11 py-14 text-center self-center">Download .exe</h2>
            </button>
          </div>
        </div>

        <button data-modal-hide="static-modal" type="button" class="text-white bg-maincolor font-medium rounded-lg text-sm px-5 py-2.5 text-center urbanist-regular m-6" on:click={close}>Close</button>
      </div>
    </div>
  </div>
</div>
