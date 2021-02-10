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
      dark: "#5F6F81",
      shadow: "#e0dddd2e",
      shadow2: "#a9a9b524",
    },
    backgroundColor: (theme) => ({
      primary: "#003a8c",
      secondary: "#1896e0",
      white: "#ffffff",
      shadow: "#e0dddd2e",
      shadow2: "#a9a9b524",
      blueLight: "#95ceff69",
    }),

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
