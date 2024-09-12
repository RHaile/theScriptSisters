import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda SC"', 'serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["retro"],
  }
}