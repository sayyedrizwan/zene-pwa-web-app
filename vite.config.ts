import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3419,
		strictPort: false,
	},
	preview: {
		port: 3419,
		strictPort: false,
	}
});
