import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { generateSW } from './pwa.mjs'
// import adapter from '@sveltejs/adapter-static'
import adapter from '@sveltejs/adapter-auto'
import cspDirectives from './csp-directives.mjs'

const config = {
  preprocess: vitePreprocess(),

  kit: {
    env: {
      dir: './',
    },
    adapter: adapter(),
    csp: {
      mode: 'hash',
      directives: cspDirectives,
    },
    serviceWorker: {
      register: false,
    },
    prerender: {
      entries: ['/api'],
    },
    files: {
      serviceWorker: generateSW ? undefined : 'src/prompt-sw.ts',
    },
  },
}
export default config
