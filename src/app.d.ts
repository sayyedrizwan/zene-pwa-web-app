import 'vite-plugin-pwa/svelte';
import 'vite-plugin-pwa/info';

declare global {
  declare const __DATE__: string;
  declare const __RELOAD_SW__: boolean;
  namespace App {
    interface Locals {
      userid: string;
      buildDate: string;
      periodicUpdates: boolean;
    }
  }
}

export {};
