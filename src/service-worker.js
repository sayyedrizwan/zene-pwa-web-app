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

import { build, files, prerendered, version } from "$service-worker"
import { precacheAndRoute } from "workbox-precaching"

const precache_list = [
  "/",
  ...build,
  ...files,
  ...prerendered,
].map((s) => ({
  url: s,
  revision: version,
}));

precacheAndRoute(precache_list)