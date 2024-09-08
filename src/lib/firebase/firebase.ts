import { initializeApp, type FirebaseApp, getApps } from 'firebase/app'
import { getAnalytics, logEvent, type Analytics } from 'firebase/analytics'
import { browser } from '$app/environment'


const firebaseConfig = {
  apiKey: "AIzaSyByJDZ-o_ucQQbNy-6m3D2D4mJoTss1uA8",
  authDomain: "zene-music.firebaseapp.com",
  projectId: "zene-music",
  storageBucket: "zene-music.appspot.com",
  messagingSenderId: "12742833162",
  appId: "1:12742833162:web:c827b309c459e18b0b5bf3",
  measurementId: "G-H19CKMR6Z4"
};

let app: FirebaseApp | undefined = undefined
let firebaseAnalytics: Analytics | undefined

if (browser) {
  try {
    app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
    firebaseAnalytics = getAnalytics(app)
    logEvent(firebaseAnalytics, 'visit_website')
  } catch (error) {
    error
  }
}

export { firebaseAnalytics }
