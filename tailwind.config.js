/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors:{
        primary:"#B88E2F",
        fontColor:"#333333",
        fontColorSecondary:"#666666",
      },
      screens: {
        xxs: "360px",
        xs: "390px",
        sm: "640px",
        md: "768px",
        mdd: "820px",
        "md-xl": "990px",
        "lg-lg": "1024px",
        lg: "1152px",
        xl: "1280px",
        "2xl": "1536px",
      }
    },
  },
  plugins: [],
}

