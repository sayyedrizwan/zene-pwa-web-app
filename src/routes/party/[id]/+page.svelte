<script lang="ts">
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'
  import io from 'socket.io-client'
  import { wait } from '$lib/utils/indexd'
  export let data: any

  let partyId: string | null = null

  if (browser) partyId = data.urlid

  onMount(async () => {
    await wait(1500)
    let socket = io('wss://rtc1.free4.chat', {
      // cert
      path: '/socket/websocket',
      query: {
        vsn: '2.0.0',
      },
      withCredentials: false,
      transports: ['websocket'],
      reconnectionAttempts: 5,
      extraHeaders: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
      }
    })

    socket.on('connect', () => {
      console.log('Connected to WebSocket')
    })
    socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

    socket.on('message', (data) => {
      console.log('Received message:', data)
    })
  })
</script>

<svelte:head>
  <title>Song Party on Zene</title>
  <meta name="description" content="Start a sync-enabled song party, where everyone can seamlessly join, enjoy, and watch music videos together in perfect harmony" />
  <meta name="og:description" content="Start a sync-enabled song party, where everyone can seamlessly join, enjoy, and watch music videos together in perfect harmony" />
  <meta property="og:title" content="Song Party on Zene" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Song Party on Zene" />
</svelte:head>

<div class="h-60" />
