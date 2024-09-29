import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
	plugins: [sveltekit()],
	// plugins: [sveltekit(), mkcert()],
	server: {
		watch : {
			usePolling: true
		},
		host: true,
        // https: true,
        proxy: {},
		port: 3419,
		strictPort: false,
	},
	preview: {
		port: 3419,
		strictPort: false,
	}
});
