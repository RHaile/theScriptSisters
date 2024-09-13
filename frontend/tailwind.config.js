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
        bonanova: ['"Bona Nova SC", serif'],
        lora: ['"Lora", serif'],
        raleway: ['"Raleway", sans-serif'],
        montserrat: ['"Montserrat", sans-serif'],
        neuton: ['"Neuton", serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": {
            default: "cd7f32",
            light: 'rgba(205, 127, 50, 0.5)',
          },
          "base-100": "#c7d2ab",
          
        },
}
]}}
