import { AnalyticsEvents, registerFirebaseEvents } from '$lib/firebase/registerAnalytics'

export function onBrowser() {
  registerFirebaseEvents(AnalyticsEvents.OPEN_WEBSITE)

  if (isRunOnPWA()) {
    registerFirebaseEvents(AnalyticsEvents.OPEN_WEB_AS_APP)
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      lastSyncTimeCheck()
    }
  })
}

function lastSyncTimeCheck() {
  const ts = document.cookie.match('(^|;)\\s*' + 'last_sync_ts' + '\\s*=\\s*([^;]+)')?.pop() || ''
  const timeDifferenceInMinutes: number = Math.floor((Date.now() - parseInt(ts)) / (1000 * 60))
  if (timeDifferenceInMinutes > 10) window.location.reload()
}

export function isRunOnPWA(): Boolean {
  const isInStandaloneMode = () => window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone || document.referrer.includes('android-app://')
  return isInStandaloneMode()
}

export function splitArrayIntoChunks<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  return result
}


export function capitalizeFirstLetterOfEveryWords(str: string): string {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, match => match.toUpperCase());
}