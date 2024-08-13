/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      rotate: {
        20: "20deg",
      },
      skew: {
        20: "20deg",
      },
    },
  },

  plugins: [],
};
