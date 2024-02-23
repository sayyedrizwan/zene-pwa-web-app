importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: 'AIzaSyC6dhNuFEKeoClW69Rwl5v7sjWXVjtfF1Y',
  authDomain: 'be-6eb1c.firebaseapp.com',
  projectId: 'be-6eb1c',
  storageBucket: 'be-6eb1c.appspot.com',
  messagingSenderId: '248438081408',
  appId: '1:248438081408:web:2e2d35e2a402a440ff6365',
  measurementId: 'G-RXEJ4NHQCG'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => { notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/vercel.svg",
  };
  

  self.registration.showNotification(notificationTitle, notificationOptions);
});
