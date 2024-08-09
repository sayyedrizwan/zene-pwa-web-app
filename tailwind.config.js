import { white as _white, stone } from 'tailwindcss/colors'

export const purge = ['./src/**/*.svelte', './src/**/*.css']
export const darkMode = true
export const theme = {
  colors: {
    white: _white,
    gray: stone,
    'svelte-prime': '#ff5030',
    maincolor: '#1A227F',
    black: '#000000',
    peach: '#EEA47F',
    lightblue: '#96a0e3',
    blue: '#0000FF',
    lightblack: '#2e2e2e',
    transparent: '#ffffff00',
  }
}
export const variants = {
  extend: {},
}
