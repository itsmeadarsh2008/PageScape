/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily:{
      "superhead":['Bebas Neue', 'cursive'],
      "plexsans":['IBM Plex Sans', 'sans-serif'],
      "majormono":['Major Mono Display', 'monospace']
    }
  },
  plugins: [require("daisyui")],
}