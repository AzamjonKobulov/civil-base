/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          value: '#0B1354',
          gray: {
            100: '#E5E7EB',
            200: '#4B4B4B',
            300: '#828282',
          },
        },
      },
    },
  },
  plugins: [],
};
