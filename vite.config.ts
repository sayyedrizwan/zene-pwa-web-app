import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA({
		strategies: 'injectManifest',
		srcDir: 'src',
		filename: 'service-worker.js'
	})],
	define: {
		"process.env.NODE_ENV": '"production"',
	}
});
