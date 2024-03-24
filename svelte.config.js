import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-auto'
// import cspDirectives from './csp-directives.mjs'

const config = {
  preprocess: vitePreprocess(),

  kit: {
    env: {
      dir: './',
    },
    adapter: adapter(),
    csp: {
      mode: 'hash',
      // directives: cspDirectives,
    },
    serviceWorker: {
      register: false,
    },
  },
}
export default config
