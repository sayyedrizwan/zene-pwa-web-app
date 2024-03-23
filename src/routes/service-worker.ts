/// <reference types="@sveltejs/kit" />
import { env } from '$env/dynamic/public';
import { build, files, version } from '$service-worker'

const CACHE = `cache-${version}`;

const ASSETS = [
    ...build, ...files
];

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

self.addEventListener('message', function (event) {
    const data = event.data

    console.log(data)

    const audioe = document.createElement('audio') as HTMLVideoElement
    audioe.controls = true
    audioe.autoplay = true
    audioe.preload = 'auto'

    const mpegsource = document.createElement('source') as HTMLSourceElement
    mpegsource.type = 'audio/mp4'
    audioe.appendChild(mpegsource)

    const sourceElementMPEG = mpegsource
    const audioElement = audioe

    audioElement.oncanplaythrough = async () => {
        audioElement.play()
    }

    audioElement!.autoplay = true
    sourceElementMPEG!.src = `${env.PUBLIC_DOWNLOAD_URL}`.trim()
    audioElement!.load()
})