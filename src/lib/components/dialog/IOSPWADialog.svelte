<script lang="ts">
    import iPhoneShareIcon from '$lib/assets/img/ios_share_iphone.png'
    import iPadShareIcon from '$lib/assets/img/ipad_share_iphone.png'
  export let close: () => void
</script>

<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full bg-black bg-opacity-70">
  <div id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <div>
            <h3 class="text-xl font-semibold text-black urbanist-semibold">Install Zene in IOS</h3>
            <p class="text-base text-black urbanist-regular">Zene currenly is not avaliable on App Store because of some App Store conflict but we are try our best to be on App Store.</p>
          </div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" on:click|stopPropagation={close}>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-900 urbanist-regular">NOTE: App can be installed only on your iPhone/iPad only via Safari.</p>
          <p class="text-base leading-relaxed text-gray-900 urbanist-regular">STEP 1. Tap the share button at the bottom of the screen (it looks like a square with an arrow pointing upwards).</p>
          <div class="content flex py-2">
            <div class="item-body px-2">On iPhone :</div>
            <img class="w-48" src={iPhoneShareIcon} alt="iPhone sharing" />
            
            <div class="item-body px-2">On iPad :</div>
            <img class="w-48" src={iPadShareIcon} alt="iPhone sharing" />
          </div>

          <p class="text-base leading-relaxed text-gray-900 urbanist-regular">STEP 2. Scroll down and tap on "Add to Home Screen".</p>
          <p class="text-base leading-relaxed text-gray-900 urbanist-regular">STEP 3. You might be prompted to name the app, after which you can tap "Add".</p>
          <p class="text-base leading-relaxed text-gray-900 urbanist-regular">STEP 4. Open and access Zene music installed on your homescreen.</p>
          
        </div>

        <button data-modal-hide="static-modal" type="button" class="text-white bg-maincolor font-medium rounded-lg text-sm px-5 py-2.5 text-center urbanist-regular m-6" on:click|stopPropagation={close}>Close</button>
      </div>
    </div>
  </div>
</div>
