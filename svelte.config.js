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
