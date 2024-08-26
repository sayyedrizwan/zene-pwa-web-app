import { AnalyticsEvents, registerFirebaseEvents } from "$lib/firebase/registerAnalytics";

export function onBrowser() {
  registerFirebaseEvents(AnalyticsEvents.OPEN_WEBSITE);
}

export const support_mail_server = "knocknock@zenemusic.co";

export function openAppOrRedirect(url: String) {
  const appScheme = `app://zene.music.app://${url}`;
  const iosScheme = `zene.music.app://${url}`;
  const appStoreUrl = "https://apps.apple.com/us/app/zene-a-music-app/id6504202797";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.rizwansayyed.zene";

  const isIOS = () => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) return false;
    else if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return true;
    return false;
  };
  if (isIOS()) window.location.href = iosScheme;
  else window.location.href = appScheme;

  let pageHidden = false;

  const onVisibilityChange = () => {
    if (document.hidden) {
      pageHidden = true;
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange);

  const redirectTimeout = setTimeout(() => {
    if (!pageHidden) {
      if (isIOS()) window.location.href = appStoreUrl;
      else window.location.href = playStoreUrl;
    }
  }, 1500);

  setTimeout(() => {
    document.removeEventListener("visibilitychange", onVisibilityChange);
    clearTimeout(redirectTimeout);
  }, 2000);
}
