import { white as _white, stone } from "tailwindcss/colors";

export const purge = ["./src/**/*.svelte", "./src/**/*.css"];
export const darkMode = true;
export const theme = {
  colors: {
    white: _white,
    gray: stone,
    "svelte-prime": "#ff5030",
    "maincolor": "#1A227F"
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
