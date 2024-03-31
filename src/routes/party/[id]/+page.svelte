<script lang="ts">
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'
  import io from 'socket.io-client'
  import { wait } from '$lib/utils/indexd'

  export let data: any

  let partyId: string | null = null

  if (browser) partyId = data.urlid

  onMount(async () => {
    // await wait(2500)
    // const url = 'wss://rtc1.free4.chat/socket/websocket?vsn=2.0.0'
    // let socket = io('wss://rtc1.free4.chat', {
    //   // cert
    //   path: '/socket/websocket',
    //   query: {
    //     vsn: '2.0.0',
    //   },
    //   withCredentials: false,
    //   transports: ['websocket'],
    //   reconnectionAttempts: 5,
    //   extraHeaders: {
    //     'Origin': 'https://www.free4.chat',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*',
    //     'Access-Control-Expose-Headers': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //   }
    // })
    // socket.on('connect', () => {
    //   console.log('Connected to WebSocket')
    // })
    // socket.on('connect_error', (err) => {
    //   console.log(`connect_error due to ${err.message}`)
    // })
    // socket.on('message', (data) => {
    //   console.log('Received message:', data)
    // })
  })

  async function triggerOpenApp() {
    if (/Android/.test(navigator.userAgent) && /tablet/.test(navigator.userAgent)) window.open(`intent://https://zenemusic.co/party/${partyId}`)
    setTimeout(() =>   window.location.replace('https://play.google.com/store/apps/details?id=com.rizwansayyed.zene'), 700)
  }
</script>

<svelte:head>
  <title>Song Group Party on Zene</title>
  <meta name="description" content="Start a sync-enabled song party, where everyone can seamlessly join, enjoy, and watch music videos together in perfect harmony" />
  <meta name="og:description" content="Start a sync-enabled song party, where everyone can seamlessly join, enjoy, and watch music videos together in perfect harmony" />
  <meta property="og:title" content="Song Party on Zene" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Song Party on Zene" />
</svelte:head>

<div class="w-full flex flex-col justify-items-center items-center">
  <h2 class="text-white urbanist-bold w-full text-center mt-24 text-9xl">🎉</h2>
  <h3 class="text-white urbanist-regular w-full text-center mt-14 text-lg">Song Group Party is now only supported in Android App.</h3>
  <h3 class="text-white urbanist-regular w-full text-center mt-1 text-lg">We are currently working around to implement song group party in all the Web App. Please stay with us.</h3>

  <button class="p-4 rounded-lg shadow-lg bg-maincolor flex justify-center cursor-pointer col-span-full md:col-auto mt-9" on:click|stopPropagation={triggerOpenApp}>
    <p class="text-white urbanist-semibold text-base mx-5">Open on Android App</p>
  </button>
</div>

<div class="h-60" />
