module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        veggies: "url('/images/vegetables-2338824_blur.jpg')",
      }),
      zIndex: {
        "-50": "-50",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
