import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

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
    port: 3419,
    strictPort: false,
  },
  preview: {
    port: 3419,
    strictPort: false,
  },

  plugins: [
    sveltekit()
  ]
})
