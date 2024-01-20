import { sveltekit } from '@sveltejs/kit/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite'
import { generateSW } from './pwa.mjs'

export default defineConfig({
  logLevel: 'info',
  build: {
    minify: false,
  },
  define: {
    __DATE__: `'${new Date().toISOString()}'`,
    __RELOAD_SW__: false,
    'process.env.NODE_ENV': process.env.NODE_ENV === 'production' ? '"production"' : '"development"',
  },
  server: {
    fs: {
      allow: ['../..'],
    },
    port: 1173,
    strictPort: false,
  },
  preview: {
    port: 1173,
    strictPort: false,
  },

  plugins: [
    sveltekit(),
    SvelteKitPWA({
      srcDir: './src',
      mode: 'development',
      strategies: generateSW ? 'generateSW' : 'injectManifest',
      filename: generateSW ? undefined : 'prompt-sw.ts',
      scope: '/',
      base: '/',
      selfDestroying: process.env.SELF_DESTROYING_SW === 'true',
      manifest: {
        short_name: 'Zene',
        name: 'Zene: A Free Music App',
        start_url: 'https://zenemusic.co',
        scope: '/',
        display: 'standalone',
        theme_color: 'black',
        background_color: 'black',
        id: '/',
        description: 'Zene: Immerse in ad-free bliss with 1B+ songs. Elevate your vibe. 🎶✨',
        shortcuts: [
          {
            name: 'Search',
            short_name: 'Search',
            description: 'Search for your favourite songs, artists or albums',
            url: '/search',
            icons: [{ src: '/src/lib/assets/img/ic_search.svg', sizes: '24x24' }],
          },
        ],
        icons: [
          {
            src: '/icon.svg',
            sizes: 'image/svg+xml',
            type: 'image/png',
          },
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo76.png',
            sizes: '76x76',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo120.png',
            sizes: '120x120',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo167.png',
            sizes: '167x167',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/logo820.png',
            sizes: '820x820',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      injectManifest: {
        globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}'],
      },
      workbox: {
        globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}'],
      },
      devOptions: {
        enabled: true,
        suppressWarnings: process.env.SUPPRESS_WARNING === 'true',
        type: 'module',
        navigateFallback: '/',
      },
      kit: {
        includeVersionFile: true,
      },
    }),
  ],
})
