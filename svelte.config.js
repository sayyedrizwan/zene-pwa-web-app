import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { generateSW } from "./pwa.mjs";
import adapter from "@sveltejs/adapter-vercel";

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    serviceWorker: {
      register: false,
    },
    prerender: {
      entries: ["/theapi"],
    },
    files: {
      serviceWorker: generateSW ? undefined : "src/prompt-sw.ts",
    },
  },
};
export default config;
