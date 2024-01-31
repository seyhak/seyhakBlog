/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  colors: {
    // i dont want to use it in tailwind I just want to use it as notes
    // "primary-text-color-dark-hover: white",
    // "primary-text-color-dark: blue-100",
    // "primary-text-color-light-hover: indigo-700",
    // "primary-text-color-light: black",
    // "primary-bg-dark: blue-950",
    // "primary-bg-light: blue-950",
    // "primary-bg-light: blue-950",
    // "secondary-bg-dark: blue-950",
    // "secondary-bg-light: gray-950",
  },
  theme: {
    extend: {
      ...defaultTheme
      // fontSize: {
      // 	sm: '0.8rem',
      // 	base: '1rem',
      // 	xl: '1.25rem',
      // 	'2xl': '1.563rem',
      // 	'3xl': '1.953rem',
      // 	'4xl': '2.441rem',
      // 	'5xl': '3.052rem',
      // },
      // fontFamily: {
      //   // 'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      //   // 'sans': ['"cursive"', ...defaultTheme.fontFamily.sans],
      // },
    }
  },
  plugins: []
}
