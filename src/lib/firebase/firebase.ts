import { initializeApp, type FirebaseApp, getApps } from "firebase/app";
import { getAnalytics, logEvent, type Analytics } from "firebase/analytics";
import { browser } from "$app/environment";
import { getMessaging, getToken, type Messaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyByJDZ-o_ucQQbNy-6m3D2D4mJoTss1uA8",
  authDomain: "zene-music.firebaseapp.com",
  projectId: "zene-music",
  storageBucket: "zene-music.appspot.com",
  messagingSenderId: "12742833162",
  appId: "1:12742833162:web:c827b309c459e18b0b5bf3",
  measurementId: "G-H19CKMR6Z4",
};

let app: FirebaseApp | undefined = undefined;
let firebaseAnalytics: Analytics | undefined;
let messaging: Messaging | undefined;

if (browser) {
  try {
    app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    firebaseAnalytics = getAnalytics(app);
    messaging = getMessaging(app);
    logEvent(firebaseAnalytics, "visit_website");
  } catch (error) {
    error;
  }
}

export async function getWebFcmToken(): Promise<String> {
  try {
    const token = await getToken(messaging!, { vapidKey: "BFNVlC-hGEMdlC9ssP0fSN1VeoZqQ6_48p4hc01LiFS04fj2VHTFULj6YZqPc8X8KPZk72t0978Y3teHiiG9dXE" });
    return token;
  } catch (error) {
    return "";
  }
}

export { firebaseAnalytics };
