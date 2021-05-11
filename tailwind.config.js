module.exports = {
  mode: "jit",
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
      gridTemplateRows: {
        "menu-open": "min-content auto",
      },
      boxShadow: {
        md: "0 4px 6px 1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
}
