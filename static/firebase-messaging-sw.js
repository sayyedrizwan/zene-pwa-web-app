importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyByJDZ-o_ucQQbNy-6m3D2D4mJoTss1uA8",
  authDomain: "zene-music.firebaseapp.com",
  projectId: "zene-music",
  storageBucket: "zene-music.appspot.com",
  messagingSenderId: "12742833162",
  appId: "1:12742833162:web:c827b309c459e18b0b5bf3",
  measurementId: "G-H19CKMR6Z4",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  //console.log("firebase-messaging-sw.js Received background message ", payload);
});
