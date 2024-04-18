// /// <reference types="@sveltejs/kit" />
// import { build, files, version } from '$service-worker'

// const CACHE = `cache-${version}`;

// const ASSETS = [ ...build, ...files ]

// self.addEventListener('install', (event) => {
//     async function addFilesToCache() {
//         const cache = await caches.open(CACHE)
//         await cache.addAll(ASSETS)
//     }
//     // @ts-ignore
//     event.waitUntil(addFilesToCache())
// })

// self.addEventListener('activate', (event) => {
//     async function deleteOldCaches() {
//         for (const key of await caches.keys()) {
//             if (key !== CACHE) await caches.delete(key)
//         }
//     }
//     // @ts-ignore
//     event.waitUntil(deleteOldCaches())
// })

// import { build, files, prerendered, version } from "$service-worker"
// import { precacheAndRoute } from "workbox-precaching"

// const precache_list = [
//   "/",
//   ...build,
//   ...files,
//   ...prerendered,
// ].map((s) => ({
//   url: s,
//   revision: version,
// }));

// precacheAndRoute(precache_list)

const OFFLINE_VERSION = 1
const CACHE_NAME = 'offline'
const OFFLINE_URL = '/mymusic'

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)

      await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }))
    })(),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable()
      }
    })(),
  )

  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse
          if (preloadResponse) {
            return preloadResponse
          }

          const networkResponse = await fetch(event.request)
          return networkResponse
        } catch (error) {
          const cache = await caches.open(CACHE_NAME)
          const cachedResponse = await cache.match(OFFLINE_URL)
          return cachedResponse
        }
      })(),
    )
  }
})
