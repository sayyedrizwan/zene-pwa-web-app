/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { initializeApp, type FirebaseApp, getApps } from 'firebase/app'
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw"

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.addEventListener('push', (event) => {
//   const firebaseApp = initializeApp({
//     apiKey: 'AIzaSyC6dhNuFEKeoClW69Rwl5v7sjWXVjtfF1Y',
//     authDomain: 'be-6eb1c.firebaseapp.com',
//     projectId: 'be-6eb1c',
//     storageBucket: 'be-6eb1c.appspot.com',
//     messagingSenderId: '248438081408',
//     appId: '1:248438081408:web:2e2d35e2a402a440ff6365',
//     measurementId: 'G-RXEJ4NHQCG'
//   })

//   const messaging = getMessaging(firebaseApp)

//   onBackgroundMessage(messaging, (payload) => {
//     self.clients.matchAll({type: 'window', includeUncontrolled: true }).then(all =>
//       all.forEach(client => {
//         client.postMessage(payload);
//       })
//     )

//     console.log("[firebase-messaging-sw.js] Received background message ", payload);
//     const notificationTitle = "Background Message Title";
//     const notificationOptions = {
//       body: "Background Message body.",
//       icon: "/vercel.svg",
//     }

//     self.registration.showNotification(notificationTitle, notificationOptions)
//   })
// })


// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

// clean old assets
cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV) allowlist = [/^\/$/]

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL('/'), { allowlist }))
