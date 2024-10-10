import { getWebFcmToken } from "$lib/firebase/firebase";
import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { enTheVal, gKEnc } from "./ad_ss";
import { e_mail_info, setCookie } from "./Cookies";

enum LOGIN_TYPE {
  GOOGLE,
  APPLE,
  FACEBOOK,
}

export function startGoogleSignIn() {
  startSignIn(LOGIN_TYPE.GOOGLE);
}

export function startFacebookSignIn() {
  startSignIn(LOGIN_TYPE.FACEBOOK);
}

export function startAppleSignIn() {
  startSignIn(LOGIN_TYPE.APPLE);
}

async function loginWithAPI(email: String, name: String, photoURL: String) {
  let ip = "";
  try {
    const ipResponse = await axios.get("http://ip-api.com/json");
    const res = (await ipResponse.data) as any;
    ip = res.query;
  } catch (error) {
    error;
  }

  try {
    const token = await getWebFcmToken();
    await axios.post("/-api-/zuser/webusers", { email: email, name: name, photo: photoURL, ip: ip, token: token, info: window.navigator.userAgent }, { headers: { auth: gKEnc() } });
  } catch (error) {}

  setCookie(e_mail_info, enTheVal(email.toString()));
  window.location.href = "/"
}

async function startSignIn(v: LOGIN_TYPE) {
  const provider: any = v == LOGIN_TYPE.GOOGLE ? new GoogleAuthProvider() : v == LOGIN_TYPE.FACEBOOK ? new FacebookAuthProvider() : v == LOGIN_TYPE.APPLE ? new OAuthProvider("apple.com") : undefined;

  if (v == LOGIN_TYPE.APPLE) {
    provider.addScope("name");
    provider.addScope("email");
  } else if (v == LOGIN_TYPE.FACEBOOK) {
    provider.addScope("public_profile");
    provider.addScope("email");
  } else if (v == LOGIN_TYPE.GOOGLE) {
    provider.addScope("profile");
    provider.addScope("email");
  }
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider);

  let email = "";
  let displayName = "";
  let photoURL = "";

  result.user.providerData.forEach((p) => {
    if (p?.email?.includes("@")) {
      email = p.email;
    }

    if (p?.displayName != null) {
      displayName = p.displayName;
    }

    if (p?.photoURL != null) {
      photoURL = p.photoURL;
    }
  });

  if (!email.includes("@")) {
    return;
  }

  await loginWithAPI(email, displayName, photoURL);
}
