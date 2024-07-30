import { firebaseAnalytics } from './firebase'
import { logEvent } from 'firebase/analytics'

export enum AnalyticsEvents {
  OPEN_WEBSITE
}

export function registerFirebaseEvents(events: AnalyticsEvents) {
  const name = AnalyticsEvents[events].toLowerCase()
  if (firebaseAnalytics != undefined) {
    logEvent(firebaseAnalytics, name)
  }
}
