/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'lib-', // Alinha o CSS gerado com o plugin do Vite
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  corePlugins: {
    preflight: false, // Evita injetar seletores globais como h1, p, body que quebram o host v4
  },
  theme: {
    extend: {},
  },
  plugins: [],
}