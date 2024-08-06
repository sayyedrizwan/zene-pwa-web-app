import { AnalyticsEvents, registerFirebaseEvents } from "$lib/firebase/registerAnalytics"

export function onBrowser() {
    registerFirebaseEvents(AnalyticsEvents.OPEN_WEBSITE)
}

export const support_mail_server = 'knocknock@zenemusic.co'