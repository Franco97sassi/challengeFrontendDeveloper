/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    //  "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{html,js,jsx}"
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      },
      screens: {
        '3xl': '1600px', // Adds a new `3xl:` screen variant
      }
    },
  },
  plugins: [],
};
