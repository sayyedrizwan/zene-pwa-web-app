<script lang="ts">
  import NotificationIcon from '$lib/assets/img/ic_notification.svg'
  import SeachIcon from '$lib/assets/img/ic_search.svg'
  import MusicIcon from '$lib/assets/img/ic_music.svg'
  import HomeIcon from '$lib/assets/img/ic_home.svg'

  export let showOnlyLogo: boolean
</script>

<header class="relative z-30 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
  <nav>
    <div class="mx-2 md:mx-4 flex flex-wrap items-center justify-between px-2 md:px-5">
      <a href="/" class="relative flex items-center py-[2.125rem]">
        <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
        <img src="/logo120.png" alt="zene" class="w-14" />
        <div class="ml-auto flex items-center ms-4">
          <p class="text-white urbanist-semibold text-xl">Zene <span class="urbanist-thin">(Beta)</span></p>
        </div>
      </a>

      {#if !showOnlyLogo}
        <div class="hidden md:block w-auto">
          <ul class="font-medium flex items-center p-0 mt-4 flex-row fill-white">
            <li class="group hover-animation pt-5 me-4">
              <center>
                <img src={NotificationIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer" alt="notification" />
                <h1 class="text-white text-sm urbanist-thin hover-animation block invisible group-hover:visible">notification</h1>
              </center>
            </li>

            <li class="group hover-animation pt-5 me-4">
              <center>
                <a href="/search">
                  <img src={SeachIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer" alt="notification" />
                  <h1 class="text-white text-sm urbanist-thin hover-animation block invisible group-hover:visible">&nbsp;&nbsp;&nbsp;search&nbsp;&nbsp;&nbsp;</h1>
                </a>
              </center>
            </li>

            <li class="group hover-animation pt-5 me-4">
              <center>
                <a href="/mymusic">
                  <img src={MusicIcon} class="size-6 group-hover:size-8 fill-white hover-animation cursor-pointer" alt="notification" />
                  <h1 class="text-white text-sm urbanist-thin hover-animation block invisible group-hover:visible">&nbsp;&nbsp;my music&nbsp;&nbsp;</h1>
                </a>
              </center>
            </li>
          </ul>
        </div>

        <div class="fixed bottom-2 bg-gray-800 w-11/12 z-50 py-4 rounded-full grid grid-cols-4 gap-4 place-items-center">
          <center>
            <img src={HomeIcon} class="size-6" alt="home" />
            <a href="/" class="urbanist-light text-xs text-white">home</a>
          </center>
           <center>
            <img src={HomeIcon} class="size-6" alt="home" />
            <a href="/" class="urbanist-light text-xs text-white">home</a>
          </center>
           <center>
            <img src={HomeIcon} class="size-6" alt="home" />
            <a href="/" class="urbanist-light text-xs text-white">home</a>
          </center>
           <center>
            <img src={HomeIcon} class="size-6" alt="home" />
            <a href="/" class="urbanist-light text-xs text-white">home</a>
          </center>
        </div>

        <!-- <div class="fixed z-50 w-full py-4 m-9 bg-gray-900 rounded-full bottom-4 left-1/2">
          
          <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span class="sr-only">Home</span>
            </button>
            <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Home
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-wallet" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
              </svg>
              <span class="sr-only">Wallet</span>
            </button>
            <div id="tooltip-wallet" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Wallet
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <div class="flex items-center justify-center">
              <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
                <span class="sr-only">New item</span>
              </button>
            </div>
            <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Create new item
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                />
              </svg>
              <span class="sr-only">Settings</span>
            </button>
            <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Settings
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <span class="sr-only">Profile</span>
            </button>
            <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Profile
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div> -->
      {/if}
    </div>
  </nav>
</header>
