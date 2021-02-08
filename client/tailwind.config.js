module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Roboto"],
    },
    textColor: {
      primary: "#003a8c",
      secondary: "#1896e0",
    },
    backgroundColor: (theme) => ({
      primary: "#003a8c",
      secondary: "#1896e0",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}