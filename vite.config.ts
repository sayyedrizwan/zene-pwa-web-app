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
			allow: ['../..']
		},
		port: 2173,
		strictPort: false,
	},
	preview: {
		port: 2173,
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
				short_name: 'SvelteKit PWA',
				name: 'SvelteKit PWA',
				start_url: '/',
				scope: '/',
				display: 'standalone',
				theme_color: "#ffffff",
				background_color: "#ffffff",
				icons: [
					{
						src: '/logo192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/logo512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/logo512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
			injectManifest: {
				globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
			},
			workbox: {
				globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
			},
			devOptions: {
				enabled: true,
				suppressWarnings: process.env.SUPPRESS_WARNING === 'true',
				type: 'module',
				navigateFallback: '/',
			},
			kit: {
				includeVersionFile: true,
			}
		})],
});
