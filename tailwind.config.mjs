/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      colors: {
        dark: '#1f1f1f',
        primary: '#0E1D34',
        smoke: '#6c757d',
        lightenDark: '#313131',
      },

      backgroundColor: {
        dark: '#1f1f1f',
        primary: '#0E1D34',
        lightenDark: '#313131',
      },
    },
  },
  plugins: [],
}
