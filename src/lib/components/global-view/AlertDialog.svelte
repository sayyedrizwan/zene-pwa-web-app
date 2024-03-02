<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type { NotificationAlertsData } from '../../../domain/local/entities/NotificationAlertsData'

  export let notificationAlert: NotificationAlertsData | null

  let timeout: NodeJS.Timeout

  onMount(async () => {
    timeout = setTimeout(() => (notificationAlert = null), 4000)
    const audio = new Audio('/alert_notification.mp3')
    audio.play()
  })

  onDestroy(() => {
   clearTimeout(timeout)
  })
</script>

<div id="toast-notification" class="animate__animated animate__slideInRight fixed top-2 right-2 w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow z-[1500]">
  <div class="flex items-center mb-3">
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New Notification</span>
    <button
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-notification"
      aria-label="Close"
      on:click={() => (notificationAlert = null)}
    >
      <span class="sr-only">Close</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>
  </div>
  <div class="flex items-center">
    <div class="relative inline-block shrink-0">
      <img class="size-12 rounded-full" src={notificationAlert?.img} alt="notification" />
    </div>
    <div class="ms-3">
      <p class="urbanist-semibold text-base text-start text-black line-clamp-1">{notificationAlert?.title}</p>
      <p class="urbanist-regular text-sm text-start text-black line-clamp-3">{notificationAlert?.desc}</p>
    </div>
  </div>
</div>
