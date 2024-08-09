import { AnalyticsEvents, registerFirebaseEvents } from "$lib/firebase/registerAnalytics"

export function onBrowser() {
    registerFirebaseEvents(AnalyticsEvents.OPEN_WEBSITE)
}

export const support_mail_server = 'knocknock@zenemusic.co'

export function openAppOrRedirect(url: String) {
    const appScheme = `app://zene.music.app://${url}`
    const appStoreUrl = 'https://apps.apple.com/app/your-app-id'
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.rizwansayyed.zene'
    const userAgent = navigator.userAgent || navigator.vendor || window as any['opera'];

    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window as any['MSStream'];

    window.location.href = appScheme

    let pageHidden = false;

    const onVisibilityChange = () => {
        if (document.hidden) {
            pageHidden = true;
        }
    };
    
    document.addEventListener('visibilitychange', onVisibilityChange);

    const redirectTimeout = setTimeout(() => {
        if (!pageHidden) {
            if (isIOS) window.location.href = appStoreUrl
            else  window.location.href = playStoreUrl
        }
    }, 1500)

    setTimeout(() => {
        document.removeEventListener('visibilitychange', onVisibilityChange)
        clearTimeout(redirectTimeout)
    }, 2000)
}