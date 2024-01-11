import { AnalyticsEvents, registerFirebaseEvents } from '../firebase/registerAnalytics';

//https://docs.pwabuilder.com/#/starter/quick-start

export function onBrowser() {
  registerFirebaseEvents(AnalyticsEvents.OPEN_WEBSITE);

  if (isRunOnPWA()) {
    registerFirebaseEvents(AnalyticsEvents.OPEN_WEB_AS_APP);
  }
}

export function isRunOnPWA(): Boolean {
  const isInStandaloneMode = () => window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone || document.referrer.includes('android-app://');
  return isInStandaloneMode();
}
