import { AnalyticsEvents, registerFirebaseEvents } from "$lib/firebase/registerAnalytics";

export function onBrowser() {
  registerFirebaseEvents(AnalyticsEvents.OPEN_WEBSITE);

  if (isRunOnPWA()) {
    registerFirebaseEvents(AnalyticsEvents.OPEN_WEB_AS_APP);
  }

  document.addEventListener("visibilitychange", () => {
    const state = document.visibilityState;
    if (state === "hidden") {
     alert('isHidden')
    }else if (state === "visible") {
      alert('visible')
    }
  });
}

export function isRunOnPWA(): Boolean {
  const isInStandaloneMode = () => window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone || document.referrer.includes('android-app://');
  return isInStandaloneMode();
}
