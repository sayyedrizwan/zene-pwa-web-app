const rootDomain = "zenemusic.co"

const cspDirectives = {
    'base-uri': ["'self'"],
    'child-src': ["'self'"],
    'connect-src': ["'self'", 'ws://localhost:*', 'https://*.googleapis.com', 'https://www.google-analytics.com', 'https://*.sentry.io/'],
    'img-src': ["'self'", 'data:', '*'],
    'font-src': ["'self'", 'data:', 'https://*.cloudflare.com'],
    'form-action': ["'self'"],
    'frame-ancestors': ["'self'"],
    'frame-src': ["'self'", 'https://www.youtube.com/'],
    'manifest-src': ["'self'"],
    'media-src': ["'self'", 'data:', '*'],
    'object-src': ["'none'"],
    'style-src': ["'self'", "'unsafe-inline'", 'https://*.cloudflare.com'],
    'default-src': ['self', ...(rootDomain ? [rootDomain, `ws://${rootDomain}`] : [])],
    'script-src': [ 'self', "unsafe-inline", "unsafe-eval", 'sha256-/+QATIB1962kNiZkZgIIgvGUbjR8HiSvIEtNTgBAZOY=', 'https://www.googletagmanager.com', 'https://browser.sentry-cdn.com'],
    'worker-src': ["'self'"],
    'report-to': ["'csp-endpoint'"],
    // 'report-uri': [
    //     `https://sentry.io/api/${process.env.VITE_SENTRY_PROJECT_ID}/security/?sentry_key=${process.env.VITE_SENTRY_KEY}`,
    //   ],
}

export default cspDirectives