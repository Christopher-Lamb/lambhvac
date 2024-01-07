/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx,module.css}`],
  safelist: [
    {
      pattern: /h-\[\d+px\]/, // Regex pattern to match your dynamic classes
    },
    // You can add more patterns here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
