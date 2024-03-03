import { initializeApp, type FirebaseApp, getApps } from 'firebase/app'
import { getAnalytics, type Analytics } from 'firebase/analytics'
import { browser } from '$app/environment'
import { type Messaging, onMessage, getToken } from "firebase/messaging"
import { getMessaging } from "firebase/messaging"

const firebaseConfig = {
  apiKey: 'AIzaSyC6dhNuFEKeoClW69Rwl5v7sjWXVjtfF1Y',
  authDomain: 'be-6eb1c.firebaseapp.com',
  projectId: 'be-6eb1c',
  storageBucket: 'be-6eb1c.appspot.com',
  messagingSenderId: '248438081408',
  appId: '1:248438081408:web:2e2d35e2a402a440ff6365',
  measurementId: 'G-RXEJ4NHQCG',
}

let app: FirebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
let firebaseAnalytics: Analytics | undefined
let firebaseMessaging: Messaging | undefined

if (browser) {

  try {
    firebaseAnalytics = getAnalytics(app)
    firebaseMessaging = getMessaging(app)
  } catch (error) {
    error
  }
}


export async function setUpForegroundFCM() {
  await Notification.requestPermission()

  try {
    getToken(firebaseMessaging!, { vapidKey: "BIwL93F9wFcoIVTYnGhs7iMackQlDbFYKEVbrtCSxRQljWLNFoVQbMOHccBGOG9HZbE7AhZuvBHdgUIu31GBG9M" })

    onMessage(firebaseMessaging!, (payload) => {
      console.log("Message received. ", payload)
      alert("Notificacion")
    })
  } catch (error) {
    error
  }
}

export { firebaseAnalytics, firebaseMessaging }
