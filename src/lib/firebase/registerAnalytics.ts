import { firebaseAnalytics } from './firebase'
import { logEvent } from 'firebase/analytics'

export enum AnalyticsEvents {
  OPEN_WEBSITE,
  OPEN_WEB_AS_APP,
}

export function registerFirebaseEvents(events: AnalyticsEvents) {
  const name = AnalyticsEvents[events].toLowerCase()
  if (firebaseAnalytics != undefined) {
    logEvent(firebaseAnalytics, name)
  }
}
