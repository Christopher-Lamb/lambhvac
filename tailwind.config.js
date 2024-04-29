/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    options: {
      safelist: [/md:/, /lg:/, /bg-/, ""], // Add specific classes or patterns
    },
  },
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, "./src/templates/**/*.{js,jsx,ts,tsx}", `./src/components/**/*.{js,jsx,ts,tsx,module.css}`],
  // purge: {
  //   content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  //   options: {
  //     safelist: [/^md:/, /^xl:/], // Add patterns or specific classes you expect to be dynamic
  //   },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        lightgray: "#f9fafb",
        lambblue: "#2458a6",
        lambbluedarker: "#1a4381",
        sand: "#F4DEB3",
      },
      maxWidth: {
        five: "1215.9808px",
        four: " 751.5296px",
        three: "464.48px",
        two: "287.0704px",
        one: "177.4192px",
        large: "109.6592px",
        med: "67.7696px",
        small: "41.8896px",
        xsmall: "25.88px",
        "2xsmall": "16px",
        "3xsmall": "9.8896px",
      },
      spacing: {
        five: "1215.9808px",
        four: " 751.5296px",
        three: "464.48px",
        two: "287.0704px",
        one: "177.4192px",
        large: "109.6592px",
        med: "67.7696px",
        small: "41.8896px",
        xsmall: "25.88px",
        "2xsmall": "16px",
        "3xsmall": "9.8896px",
      },
      fontSize: {
        two: ["6.8537rem", "1"],
        one: ["4.2356rem", "1"],
        large: ["2.6181rem", "2.8799rem"],
        medlarge: ["2.1175rem", "2.4752rem"],
        med: ["1.6175rem", "2.0704rem"],
        small18: ["1.125rem", "1.5rem"],
        small: ["1rem", "1.5rem"],
        xsmall: ["0.6181rem", "0.883rem"],
      },
    },
  },
  plugins: [],
};
