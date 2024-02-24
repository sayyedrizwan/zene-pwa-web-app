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
  return str.replace(/(^\w{1})|(\s+\w{1})/g, match => match.toUpperCase())
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const differenceInMilliseconds = now.getTime() - date.getTime()

  const seconds = Math.floor(differenceInMilliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)

  if (seconds < 60) return `${seconds} seconds ago`
  else if (minutes < 60) return `${minutes} minutes ago`
  else if (hours < 24) return `${hours} hours ago`
  else if (days < 30) return `${days} days ago`
  else if (months < 12) return `${months} months ago`
  else return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}



export function getFavIcon(url: String): string {
  return `https://icon.horse/icon/${url.replaceAll("https://", "")}`
}