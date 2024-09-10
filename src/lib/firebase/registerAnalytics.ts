import { firebaseAnalytics } from './firebase'
import { logEvent } from 'firebase/analytics'

export enum AnalyticsEvents {
  OPEN_WEBSITE, STREAMING_WEB_LOGGED_IN, STREAMING_WEB_SONG_PLAYING, STREAMING_WEB_VIDEO_PLAYING
}

export function registerFirebaseEvents(events: AnalyticsEvents) {
  const name = AnalyticsEvents[events].toLowerCase()
  if (firebaseAnalytics != undefined) {
    logEvent(firebaseAnalytics, name)
  }
}
