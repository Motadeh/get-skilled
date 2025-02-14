/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#368181',
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif']
      },
      boxShadow: {
        '5xl': '0 -1px 1px 3px rgba(0, 0, 0, 0.04)',
        // 0 -1px 1px 3px rgba(0, 0, 0, 0.04)
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '80': '80%',
      '90': '90%',
      '95': '95%',
      '100': '100%',
      '120': '120%',
    },
  },
  plugins: [],
};
