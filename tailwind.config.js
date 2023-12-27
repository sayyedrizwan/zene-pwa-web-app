import { white as _white, stone } from 'tailwindcss/colors'
 
export const purge = ['./src/**/*.svelte', './src/**/*.css']
export const darkMode = false
export const theme = {
  colors: {
    white: _white,
    gray: stone,
    'svelte-prime': '#ff5030',
  },
}
export const variants = {
  extend: {},
}
export const plugins = []