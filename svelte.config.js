import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { generateSW } from './pwa.mjs'
import { adapter } from './adapter.mjs'

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter,
		serviceWorker: {
			register: false,
		},
		files: {
			serviceWorker: generateSW ? undefined : 'src/prompt-sw.ts',
		}
	}
};

export default config;
