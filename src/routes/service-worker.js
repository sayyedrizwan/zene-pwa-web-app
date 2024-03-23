/// <reference types="@sveltejs/kit" />
import { env } from '$env/dynamic/public';
import { build, files, version } from '$service-worker'

const CACHE = `cache-${version}`;

const ASSETS = [ ...build, ...files ]

self.addEventListener('install', (event) => {
    async function addFilesToCache() {
        const cache = await caches.open(CACHE)
        await cache.addAll(ASSETS)
    }
    // @ts-ignore
    event.waitUntil(addFilesToCache())
})

self.addEventListener('activate', (event) => {
    async function deleteOldCaches() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) await caches.delete(key)
        }
    }
    // @ts-ignore
    event.waitUntil(deleteOldCaches())
})
