import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { generateSW } from './pwa.mjs'
import adapter from '@sveltejs/adapter-auto'

const config = {
  preprocess: vitePreprocess(),

  kit: {
    env: {
      dir: './',
    },
    adapter: adapter(),
    serviceWorker: {
      register: true,
    },
    prerender: {
      entries: ['/api'],
    },
    files: {
      serviceWorker: 'src/prompt-sw.ts',
    },
  },
}
export default config
