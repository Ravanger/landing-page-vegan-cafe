module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      darkGray: "#1A1C17",
      green: "#88BE44",
      white: "#fff",
    },
    extend: {
      backgroundImage: (theme) => ({
        veggies: "url('/images/vegetables-2338824_blur.jpg')",
      }),
      zIndex: {
        "-50": "-50",
      },
      minHeight: {
        80: "20rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
