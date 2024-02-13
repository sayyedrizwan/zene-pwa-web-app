self.importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
self.importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyC6dhNuFEKeoClW69Rwl5v7sjWXVjtfF1Y',
    authDomain: 'be-6eb1c.firebaseapp.com',
    projectId: 'be-6eb1c',
    storageBucket: 'be-6eb1c.appspot.com',
    messagingSenderId: '248438081408',
    appId: '1:248438081408:web:2e2d35e2a402a440ff6365',
    measurementId: 'G-RXEJ4NHQCG',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

const t = await messaging.getToken(firebaseMessaging, { vapidKey: 'BIwL93F9wFcoIVTYnGhs7iMackQlDbFYKEVbrtCSxRQljWLNFoVQbMOHccBGOG9HZbE7AhZuvBHdgUIu31GBG9M' })
console.log(t)

messaging.setBackgroundMessageHandler((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.title;
    const notificationOptions = {
        body: payload.body,
        icon: '/favicon.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
    console.log('ddhdbd')
    const clickedNotification = event.notification;
    clickedNotification.close();
    const promiseChain = clients
        .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
        .then(windowClients => {
            let matchingClient = null;
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                if (windowClient.url === feClickAction) {
                    matchingClient = windowClient;
                    break;
                }
            }
            if (matchingClient) {
                return matchingClient.focus();
            } else {
                return clients.openWindow(feClickAction);
            }
        });
    event.waitUntil(promiseChain);
});